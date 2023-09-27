/*
Copyright 2023 The Tekton Authors
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/* istanbul ignore file */

import React, { Suspense, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom-v5-compat';
import yaml from 'js-yaml';
import { ALL_NAMESPACES, urls, useTitleSync } from '@tektoncd/dashboard-utils';
import { Loading } from '@tektoncd/dashboard-components';
import { useIntl } from 'react-intl';
import {
  createCustomRunRaw,
  generateNewCustomRunPayload,
  getCustomRunPayload,
  useCustomRun,
  useSelectedNamespace
} from '../../api';

const YAMLEditor = React.lazy(() => import('../YAMLEditor'));

const initialState = {
  creating: false,
  kind: 'CustomRun',
  labels: [],
  params: {},
  validationError: false,
  validCustomRunName: true
};

function CreateCustomRun() {
  const intl = useIntl();
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedNamespace: defaultNamespace } = useSelectedNamespace();

  function getCustomRunName() {
    const urlSearchParams = new URLSearchParams(location.search);
    return urlSearchParams.get('customRunName') || '';
  }

  function getNamespace() {
    const urlSearchParams = new URLSearchParams(location.search);
    return (
      urlSearchParams.get('namespace') ||
      (defaultNamespace !== ALL_NAMESPACES ? defaultNamespace : '')
    );
  }

  const [{ kind, labels, namespace, params }] = useState({
    ...initialState,
    customRef: '',
    kind: 'Custom',
    namespace: getNamespace()
  });

  useTitleSync({
    page: intl.formatMessage({
      id: 'dashboard.createCustomRun.title',
      defaultMessage: 'Create CustomRun'
    })
  });

  function handleCloseYAMLEditor() {
    let url = urls.customRuns.all();
    if (defaultNamespace && defaultNamespace !== ALL_NAMESPACES) {
      url = urls.customRuns.byNamespace({ namespace: defaultNamespace });
    }
    navigate(url);
  }

  function handleCreate({ resource }) {
    const resourceNamespace = resource?.metadata?.namespace;
    return createCustomRunRaw({
      namespace: resourceNamespace,
      payload: resource
    }).then(() => {
      navigate(urls.customRuns.byNamespace({ namespace: resourceNamespace }));
    });
  }

  const externalCustomRunName = getCustomRunName();
  if (externalCustomRunName) {
    const { data: customRunObject, isLoading } = useCustomRun(
      {
        name: externalCustomRunName,
        namespace: getNamespace()
      },
      { disableWebSocket: true }
    );
    let payloadYaml = null;
    if (customRunObject) {
      const { payload } = generateNewCustomRunPayload({
        customRun: customRunObject,
        rerun: false
      });
      payloadYaml = yaml.dump(payload);
    }
    const loadingMessage = intl.formatMessage(
      {
        id: 'dashboard.loading.resource',
        defaultMessage: 'Loading {kind}…'
      },
      { kind: 'CustomRun' }
    );

    return (
      <Suspense fallback={<Loading />}>
        <YAMLEditor
          code={payloadYaml || ''}
          handleClose={handleCloseYAMLEditor}
          handleCreate={handleCreate}
          kind="CustomRun"
          loading={isLoading}
          loadingMessage={loadingMessage}
        />
      </Suspense>
    );
  }

  const customRun = getCustomRunPayload({
    kind,
    labels: labels.reduce((acc, { key, value }) => {
      acc[key] = value;
      return acc;
    }, {}),
    namespace,
    params
  });

  return (
    <Suspense fallback={<Loading />}>
      <YAMLEditor
        code={yaml.dump(customRun)}
        handleClose={handleCloseYAMLEditor}
        handleCreate={handleCreate}
        kind="CustomRun"
      />
    </Suspense>
  );
}

export default CreateCustomRun;

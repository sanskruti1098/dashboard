import{j as i}from"./jsx-runtime-QvtbNqby.js";import{S as n}from"./StepDetails-DOJ4n3ai.js";import{L as l}from"./Log-Cm0WCRSL.js";import"./index-BjzEU6Zr.js";import"./index-kGlasm3i.js";import"./index-BYMUMZMs.js";import"./index-CfoIBI3E.js";import"./usePrefix-BezXHAvh.js";import"./Tabs-gghMQKfC.js";import"./floating-ui.react-zcwMlDfJ.js";import"./index-B0z81K34.js";import"./index-CjLpwf8N.js";import"./index-Dc4QqC9m.js";import"./Tooltip-CPLX6X0E.js";import"./useControllableState-Co_owzu1.js";import"./deprecate-X_RArzr0.js";import"./bucket-2-DqY0dT-j.js";import"./Icon-DeY_WDsw.js";import"./bucket-3-DTnTkg5v.js";import"./DetailsHeader-DxveQ-6v.js";import"./FormattedDuration-CpIuRcpd.js";import"./StatusIcon-B2CmmOh1.js";import"./bucket-16-DEjbltYp.js";import"./Spinner-CYJa59k5.js";import"./bucket-13-CVUcgUn3.js";import"./bucket-18-CNixtB1a.js";import"./bucket-12-D9InpaXv.js";import"./StepDefinition-CAxgBeOn.js";import"./ViewYAML-CKT6AdML.js";import"./Button-DxuibFbN.js";import"./index-ED9P7qmL.js";import"./events-OVwOsPzJ.js";import"./SkeletonText-DhyM3XVj.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-SLCf_n8R.js";import"./bucket-17-ByI71b45.js";import"./bucket-5-B9SDRLCd.js";import"./LogFormat-Dk1Uatww.js";import"./DotSpinner-BSho4s4W.js";const{useArgs:p}=__STORYBOOK_MODULE_PREVIEW_API__;function a({exitCode:e=0}={}){return{terminated:{exitCode:e,reason:"Completed"}}}const g=`
=== demo-pipeline-run-1-build-skaffold-app-2mrdg-pod-59e217: build-step-git-source-skaffold-git-ml8j4 ===
{"level":"info","ts":1553865693.943092,"logger":"fallback-logger","caller":"git-init/main.go:100","msg":"Successfully cloned https://github.com/GoogleContainerTools/skaffold @ \\"master\\" in path \\"/workspace\\""}

=== demo-pipeline-run-1-build-skaffold-app-2mrdg-pod-59e217: build-step-build-and-push ===
\x1B[36mINFO\x1B[0m[0000] Downloading base image golang:1.10.1-alpine3.7
2019/03/29 13:21:34 No matching credentials were found, falling back on anonymous
\x1B[36mINFO\x1B[0m[0001] Executing 0 build triggers
\x1B[36mINFO\x1B[0m[0001] Unpacking rootfs as cmd RUN go build -o /app . requires it.
\x1B[36mINFO\x1B[0m[0010] Taking snapshot of full filesystem...
\x1B[36mINFO\x1B[0m[0015] Using files from context: [/workspace/examples/microservices/leeroy-app/app.go]
\x1B[36mINFO\x1B[0m[0015] COPY app.go .
\x1B[36mINFO\x1B[0m[0015] Taking snapshot of files...
\x1B[36mINFO\x1B[0m[0015] RUN go build -o /app .
\x1B[36mINFO\x1B[0m[0015] cmd: /bin/sh
\x1B[36mINFO\x1B[0m[0015] args: [-c go build -o /app .]
\x1B[36mINFO\x1B[0m[0016] Taking snapshot of full filesystem...
\x1B[36mINFO\x1B[0m[0036] CMD ["./app"]
\x1B[36mINFO\x1B[0m[0036] COPY --from=builder /app .
\x1B[36mINFO\x1B[0m[0036] Taking snapshot of files...
error pushing image: failed to push to destination gcr.io/christiewilson-catfactory/leeroy-app:latest: Get https://gcr.io/v2/token?scope=repository%3Achristiewilson-catfactory%2Fleeroy-app%3Apush%2Cpull&scope=repository%3Alibrary%2Falpine%3Apull&service=gcr.io exit status 1

=== demo-pipeline-run-1-build-skaffold-app-2mrdg-pod-59e217: nop ===
Build successful
`;function m({exitCode:e=0}={}){return i.jsx(l,{fetchLogs:()=>g,stepStatus:a({exitCode:e})})}const X={args:{definition:"this will show the Task.spec or TaskRun.spec.taskSpec",stepName:"build",taskRun:{}},component:n,title:"StepDetails"},t={args:{logContainer:m(),stepStatus:a()},render:e=>{const[,r]=p();return i.jsx(n,{...e,onViewChange:s=>r({view:s})})}},o={args:{logContainer:m({exitCode:1}),stepStatus:a({exitCode:1})},render:e=>{const[,r]=p();return i.jsx(n,{...e,onViewChange:s=>r({view:s})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    logContainer: getLogContainer(),
    stepStatus: getStepStatus()
  },
  render: args => {
    const [, updateArgs] = useArgs();
    return <StepDetails {...args} onViewChange={selectedView => updateArgs({
      view: selectedView
    })} />;
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    logContainer: getLogContainer({
      exitCode: 1
    }),
    stepStatus: getStepStatus({
      exitCode: 1
    })
  },
  render: args => {
    const [, updateArgs] = useArgs();
    return <StepDetails {...args} onViewChange={selectedView => updateArgs({
      view: selectedView
    })} />;
  }
}`,...o.parameters?.docs?.source}}};const Z=["Default","WithWarning"];export{t as Default,o as WithWarning,Z as __namedExportsOrder,X as default};

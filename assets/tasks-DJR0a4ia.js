import{j as x}from"./jsx-runtime-QvtbNqby.js";import{r as C}from"./index-BjzEU6Zr.js";import{g as I}from"./index-CfoIBI3E.js";import{G as D}from"./Graph-BVFBbEoS.js";const T=30,y=200;function A(){return{graph:{children:[],edges:[],id:"root",label:"root",nChildren:0,nParents:0},start:{id:"Start",height:60,label:"Start",nChildren:0,nParents:0,type:"Start",width:60},end:{id:"End",height:60,label:"End",nChildren:0,nParents:0,type:"End",width:60}}}function P(t,a){let e=t&&t.status&&t.status.steps&&t.status.steps.find(i=>i.name===a);return e?(e.terminated?e.terminated.reason==="Completed"?e="success":e.terminated.reason==="Error"&&(e="error"):e.running&&(e="running"),e):null}function Z(t){if(!t)return null;let{status:a}=I(t);switch(a){case"True":a="success";break;case"False":a="error";break;default:a="running"}return a}function b({child:t,graph:a,parent:e,singletonSource:i,singletonTarget:r}){e.ports||(e.ports=[]),t.ports||(t.ports=[]);const o=`${e.id}-`+(i?"pSourceSingleton":`p${e.ports.length}`);e.ports.find(d=>d.id===o)||e.ports.push({id:o});const p=`${t.id}-`+(r?"pTargetSingleton":`p${t.ports.length}`);t.ports.find(d=>d.id===p)||t.ports.push({id:p}),a.edges.push({id:`${e.id}-${t.id}`,source:e.id,sourcePort:o,target:t.id,targetPort:p}),t.nParents++,e.nChildren++}function $({expanded:t,graph:a,pipeline:e,pipelineRun:i,taskRuns:r,tasks:o}){const p=o.reduce((s,n)=>(s[n.metadata.name]=n,s),{}),d=r.reduce((s,n)=>(s[n.metadata.labels["tekton.dev/pipelineTask"]]=n,s),{});return e.spec.tasks.reduce((s,n)=>{const c=p[n.taskRef.name],m=d[n.name],f=Z(m);let k;if(c&&t[n.name]&&c.spec.steps&&c.spec.steps.length>0){const g={id:n.name,label:n.name,children:c.spec.steps.map(u=>{const l={id:`__step__${n.name}__${u.name}`,label:u.name,width:y,height:T,nChildren:0,nParents:0,status:P(m,u.name),type:"Step"};return s[l.id]=l,l}),edges:[],nParents:0,nChildren:0,status:f,type:"Task"};g.children.slice(1).reduce((u,l)=>(b({graph:g,parent:u,child:l}),l),g.children[0]),k=g}else k={id:n.name,label:n.name,width:y,height:T,nChildren:0,nParents:0,status:f,type:"Task"};return s[n.name]=k,a.children.push(k),s},{})}function w({graph:t,nodes:a,parentName:e,childName:i}){const r=a[e],o=a[i];r?b({graph:t,parent:r,child:o}):console.error("parent not found",i)}function S({expanded:t={},pipeline:a,pipelineRun:e,taskRuns:i,tasks:r}){const{graph:o,start:p,end:d}=A(),h=$({expanded:t,graph:o,pipeline:a,pipelineRun:e,taskRuns:i,tasks:r});return a.spec.tasks.forEach(s=>{if(s.runAfter&&s.runAfter.forEach(n=>{w({graph:o,nodes:h,parentName:n,childName:s.name})}),s.resources){const n=c=>{c&&c.forEach(m=>{m.from&&m.from.forEach(f=>{w({graph:o,nodes:h,parentName:f,childName:s.name})})})};n(s.resources.inputs),n(s.resources.outputs)}}),o.children.filter(s=>s.nParents===0).forEach(s=>b({graph:o,parent:p,child:s,singletonSource:!0})),o.children.filter(s=>s.nChildren===0).forEach(s=>b({graph:o,parent:s,child:d,singletonTarget:!0})),o.children.push(p),o.children.push(d),o}class v extends C.Component{state={expanded:{},graph:null};componentDidMount(){this.buildGraph()}componentDidUpdate(a,e){const{expanded:i}=this.state,{expanded:r}=e;i!==r&&this.buildGraph()}onClickTask=a=>{this.setState(({expanded:e})=>({expanded:{...e,[a]:!e[a]}})),this.props.onClickTask(a)};buildGraph(){const{pipeline:a,pipelineRun:e,taskRuns:i,tasks:r}=this.props,{expanded:o}=this.state,p=S({expanded:o,pipeline:a,pipelineRun:e,taskRuns:i,tasks:r});this.setState({graph:p})}render(){const{graph:a}=this.state;return a?x.jsx(D,{graph:a,onClickStep:this.props.onClickStep,onClickTask:this.onClickTask}):null}}v.defaultProps={onClickStep:()=>{},onClickTask:()=>{}};v.__docgenInfo={description:"",methods:[{name:"onClickTask",docblock:null,modifiers:[],params:[{name:"taskName",optional:!1,type:null}],returns:null},{name:"buildGraph",docblock:null,modifiers:[],params:[],returns:null}],displayName:"PipelineGraph",props:{onClickStep:{defaultValue:{value:"() => {}",computed:!1},required:!1},onClickTask:{defaultValue:{value:"() => {}",computed:!1},required:!1}}};const q="tekton.dev/v1alpha1",V="Pipeline",R={annotations:{"kubectl.kubernetes.io/last-applied-configuration":`{"apiVersion":"tekton.dev/v1alpha1","kind":"Pipeline","metadata":{"annotations":{},"name":"demo-pipeline","namespace":"default"},"spec":{"resources":[{"name":"source-repo","type":"git"},{"name":"web-image","type":"image"},{"name":"app-image","type":"image"}],"tasks":[{"name":"skaffold-unit-tests","resources":{"inputs":[{"name":"workspace","resource":"source-repo"}]},"taskRef":{"name":"unit-tests"}},{"name":"build-skaffold-web","params":[{"name":"pathToDockerFile","value":"Dockerfile"},{"name":"pathToContext","value":"/workspace/workspace/examples/microservices/leeroy-web"}],"resources":{"inputs":[{"name":"workspace","resource":"source-repo"}],"outputs":[{"name":"builtImage","resource":"web-image"}]},"runAfter":["skaffold-unit-tests"],"taskRef":{"name":"build-push"}},{"name":"build-skaffold-app","params":[{"name":"pathToDockerFile","value":"Dockerfile"},{"name":"pathToContext","value":"/workspace/workspace/examples/microservices/leeroy-app"}],"resources":{"inputs":[{"name":"workspace","resource":"source-repo"}],"outputs":[{"name":"builtImage","resource":"app-image"}]},"runAfter":["skaffold-unit-tests"],"taskRef":{"name":"build-push"}},{"name":"deploy-app","params":[{"name":"path","value":"/workspace/workspace/examples/microservices/leeroy-app/kubernetes/deployment.yaml"},{"name":"yqArg","value":"-d1"},{"name":"yamlPathToImage","value":"spec.template.spec.containers[0].image"}],"resources":{"inputs":[{"name":"workspace","resource":"source-repo"},{"from":["build-skaffold-app"],"name":"image","resource":"app-image"}]},"taskRef":{"name":"demo-deploy-kubectl"}},{"name":"deploy-web","params":[{"name":"path","value":"/workspace/workspace/examples/microservices/leeroy-web/kubernetes/deployment.yaml"},{"name":"yqArg","value":"-d1"},{"name":"yamlPathToImage","value":"spec.template.spec.containers[0].image"}],"resources":{"inputs":[{"name":"workspace","resource":"source-repo"},{"from":["build-skaffold-web"],"name":"image","resource":"web-image"}]},"taskRef":{"name":"demo-deploy-kubectl"}}]}}
`},creationTimestamp:"2019-09-06T13:50:58Z",generation:1,name:"demo-pipeline",namespace:"default",resourceVersion:"8757",selfLink:"/apis/tekton.dev/v1alpha1/namespaces/default/pipelines/demo-pipeline",uid:"5ad77b29-d0ad-11e9-b992-025000000001"},F={resources:[{name:"source-repo",type:"git"},{name:"web-image",type:"image"},{name:"app-image",type:"image"}],tasks:[{name:"skaffold-unit-tests",resources:{inputs:[{name:"workspace",resource:"source-repo"}]},taskRef:{name:"unit-tests"}},{name:"build-skaffold-web",params:[{name:"pathToDockerFile",value:"Dockerfile"},{name:"pathToContext",value:"/workspace/workspace/examples/microservices/leeroy-web"}],resources:{inputs:[{name:"workspace",resource:"source-repo"}],outputs:[{name:"builtImage",resource:"web-image"}]},runAfter:["skaffold-unit-tests"],taskRef:{name:"build-push"}},{name:"build-skaffold-app",params:[{name:"pathToDockerFile",value:"Dockerfile"},{name:"pathToContext",value:"/workspace/workspace/examples/microservices/leeroy-app"}],resources:{inputs:[{name:"workspace",resource:"source-repo"}],outputs:[{name:"builtImage",resource:"app-image"}]},runAfter:["skaffold-unit-tests"],taskRef:{name:"build-push"}},{name:"deploy-app",params:[{name:"path",value:"/workspace/workspace/examples/microservices/leeroy-app/kubernetes/deployment.yaml"},{name:"yqArg",value:"-d1"},{name:"yamlPathToImage",value:"spec.template.spec.containers[0].image"}],resources:{inputs:[{name:"workspace",resource:"source-repo"},{from:["build-skaffold-app"],name:"image",resource:"app-image"}]},taskRef:{name:"demo-deploy-kubectl"}},{name:"deploy-web",params:[{name:"path",value:"/workspace/workspace/examples/microservices/leeroy-web/kubernetes/deployment.yaml"},{name:"yqArg",value:"-d1"},{name:"yamlPathToImage",value:"spec.template.spec.containers[0].image"}],resources:{inputs:[{name:"workspace",resource:"source-repo"},{from:["build-skaffold-web"],name:"image",resource:"web-image"}]},taskRef:{name:"demo-deploy-kubectl"}}]},B={apiVersion:q,kind:V,metadata:R,spec:F},G="tekton.dev/v1alpha1",E="PipelineRun",j={annotations:{"kubectl.kubernetes.io/last-applied-configuration":`{"apiVersion":"tekton.dev/v1alpha1","kind":"Pipeline","metadata":{"annotations":{},"name":"demo-pipeline","namespace":"default"},"spec":{"resources":[{"name":"source-repo","type":"git"},{"name":"web-image","type":"image"},{"name":"app-image","type":"image"}],"tasks":[{"name":"skaffold-unit-tests","resources":{"inputs":[{"name":"workspace","resource":"source-repo"}]},"taskRef":{"name":"unit-tests"}},{"name":"build-skaffold-web","params":[{"name":"pathToDockerFile","value":"Dockerfile"},{"name":"pathToContext","value":"/workspace/workspace/examples/microservices/leeroy-web"}],"resources":{"inputs":[{"name":"workspace","resource":"source-repo"}],"outputs":[{"name":"builtImage","resource":"web-image"}]},"runAfter":["skaffold-unit-tests"],"taskRef":{"name":"build-push"}},{"name":"build-skaffold-app","params":[{"name":"pathToDockerFile","value":"Dockerfile"},{"name":"pathToContext","value":"/workspace/workspace/examples/microservices/leeroy-app"}],"resources":{"inputs":[{"name":"workspace","resource":"source-repo"}],"outputs":[{"name":"builtImage","resource":"app-image"}]},"runAfter":["skaffold-unit-tests"],"taskRef":{"name":"build-push"}},{"name":"deploy-app","params":[{"name":"path","value":"/workspace/workspace/examples/microservices/leeroy-app/kubernetes/deployment.yaml"},{"name":"yqArg","value":"-d1"},{"name":"yamlPathToImage","value":"spec.template.spec.containers[0].image"}],"resources":{"inputs":[{"name":"workspace","resource":"source-repo"},{"from":["build-skaffold-app"],"name":"image","resource":"app-image"}]},"taskRef":{"name":"demo-deploy-kubectl"}},{"name":"deploy-web","params":[{"name":"path","value":"/workspace/workspace/examples/microservices/leeroy-web/kubernetes/deployment.yaml"},{"name":"yqArg","value":"-d1"},{"name":"yamlPathToImage","value":"spec.template.spec.containers[0].image"}],"resources":{"inputs":[{"name":"workspace","resource":"source-repo"},{"from":["build-skaffold-web"],"name":"image","resource":"web-image"}]},"taskRef":{"name":"demo-deploy-kubectl"}}]}}
`},creationTimestamp:"2019-09-06T13:50:58Z",generation:1,labels:{"tekton.dev/pipeline":"demo-pipeline"},name:"demo-pipeline-run-6",namespace:"default",resourceVersion:"9140",selfLink:"/apis/tekton.dev/v1alpha1/namespaces/default/pipelineruns/demo-pipeline-run-6",uid:"5ad9682e-d0ad-11e9-b992-025000000001"},N={pipelineRef:{name:"demo-pipeline"},podTemplate:{},serviceAccountName:"default",timeout:"1h0m0s"},_={completionTime:"2019-09-06T13:53:50Z",conditions:[{lastTransitionTime:"2019-09-06T13:53:35Z",message:"TaskRun demo-pipeline-run-6-build-skaffold-app-k4wxt has failed",reason:"Failed",status:"False",type:"Succeeded"}],startTime:"2019-09-06T13:50:58Z"},H={apiVersion:G,kind:E,metadata:j,spec:N,status:_},M=[{apiVersion:"tekton.dev/v1beta1",kind:"TaskRun",metadata:{name:"demo-pipeline-run-6-build-skaffold-app-k4wxt",labels:{"tekton.dev/pipelineTask":"build-skaffold-app"},namespace:"default",uid:"10bd204d-0179-43f3-b920-65c376a3996d"},status:{completionTime:"2019-09-06T13:53:35Z",conditions:[{lastTransitionTime:"2019-09-06T13:53:35Z",message:'"step-build-and-push" exited with code 1 (image: "docker-pullable://gcr.io/kaniko-project/executor@sha256:d9fe474f80b73808dc12b54f45f5fc90f7856d9fc699d4a5e79d968a1aef1a72"); for logs run: kubectl -n default logs demo-pipeline-run-6-build-skaffold-app-k4wxt-pod-7727d4 -c step-build-and-push',reason:"Failed",status:"False",type:"Succeeded"}],podName:"demo-pipeline-run-6-build-skaffold-app-k4wxt-pod-7727d4",startTime:"2019-09-06T13:51:11Z",steps:[{container:"step-build-and-push",imageID:"docker-pullable://gcr.io/kaniko-project/executor@sha256:d9fe474f80b73808dc12b54f45f5fc90f7856d9fc699d4a5e79d968a1aef1a72",name:"build-and-push",terminated:{containerID:"docker://6f0e5962bb90ce667a0ed119a46e1092baf14d7f1914c74e75c8b3234a7c4f0f",exitCode:1,finishedAt:"2019-09-06T13:53:34Z",reason:"Error",startedAt:"2019-09-06T13:51:15Z"}},{container:"step-create-dir-builtimage-wjkl9",imageID:"docker-pullable://gcr.io/tekton-releases/github.com/tektoncd/pipeline/cmd/bash@sha256:b183305a486aafbf207cf4dd969b38645b04e6fd18470f32fc7927d0a8035581",name:"create-dir-builtimage-wjkl9",terminated:{containerID:"docker://d1fbb5ddcd0de28ddb3ed117a3497a888de5bd2ffe1d345bfef983730522c32a",exitCode:0,finishedAt:"2019-09-06T13:51:19Z",reason:"Completed",startedAt:"2019-09-06T13:51:15Z"}},{container:"step-git-source-skaffold-git-7vl6v",imageID:"docker-pullable://gcr.io/tekton-releases/github.com/tektoncd/pipeline/cmd/git-init@sha256:2aaaecd06986c7705f68f19435b8a913ef6701ac6b961df16d1535f45503cea5",name:"git-source-skaffold-git-7vl6v",terminated:{containerID:"docker://dd633d2adc5d9591515d70a71b83f7aded0bd2940590d27f7f446b0373352dda",exitCode:0,finishedAt:"2019-09-06T13:51:24Z",reason:"Completed",startedAt:"2019-09-06T13:51:15Z"}},{container:"step-image-digest-exporter-z5xdt",imageID:"docker-pullable://gcr.io/tekton-releases/github.com/tektoncd/pipeline/cmd/imagedigestexporter@sha256:b86cfca770c60d6965dced6c36745f04cdfea2680b517fb067828e68292f13be",name:"image-digest-exporter-z5xdt",terminated:{containerID:"docker://699eb9aa653f8a7f1a6f8e58c70f41301a8c6630187a8551f176b15ec093c762",exitCode:0,finishedAt:"2019-09-06T13:53:34Z",reason:"Completed",startedAt:"2019-09-06T13:51:15Z"}}]}},{apiVersion:"tekton.dev/v1beta1",kind:"TaskRun",metadata:{name:"demo-pipeline-run-6-build-skaffold-web-pttsw",labels:{"tekton.dev/pipelineTask":"build-skaffold-web"},namespace:"default",uid:"a886cfe5-2fee-4619-881f-ce642c3f379e"},status:{completionTime:"2019-09-06T13:53:50Z",conditions:[{lastTransitionTime:"2019-09-06T13:53:50Z",message:'"step-build-and-push" exited with code 1 (image: "docker-pullable://gcr.io/kaniko-project/executor@sha256:d9fe474f80b73808dc12b54f45f5fc90f7856d9fc699d4a5e79d968a1aef1a72"); for logs run: kubectl -n default logs demo-pipeline-run-6-build-skaffold-web-pttsw-pod-87a900 -c step-build-and-push',reason:"Failed",status:"False",type:"Succeeded"}],podName:"demo-pipeline-run-6-build-skaffold-web-pttsw-pod-87a900",startTime:"2019-09-06T13:51:11Z",steps:[{container:"step-build-and-push",imageID:"docker-pullable://gcr.io/kaniko-project/executor@sha256:d9fe474f80b73808dc12b54f45f5fc90f7856d9fc699d4a5e79d968a1aef1a72",name:"build-and-push",terminated:{containerID:"docker://28a0348990a8a10f97850f0dad18327fdbba4ab9aeb49fb7c0de490c746ed97a",exitCode:1,finishedAt:"2019-09-06T13:53:50Z",reason:"Error",startedAt:"2019-09-06T13:51:15Z"}},{container:"step-create-dir-builtimage-5trjz",imageID:"docker-pullable://gcr.io/tekton-releases/github.com/tektoncd/pipeline/cmd/bash@sha256:b183305a486aafbf207cf4dd969b38645b04e6fd18470f32fc7927d0a8035581",name:"create-dir-builtimage-5trjz",terminated:{containerID:"docker://32d6ef980a0cba095616668a26b3e935957511334fbb544f603db50c37c769ad",exitCode:0,finishedAt:"2019-09-06T13:51:19Z",reason:"Completed",startedAt:"2019-09-06T13:51:15Z"}},{container:"step-git-source-skaffold-git-gtn7g",imageID:"docker-pullable://gcr.io/tekton-releases/github.com/tektoncd/pipeline/cmd/git-init@sha256:2aaaecd06986c7705f68f19435b8a913ef6701ac6b961df16d1535f45503cea5",name:"git-source-skaffold-git-gtn7g",terminated:{containerID:"docker://222ab8cb8eead79e50c1bff7eb970d61e32c81153af56d30b35cf3ea59a0a0d0",exitCode:0,finishedAt:"2019-09-06T13:51:24Z",reason:"Completed",startedAt:"2019-09-06T13:51:15Z"}},{container:"step-image-digest-exporter-qsn2q",imageID:"docker-pullable://gcr.io/tekton-releases/github.com/tektoncd/pipeline/cmd/imagedigestexporter@sha256:b86cfca770c60d6965dced6c36745f04cdfea2680b517fb067828e68292f13be",name:"image-digest-exporter-qsn2q",terminated:{containerID:"docker://ab7371576ec769193aaf825057e7bcce82b30c9cb607f1478b01c46459ab737e",exitCode:0,finishedAt:"2019-09-06T13:53:50Z",reason:"Completed",startedAt:"2019-09-06T13:51:15Z"}}]}},{apiVersion:"tekton.dev/v1beta1",kind:"TaskRun",metadata:{name:"demo-pipeline-run-6-skaffold-unit-tests-jgt8z",labels:{"tekton.dev/pipelineTask":"skaffold-unit-tests"},namespace:"default",uid:"236bdcb6-6ac7-45aa-8cb6-2ff5ccb254b7"},status:{completionTime:"2019-09-06T13:51:11Z",conditions:[{lastTransitionTime:"2019-09-06T13:51:11Z",message:"All Steps have completed executing",reason:"Succeeded",status:"True",type:"Succeeded"}],podName:"demo-pipeline-run-6-skaffold-unit-tests-jgt8z-pod-a6ca01",startTime:"2019-09-06T13:50:58Z",steps:[{container:"step-run-tests",imageID:"docker-pullable://golang@sha256:30101c5d45c7b68c2233962251da3d599417055e5ad73b84b7c4323b11caf57e",name:"run-tests",terminated:{containerID:"docker://a5f026f401e09f36fb90906cb9e420cd643d8c0fd016bc11bdec1299dd25ffaf",exitCode:0,finishedAt:"2019-09-06T13:51:10Z",reason:"Completed",startedAt:"2019-09-06T13:51:04Z"}},{container:"step-git-source-skaffold-git-lq4cr",imageID:"docker-pullable://gcr.io/tekton-releases/github.com/tektoncd/pipeline/cmd/git-init@sha256:2aaaecd06986c7705f68f19435b8a913ef6701ac6b961df16d1535f45503cea5",name:"git-source-skaffold-git-lq4cr",terminated:{containerID:"docker://9409bee805ca26b59997c5b17636f5327fd095416979e4689a26f79165da1b03",exitCode:0,finishedAt:"2019-09-06T13:51:10Z",reason:"Completed",startedAt:"2019-09-06T13:51:02Z"}}]}}],U=[{apiVersion:"tekton.dev/v1alpha1",kind:"Task",metadata:{annotations:{"kubectl.kubernetes.io/last-applied-configuration":`{"apiVersion":"tekton.dev/v1alpha1","kind":"Task","metadata":{"annotations":{},"name":"build-push","namespace":"default"},"spec":{"inputs":{"params":[{"default":"/workspace/workspace/Dockerfile","description":"The path to the dockerfile to build","name":"pathToDockerFile"},{"default":"/workspace/workspace","description":"The build context used by Kaniko (https://github.com/GoogleContainerTools/kaniko#kaniko-build-contexts)","name":"pathToContext"}],"resources":[{"name":"workspace","type":"git"}]},"outputs":{"resources":[{"name":"builtImage","type":"image"}]},"steps":[{"args":["--dockerfile=$(inputs.params.pathToDockerFile)","--destination=$(outputs.resources.builtImage.url)","--context=$(inputs.params.pathToContext)"],"command":["/kaniko/executor"],"env":[{"name":"DOCKER_CONFIG","value":"/builder/home/.docker/"}],"image":"gcr.io/kaniko-project/executor:v0.9.0","name":"build-and-push"}]}}
`},creationTimestamp:"2019-09-06T13:50:58Z",generation:1,name:"build-push",namespace:"default",resourceVersion:"8755",selfLink:"/apis/tekton.dev/v1alpha1/namespaces/default/tasks/build-push",uid:"5ad324b5-d0ad-11e9-b992-025000000001"},spec:{inputs:{params:[{default:"/workspace/workspace/Dockerfile",description:"The path to the dockerfile to build",name:"pathToDockerFile",type:"string"},{default:"/workspace/workspace",description:"The build context used by Kaniko (https://github.com/GoogleContainerTools/kaniko#kaniko-build-contexts)",name:"pathToContext",type:"string"}],resources:[{name:"workspace",outputImageDir:"",targetPath:"",type:"git"}]},outputs:{resources:[{name:"builtImage",outputImageDir:"/builder/home/image-outputs/builtImage",targetPath:"",type:"image"}]},steps:[{args:["--dockerfile=$(inputs.params.pathToDockerFile)","--destination=$(outputs.resources.builtImage.url)","--context=$(inputs.params.pathToContext)"],command:["/kaniko/executor"],env:[{name:"DOCKER_CONFIG",value:"/builder/home/.docker/"}],image:"gcr.io/kaniko-project/executor:v0.9.0",name:"build-and-push",resources:{}}]}},{apiVersion:"tekton.dev/v1alpha1",kind:"Task",metadata:{annotations:{"kubectl.kubernetes.io/last-applied-configuration":`{"apiVersion":"tekton.dev/v1alpha1","kind":"Task","metadata":{"annotations":{},"name":"unit-tests","namespace":"default"},"spec":{"inputs":{"resources":[{"name":"workspace","targetPath":"go/src/github.com/GoogleContainerTools/skaffold","type":"git"}]},"steps":[{"args":["pass"],"command":["echo"],"env":[{"name":"GOPATH","value":"/workspace/go"}],"image":"golang","name":"run-tests","workingDir":"/workspace/go/src/github.com/GoogleContainerTools/skaffold"}]}}
`},creationTimestamp:"2019-09-06T13:50:58Z",generation:1,name:"unit-tests",namespace:"default",resourceVersion:"8754",selfLink:"/apis/tekton.dev/v1alpha1/namespaces/default/tasks/unit-tests",uid:"5ad1375e-d0ad-11e9-b992-025000000001"},spec:{inputs:{resources:[{name:"workspace",outputImageDir:"",targetPath:"go/src/github.com/GoogleContainerTools/skaffold",type:"git"}]},steps:[{args:["pass"],command:["echo"],env:[{name:"GOPATH",value:"/workspace/go"}],image:"golang",name:"run-tests",resources:{},workingDir:"/workspace/go/src/github.com/GoogleContainerTools/skaffold"}]}},{apiVersion:"tekton.dev/v1alpha1",kind:"Task",metadata:{annotations:{"kubectl.kubernetes.io/last-applied-configuration":'{"apiVersion":"tekton.dev/v1alpha1","kind":"Task","metadata":{"annotations":{},"name":"demo-deploy-kubectl","namespace":"default"},"spec":{"inputs":{"params":[{"description":"Path to the manifest to apply","name":"path"},{"description":"Okay this is a hack, but I didn\'t feel right hard-codeing `-d1` down below","name":"yqArg"},{"description":"The path to the image to replace in the yaml manifest (arg to yq)","name":"yamlPathToImage"}],"resources":[{"name":"workspace","type":"git"},{"name":"image","type":"image"}]},"steps":[{"args":["w","-i","$(inputs.params.yqArg)","$(inputs.params.path)","$(inputs.params.yamlPathToImage)","$(inputs.resources.image.url)"],"command":["yq"],"image":"mikefarah/yq","name":"replace-image"},{"args":["apply","-f","$(inputs.params.path)"],"command":["kubectl"],"image":"lachlanevenson/k8s-kubectl","name":"run-kubectl"}]}}\n'},creationTimestamp:"2019-09-06T13:50:58Z",generation:1,name:"demo-deploy-kubectl",namespace:"default",resourceVersion:"8756",selfLink:"/apis/tekton.dev/v1alpha1/namespaces/default/tasks/demo-deploy-kubectl",uid:"5ad53893-d0ad-11e9-b992-025000000001"},spec:{inputs:{params:[{description:"Path to the manifest to apply",name:"path",type:"string"},{description:"Okay this is a hack, but I didn't feel right hard-codeing `-d1` down below",name:"yqArg",type:"string"},{description:"The path to the image to replace in the yaml manifest (arg to yq)",name:"yamlPathToImage",type:"string"}],resources:[{name:"workspace",outputImageDir:"",targetPath:"",type:"git"},{name:"image",outputImageDir:"",targetPath:"",type:"image"}]},steps:[{args:["w","-i","$(inputs.params.yqArg)","$(inputs.params.path)","$(inputs.params.yamlPathToImage)","$(inputs.resources.image.url)"],command:["yq"],image:"mikefarah/yq",name:"replace-image",resources:{}},{args:["apply","-f","$(inputs.params.path)"],command:["kubectl"],image:"lachlanevenson/k8s-kubectl",name:"run-kubectl",resources:{}}]}}];export{v as P,H as a,U as b,B as p,M as t};

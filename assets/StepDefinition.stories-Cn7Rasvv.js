import{S as t}from"./StepDefinition-CAxgBeOn.js";import"./jsx-runtime-QvtbNqby.js";import"./index-BjzEU6Zr.js";import"./index-BYMUMZMs.js";import"./ViewYAML-CKT6AdML.js";import"./index-kGlasm3i.js";import"./index-CfoIBI3E.js";import"./usePrefix-BezXHAvh.js";const u={component:t,title:"StepDefinition"},e={},o={args:{definition:{args:["build","-f","${params.pathToDockerFile}","-t","${resources.outputs.builtImage.url}","${params.pathToContext}"],command:["docker"],image:"docker",name:"build",volumeMounts:[{mountPath:"/var/run/docker.sock",name:"docker-socket"}]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    definition: {
      args: ['build', '-f', '\${params.pathToDockerFile}', '-t', '\${resources.outputs.builtImage.url}', '\${params.pathToContext}'],
      command: ['docker'],
      image: 'docker',
      name: 'build',
      volumeMounts: [{
        mountPath: '/var/run/docker.sock',
        name: 'docker-socket'
      }]
    }
  }
}`,...o.parameters?.docs?.source}}};const d=["Default","WithContent"];export{e as Default,o as WithContent,d as __namedExportsOrder,u as default};

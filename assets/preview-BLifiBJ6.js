const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DocsRenderer-PKQXORMH-B3nCt-wC.js","./iframe-BMtEcZmm.js","./index-BjzEU6Zr.js","./react-16-BglAxzn9.js","./index-B0z81K34.js","./index-EJUTLHX6.js","./index-DjkIyJBj.js","./extends-CCbyfPlC.js","./inheritsLoose-SLCf_n8R.js","./index-bs42f1Lw.js","./_commonjs-dynamic-modules-TDtrdbi3.js","./index-DrFu-skq.js"])))=>i.map(i=>d[i]);
import{_ as a}from"./iframe-BMtEcZmm.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-PKQXORMH-B3nCt-wC.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]),import.meta.url);return new e},stories:{filter:e=>(e.tags||[]).filter(r=>_[r]).length===0&&!e.parameters.docs?.disable}}};export{d as parameters};

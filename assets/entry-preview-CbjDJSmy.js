import{R as o,r as s}from"./index-BjzEU6Zr.js";import{u as p,r as d}from"./react-16-BglAxzn9.js";import"./index-B0z81K34.js";var u=Object.defineProperty,h=(r,e)=>{for(var t in e)u(r,t,{get:e[t],enumerable:!0})};const{global:E}=__STORYBOOK_MODULE_GLOBAL__;var _={};h(_,{mount:()=>w,parameters:()=>y,render:()=>v,renderToCanvas:()=>g});var v=(r,e)=>{let{id:t,component:n}=e;if(!n)throw new Error(`Unable to render story ${t} as the component annotation is missing from the default export`);return o.createElement(n,{...r})},{FRAMEWORK_OPTIONS:O}=E,f=class extends s.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidMount(){let{hasError:r}=this.state,{showMain:e}=this.props;r||e()}componentDidCatch(r){let{showException:e}=this.props;e(r)}render(){let{hasError:r}=this.state,{children:e}=this.props;return r?null:e}},m=O?.strictMode?s.StrictMode:s.Fragment;async function g({storyContext:r,unboundStoryFn:e,showMain:t,showException:n,forceRemount:c},a){let i=o.createElement(f,{showMain:t,showException:n},o.createElement(e,{...r})),l=m?o.createElement(m,null,i):i;return c&&p(a),await d(l,a,r?.parameters?.react?.rootOptions),()=>p(a)}var w=r=>async e=>(e!=null&&(r.originalStoryFn=()=>e),await r.renderToCanvas(),r.canvas),y={renderer:"react"};export{w as mount,y as parameters,v as render,g as renderToCanvas};

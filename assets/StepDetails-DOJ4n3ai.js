import{j as e}from"./jsx-runtime-QvtbNqby.js";import{P as r}from"./index-kGlasm3i.js";import{u as S}from"./index-BYMUMZMs.js";import{a as C,g as D}from"./index-CfoIBI3E.js";import"./usePrefix-BezXHAvh.js";import{T as R,a as V,b as d,c as k,d as p}from"./Tabs-gghMQKfC.js";import{D as y}from"./DetailsHeader-DxveQ-6v.js";import{S as v}from"./StepDefinition-CAxgBeOn.js";const c=["logs","details"],u={onViewChange:()=>{},taskRun:{}},a=({definition:m,logContainer:f,onViewChange:h=u.onViewChange,stepName:x,stepStatus:t,taskRun:n=u.taskRun,view:g})=>{const i=S(),{exitCode:o,reason:b,status:l}=C(t),j=D(n).reason==="TaskRunCancelled"&&l!=="terminated"?"cancelled":l;let s=c.indexOf(g);return s===-1&&(s=0),e.jsxs("div",{className:"tkn--step-details",children:[e.jsx(y,{displayName:x,exitCode:o,hasWarning:o!==0,reason:b,status:j,stepStatus:t,taskRun:n}),e.jsxs(R,{"aria-label":"Step details",onChange:T=>h(c[T.selectedIndex]),selectedIndex:s,children:[e.jsxs(V,{activation:"manual",children:[e.jsx(d,{children:i.formatMessage({id:"dashboard.taskRun.logs",defaultMessage:"Logs"})}),e.jsx(d,{children:i.formatMessage({id:"dashboard.resource.detailsTab",defaultMessage:"Details"})})]}),e.jsxs(k,{children:[e.jsx(p,{children:s===0&&f}),e.jsx(p,{children:s===1&&e.jsx(v,{definition:m})})]})]})]})};a.propTypes={onViewChange:r.func,taskRun:r.shape({})};const E=a;a.__docgenInfo={description:"",methods:[],displayName:"StepDetails",props:{onViewChange:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},taskRun:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"shape",value:{}},required:!1}}};export{E as S};

import{_ as v,m as D,E as W,e as q,s as F}from"./floating-ui.react-zcwMlDfJ.js";import{P as t}from"./index-kGlasm3i.js";import{r as $,R as o}from"./index-BjzEU6Zr.js";import{c as x}from"./index-CjLpwf8N.js";import{u as G}from"./usePrefix-BezXHAvh.js";import{d as C,T as I}from"./deprecate-X_RArzr0.js";import{c as K,P as L,d as Y}from"./Tooltip-CPLX6X0E.js";import{C as Z}from"./bucket-3-DTnTkg5v.js";const j=r=>{let{align:h="bottom-start",className:N,children:n,definition:f,defaultOpen:T=!1,id:s,openOnHover:y,tooltipText:c,triggerClassName:E,...u}=r;const[i,a]=$.useState(T),g=G(),d=K(s);function m(e){i&&D(e,W)&&(e.stopPropagation(),a(!1))}return o.createElement(L,{align:h,className:N,dropShadow:!1,highContrast:!0,onMouseLeave:()=>{a(!1)},onMouseEnter:()=>{y&&a(!0)},onFocus:()=>{a(!0)},open:i},o.createElement("button",v({},u,{className:x(`${g}--definition-term`,E),"aria-controls":d,"aria-expanded":i,onBlur:()=>{a(!1)},onClick:()=>{a(!i)},onKeyDown:m,type:"button"}),n),o.createElement(Y,{className:`${g}--definition-tooltip`,id:d},c??f))};j.propTypes={align:t.oneOf(["top","top-left","top-right","bottom","bottom-left","bottom-right","left","left-bottom","left-top","right","right-bottom","right-top","top-start","top-end","bottom-start","bottom-end","left-end","left-start","right-end","right-start"]),children:t.node.isRequired,className:t.string,defaultOpen:t.bool,definition:t.node.isRequired,id:t.string,openOnHover:t.bool,tooltipText:C(t.node),triggerClassName:t.string};const J=r=>r?r?.offsetWidth<r?.scrollWidth:!1;var z;const Q=F(),P={red:"Red",magenta:"Magenta",purple:"Purple",blue:"Blue",cyan:"Cyan",teal:"Teal",green:"Green",gray:"Gray","cool-gray":"Cool-Gray","warm-gray":"Warm-Gray","high-contrast":"High-Contrast",outline:"Outline"},U={sm:"sm",md:"md",lg:"lg"},V=o.forwardRef(function(h,N){let{children:n,className:f,id:T,type:s,filter:y,renderIcon:c,title:E="Clear filter",disabled:u,onClose:i,size:a,as:g,slug:d,...m}=h;const e=G(),O=$.useRef(),B=q([N,O]),k=T||`tag-${Q()}`,[R,H]=$.useState(!1);$.useLayoutEffect(()=>{const l=O.current?.getElementsByClassName(`${e}--tag__label`)[0];H(J(l))},[e,O]);const b=[`${e}--tag--selectable`,`${e}--tag--filter`,`${e}--tag--operational`].some(l=>f?.includes(l)),S=x(`${e}--tag`,f,{[`${e}--tag--disabled`]:u,[`${e}--tag--filter`]:y,[`${e}--tag--${a}`]:a,[`${e}--layout--size-${a}`]:a,[`${e}--tag--${s}`]:s,[`${e}--tag--interactive`]:m.onClick&&!b&&R}),p=s!==void 0&&s in Object.keys(P)?P[s]:"",M=l=>{i&&(l.stopPropagation(),i(l))};let _;if(d&&d.type?.displayName==="Slug"&&!b&&(_=o.cloneElement(d,{size:"sm",kind:"inline"})),y){const l=g??"div";return o.createElement(l,v({className:S,id:k},m),c&&a!=="sm"?o.createElement("div",{className:`${e}--tag__custom-icon`},o.createElement(c,null)):"",o.createElement(I,{title:typeof n=="string"?n:void 0,className:`${e}--tag__label`},n??p),_,o.createElement("button",{type:"button",className:`${e}--tag__close-icon`,onClick:M,disabled:u,"aria-label":E,title:E},z||(z=o.createElement(Z,null))))}const A=g??(m.onClick||f?.includes(`${e}--tag--operational`)?"button":"div"),w=x({[`${e}--tag__label`]:!b,[`${e}--tag--${s}`]:s&&!b});return o.createElement(A,v({ref:B,disabled:u,className:S,id:k},m),c&&a!=="sm"?o.createElement("div",{className:`${e}--tag__custom-icon`},o.createElement(c,null)):"",R&&!b?o.createElement(j,{openOnHover:!1,definition:n??p,className:`${e}--definition--tooltip--tag`},o.createElement(I,{title:n??p,className:w},n??p)):o.createElement(I,{title:n??p,className:w},n??p),_)});V.propTypes={as:t.elementType,children:t.node,className:t.string,disabled:t.bool,filter:C(t.bool),id:t.string,onClose:C(t.func),renderIcon:t.oneOfType([t.func,t.object]),size:t.oneOf(Object.keys(U)),slug:t.node,title:C(t.string),type:t.oneOf(Object.keys(P))};export{V as T};

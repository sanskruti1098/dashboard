import{_ as v,m as te,a as ne,E as ie,T as oe}from"./floating-ui.react-zcwMlDfJ.js";import{P as e}from"./index-kGlasm3i.js";import{r as p,R as t}from"./index-BjzEU6Zr.js";import{d as I,T as B}from"./deprecate-X_RArzr0.js";import{c as k}from"./index-CjLpwf8N.js";import{B as ae}from"./Button-DxuibFbN.js";import{u as M,a as G}from"./Tooltip-CPLX6X0E.js";import{u as w}from"./usePrefix-BezXHAvh.js";import{n as H}from"./noopFn-g4z370MD.js";import{u as se,w as le,a as re}from"./index-DZApqWLJ.js";import{C as ce}from"./bucket-3-DTnTkg5v.js";import{E as ue}from"./bucket-6-CpbjS_H5.js";import{C as fe}from"./bucket-2-DqY0dT-j.js";import{W as de,a as me}from"./bucket-18-CNixtB1a.js";import{I as pe,a as be}from"./bucket-9-DuBbq6Ld.js";function ge(i,o){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const a=s=>{const l=i.current&&document.activeElement===i.current||i.current.contains(document.activeElement);ne(s,[ie])&&r&&l&&o(s)};G(()=>(document.addEventListener("keydown",a,!1),()=>document.removeEventListener("keydown",a,!1)))}function J(i){let{children:o,className:r,onClick:a,inline:s,...l}=i;const d=w(),c=k(r,{[`${d}--actionable-notification__action-button`]:!0});return t.createElement(ae,v({className:c,kind:s?"ghost":"tertiary",onClick:a,size:"sm"},l),o)}J.propTypes={children:e.node,className:e.string,inline:e.bool,onClick:e.func};function D(i){let{"aria-label":o="close notification",ariaLabel:r,className:a,type:s="button",renderIcon:l=ce,name:d,notificationType:c="toast",...N}=i;const C=w(),m=k(a,{[`${C}--${c}-notification__close-button`]:c}),b=k({[`${C}--${c}-notification__close-icon`]:c});return t.createElement("button",v({},N,{type:s,"aria-label":r||o,title:r||o,className:m}),l&&t.createElement(l,{className:b,name:d}))}D.propTypes={"aria-label":e.string,ariaLabel:I(e.string),className:e.string,name:e.string,notificationType:e.oneOf(["toast","inline","actionable"]),renderIcon:e.oneOfType([e.func,e.object]),type:e.string};const Ce={error:ue,success:fe,warning:de,"warning-alt":me,info:pe,"info-square":be};function A(i){let{iconDescription:o,kind:r,notificationType:a}=i;const s=w(),l=Ce[r];return l?t.createElement(l,{className:`${s}--${a}-notification__icon`,size:20},t.createElement("title",null,o)):null}A.propTypes={iconDescription:e.string.isRequired,kind:e.oneOf(["error","success","warning","warning-alt","info","info-square"]).isRequired,notificationType:e.oneOf(["inline","toast"]).isRequired};e.string,I(e.string),e.string,e.node,e.string,e.bool,e.oneOf(["error","info","info-square","success","warning","warning-alt"]),e.bool,e.func,e.func,e.oneOf(["alert","log","status"]),e.string,e.string,e.number,e.string;function Ne(i){let{["aria-label"]:o,children:r,title:a,subtitle:s,role:l="status",onClose:d,onCloseButtonClick:c=H,statusIconDescription:N,className:C,kind:m="error",lowContrast:b,hideCloseButton:g=!1,...x}=i;const[$,F]=p.useState(!0),f=w(),E=k(C,{[`${f}--inline-notification`]:!0,[`${f}--inline-notification--low-contrast`]:b,[`${f}--inline-notification--${m}`]:m,[`${f}--inline-notification--hide-close-button`]:g}),_=p.useRef(null),O=n=>{(!d||d(n)!==!1)&&F(!1)},h=p.useRef(null);function L(n){c(n),O(n)}return $?t.createElement("div",v({ref:h},x,{role:l,className:E}),t.createElement("div",{className:`${f}--inline-notification__details`},t.createElement(A,{notificationType:"inline",kind:m,iconDescription:N||`${m} icon`}),t.createElement("div",{ref:_,className:`${f}--inline-notification__text-wrapper`},a&&t.createElement(B,{as:"div",className:`${f}--inline-notification__title`},a),s&&t.createElement(B,{as:"div",className:`${f}--inline-notification__subtitle`},s),r)),!g&&t.createElement(D,{notificationType:"inline",onClick:L,"aria-hidden":"true","aria-label":o,tabIndex:-1})):null}Ne.propTypes={"aria-label":e.string,children:e.node,className:e.string,hideCloseButton:e.bool,kind:e.oneOf(["error","info","info-square","success","warning","warning-alt"]),lowContrast:e.bool,onClose:e.func,onCloseButtonClick:e.func,role:e.oneOf(["alert","log","status"]),statusIconDescription:e.string,subtitle:e.string,title:e.string};function Ee(i){let{actionButtonLabel:o,["aria-label"]:r,ariaLabel:a,children:s,role:l="alertdialog",onActionButtonClick:d,onClose:c,onCloseButtonClick:N=H,statusIconDescription:C,className:m,inline:b=!1,kind:g="error",lowContrast:x,hideCloseButton:$=!1,hasFocus:F=!0,closeOnEscape:f=!0,title:E,subtitle:_,...O}=i;const[h,L]=p.useState(!0),n=w(),R=M("actionable-notification"),q=M("actionable-notification-subtitle"),Q=k(m,{[`${n}--actionable-notification`]:!0,[`${n}--actionable-notification--toast`]:!b,[`${n}--actionable-notification--low-contrast`]:x,[`${n}--actionable-notification--${g}`]:g,[`${n}--actionable-notification--hide-close-button`]:$}),S=p.useRef(null),W=p.useRef(null),K=p.useRef(null),y=p.useRef(null),T=se("enable-experimental-focus-wrap-without-sentinels");G(()=>{F&&document.querySelector("button.cds--actionable-notification__action-button")?.focus()});function U(u){let{target:z,relatedTarget:j}=u;if(h&&j&&z){const{current:Y}=S,{current:Z}=W,{current:ee}=K;le({bodyNode:Y,startTrapNode:Z,endTrapNode:ee,currentActiveNode:j,oldActiveNode:z})}}function V(u){h&&te(u,oe)&&y.current&&re({containerNode:y.current,currentActiveNode:u.target,event:u})}const X=u=>{(!c||c(u)!==!1)&&L(!1)};ge(y,P,f);function P(u){N(u),X(u)}return h?t.createElement("div",v({},O,{ref:y,role:l,className:Q,"aria-labelledby":E?R:q,onBlur:T?()=>{}:U,onKeyDown:T?V:()=>{}}),!T&&t.createElement("span",{ref:W,tabIndex:0,role:"link",className:`${n}--visually-hidden`},"Focus sentinel"),t.createElement("div",{className:`${n}--actionable-notification__details`},t.createElement(A,{notificationType:b?"inline":"toast",kind:g,iconDescription:C||`${g} icon`}),t.createElement("div",{className:`${n}--actionable-notification__text-wrapper`},t.createElement("div",{className:`${n}--actionable-notification__content`},E&&t.createElement(B,{as:"div",className:`${n}--actionable-notification__title`,id:R},E),_&&t.createElement(B,{as:"div",className:`${n}--actionable-notification__subtitle`,id:q},_),s))),t.createElement("div",{className:`${n}--actionable-notification__button-wrapper`,ref:S},o&&t.createElement(J,{onClick:d,inline:b},o),!$&&t.createElement(D,{"aria-label":a||r,notificationType:"actionable",onClick:P})),!T&&t.createElement("span",{ref:K,tabIndex:0,role:"link",className:`${n}--visually-hidden`},"Focus sentinel")):null}Ee.propTypes={actionButtonLabel:e.string,"aria-label":e.string,ariaLabel:I(e.string),children:e.node,className:e.string,closeOnEscape:e.bool,hasFocus:I(e.bool),hideCloseButton:e.bool,inline:e.bool,kind:e.oneOf(["error","info","info-square","success","warning","warning-alt"]),lowContrast:e.bool,onActionButtonClick:e.func,onClose:e.func,onCloseButtonClick:e.func,role:e.string,statusIconDescription:e.string,subtitle:e.node,title:e.string};e.string,e.node,e.string,e.oneOf(["error","info","info-square","success","warning","warning-alt"]),e.bool,e.func,e.string,e.node,e.string,e.string;export{Ee as A,Ne as I};

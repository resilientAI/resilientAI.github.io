"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[202],{1827:(t,e,i)=>{i.d(e,{JT:()=>s,CC:()=>o});var a=i(6540),r=i(7099),n=i(8273),l=Symbol("default");function o(t,e){let i=(0,a.useContext)(t);if(null===e)return null;if(i&&"object"==typeof i&&"slots"in i&&i.slots){let t=new Intl.ListFormat().format(Object.keys(i.slots).map(t=>`"${t}"`));if(!e&&!i.slots[l])throw Error(`A slot prop is required. Valid slot names are ${t}.`);let a=e||l;if(!i.slots[a])throw Error(`Invalid slot "${e}". Valid slot names are ${t}.`);return i.slots[a]}return i}function s(t,e,i){let{ref:l,...s}=o(i,t.slot)||{},d=function(t){let e=(0,a.useRef)(null);return(0,a.useMemo)(()=>({get current(){return e.current},set current(value){e.current=value,"function"==typeof t?t(value):t&&(t.current=value)}}),[t])}((0,a.useMemo)(()=>(0,r.P)(e,l),[e,l])),u=(0,n.v)(s,t);return"style"in s&&s.style&&"style"in t&&t.style&&("function"==typeof s.style||"function"==typeof t.style?u.style=e=>{let i="function"==typeof s.style?s.style(e):s.style,a={...e.defaultStyle,...i},r="function"==typeof t.style?t.style({...e,defaultStyle:a}):t.style;return{...a,...r}}:u.style={...s.style,...t.style}),[u,d]}},3679:(t,e,i)=>{i.d(e,{c:()=>s});var a=i(1827),r=i(1144),n=i(6540),l=(0,i(6559).tv)({base:"flex flex-col gap-2 items-start"}),o=i(4848),s=(0,n.createContext)(null);(0,n.forwardRef)(function(t,e){[t,e]=(0,a.JT)(t,e,s);let{validationErrors:i,validationBehavior:d="native",children:u,className:v,...c}=t,f=(0,n.useMemo)(()=>l({className:v}),[v]);return(0,o.jsx)("form",{noValidate:"native"!==d,...c,ref:e,className:f,children:(0,o.jsx)(s.Provider,{value:{...t,validationBehavior:d},children:(0,o.jsx)(r.Xy.Provider,{value:null!=i?i:{},children:u})})})})},8868:(t,e,i)=>{i.d(e,{X:()=>o});var a=i(5562),r=i(6540),n=i(9953),l=i(7049);function o(t,e,i){let{validationBehavior:o,focus:s}=t;(0,n.N)(()=>{if("native"===o&&(null==i?void 0:i.current)){var t;let a,r=e.realtimeValidation.isInvalid?e.realtimeValidation.validationErrors.join(" ")||"Invalid value.":"";i.current.setCustomValidity(r),i.current.hasAttribute("title")||(i.current.title=""),e.realtimeValidation.isInvalid||e.updateValidation({isInvalid:!(t=i.current).validity.valid,validationDetails:{badInput:(a=t.validity).badInput,customError:a.customError,patternMismatch:a.patternMismatch,rangeOverflow:a.rangeOverflow,rangeUnderflow:a.rangeUnderflow,stepMismatch:a.stepMismatch,tooLong:a.tooLong,tooShort:a.tooShort,typeMismatch:a.typeMismatch,valueMissing:a.valueMissing,valid:a.valid},validationErrors:t.validationMessage?[t.validationMessage]:[]})}});let d=(0,l.J)(()=>{e.resetValidation()}),u=(0,l.J)(t=>{var r,n;e.displayValidation.isInvalid||e.commitValidation();let l=null==i?void 0:null===(r=i.current)||void 0===r?void 0:r.form;!t.defaultPrevented&&i&&l&&function(t){for(let e=0;e<t.elements.length;e++){let i=t.elements[e];if(!i.validity.valid)return i}return null}(l)===i.current&&(s?s():null===(n=i.current)||void 0===n||n.focus(),(0,a.Cl)("keyboard")),t.preventDefault()}),v=(0,l.J)(()=>{e.commitValidation()});(0,r.useEffect)(()=>{let t=null==i?void 0:i.current;if(!t)return;let e=t.form;return t.addEventListener("invalid",u),t.addEventListener("change",v),null==e||e.addEventListener("reset",d),()=>{t.removeEventListener("invalid",u),t.removeEventListener("change",v),null==e||e.removeEventListener("reset",d)}},[i,u,v,d,o])}},5441:(t,e,i)=>{i.d(e,{M:()=>l});var a=i(4887),r=i(4137),n=i(8273);function l(t){let{description:e,errorMessage:i,isInvalid:l,validationState:o}=t,{labelProps:s,fieldProps:d}=(0,a.M)(t),u=(0,r.X1)([!!e,!!i,l,o]),v=(0,r.X1)([!!e,!!i,l,o]);return{labelProps:s,fieldProps:d=(0,n.v)(d,{"aria-describedby":[u,v,t["aria-describedby"]].filter(Boolean).join(" ")||void 0}),descriptionProps:{id:u},errorMessageProps:{id:v}}}},7099:(t,e,i)=>{i.d(e,{P:()=>a});function a(...t){return 1===t.length&&t[0]?t[0]:e=>{for(let i of t)"function"==typeof i?i(e):null!=i&&(i.current=e)}}},1144:(t,e,i)=>{i.d(e,{KZ:()=>d,Xy:()=>o});var a=i(6540);let r={badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},n={...r,customError:!0,valid:!1},l={isInvalid:!1,validationDetails:r,validationErrors:[]},o=(0,a.createContext)({}),s="__formValidationState"+Date.now();function d(t){if(t[s]){let{realtimeValidation:e,displayValidation:i,updateValidation:a,resetValidation:r,commitValidation:n}=t[s];return{realtimeValidation:e,displayValidation:i,updateValidation:a,resetValidation:r,commitValidation:n}}return function(t){let{isInvalid:e,validationState:i,name:r,value:s,builtinValidation:d,validate:f,validationBehavior:m="aria"}=t;i&&(e||(e="invalid"===i));let y=void 0!==e?{isInvalid:e,validationErrors:[],validationDetails:n}:null,p=(0,a.useMemo)(()=>f&&null!=s?v(function(t,e){if("function"==typeof t){let i=t(e);if(i&&"boolean"!=typeof i)return u(i)}return[]}(f,s)):null,[f,s]);(null==d?void 0:d.validationDetails.valid)&&(d=void 0);let h=(0,a.useContext)(o),V=(0,a.useMemo)(()=>r?Array.isArray(r)?r.flatMap(t=>u(h[t])):u(h[r]):[],[h,r]),[g,E]=(0,a.useState)(h),[M,b]=(0,a.useState)(!1);h!==g&&(E(h),b(!1));let I=(0,a.useMemo)(()=>v(M?[]:V),[M,V]),w=(0,a.useRef)(l),[S,P]=(0,a.useState)(l),C=(0,a.useRef)(l),[L,x]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{if(!L)return;x(!1);let t=p||d||w.current;c(t,C.current)||(C.current=t,P(t))}),{realtimeValidation:y||I||p||d||l,displayValidation:"native"===m?y||I||S:y||I||p||d||S,updateValidation(t){"aria"!==m||c(S,t)?w.current=t:P(t)},resetValidation(){c(l,C.current)||(C.current=l,P(l)),"native"===m&&x(!1),b(!0)},commitValidation(){"native"===m&&x(!0),b(!0)}}}(t)}function u(t){return t?Array.isArray(t)?t:[t]:[]}function v(t){return t.length?{isInvalid:!0,validationErrors:t,validationDetails:n}:null}function c(t,e){return t===e||!!t&&!!e&&t.isInvalid===e.isInvalid&&t.validationErrors.length===e.validationErrors.length&&t.validationErrors.every((t,i)=>t===e.validationErrors[i])&&Object.entries(t.validationDetails).every(([t,i])=>e.validationDetails[t]===i)}}}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[940],{3943:(e,t,r)=>{"use strict";r.d(t,{A:()=>f});var o=r(7528),l=r(4418),n=r(6540);let u=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim()};var c=r(5456),i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let s=(0,n.forwardRef)((e,t)=>{var{color:r="currentColor",size:u=24,strokeWidth:s=2,absoluteStrokeWidth:f,className:d="",children:p,iconNode:h}=e,y=(0,l._)(e,["color","size","strokeWidth","absoluteStrokeWidth","className","children","iconNode"]);return(0,n.createElement)("svg",(0,o._)((0,c._)((0,o._)({ref:t},i),{width:u,height:u,stroke:r,strokeWidth:f?24*Number(s)/Number(u):s,className:a("lucide",d)}),y),[...h.map(e=>{let[t,r]=e;return(0,n.createElement)(t,r)}),...Array.isArray(p)?p:[p]])}),f=(e,t)=>{let r=(0,n.forwardRef)((r,c)=>{var{className:i}=r,f=(0,l._)(r,["className"]);return(0,n.createElement)(s,(0,o._)({ref:c,iconNode:t,className:a("lucide-".concat(u(e)),i)},f))});return r.displayName="".concat(e),r}},8041:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});let o=(0,r(3943).A)("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]])},8727:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});let o=(0,r(3943).A)("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]])},5157:(e,t,r)=>{"use strict";function o(e,t,r,o){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return o}}),r(2063),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6397:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});let o=r(7528),l=r(5456),n=r(4418);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return M}});let u=r(7677),a=r(4848),c=u._(r(6540)),i=r(6847),s=r(7785),f=r(2772),d=r(1278),p=r(6185),h=r(7644),y=r(6334),v=r(5157),b=r(296),g=r(1903),_=new Set;function m(e,t,r,o){if((0,s.isLocalURL)(t)){if(!o.bypassPrefetchedCheck){let l=t+"%"+r+"%"+(void 0!==o.locale?o.locale:"locale"in e?e.locale:void 0);if(_.has(l))return;_.add(l)}e.prefetch(t,r,o).catch(e=>{})}}function k(e){return"string"==typeof e?e:(0,f.formatUrl)(e)}let M=c.default.forwardRef(function(e,t){let r,u;let{href:f,as:_,children:M,prefetch:C=null,passHref:j,replace:w,shallow:E,scroll:O,locale:P,onClick:A,onMouseEnter:L,onTouchStart:x,legacyBehavior:N=!1}=e,R=n._(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=M,N&&("string"==typeof r||"number"==typeof r)&&(r=(0,a.jsx)("a",{children:r}));let S=c.default.useContext(h.RouterContext),I=!1!==C,{href:T,as:U}=c.default.useMemo(()=>{if(!S){let e=k(f);return{href:e,as:_?k(_):e}}let[e,t]=(0,i.resolveHref)(S,f,!0);return{href:e,as:_?(0,i.resolveHref)(S,_):t||e}},[S,f,_]),D=c.default.useRef(T),H=c.default.useRef(U);N&&(u=c.default.Children.only(r));let K=N?u&&"object"==typeof u&&u.ref:t,[W,z,B]=(0,y.useIntersection)({rootMargin:"200px"}),Z=c.default.useCallback(e=>{(H.current!==U||D.current!==T)&&(B(),H.current=U,D.current=T),W(e)},[U,T,B,W]),$=(0,g.useMergedRef)(Z,K);c.default.useEffect(()=>{S&&z&&I&&m(S,T,U,{locale:P})},[U,T,z,P,I,null==S?void 0:S.locale,S]);let q={ref:$,onClick(e){N||"function"!=typeof A||A(e),N&&u.props&&"function"==typeof u.props.onClick&&u.props.onClick(e),S&&!e.defaultPrevented&&function(e,t,r,o,l,n,u,a){let{nodeName:c}=e.currentTarget;"A"===c.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!(0,s.isLocalURL)(r))||(e.preventDefault(),(()=>{let e=null==u||u;"beforePopState"in t?t[l?"replace":"push"](r,o,{shallow:n,locale:a,scroll:e}):t[l?"replace":"push"](o||r,{scroll:e})})())}(e,S,T,U,w,E,O,P)},onMouseEnter(e){N||"function"!=typeof L||L(e),N&&u.props&&"function"==typeof u.props.onMouseEnter&&u.props.onMouseEnter(e),S&&m(S,T,U,{locale:P,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(e){N||"function"!=typeof x||x(e),N&&u.props&&"function"==typeof u.props.onTouchStart&&u.props.onTouchStart(e),S&&m(S,T,U,{locale:P,priority:!0,bypassPrefetchedCheck:!0})}};if((0,d.isAbsoluteUrl)(U))q.href=U;else if(!N||j||"a"===u.type&&!("href"in u.props)){let e=void 0!==P?P:null==S?void 0:S.locale,t=(null==S?void 0:S.isLocaleDomain)&&(0,v.getDomainLocale)(U,e,null==S?void 0:S.locales,null==S?void 0:S.domainLocales);q.href=t||(0,b.addBasePath)((0,p.addLocale)(U,e,null==S?void 0:S.defaultLocale))}return N?c.default.cloneElement(u,q):(0,a.jsx)("a",l._(o._({},R,q),{children:r}))});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6334:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return c}});let o=r(6540),l=r(4959),n="function"==typeof IntersectionObserver,u=new Map,a=[];function c(e){let{rootRef:t,rootMargin:r,disabled:c}=e,i=c||!n,[s,f]=(0,o.useState)(!1),d=(0,o.useRef)(null),p=(0,o.useCallback)(e=>{d.current=e},[]);return(0,o.useEffect)(()=>{if(n){if(i||s)return;let e=d.current;if(e&&e.tagName)return function(e,t,r){let{id:o,observer:l,elements:n}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},o=a.find(e=>e.root===r.root&&e.margin===r.margin);if(o&&(t=u.get(o)))return t;let l=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=l.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:l},a.push(r),u.set(r,t),t}(r);return n.set(e,t),l.observe(e),function(){if(n.delete(e),l.unobserve(e),0===n.size){l.disconnect(),u.delete(o);let e=a.findIndex(e=>e.root===o.root&&e.margin===o.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!s){let e=(0,l.requestIdleCallback)(()=>f(!0));return()=>(0,l.cancelIdleCallback)(e)}},[i,r,t,s,d.current]),[p,s,(0,o.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1106:(e,t,r)=>{e.exports=r(6397)}}]);
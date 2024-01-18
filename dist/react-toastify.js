'use client';
var e=require("react"),t=require("use-sync-external-store/shim/index.js"),n=require("clsx");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=/*#__PURE__*/o(e),s=/*#__PURE__*/o(n);const r=e=>"number"==typeof e&&!isNaN(e),l=e=>"string"==typeof e,i=e=>"function"==typeof e,c=e=>l(e)||i(e)?e:null,d=t=>e.isValidElement(t)||l(t)||i(t)||r(t);function u(e,t,n){void 0===n&&(n=300);const{scrollHeight:o,style:a}=e;requestAnimationFrame(()=>{a.minHeight="initial",a.height=o+"px",a.transition=`all ${n}ms`,requestAnimationFrame(()=>{a.height="0",a.padding="0",a.margin="0",setTimeout(t,n)})})}function p(t){let{enter:n,exit:o,appendPosition:s=!1,collapse:r=!0,collapseDuration:l=300}=t;return function(t){let{children:i,position:c,preventExitTransition:d,done:p,nodeRef:f,isIn:m,playToast:g}=t;const y=s?`${n}--${c}`:n,v=s?`${o}--${c}`:o,h=e.useRef(0);return e.useLayoutEffect(()=>{const e=f.current,t=y.split(" "),n=o=>{o.target===f.current&&(g(),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===h.current&&"animationcancel"!==o.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)},[]),e.useEffect(()=>{const e=f.current,t=()=>{e.removeEventListener("animationend",t),r?u(e,p,l):p()};m||(d?t():(h.current=1,e.className+=` ${v}`,e.addEventListener("animationend",t)))},[m]),a.default.createElement(a.default.Fragment,null,i)}}function f(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const m=new Map;let g=[];const y=new Set,v=e=>y.forEach(t=>t(e)),h=()=>m.size>0;function T(e,t){var n;if(t)return!(null==(n=m.get(t))||!n.isToastActive(e));let o=!1;return m.forEach(t=>{t.isToastActive(e)&&(o=!0)}),o}function E(e,t){d(e)&&(h()||g.push({content:e,options:t}),m.forEach(n=>{n.buildToast(e,t)}))}function b(e,t){m.forEach(n=>{null!=t&&null!=t&&t.containerId?(null==t?void 0:t.containerId)===n.id&&n.toggle(e,null==t?void 0:t.id):n.toggle(e,null==t?void 0:t.id)})}function I(n){const{subscribe:o,getSnapshot:a,setProps:s}=e.useRef(function(t){const n=t.containerId||1;return{subscribe(o){const a=function(t,n,o){let a=1,s=0,u=[],p=[],m=[],g=n;const y=new Map,v=new Set,h=()=>{m=Array.from(y.values()),v.forEach(e=>e())},T=e=>{p=null==e?[]:p.filter(t=>t!==e),h()},E=t=>{const{toastId:n,onOpen:a,updateId:s,children:r}=t.props,l=null==s;t.staleId&&y.delete(t.staleId),y.set(n,t),p=[...p,t.props.toastId].filter(e=>e!==t.staleId),h(),o(f(t,l?"added":"updated")),l&&i(a)&&a(e.isValidElement(r)&&r.props)};return{id:t,props:g,observe:e=>(v.add(e),()=>v.delete(e)),toggle:(e,t)=>{y.forEach(n=>{null!=t&&t!==n.props.toastId||i(n.toggle)&&n.toggle(e)})},removeToast:T,toasts:y,clearQueue:()=>{s-=u.length,u=[]},buildToast:(n,p)=>{if((e=>{let{containerId:n,toastId:o,updateId:a}=e;const s=n?n!==t:1!==t,r=y.has(o)&&null==a;return s||r})(p))return;const{toastId:m,updateId:v,data:b,staleId:I,delay:_}=p,C=()=>{T(m)},L=null==v;L&&s++;const x={...g,style:g.toastStyle,key:a++,...Object.fromEntries(Object.entries(p).filter(e=>{let[t,n]=e;return null!=n})),toastId:m,updateId:v,data:b,closeToast:C,isIn:!1,className:c(p.className||g.toastClassName),bodyClassName:c(p.bodyClassName||g.bodyClassName),progressClassName:c(p.progressClassName||g.progressClassName),autoClose:!p.isLoading&&(N=p.autoClose,$=g.autoClose,!1===N||r(N)&&N>0?N:$),deleteToast(){const t=y.get(m),{onClose:n,children:a}=t.props;i(n)&&n(e.isValidElement(a)&&a.props),o(f(t,"removed")),y.delete(m),s--,s<0&&(s=0),u.length>0?E(u.shift()):h()}};var N,$;x.closeButton=g.closeButton,!1===p.closeButton||d(p.closeButton)?x.closeButton=p.closeButton:!0===p.closeButton&&(x.closeButton=!d(g.closeButton)||g.closeButton);let w=n;e.isValidElement(n)&&!l(n.type)?w=e.cloneElement(n,{closeToast:C,toastProps:x,data:b}):i(n)&&(w=n({closeToast:C,toastProps:x,data:b}));const k={content:w,props:x,staleId:I};g.limit&&g.limit>0&&s>g.limit&&L?u.push(k):r(_)?setTimeout(()=>{E(k)},_):E(k)},setProps(e){g=e},setToggle:(e,t)=>{y.get(e).toggle=t},isToastActive:e=>p.some(t=>t===e),getSnapshot:()=>g.newestOnTop?m.reverse():m}}(n,t,v);m.set(n,a);const s=a.observe(o);return g.forEach(e=>E(e.content,e.options)),g=[],()=>{s(),m.delete(n)}},setProps(e){var t;null==(t=m.get(n))||t.setProps(e)},getSnapshot(){var e;return null==(e=m.get(n))?void 0:e.getSnapshot()}}}(n)).current;s(n);const u=t.useSyncExternalStore(o,a,a);return{getToastToRender:function(e){if(!u)return[];const t=new Map;return u.forEach(e=>{const{position:n}=e.props;t.has(n)||t.set(n,[]),t.get(n).push(e)}),Array.from(t,t=>e(t[0],t[1]))},isToastActive:T,count:null==u?void 0:u.length}}function _(t){const[n,o]=e.useState(!1),[a,s]=e.useState(!1),r=e.useRef(null),l=e.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:i,pauseOnHover:c,closeToast:d,onClick:u,closeOnClick:p}=t;var f,g;function y(){o(!0)}function v(){o(!1)}function h(e){const o=r.current;l.canDrag&&o&&(l.didMove=!0,n&&v(),l.delta="x"===t.draggableDirection?e.clientX-l.start:e.clientY-l.start,l.start!==e.clientX&&(l.canCloseOnClick=!1),o.style.transform=`translate3d(${"x"===t.draggableDirection?`${l.delta}px, var(--y)`:`0, calc(${l.delta}px + var(--y))`},0)`,o.style.opacity=""+(1-Math.abs(l.delta/l.removalDistance)))}function T(){document.removeEventListener("pointermove",h),document.removeEventListener("pointerup",T);const e=r.current;if(l.canDrag&&l.didMove&&e){if(l.canDrag=!1,Math.abs(l.delta)>l.removalDistance)return s(!0),t.closeToast(),void t.collapseAll();e.style.transition="transform 0.2s, opacity 0.2s",e.style.removeProperty("transform"),e.style.removeProperty("opacity")}}null==(g=m.get((f={id:t.toastId,containerId:t.containerId,fn:o}).containerId||1))||g.setToggle(f.id,f.fn),e.useEffect(()=>{if(t.pauseOnFocusLoss)return document.hasFocus()||v(),window.addEventListener("focus",y),window.addEventListener("blur",v),()=>{window.removeEventListener("focus",y),window.removeEventListener("blur",v)}},[t.pauseOnFocusLoss]);const E={onPointerDown:function(e){if(!0===t.draggable||t.draggable===e.pointerType){l.didMove=!1,document.addEventListener("pointermove",h),document.addEventListener("pointerup",T);const n=r.current;l.canCloseOnClick=!0,l.canDrag=!0,n.style.transition="none","x"===t.draggableDirection?(l.start=e.clientX,l.removalDistance=n.offsetWidth*(t.draggablePercent/100)):(l.start=e.clientY,l.removalDistance=n.offsetHeight*(80===t.draggablePercent?1.5*t.draggablePercent:t.draggablePercent)/100)}},onPointerUp:function(e){const{top:n,bottom:o,left:a,right:s}=r.current.getBoundingClientRect();"touchend"!==e.nativeEvent.type&&t.pauseOnHover&&e.clientX>=a&&e.clientX<=s&&e.clientY>=n&&e.clientY<=o?v():y()}};return i&&c&&(E.onMouseEnter=v,t.stacked||(E.onMouseLeave=y)),p&&(E.onClick=e=>{u&&u(e),l.canCloseOnClick&&d()}),{playToast:y,pauseToast:v,isRunning:n,preventExitTransition:a,toastRef:r,eventHandlers:E}}function C(e){let{delay:t,isRunning:n,closeToast:o,type:r="default",hide:l,className:c,style:d,controlledProgress:u,progress:p,rtl:f,isIn:m,theme:g}=e;const y=l||u&&0===p,v={...d,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused"};u&&(v.transform=`scaleX(${p})`);const h=s.default("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${g}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":f}),T=i(c)?c({rtl:f,type:r,defaultClassName:h}):s.default(h,c),E={[u&&p>=1?"onTransitionEnd":"onAnimationEnd"]:u&&p<1?null:()=>{m&&o()}};return a.default.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":y},a.default.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${g} Toastify__progress-bar--${r}`}),a.default.createElement("div",{role:"progressbar","aria-hidden":y?"true":"false","aria-label":"notification timer",className:T,style:v,...E}))}let L=1;const x=()=>""+L++;function N(e){return e&&(l(e.toastId)||r(e.toastId))?e.toastId:x()}function $(e,t){return E(e,t),t.toastId}function w(e,t){return{...t,type:t&&t.type||e,toastId:N(t)}}function k(e){return(t,n)=>$(t,w(e,n))}function P(e,t){return $(e,w("default",t))}P.loading=(e,t)=>$(e,w("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),P.promise=function(e,t,n){let o,{pending:a,error:s,success:r}=t;a&&(o=l(a)?P.loading(a,n):P.loading(a.render,{...n,...a}));const c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},d=(e,t,a)=>{if(null==t)return void P.dismiss(o);const s={type:e,...c,...n,data:a},r=l(t)?{render:t}:t;return o?P.update(o,{...s,...r}):P(r.render,{...s,...r}),a},u=i(e)?e():e;return u.then(e=>d("success",r,e)).catch(e=>d("error",s,e)),u},P.success=k("success"),P.info=k("info"),P.error=k("error"),P.warning=k("warning"),P.warn=P.warning,P.dark=(e,t)=>$(e,w("default",{theme:"dark",...t})),P.dismiss=function(e){!function(e){var t;if(h()){if(null==e||l(t=e)||r(t))m.forEach(t=>{t.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){var n;(null==(n=m.get(e.containerId))?void 0:n.removeToast(e.id))||m.forEach(t=>{t.removeToast(e.id)})}}else g=g.filter(t=>null!=e&&t.options.toastId!==e)}(e)},P.clearWaitingQueue=function(e){void 0===e&&(e={}),m.forEach(t=>{!t.props.limit||e.containerId&&t.id!==e.containerId||t.clearQueue()})},P.isActive=T,P.update=function(e,t){void 0===t&&(t={});const n=((e,t)=>{var n;let{containerId:o}=t;return null==(n=m.get(o||1))?void 0:n.toasts.get(e)})(e,t);if(n){const{props:o,content:a}=n,s={delay:100,...o,...t,toastId:t.toastId||e,updateId:x()};s.toastId!==e&&(s.staleId=e);const r=s.render||a;delete s.render,$(r,s)}},P.done=e=>{P.update(e,{progress:1})},P.onChange=function(e){return y.add(e),()=>{y.delete(e)}},P.play=e=>b(!0,e),P.pause=e=>b(!1,e);const M="undefined"!=typeof window?e.useLayoutEffect:e.useEffect,A=e=>{let{theme:t,type:n,isLoading:o,...s}=e;return a.default.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":`var(--toastify-icon-color-${n})`,...s})},B={info:function(e){return a.default.createElement(A,{...e},a.default.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return a.default.createElement(A,{...e},a.default.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return a.default.createElement(A,{...e},a.default.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return a.default.createElement(A,{...e},a.default.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return a.default.createElement("div",{className:"Toastify__spinner"})}},O=t=>{const{isRunning:n,preventExitTransition:o,toastRef:r,eventHandlers:l,playToast:c}=_(t),{closeButton:d,children:u,autoClose:p,onClick:f,type:m,hideProgressBar:g,closeToast:y,transition:v,position:h,className:T,style:E,bodyClassName:b,bodyStyle:I,progressClassName:L,progressStyle:x,updateId:N,role:$,progress:w,rtl:k,toastId:P,deleteToast:M,isIn:A,isLoading:O,closeOnClick:D,theme:R}=t,S=s.default("Toastify__toast",`Toastify__toast-theme--${R}`,`Toastify__toast--${m}`,{"Toastify__toast--rtl":k},{"Toastify__toast--close-on-click":D}),z=i(T)?T({rtl:k,position:h,type:m,defaultClassName:S}):s.default(S,T),H=function(t){let{theme:n,type:o,isLoading:a,icon:s}=t,r=null;const l={theme:n,type:o,isLoading:a};return!1===s||(i(s)?r=s(l):e.isValidElement(s)?r=e.cloneElement(s,l):a?r=B.spinner():(e=>e in B)(o)&&(r=B[o](l))),r}(t),F=!!w||!p,q={closeToast:y,type:m,theme:R};let V=null;return!1===d||(V=i(d)?d(q):e.isValidElement(d)?e.cloneElement(d,q):function(e){let{closeToast:t,theme:n,ariaLabel:o="close"}=e;return a.default.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:e=>{e.stopPropagation(),t(e)},"aria-label":o},a.default.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},a.default.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(q)),a.default.createElement(v,{isIn:A,done:M,position:h,preventExitTransition:o,nodeRef:r,playToast:c},a.default.createElement("div",{id:P,onClick:f,"data-in":A,className:z,...l,style:E,ref:r},a.default.createElement("div",{...A&&{role:$},className:i(b)?b({type:m}):s.default("Toastify__toast-body",b),style:I},null!=H&&a.default.createElement("div",{className:s.default("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!O})},H),a.default.createElement("div",null,u)),V,a.default.createElement(C,{...N&&!F?{key:`pb-${N}`}:{},rtl:k,theme:R,delay:p,isRunning:n,isIn:A,closeToast:y,hide:g,type:m,style:x,className:L,controlledProgress:F,progress:w||0})))},D=function(e,t){return void 0===t&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},R=p(D("bounce",!0)),S=p(D("slide",!0)),z=p(D("zoom")),H=p(D("flip")),F={position:"top-right",transition:R,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};exports.Bounce=R,exports.Flip=H,exports.Icons=B,exports.Slide=S,exports.ToastContainer=function(t){let n={...F,...t};const o=t.stacked,[r,l]=e.useState(!0),d=e.useRef(null),{getToastToRender:u,isToastActive:p,count:f}=I(n),{className:m,style:g,rtl:y,containerId:v}=n;function h(e){const t=s.default("Toastify__toast-container",`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":y});return i(m)?m({position:e,rtl:y,defaultClassName:t}):s.default(t,c(m))}function T(){o&&(l(!0),P.play())}return M(()=>{if(o){var e;const t=d.current.querySelectorAll('[data-in="true"]'),o=12,a=null==(e=n.position)?void 0:e.includes("top");let s=0,l=0;Array.from(t).reverse().forEach((e,t)=>{const n=e;n.classList.add("Toastify__toast--stacked"),t>0&&(n.dataset.collapsed=`${r}`),n.dataset.pos||(n.dataset.pos=a?"top":"bot");const i=s*(r?.2:1)+(r?0:o*t);n.style.setProperty("--y",`${a?i:-1*i}px`),n.style.setProperty("--g",`${o}`),n.style.setProperty("--s",""+(1-(r?l:0))),s+=n.offsetHeight,l+=.025})}},[r,f,o]),a.default.createElement("div",{ref:d,className:"Toastify",id:v,onMouseEnter:()=>{o&&(l(!1),P.pause())},onMouseLeave:T},u((e,t)=>{const n=t.length?{...g}:{...g,pointerEvents:"none"};return a.default.createElement("div",{className:h(e),style:n,key:`container-${e}`},t.map(e=>{let{content:t,props:n}=e;return a.default.createElement(O,{...n,stacked:o,collapseAll:T,isIn:p(n.toastId,n.containerId),style:n.style,key:`toast-${n.key}`},t)}))}))},exports.Zoom=z,exports.collapseToast=u,exports.cssTransition=p,exports.toast=P,exports.useToast=_,exports.useToastContainer=I;
//# sourceMappingURL=react-toastify.js.map

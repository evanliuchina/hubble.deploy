(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2934)}])},2934:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return ee}});var r=t(5893),o=(t(1535),t(5437)),a=t(4051),s=t.n(a),c=t(7294),i=t(7985),l=t(4063),u=t(4299),d=t(682),f=t(5005),m=t(4184),p=t.n(m),h=t(6792),x=t(6611),b=t(9602);const v=c.forwardRef((({bsPrefix:e,className:n,variant:t,as:o="img",...a},s)=>{const c=(0,h.vE)(e,"card-img");return(0,r.jsx)(o,{ref:s,className:p()(t?`${c}-${t}`:c,n),...a})}));v.displayName="CardImg";var y=v,g=t(9059);const j=c.forwardRef((({bsPrefix:e,className:n,as:t="div",...o},a)=>{const s=(0,h.vE)(e,"card-header"),i=(0,c.useMemo)((()=>({cardHeaderBsPrefix:s})),[s]);return(0,r.jsx)(g.Z.Provider,{value:i,children:(0,r.jsx)(t,{ref:a,...o,className:p()(n,s)})})}));j.displayName="CardHeader";var w=j;const P=(0,b.Z)("h5"),N=(0,b.Z)("h6"),S=(0,x.Z)("card-body"),k=(0,x.Z)("card-title",{Component:P}),C=(0,x.Z)("card-subtitle",{Component:N}),E=(0,x.Z)("card-link",{Component:"a"}),_=(0,x.Z)("card-text",{Component:"p"}),O=(0,x.Z)("card-footer"),Z=(0,x.Z)("card-img-overlay"),I=c.forwardRef((({bsPrefix:e,className:n,bg:t,text:o,border:a,body:s,children:c,as:i="div",...l},u)=>{const d=(0,h.vE)(e,"card");return(0,r.jsx)(i,{ref:u,...l,className:p()(n,d,t&&`bg-${t}`,o&&`text-${o}`,a&&`border-${a}`),children:s?(0,r.jsx)(S,{children:c}):c})}));I.displayName="Card",I.defaultProps={body:!1};var $=Object.assign(I,{Img:y,Title:k,Subtitle:C,Body:S,Link:E,Text:_,Header:w,Footer:O,ImgOverlay:Z}),A=t(1555),R=t(1608),T=t(7178),L=t(7902),H=t(1085),F=t(4878),M=t(3075),U=t(2388);function z(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function B(e,n,t,r,o,a,s){try{var c=e[a](s),i=c.value}catch(l){return void t(l)}c.done?n(i):Promise.resolve(i).then(r,o)}function D(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var a=e.apply(n,t);function s(e){B(a,r,o,s,c,"next",e)}function c(e){B(a,r,o,s,c,"throw",e)}s(void 0)}))}}function W(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function X(e,n){return null!=n&&"undefined"!==typeof Symbol&&n[Symbol.hasInstance]?!!n[Symbol.hasInstance](e):e instanceof n}function G(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){W(e,n,t[n])}))}return e}function J(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,a=[],s=!0,c=!1;try{for(t=t.call(e);!(s=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);s=!0);}catch(i){c=!0,o=i}finally{try{s||null==t.return||t.return()}finally{if(c)throw o}}return a}}(e,n)||q(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function V(e){return function(e){if(Array.isArray(e))return z(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||q(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(e,n){if(e){if("string"===typeof e)return z(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?z(e,n):void 0}}var K=[[T.O,T.P],[H.a,H.P],[L.L,L.P]];function Q(){var e,n=(0,i.useWeb3React)(),t=n.connector,o=n.chainId,a=n.account,d=n.provider;console.log("[Posts] Priority Connector is: ".concat((0,F.o)(t))),console.log("[Posts] ChainId is: ".concat(o)),console.log("[Posts] Account is: ".concat(a)),console.log("[Posts] Provider is: ".concat(d));var m=null===(e=M.xk[Number(o)])||void 0===e?void 0:e.Post,p=(0,c.useState)(!1),h=p[0],x=p[1],b=(0,c.useState)(!0),v=b[0],y=b[1],g=(0,c.useState)([]),j=g[0],w=g[1],P=(0,c.useState)({}),N=P[0],S=P[1],k=(0,c.useRef)(null);function C(){return E.apply(this,arguments)}function E(){return(E=D(s().mark((function e(){var n,t,r,o,a,c,i,u,f,p,b;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!d||!m||0!=h||1!=v){e.next=31;break}if(x(!0),n=new l.CH(m,U,d),t=12,0!=j.length){e.next=13;break}return e.next=8,n._head();case 8:o=e.sent,r=o,console.log("[Posts starting from _head]",r.toString(),v),e.next=14;break;case 13:r=j[j.length-1]._next,console.log("[Posts starting from last]",r.toString(),v);case 14:a=0;case 15:if(!(a<t&&0!=r)){e.next=30;break}return e.next=18,n._posts(r);case 18:return c=e.sent,e.next=21,n.tokenURI(c.id);case 21:i=e.sent,u=J(i.split(","),2),f=u[0],p=u[1],"data:application/json;base64"==f&&(b=JSON.parse(atob(p)),S((function(e){return G({},e,W({},c.id,b))}))),w((function(e){return V(e).concat([c])})),r=c._next,y(0!=r);case 27:a++,e.next=15;break;case 30:x(!1);case 31:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(0,c.useEffect)((function(){L.L.activate().catch((function(){console.debug("Failed to connect to network")})),C()}),[d]);var _=function(){k&&(0,F.U)(k.current)&&C()};function O(){return(O=D(s().mark((function e(n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("[Posts] will upvote: ",n),!X(t,u.MetaMask)||!d){e.next=5;break}return r=new l.CH(m,U,d.getSigner()),e.next=5,r.upVote(n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,c.useEffect)((function(){return window.addEventListener("scroll",_),function(){return window.removeEventListener("scroll",_)}})),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(R.Z,{xs:1,md:"auto",className:"g-4",children:j.map((function(e){var n=e.id;return(0,r.jsx)(A.Z,{xs:12,md:3,children:(0,r.jsxs)($,{children:[(0,r.jsx)($.Img,{variant:"top",src:N[n].image}),(0,r.jsxs)($.Body,{children:[(0,r.jsx)($.Title,{children:(0,r.jsxs)("span",{className:"h6",children:["#",n.toString()," \xa0",(0,r.jsx)("small",{children:(0,r.jsxs)("a",{className:"text-success text-decoration-none",href:N[n].link,children:[decodeURIComponent(escape(N[n].title)).substr(0,6),"...(\u27a6\u539f\u6587)"]})})]})}),(0,r.jsx)($.Text,{children:(0,r.jsxs)("span",{className:"d-flex justify-content-between",children:[(0,r.jsx)("span",{className:"p-2",children:(0,r.jsx)("small",{className:"text-muted",children:new Date(1e3*e.timestamp).toLocaleString("zh-CN")})}),(0,r.jsx)("span",{className:"p-2",children:(0,r.jsx)(f.Z,{variant:"light",size:"sm",onClick:function(){return function(e){return O.apply(this,arguments)}(e.id)},children:(0,r.jsxs)("small",{children:["\ud83d\udc4d ",e.points.toString()]})})})]})})]})]})},n)}))}),(0,r.jsx)("div",{ref:k})]})}function Y(){return(0,r.jsx)(i.Web3ReactProvider,{connectors:K,children:(0,r.jsx)(d.Z,{children:(0,r.jsx)(Q,{})})})}function ee(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Z,{}),(0,r.jsx)(Y,{})]})}},1608:function(e,n,t){"use strict";var r=t(4184),o=t.n(r),a=t(7294),s=t(6792),c=t(5893);const i=a.forwardRef((({bsPrefix:e,className:n,as:t="div",...r},a)=>{const i=(0,s.vE)(e,"row"),l=(0,s.pi)(),u=(0,s.zG)(),d=`${i}-cols`,f=[];return l.forEach((e=>{const n=r[e];let t;delete r[e],null!=n&&"object"===typeof n?({cols:t}=n):t=n;const o=e!==u?`-${e}`:"";null!=t&&f.push(`${d}${o}-${t}`)})),(0,c.jsx)(t,{ref:a,...r,className:o()(n,i,...f)})}));i.displayName="Row",n.Z=i}},function(e){e.O(0,[774,714,425,798,389,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
import{_ as w}from"./preload-helper.a4192956.js";import{s as D,e as m,a as O,O as q,d as _,c as A,r as I,i as p,U as L,o as N,q as $,K as R,L as H,f as S,g as V,j as g,u as j}from"./scheduler.b364ac0e.js";import{S as C,i as K,a as u,g as P,t as d,c as T,b as y,d as U,m as v,e as E}from"./index.1fcbdd57.js";import{q as z,t as h}from"./Link.svelte_svelte_type_style_lang.a844e97f.js";function B(l){let e,t;return{c(){e=new R(!1),t=m(),this.h()},l(a){e=H(a,!1),t=m(),this.h()},h(){e.a=t},m(a,i){e.m(l[1],a,i),p(a,t,i)},p(a,i){i&2&&e.p(a[1])},d(a){a&&(_(t),e.d())}}}function F(l){let e;return{c(){e=S("meta"),this.h()},l(t){e=V(t,"META",{rel:!0,href:!0}),this.h()},h(){g(e,"rel","manifest"),g(e,"href",h.pwa.darkManifest)},m(t,a){p(t,e,a)},p:j,d(t){t&&_(e)}}}function M(l){let e,t,a;var i=l[0];function c(n,s){return{}}return i&&(e=$(i,c())),{c(){e&&y(e.$$.fragment),t=m()},l(n){e&&U(e.$$.fragment,n),t=m()},m(n,s){e&&v(e,n,s),p(n,t,s),a=!0},p(n,s){if(s&1&&i!==(i=n[0])){if(e){P();const r=e;d(r.$$.fragment,1,0,()=>{E(r,1)}),T()}i?(e=$(i,c()),y(e.$$.fragment),u(e.$$.fragment,1),v(e,t.parentNode,t)):e=null}},i(n){a||(e&&u(e.$$.fragment,n),a=!0)},o(n){e&&d(e.$$.fragment,n),a=!1},d(n){n&&_(t),e&&E(e,n)}}}function G(l){let e,t,a,i;function c(o,f){var k,b;return(b=(k=h)==null?void 0:k.pwa)!=null&&b.darkManifest&&o[2]?F:B}let n=c(l),s=n(l),r=l[0]&&M(l);return{c(){s.c(),e=m(),t=O(),r&&r.c(),a=m()},l(o){const f=q("svelte-15asdu4",document.head);s.l(f),e=m(),f.forEach(_),t=A(o),r&&r.l(o),a=m()},m(o,f){s.m(document.head,null),I(document.head,e),p(o,t,f),r&&r.m(o,f),p(o,a,f),i=!0},p(o,[f]){n===(n=c(o))&&s?s.p(o,f):(s.d(1),s=n(o),s&&(s.c(),s.m(e.parentNode,e))),o[0]?r?(r.p(o,f),f&1&&u(r,1)):(r=M(o),r.c(),u(r,1),r.m(a.parentNode,a)):r&&(P(),d(r,1,1,()=>{r=null}),T())},i(o){i||(u(r),i=!0)},o(o){d(r),i=!1},d(o){o&&(_(t),_(a)),s.d(o),_(e),r&&r.d(o)}}}function J(l,e,t){let a;L(l,z,n=>t(2,a=n));let i,c;return N(async()=>{if(h.pwa){const{pwaInfo:n}=await w(()=>import("./virtual_pwa-info.1b631e04.js"),[],import.meta.url);t(1,c=n?n.webManifest.linkTag:""),n&&t(0,i=(await w(()=>import("./ReloadPrompt.32260510.js"),["./ReloadPrompt.32260510.js","./scheduler.b364ac0e.js","./index.1fcbdd57.js","./Link.svelte_svelte_type_style_lang.a844e97f.js","./singletons.eddef32a.js","../assets/Link.b2bf4f4c.css","./0.20de3b0b.js","./preload-helper.a4192956.js","./stores.f5592fe3.js","../assets/0.18fb0563.css","../assets/ReloadPrompt.a2eb4b7b.css"],import.meta.url)).default)}}),[i,c,a]}class Z extends C{constructor(e){super(),K(this,e,J,G,D,{})}}export{Z as default};

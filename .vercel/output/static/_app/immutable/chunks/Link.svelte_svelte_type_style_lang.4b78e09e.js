import{w as u,j as I}from"./singletons.363e91f9.js";import{$ as x,s as B,z as D,w as f,x as h,h as g,d as m,j as s,N as E,i as F,r as p,u as j,y as q,A as M}from"./scheduler.4fc6ff3d.js";import{S as T,i as U}from"./index.2aec9f2a.js";function K(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function G(e,t){const i={},o={},r={$$scope:1};let a=e.length;for(;a--;){const l=e[a],d=t[a];if(d){for(const n in l)n in d||(o[n]=1);for(const n in d)r[n]||(i[n]=d[n],r[n]=1);e[a]=d}else for(const n in l)r[n]=1}for(const l in o)l in i||(i[l]=void 0);return i}function P(e){return typeof e=="object"&&e!==null?e:{}}const A={navbar:[{title:"User Guides",items:[{title:"Introduction",to:"/user-guides/introduction/"},{title:"Recording Your Data",to:"/user-guides/recording-your-data/"},{title:"Using Your Data",to:"/user-guides/using-your-data/"}]},{title:"Administrators Guides",items:[{title:"Introduction",to:"/admin-guides/introduction/"},{title:"Site Administration",to:"/admin-guides/site-admin/introduction/"},{title:"Database Administration",to:"/admin-guides/db-admin/introduction/"},{title:"Development Administration",to:"/admin-guides/dev-admin/introduction/"},{title:"Documentation Administration",to:"/admin-guides/docs-admin/introduction/"}]},{title:"Technical Guides",items:[{title:"Introduction",to:"/tech-guides/introduction/"},{title:"Site Development",to:"/tech-guides/site-development/introduction/"},{title:"Database Development",to:"/tech-guides/db-development/introduction/"},{title:"Documentation Development",to:"/tech-guides/docs-development/introduction/"}]},{title:"FAQ",to:"/faqs/faq"},{title:"SOC",external:!0,to:"https://soc-dev.vercel.app/"}],sidebar:{"/admin-guides/":[{title:"For Administrators",collapsible:!0,collapsed:!1,items:[{title:"Introduction",to:"/admin-guides/introduction/"}]},{title:"Site Administration",collapsible:!0,collapsed:!1,items:[{title:"Introduction",to:"/admin-guides/site-admin/introduction/"}]},{title:"Database Administration",collapsible:!0,collapsed:!1,items:[{title:"Introduction",to:"/admin-guides/db-admin/introduction/"}]},{title:"Development Administration",collapsible:!0,collapsed:!1,items:[{title:"Introduction",to:"/admin-guides/dev-admin/introduction/"}]},{title:"Documentation Administration",collapsible:!0,collapsed:!1,items:[{title:"Introduction",to:"/admin-guides/docs-admin/introduction/"}]}],"/admin-guides/site-admin/":[{title:"Site Administration",collapsible:!0,collapsed:!1,items:[{title:"Introduction",to:"/admin-guides/site-admin/introduction/"}]}],"/tech-guides/":[{title:"Technical Information",collapsible:!0,collapsed:!1,items:[{title:"Introduction",to:"/tech-guides/introduction/"}]},{title:"Site Development",collapsible:!0,collapsed:!1,items:[{title:"Introduction",to:"/tech-guides/site-development/introduction/"}]},{title:"Database Development",collapsible:!0,collapsed:!1,items:[{title:"Introduction",to:"/tech-guides/db-development/introduction/"}]},{title:"Documentation Development",collapsible:!0,collapsed:!1,items:[{title:"Introduction",to:"/tech-guides/docs-development/introduction/"}]}],"/user-guides/":[{title:"For Users",collapsible:!0,collapsed:!1,items:[{title:"Introduction",to:"/user-guides/introduction/"},{title:"Recording Your Data",to:"/user-guides/recording-your-data/"},{title:"Using Your Data",to:"/user-guides/using-your-data/"}]}],"/faqs/":[{title:"Frequently Asked",to:"/faqs/faq/"}]},logo:"/SOCLogo_quarter.png",preBuildIconifyIcons:{carbon:["user"],"grommet-icons":["system"],tabler:["stack-2"]},themeColor:{light:"",dark:"",primary:"",hover:"",gradient:{start:"#ea580c",end:"#fed7aa"}}};var b=globalThis&&globalThis.__spreadArray||function(e,t,i){if(i||arguments.length===2)for(var o=0,r=t.length,a;o<r;o++)(a||!(o in t))&&(a||(a=Array.prototype.slice.call(t,0,o)),a[o]=t[o]);return e.concat(a||Array.prototype.slice.call(t))},O=u(!0),Y=u(!0),X=u(!0),Z=u([]),L=u([]),R=u(0),W=u(0),tt=u(0),N=u("up"),et=u(!1),it=u(!0),z=u(Object.entries(A.sidebar||{}).reduce(function(e,t){var i=t[1];return b(b([],e,!0),i,!0)},[]));R.subscribe(function(e){var t=e-x(W)>0?"down":"up";t!==x(N)&&N.set(t)});z.subscribe(function(e){L.set(e.reduce(function(t,i){return Array.isArray(i.items)?b(b([],t,!0),i.items,!0):b(b([],t,!0),[i],!1)},[]))});O.subscribe(function(e){e||Y.set(!0)});Y.subscribe(function(e){e||O.set(!0)});function st(e){var t;if(e){var i=Object.keys(A.sidebar||{}).find(function(o){return e.startsWith(o)});i&&z.set(((t=A.sidebar)===null||t===void 0?void 0:t[i])||[])}}const ot={title:"SOC Documentation",description:"Documentation for the 'Strengthen Our Community' website"};function H(e){let t,i,o,r,a,l,d,n,k=[e[0],{width:"1em"},{height:"1em"},{viewBox:"0 0 24 24"}],y={};for(let c=0;c<k.length;c+=1)y=D(y,k[c]);return{c(){t=f("svg"),i=f("g"),o=f("path"),r=f("animate"),a=f("path"),l=f("animate"),d=f("path"),n=f("animate"),this.h()},l(c){t=h(c,"svg",{width:!0,height:!0,viewBox:!0});var v=g(t);i=h(v,"g",{fill:!0,stroke:!0,strokelinecap:!0,strokelinejoin:!0,strokewidth:!0});var _=g(i);o=h(_,"path",{strokedasharray:!0,strokedashoffset:!0,d:!0});var w=g(o);r=h(w,"animate",{fill:!0,attributeName:!0,dur:!0,values:!0}),g(r).forEach(m),w.forEach(m),a=h(_,"path",{strokedasharray:!0,strokedashoffset:!0,d:!0});var C=g(a);l=h(C,"animate",{fill:!0,attributeName:!0,begin:!0,dur:!0,values:!0}),g(l).forEach(m),C.forEach(m),d=h(_,"path",{strokedasharray:!0,strokedashoffset:!0,d:!0});var S=g(d);n=h(S,"animate",{fill:!0,attributeName:!0,begin:!0,dur:!0,values:!0}),g(n).forEach(m),S.forEach(m),_.forEach(m),v.forEach(m),this.h()},h(){s(r,"fill","freeze"),s(r,"attributeName","stroke-dashoffset"),s(r,"dur","0.6s"),s(r,"values","36;0"),s(o,"strokedasharray","36"),s(o,"strokedashoffset","36"),s(o,"d","M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12"),s(l,"fill","freeze"),s(l,"attributeName","stroke-dashoffset"),s(l,"begin","0.6s"),s(l,"dur","0.3s"),s(l,"values","12;0"),s(a,"strokedasharray","12"),s(a,"strokedashoffset","12"),s(a,"d","M13 11L20 4"),s(n,"fill","freeze"),s(n,"attributeName","stroke-dashoffset"),s(n,"begin","0.9s"),s(n,"dur","0.2s"),s(n,"values","8;0"),s(d,"strokedasharray","8"),s(d,"strokedashoffset","8"),s(d,"d","M21 3H15M21 3V9"),s(i,"fill","none"),s(i,"stroke","currentColor"),s(i,"strokelinecap","round"),s(i,"strokelinejoin","round"),s(i,"strokewidth","2"),E(t,y)},m(c,v){F(c,t,v),p(t,i),p(i,o),p(o,r),p(i,a),p(a,l),p(i,d),p(d,n)},p(c,[v]){E(t,y=G(k,[v&1&&c[0],{width:"1em"},{height:"1em"},{viewBox:"0 0 24 24"}]))},i:j,o:j,d(c){c&&m(t)}}}function Q(e,t,i){const o=[];let r=q(t,o);return e.$$set=a=>{t=D(D({},t),M(a)),i(0,r=q(t,o))},[r]}class at extends T{constructor(t){super(),U(this,t,Q,H,B,{})}}const nt=I("goto"),rt=I("before_navigate"),lt=I("after_navigate");export{at as E,P as a,Y as b,lt as c,O as d,K as e,N as f,G as g,R as h,tt as i,it as j,Z as k,rt as l,st as m,X as n,W as o,nt as p,L as q,z as r,ot as s,A as t,et as u};
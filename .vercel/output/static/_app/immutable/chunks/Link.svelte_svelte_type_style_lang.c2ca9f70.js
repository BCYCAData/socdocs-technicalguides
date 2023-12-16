import{w as u,j as S}from"./singletons.b3ce5b98.js";import{ac as q,s as N,z as _,w as p,x as v,h as b,d as m,j as s,N as E,i as B,r as h,u as R,y as T,A as I}from"./scheduler.dea4bc16.js";import{S as z,i as M}from"./index.d794f1ce.js";function K(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function P(t,e){const o={},i={},l={$$scope:1};let n=t.length;for(;n--;){const r=t[n],d=e[n];if(d){for(const a in r)a in d||(i[a]=1);for(const a in d)l[a]||(o[a]=d[a],l[a]=1);t[n]=d}else for(const a in r)l[a]=1}for(const r in i)r in o||(o[r]=void 0);return o}function X(t){return typeof t=="object"&&t!==null?t:{}}const k={navbar:[{title:"Site Development",items:[{title:"Site Development",to:"/development-site/introduction/"}]},{title:"Database Development",items:[{title:"Database Development",to:"/development-db/overview/"},{title:"Development Environment",to:"/development-db/environment/"},{title:"SOC Database Design",to:"/development-db/soc-database/"}]},{title:"Documentation Development",items:[{title:"Documentation Development",to:"/development-docs/introduction/"}]},{title:"FAQ",to:"/faqs/faq"},{title:"SOC",external:!0,to:"https://soc-dev.vercel.app/"}],sidebar:{"/development-site/":[{title:"Site Development",to:"/development-site/introduction/"},{title:"Introduction",collapsible:!0,items:[{title:"Site Overview",to:"/development-site/introduction/"},{title:"Directory Structure",to:"/development-site/introduction/directory-structure/"},{title:"Technology",to:"/development-site/introduction/technologies/"},{title:"User Journey",to:"/development-site/introduction/user-journey/"}]},{title:"Component Architecture",collapsible:!0,items:[{title:"Top-Level Components",to:"/development-site/introduction/"},{title:"Reusable Components",to:"/development-site/mapping/property-map/"}]},{title:"Routes",collapsible:!0,items:[{title:"Home",to:"/development-site/routes/home/"},{title:"About Route",to:"/development-site/routes/about/"},{title:"Contact Route",to:"/development-site/routes/contact/"},{title:"Policies Route",to:"/development-site/routes/policies/"},{title:"Authentication Route",to:"/development-site/routes/authentication/"},{title:"User Profile Route",to:"/development-site/routes/profile/"},{title:"Onboarding Survey Route",to:"/development-site/routes/survey/"},{title:"Administration Route",to:"/development-site/routes/admin/"},{title:"API Route",to:"/development-site/routes/api/"}]},{title:"Component Architecture",collapsible:!0,items:[{title:"Top-Level Components",to:"/development-site/introduction/"},{title:"Reusable Components",to:"/development-site/mapping/property-map/"}]},{title:"Component Architecture",collapsible:!0,items:[{title:"Top-Level Components",to:"/development-site/introduction/"},{title:"Reusable Components",to:"/development-site/mapping/property-map/"}]},{title:"Component Architecture",collapsible:!0,items:[{title:"Top-Level Components",to:"/development-site/introduction/"},{title:"Reusable Components",to:"/development-site/mapping/property-map/"}]}],"/development-db/":[{title:"Database Development",to:"/development-db/overview/"},{title:"Development Environment",collapsible:!0,items:[{title:"Overview",to:"/development-db/environment/"},{title:"Supabase dashboard",to:"/development-db/environment/supabase-dashboard/"},{title:"Local Development",to:"/development-db/environment/local-development/"}]},{title:"Administration",to:"/development-db/soc-database/administration/"},{title:"External Connections",collapsible:!0,items:[{title:"Overview",to:"/development-db/environment/external-clients/"},{title:"Dbeaver",to:"/development-db/environment/external-clients/dbeaver/"},{title:"PG Admin",to:"/development-db/environment/external-clients/pgadmin/"},{title:"QGIS",to:"/development-db/environment/external-clients/qgis/"},{title:"Arc GIS",to:"/development-db/environment/external-clients/arcgis/"},{title:"Leaflet",to:"/development-db/environment/external-clients/leaflet/"}]},{title:"SOC Database Design",collapsible:!0,items:[{title:"Roles",to:"/development-db/soc-database/design/roles/"},{title:"Extensions",to:"/development-db/soc-database/design/extensions/"},{title:"Schemas",to:"/development-db/soc-database/design/schemas/"},{title:"auth Schema",to:"/development-db/soc-database/design/schemas/auth/"},{title:"private Schema",to:"/development-db/soc-database/design/schemas/private/"},{title:"public Schema",to:"/development-db/soc-database/design/schemas/public/"}]},{title:"auth Schema Definitions",collapsible:!0,items:[{title:"auth Tables",to:"/development-db/soc-database/design/schemas/auth/tables"},{title:"auth Views",to:"/development-db/soc-database/design/schemas/auth/views/"},{title:"auth Functions",to:"/development-db/soc-database/design/schemas/auth/functions/"},{title:"auth Sequences",to:"/development-db/soc-database/design/schemas/auth/sequences/"},{title:"auth Trigger Functions",to:"/development-db/soc-database/design/schemas/auth/trigger-functions"},{title:"auth Trigger Functions",to:"/development-db/soc-database/design/schemas/auth/trigger-functions"}]},{title:"private Schema Definitions",collapsible:!0,items:[{title:"private Tables",to:"/development-db/soc-database/design/schemas/private/tables"},{title:"private Views",to:"/development-db/soc-database/design/schemas/private/views/"},{title:"private Functions",to:"/development-db/soc-database/design/schemas/private/functions/"},{title:"private Sequences",to:"/development-db/soc-database/design/schemas/private/sequences/"},{title:"private Trigger Functions",to:"/development-db/soc-database/design/schemas/private/trigger-functions"}]},{title:"private Schema Definitions",collapsible:!0,items:[{title:"public Tables",to:"/development-db/soc-database/design/schemas/public/tables"},{title:"public Views",to:"/development-db/soc-database/design/schemas/public/views/"},{title:"public Functions",to:"/development-db/soc-database/design/schemas/public/functions/"},{title:"public Sequences",to:"/development-db/soc-database/design/schemas/public/sequences/"},{title:"public Trigger Functions",to:"/development-db/soc-database/design/schemas/public/trigger-functions"}]}],"/development-docs/":[{title:"Documentation Development",collapsible:!0,collapsed:!1,items:[{title:"Introduction",to:"/development-site/introduction/"}]}],"/faqs/":[{title:"Frequently Asked",to:"/faqs/faq/"}]},editLink:"https://github.com/BCYCAData/socdocs-technicalguides/edit/main/src/routes/:route",github:"https://github.com/BCYCAData/socdocs-technicalguides",logo:"/SOCLogo_quarter.png",preBuildIconifyIcons:{carbon:["user"],"grommet-icons":["system"],tabler:["stack-2"]},themeColor:{light:"",dark:"",primary:"",hover:"",gradient:{start:"#ea580c",end:"#fed7aa"}}};var g=globalThis&&globalThis.__spreadArray||function(t,e,o){if(o||arguments.length===2)for(var i=0,l=e.length,n;i<l;i++)(n||!(i in e))&&(n||(n=Array.prototype.slice.call(e,0,i)),n[i]=e[i]);return t.concat(n||Array.prototype.slice.call(e))},j=u(!0),L=u(!0),Z=u(!0),$=u([]),V=u([]),Y=u(0),G=u(0),O=u("up"),ee=u(!1),te=u(!0),F=u(Object.entries(k.sidebar||{}).reduce(function(t,e){var o=e[1];return g(g([],t,!0),o,!0)},[]));Y.subscribe(function(t){var e=t-q(G)>0?"down":"up";e!==q(O)&&O.set(e)});F.subscribe(function(t){V.set(t.reduce(function(e,o){return Array.isArray(o.items)?g(g([],e,!0),o.items,!0):g(g([],e,!0),[o],!1)},[]))});j.subscribe(function(t){t||L.set(!0)});L.subscribe(function(t){t||j.set(!0)});function oe(t){var e;if(t){var o=Object.keys(k.sidebar||{}).find(function(i){return t.startsWith(i)});o&&F.set(((e=k.sidebar)===null||e===void 0?void 0:e[o])||[])}}const se={title:"SOC Documentation",description:"Documentation for the 'Strengthen Our Community' website"};function H(t){let e,o,i,l,n,r,d,a,D=[t[0],{width:"1em"},{height:"1em"},{viewBox:"0 0 24 24"}],y={};for(let c=0;c<D.length;c+=1)y=_(y,D[c]);return{c(){e=p("svg"),o=p("g"),i=p("path"),l=p("animate"),n=p("path"),r=p("animate"),d=p("path"),a=p("animate"),this.h()},l(c){e=v(c,"svg",{width:!0,height:!0,viewBox:!0});var f=b(e);o=v(f,"g",{fill:!0,stroke:!0,strokelinecap:!0,strokelinejoin:!0,strokewidth:!0});var C=b(o);i=v(C,"path",{strokedasharray:!0,strokedashoffset:!0,d:!0});var w=b(i);l=v(w,"animate",{fill:!0,attributeName:!0,dur:!0,values:!0}),b(l).forEach(m),w.forEach(m),n=v(C,"path",{strokedasharray:!0,strokedashoffset:!0,d:!0});var A=b(n);r=v(A,"animate",{fill:!0,attributeName:!0,begin:!0,dur:!0,values:!0}),b(r).forEach(m),A.forEach(m),d=v(C,"path",{strokedasharray:!0,strokedashoffset:!0,d:!0});var x=b(d);a=v(x,"animate",{fill:!0,attributeName:!0,begin:!0,dur:!0,values:!0}),b(a).forEach(m),x.forEach(m),C.forEach(m),f.forEach(m),this.h()},h(){s(l,"fill","freeze"),s(l,"attributeName","stroke-dashoffset"),s(l,"dur","0.6s"),s(l,"values","36;0"),s(i,"strokedasharray","36"),s(i,"strokedashoffset","36"),s(i,"d","M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12"),s(r,"fill","freeze"),s(r,"attributeName","stroke-dashoffset"),s(r,"begin","0.6s"),s(r,"dur","0.3s"),s(r,"values","12;0"),s(n,"strokedasharray","12"),s(n,"strokedashoffset","12"),s(n,"d","M13 11L20 4"),s(a,"fill","freeze"),s(a,"attributeName","stroke-dashoffset"),s(a,"begin","0.9s"),s(a,"dur","0.2s"),s(a,"values","8;0"),s(d,"strokedasharray","8"),s(d,"strokedashoffset","8"),s(d,"d","M21 3H15M21 3V9"),s(o,"fill","none"),s(o,"stroke","currentColor"),s(o,"strokelinecap","round"),s(o,"strokelinejoin","round"),s(o,"strokewidth","2"),E(e,y)},m(c,f){B(c,e,f),h(e,o),h(o,i),h(i,l),h(o,n),h(n,r),h(o,d),h(d,a)},p(c,[f]){E(e,y=P(D,[f&1&&c[0],{width:"1em"},{height:"1em"},{viewBox:"0 0 24 24"}]))},i:R,o:R,d(c){c&&m(e)}}}function Q(t,e,o){const i=[];let l=T(e,i);return t.$$set=n=>{e=_(_({},e),I(n)),o(0,l=T(e,i))},[l]}class ie extends z{constructor(e){super(),M(this,e,Q,H,N,{})}}const ne=S("goto"),ae=S("before_navigate"),le=S("after_navigate");export{ie as E,X as a,L as b,le as c,j as d,K as e,O as f,P as g,Y as h,te as i,$ as j,oe as k,ae as l,ne as m,Z as n,G as o,V as p,ee as q,F as r,se as s,k as t};
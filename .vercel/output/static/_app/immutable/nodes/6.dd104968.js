import{s as N,w as k,x as G,h as S,d as r,j as l,i as f,r as m,u as _,e as j,p as K,f as y,g as v,F,J as W,a as x,c as L,Z as E,k as J}from"../chunks/scheduler.b364ac0e.js";import{S as D,i as A,g as X,t as P,c as Y,a as C,b as H,d as R,m as q,e as z}from"../chunks/index.1fcbdd57.js";import{P as ee}from"../chunks/CopyCode.svelte_svelte_type_style_lang.5bab0c5e.js";import"../chunks/Link.svelte_svelte_type_style_lang.a844e97f.js";import"../chunks/singletons.eddef32a.js";function se(i){let e,s,t;return{c(){e=k("svg"),s=k("path"),t=k("path"),this.h()},l(a){e=G(a,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0});var p=S(e);s=G(p,"path",{fill:!0,d:!0}),S(s).forEach(r),t=G(p,"path",{fill:!0,d:!0}),S(t).forEach(r),p.forEach(r),this.h()},h(){l(s,"fill","currentColor"),l(s,"d","M7.024 3.75c0-.966.784-1.75 1.75-1.75H20.25c.966 0 1.75.784 1.75 1.75v11.498a1.75 1.75 0 0 1-1.75 1.75H8.774a1.75 1.75 0 0 1-1.75-1.75Zm1.75-.25a.25.25 0 0 0-.25.25v11.498c0 .139.112.25.25.25H20.25a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25Z"),l(t,"fill","currentColor"),l(t,"d","M1.995 10.749a1.75 1.75 0 0 1 1.75-1.751H5.25a.75.75 0 1 1 0 1.5H3.745a.25.25 0 0 0-.25.25L3.5 20.25c0 .138.111.25.25.25h9.5a.25.25 0 0 0 .25-.25v-1.51a.75.75 0 1 1 1.5 0v1.51A1.75 1.75 0 0 1 13.25 22h-9.5A1.75 1.75 0 0 1 2 20.25l-.005-9.501Z"),l(e,"xmlns","http://www.w3.org/2000/svg"),l(e,"width","1em"),l(e,"height","1em"),l(e,"viewBox","0 0 24 24")},m(a,p){f(a,e,p),m(e,s),m(e,t)},p:_,i:_,o:_,d(a){a&&r(e)}}}class te extends D{constructor(e){super(),A(this,e,null,se,N,{})}}function ae(i){let e,s;return{c(){e=k("svg"),s=k("path"),this.h()},l(t){e=G(t,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0});var a=S(e);s=G(a,"path",{fill:!0,d:!0}),S(s).forEach(r),a.forEach(r),this.h()},h(){l(s,"fill","currentColor"),l(s,"d","M9 16.2L4.8 12l-1.4 1.4L9 19L21 7l-1.4-1.4L9 16.2z"),l(e,"xmlns","http://www.w3.org/2000/svg"),l(e,"width","1em"),l(e,"height","1em"),l(e,"viewBox","0 0 24 24")},m(t,a){f(t,e,a),m(e,s)},p:_,i:_,o:_,d(t){t&&r(e)}}}class ne extends D{constructor(e){super(),A(this,e,null,ae,N,{})}}function le(i){let e,s,t,a,p;return s=new te({}),{c(){e=y("div"),H(s.$$.fragment),this.h()},l(n){e=v(n,"DIV",{class:!0,role:!0,tabindex:!0,"aria-label":!0});var u=S(e);R(s.$$.fragment,u),u.forEach(r),this.h()},h(){l(e,"class","svp-code-bock--copy-code"),l(e,"role","button"),l(e,"tabindex","0"),l(e,"aria-label","Copy code")},m(n,u){f(n,e,u),q(s,e,null),i[3](e),t=!0,a||(p=[F(e,"click",i[2]),F(e,"keyup",i[2])],a=!0)},p:_,i(n){t||(C(s.$$.fragment,n),t=!0)},o(n){P(s.$$.fragment,n),t=!1},d(n){n&&r(e),z(s),i[3](null),a=!1,W(p)}}}function pe(i){let e,s,t;return s=new ne({}),{c(){e=y("div"),H(s.$$.fragment),this.h()},l(a){e=v(a,"DIV",{class:!0});var p=S(e);R(s.$$.fragment,p),p.forEach(r),this.h()},h(){l(e,"class","svp-code-bock--copy-code")},m(a,p){f(a,e,p),q(s,e,null),t=!0},p:_,i(a){t||(C(s.$$.fragment,a),t=!0)},o(a){P(s.$$.fragment,a),t=!1},d(a){a&&r(e),z(s)}}}function oe(i){let e,s,t,a;const p=[pe,le],n=[];function u(o,d){return o[1]?0:1}return e=u(i),s=n[e]=p[e](i),{c(){s.c(),t=j()},l(o){s.l(o),t=j()},m(o,d){n[e].m(o,d),f(o,t,d),a=!0},p(o,[d]){let g=e;e=u(o),e===g?n[e].p(o,d):(X(),P(n[g],1,1,()=>{n[g]=null}),Y(),s=n[e],s?s.p(o,d):(s=n[e]=p[e](o),s.c()),C(s,1),s.m(t.parentNode,t))},i(o){a||(C(s),a=!0)},o(o){P(s),a=!1},d(o){o&&r(t),n[e].d(o)}}}function re(i,e,s){let t,a=!1;function p(){var o,d;const u=((d=(o=t==null?void 0:t.parentElement)==null?void 0:o.querySelector(".shiki"))==null?void 0:d.textContent)||"";navigator.clipboard.writeText(u),s(1,a=!0),setTimeout(()=>{s(1,a=!1)},2e3)}function n(u){K[u?"unshift":"push"](()=>{t=u,s(0,t)})}return[t,a,p,n]}class ce extends D{constructor(e){super(),A(this,e,re,oe,N,{})}}function ie(i){let e,s,t,a='<a href="#Map-Editor" class="svp-title-anchor" aria-label="Map Editor"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path d="M280 341.1l-1.2.1c-3.6.4-7 2-9.6 4.5l-64.6 64.6c-13.7 13.7-32 21.2-51.5 21.2s-37.8-7.5-51.5-21.2c-13.7-13.7-21.2-32-21.2-51.5s7.5-37.8 21.2-51.5l68.6-68.6c3.5-3.5 7.3-6.6 11.4-9.3 4.6-3 9.6-5.6 14.8-7.5 4.8-1.8 9.9-3 15-3.7 3.4-.5 6.9-.7 10.2-.7 1.4 0 2.8.1 4.6.2 17.7 1.1 34.4 8.6 46.8 21 7.7 7.7 13.6 17.1 17.1 27.3 2.8 8 11.2 12.5 19.3 10.1.1 0 .2-.1.3-.1.1 0 .2 0 .2-.1 8.1-2.5 12.8-11 10.5-19.1-4.4-15.6-12.2-28.7-24.6-41-15.6-15.6-35.9-25.8-57.6-29.3-1.9-.3-3.8-.6-5.7-.8-3.7-.4-7.4-.6-11.1-.6-2.6 0-5.2.1-7.7.3-5.4.4-10.8 1.2-16.2 2.5-1.1.2-2.1.5-3.2.8-6.7 1.8-13.3 4.2-19.5 7.3-10.3 5.1-19.6 11.7-27.7 19.9l-68.6 68.6C58.9 304.4 48 330.8 48 359c0 28.2 10.9 54.6 30.7 74.4C98.5 453.1 124.9 464 153 464c28.2 0 54.6-10.9 74.4-30.7l65.3-65.3c10.4-10.5 2-28.3-12.7-26.9z" fill="currentColor"></path><path d="M433.3 78.7C413.5 58.9 387.1 48 359 48s-54.6 10.9-74.4 30.7l-63.7 63.7c-9.7 9.7-3.6 26.3 10.1 27.4 4.7.4 9.3-1.3 12.7-4.6l63.8-63.6c13.7-13.7 32-21.2 51.5-21.2s37.8 7.5 51.5 21.2c13.7 13.7 21.2 32 21.2 51.5s-7.5 37.8-21.2 51.5l-68.6 68.6c-3.5 3.5-7.3 6.6-11.4 9.3-4.6 3-9.6 5.6-14.8 7.5-4.8 1.8-9.9 3-15 3.7-3.4.5-6.9.7-10.2.7-1.4 0-2.9-.1-4.6-.2-17.7-1.1-34.4-8.6-46.8-21-7.3-7.3-12.8-16-16.4-25.5-2.9-7.7-11.1-11.9-19.1-9.8-8.9 2.3-14.1 11.7-11.3 20.5 4.5 14 12.1 25.9 23.7 37.5l.2.2c16.9 16.9 39.4 27.6 63.3 30.1 3.7.4 7.4.6 11.1.6 2.6 0 5.2-.1 7.8-.3 6.5-.5 13-1.6 19.3-3.2 6.7-1.8 13.3-4.2 19.5-7.3 10.3-5.1 19.6-11.7 27.7-19.9l68.6-68.6c19.8-19.8 30.7-46.2 30.7-74.4s-11.1-54.6-30.9-74.4z" fill="currentColor"></path></svg></a>Map Editor',p,n,u=`sequenceDiagram
participant User
participant SvelteApp
participant MapSvelte
participant PostGIS
participant Leaflet
participant Database`,o,d,g,b,B=`<code><span class="line"><span style="color: #393a34">User-&gt;&gt;SvelteApp: Accesses the Svelte application</span></span>
<span class="line"><span style="color: #393a34">SvelteApp-&gt;&gt;MapSvelte: Renders the Map component</span></span>
<span class="line"><span style="color: #393a34">MapSvelte-&gt;&gt;PostGIS: Initializes PostGIS SQL client</span></span>
<span class="line"><span style="color: #393a34">Note right of PostGIS: Connects to the database</span></span>
<span class="line"><span style="color: #393a34">PostGIS--&gt;&gt;MapSvelte: Connection successful</span></span>
<span class="line"><span style="color: #393a34">MapSvelte-&gt;&gt;PostGIS: Executes SQL query to fetch polygon data</span></span>
<span class="line"><span style="color: #393a34">Note right of PostGIS: Retrieves polygon data from database</span></span>
<span class="line"><span style="color: #393a34">PostGIS--&gt;&gt;MapSvelte: Returns polygon data</span></span>
<span class="line"><span style="color: #393a34">MapSvelte-&gt;&gt;Leaflet: Renders the map with OSM background</span></span>
<span class="line"><span style="color: #393a34">Note right of Leaflet: Displays the map with tiles</span></span>
<span class="line"><span style="color: #393a34">MapSvelte-&gt;&gt;MapSvelte: Parses and renders polygon layers on the map</span></span>
<span class="line"><span style="color: #393a34">User--&gt;&gt;MapSvelte: Views the map with polygons</span></span>
<span class="line"><span style="color: #393a34"></span></span>
<span class="line"><span style="color: #393a34">User-&gt;&gt;MapSvelte: Edits the polygon geometry</span></span>
<span class="line"><span style="color: #393a34">MapSvelte-&gt;&gt;Leaflet: Enables polygon editing controls</span></span>
<span class="line"><span style="color: #393a34">Note right of Leaflet: Initializes the editing mode</span></span>
<span class="line"><span style="color: #393a34">Leaflet-&gt;&gt;MapSvelte: Notifies polygon editing started</span></span>
<span class="line"><span style="color: #393a34">MapSvelte--&gt;&gt;MapSvelte: Listens to edit events</span></span>
<span class="line"><span style="color: #393a34"></span></span>
<span class="line"><span style="color: #393a34">loop Edit Geometry</span></span>
<span class="line"><span style="color: #393a34">    User-&gt;&gt;Leaflet: Modifies the polygon geometry</span></span>
<span class="line"><span style="color: #393a34">    Leaflet-&gt;&gt;MapSvelte: Notifies polygon edited</span></span>
<span class="line"><span style="color: #393a34">    MapSvelte-&gt;&gt;MapSvelte: Updates the edited geometry</span></span>
<span class="line"><span style="color: #393a34"></span></span>
<span class="line"><span style="color: #393a34">    MapSvelte-&gt;&gt;PostGIS: Updates the database with edited geometry</span></span>
<span class="line"><span style="color: #393a34">    Note right of PostGIS: Executes SQL query to update&lt;br&gt;the polygon geometry</span></span>
<span class="line"><span style="color: #393a34">    PostGIS--&gt;&gt;MapSvelte: Update successful</span></span>
<span class="line"><span style="color: #393a34">end</span></span>
<span class="line"><span style="color: #393a34"></span></span>
<span class="line"><span style="color: #393a34">User-&gt;&gt;MapSvelte: Clicks on save button</span></span>
<span class="line"><span style="color: #393a34">MapSvelte-&gt;&gt;PostGIS: Saves all edited polygons</span></span>
<span class="line"><span style="color: #393a34">Note right of PostGIS: Executes SQL queries to&lt;br&gt;update each polygon geometry</span></span>
<span class="line"><span style="color: #393a34">PostGIS--&gt;&gt;MapSvelte: All updates successful</span></span>
<span class="line"><span style="color: #393a34">MapSvelte-&gt;&gt;User: Displays success message</span></span></code>`,T,M,Z=`<code><span class="line"><span style="color: #d6deeb">User-&gt;&gt;SvelteApp: Accesses the Svelte application</span></span>
<span class="line"><span style="color: #d6deeb">SvelteApp-&gt;&gt;MapSvelte: Renders the Map component</span></span>
<span class="line"><span style="color: #d6deeb">MapSvelte-&gt;&gt;PostGIS: Initializes PostGIS SQL client</span></span>
<span class="line"><span style="color: #d6deeb">Note right of PostGIS: Connects to the database</span></span>
<span class="line"><span style="color: #d6deeb">PostGIS--&gt;&gt;MapSvelte: Connection successful</span></span>
<span class="line"><span style="color: #d6deeb">MapSvelte-&gt;&gt;PostGIS: Executes SQL query to fetch polygon data</span></span>
<span class="line"><span style="color: #d6deeb">Note right of PostGIS: Retrieves polygon data from database</span></span>
<span class="line"><span style="color: #d6deeb">PostGIS--&gt;&gt;MapSvelte: Returns polygon data</span></span>
<span class="line"><span style="color: #d6deeb">MapSvelte-&gt;&gt;Leaflet: Renders the map with OSM background</span></span>
<span class="line"><span style="color: #d6deeb">Note right of Leaflet: Displays the map with tiles</span></span>
<span class="line"><span style="color: #d6deeb">MapSvelte-&gt;&gt;MapSvelte: Parses and renders polygon layers on the map</span></span>
<span class="line"><span style="color: #d6deeb">User--&gt;&gt;MapSvelte: Views the map with polygons</span></span>
<span class="line"><span style="color: #d6deeb"></span></span>
<span class="line"><span style="color: #d6deeb">User-&gt;&gt;MapSvelte: Edits the polygon geometry</span></span>
<span class="line"><span style="color: #d6deeb">MapSvelte-&gt;&gt;Leaflet: Enables polygon editing controls</span></span>
<span class="line"><span style="color: #d6deeb">Note right of Leaflet: Initializes the editing mode</span></span>
<span class="line"><span style="color: #d6deeb">Leaflet-&gt;&gt;MapSvelte: Notifies polygon editing started</span></span>
<span class="line"><span style="color: #d6deeb">MapSvelte--&gt;&gt;MapSvelte: Listens to edit events</span></span>
<span class="line"><span style="color: #d6deeb"></span></span>
<span class="line"><span style="color: #d6deeb">loop Edit Geometry</span></span>
<span class="line"><span style="color: #d6deeb">    User-&gt;&gt;Leaflet: Modifies the polygon geometry</span></span>
<span class="line"><span style="color: #d6deeb">    Leaflet-&gt;&gt;MapSvelte: Notifies polygon edited</span></span>
<span class="line"><span style="color: #d6deeb">    MapSvelte-&gt;&gt;MapSvelte: Updates the edited geometry</span></span>
<span class="line"><span style="color: #d6deeb"></span></span>
<span class="line"><span style="color: #d6deeb">    MapSvelte-&gt;&gt;PostGIS: Updates the database with edited geometry</span></span>
<span class="line"><span style="color: #d6deeb">    Note right of PostGIS: Executes SQL query to update&lt;br&gt;the polygon geometry</span></span>
<span class="line"><span style="color: #d6deeb">    PostGIS--&gt;&gt;MapSvelte: Update successful</span></span>
<span class="line"><span style="color: #d6deeb">end</span></span>
<span class="line"><span style="color: #d6deeb"></span></span>
<span class="line"><span style="color: #d6deeb">User-&gt;&gt;MapSvelte: Clicks on save button</span></span>
<span class="line"><span style="color: #d6deeb">MapSvelte-&gt;&gt;PostGIS: Saves all edited polygons</span></span>
<span class="line"><span style="color: #d6deeb">Note right of PostGIS: Executes SQL queries to&lt;br&gt;update each polygon geometry</span></span>
<span class="line"><span style="color: #d6deeb">PostGIS--&gt;&gt;MapSvelte: All updates successful</span></span>
<span class="line"><span style="color: #d6deeb">MapSvelte-&gt;&gt;User: Displays success message</span></span></code>`,V,w,O="null",Q,I,U;return I=new ce({}),{c(){e=y("div"),s=x(),t=y("h2"),t.innerHTML=a,p=x(),n=y("p"),n.textContent=u,o=x(),d=y("div"),g=y("div"),b=y("pre"),b.innerHTML=B,T=x(),M=y("pre"),M.innerHTML=Z,V=x(),w=y("div"),w.textContent=O,Q=x(),H(I.$$.fragment),this.h()},l(c){e=v(c,"DIV",{id:!0,class:!0}),S(e).forEach(r),s=L(c),t=v(c,"H2",{"data-svelte-h":!0}),E(t)!=="svelte-v1bbsa"&&(t.innerHTML=a),p=L(c),n=v(c,"P",{"data-svelte-h":!0}),E(n)!=="svelte-1dg8wxv"&&(n.textContent=u),o=L(c),d=v(c,"DIV",{class:!0});var h=S(d);g=v(h,"DIV",{class:!0});var $=S(g);b=v($,"PRE",{class:!0,style:!0,tabindex:!0,"data-svelte-h":!0}),E(b)!=="svelte-1nsfdza"&&(b.innerHTML=B),T=L($),M=v($,"PRE",{class:!0,style:!0,tabindex:!0,"data-svelte-h":!0}),E(M)!=="svelte-1hzehmm"&&(M.innerHTML=Z),V=L($),w=v($,"DIV",{class:!0,"data-svelte-h":!0}),E(w)!=="svelte-fiw3ix"&&(w.textContent=O),Q=L($),R(I.$$.fragment,$),$.forEach(r),h.forEach(r),this.h()},h(){l(e,"id","Map-Editor"),l(e,"class","svp-anchor-item"),l(b,"class","shiki vitesse-light"),J(b,"background-color","#ffffff"),l(b,"tabindex","0"),l(M,"class","shiki night-owl"),J(M,"background-color","#011627"),l(M,"tabindex","0"),l(w,"class","svp-code-block--lang"),l(g,"class","svp-code-block"),l(d,"class","svp-code-block-wrapper")},m(c,h){f(c,e,h),f(c,s,h),f(c,t,h),f(c,p,h),f(c,n,h),f(c,o,h),f(c,d,h),m(d,g),m(g,b),m(g,T),m(g,M),m(g,V),m(g,w),m(g,Q),q(I,g,null),U=!0},p:_,i(c){U||(C(I.$$.fragment,c),U=!0)},o(c){P(I.$$.fragment,c),U=!1},d(c){c&&(r(e),r(s),r(t),r(p),r(n),r(o),r(d)),z(I)}}}function de(i){let e,s;return e=new ee({props:{fm:i[0],$$slots:{default:[ie]},$$scope:{ctx:i}}}),{c(){H(e.$$.fragment)},l(t){R(e.$$.fragment,t)},m(t,a){q(e,t,a),s=!0},p(t,[a]){const p={};a&2&&(p.$$scope={dirty:a,ctx:t}),e.$set(p)},i(t){s||(C(e.$$.fragment,t),s=!0)},o(t){P(e.$$.fragment,t),s=!1},d(t){z(e,t)}}}function ge(i){return[{pageType:"md",lastUpdate:"2023/07/01 09:59:26",title:"Introduction",description:"Introduction to the Database Administration guides",anchors:[{slugId:"Map-Editor",title:"Map Editor",depth:2}]}]}class me extends D{constructor(e){super(),A(this,e,ge,de,N,{})}}export{me as component};
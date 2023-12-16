import{s as T,f as d,a as b,g,h as E,d as l,c as I,Z as L,j as c,k as D,i as m,r as M,u as V}from"../chunks/scheduler.dea4bc16.js";import{S as O,i as j,b as A,d as R,m as q,a as z,t as Q,e as H}from"../chunks/index.d794f1ce.js";import{P as B}from"../chunks/CopyCode.svelte_svelte_type_style_lang.bfb154db.js";import"../chunks/Link.svelte_svelte_type_style_lang.c2ca9f70.js";import"../chunks/singletons.b3ce5b98.js";import{C as Z}from"../chunks/CopyCode.d91d7dd6.js";function F(P){let s,p,a,y='<a href="#Map-Editor" class="svp-title-anchor" aria-label="Map Editor"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path d="M280 341.1l-1.2.1c-3.6.4-7 2-9.6 4.5l-64.6 64.6c-13.7 13.7-32 21.2-51.5 21.2s-37.8-7.5-51.5-21.2c-13.7-13.7-21.2-32-21.2-51.5s7.5-37.8 21.2-51.5l68.6-68.6c3.5-3.5 7.3-6.6 11.4-9.3 4.6-3 9.6-5.6 14.8-7.5 4.8-1.8 9.9-3 15-3.7 3.4-.5 6.9-.7 10.2-.7 1.4 0 2.8.1 4.6.2 17.7 1.1 34.4 8.6 46.8 21 7.7 7.7 13.6 17.1 17.1 27.3 2.8 8 11.2 12.5 19.3 10.1.1 0 .2-.1.3-.1.1 0 .2 0 .2-.1 8.1-2.5 12.8-11 10.5-19.1-4.4-15.6-12.2-28.7-24.6-41-15.6-15.6-35.9-25.8-57.6-29.3-1.9-.3-3.8-.6-5.7-.8-3.7-.4-7.4-.6-11.1-.6-2.6 0-5.2.1-7.7.3-5.4.4-10.8 1.2-16.2 2.5-1.1.2-2.1.5-3.2.8-6.7 1.8-13.3 4.2-19.5 7.3-10.3 5.1-19.6 11.7-27.7 19.9l-68.6 68.6C58.9 304.4 48 330.8 48 359c0 28.2 10.9 54.6 30.7 74.4C98.5 453.1 124.9 464 153 464c28.2 0 54.6-10.9 74.4-30.7l65.3-65.3c10.4-10.5 2-28.3-12.7-26.9z" fill="currentColor"></path><path d="M433.3 78.7C413.5 58.9 387.1 48 359 48s-54.6 10.9-74.4 30.7l-63.7 63.7c-9.7 9.7-3.6 26.3 10.1 27.4 4.7.4 9.3-1.3 12.7-4.6l63.8-63.6c13.7-13.7 32-21.2 51.5-21.2s37.8 7.5 51.5 21.2c13.7 13.7 21.2 32 21.2 51.5s-7.5 37.8-21.2 51.5l-68.6 68.6c-3.5 3.5-7.3 6.6-11.4 9.3-4.6 3-9.6 5.6-14.8 7.5-4.8 1.8-9.9 3-15 3.7-3.4.5-6.9.7-10.2.7-1.4 0-2.9-.1-4.6-.2-17.7-1.1-34.4-8.6-46.8-21-7.3-7.3-12.8-16-16.4-25.5-2.9-7.7-11.1-11.9-19.1-9.8-8.9 2.3-14.1 11.7-11.3 20.5 4.5 14 12.1 25.9 23.7 37.5l.2.2c16.9 16.9 39.4 27.6 63.3 30.1 3.7.4 7.4.6 11.1.6 2.6 0 5.2-.1 7.8-.3 6.5-.5 13-1.6 19.3-3.2 6.7-1.8 13.3-4.2 19.5-7.3 10.3-5.1 19.6-11.7 27.7-19.9l68.6-68.6c19.8-19.8 30.7-46.2 30.7-74.4s-11.1-54.6-30.9-74.4z" fill="currentColor"></path></svg></a>Map Editor',v,S,w=`sequenceDiagram
participant User
participant SvelteApp
participant MapSvelte
participant PostGIS
participant Leaflet
participant Database`,G,f,t,o,U=`<code><span class="line"><span style="color: #393a34">User-&gt;&gt;SvelteApp: Accesses the Svelte application</span></span>
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
<span class="line"><span style="color: #393a34">MapSvelte-&gt;&gt;User: Displays success message</span></span></code>`,_,i,N=`<code><span class="line"><span style="color: #d6deeb">User-&gt;&gt;SvelteApp: Accesses the Svelte application</span></span>
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
<span class="line"><span style="color: #d6deeb">MapSvelte-&gt;&gt;User: Displays success message</span></span></code>`,$,u,k="null",C,h,x;return h=new Z({}),{c(){s=d("div"),p=b(),a=d("h2"),a.innerHTML=y,v=b(),S=d("p"),S.textContent=w,G=b(),f=d("div"),t=d("div"),o=d("pre"),o.innerHTML=U,_=b(),i=d("pre"),i.innerHTML=N,$=b(),u=d("div"),u.textContent=k,C=b(),A(h.$$.fragment),this.h()},l(e){s=g(e,"DIV",{id:!0,class:!0}),E(s).forEach(l),p=I(e),a=g(e,"H2",{"data-svelte-h":!0}),L(a)!=="svelte-v1bbsa"&&(a.innerHTML=y),v=I(e),S=g(e,"P",{"data-svelte-h":!0}),L(S)!=="svelte-1dg8wxv"&&(S.textContent=w),G=I(e),f=g(e,"DIV",{class:!0});var n=E(f);t=g(n,"DIV",{class:!0});var r=E(t);o=g(r,"PRE",{class:!0,style:!0,tabindex:!0,"data-svelte-h":!0}),L(o)!=="svelte-1nsfdza"&&(o.innerHTML=U),_=I(r),i=g(r,"PRE",{class:!0,style:!0,tabindex:!0,"data-svelte-h":!0}),L(i)!=="svelte-1hzehmm"&&(i.innerHTML=N),$=I(r),u=g(r,"DIV",{class:!0,"data-svelte-h":!0}),L(u)!=="svelte-fiw3ix"&&(u.textContent=k),C=I(r),R(h.$$.fragment,r),r.forEach(l),n.forEach(l),this.h()},h(){c(s,"id","Map-Editor"),c(s,"class","svp-anchor-item"),c(o,"class","shiki vitesse-light"),D(o,"background-color","#ffffff"),c(o,"tabindex","0"),c(i,"class","shiki night-owl"),D(i,"background-color","#011627"),c(i,"tabindex","0"),c(u,"class","svp-code-block--lang"),c(t,"class","svp-code-block"),c(f,"class","svp-code-block-wrapper")},m(e,n){m(e,s,n),m(e,p,n),m(e,a,n),m(e,v,n),m(e,S,n),m(e,G,n),m(e,f,n),M(f,t),M(t,o),M(t,_),M(t,i),M(t,$),M(t,u),M(t,C),q(h,t,null),x=!0},p:V,i(e){x||(z(h.$$.fragment,e),x=!0)},o(e){Q(h.$$.fragment,e),x=!1},d(e){e&&(l(s),l(p),l(a),l(v),l(S),l(G),l(f)),H(h)}}}function J(P){let s,p;return s=new B({props:{fm:P[0],$$slots:{default:[F]},$$scope:{ctx:P}}}),{c(){A(s.$$.fragment)},l(a){R(s.$$.fragment,a)},m(a,y){q(s,a,y),p=!0},p(a,[y]){const v={};y&2&&(v.$$scope={dirty:y,ctx:a}),s.$set(v)},i(a){p||(z(s.$$.fragment,a),p=!0)},o(a){Q(s.$$.fragment,a),p=!1},d(a){H(s,a)}}}function K(P){return[{pageType:"md",lastUpdate:"2023/07/01 09:59:26",title:"Introduction",description:"Introduction to the Database Administration guides",anchors:[{slugId:"Map-Editor",title:"Map Editor",depth:2}]}]}class te extends O{constructor(s){super(),j(this,s,K,J,T,{})}}export{te as component};

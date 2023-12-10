import { w as writable } from "./index.js";
import { r as get_store_value, c as create_ssr_component, b as compute_rest_props, f as spread, h as escape_object } from "./ssr.js";
const themeOptions = { "navbar": [{ "title": "Site Development", "items": [{ "title": "Site Development", "to": "/development-site/introduction/" }] }, { "title": "Database Development", "to": "/development-db/", "items": [{ "title": "Environment title", "to": "/development-db/environment/" }, { "title": "SOC Database title", "to": "/development-db/soc-database/" }] }, { "title": "Documentation Development", "items": [{ "title": "Documentation Development", "to": "/development-docs/introduction/" }] }, { "title": "FAQ", "to": "/faqs/faq" }, { "title": "SOC", "external": true, "to": "https://soc-dev.vercel.app/" }], "sidebar": { "/development-site/": [{ "title": "Site Development", "to": "/development-site/introduction/" }, { "title": "Introduction", "collapsible": true, "items": [{ "title": "Site Overview", "to": "/development-site/introduction/" }, { "title": "Directory Structure", "to": "/development-site/introduction/directory-structure/" }, { "title": "Technology", "to": "/development-site/introduction/technologies/" }, { "title": "User Journey", "to": "/development-site/introduction/user-journey/" }] }, { "title": "Component Architecture", "collapsible": true, "items": [{ "title": "Top-Level Components", "to": "/development-site/introduction/" }, { "title": "Reusable Components", "to": "/development-site/mapping/property-map/" }] }, { "title": "Routes", "collapsible": true, "items": [{ "title": "Home", "to": "/development-site/routes/home/" }, { "title": "About Route", "to": "/development-site/routes/about/" }, { "title": "Contact Route", "to": "/development-site/routes/contact/" }, { "title": "Policies Route", "to": "/development-site/routes/policies/" }, { "title": "Authentication Route", "to": "/development-site/routes/authentication/" }, { "title": "User Profile Route", "to": "/development-site/routes/profile/" }, { "title": "Onboarding Survey Route", "to": "/development-site/routes/survey/" }, { "title": "Administration Route", "to": "/development-site/routes/admin/" }, { "title": "API Route", "to": "/development-site/routes/api/" }] }, { "title": "Component Architecture", "collapsible": true, "items": [{ "title": "Top-Level Components", "to": "/development-site/introduction/" }, { "title": "Reusable Components", "to": "/development-site/mapping/property-map/" }] }, { "title": "Component Architecture", "collapsible": true, "items": [{ "title": "Top-Level Components", "to": "/development-site/introduction/" }, { "title": "Reusable Components", "to": "/development-site/mapping/property-map/" }] }, { "title": "Component Architecture", "collapsible": true, "items": [{ "title": "Top-Level Components", "to": "/development-site/introduction/" }, { "title": "Reusable Components", "to": "/development-site/mapping/property-map/" }] }], "/development-db/": [{ "title": "Database Development sidebar", "to": "/development-db/" }, { "title": "Development Environment", "to": "/development-db/environment/", "collapsible": true, "items": [{ "title": "Overview", "to": "/development-db/environment/" }, { "title": "Supabase dashboard", "to": "/development-db/environment/supabase-dashboard/" }, { "title": "Local Development", "to": "/development-db/environment/local-development/" }, { "title": "External Connections", "to": "/development-db/environment/external-clients/" }, { "title": "External Clients", "collapsible": true, "items": [{ "title": "Dbeaver", "to": "/development-db/environment/external-clients/dbeaver/" }, { "title": "PG Admin", "to": "/development-db/environment/external-clients/pgadmin/" }, { "title": "QGIS", "to": "/development-db/environment/external-clients/qgis/" }, { "title": "Arc GIS", "to": "/development-db/environment/external-clients/arcgis/" }, { "title": "Leaflet", "to": "/development-db/environment/external-clients/leaflet/" }] }] }, { "title": "SOC Database sidebar", "to": "/development-db/soc-database/", "collapsible": true, "items": [{ "title": "Design", "to": "/development-db/soc-database/design/", "collapsible": true, "items": [{ "title": "Roles", "to": "/development-db/soc-database/design/roles/" }, { "title": "Extensions", "to": "/development-db/soc-database/design/extensions/" }, { "title": "Schemas", "to": "/development-db/soc-database/design/schemas/" }, { "title": "auth Schema", "to": "/development-db/soc-database/design/schemas/auth/" }, { "title": "auth Schema Definitions", "collapsible": true, "items": [{ "title": "auth Tables", "to": "/development-db/soc-database/design/schemas/auth/tables" }, { "title": "auth Views", "to": "/development-db/soc-database/design/schemas/auth/views/" }, { "title": "auth Functions", "to": "/development-db/soc-database/design/schemas/auth/functions/" }, { "title": "auth Sequences", "to": "/development-db/soc-database/design/schemas/auth/sequences/" }, { "title": "auth Trigger Functions", "to": "/development-db/soc-database/design/schemas/auth/trigger-functions" }] }, { "title": "private Schema", "to": "/development-db/soc-database/design/schemas/private/" }, { "title": "private Schema Definitions", "collapsible": true, "items": [{ "title": "private Tables", "to": "/development-db/soc-database/design/schemas/private/tables" }, { "title": "private Views", "to": "/development-db/soc-database/design/schemas/private/views/" }, { "title": "private Functions", "to": "/development-db/soc-database/design/schemas/private/functions/" }, { "title": "private Sequences", "to": "/development-db/soc-database/design/schemas/private/sequences/" }, { "title": "private Trigger Functions", "to": "/development-db/soc-database/design/schemas/private/trigger-functions" }] }, { "title": "public Schema", "to": "/development-db/soc-database/design/schemas/public/" }, { "title": "private Schema Definitions", "collapsible": true, "items": [{ "title": "public Tables", "to": "/development-db/soc-database/design/schemas/public/tables" }, { "title": "public Views", "to": "/development-db/soc-database/design/schemas/public/views/" }, { "title": "public Functions", "to": "/development-db/soc-database/design/schemas/public/functions/" }, { "title": "public Sequences", "to": "/development-db/soc-database/design/schemas/public/sequences/" }, { "title": "public Trigger Functions", "to": "/development-db/soc-database/design/schemas/public/trigger-functions" }] }] }] }, { "title": "Administration", "to": "/development-db/soc-database/administration/" }], "/development-docs/": [{ "title": "Documentation Development", "collapsible": true, "collapsed": false, "items": [{ "title": "Introduction", "to": "/development-site/introduction/" }] }], "/faqs/": [{ "title": "Frequently Asked", "to": "/faqs/faq/" }] }, "editLink": "https://github.com/BCYCAData/socdocs-technicalguides/edit/main/src/routes/:route", "github": "https://github.com/BCYCAData/socdocs-technicalguides", "logo": "/SOCLogo_quarter.png", "preBuildIconifyIcons": { "carbon": ["user"], "grommet-icons": ["system"], "tabler": ["stack-2"] }, "themeColor": { "light": "", "dark": "", "primary": "", "hover": "", "gradient": { "start": "#ea580c", "end": "#fed7aa" } } };
var __spreadArray = globalThis && globalThis.__spreadArray || function(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var sidebarCollapsed = writable(true);
var tocCollapsed = writable(true);
var navCollapsed = writable(true);
var anchors = writable([]);
var pages = writable([]);
var scrollY = writable(0);
var oldScrollY = writable(0);
var scrollDirection = writable("up");
var sidebar = writable(true);
var resolvedSidebar = writable(Object.entries(themeOptions.sidebar || {}).reduce(function(all, _a) {
  var item = _a[1];
  return __spreadArray(__spreadArray([], all, true), item, true);
}, []));
scrollY.subscribe(function(sy) {
  var nextDirection = sy - get_store_value(oldScrollY) > 0 ? "down" : "up";
  if (nextDirection !== get_store_value(scrollDirection))
    scrollDirection.set(nextDirection);
});
resolvedSidebar.subscribe(function(sidebar2) {
  pages.set(sidebar2.reduce(function(allPages, item) {
    return Array.isArray(item.items) ? __spreadArray(__spreadArray([], allPages, true), item.items, true) : __spreadArray(__spreadArray([], allPages, true), [item], false);
  }, []));
});
sidebarCollapsed.subscribe(function(v) {
  if (!v)
    tocCollapsed.set(true);
});
tocCollapsed.subscribe(function(v) {
  if (!v)
    sidebarCollapsed.set(true);
});
function resolveSidebar(routeId) {
  var _a;
  if (!routeId)
    return;
  var key = Object.keys(themeOptions.sidebar || {}).find(function(key2) {
    return routeId.startsWith(key2);
  });
  if (key)
    resolvedSidebar.set(((_a = themeOptions.sidebar) === null || _a === void 0 ? void 0 : _a[key]) || []);
}
const siteConfig = { "title": "SOC Documentation", "description": "Documentation for the 'Strengthen Our Community' website" };
const External = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `<svg${spread(
    [
      escape_object($$restProps),
      { width: "1em" },
      { height: "1em" },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}><g fill="none" stroke="currentColor" strokelinecap="round" strokelinejoin="round" strokewidth="2"><path strokedasharray="36" strokedashoffset="36" d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="36;0"></animate></path><path strokedasharray="12" strokedashoffset="12" d="M13 11L20 4"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.3s" values="12;0"></animate></path><path strokedasharray="8" strokedashoffset="8" d="M21 3H15M21 3V9"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="8;0"></animate></path></g></svg>`;
});
const Expansion_svelte_svelte_type_style_lang = "";
function client_method(key) {
  {
    if (key === "before_navigate" || key === "after_navigate" || key === "on_navigate") {
      return () => {
      };
    } else {
      const name_lookup = {
        disable_scroll_handling: "disableScrollHandling",
        preload_data: "preloadData",
        preload_code: "preloadCode",
        invalidate_all: "invalidateAll"
      };
      return () => {
        throw new Error(`Cannot call ${name_lookup[key] ?? key}(...) on the server`);
      };
    }
  }
}
const beforeNavigate = /* @__PURE__ */ client_method("before_navigate");
const afterNavigate = /* @__PURE__ */ client_method("after_navigate");
const Link_svelte_svelte_type_style_lang = "";
export {
  External as E,
  tocCollapsed as a,
  afterNavigate as b,
  sidebarCollapsed as c,
  scrollDirection as d,
  scrollY as e,
  sidebar as f,
  anchors as g,
  resolveSidebar as h,
  beforeNavigate as i,
  navCollapsed as n,
  oldScrollY as o,
  pages as p,
  resolvedSidebar as r,
  siteConfig as s,
  themeOptions as t
};

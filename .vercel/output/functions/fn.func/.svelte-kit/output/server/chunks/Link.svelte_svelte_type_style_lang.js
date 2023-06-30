import { w as writable } from "./index.js";
import { t as get_store_value, c as create_ssr_component, b as compute_rest_props, f as spread, h as escape_object } from "./ssr.js";
const themeOptions = { "navbar": [{ "title": "For Developers", "items": [{ "title": "Introduction", "to": "/user-guides/introduction/" }, { "title": "Recording Your Data", "to": "/user-guides/recording-your-data/" }, { "title": "Using Your Data", "to": "/user-guides/using-your-data/" }] }, { "title": "Site Development", "items": [{ "title": "Introduction", "to": "/admin-guides/introduction/" }, { "title": "Site Administration", "to": "/admin-guides/site-admin/introduction/" }, { "title": "Database Administration", "to": "/admin-guides/db-admin/introduction/" }, { "title": "Development Administration", "to": "/admin-guides/dev-admin/introduction/" }, { "title": "Documentation Administration", "to": "/admin-guides/docs-admin/introduction/" }] }, { "title": "Database Development", "items": [{ "title": "Introduction", "to": "/tech-guides/introduction/" }, { "title": "Site Development", "to": "/tech-guides/site-development/introduction/" }, { "title": "Database Development", "to": "/tech-guides/db-development/introduction/" }, { "title": "Documentation Development", "to": "/tech-guides/docs-development/introduction/" }] }, { "title": "Documentation Development", "items": [{ "title": "Introduction", "to": "/tech-guides/introduction/" }, { "title": "Site Development", "to": "/tech-guides/site-development/introduction/" }, { "title": "Database Development", "to": "/tech-guides/db-development/introduction/" }, { "title": "Documentation Development", "to": "/tech-guides/docs-development/introduction/" }] }, { "title": "FAQ", "to": "/faqs/faq" }, { "title": "SOC", "external": true, "to": "https://soc-dev.vercel.app/" }], "sidebar": { "/admin-guides/": [{ "title": "For Administrators", "collapsible": true, "collapsed": false, "items": [{ "title": "Introduction", "to": "/admin-guides/introduction/" }] }, { "title": "Site Administration", "collapsible": true, "collapsed": false, "items": [{ "title": "Introduction", "to": "/admin-guides/site-admin/introduction/" }] }, { "title": "Database Administration", "collapsible": true, "collapsed": false, "items": [{ "title": "Introduction", "to": "/admin-guides/db-admin/introduction/" }] }, { "title": "Development Administration", "collapsible": true, "collapsed": false, "items": [{ "title": "Introduction", "to": "/admin-guides/dev-admin/introduction/" }] }, { "title": "Documentation Administration", "collapsible": true, "collapsed": false, "items": [{ "title": "Introduction", "to": "/admin-guides/docs-admin/introduction/" }] }], "/admin-guides/site-admin/": [{ "title": "Site Administration", "collapsible": true, "collapsed": false, "items": [{ "title": "Introduction", "to": "/admin-guides/site-admin/introduction/" }] }], "/tech-guides/": [{ "title": "Technical Information", "collapsible": true, "collapsed": false, "items": [{ "title": "Introduction", "to": "/tech-guides/introduction/" }] }, { "title": "Site Development", "collapsible": true, "collapsed": false, "items": [{ "title": "Introduction", "to": "/tech-guides/site-development/introduction/" }] }, { "title": "Database Development", "collapsible": true, "collapsed": false, "items": [{ "title": "Introduction", "to": "/tech-guides/db-development/introduction/" }] }, { "title": "Documentation Development", "collapsible": true, "collapsed": false, "items": [{ "title": "Introduction", "to": "/tech-guides/docs-development/introduction/" }] }], "/user-guides/": [{ "title": "For Users", "collapsible": true, "collapsed": false, "items": [{ "title": "Introduction", "to": "/user-guides/introduction/" }, { "title": "Recording Your Data", "to": "/user-guides/recording-your-data/" }, { "title": "Using Your Data", "to": "/user-guides/using-your-data/" }] }], "/faqs/": [{ "title": "Frequently Asked", "to": "/faqs/faq/" }] }, "editLink": "https://github.com/BCYCAData/socdocs-technicalguides/edit/main/src/routes/:route", "github": "https://github.com/BCYCAData/socdocs-technicalguides", "logo": "/SOCLogo_quarter.png", "preBuildIconifyIcons": { "carbon": ["user"], "grommet-icons": ["system"], "tabler": ["stack-2"] }, "themeColor": { "light": "", "dark": "", "primary": "", "hover": "", "gradient": { "start": "#ea580c", "end": "#fed7aa" } } };
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
var innerWidth = writable(0);
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
    if (key === "before_navigate" || key === "after_navigate") {
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
  beforeNavigate as h,
  innerWidth as i,
  resolveSidebar as j,
  navCollapsed as n,
  oldScrollY as o,
  pages as p,
  resolvedSidebar as r,
  siteConfig as s,
  themeOptions as t
};

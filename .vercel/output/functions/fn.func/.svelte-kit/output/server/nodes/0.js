import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.1dba61c8.js","_app/immutable/chunks/0.cf0a354a.js","_app/immutable/chunks/scheduler.4fc6ff3d.js","_app/immutable/chunks/index.2aec9f2a.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/Link.svelte_svelte_type_style_lang.4b78e09e.js","_app/immutable/chunks/singletons.363e91f9.js","_app/immutable/chunks/stores.dbad9d08.js"];
export const stylesheets = ["_app/immutable/assets/0.28d2b151.css","_app/immutable/assets/Link.b2bf4f4c.css","_app/immutable/assets/ReloadPrompt.a2eb4b7b.css"];
export const fonts = ["_app/immutable/assets/Dank Mono Regular.20068931.otf","_app/immutable/assets/Dank Mono Italic.53f4f38a.otf"];
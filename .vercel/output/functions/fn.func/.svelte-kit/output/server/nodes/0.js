import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.377a0a04.js","_app/immutable/chunks/0.1cd1beb7.js","_app/immutable/chunks/scheduler.dea4bc16.js","_app/immutable/chunks/index.d794f1ce.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/Link.svelte_svelte_type_style_lang.c2ca9f70.js","_app/immutable/chunks/singletons.b3ce5b98.js","_app/immutable/chunks/stores.5d1c5a8e.js"];
export const stylesheets = ["_app/immutable/assets/0.95299d27.css","_app/immutable/assets/Link.4ad9b511.css","_app/immutable/assets/ReloadPrompt.f7a8f30f.css"];
export const fonts = ["_app/immutable/assets/Dank Mono Regular.20068931.otf","_app/immutable/assets/Dank Mono Italic.53f4f38a.otf"];

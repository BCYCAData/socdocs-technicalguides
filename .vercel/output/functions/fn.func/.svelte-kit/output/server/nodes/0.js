import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.fca0f0bb.js","_app/immutable/chunks/0.20de3b0b.js","_app/immutable/chunks/scheduler.b364ac0e.js","_app/immutable/chunks/index.1fcbdd57.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/Link.svelte_svelte_type_style_lang.a844e97f.js","_app/immutable/chunks/singletons.eddef32a.js","_app/immutable/chunks/stores.f5592fe3.js"];
export const stylesheets = ["_app/immutable/assets/0.18fb0563.css","_app/immutable/assets/Link.b2bf4f4c.css","_app/immutable/assets/ReloadPrompt.a2eb4b7b.css"];
export const fonts = ["_app/immutable/assets/Dank Mono Regular.20068931.otf","_app/immutable/assets/Dank Mono Italic.53f4f38a.otf"];

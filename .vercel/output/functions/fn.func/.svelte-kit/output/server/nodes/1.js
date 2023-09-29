

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.9315131e.js","_app/immutable/chunks/scheduler.b364ac0e.js","_app/immutable/chunks/index.1fcbdd57.js","_app/immutable/chunks/stores.f5592fe3.js","_app/immutable/chunks/singletons.eddef32a.js"];
export const stylesheets = [];
export const fonts = [];

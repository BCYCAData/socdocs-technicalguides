

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.07331d0c.js","_app/immutable/chunks/scheduler.dea4bc16.js","_app/immutable/chunks/index.d794f1ce.js","_app/immutable/chunks/stores.5d1c5a8e.js","_app/immutable/chunks/singletons.b3ce5b98.js"];
export const stylesheets = [];
export const fonts = [];



export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.b76b6527.js","_app/immutable/chunks/scheduler.4fc6ff3d.js","_app/immutable/chunks/index.2aec9f2a.js","_app/immutable/chunks/stores.7f190bbf.js","_app/immutable/chunks/singletons.8834a38a.js"];
export const stylesheets = [];
export const fonts = [];

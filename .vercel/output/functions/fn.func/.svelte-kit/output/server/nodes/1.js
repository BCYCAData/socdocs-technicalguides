

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.791c111d.js","_app/immutable/chunks/scheduler.4fc6ff3d.js","_app/immutable/chunks/index.2aec9f2a.js","_app/immutable/chunks/stores.dbad9d08.js","_app/immutable/chunks/singletons.363e91f9.js"];
export const stylesheets = [];
export const fonts = [];

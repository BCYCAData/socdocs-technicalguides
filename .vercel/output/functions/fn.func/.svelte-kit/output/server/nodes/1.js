

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.12258d49.js","_app/immutable/chunks/scheduler.dea4bc16.js","_app/immutable/chunks/index.d794f1ce.js","_app/immutable/chunks/stores.8a16167a.js","_app/immutable/chunks/singletons.f7a4e2a5.js"];
export const stylesheets = [];
export const fonts = [];

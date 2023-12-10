export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["SOCLogo.png","SOCLogo_lite.png","SOCLogo_quarter.png","ag.png","favicon-32x32.png","nswg.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.807cd0da.js","app":"_app/immutable/entry/app.c081c6a8.js","imports":["_app/immutable/entry/start.807cd0da.js","_app/immutable/chunks/scheduler.dea4bc16.js","_app/immutable/chunks/singletons.f7a4e2a5.js","_app/immutable/entry/app.c081c6a8.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.dea4bc16.js","_app/immutable/chunks/index.d794f1ce.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

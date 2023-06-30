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
		client: {"start":"_app/immutable/entry/start.b150b397.js","app":"_app/immutable/entry/app.14a412b2.js","imports":["_app/immutable/entry/start.b150b397.js","_app/immutable/chunks/scheduler.4fc6ff3d.js","_app/immutable/chunks/singletons.8834a38a.js","_app/immutable/entry/app.14a412b2.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/scheduler.4fc6ff3d.js","_app/immutable/chunks/index.2aec9f2a.js"],"stylesheets":[],"fonts":[]},
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

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
		client: {"start":"_app/immutable/entry/start.6284dfa3.js","app":"_app/immutable/entry/app.2da94007.js","imports":["_app/immutable/entry/start.6284dfa3.js","_app/immutable/chunks/scheduler.b364ac0e.js","_app/immutable/chunks/singletons.eddef32a.js","_app/immutable/entry/app.2da94007.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.b364ac0e.js","_app/immutable/chunks/index.1fcbdd57.js"],"stylesheets":[],"fonts":[]},
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

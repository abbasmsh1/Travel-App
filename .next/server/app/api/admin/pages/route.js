"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/admin/pages/route";
exports.ids = ["app/api/admin/pages/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fpages%2Froute&page=%2Fapi%2Fadmin%2Fpages%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fpages%2Froute.ts&appDir=E%3A%5CProjects%5CTravel%20App%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CProjects%5CTravel%20App&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fpages%2Froute&page=%2Fapi%2Fadmin%2Fpages%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fpages%2Froute.ts&appDir=E%3A%5CProjects%5CTravel%20App%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CProjects%5CTravel%20App&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var E_Projects_Travel_App_src_app_api_admin_pages_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/admin/pages/route.ts */ \"(rsc)/./src/app/api/admin/pages/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/admin/pages/route\",\n        pathname: \"/api/admin/pages\",\n        filename: \"route\",\n        bundlePath: \"app/api/admin/pages/route\"\n    },\n    resolvedPagePath: \"E:\\\\Projects\\\\Travel App\\\\src\\\\app\\\\api\\\\admin\\\\pages\\\\route.ts\",\n    nextConfigOutput,\n    userland: E_Projects_Travel_App_src_app_api_admin_pages_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/admin/pages/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhZG1pbiUyRnBhZ2VzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZhZG1pbiUyRnBhZ2VzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGYWRtaW4lMkZwYWdlcyUyRnJvdXRlLnRzJmFwcERpcj1FJTNBJTVDUHJvamVjdHMlNUNUcmF2ZWwlMjBBcHAlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUUlM0ElNUNQcm9qZWN0cyU1Q1RyYXZlbCUyMEFwcCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDZTtBQUM1RjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL3Bha2lzdGFuLXRyYXZlbC8/OWQzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJFOlxcXFxQcm9qZWN0c1xcXFxUcmF2ZWwgQXBwXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGFkbWluXFxcXHBhZ2VzXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hZG1pbi9wYWdlcy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2FkbWluL3BhZ2VzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hZG1pbi9wYWdlcy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkU6XFxcXFByb2plY3RzXFxcXFRyYXZlbCBBcHBcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcYWRtaW5cXFxccGFnZXNcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2FkbWluL3BhZ2VzL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fpages%2Froute&page=%2Fapi%2Fadmin%2Fpages%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fpages%2Froute.ts&appDir=E%3A%5CProjects%5CTravel%20App%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CProjects%5CTravel%20App&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/admin/pages/route.ts":
/*!******************************************!*\
  !*** ./src/app/api/admin/pages/route.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n\n\n\n\nasync function GET() {\n    try {\n        const cookieStore = (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)();\n        const token = cookieStore.get(\"token\");\n        if (!token) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().verify(token.value, process.env.JWT_SECRET);\n        if (decoded.role !== \"ADMIN\") {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Forbidden\"\n            }, {\n                status: 403\n            });\n        }\n        const pages = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__[\"default\"].pageContent.findMany();\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            pages\n        });\n    } catch (error) {\n        console.error(\"Failed to fetch pages:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Internal server error\"\n        }, {\n            status: 500\n        });\n    }\n}\nasync function POST(request) {\n    try {\n        const cookieStore = (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)();\n        const token = cookieStore.get(\"token\");\n        if (!token) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().verify(token.value, process.env.JWT_SECRET);\n        if (decoded.role !== \"ADMIN\") {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Forbidden\"\n            }, {\n                status: 403\n            });\n        }\n        const data = await request.json();\n        const page = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__[\"default\"].pageContent.create({\n            data: {\n                page: data.page,\n                title: data.title,\n                subtitle: data.subtitle,\n                content: data.content,\n                backgroundUrl: data.backgroundUrl\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            page\n        });\n    } catch (error) {\n        console.error(\"Failed to create page:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Internal server error\"\n        }, {\n            status: 500\n        });\n    }\n}\nasync function PUT(request) {\n    try {\n        const cookieStore = (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)();\n        const token = cookieStore.get(\"token\");\n        if (!token) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().verify(token.value, process.env.JWT_SECRET);\n        if (decoded.role !== \"ADMIN\") {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Forbidden\"\n            }, {\n                status: 403\n            });\n        }\n        const data = await request.json();\n        const page = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__[\"default\"].pageContent.update({\n            where: {\n                id: data.id\n            },\n            data: {\n                title: data.title,\n                subtitle: data.subtitle,\n                content: data.content,\n                backgroundUrl: data.backgroundUrl\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            page\n        });\n    } catch (error) {\n        console.error(\"Failed to update page:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Internal server error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1lBQzVCLE9BQU9qQixxREFBWUEsQ0FBQ1EsSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQVksR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ2pFO1FBRUEsTUFBTWMsT0FBTyxNQUFNRCxRQUFRZixJQUFJO1FBRS9CLE1BQU1pQixPQUFPLE1BQU10QixtREFBTUEsQ0FBQ2dCLFdBQVcsQ0FBQ2EsTUFBTSxDQUFDO1lBQzNDQyxPQUFPO2dCQUFFQyxJQUFJVixLQUFLVSxFQUFFO1lBQUM7WUFDckJWLE1BQU07Z0JBQ0pHLE9BQU9ILEtBQUtHLEtBQUs7Z0JBQ2pCQyxVQUFVSixLQUFLSSxRQUFRO2dCQUN2QkMsU0FBU0wsS0FBS0ssT0FBTztnQkFDckJDLGVBQWVOLEtBQUtNLGFBQWE7WUFDbkM7UUFDRjtRQUVBLE9BQU85QixxREFBWUEsQ0FBQ1EsSUFBSSxDQUFDO1lBQUVpQjtRQUFLO0lBQ2xDLEVBQUUsT0FBT2hCLE9BQU87UUFDZFksUUFBUVosS0FBSyxDQUFDLDBCQUEwQkE7UUFDeEMsT0FBT1QscURBQVlBLENBQUNRLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQXdCLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQzdFO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYWtpc3Rhbi10cmF2ZWwvLi9zcmMvYXBwL2FwaS9hZG1pbi9wYWdlcy9yb3V0ZS50cz82MGJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJ1xyXG5pbXBvcnQgeyBjb29raWVzIH0gZnJvbSAnbmV4dC9oZWFkZXJzJ1xyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcclxuaW1wb3J0IHByaXNtYSBmcm9tICdAL2xpYi9wcmlzbWEnXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjb29raWVTdG9yZSA9IGNvb2tpZXMoKVxyXG4gICAgY29uc3QgdG9rZW4gPSBjb29raWVTdG9yZS5nZXQoJ3Rva2VuJylcclxuXHJcbiAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnVW5hdXRob3JpemVkJyB9LCB7IHN0YXR1czogNDAxIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGVjb2RlZCA9IGp3dC52ZXJpZnkodG9rZW4udmFsdWUsIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQhKSBhcyB7IGlkOiBzdHJpbmcsIHJvbGU6IHN0cmluZyB9XHJcbiAgICBcclxuICAgIGlmIChkZWNvZGVkLnJvbGUgIT09ICdBRE1JTicpIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdGb3JiaWRkZW4nIH0sIHsgc3RhdHVzOiA0MDMgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHByaXNtYS5wYWdlQ29udGVudC5maW5kTWFueSgpXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBwYWdlcyB9KVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggcGFnZXM6JywgZXJyb3IpXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ludGVybmFsIHNlcnZlciBlcnJvcicgfSwgeyBzdGF0dXM6IDUwMCB9KVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdDogUmVxdWVzdCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjb29raWVTdG9yZSA9IGNvb2tpZXMoKVxyXG4gICAgY29uc3QgdG9rZW4gPSBjb29raWVTdG9yZS5nZXQoJ3Rva2VuJylcclxuXHJcbiAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnVW5hdXRob3JpemVkJyB9LCB7IHN0YXR1czogNDAxIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGVjb2RlZCA9IGp3dC52ZXJpZnkodG9rZW4udmFsdWUsIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQhKSBhcyB7IGlkOiBzdHJpbmcsIHJvbGU6IHN0cmluZyB9XHJcbiAgICBcclxuICAgIGlmIChkZWNvZGVkLnJvbGUgIT09ICdBRE1JTicpIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdGb3JiaWRkZW4nIH0sIHsgc3RhdHVzOiA0MDMgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5qc29uKClcclxuICAgIFxyXG4gICAgY29uc3QgcGFnZSA9IGF3YWl0IHByaXNtYS5wYWdlQ29udGVudC5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcGFnZTogZGF0YS5wYWdlLFxyXG4gICAgICAgIHRpdGxlOiBkYXRhLnRpdGxlLFxyXG4gICAgICAgIHN1YnRpdGxlOiBkYXRhLnN1YnRpdGxlLFxyXG4gICAgICAgIGNvbnRlbnQ6IGRhdGEuY29udGVudCxcclxuICAgICAgICBiYWNrZ3JvdW5kVXJsOiBkYXRhLmJhY2tncm91bmRVcmxcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBwYWdlIH0pXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBjcmVhdGUgcGFnZTonLCBlcnJvcilcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnSW50ZXJuYWwgc2VydmVyIGVycm9yJyB9LCB7IHN0YXR1czogNTAwIH0pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUFVUKHJlcXVlc3Q6IFJlcXVlc3QpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgY29va2llU3RvcmUgPSBjb29raWVzKClcclxuICAgIGNvbnN0IHRva2VuID0gY29va2llU3RvcmUuZ2V0KCd0b2tlbicpXHJcblxyXG4gICAgaWYgKCF0b2tlbikge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ1VuYXV0aG9yaXplZCcgfSwgeyBzdGF0dXM6IDQwMSB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlY29kZWQgPSBqd3QudmVyaWZ5KHRva2VuLnZhbHVlLCBwcm9jZXNzLmVudi5KV1RfU0VDUkVUISkgYXMgeyBpZDogc3RyaW5nLCByb2xlOiBzdHJpbmcgfVxyXG4gICAgXHJcbiAgICBpZiAoZGVjb2RlZC5yb2xlICE9PSAnQURNSU4nKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnRm9yYmlkZGVuJyB9LCB7IHN0YXR1czogNDAzIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QuanNvbigpXHJcbiAgICBcclxuICAgIGNvbnN0IHBhZ2UgPSBhd2FpdCBwcmlzbWEucGFnZUNvbnRlbnQudXBkYXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQ6IGRhdGEuaWQgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHRpdGxlOiBkYXRhLnRpdGxlLFxyXG4gICAgICAgIHN1YnRpdGxlOiBkYXRhLnN1YnRpdGxlLFxyXG4gICAgICAgIGNvbnRlbnQ6IGRhdGEuY29udGVudCxcclxuICAgICAgICBiYWNrZ3JvdW5kVXJsOiBkYXRhLmJhY2tncm91bmRVcmxcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBwYWdlIH0pXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byB1cGRhdGUgcGFnZTonLCBlcnJvcilcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnSW50ZXJuYWwgc2VydmVyIGVycm9yJyB9LCB7IHN0YXR1czogNTAwIH0pXHJcbiAgfVxyXG59ICJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJjb29raWVzIiwiand0IiwicHJpc21hIiwiR0VUIiwiY29va2llU3RvcmUiLCJ0b2tlbiIsImdldCIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsImRlY29kZWQiLCJ2ZXJpZnkiLCJ2YWx1ZSIsInByb2Nlc3MiLCJlbnYiLCJKV1RfU0VDUkVUIiwicm9sZSIsInBhZ2VzIiwicGFnZUNvbnRlbnQiLCJmaW5kTWFueSIsImNvbnNvbGUiLCJQT1NUIiwicmVxdWVzdCIsImRhdGEiLCJwYWdlIiwiY3JlYXRlIiwidGl0bGUiLCJzdWJ0aXRsZSIsImNvbnRlbnQiLCJiYWNrZ3JvdW5kVXJsIiwiUFVUIiwidXBkYXRlIiwid2hlcmUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/admin/pages/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/prisma.ts":
/*!***************************!*\
  !*** ./src/lib/prisma.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prismaClientSingleton = ()=>{\n    return new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n};\nconst prisma = globalThis.prisma ?? prismaClientSingleton();\nif (true) {\n    globalThis.prisma = prisma;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3ByaXNtYS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkM7QUFFN0MsTUFBTUMsd0JBQXdCO0lBQzVCLE9BQU8sSUFBSUQsd0RBQVlBO0FBQ3pCO0FBTUEsTUFBTUUsU0FBU0MsV0FBV0QsTUFBTSxJQUFJRDtBQUVwQyxJQUFJRyxJQUF5QixFQUFjO0lBQ3pDRCxXQUFXRCxNQUFNLEdBQUdBO0FBQ3RCO0FBRUEsaUVBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYWtpc3Rhbi10cmF2ZWwvLi9zcmMvbGliL3ByaXNtYS50cz8wMWQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xyXG5cclxuY29uc3QgcHJpc21hQ2xpZW50U2luZ2xldG9uID0gKCkgPT4ge1xyXG4gIHJldHVybiBuZXcgUHJpc21hQ2xpZW50KClcclxufVxyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIHZhciBwcmlzbWE6IHVuZGVmaW5lZCB8IFJldHVyblR5cGU8dHlwZW9mIHByaXNtYUNsaWVudFNpbmdsZXRvbj5cclxufVxyXG5cclxuY29uc3QgcHJpc21hID0gZ2xvYmFsVGhpcy5wcmlzbWEgPz8gcHJpc21hQ2xpZW50U2luZ2xldG9uKClcclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgZ2xvYmFsVGhpcy5wcmlzbWEgPSBwcmlzbWFcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJpc21hICJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWFDbGllbnRTaW5nbGV0b24iLCJwcmlzbWEiLCJnbG9iYWxUaGlzIiwicHJvY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/prisma.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/jws","vendor-chunks/lodash.once","vendor-chunks/jwa","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/ms","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fpages%2Froute&page=%2Fapi%2Fadmin%2Fpages%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fpages%2Froute.ts&appDir=E%3A%5CProjects%5CTravel%20App%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CProjects%5CTravel%20App&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();
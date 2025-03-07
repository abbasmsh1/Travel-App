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
exports.id = "app/api/preferences/route";
exports.ids = ["app/api/preferences/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fpreferences%2Froute&page=%2Fapi%2Fpreferences%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpreferences%2Froute.ts&appDir=E%3A%5CProjects%5CTravel%20App%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CProjects%5CTravel%20App&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fpreferences%2Froute&page=%2Fapi%2Fpreferences%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpreferences%2Froute.ts&appDir=E%3A%5CProjects%5CTravel%20App%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CProjects%5CTravel%20App&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var E_Projects_Travel_App_src_app_api_preferences_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/preferences/route.ts */ \"(rsc)/./src/app/api/preferences/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/preferences/route\",\n        pathname: \"/api/preferences\",\n        filename: \"route\",\n        bundlePath: \"app/api/preferences/route\"\n    },\n    resolvedPagePath: \"E:\\\\Projects\\\\Travel App\\\\src\\\\app\\\\api\\\\preferences\\\\route.ts\",\n    nextConfigOutput,\n    userland: E_Projects_Travel_App_src_app_api_preferences_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/preferences/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZwcmVmZXJlbmNlcyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGcHJlZmVyZW5jZXMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZwcmVmZXJlbmNlcyUyRnJvdXRlLnRzJmFwcERpcj1FJTNBJTVDUHJvamVjdHMlNUNUcmF2ZWwlMjBBcHAlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUUlM0ElNUNQcm9qZWN0cyU1Q1RyYXZlbCUyMEFwcCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDYztBQUMzRjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL3Bha2lzdGFuLXRyYXZlbC8/ZGVmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJFOlxcXFxQcm9qZWN0c1xcXFxUcmF2ZWwgQXBwXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHByZWZlcmVuY2VzXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9wcmVmZXJlbmNlcy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3ByZWZlcmVuY2VzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9wcmVmZXJlbmNlcy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkU6XFxcXFByb2plY3RzXFxcXFRyYXZlbCBBcHBcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxccHJlZmVyZW5jZXNcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3ByZWZlcmVuY2VzL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fpreferences%2Froute&page=%2Fapi%2Fpreferences%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpreferences%2Froute.ts&appDir=E%3A%5CProjects%5CTravel%20App%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CProjects%5CTravel%20App&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/preferences/route.ts":
/*!******************************************!*\
  !*** ./src/app/api/preferences/route.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n\n\n\n\nasync function GET() {\n    try {\n        const token = (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)().get(\"token\");\n        if (!token) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Not authenticated\"\n            }, {\n                status: 401\n            });\n        }\n        const { userId } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().verify(token.value, process.env.JWT_SECRET);\n        // Get user's trips\n        const trips = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__[\"default\"].trip.findMany({\n            where: {\n                userId\n            }\n        });\n        // Calculate trip statistics\n        const totalTrips = trips.length;\n        const averageTripDuration = totalTrips > 0 ? Math.round(trips.reduce((acc, trip)=>{\n            const start = new Date(trip.startDate);\n            const end = new Date(trip.endDate);\n            const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));\n            return acc + days;\n        }, 0) / totalTrips) : 0;\n        // Calculate favorite regions\n        const regionCounts = trips.reduce((acc, trip)=>{\n            trip.destinations.forEach((destination)=>{\n                acc[destination] = (acc[destination] || 0) + 1;\n            });\n            return acc;\n        }, {});\n        const favoriteRegions = Object.entries(regionCounts).map(([name, count])=>({\n                name,\n                count\n            })).sort((a, b)=>b.count - a.count).slice(0, 6);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            totalTrips,\n            averageTripDuration,\n            favoriteRegions\n        });\n    } catch (error) {\n        console.error(\"Preferences fetch error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Internal server error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9wcmVmZXJlbmNlcy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEM7QUFDSjtBQUNSO0FBQ0c7QUFFMUIsZUFBZUk7SUFDcEIsSUFBSTtRQUNGLE1BQU1DLFFBQVFKLHFEQUFPQSxHQUFHSyxHQUFHLENBQUM7UUFFNUIsSUFBSSxDQUFDRCxPQUFPO1lBQ1YsT0FBT0wscURBQVlBLENBQUNPLElBQUksQ0FDdEI7Z0JBQUVDLE9BQU87WUFBb0IsR0FDN0I7Z0JBQUVDLFFBQVE7WUFBSTtRQUVsQjtRQUVBLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUdSLDBEQUFVLENBQUNHLE1BQU1PLEtBQUssRUFBRUMsUUFBUUMsR0FBRyxDQUFDQyxVQUFVO1FBRWpFLG1CQUFtQjtRQUNuQixNQUFNQyxRQUFRLE1BQU1iLG1EQUFNQSxDQUFDYyxJQUFJLENBQUNDLFFBQVEsQ0FBQztZQUN2Q0MsT0FBTztnQkFBRVQ7WUFBTztRQUNsQjtRQUVBLDRCQUE0QjtRQUM1QixNQUFNVSxhQUFhSixNQUFNSyxNQUFNO1FBQy9CLE1BQU1DLHNCQUFzQkYsYUFBYSxJQUNyQ0csS0FBS0MsS0FBSyxDQUNSUixNQUFNUyxNQUFNLENBQUMsQ0FBQ0MsS0FBS1Q7WUFDakIsTUFBTVUsUUFBUSxJQUFJQyxLQUFLWCxLQUFLWSxTQUFTO1lBQ3JDLE1BQU1DLE1BQU0sSUFBSUYsS0FBS1gsS0FBS2MsT0FBTztZQUNqQyxNQUFNQyxPQUFPVCxLQUFLVSxJQUFJLENBQUMsQ0FBQ0gsSUFBSUksT0FBTyxLQUFLUCxNQUFNTyxPQUFPLEVBQUMsSUFBTSxRQUFPLEtBQUssS0FBSyxFQUFDO1lBQzlFLE9BQU9SLE1BQU1NO1FBQ2YsR0FBRyxLQUFLWixjQUVWO1FBRUosNkJBQTZCO1FBQzdCLE1BQU1lLGVBQWVuQixNQUFNUyxNQUFNLENBQUMsQ0FBQ0MsS0FBZ0NUO1lBQ2pFQSxLQUFLbUIsWUFBWSxDQUFDQyxPQUFPLENBQUNDLENBQUFBO2dCQUN4QlosR0FBRyxDQUFDWSxZQUFZLEdBQUcsQ0FBQ1osR0FBRyxDQUFDWSxZQUFZLElBQUksS0FBSztZQUMvQztZQUNBLE9BQU9aO1FBQ1QsR0FBRyxDQUFDO1FBRUosTUFBTWEsa0JBQWtCQyxPQUFPQyxPQUFPLENBQUNOLGNBQ3BDTyxHQUFHLENBQUMsQ0FBQyxDQUFDQyxNQUFNQyxNQUFNLEdBQU07Z0JBQUVEO2dCQUFNQztZQUFNLElBQ3RDQyxJQUFJLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTUEsRUFBRUgsS0FBSyxHQUFHRSxFQUFFRixLQUFLLEVBQ2hDSSxLQUFLLENBQUMsR0FBRztRQUVaLE9BQU9oRCxxREFBWUEsQ0FBQ08sSUFBSSxDQUFDO1lBQ3ZCYTtZQUNBRTtZQUNBaUI7UUFDRjtJQUNGLEVBQUUsT0FBTy9CLE9BQU87UUFDZHlDLFFBQVF6QyxLQUFLLENBQUMsNEJBQTRCQTtRQUMxQyxPQUFPUixxREFBWUEsQ0FBQ08sSUFBSSxDQUN0QjtZQUFFQyxPQUFPO1FBQXdCLEdBQ2pDO1lBQUVDLFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGFraXN0YW4tdHJhdmVsLy4vc3JjL2FwcC9hcGkvcHJlZmVyZW5jZXMvcm91dGUudHM/NjdmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcidcclxuaW1wb3J0IHsgY29va2llcyB9IGZyb20gJ25leHQvaGVhZGVycydcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXHJcbmltcG9ydCBwcmlzbWEgZnJvbSAnQC9saWIvcHJpc21hJ1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgdG9rZW4gPSBjb29raWVzKCkuZ2V0KCd0b2tlbicpXHJcbiAgICBcclxuICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICAgIHsgZXJyb3I6ICdOb3QgYXV0aGVudGljYXRlZCcgfSxcclxuICAgICAgICB7IHN0YXR1czogNDAxIH1cclxuICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgdXNlcklkIH0gPSBqd3QudmVyaWZ5KHRva2VuLnZhbHVlLCBwcm9jZXNzLmVudi5KV1RfU0VDUkVUISkgYXMgeyB1c2VySWQ6IHN0cmluZyB9XHJcblxyXG4gICAgLy8gR2V0IHVzZXIncyB0cmlwc1xyXG4gICAgY29uc3QgdHJpcHMgPSBhd2FpdCBwcmlzbWEudHJpcC5maW5kTWFueSh7XHJcbiAgICAgIHdoZXJlOiB7IHVzZXJJZCB9XHJcbiAgICB9KVxyXG5cclxuICAgIC8vIENhbGN1bGF0ZSB0cmlwIHN0YXRpc3RpY3NcclxuICAgIGNvbnN0IHRvdGFsVHJpcHMgPSB0cmlwcy5sZW5ndGhcclxuICAgIGNvbnN0IGF2ZXJhZ2VUcmlwRHVyYXRpb24gPSB0b3RhbFRyaXBzID4gMFxyXG4gICAgICA/IE1hdGgucm91bmQoXHJcbiAgICAgICAgICB0cmlwcy5yZWR1Y2UoKGFjYywgdHJpcCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydCA9IG5ldyBEYXRlKHRyaXAuc3RhcnREYXRlKVxyXG4gICAgICAgICAgICBjb25zdCBlbmQgPSBuZXcgRGF0ZSh0cmlwLmVuZERhdGUpXHJcbiAgICAgICAgICAgIGNvbnN0IGRheXMgPSBNYXRoLmNlaWwoKGVuZC5nZXRUaW1lKCkgLSBzdGFydC5nZXRUaW1lKCkpIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKVxyXG4gICAgICAgICAgICByZXR1cm4gYWNjICsgZGF5c1xyXG4gICAgICAgICAgfSwgMCkgLyB0b3RhbFRyaXBzXHJcbiAgICAgICAgKVxyXG4gICAgICA6IDBcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgZmF2b3JpdGUgcmVnaW9uc1xyXG4gICAgY29uc3QgcmVnaW9uQ291bnRzID0gdHJpcHMucmVkdWNlKChhY2M6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0sIHRyaXApID0+IHtcclxuICAgICAgdHJpcC5kZXN0aW5hdGlvbnMuZm9yRWFjaChkZXN0aW5hdGlvbiA9PiB7XHJcbiAgICAgICAgYWNjW2Rlc3RpbmF0aW9uXSA9IChhY2NbZGVzdGluYXRpb25dIHx8IDApICsgMVxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4gYWNjXHJcbiAgICB9LCB7fSlcclxuXHJcbiAgICBjb25zdCBmYXZvcml0ZVJlZ2lvbnMgPSBPYmplY3QuZW50cmllcyhyZWdpb25Db3VudHMpXHJcbiAgICAgIC5tYXAoKFtuYW1lLCBjb3VudF0pID0+ICh7IG5hbWUsIGNvdW50IH0pKVxyXG4gICAgICAuc29ydCgoYSwgYikgPT4gYi5jb3VudCAtIGEuY291bnQpXHJcbiAgICAgIC5zbGljZSgwLCA2KVxyXG5cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XHJcbiAgICAgIHRvdGFsVHJpcHMsXHJcbiAgICAgIGF2ZXJhZ2VUcmlwRHVyYXRpb24sXHJcbiAgICAgIGZhdm9yaXRlUmVnaW9uc1xyXG4gICAgfSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignUHJlZmVyZW5jZXMgZmV0Y2ggZXJyb3I6JywgZXJyb3IpXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgIHsgZXJyb3I6ICdJbnRlcm5hbCBzZXJ2ZXIgZXJyb3InIH0sXHJcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxyXG4gICAgKVxyXG4gIH1cclxufSAiXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiY29va2llcyIsImp3dCIsInByaXNtYSIsIkdFVCIsInRva2VuIiwiZ2V0IiwianNvbiIsImVycm9yIiwic3RhdHVzIiwidXNlcklkIiwidmVyaWZ5IiwidmFsdWUiLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsInRyaXBzIiwidHJpcCIsImZpbmRNYW55Iiwid2hlcmUiLCJ0b3RhbFRyaXBzIiwibGVuZ3RoIiwiYXZlcmFnZVRyaXBEdXJhdGlvbiIsIk1hdGgiLCJyb3VuZCIsInJlZHVjZSIsImFjYyIsInN0YXJ0IiwiRGF0ZSIsInN0YXJ0RGF0ZSIsImVuZCIsImVuZERhdGUiLCJkYXlzIiwiY2VpbCIsImdldFRpbWUiLCJyZWdpb25Db3VudHMiLCJkZXN0aW5hdGlvbnMiLCJmb3JFYWNoIiwiZGVzdGluYXRpb24iLCJmYXZvcml0ZVJlZ2lvbnMiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwibmFtZSIsImNvdW50Iiwic29ydCIsImEiLCJiIiwic2xpY2UiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/preferences/route.ts\n");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/jws","vendor-chunks/lodash.once","vendor-chunks/jwa","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/ms","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fpreferences%2Froute&page=%2Fapi%2Fpreferences%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpreferences%2Froute.ts&appDir=E%3A%5CProjects%5CTravel%20App%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CProjects%5CTravel%20App&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();
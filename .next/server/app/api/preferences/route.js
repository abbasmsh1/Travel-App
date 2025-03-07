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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n\n\n\n\nasync function GET() {\n    try {\n        // Get the token from cookies\n        const token = (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)().get(\"auth-token\")?.value;\n        if (!token) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        // Verify token\n        const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().verify(token, process.env.JWT_SECRET || \"your-jwt-secret-key\");\n        // Get user's trips\n        const trips = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__[\"default\"].trip.findMany({\n            where: {\n                userId: decoded.userId\n            }\n        });\n        // Calculate preferences\n        const totalTrips = trips.length;\n        // Calculate average trip duration\n        const averageTripDuration = totalTrips > 0 ? Math.round(trips.reduce((acc, trip)=>{\n            const start = new Date(trip.startDate);\n            const end = new Date(trip.endDate);\n            const duration = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));\n            return acc + duration;\n        }, 0) / totalTrips) : 0;\n        // Calculate favorite regions\n        const regionCounts = new Map();\n        trips.forEach((trip)=>{\n            trip.destinations.forEach((destination)=>{\n                const region = destination.split(\",\")[0].trim() // Assuming format: \"City, Region\"\n                ;\n                regionCounts.set(region, (regionCounts.get(region) || 0) + 1);\n            });\n        });\n        const favoriteRegions = Array.from(regionCounts.entries()).map(([name, count])=>({\n                name,\n                count\n            })).sort((a, b)=>b.count - a.count).slice(0, 6) // Top 6 regions\n        ;\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            totalTrips,\n            averageTripDuration,\n            favoriteRegions\n        });\n    } catch (error) {\n        console.error(\"Error fetching preferences:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to fetch preferences\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9wcmVmZXJlbmNlcy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEM7QUFDSjtBQUNSO0FBQ0c7QUFFMUIsZUFBZUk7SUFDcEIsSUFBSTtRQUNGLDZCQUE2QjtRQUM3QixNQUFNQyxRQUFRSixxREFBT0EsR0FBR0ssR0FBRyxDQUFDLGVBQWVDO1FBRTNDLElBQUksQ0FBQ0YsT0FBTztZQUNWLE9BQU9MLHFEQUFZQSxDQUFDUSxJQUFJLENBQ3RCO2dCQUFFQyxPQUFPO1lBQWUsR0FDeEI7Z0JBQUVDLFFBQVE7WUFBSTtRQUVsQjtRQUVBLGVBQWU7UUFDZixNQUFNQyxVQUFVVCwwREFBVSxDQUN4QkcsT0FDQVEsUUFBUUMsR0FBRyxDQUFDQyxVQUFVLElBQUk7UUFHNUIsbUJBQW1CO1FBQ25CLE1BQU1DLFFBQVEsTUFBTWIsbURBQU1BLENBQUNjLElBQUksQ0FBQ0MsUUFBUSxDQUFDO1lBQ3ZDQyxPQUFPO2dCQUNMQyxRQUFRVCxRQUFRUyxNQUFNO1lBQ3hCO1FBQ0Y7UUFFQSx3QkFBd0I7UUFDeEIsTUFBTUMsYUFBYUwsTUFBTU0sTUFBTTtRQUUvQixrQ0FBa0M7UUFDbEMsTUFBTUMsc0JBQXNCRixhQUFhLElBQ3JDRyxLQUFLQyxLQUFLLENBQ1JULE1BQU1VLE1BQU0sQ0FBQyxDQUFDQyxLQUFLVjtZQUNqQixNQUFNVyxRQUFRLElBQUlDLEtBQUtaLEtBQUthLFNBQVM7WUFDckMsTUFBTUMsTUFBTSxJQUFJRixLQUFLWixLQUFLZSxPQUFPO1lBQ2pDLE1BQU1DLFdBQVdULEtBQUtVLElBQUksQ0FBQyxDQUFDSCxJQUFJSSxPQUFPLEtBQUtQLE1BQU1PLE9BQU8sRUFBQyxJQUFNLFFBQU8sS0FBSyxLQUFLLEVBQUM7WUFDbEYsT0FBT1IsTUFBTU07UUFDZixHQUFHLEtBQUtaLGNBRVY7UUFFSiw2QkFBNkI7UUFDN0IsTUFBTWUsZUFBZSxJQUFJQztRQUN6QnJCLE1BQU1zQixPQUFPLENBQUNyQixDQUFBQTtZQUNaQSxLQUFLc0IsWUFBWSxDQUFDRCxPQUFPLENBQUNFLENBQUFBO2dCQUN4QixNQUFNQyxTQUFTRCxZQUFZRSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQ0MsSUFBSSxHQUFHLGtDQUFrQzs7Z0JBQ2xGUCxhQUFhUSxHQUFHLENBQUNILFFBQVEsQ0FBQ0wsYUFBYTlCLEdBQUcsQ0FBQ21DLFdBQVcsS0FBSztZQUM3RDtRQUNGO1FBRUEsTUFBTUksa0JBQWtCQyxNQUFNQyxJQUFJLENBQUNYLGFBQWFZLE9BQU8sSUFDcERDLEdBQUcsQ0FBQyxDQUFDLENBQUNDLE1BQU1DLE1BQU0sR0FBTTtnQkFBRUQ7Z0JBQU1DO1lBQU0sSUFDdENDLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUFNQSxFQUFFSCxLQUFLLEdBQUdFLEVBQUVGLEtBQUssRUFDaENJLEtBQUssQ0FBQyxHQUFHLEdBQUcsZ0JBQWdCOztRQUUvQixPQUFPdkQscURBQVlBLENBQUNRLElBQUksQ0FBQztZQUN2QmE7WUFDQUU7WUFDQXNCO1FBQ0Y7SUFDRixFQUFFLE9BQU9wQyxPQUFPO1FBQ2QrQyxRQUFRL0MsS0FBSyxDQUFDLCtCQUErQkE7UUFDN0MsT0FBT1QscURBQVlBLENBQUNRLElBQUksQ0FDdEI7WUFBRUMsT0FBTztRQUE4QixHQUN2QztZQUFFQyxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3Bha2lzdGFuLXRyYXZlbC8uL3NyYy9hcHAvYXBpL3ByZWZlcmVuY2VzL3JvdXRlLnRzPzY3ZjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInXHJcbmltcG9ydCB7IGNvb2tpZXMgfSBmcm9tICduZXh0L2hlYWRlcnMnXHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xyXG5pbXBvcnQgcHJpc21hIGZyb20gJ0AvbGliL3ByaXNtYSdcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIEdldCB0aGUgdG9rZW4gZnJvbSBjb29raWVzXHJcbiAgICBjb25zdCB0b2tlbiA9IGNvb2tpZXMoKS5nZXQoJ2F1dGgtdG9rZW4nKT8udmFsdWVcclxuXHJcbiAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgICB7IGVycm9yOiAnVW5hdXRob3JpemVkJyB9LFxyXG4gICAgICAgIHsgc3RhdHVzOiA0MDEgfVxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgLy8gVmVyaWZ5IHRva2VuXHJcbiAgICBjb25zdCBkZWNvZGVkID0gand0LnZlcmlmeShcclxuICAgICAgdG9rZW4sXHJcbiAgICAgIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQgfHwgJ3lvdXItand0LXNlY3JldC1rZXknXHJcbiAgICApIGFzIHsgdXNlcklkOiBzdHJpbmcgfVxyXG5cclxuICAgIC8vIEdldCB1c2VyJ3MgdHJpcHNcclxuICAgIGNvbnN0IHRyaXBzID0gYXdhaXQgcHJpc21hLnRyaXAuZmluZE1hbnkoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIHVzZXJJZDogZGVjb2RlZC51c2VySWRcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgcHJlZmVyZW5jZXNcclxuICAgIGNvbnN0IHRvdGFsVHJpcHMgPSB0cmlwcy5sZW5ndGhcclxuICAgIFxyXG4gICAgLy8gQ2FsY3VsYXRlIGF2ZXJhZ2UgdHJpcCBkdXJhdGlvblxyXG4gICAgY29uc3QgYXZlcmFnZVRyaXBEdXJhdGlvbiA9IHRvdGFsVHJpcHMgPiAwXHJcbiAgICAgID8gTWF0aC5yb3VuZChcclxuICAgICAgICAgIHRyaXBzLnJlZHVjZSgoYWNjLCB0cmlwKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUodHJpcC5zdGFydERhdGUpXHJcbiAgICAgICAgICAgIGNvbnN0IGVuZCA9IG5ldyBEYXRlKHRyaXAuZW5kRGF0ZSlcclxuICAgICAgICAgICAgY29uc3QgZHVyYXRpb24gPSBNYXRoLmNlaWwoKGVuZC5nZXRUaW1lKCkgLSBzdGFydC5nZXRUaW1lKCkpIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKVxyXG4gICAgICAgICAgICByZXR1cm4gYWNjICsgZHVyYXRpb25cclxuICAgICAgICAgIH0sIDApIC8gdG90YWxUcmlwc1xyXG4gICAgICAgIClcclxuICAgICAgOiAwXHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIGZhdm9yaXRlIHJlZ2lvbnNcclxuICAgIGNvbnN0IHJlZ2lvbkNvdW50cyA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KClcclxuICAgIHRyaXBzLmZvckVhY2godHJpcCA9PiB7XHJcbiAgICAgIHRyaXAuZGVzdGluYXRpb25zLmZvckVhY2goZGVzdGluYXRpb24gPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlZ2lvbiA9IGRlc3RpbmF0aW9uLnNwbGl0KCcsJylbMF0udHJpbSgpIC8vIEFzc3VtaW5nIGZvcm1hdDogXCJDaXR5LCBSZWdpb25cIlxyXG4gICAgICAgIHJlZ2lvbkNvdW50cy5zZXQocmVnaW9uLCAocmVnaW9uQ291bnRzLmdldChyZWdpb24pIHx8IDApICsgMSlcclxuICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgZmF2b3JpdGVSZWdpb25zID0gQXJyYXkuZnJvbShyZWdpb25Db3VudHMuZW50cmllcygpKVxyXG4gICAgICAubWFwKChbbmFtZSwgY291bnRdKSA9PiAoeyBuYW1lLCBjb3VudCB9KSlcclxuICAgICAgLnNvcnQoKGEsIGIpID0+IGIuY291bnQgLSBhLmNvdW50KVxyXG4gICAgICAuc2xpY2UoMCwgNikgLy8gVG9wIDYgcmVnaW9uc1xyXG5cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XHJcbiAgICAgIHRvdGFsVHJpcHMsXHJcbiAgICAgIGF2ZXJhZ2VUcmlwRHVyYXRpb24sXHJcbiAgICAgIGZhdm9yaXRlUmVnaW9uc1xyXG4gICAgfSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcHJlZmVyZW5jZXM6JywgZXJyb3IpXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgIHsgZXJyb3I6ICdGYWlsZWQgdG8gZmV0Y2ggcHJlZmVyZW5jZXMnIH0sXHJcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxyXG4gICAgKVxyXG4gIH1cclxufSAiXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiY29va2llcyIsImp3dCIsInByaXNtYSIsIkdFVCIsInRva2VuIiwiZ2V0IiwidmFsdWUiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJkZWNvZGVkIiwidmVyaWZ5IiwicHJvY2VzcyIsImVudiIsIkpXVF9TRUNSRVQiLCJ0cmlwcyIsInRyaXAiLCJmaW5kTWFueSIsIndoZXJlIiwidXNlcklkIiwidG90YWxUcmlwcyIsImxlbmd0aCIsImF2ZXJhZ2VUcmlwRHVyYXRpb24iLCJNYXRoIiwicm91bmQiLCJyZWR1Y2UiLCJhY2MiLCJzdGFydCIsIkRhdGUiLCJzdGFydERhdGUiLCJlbmQiLCJlbmREYXRlIiwiZHVyYXRpb24iLCJjZWlsIiwiZ2V0VGltZSIsInJlZ2lvbkNvdW50cyIsIk1hcCIsImZvckVhY2giLCJkZXN0aW5hdGlvbnMiLCJkZXN0aW5hdGlvbiIsInJlZ2lvbiIsInNwbGl0IiwidHJpbSIsInNldCIsImZhdm9yaXRlUmVnaW9ucyIsIkFycmF5IiwiZnJvbSIsImVudHJpZXMiLCJtYXAiLCJuYW1lIiwiY291bnQiLCJzb3J0IiwiYSIsImIiLCJzbGljZSIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/preferences/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/prisma.ts":
/*!***************************!*\
  !*** ./src/lib/prisma.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prismaClientSingleton = ()=>{\n    return new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n};\nconst prisma = globalThis.prisma ?? prismaClientSingleton();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\nif (true) globalThis.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3ByaXNtYS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkM7QUFFN0MsTUFBTUMsd0JBQXdCO0lBQzVCLE9BQU8sSUFBSUQsd0RBQVlBO0FBQ3pCO0FBTUEsTUFBTUUsU0FBU0MsV0FBV0QsTUFBTSxJQUFJRDtBQUVwQyxpRUFBZUMsTUFBTUEsRUFBQTtBQUVyQixJQUFJRSxJQUF5QixFQUFjRCxXQUFXRCxNQUFNLEdBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGFraXN0YW4tdHJhdmVsLy4vc3JjL2xpYi9wcmlzbWEudHM/MDFkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcclxuXHJcbmNvbnN0IHByaXNtYUNsaWVudFNpbmdsZXRvbiA9ICgpID0+IHtcclxuICByZXR1cm4gbmV3IFByaXNtYUNsaWVudCgpXHJcbn1cclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICB2YXIgcHJpc21hOiB1bmRlZmluZWQgfCBSZXR1cm5UeXBlPHR5cGVvZiBwcmlzbWFDbGllbnRTaW5nbGV0b24+XHJcbn1cclxuXHJcbmNvbnN0IHByaXNtYSA9IGdsb2JhbFRoaXMucHJpc21hID8/IHByaXNtYUNsaWVudFNpbmdsZXRvbigpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcmlzbWFcclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSBnbG9iYWxUaGlzLnByaXNtYSA9IHByaXNtYSAiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hQ2xpZW50U2luZ2xldG9uIiwicHJpc21hIiwiZ2xvYmFsVGhpcyIsInByb2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/prisma.ts\n");

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
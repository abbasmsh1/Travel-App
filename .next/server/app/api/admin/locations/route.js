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
exports.id = "app/api/admin/locations/route";
exports.ids = ["app/api/admin/locations/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Flocations%2Froute&page=%2Fapi%2Fadmin%2Flocations%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Flocations%2Froute.ts&appDir=E%3A%5CProjects%5CTravel%20App%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CProjects%5CTravel%20App&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Flocations%2Froute&page=%2Fapi%2Fadmin%2Flocations%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Flocations%2Froute.ts&appDir=E%3A%5CProjects%5CTravel%20App%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CProjects%5CTravel%20App&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var E_Projects_Travel_App_src_app_api_admin_locations_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/admin/locations/route.ts */ \"(rsc)/./src/app/api/admin/locations/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/admin/locations/route\",\n        pathname: \"/api/admin/locations\",\n        filename: \"route\",\n        bundlePath: \"app/api/admin/locations/route\"\n    },\n    resolvedPagePath: \"E:\\\\Projects\\\\Travel App\\\\src\\\\app\\\\api\\\\admin\\\\locations\\\\route.ts\",\n    nextConfigOutput,\n    userland: E_Projects_Travel_App_src_app_api_admin_locations_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/admin/locations/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhZG1pbiUyRmxvY2F0aW9ucyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGYWRtaW4lMkZsb2NhdGlvbnMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZhZG1pbiUyRmxvY2F0aW9ucyUyRnJvdXRlLnRzJmFwcERpcj1FJTNBJTVDUHJvamVjdHMlNUNUcmF2ZWwlMjBBcHAlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUUlM0ElNUNQcm9qZWN0cyU1Q1RyYXZlbCUyMEFwcCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDbUI7QUFDaEc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYWtpc3Rhbi10cmF2ZWwvP2E3YTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiRTpcXFxcUHJvamVjdHNcXFxcVHJhdmVsIEFwcFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxhZG1pblxcXFxsb2NhdGlvbnNcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2FkbWluL2xvY2F0aW9ucy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2FkbWluL2xvY2F0aW9uc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYWRtaW4vbG9jYXRpb25zL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiRTpcXFxcUHJvamVjdHNcXFxcVHJhdmVsIEFwcFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxhZG1pblxcXFxsb2NhdGlvbnNcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2FkbWluL2xvY2F0aW9ucy9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Flocations%2Froute&page=%2Fapi%2Fadmin%2Flocations%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Flocations%2Froute.ts&appDir=E%3A%5CProjects%5CTravel%20App%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CProjects%5CTravel%20App&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/admin/locations/route.ts":
/*!**********************************************!*\
  !*** ./src/app/api/admin/locations/route.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n\n\n\n\nasync function checkAdmin() {\n    const token = (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)().get(\"auth-token\")?.value;\n    if (!token) {\n        return false;\n    }\n    try {\n        const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().verify(token, process.env.JWT_SECRET || \"your-jwt-secret-key\");\n        const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__[\"default\"].user.findUnique({\n            where: {\n                id: decoded.userId\n            },\n            select: {\n                role: true\n            }\n        });\n        return user?.role === \"ADMIN\";\n    } catch  {\n        return false;\n    }\n}\nasync function GET() {\n    try {\n        if (!await checkAdmin()) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        const locations = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__[\"default\"].location.findMany({\n            orderBy: {\n                name: \"asc\"\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            locations\n        });\n    } catch (error) {\n        console.error(\"Get locations error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to fetch locations\"\n        }, {\n            status: 500\n        });\n    }\n}\nasync function POST(req) {\n    try {\n        if (!await checkAdmin()) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        const data = await req.json();\n        const location = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__[\"default\"].location.create({\n            data: {\n                name: data.name,\n                region: data.region,\n                country: data.country,\n                description: data.description,\n                imageUrl: data.imageUrl || null,\n                climate: data.climate || null,\n                bestTimeToVisit: data.bestTimeToVisit || null\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            location\n        });\n    } catch (error) {\n        console.error(\"Create location error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to create location\"\n        }, {\n            status: 500\n        });\n    }\n}\nasync function PUT(req) {\n    try {\n        if (!await checkAdmin()) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        const data = await req.json();\n        const location = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__[\"default\"].location.update({\n            where: {\n                id: data.id\n            },\n            data: {\n                name: data.name,\n                region: data.region,\n                country: data.country,\n                description: data.description,\n                imageUrl: data.imageUrl || null,\n                climate: data.climate || null,\n                bestTimeToVisit: data.bestTimeToVisit || null\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            location\n        });\n    } catch (error) {\n        console.error(\"Update location error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to update location\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hZG1pbi9sb2NhdGlvbnMvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMEM7QUFDSjtBQUNSO0FBQ0c7QUFFakMsZUFBZUk7SUFDYixNQUFNQyxRQUFRSixxREFBT0EsR0FBR0ssR0FBRyxDQUFDLGVBQWVDO0lBRTNDLElBQUksQ0FBQ0YsT0FBTztRQUNWLE9BQU87SUFDVDtJQUVBLElBQUk7UUFDRixNQUFNRyxVQUFVTiwwREFBVSxDQUN4QkcsT0FDQUssUUFBUUMsR0FBRyxDQUFDQyxVQUFVLElBQUk7UUFHNUIsTUFBTUMsT0FBTyxNQUFNVixtREFBTUEsQ0FBQ1UsSUFBSSxDQUFDQyxVQUFVLENBQUM7WUFDeENDLE9BQU87Z0JBQUVDLElBQUlSLFFBQVFTLE1BQU07WUFBQztZQUM1QkMsUUFBUTtnQkFBRUMsTUFBTTtZQUFLO1FBQ3ZCO1FBRUEsT0FBT04sTUFBTU0sU0FBUztJQUN4QixFQUFFLE9BQU07UUFDTixPQUFPO0lBQ1Q7QUFDRjtBQUVPLGVBQWVDO0lBQ3BCLElBQUk7UUFDRixJQUFJLENBQUMsTUFBTWhCLGNBQWM7WUFDdkIsT0FBT0oscURBQVlBLENBQUNxQixJQUFJLENBQ3RCO2dCQUFFQyxPQUFPO1lBQWUsR0FDeEI7Z0JBQUVDLFFBQVE7WUFBSTtRQUVsQjtRQUVBLE1BQU1DLFlBQVksTUFBTXJCLG1EQUFNQSxDQUFDc0IsUUFBUSxDQUFDQyxRQUFRLENBQUM7WUFDL0NDLFNBQVM7Z0JBQUVDLE1BQU07WUFBTTtRQUN6QjtRQUVBLE9BQU81QixxREFBWUEsQ0FBQ3FCLElBQUksQ0FBQztZQUFFRztRQUFVO0lBQ3ZDLEVBQUUsT0FBT0YsT0FBTztRQUNkTyxRQUFRUCxLQUFLLENBQUMsd0JBQXdCQTtRQUN0QyxPQUFPdEIscURBQVlBLENBQUNxQixJQUFJLENBQ3RCO1lBQUVDLE9BQU87UUFBNEIsR0FDckM7WUFBRUMsUUFBUTtRQUFJO0lBRWxCO0FBQ0Y7QUFFTyxlQUFlTyxLQUFLQyxHQUFZO0lBQ3JDLElBQUk7UUFDRixJQUFJLENBQUMsTUFBTTNCLGNBQWM7WUFDdkIsT0FBT0oscURBQVlBLENBQUNxQixJQUFJLENBQ3RCO2dCQUFFQyxPQUFPO1lBQWUsR0FDeEI7Z0JBQUVDLFFBQVE7WUFBSTtRQUVsQjtRQUVBLE1BQU1TLE9BQU8sTUFBTUQsSUFBSVYsSUFBSTtRQUUzQixNQUFNSSxXQUFXLE1BQU10QixtREFBTUEsQ0FBQ3NCLFFBQVEsQ0FBQ1EsTUFBTSxDQUFDO1lBQzVDRCxNQUFNO2dCQUNKSixNQUFNSSxLQUFLSixJQUFJO2dCQUNmTSxRQUFRRixLQUFLRSxNQUFNO2dCQUNuQkMsU0FBU0gsS0FBS0csT0FBTztnQkFDckJDLGFBQWFKLEtBQUtJLFdBQVc7Z0JBQzdCQyxVQUFVTCxLQUFLSyxRQUFRLElBQUk7Z0JBQzNCQyxTQUFTTixLQUFLTSxPQUFPLElBQUk7Z0JBQ3pCQyxpQkFBaUJQLEtBQUtPLGVBQWUsSUFBSTtZQUMzQztRQUNGO1FBRUEsT0FBT3ZDLHFEQUFZQSxDQUFDcUIsSUFBSSxDQUFDO1lBQUVJO1FBQVM7SUFDdEMsRUFBRSxPQUFPSCxPQUFPO1FBQ2RPLFFBQVFQLEtBQUssQ0FBQywwQkFBMEJBO1FBQ3hDLE9BQU90QixxREFBWUEsQ0FBQ3FCLElBQUksQ0FDdEI7WUFBRUMsT0FBTztRQUE0QixHQUNyQztZQUFFQyxRQUFRO1FBQUk7SUFFbEI7QUFDRjtBQUVPLGVBQWVpQixJQUFJVCxHQUFZO0lBQ3BDLElBQUk7UUFDRixJQUFJLENBQUMsTUFBTTNCLGNBQWM7WUFDdkIsT0FBT0oscURBQVlBLENBQUNxQixJQUFJLENBQ3RCO2dCQUFFQyxPQUFPO1lBQWUsR0FDeEI7Z0JBQUVDLFFBQVE7WUFBSTtRQUVsQjtRQUVBLE1BQU1TLE9BQU8sTUFBTUQsSUFBSVYsSUFBSTtRQUUzQixNQUFNSSxXQUFXLE1BQU10QixtREFBTUEsQ0FBQ3NCLFFBQVEsQ0FBQ2dCLE1BQU0sQ0FBQztZQUM1QzFCLE9BQU87Z0JBQUVDLElBQUlnQixLQUFLaEIsRUFBRTtZQUFDO1lBQ3JCZ0IsTUFBTTtnQkFDSkosTUFBTUksS0FBS0osSUFBSTtnQkFDZk0sUUFBUUYsS0FBS0UsTUFBTTtnQkFDbkJDLFNBQVNILEtBQUtHLE9BQU87Z0JBQ3JCQyxhQUFhSixLQUFLSSxXQUFXO2dCQUM3QkMsVUFBVUwsS0FBS0ssUUFBUSxJQUFJO2dCQUMzQkMsU0FBU04sS0FBS00sT0FBTyxJQUFJO2dCQUN6QkMsaUJBQWlCUCxLQUFLTyxlQUFlLElBQUk7WUFDM0M7UUFDRjtRQUVBLE9BQU92QyxxREFBWUEsQ0FBQ3FCLElBQUksQ0FBQztZQUFFSTtRQUFTO0lBQ3RDLEVBQUUsT0FBT0gsT0FBTztRQUNkTyxRQUFRUCxLQUFLLENBQUMsMEJBQTBCQTtRQUN4QyxPQUFPdEIscURBQVlBLENBQUNxQixJQUFJLENBQ3RCO1lBQUVDLE9BQU87UUFBNEIsR0FDckM7WUFBRUMsUUFBUTtRQUFJO0lBRWxCO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYWtpc3Rhbi10cmF2ZWwvLi9zcmMvYXBwL2FwaS9hZG1pbi9sb2NhdGlvbnMvcm91dGUudHM/ODQ2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcidcclxuaW1wb3J0IHsgY29va2llcyB9IGZyb20gJ25leHQvaGVhZGVycydcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXHJcbmltcG9ydCBwcmlzbWEgZnJvbSAnQC9saWIvcHJpc21hJ1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gY2hlY2tBZG1pbigpIHtcclxuICBjb25zdCB0b2tlbiA9IGNvb2tpZXMoKS5nZXQoJ2F1dGgtdG9rZW4nKT8udmFsdWVcclxuXHJcbiAgaWYgKCF0b2tlbikge1xyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgZGVjb2RlZCA9IGp3dC52ZXJpZnkoXHJcbiAgICAgIHRva2VuLFxyXG4gICAgICBwcm9jZXNzLmVudi5KV1RfU0VDUkVUIHx8ICd5b3VyLWp3dC1zZWNyZXQta2V5J1xyXG4gICAgKSBhcyB7IHVzZXJJZDogc3RyaW5nIH1cclxuXHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiBkZWNvZGVkLnVzZXJJZCB9LFxyXG4gICAgICBzZWxlY3Q6IHsgcm9sZTogdHJ1ZSB9XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiB1c2VyPy5yb2xlID09PSAnQURNSU4nXHJcbiAgfSBjYXRjaCB7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGlmICghYXdhaXQgY2hlY2tBZG1pbigpKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgICB7IGVycm9yOiAnVW5hdXRob3JpemVkJyB9LFxyXG4gICAgICAgIHsgc3RhdHVzOiA0MDEgfVxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbG9jYXRpb25zID0gYXdhaXQgcHJpc21hLmxvY2F0aW9uLmZpbmRNYW55KHtcclxuICAgICAgb3JkZXJCeTogeyBuYW1lOiAnYXNjJyB9XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGxvY2F0aW9ucyB9KVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdHZXQgbG9jYXRpb25zIGVycm9yOicsIGVycm9yKVxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICB7IGVycm9yOiAnRmFpbGVkIHRvIGZldGNoIGxvY2F0aW9ucycgfSxcclxuICAgICAgeyBzdGF0dXM6IDUwMCB9XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IFJlcXVlc3QpIHtcclxuICB0cnkge1xyXG4gICAgaWYgKCFhd2FpdCBjaGVja0FkbWluKCkpIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICAgIHsgZXJyb3I6ICdVbmF1dGhvcml6ZWQnIH0sXHJcbiAgICAgICAgeyBzdGF0dXM6IDQwMSB9XHJcbiAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxLmpzb24oKVxyXG5cclxuICAgIGNvbnN0IGxvY2F0aW9uID0gYXdhaXQgcHJpc21hLmxvY2F0aW9uLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXHJcbiAgICAgICAgcmVnaW9uOiBkYXRhLnJlZ2lvbixcclxuICAgICAgICBjb3VudHJ5OiBkYXRhLmNvdW50cnksXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgaW1hZ2VVcmw6IGRhdGEuaW1hZ2VVcmwgfHwgbnVsbCxcclxuICAgICAgICBjbGltYXRlOiBkYXRhLmNsaW1hdGUgfHwgbnVsbCxcclxuICAgICAgICBiZXN0VGltZVRvVmlzaXQ6IGRhdGEuYmVzdFRpbWVUb1Zpc2l0IHx8IG51bGxcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBsb2NhdGlvbiB9KVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdDcmVhdGUgbG9jYXRpb24gZXJyb3I6JywgZXJyb3IpXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgIHsgZXJyb3I6ICdGYWlsZWQgdG8gY3JlYXRlIGxvY2F0aW9uJyB9LFxyXG4gICAgICB7IHN0YXR1czogNTAwIH1cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQVVQocmVxOiBSZXF1ZXN0KSB7XHJcbiAgdHJ5IHtcclxuICAgIGlmICghYXdhaXQgY2hlY2tBZG1pbigpKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgICB7IGVycm9yOiAnVW5hdXRob3JpemVkJyB9LFxyXG4gICAgICAgIHsgc3RhdHVzOiA0MDEgfVxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcS5qc29uKClcclxuXHJcbiAgICBjb25zdCBsb2NhdGlvbiA9IGF3YWl0IHByaXNtYS5sb2NhdGlvbi51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZDogZGF0YS5pZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxyXG4gICAgICAgIHJlZ2lvbjogZGF0YS5yZWdpb24sXHJcbiAgICAgICAgY291bnRyeTogZGF0YS5jb3VudHJ5LFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIGltYWdlVXJsOiBkYXRhLmltYWdlVXJsIHx8IG51bGwsXHJcbiAgICAgICAgY2xpbWF0ZTogZGF0YS5jbGltYXRlIHx8IG51bGwsXHJcbiAgICAgICAgYmVzdFRpbWVUb1Zpc2l0OiBkYXRhLmJlc3RUaW1lVG9WaXNpdCB8fCBudWxsXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbG9jYXRpb24gfSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignVXBkYXRlIGxvY2F0aW9uIGVycm9yOicsIGVycm9yKVxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICB7IGVycm9yOiAnRmFpbGVkIHRvIHVwZGF0ZSBsb2NhdGlvbicgfSxcclxuICAgICAgeyBzdGF0dXM6IDUwMCB9XHJcbiAgICApXHJcbiAgfVxyXG59ICJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJjb29raWVzIiwiand0IiwicHJpc21hIiwiY2hlY2tBZG1pbiIsInRva2VuIiwiZ2V0IiwidmFsdWUiLCJkZWNvZGVkIiwidmVyaWZ5IiwicHJvY2VzcyIsImVudiIsIkpXVF9TRUNSRVQiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiaWQiLCJ1c2VySWQiLCJzZWxlY3QiLCJyb2xlIiwiR0VUIiwianNvbiIsImVycm9yIiwic3RhdHVzIiwibG9jYXRpb25zIiwibG9jYXRpb24iLCJmaW5kTWFueSIsIm9yZGVyQnkiLCJuYW1lIiwiY29uc29sZSIsIlBPU1QiLCJyZXEiLCJkYXRhIiwiY3JlYXRlIiwicmVnaW9uIiwiY291bnRyeSIsImRlc2NyaXB0aW9uIiwiaW1hZ2VVcmwiLCJjbGltYXRlIiwiYmVzdFRpbWVUb1Zpc2l0IiwiUFVUIiwidXBkYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/admin/locations/route.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/jws","vendor-chunks/lodash.once","vendor-chunks/jwa","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/ms","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Flocations%2Froute&page=%2Fapi%2Fadmin%2Flocations%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Flocations%2Froute.ts&appDir=E%3A%5CProjects%5CTravel%20App%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CProjects%5CTravel%20App&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();
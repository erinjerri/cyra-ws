"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@smithy+util-middleware@4.0.3";
exports.ids = ["vendor-chunks/@smithy+util-middleware@4.0.3"];
exports.modules = {

/***/ "(rsc)/../../../../node_modules/.pnpm/@smithy+util-middleware@4.0.3/node_modules/@smithy/util-middleware/dist-es/getSmithyContext.js":
/*!*************************************************************************************************************************************!*\
  !*** ../../../../node_modules/.pnpm/@smithy+util-middleware@4.0.3/node_modules/@smithy/util-middleware/dist-es/getSmithyContext.js ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getSmithyContext: () => (/* binding */ getSmithyContext)\n/* harmony export */ });\n/* harmony import */ var _smithy_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/types */ \"(rsc)/../../../../node_modules/.pnpm/@smithy+types@4.3.0/node_modules/@smithy/types/dist-es/index.js\");\n\nconst getSmithyContext = (context) => context[_smithy_types__WEBPACK_IMPORTED_MODULE_0__.SMITHY_CONTEXT_KEY] || (context[_smithy_types__WEBPACK_IMPORTED_MODULE_0__.SMITHY_CONTEXT_KEY] = {});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrdXRpbC1taWRkbGV3YXJlQDQuMC4zL25vZGVfbW9kdWxlcy9Ac21pdGh5L3V0aWwtbWlkZGxld2FyZS9kaXN0LWVzL2dldFNtaXRoeUNvbnRleHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBbUQ7QUFDNUMsOENBQThDLDZEQUFrQixjQUFjLDZEQUFrQixNQUFNIiwic291cmNlcyI6WyIvVXNlcnMvZXJpbmplcnJpL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K3V0aWwtbWlkZGxld2FyZUA0LjAuMy9ub2RlX21vZHVsZXMvQHNtaXRoeS91dGlsLW1pZGRsZXdhcmUvZGlzdC1lcy9nZXRTbWl0aHlDb250ZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNNSVRIWV9DT05URVhUX0tFWSB9IGZyb20gXCJAc21pdGh5L3R5cGVzXCI7XG5leHBvcnQgY29uc3QgZ2V0U21pdGh5Q29udGV4dCA9IChjb250ZXh0KSA9PiBjb250ZXh0W1NNSVRIWV9DT05URVhUX0tFWV0gfHwgKGNvbnRleHRbU01JVEhZX0NPTlRFWFRfS0VZXSA9IHt9KTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/../../../../node_modules/.pnpm/@smithy+util-middleware@4.0.3/node_modules/@smithy/util-middleware/dist-es/getSmithyContext.js\n");

/***/ }),

/***/ "(rsc)/../../../../node_modules/.pnpm/@smithy+util-middleware@4.0.3/node_modules/@smithy/util-middleware/dist-es/index.js":
/*!**************************************************************************************************************************!*\
  !*** ../../../../node_modules/.pnpm/@smithy+util-middleware@4.0.3/node_modules/@smithy/util-middleware/dist-es/index.js ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getSmithyContext: () => (/* reexport safe */ _getSmithyContext__WEBPACK_IMPORTED_MODULE_0__.getSmithyContext),\n/* harmony export */   normalizeProvider: () => (/* reexport safe */ _normalizeProvider__WEBPACK_IMPORTED_MODULE_1__.normalizeProvider)\n/* harmony export */ });\n/* harmony import */ var _getSmithyContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getSmithyContext */ \"(rsc)/../../../../node_modules/.pnpm/@smithy+util-middleware@4.0.3/node_modules/@smithy/util-middleware/dist-es/getSmithyContext.js\");\n/* harmony import */ var _normalizeProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./normalizeProvider */ \"(rsc)/../../../../node_modules/.pnpm/@smithy+util-middleware@4.0.3/node_modules/@smithy/util-middleware/dist-es/normalizeProvider.js\");\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrdXRpbC1taWRkbGV3YXJlQDQuMC4zL25vZGVfbW9kdWxlcy9Ac21pdGh5L3V0aWwtbWlkZGxld2FyZS9kaXN0LWVzL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBbUM7QUFDQyIsInNvdXJjZXMiOlsiL1VzZXJzL2VyaW5qZXJyaS9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeSt1dGlsLW1pZGRsZXdhcmVANC4wLjMvbm9kZV9tb2R1bGVzL0BzbWl0aHkvdXRpbC1taWRkbGV3YXJlL2Rpc3QtZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi4vZ2V0U21pdGh5Q29udGV4dFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vbm9ybWFsaXplUHJvdmlkZXJcIjtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/../../../../node_modules/.pnpm/@smithy+util-middleware@4.0.3/node_modules/@smithy/util-middleware/dist-es/index.js\n");

/***/ }),

/***/ "(rsc)/../../../../node_modules/.pnpm/@smithy+util-middleware@4.0.3/node_modules/@smithy/util-middleware/dist-es/normalizeProvider.js":
/*!**************************************************************************************************************************************!*\
  !*** ../../../../node_modules/.pnpm/@smithy+util-middleware@4.0.3/node_modules/@smithy/util-middleware/dist-es/normalizeProvider.js ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   normalizeProvider: () => (/* binding */ normalizeProvider)\n/* harmony export */ });\nconst normalizeProvider = (input) => {\n    if (typeof input === \"function\")\n        return input;\n    const promisified = Promise.resolve(input);\n    return () => promisified;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrdXRpbC1taWRkbGV3YXJlQDQuMC4zL25vZGVfbW9kdWxlcy9Ac21pdGh5L3V0aWwtbWlkZGxld2FyZS9kaXN0LWVzL25vcm1hbGl6ZVByb3ZpZGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIi9Vc2Vycy9lcmluamVycmkvbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrdXRpbC1taWRkbGV3YXJlQDQuMC4zL25vZGVfbW9kdWxlcy9Ac21pdGh5L3V0aWwtbWlkZGxld2FyZS9kaXN0LWVzL25vcm1hbGl6ZVByb3ZpZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBub3JtYWxpemVQcm92aWRlciA9IChpbnB1dCkgPT4ge1xuICAgIGlmICh0eXBlb2YgaW5wdXQgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgcmV0dXJuIGlucHV0O1xuICAgIGNvbnN0IHByb21pc2lmaWVkID0gUHJvbWlzZS5yZXNvbHZlKGlucHV0KTtcbiAgICByZXR1cm4gKCkgPT4gcHJvbWlzaWZpZWQ7XG59O1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/../../../../node_modules/.pnpm/@smithy+util-middleware@4.0.3/node_modules/@smithy/util-middleware/dist-es/normalizeProvider.js\n");

/***/ })

};
;
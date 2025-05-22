"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@smithy+abort-controller@3.1.9";
exports.ids = ["vendor-chunks/@smithy+abort-controller@3.1.9"];
exports.modules = {

/***/ "(rsc)/../../../../node_modules/.pnpm/@smithy+abort-controller@3.1.9/node_modules/@smithy/abort-controller/dist-es/AbortController.js":
/*!**************************************************************************************************************************************!*\
  !*** ../../../../node_modules/.pnpm/@smithy+abort-controller@3.1.9/node_modules/@smithy/abort-controller/dist-es/AbortController.js ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AbortController: () => (/* binding */ AbortController)\n/* harmony export */ });\n/* harmony import */ var _AbortSignal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbortSignal */ \"(rsc)/../../../../node_modules/.pnpm/@smithy+abort-controller@3.1.9/node_modules/@smithy/abort-controller/dist-es/AbortSignal.js\");\n\nclass AbortController {\n    constructor() {\n        this.signal = new _AbortSignal__WEBPACK_IMPORTED_MODULE_0__.AbortSignal();\n    }\n    abort() {\n        this.signal.abort();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrYWJvcnQtY29udHJvbGxlckAzLjEuOS9ub2RlX21vZHVsZXMvQHNtaXRoeS9hYm9ydC1jb250cm9sbGVyL2Rpc3QtZXMvQWJvcnRDb250cm9sbGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTRDO0FBQ3JDO0FBQ1A7QUFDQSwwQkFBMEIscURBQVc7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiL1VzZXJzL2VyaW5qZXJyaS9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeSthYm9ydC1jb250cm9sbGVyQDMuMS45L25vZGVfbW9kdWxlcy9Ac21pdGh5L2Fib3J0LWNvbnRyb2xsZXIvZGlzdC1lcy9BYm9ydENvbnRyb2xsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWJvcnRTaWduYWwgfSBmcm9tIFwiLi9BYm9ydFNpZ25hbFwiO1xuZXhwb3J0IGNsYXNzIEFib3J0Q29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2lnbmFsID0gbmV3IEFib3J0U2lnbmFsKCk7XG4gICAgfVxuICAgIGFib3J0KCkge1xuICAgICAgICB0aGlzLnNpZ25hbC5hYm9ydCgpO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/../../../../node_modules/.pnpm/@smithy+abort-controller@3.1.9/node_modules/@smithy/abort-controller/dist-es/AbortController.js\n");

/***/ }),

/***/ "(rsc)/../../../../node_modules/.pnpm/@smithy+abort-controller@3.1.9/node_modules/@smithy/abort-controller/dist-es/AbortSignal.js":
/*!**********************************************************************************************************************************!*\
  !*** ../../../../node_modules/.pnpm/@smithy+abort-controller@3.1.9/node_modules/@smithy/abort-controller/dist-es/AbortSignal.js ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AbortSignal: () => (/* binding */ AbortSignal)\n/* harmony export */ });\nclass AbortSignal {\n    constructor() {\n        this.onabort = null;\n        this._aborted = false;\n        Object.defineProperty(this, \"_aborted\", {\n            value: false,\n            writable: true,\n        });\n    }\n    get aborted() {\n        return this._aborted;\n    }\n    abort() {\n        this._aborted = true;\n        if (this.onabort) {\n            this.onabort(this);\n            this.onabort = null;\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrYWJvcnQtY29udHJvbGxlckAzLjEuOS9ub2RlX21vZHVsZXMvQHNtaXRoeS9hYm9ydC1jb250cm9sbGVyL2Rpc3QtZXMvQWJvcnRTaWduYWwuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiL1VzZXJzL2VyaW5qZXJyaS9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeSthYm9ydC1jb250cm9sbGVyQDMuMS45L25vZGVfbW9kdWxlcy9Ac21pdGh5L2Fib3J0LWNvbnRyb2xsZXIvZGlzdC1lcy9BYm9ydFNpZ25hbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQWJvcnRTaWduYWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm9uYWJvcnQgPSBudWxsO1xuICAgICAgICB0aGlzLl9hYm9ydGVkID0gZmFsc2U7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9hYm9ydGVkXCIsIHtcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0IGFib3J0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hYm9ydGVkO1xuICAgIH1cbiAgICBhYm9ydCgpIHtcbiAgICAgICAgdGhpcy5fYWJvcnRlZCA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLm9uYWJvcnQpIHtcbiAgICAgICAgICAgIHRoaXMub25hYm9ydCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMub25hYm9ydCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/../../../../node_modules/.pnpm/@smithy+abort-controller@3.1.9/node_modules/@smithy/abort-controller/dist-es/AbortSignal.js\n");

/***/ }),

/***/ "(rsc)/../../../../node_modules/.pnpm/@smithy+abort-controller@3.1.9/node_modules/@smithy/abort-controller/dist-es/index.js":
/*!****************************************************************************************************************************!*\
  !*** ../../../../node_modules/.pnpm/@smithy+abort-controller@3.1.9/node_modules/@smithy/abort-controller/dist-es/index.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AbortController: () => (/* reexport safe */ _AbortController__WEBPACK_IMPORTED_MODULE_0__.AbortController),\n/* harmony export */   AbortSignal: () => (/* reexport safe */ _AbortSignal__WEBPACK_IMPORTED_MODULE_1__.AbortSignal)\n/* harmony export */ });\n/* harmony import */ var _AbortController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbortController */ \"(rsc)/../../../../node_modules/.pnpm/@smithy+abort-controller@3.1.9/node_modules/@smithy/abort-controller/dist-es/AbortController.js\");\n/* harmony import */ var _AbortSignal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbortSignal */ \"(rsc)/../../../../node_modules/.pnpm/@smithy+abort-controller@3.1.9/node_modules/@smithy/abort-controller/dist-es/AbortSignal.js\");\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrYWJvcnQtY29udHJvbGxlckAzLjEuOS9ub2RlX21vZHVsZXMvQHNtaXRoeS9hYm9ydC1jb250cm9sbGVyL2Rpc3QtZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFrQztBQUNKIiwic291cmNlcyI6WyIvVXNlcnMvZXJpbmplcnJpL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K2Fib3J0LWNvbnRyb2xsZXJAMy4xLjkvbm9kZV9tb2R1bGVzL0BzbWl0aHkvYWJvcnQtY29udHJvbGxlci9kaXN0LWVzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gXCIuL0Fib3J0Q29udHJvbGxlclwiO1xuZXhwb3J0ICogZnJvbSBcIi4vQWJvcnRTaWduYWxcIjtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/../../../../node_modules/.pnpm/@smithy+abort-controller@3.1.9/node_modules/@smithy/abort-controller/dist-es/index.js\n");

/***/ })

};
;
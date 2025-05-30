"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/scmp@2.1.0";
exports.ids = ["vendor-chunks/scmp@2.1.0"];
exports.modules = {

/***/ "(rsc)/../../../../node_modules/.pnpm/scmp@2.1.0/node_modules/scmp/index.js":
/*!****************************************************************************!*\
  !*** ../../../../node_modules/.pnpm/scmp@2.1.0/node_modules/scmp/index.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nconst crypto = __webpack_require__(/*! crypto */ \"crypto\")\nconst scmpCompare = __webpack_require__(/*! ./lib/scmpCompare */ \"(rsc)/../../../../node_modules/.pnpm/scmp@2.1.0/node_modules/scmp/lib/scmpCompare.js\")\n\n/**\n * Does a constant-time Buffer comparison by not short-circuiting\n * on first sign of non-equivalency.\n *\n * @param {Buffer} a The first Buffer to be compared against the second\n * @param {Buffer} b The second Buffer to be compared against the first\n * @return {Boolean}\n */\nmodule.exports = function scmp (a, b) {\n  // check that both inputs are buffers\n  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {\n    throw new Error('Both scmp args must be Buffers')\n  }\n\n  // return early here if buffer lengths are not equal since timingSafeEqual\n  // will throw if buffer lengths are not equal\n  if (a.length !== b.length) {\n    return false\n  }\n\n  // use crypto.timingSafeEqual if available (since Node.js v6.6.0),\n  // otherwise use our own scmp-internal function.\n  if (crypto.timingSafeEqual) {\n    return crypto.timingSafeEqual(a, b)\n  }\n\n  return scmpCompare(a, b)\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NjbXBAMi4xLjAvbm9kZV9tb2R1bGVzL3NjbXAvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQVk7O0FBRVosZUFBZSxtQkFBTyxDQUFDLHNCQUFRO0FBQy9CLG9CQUFvQixtQkFBTyxDQUFDLCtHQUFtQjs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIi9Vc2Vycy9lcmluamVycmkvbm9kZV9tb2R1bGVzLy5wbnBtL3NjbXBAMi4xLjAvbm9kZV9tb2R1bGVzL3NjbXAvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IGNyeXB0byA9IHJlcXVpcmUoJ2NyeXB0bycpXG5jb25zdCBzY21wQ29tcGFyZSA9IHJlcXVpcmUoJy4vbGliL3NjbXBDb21wYXJlJylcblxuLyoqXG4gKiBEb2VzIGEgY29uc3RhbnQtdGltZSBCdWZmZXIgY29tcGFyaXNvbiBieSBub3Qgc2hvcnQtY2lyY3VpdGluZ1xuICogb24gZmlyc3Qgc2lnbiBvZiBub24tZXF1aXZhbGVuY3kuXG4gKlxuICogQHBhcmFtIHtCdWZmZXJ9IGEgVGhlIGZpcnN0IEJ1ZmZlciB0byBiZSBjb21wYXJlZCBhZ2FpbnN0IHRoZSBzZWNvbmRcbiAqIEBwYXJhbSB7QnVmZmVyfSBiIFRoZSBzZWNvbmQgQnVmZmVyIHRvIGJlIGNvbXBhcmVkIGFnYWluc3QgdGhlIGZpcnN0XG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNjbXAgKGEsIGIpIHtcbiAgLy8gY2hlY2sgdGhhdCBib3RoIGlucHV0cyBhcmUgYnVmZmVyc1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihhKSB8fCAhQnVmZmVyLmlzQnVmZmVyKGIpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdCb3RoIHNjbXAgYXJncyBtdXN0IGJlIEJ1ZmZlcnMnKVxuICB9XG5cbiAgLy8gcmV0dXJuIGVhcmx5IGhlcmUgaWYgYnVmZmVyIGxlbmd0aHMgYXJlIG5vdCBlcXVhbCBzaW5jZSB0aW1pbmdTYWZlRXF1YWxcbiAgLy8gd2lsbCB0aHJvdyBpZiBidWZmZXIgbGVuZ3RocyBhcmUgbm90IGVxdWFsXG4gIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIHVzZSBjcnlwdG8udGltaW5nU2FmZUVxdWFsIGlmIGF2YWlsYWJsZSAoc2luY2UgTm9kZS5qcyB2Ni42LjApLFxuICAvLyBvdGhlcndpc2UgdXNlIG91ciBvd24gc2NtcC1pbnRlcm5hbCBmdW5jdGlvbi5cbiAgaWYgKGNyeXB0by50aW1pbmdTYWZlRXF1YWwpIHtcbiAgICByZXR1cm4gY3J5cHRvLnRpbWluZ1NhZmVFcXVhbChhLCBiKVxuICB9XG5cbiAgcmV0dXJuIHNjbXBDb21wYXJlKGEsIGIpXG59XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/../../../../node_modules/.pnpm/scmp@2.1.0/node_modules/scmp/index.js\n");

/***/ }),

/***/ "(rsc)/../../../../node_modules/.pnpm/scmp@2.1.0/node_modules/scmp/lib/scmpCompare.js":
/*!**************************************************************************************!*\
  !*** ../../../../node_modules/.pnpm/scmp@2.1.0/node_modules/scmp/lib/scmpCompare.js ***!
  \**************************************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function scmpCompare (a, b) {\n  const len = a.length\n  let result = 0\n  for (let i = 0; i < len; ++i) {\n    result |= a[i] ^ b[i]\n  }\n  return result === 0\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3NjbXBAMi4xLjAvbm9kZV9tb2R1bGVzL3NjbXAvbGliL3NjbXBDb21wYXJlLmpzIiwibWFwcGluZ3MiOiJBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixTQUFTO0FBQzNCO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyIvVXNlcnMvZXJpbmplcnJpL25vZGVfbW9kdWxlcy8ucG5wbS9zY21wQDIuMS4wL25vZGVfbW9kdWxlcy9zY21wL2xpYi9zY21wQ29tcGFyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzY21wQ29tcGFyZSAoYSwgYikge1xuICBjb25zdCBsZW4gPSBhLmxlbmd0aFxuICBsZXQgcmVzdWx0ID0gMFxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgcmVzdWx0IHw9IGFbaV0gXiBiW2ldXG4gIH1cbiAgcmV0dXJuIHJlc3VsdCA9PT0gMFxufVxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/../../../../node_modules/.pnpm/scmp@2.1.0/node_modules/scmp/lib/scmpCompare.js\n");

/***/ })

};
;
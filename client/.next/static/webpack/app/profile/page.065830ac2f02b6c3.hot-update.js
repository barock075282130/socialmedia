"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/profile/page",{

/***/ "(app-pages-browser)/./components/profile/UploadBackground.jsx":
/*!*************************************************!*\
  !*** ./components/profile/UploadBackground.jsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst UploadBackground = (param)=>{\n    let { imgOpen, setImgOpen } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            !imgOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"cursor-pointer\",\n                children: \"Update background photo\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\profile\\\\UploadBackground.jsx\",\n                lineNumber: 6,\n                columnNumber: 20\n            }, undefined),\n            imgOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setImgOpen(false),\n                        className: \"fixed z-30 left-0\",\n                        children: \"Close\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\profile\\\\UploadBackground.jsx\",\n                        lineNumber: 9,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-black fixed top-0 left-0 w-screen h-screen z-20\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\profile\\\\UploadBackground.jsx\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true);\n};\n_c = UploadBackground;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UploadBackground);\nvar _c;\n$RefreshReg$(_c, \"UploadBackground\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvcHJvZmlsZS9VcGxvYWRCYWNrZ3JvdW5kLmpzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUErQjtBQUUvQixNQUFNQyxtQkFBbUI7UUFBQyxFQUFFQyxPQUFPLEVBQUVDLFVBQVUsRUFBRTtJQUMvQyxxQkFDRTs7WUFDRyxDQUFDRCx5QkFBVyw4REFBQ0U7Z0JBQUVDLFdBQVU7MEJBQWlCOzs7Ozs7WUFDMUNILHlCQUNDOztrQ0FDQSw4REFBQ0k7d0JBQU9DLFNBQVMsSUFBSUosV0FBVzt3QkFBUUUsV0FBVTtrQ0FBb0I7Ozs7OztrQ0FHdEUsOERBQUNHO3dCQUFJSCxXQUFVOzs7Ozs7Ozs7O0FBTXZCO0tBZk1KO0FBaUJOLCtEQUFlQSxnQkFBZ0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlL1VwbG9hZEJhY2tncm91bmQuanN4PzkzZDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcblxyXG5jb25zdCBVcGxvYWRCYWNrZ3JvdW5kID0gKHsgaW1nT3Blbiwgc2V0SW1nT3BlbiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHshaW1nT3BlbiAmJiA8cCBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiPlVwZGF0ZSBiYWNrZ3JvdW5kIHBob3RvPC9wPn1cclxuICAgICAge2ltZ09wZW4gJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+c2V0SW1nT3BlbihmYWxzZSl9IGNsYXNzTmFtZT1cImZpeGVkIHotMzAgbGVmdC0wXCI+XHJcbiAgICAgICAgICBDbG9zZVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmxhY2sgZml4ZWQgdG9wLTAgbGVmdC0wIHctc2NyZWVuIGgtc2NyZWVuIHotMjBcIj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVcGxvYWRCYWNrZ3JvdW5kO1xyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJVcGxvYWRCYWNrZ3JvdW5kIiwiaW1nT3BlbiIsInNldEltZ09wZW4iLCJwIiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/profile/UploadBackground.jsx\n"));

/***/ })

});
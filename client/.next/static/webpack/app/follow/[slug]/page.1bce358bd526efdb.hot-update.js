"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/follow/[slug]/page",{

/***/ "(app-pages-browser)/./components/Follow.jsx":
/*!*******************************!*\
  !*** ./components/Follow.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Follow = (param)=>{\n    let { data } = param;\n    _s();\n    const img = \"/profile.png\";\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const loopData = ()=>{\n        return data.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-2 my-2 mx-4 cursor-pointer\",\n                onClick: ()=>router.push(\"/profile/\".concat(item.username)),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: item.profileimg ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: item.profileimg,\n                            alt: \"profile_\".concat(item.username),\n                            width: 100,\n                            height: 100\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Follow.jsx\",\n                            lineNumber: 15,\n                            columnNumber: 11\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: img,\n                            alt: \"profile_\".concat(img),\n                            width: 100,\n                            height: 100\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Follow.jsx\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Follow.jsx\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \" font-bold text-lg\",\n                                children: item.username\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Follow.jsx\",\n                                lineNumber: 26,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-400\",\n                                children: item.email\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Follow.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Follow.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, item.username, true, {\n                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Follow.jsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"flex justify-center text-2xl font-semibold mt-5\",\n                children: \"Following\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Follow.jsx\",\n                lineNumber: 33,\n                columnNumber: 5\n            }, undefined),\n            loopData()\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Follow.jsx\",\n        lineNumber: 32,\n        columnNumber: 10\n    }, undefined);\n};\n_s(Follow, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Follow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Follow);\nvar _c;\n$RefreshReg$(_c, \"Follow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRm9sbG93LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRStCO0FBQ2E7QUFDbEI7QUFFMUIsTUFBTUcsU0FBUztRQUFDLEVBQUVDLElBQUksRUFBRTs7SUFDdEIsTUFBTUMsTUFBTTtJQUNaLE1BQU1DLFNBQVNMLDBEQUFTQTtJQUN4QixNQUFNTSxXQUFXO1FBQ2YsT0FBT0gsS0FBS0ksR0FBRyxDQUFDLENBQUNDLHFCQUNmLDhEQUFDQztnQkFBd0JDLFdBQVU7Z0JBQXNDQyxTQUFTLElBQUlOLE9BQU9PLElBQUksQ0FBQyxZQUEwQixPQUFkSixLQUFLSyxRQUFROztrQ0FDekgsOERBQUNKO2tDQUNBRCxLQUFLTSxVQUFVLGlCQUNkLDhEQUFDZixtREFBS0E7NEJBQ0pnQixLQUFLUCxLQUFLTSxVQUFVOzRCQUNwQkUsS0FBSyxXQUF5QixPQUFkUixLQUFLSyxRQUFROzRCQUM3QkksT0FBTzs0QkFDUEMsUUFBUTs7Ozs7c0RBR1YsOERBQUNuQixtREFBS0E7NEJBQUNnQixLQUFLWDs0QkFBS1ksS0FBSyxXQUFlLE9BQUpaOzRCQUFPYSxPQUFPOzRCQUFLQyxRQUFROzs7Ozs7Ozs7OztrQ0FHOUQsOERBQUNUO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ1M7Z0NBQUVULFdBQVU7MENBQXNCRixLQUFLSyxRQUFROzs7Ozs7MENBQ2hELDhEQUFDTTtnQ0FBRVQsV0FBVTswQ0FBaUJGLEtBQUtZLEtBQUs7Ozs7Ozs7Ozs7Ozs7ZUFmbENaLEtBQUtLLFFBQVE7Ozs7O0lBbUIzQjtJQUNBLHFCQUFPLDhEQUFDSjs7MEJBQ04sOERBQUNZO2dCQUFHWCxXQUFVOzBCQUFrRDs7Ozs7O1lBQy9ESjs7Ozs7OztBQUVMO0dBN0JNSjs7UUFFV0Ysc0RBQVNBOzs7S0FGcEJFO0FBK0JOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRm9sbG93LmpzeD8wMTY3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEZvbGxvdyA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gIGNvbnN0IGltZyA9IFwiL3Byb2ZpbGUucG5nXCI7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBsb29wRGF0YSA9ICgpID0+IHtcclxuICAgIHJldHVybiBkYXRhLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICA8ZGl2IGtleT17aXRlbS51c2VybmFtZX0gY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBteS0yIG14LTQgY3Vyc29yLXBvaW50ZXJcIiBvbkNsaWNrPXsoKT0+cm91dGVyLnB1c2goYC9wcm9maWxlLyR7aXRlbS51c2VybmFtZX1gKX0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICB7aXRlbS5wcm9maWxlaW1nID8gKFxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz17aXRlbS5wcm9maWxlaW1nfVxyXG4gICAgICAgICAgICBhbHQ9e2Bwcm9maWxlXyR7aXRlbS51c2VybmFtZX1gfVxyXG4gICAgICAgICAgICB3aWR0aD17MTAwfVxyXG4gICAgICAgICAgICBoZWlnaHQ9ezEwMH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxJbWFnZSBzcmM9e2ltZ30gYWx0PXtgcHJvZmlsZV8ke2ltZ31gfSB3aWR0aD17MTAwfSBoZWlnaHQ9ezEwMH0gLz5cclxuICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiIGZvbnQtYm9sZCB0ZXh0LWxnXCI+e2l0ZW0udXNlcm5hbWV9PC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMFwiPntpdGVtLmVtYWlsfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApKTtcclxuICB9O1xyXG4gIHJldHVybiA8ZGl2PlxyXG4gICAgPGgxIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgdGV4dC0yeGwgZm9udC1zZW1pYm9sZCBtdC01XCI+Rm9sbG93aW5nPC9oMT5cclxuICAgIHtsb29wRGF0YSgpfVxyXG4gIDwvZGl2PjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvbGxvdztcclxuIl0sIm5hbWVzIjpbIkltYWdlIiwidXNlUm91dGVyIiwiUmVhY3QiLCJGb2xsb3ciLCJkYXRhIiwiaW1nIiwicm91dGVyIiwibG9vcERhdGEiLCJtYXAiLCJpdGVtIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsInB1c2giLCJ1c2VybmFtZSIsInByb2ZpbGVpbWciLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInAiLCJlbWFpbCIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Follow.jsx\n"));

/***/ })

});
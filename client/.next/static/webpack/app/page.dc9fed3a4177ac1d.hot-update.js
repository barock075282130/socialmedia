"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/UserList.jsx":
/*!*********************************!*\
  !*** ./components/UserList.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\nconst UserList = (param)=>{\n    let { searchResult, user, gotoUser } = param;\n    console.log(searchResult);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: searchResult && searchResult.map((data, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between p-2 border my-1 rounded-lg hover:bg-gray-100 cursor-pointer duration-300\",\n                    onClick: ()=>gotoUser(data.username),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center\",\n                            children: [\n                                (data === null || data === void 0 ? void 0 : data.profileImg) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Image, {\n                                    src: data === null || data === void 0 ? void 0 : data.profileimg,\n                                    alt: \"profile_\".concat(data === null || data === void 0 ? void 0 : data.username),\n                                    width: 0,\n                                    height: 0,\n                                    sizes: \"50%\",\n                                    style: {\n                                        cursor: \"pointer\",\n                                        width: \"40px\",\n                                        height: \"40px\",\n                                        objectFit: \"cover\",\n                                        borderRadius: \"100%\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\UserList.jsx\",\n                                    lineNumber: 15,\n                                    columnNumber: 19\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-16 h-16 bg-white border rounded-full\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\UserList.jsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col px-3\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"font-semibold\",\n                                            children: data.username\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\UserList.jsx\",\n                                            lineNumber: 33,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-sm text-gray-400\",\n                                            children: data.email\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\UserList.jsx\",\n                                            lineNumber: 34,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\UserList.jsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 19\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\UserList.jsx\",\n                            lineNumber: 13,\n                            columnNumber: 17\n                        }, undefined),\n                        (user === null || user === void 0 ? void 0 : user.userId) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center justify-center cursor-pointer\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                height: \"1em\",\n                                viewBox: \"0 0 640 512\",\n                                className: \"w-7 h-7 fill-blue-600 hover:fill-blue-300 duration-300 mx-2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    d: \"M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\UserList.jsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 23\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\UserList.jsx\",\n                                lineNumber: 39,\n                                columnNumber: 21\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\UserList.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 19\n                        }, undefined)\n                    ]\n                }, i, true, {\n                    fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\UserList.jsx\",\n                    lineNumber: 8,\n                    columnNumber: 15\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\UserList.jsx\",\n            lineNumber: 5,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_c = UserList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserList);\nvar _c;\n$RefreshReg$(_c, \"UserList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvVXNlckxpc3QuanN4IiwibWFwcGluZ3MiOiI7OztBQUFBLE1BQU1BLFdBQVc7UUFBQyxFQUFFQyxZQUFZLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFFO0lBQ2hEQyxRQUFRQyxHQUFHLENBQUNKO0lBQ1oscUJBQ0U7a0JBQ0UsNEVBQUNLO3NCQUNFTCxnQkFDSUEsYUFBYU0sR0FBRyxDQUFDLENBQUNDLE1BQU1DLGtCQUN2Qiw4REFBQ0g7b0JBQ0NJLFdBQVU7b0JBRVZDLFNBQVMsSUFBTVIsU0FBU0ssS0FBS0ksUUFBUTs7c0NBRXJDLDhEQUFDTjs0QkFBSUksV0FBVTs7Z0NBQ2RGLENBQUFBLGlCQUFBQSwyQkFBQUEsS0FBTUssVUFBVSxrQkFDZiw4REFBQ0M7b0NBQ0dDLEdBQUcsRUFBRVAsaUJBQUFBLDJCQUFBQSxLQUFNUSxVQUFVO29DQUNyQkMsS0FBSyxXQUEwQixPQUFmVCxpQkFBQUEsMkJBQUFBLEtBQU1JLFFBQVE7b0NBQzlCTSxPQUFPO29DQUNQQyxRQUFRO29DQUNSQyxPQUFNO29DQUNOQyxPQUFPO3dDQUNMQyxRQUFRO3dDQUNSSixPQUFPO3dDQUNQQyxRQUFRO3dDQUNSSSxXQUFXO3dDQUNYQyxjQUFjO29DQUNoQjs7Ozs7OERBR0YsOERBQUNsQjtvQ0FBSUksV0FBVTs7Ozs7OzhDQUVqQiw4REFBQ0o7b0NBQUlJLFdBQVU7O3NEQUNiLDhEQUFDZTs0Q0FBS2YsV0FBVTtzREFBaUJGLEtBQUtJLFFBQVE7Ozs7OztzREFDOUMsOERBQUNhOzRDQUFLZixXQUFVO3NEQUF5QkYsS0FBS2tCLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFHdER4QixDQUFBQSxpQkFBQUEsMkJBQUFBLEtBQU15QixNQUFNLG1CQUNYLDhEQUFDckI7NEJBQUlJLFdBQVU7c0NBQ2IsNEVBQUNrQjtnQ0FDQ0MsT0FBTTtnQ0FDTlYsUUFBTztnQ0FDUFcsU0FBUTtnQ0FDUnBCLFdBQVU7MENBRVYsNEVBQUNxQjtvQ0FBS0MsR0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBbkNUdkI7Ozs7Ozs7Ozs7O0FBNkNyQjtLQXRETVQ7QUF3RE4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyTGlzdC5qc3g/ZGE4MiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBVc2VyTGlzdCA9ICh7IHNlYXJjaFJlc3VsdCwgdXNlciwgZ290b1VzZXIgfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHNlYXJjaFJlc3VsdClcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7c2VhcmNoUmVzdWx0XHJcbiAgICAgICAgICAmJiBzZWFyY2hSZXN1bHQubWFwKChkYXRhLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gcC0yIGJvcmRlciBteS0xIHJvdW5kZWQtbGcgaG92ZXI6YmctZ3JheS0xMDAgY3Vyc29yLXBvaW50ZXIgZHVyYXRpb24tMzAwXCJcclxuICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGdvdG9Vc2VyKGRhdGEudXNlcm5hbWUpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIHtkYXRhPy5wcm9maWxlSW1nID8gKFxyXG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZGF0YT8ucHJvZmlsZWltZ31cclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD17YHByb2ZpbGVfJHtkYXRhPy51c2VybmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzaXplcz1cIjUwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApOihcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTYgaC0xNiBiZy13aGl0ZSBib3JkZXIgcm91bmRlZC1mdWxsXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBweC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPntkYXRhLnVzZXJuYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS00MDBcIj57ZGF0YS5lbWFpbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7dXNlcj8udXNlcklkICYmIChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNjQwIDUxMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTcgaC03IGZpbGwtYmx1ZS02MDAgaG92ZXI6ZmlsbC1ibHVlLTMwMCBkdXJhdGlvbi0zMDAgbXgtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk05NiAxMjhhMTI4IDEyOCAwIDEgMSAyNTYgMEExMjggMTI4IDAgMSAxIDk2IDEyOHpNMCA0ODIuM0MwIDM4My44IDc5LjggMzA0IDE3OC4zIDMwNGg5MS40QzM2OC4yIDMwNCA0NDggMzgzLjggNDQ4IDQ4Mi4zYzAgMTYuNC0xMy4zIDI5LjctMjkuNyAyOS43SDI5LjdDMTMuMyA1MTIgMCA0OTguNyAwIDQ4Mi4zek01MDQgMzEyVjI0OEg0NDBjLTEzLjMgMC0yNC0xMC43LTI0LTI0czEwLjctMjQgMjQtMjRoNjRWMTM2YzAtMTMuMyAxMC43LTI0IDI0LTI0czI0IDEwLjcgMjQgMjR2NjRoNjRjMTMuMyAwIDI0IDEwLjcgMjQgMjRzLTEwLjcgMjQtMjQgMjRINTUydjY0YzAgMTMuMy0xMC43IDI0LTI0IDI0cy0yNC0xMC43LTI0LTI0elwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICAgIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlckxpc3Q7XHJcbiJdLCJuYW1lcyI6WyJVc2VyTGlzdCIsInNlYXJjaFJlc3VsdCIsInVzZXIiLCJnb3RvVXNlciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJtYXAiLCJkYXRhIiwiaSIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJ1c2VybmFtZSIsInByb2ZpbGVJbWciLCJJbWFnZSIsInNyYyIsInByb2ZpbGVpbWciLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInNpemVzIiwic3R5bGUiLCJjdXJzb3IiLCJvYmplY3RGaXQiLCJib3JkZXJSYWRpdXMiLCJzcGFuIiwiZW1haWwiLCJ1c2VySWQiLCJzdmciLCJ4bWxucyIsInZpZXdCb3giLCJwYXRoIiwiZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/UserList.jsx\n"));

/***/ })

});
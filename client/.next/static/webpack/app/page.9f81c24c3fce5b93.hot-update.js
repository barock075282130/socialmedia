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

/***/ "(app-pages-browser)/./components/Profile.jsx":
/*!********************************!*\
  !*** ./components/Profile.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_userContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context/userContext */ \"(app-pages-browser)/./components/context/userContext.jsx\");\n/* harmony import */ var _EditProfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EditProfile */ \"(app-pages-browser)/./components/EditProfile.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Profile = ()=>{\n    var _user_email;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const pathName = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname)();\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const profile = (username)=>router.push(\"/profile?name=\".concat(username));\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams)();\n    const name = params.get(\"name\");\n    const { user, Logout } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_userContext__WEBPACK_IMPORTED_MODULE_3__.userData);\n    const address = user === null || user === void 0 ? void 0 : (_user_email = user.email) === null || _user_email === void 0 ? void 0 : _user_email.split(\"@\")[1];\n    const signIn = ()=>router.push(\"/auth/signin\");\n    console.log(params !== user.username);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: user.userId ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-screen sticky top-0 w-full flex flex-col justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            pathName === \"/profile\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-gray-300/40 hover:bg-gray-300 duration-300 rounded-full w-8 h-8 m-2 absolute\",\n                                onClick: ()=>router.push(\"/\"),\n                                children: \"<-\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Profile.jsx\",\n                                lineNumber: 26,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full h-32 top-0 bg-red-400\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Profile.jsx\",\n                                lineNumber: 33,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-40 h-40 bg-white rounded-full absolute top-10 left-5 border\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Profile.jsx\",\n                                lineNumber: 34,\n                                columnNumber: 15\n                            }, undefined),\n                            name === (user === null || user === void 0 ? void 0 : user.username) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_EditProfile__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                setOpen: setOpen,\n                                open: open\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Profile.jsx\",\n                                lineNumber: 36,\n                                columnNumber: 19\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-20 px-10\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"relative flex gap-2\",\n                                        children: pathName !== \"/profile\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            className: \"font-bold text-xl cursor-pointer\",\n                                            onClick: ()=>profile(user.username),\n                                            children: user.username || \"\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Profile.jsx\",\n                                            lineNumber: 44,\n                                            columnNumber: 21\n                                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            className: \"font-bold text-xl\",\n                                            children: user.username\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Profile.jsx\",\n                                            lineNumber: 51,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Profile.jsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"@\",\n                                            address\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Profile.jsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Profile.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Profile.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 13\n                    }, undefined),\n                    (user === null || user === void 0 ? void 0 : user.username) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center my-6\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: Logout,\n                            className: \"w-full mx-5 flex justify-center py-3 bg-red-600 rounded-lg duration-300 hover:bg-red-100 hover:text-red-600  text-white gap-1\",\n                            children: [\n                                \"Logout via \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"font-semibold\",\n                                    children: [\n                                        \"@\",\n                                        address\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Profile.jsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 30\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Profile.jsx\",\n                            lineNumber: 59,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Profile.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 15\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Profile.jsx\",\n                lineNumber: 23,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-center items-center h-full\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"py-3 px-6 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-100 hover:text-blue-600 duration-300\",\n                onClick: ()=>signIn(),\n                children: \"Signin\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Profile.jsx\",\n                lineNumber: 71,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Profile.jsx\",\n            lineNumber: 70,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_s(Profile, \"ZeIXNumAstLavEtaiHkqUyC3GaU=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname,\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams\n    ];\n});\n_c = Profile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile);\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUHJvZmlsZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUUwRTtBQUM3QjtBQUNJO0FBQ1Q7QUFFeEMsTUFBTU8sVUFBVTtRQVFFQzs7SUFQaEIsTUFBTUMsU0FBU1IsMERBQVNBO0lBQ3hCLE1BQU1TLFdBQVdWLDREQUFXQTtJQUM1QixNQUFNLENBQUVXLE1BQU1DLFFBQVMsR0FBR1IsK0NBQVFBLENBQUM7SUFDbkMsTUFBTVMsVUFBVSxDQUFDQyxXQUFhTCxPQUFPTSxJQUFJLENBQUMsaUJBQTBCLE9BQVREO0lBQzNELE1BQU1FLFNBQVNkLGdFQUFlQTtJQUM5QixNQUFNZSxPQUFPRCxPQUFPRSxHQUFHLENBQUM7SUFDeEIsTUFBTSxFQUFFVixJQUFJLEVBQUVXLE1BQU0sRUFBRSxHQUFHaEIsaURBQVVBLENBQUNFLDBEQUFRQTtJQUM1QyxNQUFNZSxVQUFVWixpQkFBQUEsNEJBQUFBLGNBQUFBLEtBQU1hLEtBQUssY0FBWGIsa0NBQUFBLFlBQWFjLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtJQUMxQyxNQUFNQyxTQUFTLElBQU1kLE9BQU9NLElBQUksQ0FBQztJQUNqQ1MsUUFBUUMsR0FBRyxDQUFDVCxXQUFXUixLQUFLTSxRQUFRO0lBQ3BDLHFCQUNFO2tCQUNHTixLQUFLa0IsTUFBTSxpQkFDVjtzQkFDRSw0RUFBQ0M7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDs7NEJBQ0VqQixhQUFhLDRCQUNaLDhEQUFDbUI7Z0NBQ0NELFdBQVU7Z0NBQ1ZFLFNBQVMsSUFBS3JCLE9BQU9NLElBQUksQ0FBQzswQ0FFekI7Ozs7OzswQ0FHTCw4REFBQ1k7Z0NBQUlDLFdBQVU7Ozs7OzswQ0FDZiw4REFBQ0Q7Z0NBQUlDLFdBQVU7Ozs7Ozs0QkFDWlgsVUFBU1QsaUJBQUFBLDJCQUFBQSxLQUFNTSxRQUFRLG1CQUN0Qiw4REFBQ1Isb0RBQVdBO2dDQUNWTSxTQUFTQTtnQ0FDVEQsTUFBTUE7Ozs7OzswQ0FHWiw4REFBQ2dCO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ0Q7d0NBQUlDLFdBQVU7a0RBQ1psQixhQUFhLDJCQUNaLDhEQUFDcUI7NENBQ0NILFdBQVU7NENBQ1ZFLFNBQVMsSUFBTWpCLFFBQVFMLEtBQUtNLFFBQVE7c0RBRW5DTixLQUFLTSxRQUFRLElBQUk7Ozs7O3NFQUdwQiw4REFBQ2lCOzRDQUFHSCxXQUFVO3NEQUFxQnBCLEtBQUtNLFFBQVE7Ozs7Ozs7Ozs7O2tEQUdwRCw4REFBQ2tCOzs0Q0FBRTs0Q0FBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBR1JaLENBQUFBLGlCQUFBQSwyQkFBQUEsS0FBTU0sUUFBUSxtQkFDYiw4REFBQ2E7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNDOzRCQUNDQyxTQUFTWDs0QkFDVFMsV0FBVTs7Z0NBQ1g7OENBQ1ksOERBQUNJO29DQUFFSixXQUFVOzt3Q0FBZ0I7d0NBQUVSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBT3BELDhEQUFDTztZQUFJQyxXQUFVO3NCQUNiLDRFQUFDQztnQkFDQ0QsV0FBVTtnQkFDVkUsU0FBUyxJQUFNUDswQkFDaEI7Ozs7Ozs7Ozs7OztBQU9YO0dBekVNaEI7O1FBQ1dOLHNEQUFTQTtRQUNQRCx3REFBV0E7UUFHYkUsNERBQWVBOzs7S0FMMUJLO0FBMkVOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvZmlsZS5qc3g/YWE3NCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IHVzZVBhdGhuYW1lLCB1c2VSb3V0ZXIsIHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlckRhdGEgfSBmcm9tIFwiLi9jb250ZXh0L3VzZXJDb250ZXh0XCI7XHJcbmltcG9ydCBFZGl0UHJvZmlsZSBmcm9tIFwiLi9FZGl0UHJvZmlsZVwiO1xyXG5cclxuY29uc3QgUHJvZmlsZSA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBwYXRoTmFtZSA9IHVzZVBhdGhuYW1lKCk7XHJcbiAgY29uc3QgWyBvcGVuLCBzZXRPcGVuIF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBwcm9maWxlID0gKHVzZXJuYW1lKSA9PiByb3V0ZXIucHVzaChgL3Byb2ZpbGU/bmFtZT0ke3VzZXJuYW1lfWApO1xyXG4gIGNvbnN0IHBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpXHJcbiAgY29uc3QgbmFtZSA9IHBhcmFtcy5nZXQoJ25hbWUnKVxyXG4gIGNvbnN0IHsgdXNlciwgTG9nb3V0IH0gPSB1c2VDb250ZXh0KHVzZXJEYXRhKTtcclxuICBjb25zdCBhZGRyZXNzID0gdXNlcj8uZW1haWw/LnNwbGl0KFwiQFwiKVsxXTtcclxuICBjb25zdCBzaWduSW4gPSAoKSA9PiByb3V0ZXIucHVzaChcIi9hdXRoL3NpZ25pblwiKTtcclxuICBjb25zb2xlLmxvZyhwYXJhbXMgIT09IHVzZXIudXNlcm5hbWUpXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHt1c2VyLnVzZXJJZCA/IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiBzdGlja3kgdG9wLTAgdy1mdWxsIGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAge3BhdGhOYW1lID09PSBcIi9wcm9maWxlXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS0zMDAvNDAgaG92ZXI6YmctZ3JheS0zMDAgZHVyYXRpb24tMzAwIHJvdW5kZWQtZnVsbCB3LTggaC04IG0tMiBhYnNvbHV0ZVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT4gcm91dGVyLnB1c2goJy8nKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgeyc8LSd9XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtMzIgdG9wLTAgYmctcmVkLTQwMFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy00MCBoLTQwIGJnLXdoaXRlIHJvdW5kZWQtZnVsbCBhYnNvbHV0ZSB0b3AtMTAgbGVmdC01IGJvcmRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAge25hbWUgPT09IHVzZXI/LnVzZXJuYW1lICYmIChcclxuICAgICAgICAgICAgICAgICAgPEVkaXRQcm9maWxlIFxyXG4gICAgICAgICAgICAgICAgICAgIHNldE9wZW49e3NldE9wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yMCBweC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtwYXRoTmFtZSAhPT0gXCIvcHJvZmlsZVwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxoMVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQteGwgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvZmlsZSh1c2VyLnVzZXJuYW1lKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dXNlci51c2VybmFtZSB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC14bFwiPnt1c2VyLnVzZXJuYW1lfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwPkB7YWRkcmVzc308L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7dXNlcj8udXNlcm5hbWUgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBteS02XCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e0xvZ291dH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIG14LTUgZmxleCBqdXN0aWZ5LWNlbnRlciBweS0zIGJnLXJlZC02MDAgcm91bmRlZC1sZyBkdXJhdGlvbi0zMDAgaG92ZXI6YmctcmVkLTEwMCBob3Zlcjp0ZXh0LXJlZC02MDAgIHRleHQtd2hpdGUgZ2FwLTFcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBMb2dvdXQgdmlhIDxwIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj5Ae2FkZHJlc3N9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtZnVsbFwiPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJweS0zIHB4LTYgYmctYmx1ZS02MDAgcm91bmRlZC1sZyB0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgaG92ZXI6YmctYmx1ZS0xMDAgaG92ZXI6dGV4dC1ibHVlLTYwMCBkdXJhdGlvbi0zMDBcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzaWduSW4oKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgU2lnbmluXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xyXG4iXSwibmFtZXMiOlsidXNlUGF0aG5hbWUiLCJ1c2VSb3V0ZXIiLCJ1c2VTZWFyY2hQYXJhbXMiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VyRGF0YSIsIkVkaXRQcm9maWxlIiwiUHJvZmlsZSIsInVzZXIiLCJyb3V0ZXIiLCJwYXRoTmFtZSIsIm9wZW4iLCJzZXRPcGVuIiwicHJvZmlsZSIsInVzZXJuYW1lIiwicHVzaCIsInBhcmFtcyIsIm5hbWUiLCJnZXQiLCJMb2dvdXQiLCJhZGRyZXNzIiwiZW1haWwiLCJzcGxpdCIsInNpZ25JbiIsImNvbnNvbGUiLCJsb2ciLCJ1c2VySWQiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwiaDEiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Profile.jsx\n"));

/***/ })

});
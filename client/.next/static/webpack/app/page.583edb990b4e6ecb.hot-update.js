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

/***/ "(app-pages-browser)/./components/Sidebar.jsx":
/*!********************************!*\
  !*** ./components/Sidebar.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_userContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context/userContext */ \"(app-pages-browser)/./components/context/userContext.jsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\nconst CheckUserLogin = (param)=>{\n    let { user, address, func } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const signIn = ()=>router.push(\"/auth/signin\");\n    if (!(user === null || user === void 0 ? void 0 : user.userId)) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-center items-center h-full\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"py-3 px-6 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-100 hover:text-blue-600 duration-300\",\n                onClick: ()=>signIn(),\n                children: \"Signin\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Sidebar.jsx\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Sidebar.jsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n        className: \"fixed h-screen w-full\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"grid h-full w-56  content-between gap-3 \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-xl\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/profile/\".concat(user === null || user === void 0 ? void 0 : user.username),\n                                className: \"flex items-center gap-3\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                        xmlns: \"http://www.w3.org/2000/svg\",\n                                        height: \"20\",\n                                        width: \"24\",\n                                        viewBox: \"0 0 640 512\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            d: \"M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Sidebar.jsx\",\n                                            lineNumber: 38,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Sidebar.jsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Profile\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Sidebar.jsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Sidebar.jsx\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Sidebar.jsx\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/follow/\".concat(user === null || user === void 0 ? void 0 : user.userId),\n                                className: \"flex gap-3 items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                        xmlns: \"http://www.w3.org/2000/svg\",\n                                        height: \"20\",\n                                        width: \"24\",\n                                        viewBox: \"0 0 640 512\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            d: \"M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Sidebar.jsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Sidebar.jsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Follow\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Sidebar.jsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Sidebar.jsx\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Sidebar.jsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Sidebar.jsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-green-300\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: func,\n                        className: \"flex justify-center py-3 w-full bg-red-600 duration-300 hover:bg-red-100 hover:text-red-600  text-white gap-1\",\n                        children: [\n                            \"Logout via \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-semibold\",\n                                children: [\n                                    \"@\",\n                                    address\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Sidebar.jsx\",\n                                lineNumber: 65,\n                                columnNumber: 24\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Sidebar.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Sidebar.jsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Sidebar.jsx\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Sidebar.jsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CheckUserLogin, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = CheckUserLogin;\nconst Sidebar = ()=>{\n    var _user_email;\n    _s1();\n    const { user, Logout } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_userContext__WEBPACK_IMPORTED_MODULE_3__.userData);\n    const address = user === null || user === void 0 ? void 0 : (_user_email = user.email) === null || _user_email === void 0 ? void 0 : _user_email.split(\"@\")[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CheckUserLogin, {\n        user: user,\n        address: address,\n        func: Logout\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Sidebar.jsx\",\n        lineNumber: 76,\n        columnNumber: 10\n    }, undefined);\n};\n_s1(Sidebar, \"d4QLbnI3ngk98MCk/QdFOZyhmR0=\");\n_c1 = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c, _c1;\n$RefreshReg$(_c, \"CheckUserLogin\");\n$RefreshReg$(_c1, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU2lkZWJhci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFNkI7QUFDTTtBQUNjO0FBQ0w7QUFFNUMsTUFBTUksaUJBQWlCO1FBQUMsRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLElBQUksRUFBRTs7SUFDN0MsTUFBTUMsU0FBU0wsMERBQVNBO0lBQ3hCLE1BQU1NLFNBQVMsSUFBTUQsT0FBT0UsSUFBSSxDQUFDO0lBQ2pDLElBQUksRUFBQ0wsaUJBQUFBLDJCQUFBQSxLQUFNTSxNQUFNLEdBQUU7UUFDakIscUJBQ0UsOERBQUNDO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNDO2dCQUNDRCxXQUFVO2dCQUNWRSxTQUFTLElBQU1OOzBCQUNoQjs7Ozs7Ozs7Ozs7SUFLUDtJQUNBLHFCQUNFLDhEQUFDTztRQUFNSCxXQUFVO2tCQUNmLDRFQUFDSTtZQUFHSixXQUFVOzs4QkFDWiw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDSztzQ0FDQyw0RUFBQ2xCLGtEQUFJQTtnQ0FDSG1CLE1BQU0sWUFBMkIsT0FBZmQsaUJBQUFBLDJCQUFBQSxLQUFNZSxRQUFRO2dDQUNoQ1AsV0FBVTs7a0RBRVYsOERBQUNRO3dDQUNDQyxPQUFNO3dDQUNOQyxRQUFPO3dDQUNQQyxPQUFNO3dDQUNOQyxTQUFRO2tEQUVSLDRFQUFDQzs0Q0FBS0MsR0FBRTs7Ozs7Ozs7Ozs7a0RBRVYsOERBQUNDO2tEQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHUCw4REFBQ1Y7c0NBQ0MsNEVBQUNsQixrREFBSUE7Z0NBQ0htQixNQUFNLFdBQXdCLE9BQWJkLGlCQUFBQSwyQkFBQUEsS0FBTU0sTUFBTTtnQ0FDN0JFLFdBQVU7O2tEQUVWLDhEQUFDUTt3Q0FDQ0MsT0FBTTt3Q0FDTkMsUUFBTzt3Q0FDUEMsT0FBTTt3Q0FDTkMsU0FBUTtrREFFUiw0RUFBQ0M7NENBQUtDLEdBQUU7Ozs7Ozs7Ozs7O2tEQUVWLDhEQUFDQztrREFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBSVQsOERBQUNoQjtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0M7d0JBQ0NDLFNBQVNSO3dCQUNUTSxXQUFVOzs0QkFDWDswQ0FDWSw4REFBQ2U7Z0NBQUVmLFdBQVU7O29DQUFnQjtvQ0FBRVA7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXREO0dBL0RNRjs7UUFDV0Qsc0RBQVNBOzs7S0FEcEJDO0FBaUVOLE1BQU15QixVQUFVO1FBRUV4Qjs7SUFEaEIsTUFBTSxFQUFFQSxJQUFJLEVBQUV5QixNQUFNLEVBQUUsR0FBRzdCLGlEQUFVQSxDQUFDQywwREFBUUE7SUFDNUMsTUFBTUksVUFBVUQsaUJBQUFBLDRCQUFBQSxjQUFBQSxLQUFNMEIsS0FBSyxjQUFYMUIsa0NBQUFBLFlBQWEyQixLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7SUFDMUMscUJBQU8sOERBQUM1QjtRQUFlQyxNQUFNQTtRQUFNQyxTQUFTQTtRQUFTQyxNQUFNdUI7Ozs7OztBQUM3RDtJQUpNRDtNQUFBQTtBQU1OLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2lkZWJhci5qc3g/NGNiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VyRGF0YSB9IGZyb20gXCIuL2NvbnRleHQvdXNlckNvbnRleHRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5cclxuY29uc3QgQ2hlY2tVc2VyTG9naW4gPSAoeyB1c2VyLCBhZGRyZXNzLCBmdW5jIH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBzaWduSW4gPSAoKSA9PiByb3V0ZXIucHVzaChcIi9hdXRoL3NpZ25pblwiKTtcclxuICBpZiAoIXVzZXI/LnVzZXJJZCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLWZ1bGxcIj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJweS0zIHB4LTYgYmctYmx1ZS02MDAgcm91bmRlZC1sZyB0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgaG92ZXI6YmctYmx1ZS0xMDAgaG92ZXI6dGV4dC1ibHVlLTYwMCBkdXJhdGlvbi0zMDBcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2lnbkluKCl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgU2lnbmluXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxhc2lkZSBjbGFzc05hbWU9XCJmaXhlZCBoLXNjcmVlbiB3LWZ1bGxcIj5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cImdyaWQgaC1mdWxsIHctNTYgIGNvbnRlbnQtYmV0d2VlbiBnYXAtMyBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteGxcIj5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICBocmVmPXtgL3Byb2ZpbGUvJHt1c2VyPy51c2VybmFtZX1gfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIyNFwiXHJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDY0MCA1MTJcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMzA0IDEyOGE4MCA4MCAwIDEgMCAtMTYwIDAgODAgODAgMCAxIDAgMTYwIDB6TTk2IDEyOGExMjggMTI4IDAgMSAxIDI1NiAwQTEyOCAxMjggMCAxIDEgOTYgMTI4ek00OS4zIDQ2NEgzOTguN2MtOC45LTYzLjMtNjMuMy0xMTItMTI5LTExMkgxNzguM2MtNjUuNyAwLTEyMC4xIDQ4LjctMTI5IDExMnpNMCA0ODIuM0MwIDM4My44IDc5LjggMzA0IDE3OC4zIDMwNGg5MS40QzM2OC4yIDMwNCA0NDggMzgzLjggNDQ4IDQ4Mi4zYzAgMTYuNC0xMy4zIDI5LjctMjkuNyAyOS43SDI5LjdDMTMuMyA1MTIgMCA0OTguNyAwIDQ4Mi4zelwiIC8+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgPHA+UHJvZmlsZTwvcD5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICBocmVmPXtgL2ZvbGxvdy8ke3VzZXI/LnVzZXJJZH1gfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZ2FwLTMgaXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIyNFwiXHJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDY0MCA1MTJcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNzIgODhhNTYgNTYgMCAxIDEgMTEyIDBBNTYgNTYgMCAxIDEgNzIgODh6TTY0IDI0NS43QzU0IDI1Ni45IDQ4IDI3MS44IDQ4IDI4OHM2IDMxLjEgMTYgNDIuM1YyNDUuN3ptMTQ0LjQtNDkuM0MxNzguNyAyMjIuNyAxNjAgMjYxLjIgMTYwIDMwNGMwIDM0LjMgMTIgNjUuOCAzMiA5MC41VjQxNmMwIDE3LjctMTQuMyAzMi0zMiAzMkg5NmMtMTcuNyAwLTMyLTE0LjMtMzItMzJWMzg5LjJDMjYuMiAzNzEuMiAwIDMzMi43IDAgMjg4YzAtNjEuOSA1MC4xLTExMiAxMTItMTEyaDMyYzI0IDAgNDYuMiA3LjUgNjQuNCAyMC4zek00NDggNDE2VjM5NC41YzIwLTI0LjcgMzItNTYuMiAzMi05MC41YzAtNDIuOC0xOC43LTgxLjMtNDguNC0xMDcuN0M0NDkuOCAxODMuNSA0NzIgMTc2IDQ5NiAxNzZoMzJjNjEuOSAwIDExMiA1MC4xIDExMiAxMTJjMCA0NC43LTI2LjIgODMuMi02NCAxMDEuMlY0MTZjMCAxNy43LTE0LjMgMzItMzIgMzJINDgwYy0xNy43IDAtMzItMTQuMy0zMi0zMnptOC0zMjhhNTYgNTYgMCAxIDEgMTEyIDBBNTYgNTYgMCAxIDEgNDU2IDg4ek01NzYgMjQ1Ljd2ODQuN2MxMC0xMS4zIDE2LTI2LjEgMTYtNDIuM3MtNi0zMS4xLTE2LTQyLjN6TTMyMCAzMmE2NCA2NCAwIDEgMSAwIDEyOCA2NCA2NCAwIDEgMSAwLTEyOHpNMjQwIDMwNGMwIDE2LjIgNiAzMSAxNiA0Mi4zVjI2MS43Yy0xMCAxMS4zLTE2IDI2LjEtMTYgNDIuM3ptMTQ0LTQyLjN2ODQuN2MxMC0xMS4zIDE2LTI2LjEgMTYtNDIuM3MtNi0zMS4xLTE2LTQyLjN6TTQ0OCAzMDRjMCA0NC43LTI2LjIgODMuMi02NCAxMDEuMlY0NDhjMCAxNy43LTE0LjMgMzItMzIgMzJIMjg4Yy0xNy43IDAtMzItMTQuMy0zMi0zMlY0MDUuMmMtMzcuOC0xOC02NC01Ni41LTY0LTEwMS4yYzAtNjEuOSA1MC4xLTExMiAxMTItMTEyaDMyYzYxLjkgMCAxMTIgNTAuMSAxMTIgMTEyelwiIC8+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgPHA+Rm9sbG93PC9wPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JlZW4tMzAwXCI+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgcHktMyB3LWZ1bGwgYmctcmVkLTYwMCBkdXJhdGlvbi0zMDAgaG92ZXI6YmctcmVkLTEwMCBob3Zlcjp0ZXh0LXJlZC02MDAgIHRleHQtd2hpdGUgZ2FwLTFcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBMb2dvdXQgdmlhIDxwIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj5Ae2FkZHJlc3N9PC9wPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2FzaWRlPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBTaWRlYmFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgdXNlciwgTG9nb3V0IH0gPSB1c2VDb250ZXh0KHVzZXJEYXRhKTtcclxuICBjb25zdCBhZGRyZXNzID0gdXNlcj8uZW1haWw/LnNwbGl0KFwiQFwiKVsxXTtcclxuICByZXR1cm4gPENoZWNrVXNlckxvZ2luIHVzZXI9e3VzZXJ9IGFkZHJlc3M9e2FkZHJlc3N9IGZ1bmM9e0xvZ291dH0gLz47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZUNvbnRleHQiLCJ1c2VyRGF0YSIsInVzZVJvdXRlciIsIkNoZWNrVXNlckxvZ2luIiwidXNlciIsImFkZHJlc3MiLCJmdW5jIiwicm91dGVyIiwic2lnbkluIiwicHVzaCIsInVzZXJJZCIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJhc2lkZSIsInVsIiwibGkiLCJocmVmIiwidXNlcm5hbWUiLCJzdmciLCJ4bWxucyIsImhlaWdodCIsIndpZHRoIiwidmlld0JveCIsInBhdGgiLCJkIiwicCIsIlNpZGViYXIiLCJMb2dvdXQiLCJlbWFpbCIsInNwbGl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Sidebar.jsx\n"));

/***/ })

});
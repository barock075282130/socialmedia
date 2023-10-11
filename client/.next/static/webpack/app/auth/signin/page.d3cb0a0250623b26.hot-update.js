"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/auth/signin/page",{

/***/ "(app-pages-browser)/./components/auth/Signin.jsx":
/*!************************************!*\
  !*** ./components/auth/Signin.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Signin = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [pass, setPass] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [msg, setMsg] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const handleSignin = async (e)=>{\n        e.preventDefault();\n        try {\n            const getToken = await fetch(\"http://localhost:4000/signin\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    email: email,\n                    password: pass\n                })\n            });\n            if (getToken.ok) {\n                const token = await getToken.json();\n                console.log(token);\n                localStorage.setItem(\"x-access-token\", token);\n            } else {\n                const res = await getToken.json();\n                setMsg(res);\n            }\n        } catch (error) {}\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid place-content-center items-center h-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"shadow-lg p-5 rounded-lg\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"grid\",\n                        onSubmit: handleSignin,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"pl-4 font-semibold\",\n                                children: \"E-mail\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\auth\\\\Signin.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: email,\n                                onChange: (e)=>setEmail(e.target.value),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\auth\\\\Signin.jsx\",\n                                lineNumber: 42,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"pl-4 font-semibold\",\n                                children: \"Password\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\auth\\\\Signin.jsx\",\n                                lineNumber: 47,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"password\",\n                                value: pass,\n                                onChange: (e)=>setPass(e.target.value),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\auth\\\\Signin.jsx\",\n                                lineNumber: 48,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                disabled: email.length === 0 || pass.length === 0 ? true : false,\n                                className: \"py-3 bg-green-100 text-green-600 rounded-lg font-semibold hover:bg-green-600 hover:text-green-100 duration-300\",\n                                children: \"Sign In\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\auth\\\\Signin.jsx\",\n                                lineNumber: 53,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\auth\\\\Signin.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"don't have a account \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\auth\\\\Signin.jsx\",\n                                lineNumber: 61,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/auth/signup\",\n                                className: \"underline text-blue-600\",\n                                children: \"signup\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\auth\\\\Signin.jsx\",\n                                lineNumber: 62,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\auth\\\\Signin.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\auth\\\\Signin.jsx\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, undefined),\n            msg && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"py-2 my-3 bg-red-100 text-red-600 shadow-lg rounded-lg text-center font-semibold \",\n                children: [\n                    \"X \",\n                    msg\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\auth\\\\Signin.jsx\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\auth\\\\Signin.jsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Signin, \"GIc9GzscQFhg/E3F1wxwlXUyoKg=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Signin;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Signin);\nvar _c;\n$RefreshReg$(_c, \"Signin\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvYXV0aC9TaWduaW4uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFNkI7QUFDZTtBQUNYO0FBRWpDLE1BQU1HLFNBQVM7O0lBQ1gsTUFBTUMsU0FBU0gsMERBQVNBO0lBQ3hCLE1BQU0sQ0FBRUksT0FBT0MsU0FBVSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUVLLE1BQU1DLFFBQVMsR0FBR04sK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFFTyxLQUFLQyxPQUFRLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU1TLGVBQWUsT0FBTUM7UUFDdkJBLEVBQUVDLGNBQWM7UUFDaEIsSUFBSTtZQUNBLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxnQ0FBK0I7Z0JBQ3hEQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNMLGdCQUFnQjtnQkFDcEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFDakJmLE9BQU9BO29CQUNQZ0IsVUFBVWQ7Z0JBQ2Q7WUFDSjtZQUNBLElBQUdPLFNBQVNRLEVBQUUsRUFBQztnQkFDWCxNQUFNQyxRQUFRLE1BQU1ULFNBQVNVLElBQUk7Z0JBQ2pDQyxRQUFRQyxHQUFHLENBQUNIO2dCQUNaSSxhQUFhQyxPQUFPLENBQUMsa0JBQWlCTDtZQUMxQyxPQUFLO2dCQUNELE1BQU1NLE1BQU0sTUFBTWYsU0FBU1UsSUFBSTtnQkFDL0JkLE9BQU9tQjtZQUNYO1FBQ0osRUFBRSxPQUFPQyxPQUFPLENBRWhCO0lBQ0o7SUFDRixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0M7d0JBQUtELFdBQVU7d0JBQU9FLFVBQVV2Qjs7MENBQzdCLDhEQUFDd0I7Z0NBQUtILFdBQVU7MENBQXFCOzs7Ozs7MENBQ3JDLDhEQUFDSTtnQ0FBTUMsTUFBSztnQ0FDUkMsT0FBT2pDO2dDQUNQa0MsVUFBVSxDQUFDM0IsSUFBS04sU0FBU00sRUFBRTRCLE1BQU0sQ0FBQ0YsS0FBSztnQ0FDdkNHLFFBQVE7Ozs7OzswQ0FFWiw4REFBQ047Z0NBQUtILFdBQVU7MENBQXFCOzs7Ozs7MENBQ3JDLDhEQUFDSTtnQ0FBTUMsTUFBSztnQ0FDUkMsT0FBTy9CO2dDQUNQZ0MsVUFBVSxDQUFDM0IsSUFBS0osUUFBUUksRUFBRTRCLE1BQU0sQ0FBQ0YsS0FBSztnQ0FDdENHLFFBQVE7Ozs7OzswQ0FFWiw4REFBQ0M7Z0NBQ0dDLFVBQVV0QyxNQUFNdUMsTUFBTSxLQUFLLEtBQUtyQyxLQUFLcUMsTUFBTSxLQUFLLElBQUksT0FBTztnQ0FDM0RaLFdBQVU7MENBQ2I7Ozs7Ozs7Ozs7OztrQ0FJTCw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDRzswQ0FBSzs7Ozs7OzBDQUNOLDhEQUFDbkMsa0RBQUlBO2dDQUFDNkMsTUFBSztnQ0FBZWIsV0FBVTswQ0FBMEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdyRXZCLHFCQUNHLDhEQUFDc0I7Z0JBQUlDLFdBQVU7O29CQUFvRjtvQkFBR3ZCOzs7Ozs7Ozs7Ozs7O0FBSWxIO0dBL0RNTjs7UUFDYUYsc0RBQVNBOzs7S0FEdEJFO0FBaUVOLCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYXV0aC9TaWduaW4uanN4P2UwYTkiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBTaWduaW4gPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgWyBlbWFpbCwgc2V0RW1haWwgXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFsgcGFzcywgc2V0UGFzcyBdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgWyBtc2csIHNldE1zZyBdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBoYW5kbGVTaWduaW4gPSBhc3luYyhlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdldFRva2VuID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9zaWduaW4nLHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgaWYoZ2V0VG9rZW4ub2spe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCBnZXRUb2tlbi5qc29uKClcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRva2VuKVxyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ4LWFjY2Vzcy10b2tlblwiLHRva2VuKVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGdldFRva2VuLmpzb24oKVxyXG4gICAgICAgICAgICAgICAgc2V0TXNnKHJlcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIHBsYWNlLWNvbnRlbnQtY2VudGVyIGl0ZW1zLWNlbnRlciBoLWZ1bGxcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy1sZyBwLTUgcm91bmRlZC1sZ1wiPlxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJncmlkXCIgb25TdWJtaXQ9e2hhbmRsZVNpZ25pbn0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwbC00IGZvbnQtc2VtaWJvbGRcIj5FLW1haWw8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9IFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwbC00IGZvbnQtc2VtaWJvbGRcIj5QYXNzd29yZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc30gXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+IHNldFBhc3MoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZW1haWwubGVuZ3RoID09PSAwIHx8IHBhc3MubGVuZ3RoID09PSAwID8gdHJ1ZSA6IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB5LTMgYmctZ3JlZW4tMTAwIHRleHQtZ3JlZW4tNjAwIHJvdW5kZWQtbGcgZm9udC1zZW1pYm9sZCBob3ZlcjpiZy1ncmVlbi02MDAgaG92ZXI6dGV4dC1ncmVlbi0xMDAgZHVyYXRpb24tMzAwXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBTaWduIEluXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTJcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPmRvbid0IGhhdmUgYSBhY2NvdW50IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9hdXRoL3NpZ251cCcgY2xhc3NOYW1lPVwidW5kZXJsaW5lIHRleHQtYmx1ZS02MDBcIj5zaWdudXA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHttc2cmJihcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0yIG15LTMgYmctcmVkLTEwMCB0ZXh0LXJlZC02MDAgc2hhZG93LWxnIHJvdW5kZWQtbGcgdGV4dC1jZW50ZXIgZm9udC1zZW1pYm9sZCBcIj5YIHttc2d9PC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbmluIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsIlNpZ25pbiIsInJvdXRlciIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzIiwic2V0UGFzcyIsIm1zZyIsInNldE1zZyIsImhhbmRsZVNpZ25pbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImdldFRva2VuIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYXNzd29yZCIsIm9rIiwidG9rZW4iLCJqc29uIiwiY29uc29sZSIsImxvZyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJyZXMiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsInNwYW4iLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicmVxdWlyZWQiLCJidXR0b24iLCJkaXNhYmxlZCIsImxlbmd0aCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/auth/Signin.jsx\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/auth/signup/page",{

/***/ "(app-pages-browser)/./components/auth/Singup.jsx":
/*!************************************!*\
  !*** ./components/auth/Singup.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Singup = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [pass, setPass] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [msg, setMsg] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const handleRegis = async (e)=>{\n        e.preventDefault();\n        try {\n            const sendData = await fetch(\"http://localhost:4000/register\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    email: email,\n                    password: pass\n                })\n            });\n            if (sendData.ok) {\n                router.push(\"/auth/signin\");\n            }\n        } catch (error) {\n            console.log(\"err\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center h-full\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"shadow-lg p-5 rounded-lg\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"grid\",\n                    onSubmit: handleRegis,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"pl-4 font-semibold\",\n                            children: \"E-mail\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\auth\\\\Singup.jsx\",\n                            lineNumber: 36,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            value: email,\n                            onChange: (e)=>setEmail(e.target.value),\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\auth\\\\Singup.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"pl-4 font-semibold\",\n                            children: \"Password\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\auth\\\\Singup.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"password\",\n                            value: pass,\n                            onChange: (e)=>setPass(e.target.value),\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\auth\\\\Singup.jsx\",\n                            lineNumber: 43,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"py-3 bg-blue-100 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-blue-100 duration-300\",\n                            children: \"Register\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\auth\\\\Singup.jsx\",\n                            lineNumber: 48,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\auth\\\\Singup.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"already has account \"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\auth\\\\Singup.jsx\",\n                            lineNumber: 55,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/auth/signin\",\n                            className: \"underline text-blue-600\",\n                            children: \"signin\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\auth\\\\Singup.jsx\",\n                            lineNumber: 56,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\auth\\\\Singup.jsx\",\n                    lineNumber: 54,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\auth\\\\Singup.jsx\",\n            lineNumber: 34,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\auth\\\\Singup.jsx\",\n        lineNumber: 33,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Singup, \"8ratG1efODJTd2njTgJHIwkKteI=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Singup;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Singup);\nvar _c;\n$RefreshReg$(_c, \"Singup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvYXV0aC9TaW5ndXAuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFNkI7QUFDZTtBQUNYO0FBRWpDLE1BQU1HLFNBQVM7O0lBQ1gsTUFBTUMsU0FBU0gsMERBQVNBO0lBQ3hCLE1BQU0sQ0FBRUksT0FBT0MsU0FBVSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUVLLE1BQU1DLFFBQVMsR0FBR04sK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFFTyxLQUFLQyxPQUFRLEdBQUdSLCtDQUFRQSxDQUFDLEVBQUU7SUFDbkMsTUFBTVMsY0FBYyxPQUFNQztRQUN0QkEsRUFBRUMsY0FBYztRQUNoQixJQUFJO1lBQ0EsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLGtDQUFpQztnQkFDMURDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ0wsZ0JBQWU7Z0JBQ25CO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQ2pCZixPQUFPQTtvQkFDUGdCLFVBQVVkO2dCQUNkO1lBQ0o7WUFDQSxJQUFHTyxTQUFTUSxFQUFFLEVBQUM7Z0JBQ1hsQixPQUFPbUIsSUFBSSxDQUFDO1lBQ2hCO1FBQ0osRUFBRSxPQUFPQyxPQUFPO1lBQ1pDLFFBQVFDLEdBQUcsQ0FBQztRQUNoQjtJQUNKO0lBQ0EscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2YsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDQztvQkFBS0QsV0FBVTtvQkFBT0UsVUFBVW5COztzQ0FDN0IsOERBQUNvQjs0QkFBS0gsV0FBVTtzQ0FBcUI7Ozs7OztzQ0FDckMsOERBQUNJOzRCQUFNQyxNQUFLOzRCQUNSQyxPQUFPN0I7NEJBQ1A4QixVQUFVLENBQUN2QixJQUFLTixTQUFTTSxFQUFFd0IsTUFBTSxDQUFDRixLQUFLOzRCQUN2Q0csUUFBUTs7Ozs7O3NDQUVaLDhEQUFDTjs0QkFBS0gsV0FBVTtzQ0FBcUI7Ozs7OztzQ0FDckMsOERBQUNJOzRCQUFNQyxNQUFLOzRCQUNSQyxPQUFPM0I7NEJBQ1A0QixVQUFVLENBQUN2QixJQUFLSixRQUFRSSxFQUFFd0IsTUFBTSxDQUFDRixLQUFLOzRCQUN0Q0csUUFBUTs7Ozs7O3NDQUVaLDhEQUFDQzs0QkFDR1YsV0FBVTtzQ0FDYjs7Ozs7Ozs7Ozs7OzhCQUlMLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNHO3NDQUFLOzs7Ozs7c0NBQ04sOERBQUMvQixrREFBSUE7NEJBQUN1QyxNQUFLOzRCQUFlWCxXQUFVO3NDQUEwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLOUU7R0F0RE16Qjs7UUFDYUYsc0RBQVNBOzs7S0FEdEJFO0FBd0ROLCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYXV0aC9TaW5ndXAuanN4P2I3ZDAiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBTaW5ndXAgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFsgZW1haWwsIHNldEVtYWlsIF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbIHBhc3MsIHNldFBhc3MgXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFsgbXNnLCBzZXRNc2cgXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IGhhbmRsZVJlZ2lzID0gYXN5bmMoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBzZW5kRGF0YSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjQwMDAvcmVnaXN0ZXInLHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6XCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpZihzZW5kRGF0YS5vayl7XHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL2F1dGgvc2lnbmluJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnInKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLWZ1bGxcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy1sZyBwLTUgcm91bmRlZC1sZ1wiPlxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJncmlkXCIgb25TdWJtaXQ9e2hhbmRsZVJlZ2lzfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBsLTQgZm9udC1zZW1pYm9sZFwiPkUtbWFpbDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH0gXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBsLTQgZm9udC1zZW1pYm9sZFwiPlBhc3N3b3JkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzfSBcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT4gc2V0UGFzcyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB5LTMgYmctYmx1ZS0xMDAgdGV4dC1ibHVlLTYwMCByb3VuZGVkLWxnIGZvbnQtc2VtaWJvbGQgaG92ZXI6YmctYmx1ZS02MDAgaG92ZXI6dGV4dC1ibHVlLTEwMCBkdXJhdGlvbi0zMDBcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFJlZ2lzdGVyXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTJcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPmFscmVhZHkgaGFzIGFjY291bnQgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2F1dGgvc2lnbmluJyBjbGFzc05hbWU9XCJ1bmRlcmxpbmUgdGV4dC1ibHVlLTYwMFwiPnNpZ25pbjwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpbmd1cCJdLCJuYW1lcyI6WyJMaW5rIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJTaW5ndXAiLCJyb3V0ZXIiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzcyIsInNldFBhc3MiLCJtc2ciLCJzZXRNc2ciLCJoYW5kbGVSZWdpcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNlbmREYXRhIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYXNzd29yZCIsIm9rIiwicHVzaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsInNwYW4iLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicmVxdWlyZWQiLCJidXR0b24iLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/auth/Singup.jsx\n"));

/***/ })

});
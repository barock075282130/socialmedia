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

/***/ "(app-pages-browser)/./components/context/userContext.jsx":
/*!********************************************!*\
  !*** ./components/context/userContext.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   userData: function() { return /* binding */ userData; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ userData,default auto */ \nvar _s = $RefreshSig$();\n\nconst userData = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    userId: undefined,\n    email: undefined,\n    username: undefined\n});\nconst Context = (param)=>{\n    let { children } = param;\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        userId: undefined,\n        email: undefined,\n        username: undefined\n    });\n    const Logout = async ()=>{\n        localStorage.removeItem(\"x-access-token\");\n        window.location.reload(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getUser = async ()=>{\n            try {\n                const res = await fetch(\"http://localhost:4000/userdata\", {\n                    method: \"GET\",\n                    headers: {\n                        \"x-access-token\": \"Bearer \" + localStorage.getItem(\"x-access-token\")\n                    }\n                });\n                if (res.ok) {\n                    const json = await res.json();\n                    setUser({\n                        userId: json.userId,\n                        email: json.email,\n                        username: json.username\n                    });\n                }\n            } catch (error) {\n                console.log(error);\n            }\n        };\n        getUser();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(userData.Provider, {\n        value: {\n            user,\n            Logout\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\context\\\\userContext.jsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Context, \"MFOeV9q7//TCa3KXkN53r8hPM58=\");\n_c = Context;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Context);\nvar _c;\n$RefreshReg$(_c, \"Context\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvY29udGV4dC91c2VyQ29udGV4dC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRTJEO0FBRXBELE1BQU1HLHlCQUFXSCxvREFBYUEsQ0FBQztJQUFFSSxRQUFRQztJQUFXQyxPQUFPRDtJQUFXRSxVQUFVRjtBQUFVLEdBQUU7QUFFbkcsTUFBTUcsVUFBVTtRQUFDLEVBQUVDLFFBQVEsRUFBRTs7SUFDekIsTUFBTSxDQUFFQyxNQUFNQyxRQUFTLEdBQUdULCtDQUFRQSxDQUFDO1FBQUVFLFFBQVFDO1FBQVdDLE9BQU9EO1FBQVdFLFVBQVVGO0lBQVU7SUFDOUYsTUFBTU8sU0FBUztRQUNYQyxhQUFhQyxVQUFVLENBQUM7UUFDeEJDLE9BQU9DLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDO0lBQzNCO0lBQ0FoQixnREFBU0EsQ0FBQztRQUNOLE1BQU1pQixVQUFVO1lBQ1osSUFBSTtnQkFDQSxNQUFNQyxNQUFNLE1BQU1DLE1BQU0sa0NBQWlDO29CQUNyREMsUUFBUTtvQkFDUkMsU0FBUzt3QkFDTCxrQkFBa0IsWUFBWVQsYUFBYVUsT0FBTyxDQUFDO29CQUN2RDtnQkFDSjtnQkFDQSxJQUFHSixJQUFJSyxFQUFFLEVBQUM7b0JBQ04sTUFBTUMsT0FBTyxNQUFNTixJQUFJTSxJQUFJO29CQUMzQmQsUUFBUTt3QkFBRVAsUUFBUXFCLEtBQUtyQixNQUFNO3dCQUFFRSxPQUFPbUIsS0FBS25CLEtBQUs7d0JBQUVDLFVBQVVrQixLQUFLbEIsUUFBUTtvQkFBQztnQkFDOUU7WUFDSixFQUFFLE9BQU9tQixPQUFPO2dCQUNaQyxRQUFRQyxHQUFHLENBQUNGO1lBQ2hCO1FBQ0o7UUFDQVI7SUFDSixHQUFFLEVBQUU7SUFDTixxQkFDRSw4REFBQ2YsU0FBUzBCLFFBQVE7UUFBQ0MsT0FBTztZQUFFcEI7WUFBTUU7UUFBTztrQkFDcENIOzs7Ozs7QUFHVDtHQTlCTUQ7S0FBQUE7QUFnQ04sK0RBQWVBLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZXh0L3VzZXJDb250ZXh0LmpzeD9jZjRmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyRGF0YSA9IGNyZWF0ZUNvbnRleHQoeyB1c2VySWQ6IHVuZGVmaW5lZCwgZW1haWw6IHVuZGVmaW5lZCwgdXNlcm5hbWU6IHVuZGVmaW5lZCB9KVxyXG5cclxuY29uc3QgQ29udGV4dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICAgIGNvbnN0IFsgdXNlciwgc2V0VXNlciBdID0gdXNlU3RhdGUoeyB1c2VySWQ6IHVuZGVmaW5lZCwgZW1haWw6IHVuZGVmaW5lZCwgdXNlcm5hbWU6IHVuZGVmaW5lZCB9KVxyXG4gICAgY29uc3QgTG9nb3V0ID0gYXN5bmMoKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3gtYWNjZXNzLXRva2VuJylcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKGZhbHNlKVxyXG4gICAgfVxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgY29uc3QgZ2V0VXNlciA9IGFzeW5jKCkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC91c2VyZGF0YScse1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwieC1hY2Nlc3MtdG9rZW5cIjogXCJCZWFyZXIgXCIgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgneC1hY2Nlc3MtdG9rZW4nKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBpZihyZXMub2spe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFVzZXIoeyB1c2VySWQ6IGpzb24udXNlcklkLCBlbWFpbDoganNvbi5lbWFpbCwgdXNlcm5hbWU6IGpzb24udXNlcm5hbWUgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdldFVzZXIoKTsgXHJcbiAgICB9LFtdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8dXNlckRhdGEuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciwgTG9nb3V0IH19PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvdXNlckRhdGEuUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250ZXh0Il0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZXJEYXRhIiwidXNlcklkIiwidW5kZWZpbmVkIiwiZW1haWwiLCJ1c2VybmFtZSIsIkNvbnRleHQiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwiTG9nb3V0IiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZ2V0VXNlciIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImdldEl0ZW0iLCJvayIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/context/userContext.jsx\n"));

/***/ })

});
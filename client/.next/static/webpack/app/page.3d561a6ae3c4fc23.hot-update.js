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

/***/ "(app-pages-browser)/./components/context/userContext.jsx":
/*!********************************************!*\
  !*** ./components/context/userContext.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   userData: function() { return /* binding */ userData; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ userData,default auto */ \nvar _s = $RefreshSig$();\n\nconst userData = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    userId: undefined,\n    email: undefined\n});\nconst Provider = (param)=>{\n    let { children } = param;\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        userId: undefined,\n        email: undefined\n    });\n    const getUser = async ()=>{\n        try {\n            const res = await fetch(\"http://localhost:4000/userdata\", {\n                method: \"GET\",\n                headers: {\n                    \"x-access-token\": \"Bearer \" + localStorage.getItem(\"x-access-token\")\n                }\n            });\n            if (res.ok) {\n                const json = await res.json();\n                setUser({\n                    userId: json.userId,\n                    email: json.email\n                });\n            }\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getUser();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(userData.Provider, {\n        value: {\n            user\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\context\\\\userContext.jsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Provider, \"gFgrYGBu4qKdkD9UDai5cH38l/c=\");\n_c = Provider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Provider);\nvar _c;\n$RefreshReg$(_c, \"Provider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvY29udGV4dC91c2VyQ29udGV4dC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRTJEO0FBRXBELE1BQU1HLHlCQUFXSCxvREFBYUEsQ0FBQztJQUFFSSxRQUFRQztJQUFXQyxPQUFPRDtBQUFVLEdBQUU7QUFFOUUsTUFBTUUsV0FBVztRQUFDLEVBQUVDLFFBQVEsRUFBRTs7SUFDMUIsTUFBTSxDQUFFQyxNQUFNQyxRQUFTLEdBQUdSLCtDQUFRQSxDQUFDO1FBQUVFLFFBQVFDO1FBQVdDLE9BQU9EO0lBQVU7SUFDekUsTUFBTU0sVUFBVTtRQUNaLElBQUk7WUFDQSxNQUFNQyxNQUFNLE1BQU1DLE1BQU0sa0NBQWlDO2dCQUNyREMsUUFBUTtnQkFDUkMsU0FBUztvQkFDTCxrQkFBa0IsWUFBWUMsYUFBYUMsT0FBTyxDQUFDO2dCQUN2RDtZQUNKO1lBQ0EsSUFBR0wsSUFBSU0sRUFBRSxFQUFDO2dCQUNOLE1BQU1DLE9BQU8sTUFBTVAsSUFBSU8sSUFBSTtnQkFDM0JULFFBQVE7b0JBQUVOLFFBQVFlLEtBQUtmLE1BQU07b0JBQUVFLE9BQU9hLEtBQUtiLEtBQUs7Z0JBQUM7WUFDckQ7UUFDSixFQUFFLE9BQU9jLE9BQU87WUFDWkMsUUFBUUMsR0FBRyxDQUFDRjtRQUNoQjtJQUNKO0lBQ0FuQixnREFBU0EsQ0FBQztRQUNOVTtJQUNKLEdBQUUsRUFBRTtJQUNOLHFCQUNFLDhEQUFDUixTQUFTSSxRQUFRO1FBQUNnQixPQUFPO1lBQUVkO1FBQUs7a0JBQzVCRDs7Ozs7O0FBR1Q7R0ExQk1EO0tBQUFBO0FBNEJOLCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY29udGV4dC91c2VyQ29udGV4dC5qc3g/Y2Y0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlckRhdGEgPSBjcmVhdGVDb250ZXh0KHsgdXNlcklkOiB1bmRlZmluZWQsIGVtYWlsOiB1bmRlZmluZWQgfSlcclxuXHJcbmNvbnN0IFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gICAgY29uc3QgWyB1c2VyLCBzZXRVc2VyIF0gPSB1c2VTdGF0ZSh7IHVzZXJJZDogdW5kZWZpbmVkLCBlbWFpbDogdW5kZWZpbmVkIH0pXHJcbiAgICBjb25zdCBnZXRVc2VyID0gYXN5bmMoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC91c2VyZGF0YScse1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwieC1hY2Nlc3MtdG9rZW5cIjogXCJCZWFyZXIgXCIgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgneC1hY2Nlc3MtdG9rZW4nKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpZihyZXMub2spe1xyXG4gICAgICAgICAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBzZXRVc2VyKHsgdXNlcklkOiBqc29uLnVzZXJJZCwgZW1haWw6IGpzb24uZW1haWwgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGdldFVzZXIoKTsgXHJcbiAgICB9LFtdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8dXNlckRhdGEuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciB9fT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L3VzZXJEYXRhLlByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvdmlkZXIiXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlckRhdGEiLCJ1c2VySWQiLCJ1bmRlZmluZWQiLCJlbWFpbCIsIlByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsImdldFVzZXIiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwib2siLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/context/userContext.jsx\n"));

/***/ })

});
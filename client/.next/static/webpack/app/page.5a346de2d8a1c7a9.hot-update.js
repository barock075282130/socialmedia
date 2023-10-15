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

/***/ "(app-pages-browser)/./components/Feeds.jsx":
/*!******************************!*\
  !*** ./components/Feeds.jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_userContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context/userContext */ \"(app-pages-browser)/./components/context/userContext.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Feeds = ()=>{\n    _s();\n    const [post, setPost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const searchParam = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams)();\n    const { user } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_userContext__WEBPACK_IMPORTED_MODULE_4__.userData);\n    const userId = searchParam.get(\"id\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const pathName = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();\n    const gotoProfile = (id)=>router.push(\"/profile?id=\".concat(id));\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchPost = async ()=>{\n            if (pathName === \"/profile\") {\n                try {\n                    const res = await fetch(\"http://localhost:4000/post/\".concat(userId), {\n                        method: \"GET\"\n                    });\n                    const json = await res.json();\n                    setPost(json);\n                } catch (error) {\n                    console.log(error);\n                }\n            }\n            if (pathName === \"/\") {\n                try {\n                    const res = await fetch(\"http://localhost:4000/post/getpost\", {\n                        method: \"GET\"\n                    });\n                    const json = await res.json();\n                    setPost(json);\n                } catch (error) {\n                    console.log(error);\n                }\n            }\n        };\n        fetchPost();\n    }, [\n        userId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            post ? post.map((data, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"m-1 border grid grid-cols-11 py-2 rounded-md\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-span-1 flex justify-center\",\n                            onClick: ()=>gotoProfile(data.userpostid),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-10 h-10 bg-white rounded-full border cursor-pointer\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Feeds.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Feeds.jsx\",\n                            lineNumber: 51,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-span-10\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex gap-1 cursor-pointer\",\n                                    onClick: ()=>gotoProfile(data.userpostid),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"font-semibold\",\n                                            children: data.username\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Feeds.jsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"font-normal text-gray-400\",\n                                            children: data.address\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Feeds.jsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Feeds.jsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: data === null || data === void 0 ? void 0 : data.posttext\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Feeds.jsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 17\n                                }, undefined),\n                                (data === null || data === void 0 ? void 0 : data.img) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: data.img,\n                                    alt: data.img,\n                                    width: 100,\n                                    height: 100\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Feeds.jsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 19\n                                }, undefined) : null,\n                                pathName === \"/profile\" && userId === (user === null || user === void 0 ? void 0 : user.userId) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-center gap-3\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            children: \"edit\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Feeds.jsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 23\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            children: \"del\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Feeds.jsx\",\n                                            lineNumber: 78,\n                                            columnNumber: 23\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Feeds.jsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Feeds.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, i, true, {\n                    fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Feeds.jsx\",\n                    lineNumber: 47,\n                    columnNumber: 13\n                }, undefined)) : null,\n            post.length === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center mt-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"font-bold text-gray-400 text-4xl\",\n                    children: \"No Post Yet\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Feeds.jsx\",\n                    lineNumber: 88,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Feeds.jsx\",\n                lineNumber: 87,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Feeds, \"CfFTzPb3QSm6LyZG+gcGcE4X0OI=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname\n    ];\n});\n_c = Feeds;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Feeds);\nvar _c;\n$RefreshReg$(_c, \"Feeds\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRmVlZHMuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRXdEO0FBQ3pCO0FBQzJDO0FBQ3pCO0FBRWpELE1BQU1RLFFBQVE7O0lBQ1osTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdSLCtDQUFRQSxDQUFDLEVBQUU7SUFDbkMsTUFBTVMsY0FBY0wsZ0VBQWVBO0lBQ25DLE1BQU0sRUFBRU0sSUFBSSxFQUFFLEdBQUdaLGlEQUFVQSxDQUFDTywwREFBUUE7SUFDcEMsTUFBTU0sU0FBU0YsWUFBWUcsR0FBRyxDQUFDO0lBQy9CLE1BQU1DLFNBQVNWLDBEQUFTQTtJQUN4QixNQUFNVyxXQUFXWiw0REFBV0E7SUFDNUIsTUFBTWEsY0FBYyxDQUFDQyxLQUFPSCxPQUFPSSxJQUFJLENBQUMsZUFBa0IsT0FBSEQ7SUFDdkRqQixnREFBU0EsQ0FBQztRQUNSLE1BQU1tQixZQUFZO1lBQ2hCLElBQUdKLGFBQWMsWUFBVTtnQkFDekIsSUFBSTtvQkFDRixNQUFNSyxNQUFNLE1BQU1DLE1BQU0sOEJBQXFDLE9BQVBULFNBQVU7d0JBQzlEVSxRQUFRO29CQUNWO29CQUNBLE1BQU1DLE9BQU8sTUFBTUgsSUFBSUcsSUFBSTtvQkFDM0JkLFFBQVFjO2dCQUNWLEVBQUUsT0FBT0MsT0FBTztvQkFDZEMsUUFBUUMsR0FBRyxDQUFDRjtnQkFDZDtZQUNGO1lBQ0EsSUFBR1QsYUFBYSxLQUFJO2dCQUNsQixJQUFJO29CQUNGLE1BQU1LLE1BQU0sTUFBTUMsTUFBTSxzQ0FBc0M7d0JBQzVEQyxRQUFRO29CQUNWO29CQUNBLE1BQU1DLE9BQU8sTUFBTUgsSUFBSUcsSUFBSTtvQkFDM0JkLFFBQVFjO2dCQUNWLEVBQUUsT0FBT0MsT0FBTztvQkFDZEMsUUFBUUMsR0FBRyxDQUFDRjtnQkFDZDtZQUNGO1FBQ0Y7UUFDQUw7SUFDRixHQUFHO1FBQUNQO0tBQU87SUFDWCxxQkFDRTs7WUFDR0osT0FDR0EsS0FBS21CLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxrQkFDZCw4REFBQ0M7b0JBQ0NDLFdBQVU7O3NDQUdWLDhEQUFDRDs0QkFDQ0MsV0FBVTs0QkFDVkMsU0FBUyxJQUFNaEIsWUFBWVksS0FBS0ssVUFBVTtzQ0FFMUMsNEVBQUNIO2dDQUFJQyxXQUFVOzs7Ozs7Ozs7OztzQ0FFakIsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0Q7b0NBQ0NDLFdBQVU7b0NBQ1ZDLFNBQVMsSUFBTWhCLFlBQVlZLEtBQUtLLFVBQVU7O3NEQUUxQyw4REFBQ0M7NENBQUVILFdBQVU7c0RBQWlCSCxLQUFLTyxRQUFROzs7Ozs7c0RBQzNDLDhEQUFDRDs0Q0FBRUgsV0FBVTtzREFBNkJILEtBQUtRLE9BQU87Ozs7Ozs7Ozs7Ozs4Q0FFeEQsOERBQUNGOzhDQUFHTixpQkFBQUEsMkJBQUFBLEtBQU1TLFFBQVE7Ozs7OztnQ0FDakJULENBQUFBLGlCQUFBQSwyQkFBQUEsS0FBTVUsR0FBRyxrQkFDUiw4REFBQ3BDLG1EQUFLQTtvQ0FDSnFDLEtBQUtYLEtBQUtVLEdBQUc7b0NBQ2JFLEtBQUtaLEtBQUtVLEdBQUc7b0NBQ2JHLE9BQU87b0NBQ1BDLFFBQVE7Ozs7O2dEQUVSO2dDQUNIM0IsYUFBYSxjQUNaSCxZQUFXRCxpQkFBQUEsMkJBQUFBLEtBQU1DLE1BQU0sbUJBQ3JCLDhEQUFDa0I7b0NBQUlDLFdBQVU7O3NEQUNiLDhEQUFDWTtzREFBTzs7Ozs7O3NEQUNSLDhEQUFDQTtzREFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQkE3QlhkOzs7O2lDQW9DVDtZQUNIckIsS0FBS29DLE1BQU0sS0FBSyxtQkFDZiw4REFBQ2Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNHO29CQUFFSCxXQUFVOzhCQUFtQzs7Ozs7Ozs7Ozs7OztBQUsxRDtHQXJGTXhCOztRQUVnQkYsNERBQWVBO1FBR3BCRCxzREFBU0E7UUFDUEQsd0RBQVdBOzs7S0FOeEJJO0FBdUZOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRmVlZHMuanN4P2FmZTciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VQYXRobmFtZSwgdXNlUm91dGVyLCB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7IHVzZXJEYXRhIH0gZnJvbSBcIi4vY29udGV4dC91c2VyQ29udGV4dFwiO1xyXG5cclxuY29uc3QgRmVlZHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Bvc3QsIHNldFBvc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IHNlYXJjaFBhcmFtID0gdXNlU2VhcmNoUGFyYW1zKCk7XHJcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VDb250ZXh0KHVzZXJEYXRhKVxyXG4gIGNvbnN0IHVzZXJJZCA9IHNlYXJjaFBhcmFtLmdldChcImlkXCIpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHBhdGhOYW1lID0gdXNlUGF0aG5hbWUoKVxyXG4gIGNvbnN0IGdvdG9Qcm9maWxlID0gKGlkKSA9PiByb3V0ZXIucHVzaChgL3Byb2ZpbGU/aWQ9JHtpZH1gKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hQb3N0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZihwYXRoTmFtZSA9PT0gYC9wcm9maWxlYCl7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjQwMDAvcG9zdC8ke3VzZXJJZH1gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgICBzZXRQb3N0KGpzb24pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmKHBhdGhOYW1lID09PSAnLycpe1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9wb3N0L2dldHBvc3RcIiwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgICAgc2V0UG9zdChqc29uKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZldGNoUG9zdCgpO1xyXG4gIH0sIFt1c2VySWRdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3Bvc3RcclxuICAgICAgICA/IHBvc3QubWFwKChkYXRhLCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtLTEgYm9yZGVyIGdyaWQgZ3JpZC1jb2xzLTExIHB5LTIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLXNwYW4tMSBmbGV4IGp1c3RpZnktY2VudGVyXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGdvdG9Qcm9maWxlKGRhdGEudXNlcnBvc3RpZCl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgYmctd2hpdGUgcm91bmRlZC1mdWxsIGJvcmRlciBjdXJzb3ItcG9pbnRlclwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGdhcC0xIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZ290b1Byb2ZpbGUoZGF0YS51c2VycG9zdGlkKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPntkYXRhLnVzZXJuYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ub3JtYWwgdGV4dC1ncmF5LTQwMFwiPntkYXRhLmFkZHJlc3N9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cD57ZGF0YT8ucG9zdHRleHR9PC9wPlxyXG4gICAgICAgICAgICAgICAge2RhdGE/LmltZyA/IChcclxuICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtkYXRhLmltZ31cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9e2RhdGEuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxMDB9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIHtwYXRoTmFtZSA9PT0gJy9wcm9maWxlJyYmXHJcbiAgICAgICAgICAgICAgICAgIHVzZXJJZCA9PT0gdXNlcj8udXNlcklkJiYoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGdhcC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPmVkaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+ZGVsPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKVxyXG4gICAgICAgIDogbnVsbH1cclxuICAgICAge3Bvc3QubGVuZ3RoID09PSAwICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtNVwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtZ3JheS00MDAgdGV4dC00eGxcIj5ObyBQb3N0IFlldDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGZWVkcztcclxuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwidXNlUGF0aG5hbWUiLCJ1c2VSb3V0ZXIiLCJ1c2VTZWFyY2hQYXJhbXMiLCJ1c2VyRGF0YSIsIkZlZWRzIiwicG9zdCIsInNldFBvc3QiLCJzZWFyY2hQYXJhbSIsInVzZXIiLCJ1c2VySWQiLCJnZXQiLCJyb3V0ZXIiLCJwYXRoTmFtZSIsImdvdG9Qcm9maWxlIiwiaWQiLCJwdXNoIiwiZmV0Y2hQb3N0IiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwibWFwIiwiZGF0YSIsImkiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwidXNlcnBvc3RpZCIsInAiLCJ1c2VybmFtZSIsImFkZHJlc3MiLCJwb3N0dGV4dCIsImltZyIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiYnV0dG9uIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Feeds.jsx\n"));

/***/ })

});
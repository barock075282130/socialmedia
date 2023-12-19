"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/profile/[slug]/page",{

/***/ "(app-pages-browser)/./components/profile/EditProfile.jsx":
/*!********************************************!*\
  !*** ./components/profile/EditProfile.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_userContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/userContext */ \"(app-pages-browser)/./components/context/userContext.jsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst EditProfile = (param)=>{\n    let { open, setOpen } = param;\n    _s();\n    const { user } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_userContext__WEBPACK_IMPORTED_MODULE_2__.userData);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [userDetail, setUserDetail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [msg, setMsg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const changeUser = async (e)=>{\n        e.preventDefault();\n        try {\n            const edit = await fetch(\"http://localhost:4000/profile/edit/\".concat(user === null || user === void 0 ? void 0 : user.userId), {\n                method: \"PATCH\",\n                headers: {\n                    \"Content-Type\": \"application/json\",\n                    \"x-access-token\": \"Bearer \" + localStorage.getItem(\"x-access-token\")\n                },\n                body: JSON.stringify({\n                    username: userDetail\n                })\n            });\n            if (!edit.ok) {\n                const json = await edit.json();\n                setMsg(json);\n            } else {\n                const json = await edit.json();\n                const token = json.token;\n                localStorage.removeItem(\"x-access-token\");\n                localStorage.setItem(\"x-access-token\", token);\n                setMsg(json.msg);\n                router.push(\"/profile?name=\".concat(json.username));\n                setTimeout(()=>window.location.reload(false), 300);\n            }\n        } catch (error) {\n            throw error;\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (user === null || user === void 0 ? void 0 : user.userId) {\n            const fetchUserData = async ()=>{\n                try {\n                    const res = await fetch(\"http://localhost:4000/profile\", {\n                        method: \"GET\",\n                        headers: {\n                            \"Content-Type\": \"application/json\",\n                            \"x-access-token\": \"Bearer \" + localStorage.getItem(\"x-access-token\")\n                        }\n                    });\n                    if (res.ok) {\n                        const json = await res.json();\n                        setUserDetail(json);\n                    }\n                } catch (error) {\n                    throw error;\n                }\n            };\n            fetchUserData();\n        }\n    }, [\n        user\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            !open && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"blue_btn absolute right-0 m-2 cursor-pointer\",\n                onClick: ()=>setOpen(true),\n                children: \"Edit Profile\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\profile\\\\EditProfile.jsx\",\n                lineNumber: 71,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: open && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"fixed backdrop-blur-md flex justify-center items-center top-0 left-0 w-screen h-screen bg-black/60\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-white px-10 py-4 rounded-lg top-1/3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                onSubmit: changeUser,\n                                encType: \"multipart/form-data\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"grid\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"pl-3 font-semibold\",\n                                                    children: \"Username\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\profile\\\\EditProfile.jsx\",\n                                                    lineNumber: 86,\n                                                    columnNumber: 21\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    type: \"text\",\n                                                    name: \"username\",\n                                                    value: userDetail,\n                                                    onChange: (e)=>setUserDetail(e.target.value)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\profile\\\\EditProfile.jsx\",\n                                                    lineNumber: 87,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\profile\\\\EditProfile.jsx\",\n                                            lineNumber: 85,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex justify-between\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    className: \"blue_btn\",\n                                                    children: \"Edit\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\profile\\\\EditProfile.jsx\",\n                                                    lineNumber: 95,\n                                                    columnNumber: 21\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    className: \"gray_btn\",\n                                                    onClick: ()=>setOpen(false),\n                                                    children: \"Cancel\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\profile\\\\EditProfile.jsx\",\n                                                    lineNumber: 96,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\profile\\\\EditProfile.jsx\",\n                                            lineNumber: 94,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\profile\\\\EditProfile.jsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\profile\\\\EditProfile.jsx\",\n                                lineNumber: 83,\n                                columnNumber: 15\n                            }, undefined),\n                            msg && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-red-500 text-white font-semibold mt-2 px-2 py-1 text-center rounded-lg text-lg\",\n                                children: msg\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\profile\\\\EditProfile.jsx\",\n                                lineNumber: 103,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\profile\\\\EditProfile.jsx\",\n                        lineNumber: 82,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\profile\\\\EditProfile.jsx\",\n                    lineNumber: 81,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\profile\\\\EditProfile.jsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(EditProfile, \"xKKhdyY09qcsjddgZaPvltjBUGw=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = EditProfile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditProfile);\nvar _c;\n$RefreshReg$(_c, \"EditProfile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvcHJvZmlsZS9FZGl0UHJvZmlsZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRXdEO0FBQ047QUFDTjtBQUU1QyxNQUFNSyxjQUFjO1FBQUMsRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUU7O0lBQ3BDLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdSLGlEQUFVQSxDQUFDRywwREFBUUE7SUFDcEMsTUFBTU0sU0FBU0wsMERBQVNBO0lBQ3hCLE1BQU0sQ0FBQ00sWUFBWUMsY0FBYyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNVLEtBQUtDLE9BQU8sR0FBR1gsK0NBQVFBLENBQUM7SUFDL0IsTUFBTVksYUFBYSxPQUFPQztRQUN4QkEsRUFBRUMsY0FBYztRQUNoQixJQUFJO1lBQ0YsTUFBTUMsT0FBTyxNQUFNQyxNQUNqQixzQ0FBbUQsT0FBYlYsaUJBQUFBLDJCQUFBQSxLQUFNVyxNQUFNLEdBQ2xEO2dCQUNFQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGdCQUFnQjtvQkFDaEIsa0JBQ0UsWUFBWUMsYUFBYUMsT0FBTyxDQUFDO2dCQUNyQztnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUNuQkMsVUFBVWpCO2dCQUNaO1lBQ0Y7WUFFRixJQUFJLENBQUNPLEtBQUtXLEVBQUUsRUFBRTtnQkFDWixNQUFNQyxPQUFPLE1BQU1aLEtBQUtZLElBQUk7Z0JBQzVCaEIsT0FBT2dCO1lBQ1QsT0FBTztnQkFDTCxNQUFNQSxPQUFPLE1BQU1aLEtBQUtZLElBQUk7Z0JBQzVCLE1BQU1DLFFBQVFELEtBQUtDLEtBQUs7Z0JBQ3hCUixhQUFhUyxVQUFVLENBQUM7Z0JBQ3hCVCxhQUFhVSxPQUFPLENBQUMsa0JBQWtCRjtnQkFDdkNqQixPQUFPZ0IsS0FBS2pCLEdBQUc7Z0JBQ2ZILE9BQU93QixJQUFJLENBQUMsaUJBQStCLE9BQWRKLEtBQUtGLFFBQVE7Z0JBQzFDTyxXQUFXLElBQU1DLE9BQU9DLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDLFFBQVE7WUFDbEQ7UUFDRixFQUFFLE9BQU9DLE9BQU87WUFDZCxNQUFNQTtRQUNSO0lBQ0Y7SUFDQXJDLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSU8saUJBQUFBLDJCQUFBQSxLQUFNVyxNQUFNLEVBQUU7WUFDaEIsTUFBTW9CLGdCQUFnQjtnQkFDcEIsSUFBSTtvQkFDRixNQUFNQyxNQUFNLE1BQU10QixNQUFPLGlDQUFnQzt3QkFDdkRFLFFBQVE7d0JBQ1JDLFNBQVM7NEJBQ1AsZ0JBQWdCOzRCQUNoQixrQkFDRSxZQUFZQyxhQUFhQyxPQUFPLENBQUM7d0JBQ3JDO29CQUNGO29CQUNBLElBQUlpQixJQUFJWixFQUFFLEVBQUU7d0JBQ1YsTUFBTUMsT0FBTyxNQUFNVyxJQUFJWCxJQUFJO3dCQUMzQmxCLGNBQWNrQjtvQkFDaEI7Z0JBQ0YsRUFBRSxPQUFPUyxPQUFPO29CQUNkLE1BQU1BO2dCQUNSO1lBQ0Y7WUFDQUM7UUFDRjtJQUNGLEdBQUc7UUFBQy9CO0tBQUs7SUFDVCxxQkFDRTs7WUFDRyxDQUFDRixzQkFDQSw4REFBQ21DO2dCQUNDQyxXQUFVO2dCQUNWQyxTQUFTLElBQU1wQyxRQUFROzBCQUN4Qjs7Ozs7OzBCQUtILDhEQUFDcUM7MEJBQ0V0QyxzQkFDQyw4REFBQ3NDO29CQUFJRixXQUFVOzhCQUNiLDRFQUFDRTt3QkFBSUYsV0FBVTs7MENBQ2IsOERBQUNHO2dDQUFLQyxVQUFVaEM7Z0NBQVlpQyxTQUFROzBDQUNsQyw0RUFBQ0g7O3NEQUNDLDhEQUFDQTs0Q0FBSUYsV0FBVTs7OERBQ2IsOERBQUNNO29EQUFLTixXQUFVOzhEQUFxQjs7Ozs7OzhEQUNyQyw4REFBQ087b0RBQ0NDLE1BQUs7b0RBQ0xDLE1BQUs7b0RBQ0xDLE9BQU8xQztvREFDUDJDLFVBQVUsQ0FBQ3RDLElBQUlKLGNBQWNJLEVBQUV1QyxNQUFNLENBQUNGLEtBQUs7Ozs7Ozs7Ozs7OztzREFHL0MsOERBQUNSOzRDQUFJRixXQUFVOzs4REFDYiw4REFBQ0Q7b0RBQU9DLFdBQVU7OERBQVc7Ozs7Ozs4REFDN0IsOERBQUNEO29EQUFPQyxXQUFVO29EQUFXQyxTQUFTLElBQUlwQyxRQUFROzhEQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0QkFNL0RLLHFCQUNDLDhEQUFDZ0M7Z0NBQUlGLFdBQVU7MENBQ1o5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU25CO0dBMUdNUDs7UUFFV0Qsc0RBQVNBOzs7S0FGcEJDO0FBNEdOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcHJvZmlsZS9FZGl0UHJvZmlsZS5qc3g/OTdhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlckRhdGEgfSBmcm9tIFwiLi4vY29udGV4dC91c2VyQ29udGV4dFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcblxyXG5jb25zdCBFZGl0UHJvZmlsZSA9ICh7IG9wZW4sIHNldE9wZW4gfSkgPT4ge1xyXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlQ29udGV4dCh1c2VyRGF0YSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW3VzZXJEZXRhaWwsIHNldFVzZXJEZXRhaWxdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW21zZywgc2V0TXNnXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IGNoYW5nZVVzZXIgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZWRpdCA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIGBodHRwOi8vbG9jYWxob3N0OjQwMDAvcHJvZmlsZS9lZGl0LyR7dXNlcj8udXNlcklkfWAsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICBcIngtYWNjZXNzLXRva2VuXCI6XHJcbiAgICAgICAgICAgICAgXCJCZWFyZXIgXCIgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIngtYWNjZXNzLXRva2VuXCIpLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXJEZXRhaWxcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgICAgaWYgKCFlZGl0Lm9rKSB7XHJcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IGVkaXQuanNvbigpO1xyXG4gICAgICAgIHNldE1zZyhqc29uKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgZWRpdC5qc29uKCk7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBqc29uLnRva2VuO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwieC1hY2Nlc3MtdG9rZW5cIik7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ4LWFjY2Vzcy10b2tlblwiLCB0b2tlbik7XHJcbiAgICAgICAgc2V0TXNnKGpzb24ubXNnKTtcclxuICAgICAgICByb3V0ZXIucHVzaChgL3Byb2ZpbGU/bmFtZT0ke2pzb24udXNlcm5hbWV9YCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKGZhbHNlKSwgMzAwKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICB9XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHVzZXI/LnVzZXJJZCkge1xyXG4gICAgICBjb25zdCBmZXRjaFVzZXJEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo0MDAwL3Byb2ZpbGVgLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgIFwieC1hY2Nlc3MtdG9rZW5cIjpcclxuICAgICAgICAgICAgICAgIFwiQmVhcmVyIFwiICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ4LWFjY2Vzcy10b2tlblwiKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgaWYgKHJlcy5vaykge1xyXG4gICAgICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICAgICAgc2V0VXNlckRldGFpbChqc29uKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICBmZXRjaFVzZXJEYXRhKCk7XHJcbiAgICB9XHJcbiAgfSwgW3VzZXJdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgeyFvcGVuICYmIChcclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJibHVlX2J0biBhYnNvbHV0ZSByaWdodC0wIG0tMiBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKHRydWUpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEVkaXQgUHJvZmlsZVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7b3BlbiAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGJhY2tkcm9wLWJsdXItbWQgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdG9wLTAgbGVmdC0wIHctc2NyZWVuIGgtc2NyZWVuIGJnLWJsYWNrLzYwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcHgtMTAgcHktNCByb3VuZGVkLWxnIHRvcC0xLzNcIj5cclxuICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17Y2hhbmdlVXNlcn0gZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBsLTMgZm9udC1zZW1pYm9sZFwiPlVzZXJuYW1lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyRGV0YWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+c2V0VXNlckRldGFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJsdWVfYnRuXCI+RWRpdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZ3JheV9idG5cIiBvbkNsaWNrPXsoKT0+c2V0T3BlbihmYWxzZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgIHttc2cgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1yZWQtNTAwIHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCBtdC0yIHB4LTIgcHktMSB0ZXh0LWNlbnRlciByb3VuZGVkLWxnIHRleHQtbGdcIj5cclxuICAgICAgICAgICAgICAgICAge21zZ31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWRpdFByb2ZpbGU7XHJcbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VyRGF0YSIsInVzZVJvdXRlciIsIkVkaXRQcm9maWxlIiwib3BlbiIsInNldE9wZW4iLCJ1c2VyIiwicm91dGVyIiwidXNlckRldGFpbCIsInNldFVzZXJEZXRhaWwiLCJtc2ciLCJzZXRNc2ciLCJjaGFuZ2VVc2VyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZWRpdCIsImZldGNoIiwidXNlcklkIiwibWV0aG9kIiwiaGVhZGVycyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInVzZXJuYW1lIiwib2siLCJqc29uIiwidG9rZW4iLCJyZW1vdmVJdGVtIiwic2V0SXRlbSIsInB1c2giLCJzZXRUaW1lb3V0Iiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJlcnJvciIsImZldGNoVXNlckRhdGEiLCJyZXMiLCJidXR0b24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiZGl2IiwiZm9ybSIsIm9uU3VibWl0IiwiZW5jVHlwZSIsInNwYW4iLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/profile/EditProfile.jsx\n"));

/***/ })

});
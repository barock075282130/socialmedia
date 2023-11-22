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

/***/ "(app-pages-browser)/./components/profile/UploadBackground.jsx":
/*!*************************************************!*\
  !*** ./components/profile/UploadBackground.jsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst UploadBackground = (param)=>{\n    let { imgOpen, setImgOpen, user } = param;\n    _s();\n    const [preview, setPreview] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [background, setBackground] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const preImage = (e)=>{\n        const file = e.target.files[0];\n        const blob = new Blob([\n            file\n        ]);\n        const url = URL.createObjectURL(blob);\n        setPreview(url);\n    };\n    const handleCloseUpload = ()=>{\n        setImgOpen(false);\n        setPreview(null);\n    };\n    const handleUpdateBg = async (e)=>{\n        e.preventDefault();\n        setUpload(true);\n        const form = new FormData();\n        form.append(\"background\", background);\n        try {\n            const res = await fetch(\"http://localhost:4000/profile/upload_background/\".concat(user === null || user === void 0 ? void 0 : user.userId), {\n                method: \"PATCH\",\n                headers: {\n                    \"x-access-token\": \"Bearer \" + localStorage.getItem(\"x-access-token\")\n                },\n                body: form\n            });\n            if (res.ok) {\n                const json = await res.json();\n                const token = json.token;\n                localStorage.removeItem(\"x-access-token\");\n                localStorage.setItem(\"x-access-token\", token);\n                router.push(\"/profile/\".concat(user === null || user === void 0 ? void 0 : user.username));\n                setTimeout(()=>window.location.reload(false), 300);\n            }\n        } catch (error) {\n            throw error;\n        } finally{\n            setUpload(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            !imgOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"cursor-pointer\",\n                onClick: ()=>setImgOpen(true),\n                children: \"Update background photo\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\profile\\\\UploadBackground.jsx\",\n                lineNumber: 53,\n                columnNumber: 9\n            }, undefined),\n            imgOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleCloseUpload,\n                        className: \"fixed z-30 left-5 top-5\",\n                        children: \"Close\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\profile\\\\UploadBackground.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-black/50 backdrop-blur-md fixed top-0 left-0 w-screen h-screen z-20 flex justify-center items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: preview && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        src: preview,\n                                        alt: \"img_preview\",\n                                        width: 500,\n                                        height: 500\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\profile\\\\UploadBackground.jsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\profile\\\\UploadBackground.jsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                    onSubmit: handleUpdateBg,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"file\",\n                                            filename: \"background\",\n                                            onChange: preImage\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\profile\\\\UploadBackground.jsx\",\n                                            lineNumber: 78,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            children: \"Upload\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\profile\\\\UploadBackground.jsx\",\n                                            lineNumber: 79,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\profile\\\\UploadBackground.jsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\profile\\\\UploadBackground.jsx\",\n                            lineNumber: 66,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\profile\\\\UploadBackground.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true);\n};\n_s(UploadBackground, \"frCGvlwxyipvUlGwwodPEmxcXno=\");\n_c = UploadBackground;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UploadBackground);\nvar _c;\n$RefreshReg$(_c, \"UploadBackground\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvcHJvZmlsZS9VcGxvYWRCYWNrZ3JvdW5kLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUUrQjtBQUNFO0FBRWpDLE1BQU1FLG1CQUFtQjtRQUFDLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFQyxJQUFJLEVBQUU7O0lBQ3JELE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUVPLFlBQVlDLGNBQWUsR0FBR1IsK0NBQVFBLENBQUM7SUFDL0MsTUFBTVMsV0FBVyxDQUFDQztRQUNoQixNQUFNQyxPQUFPRCxFQUFFRSxNQUFNLENBQUNDLEtBQUssQ0FBQyxFQUFFO1FBQzlCLE1BQU1DLE9BQU8sSUFBSUMsS0FBSztZQUFDSjtTQUFLO1FBQzVCLE1BQU1LLE1BQU1DLElBQUlDLGVBQWUsQ0FBQ0o7UUFDaENSLFdBQVdVO0lBQ2I7SUFDQSxNQUFNRyxvQkFBb0I7UUFDeEJoQixXQUFXO1FBQ1hHLFdBQVc7SUFDYjtJQUNBLE1BQU1jLGlCQUFpQixPQUFPVjtRQUM1QkEsRUFBRVcsY0FBYztRQUNoQkMsVUFBVTtRQUNWLE1BQU1DLE9BQU8sSUFBSUM7UUFDakJELEtBQUtFLE1BQU0sQ0FBQyxjQUFjbEI7UUFDMUIsSUFBSTtZQUNGLE1BQU1tQixNQUFNLE1BQU1DLE1BQ2hCLG1EQUFnRSxPQUFidkIsaUJBQUFBLDJCQUFBQSxLQUFNd0IsTUFBTSxHQUMvRDtnQkFDRUMsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxrQkFDRSxZQUFZQyxhQUFhQyxPQUFPLENBQUM7Z0JBQ3JDO2dCQUNBQyxNQUFNVjtZQUNSO1lBRUYsSUFBSUcsSUFBSVEsRUFBRSxFQUFFO2dCQUNWLE1BQU1DLE9BQU8sTUFBTVQsSUFBSVMsSUFBSTtnQkFDM0IsTUFBTUMsUUFBUUQsS0FBS0MsS0FBSztnQkFDeEJMLGFBQWFNLFVBQVUsQ0FBQztnQkFDeEJOLGFBQWFPLE9BQU8sQ0FBQyxrQkFBa0JGO2dCQUN2Q0csT0FBT0MsSUFBSSxDQUFDLFlBQTJCLE9BQWZwQyxpQkFBQUEsMkJBQUFBLEtBQU1xQyxRQUFRO2dCQUN0Q0MsV0FBVyxJQUFNQyxPQUFPQyxRQUFRLENBQUNDLE1BQU0sQ0FBQyxRQUFRO1lBQ2xEO1FBQ0YsRUFBRSxPQUFPQyxPQUFPO1lBQ2QsTUFBTUE7UUFDUixTQUFVO1lBQ1J4QixVQUFVO1FBQ1o7SUFDRjtJQUNBLHFCQUNFOztZQUNHLENBQUNwQix5QkFDQSw4REFBQzZDO2dCQUFFQyxXQUFVO2dCQUFpQkMsU0FBUyxJQUFNOUMsV0FBVzswQkFBTzs7Ozs7O1lBSWhFRCx5QkFDQzs7a0NBQ0UsOERBQUNnRDt3QkFDQ0QsU0FBUzlCO3dCQUNUNkIsV0FBVTtrQ0FDWDs7Ozs7O2tDQUdELDhEQUFDRzt3QkFBSUgsV0FBVTtrQ0FDYiw0RUFBQ0c7NEJBQUlILFdBQVU7OzhDQUNiLDhEQUFDRzs4Q0FDRTlDLHlCQUNDLDhEQUFDTixtREFBS0E7d0NBQ0pxRCxLQUFLL0M7d0NBQ0xnRCxLQUFJO3dDQUNKQyxPQUFPO3dDQUNQQyxRQUFROzs7Ozs7Ozs7Ozs4Q0FJZCw4REFBQ2hDO29DQUFLaUMsVUFBVXBDOztzREFDZCw4REFBQ3FDOzRDQUFNQyxNQUFLOzRDQUFPQyxVQUFTOzRDQUFhQyxVQUFVbkQ7Ozs7OztzREFDbkQsOERBQUN5QztzREFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXhCO0dBakZNakQ7S0FBQUE7QUFtRk4sK0RBQWVBLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Byb2ZpbGUvVXBsb2FkQmFja2dyb3VuZC5qc3g/OTNkNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgVXBsb2FkQmFja2dyb3VuZCA9ICh7IGltZ09wZW4sIHNldEltZ09wZW4sIHVzZXIgfSkgPT4ge1xyXG4gIGNvbnN0IFtwcmV2aWV3LCBzZXRQcmV2aWV3XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFsgYmFja2dyb3VuZCwgc2V0QmFja2dyb3VuZCBdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBwcmVJbWFnZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2ZpbGVdKTtcclxuICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICBzZXRQcmV2aWV3KHVybCk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZVVwbG9hZCA9ICgpID0+IHtcclxuICAgIHNldEltZ09wZW4oZmFsc2UpO1xyXG4gICAgc2V0UHJldmlldyhudWxsKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZVVwZGF0ZUJnID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldFVwbG9hZCh0cnVlKTtcclxuICAgIGNvbnN0IGZvcm0gPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm0uYXBwZW5kKFwiYmFja2dyb3VuZFwiLCBiYWNrZ3JvdW5kKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIGBodHRwOi8vbG9jYWxob3N0OjQwMDAvcHJvZmlsZS91cGxvYWRfYmFja2dyb3VuZC8ke3VzZXI/LnVzZXJJZH1gLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1ldGhvZDogXCJQQVRDSFwiLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIngtYWNjZXNzLXRva2VuXCI6XHJcbiAgICAgICAgICAgICAgXCJCZWFyZXIgXCIgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIngtYWNjZXNzLXRva2VuXCIpLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvZHk6IGZvcm0sXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBqc29uLnRva2VuO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwieC1hY2Nlc3MtdG9rZW5cIik7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ4LWFjY2Vzcy10b2tlblwiLCB0b2tlbik7XHJcbiAgICAgICAgcm91dGVyLnB1c2goYC9wcm9maWxlLyR7dXNlcj8udXNlcm5hbWV9YCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKGZhbHNlKSwgMzAwKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRVcGxvYWQoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHshaW1nT3BlbiAmJiAoXHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIiBvbkNsaWNrPXsoKSA9PiBzZXRJbWdPcGVuKHRydWUpfT5cclxuICAgICAgICAgIFVwZGF0ZSBiYWNrZ3JvdW5kIHBob3RvXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICApfVxyXG4gICAgICB7aW1nT3BlbiAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xvc2VVcGxvYWR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpeGVkIHotMzAgbGVmdC01IHRvcC01XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFjay81MCBiYWNrZHJvcC1ibHVyLW1kIGZpeGVkIHRvcC0wIGxlZnQtMCB3LXNjcmVlbiBoLXNjcmVlbiB6LTIwIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7cHJldmlldyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cHJldmlld31cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJpbWdfcHJldmlld1wiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezUwMH1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwMH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVVwZGF0ZUJnfT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGZpbGVuYW1lPVwiYmFja2dyb3VuZFwiIG9uQ2hhbmdlPXtwcmVJbWFnZX0gLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24+VXBsb2FkPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVwbG9hZEJhY2tncm91bmQ7XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZVN0YXRlIiwiVXBsb2FkQmFja2dyb3VuZCIsImltZ09wZW4iLCJzZXRJbWdPcGVuIiwidXNlciIsInByZXZpZXciLCJzZXRQcmV2aWV3IiwiYmFja2dyb3VuZCIsInNldEJhY2tncm91bmQiLCJwcmVJbWFnZSIsImUiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJibG9iIiwiQmxvYiIsInVybCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImhhbmRsZUNsb3NlVXBsb2FkIiwiaGFuZGxlVXBkYXRlQmciLCJwcmV2ZW50RGVmYXVsdCIsInNldFVwbG9hZCIsImZvcm0iLCJGb3JtRGF0YSIsImFwcGVuZCIsInJlcyIsImZldGNoIiwidXNlcklkIiwibWV0aG9kIiwiaGVhZGVycyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJib2R5Iiwib2siLCJqc29uIiwidG9rZW4iLCJyZW1vdmVJdGVtIiwic2V0SXRlbSIsInJvdXRlciIsInB1c2giLCJ1c2VybmFtZSIsInNldFRpbWVvdXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImVycm9yIiwicCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJidXR0b24iLCJkaXYiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwiZmlsZW5hbWUiLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/profile/UploadBackground.jsx\n"));

/***/ })

});
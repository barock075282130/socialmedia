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

/***/ "(app-pages-browser)/./components/Feeds.jsx":
/*!******************************!*\
  !*** ./components/Feeds.jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_userContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context/userContext */ \"(app-pages-browser)/./components/context/userContext.jsx\");\n/* harmony import */ var _UserProfile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UserProfile */ \"(app-pages-browser)/./components/UserProfile.jsx\");\n/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Post */ \"(app-pages-browser)/./components/Post.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst OtherUser = (param)=>{\n    let { currentUser, params, path } = param;\n    if (currentUser !== params && path === \"/profile\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UserProfile__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            name: params\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Feeds.jsx\",\n            lineNumber: 12,\n            columnNumber: 12\n        }, undefined);\n    }\n};\n_c = OtherUser;\nconst deletePost = (posts, postId)=>{\n    console.log(postId);\n    const i = posts.filter((post)=>post._id !== postId);\n};\nconst Feeds = ()=>{\n    _s();\n    const [post, setPost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [updatePost, setUpdatePost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const searchParam = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams)();\n    const { user } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_userContext__WEBPACK_IMPORTED_MODULE_4__.userData);\n    const username = searchParam.get(\"name\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const pathName = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();\n    const gotoProfile = (id)=>router.push(\"/profile?name=\".concat(id));\n    const handleDel = async (id)=>{\n        const postData = deletePost(post, id);\n    // if(confirm('delete this post!')){\n    //   try {\n    //     const res = await fetch(`http://localhost:4000/post/del`,{\n    //       method: \"DELETE\",\n    //       headers: {\n    //         \"Content-Type\":\"application/json\",\n    //         \"x-access-token\": \"Bearer \" + localStorage.getItem(\"x-access-token\")\n    //       },\n    //       body: JSON.stringify({\n    //         user: user?.userId,\n    //         postId: id\n    //       })\n    //     })\n    //     if(res.ok){\n    //       const postData = deletePost(post ,id)\n    //       setPost(postData)\n    //     }\n    //   } catch (error) {\n    //     console.log(error)\n    //   }\n    // }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchPost = async ()=>{\n            if (pathName === \"/profile\") {\n                try {\n                    const res = await fetch(\"http://localhost:4000/post/\".concat(username), {\n                        method: \"GET\"\n                    });\n                    const json = await res.json();\n                    setPost(json);\n                } catch (error) {\n                    console.log(error);\n                }\n            }\n            if (pathName === \"/\") {\n                try {\n                    const res = await fetch(\"http://localhost:4000/post/getpost\", {\n                        method: \"GET\"\n                    });\n                    const json = await res.json();\n                    setPost(json);\n                } catch (error) {\n                    console.log(error);\n                }\n            }\n        };\n        fetchPost();\n    }, [\n        username\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(OtherUser, {\n                currentUser: user === null || user === void 0 ? void 0 : user.username,\n                params: username,\n                path: pathName\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Feeds.jsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, undefined),\n            pathName === \"/\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Post__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                post: post,\n                setPost: setPost,\n                updatePost: updatePost,\n                setUpdatePost: setUpdatePost\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Feeds.jsx\",\n                lineNumber: 91,\n                columnNumber: 9\n            }, undefined),\n            post ? post.map((data, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"m-1 border grid grid-cols-11 py-2 rounded-md\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-span-1 flex justify-center\",\n                            onClick: ()=>gotoProfile(data.username),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-10 h-10 bg-white rounded-full border cursor-pointer\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Feeds.jsx\",\n                                lineNumber: 108,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Feeds.jsx\",\n                            lineNumber: 104,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-span-10\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex gap-1 cursor-pointer\",\n                                    onClick: ()=>gotoProfile(data.username),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"font-semibold\",\n                                            children: data.username\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Feeds.jsx\",\n                                            lineNumber: 115,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"font-normal text-gray-400\",\n                                            children: data.address\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Feeds.jsx\",\n                                            lineNumber: 116,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Feeds.jsx\",\n                                    lineNumber: 111,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: data === null || data === void 0 ? void 0 : data.posttext\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Feeds.jsx\",\n                                    lineNumber: 118,\n                                    columnNumber: 17\n                                }, undefined),\n                                (data === null || data === void 0 ? void 0 : data.img) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: data.img,\n                                    alt: data.img,\n                                    width: 100,\n                                    height: 100\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Feeds.jsx\",\n                                    lineNumber: 120,\n                                    columnNumber: 19\n                                }, undefined) : null,\n                                pathName === \"/profile\" && username === (user === null || user === void 0 ? void 0 : user.username) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-center gap-3\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"text-blue-400\",\n                                            children: \"edit\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Feeds.jsx\",\n                                            lineNumber: 130,\n                                            columnNumber: 23\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"text-red-400\",\n                                            onClick: ()=>handleDel(data._id),\n                                            children: \"del\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Feeds.jsx\",\n                                            lineNumber: 131,\n                                            columnNumber: 23\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Feeds.jsx\",\n                                    lineNumber: 129,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Feeds.jsx\",\n                            lineNumber: 110,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, i, true, {\n                    fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Feeds.jsx\",\n                    lineNumber: 100,\n                    columnNumber: 13\n                }, undefined)) : null,\n            post.length === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center mt-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"font-bold text-gray-400 text-4xl\",\n                    children: \"No Post Yet\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Feeds.jsx\",\n                    lineNumber: 141,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\socialapp\\\\client\\\\components\\\\Feeds.jsx\",\n                lineNumber: 140,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Feeds, \"O2E4EL6dNd3zjlp25zDiZT82T1Y=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname\n    ];\n});\n_c1 = Feeds;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Feeds);\nvar _c, _c1;\n$RefreshReg$(_c, \"OtherUser\");\n$RefreshReg$(_c1, \"Feeds\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRmVlZHMuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFd0Q7QUFDekI7QUFDMkM7QUFDekI7QUFDVDtBQUNkO0FBRTFCLE1BQU1VLFlBQVk7UUFBQyxFQUFFQyxXQUFXLEVBQUVDLE1BQU0sRUFBQ0MsSUFBSSxFQUFFO0lBQzdDLElBQUdGLGdCQUFnQkMsVUFBVUMsU0FBUyxZQUFXO1FBQy9DLHFCQUFPLDhEQUFDTCxvREFBV0E7WUFDVE0sTUFBTUY7Ozs7OztJQUVsQjtBQUNGO0tBTk1GO0FBUU4sTUFBTUssYUFBYSxDQUFDQyxPQUFPQztJQUN6QkMsUUFBUUMsR0FBRyxDQUFDRjtJQUNaLE1BQU1HLElBQUlKLE1BQU1LLE1BQU0sQ0FBQyxDQUFDQyxPQUFRQSxLQUFLQyxHQUFHLEtBQUtOO0FBQy9DO0FBRUEsTUFBTU8sUUFBUTs7SUFDWixNQUFNLENBQUNGLE1BQU1HLFFBQVEsR0FBR3ZCLCtDQUFRQSxDQUFDLEVBQUU7SUFDbkMsTUFBTSxDQUFFd0IsWUFBWUMsY0FBZSxHQUFHekIsK0NBQVFBLENBQUM7SUFDL0MsTUFBTTBCLGNBQWN0QixnRUFBZUE7SUFDbkMsTUFBTSxFQUFFdUIsSUFBSSxFQUFFLEdBQUc3QixpREFBVUEsQ0FBQ08sMERBQVFBO0lBQ3BDLE1BQU11QixXQUFXRixZQUFZRyxHQUFHLENBQUM7SUFDakMsTUFBTUMsU0FBUzNCLDBEQUFTQTtJQUN4QixNQUFNNEIsV0FBVzdCLDREQUFXQTtJQUM1QixNQUFNOEIsY0FBYyxDQUFDQyxLQUFPSCxPQUFPSSxJQUFJLENBQUMsaUJBQW9CLE9BQUhEO0lBQ3pELE1BQU1FLFlBQVksT0FBTUY7UUFDdEIsTUFBTUcsV0FBV3ZCLFdBQVdPLE1BQU1hO0lBQ2xDLG9DQUFvQztJQUNwQyxVQUFVO0lBQ1YsaUVBQWlFO0lBQ2pFLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsNkNBQTZDO0lBQzdDLCtFQUErRTtJQUMvRSxXQUFXO0lB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d2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0ZlZWRzLmpzeD9hZmU3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgdXNlUGF0aG5hbWUsIHVzZVJvdXRlciwgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VyRGF0YSB9IGZyb20gXCIuL2NvbnRleHQvdXNlckNvbnRleHRcIjtcclxuaW1wb3J0IFVzZXJQcm9maWxlIGZyb20gXCIuL1VzZXJQcm9maWxlXCI7XHJcbmltcG9ydCBQb3N0IGZyb20gXCIuL1Bvc3RcIjtcclxuXHJcbmNvbnN0IE90aGVyVXNlciA9ICh7IGN1cnJlbnRVc2VyLCBwYXJhbXMscGF0aCB9KSA9PiB7XHJcbiAgaWYoY3VycmVudFVzZXIgIT09IHBhcmFtcyAmJiBwYXRoID09PSAnL3Byb2ZpbGUnKXtcclxuICAgIHJldHVybiA8VXNlclByb2ZpbGUgXHJcbiAgICAgICAgICAgICAgbmFtZT17cGFyYW1zfVxyXG4gICAgICAgICAgICAvPlxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgZGVsZXRlUG9zdCA9IChwb3N0cywgcG9zdElkKSA9PiB7XHJcbiAgY29uc29sZS5sb2cocG9zdElkKVxyXG4gIGNvbnN0IGkgPSBwb3N0cy5maWx0ZXIoKHBvc3QpPT4gcG9zdC5faWQgIT09IHBvc3RJZClcclxufVxyXG5cclxuY29uc3QgRmVlZHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Bvc3QsIHNldFBvc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFsgdXBkYXRlUG9zdCwgc2V0VXBkYXRlUG9zdCBdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3Qgc2VhcmNoUGFyYW0gPSB1c2VTZWFyY2hQYXJhbXMoKTtcclxuICBjb25zdCB7IHVzZXIgfSA9IHVzZUNvbnRleHQodXNlckRhdGEpXHJcbiAgY29uc3QgdXNlcm5hbWUgPSBzZWFyY2hQYXJhbS5nZXQoXCJuYW1lXCIpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHBhdGhOYW1lID0gdXNlUGF0aG5hbWUoKVxyXG4gIGNvbnN0IGdvdG9Qcm9maWxlID0gKGlkKSA9PiByb3V0ZXIucHVzaChgL3Byb2ZpbGU/bmFtZT0ke2lkfWApO1xyXG4gIGNvbnN0IGhhbmRsZURlbCA9IGFzeW5jKGlkKSA9PiB7XHJcbiAgICBjb25zdCBwb3N0RGF0YSA9IGRlbGV0ZVBvc3QocG9zdCAsaWQpXHJcbiAgICAvLyBpZihjb25maXJtKCdkZWxldGUgdGhpcyBwb3N0IScpKXtcclxuICAgIC8vICAgdHJ5IHtcclxuICAgIC8vICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo0MDAwL3Bvc3QvZGVsYCx7XHJcbiAgICAvLyAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAvLyAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAvLyAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6XCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAvLyAgICAgICAgIFwieC1hY2Nlc3MtdG9rZW5cIjogXCJCZWFyZXIgXCIgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIngtYWNjZXNzLXRva2VuXCIpXHJcbiAgICAvLyAgICAgICB9LFxyXG4gICAgLy8gICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgLy8gICAgICAgICB1c2VyOiB1c2VyPy51c2VySWQsXHJcbiAgICAvLyAgICAgICAgIHBvc3RJZDogaWRcclxuICAgIC8vICAgICAgIH0pXHJcbiAgICAvLyAgICAgfSlcclxuICAgIC8vICAgICBpZihyZXMub2spe1xyXG4gICAgLy8gICAgICAgY29uc3QgcG9zdERhdGEgPSBkZWxldGVQb3N0KHBvc3QgLGlkKVxyXG4gICAgLy8gICAgICAgc2V0UG9zdChwb3N0RGF0YSlcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH1cclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoUG9zdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYocGF0aE5hbWUgPT09IGAvcHJvZmlsZWApe1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo0MDAwL3Bvc3QvJHt1c2VybmFtZX1gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgICBzZXRQb3N0KGpzb24pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmKHBhdGhOYW1lID09PSAnLycpe1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9wb3N0L2dldHBvc3RcIiwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgICAgc2V0UG9zdChqc29uKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZldGNoUG9zdCgpO1xyXG4gIH0sIFt1c2VybmFtZV0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8T3RoZXJVc2VyIFxyXG4gICAgICAgIGN1cnJlbnRVc2VyPXt1c2VyPy51c2VybmFtZX1cclxuICAgICAgICBwYXJhbXM9e3VzZXJuYW1lfVxyXG4gICAgICAgIHBhdGg9e3BhdGhOYW1lfVxyXG4gICAgICAvPlxyXG4gICAgICB7cGF0aE5hbWUgPT09ICcvJyYmKFxyXG4gICAgICAgIDxQb3N0XHJcbiAgICAgICAgICBwb3N0PXtwb3N0fVxyXG4gICAgICAgICAgc2V0UG9zdD17c2V0UG9zdH1cclxuICAgICAgICAgIHVwZGF0ZVBvc3Q9e3VwZGF0ZVBvc3R9XHJcbiAgICAgICAgICBzZXRVcGRhdGVQb3N0PXtzZXRVcGRhdGVQb3N0fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHtwb3N0XHJcbiAgICAgICAgPyBwb3N0Lm1hcCgoZGF0YSwgaSkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibS0xIGJvcmRlciBncmlkIGdyaWQtY29scy0xMSBweS0yIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC1zcGFuLTEgZmxleCBqdXN0aWZ5LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBnb3RvUHJvZmlsZShkYXRhLnVzZXJuYW1lKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAgaC0xMCBiZy13aGl0ZSByb3VuZGVkLWZ1bGwgYm9yZGVyIGN1cnNvci1wb2ludGVyXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZ2FwLTEgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBnb3RvUHJvZmlsZShkYXRhLnVzZXJuYW1lKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPntkYXRhLnVzZXJuYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ub3JtYWwgdGV4dC1ncmF5LTQwMFwiPntkYXRhLmFkZHJlc3N9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cD57ZGF0YT8ucG9zdHRleHR9PC9wPlxyXG4gICAgICAgICAgICAgICAge2RhdGE/LmltZyA/IChcclxuICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtkYXRhLmltZ31cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9e2RhdGEuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxMDB9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIHtwYXRoTmFtZSA9PT0gJy9wcm9maWxlJyYmXHJcbiAgICAgICAgICAgICAgICAgIHVzZXJuYW1lID09PSB1c2VyPy51c2VybmFtZSYmKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBnYXAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwXCI+ZWRpdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC00MDBcIiBvbkNsaWNrPXsoKT0+aGFuZGxlRGVsKGRhdGEuX2lkKX0+ZGVsPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKVxyXG4gICAgICAgIDogbnVsbH1cclxuICAgICAge3Bvc3QubGVuZ3RoID09PSAwICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtNVwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtZ3JheS00MDAgdGV4dC00eGxcIj5ObyBQb3N0IFlldDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGZWVkcztcclxuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwidXNlUGF0aG5hbWUiLCJ1c2VSb3V0ZXIiLCJ1c2VTZWFyY2hQYXJhbXMiLCJ1c2VyRGF0YSIsIlVzZXJQcm9maWxlIiwiUG9zdCIsIk90aGVyVXNlciIsImN1cnJlbnRVc2VyIiwicGFyYW1zIiwicGF0aCIsIm5hbWUiLCJkZWxldGVQb3N0IiwicG9zdHMiLCJwb3N0SWQiLCJjb25zb2xlIiwibG9nIiwiaSIsImZpbHRlciIsInBvc3QiLCJfaWQiLCJGZWVkcyIsInNldFBvc3QiLCJ1cGRhdGVQb3N0Iiwic2V0VXBkYXRlUG9zdCIsInNlYXJjaFBhcmFtIiwidXNlciIsInVzZXJuYW1lIiwiZ2V0Iiwicm91dGVyIiwicGF0aE5hbWUiLCJnb3RvUHJvZmlsZSIsImlkIiwicHVzaCIsImhhbmRsZURlbCIsInBvc3REYXRhIiwiZmV0Y2hQb3N0IiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJqc29uIiwiZXJyb3IiLCJtYXAiLCJkYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsInAiLCJhZGRyZXNzIiwicG9zdHRleHQiLCJpbWciLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImJ1dHRvbiIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Feeds.jsx\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/todos";
exports.ids = ["pages/api/todos"];
exports.modules = {

/***/ "(api)/./pages/api/todos.ts":
/*!****************************!*\
  !*** ./pages/api/todos.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// import { NextApiRequest, NextApiResponse } from 'next';\n// export default (req: NextApiRequest, res: NextApiResponse) => {\n//   if (req.method === 'GET') {\n//     try {\n//       const todos = await new Promise<TodoType[]>((resolve, reject) => {\n//         fs.readFile('/data/todos.json', (err, data) => {\n//           if (err) {\n//             return reject(err.message);\n//           }\n//           const todosString = data.toString();\n//           if (!todosString) {\n//             return resolve([]);\n//           }\n//           const todos = JSON.parse(data.toString());\n//           return resolve(todos);\n//         });\n//       });\n//       res.statusCode = 200;\n//       return res.send(todos);\n//     } catch (e) {\n//       console.log(e);\n//       res.statusCode = 500;\n//       res.send(e);\n//     }\n//   }\n//   res.statusCode = 405;\n//   return res.end();\n// };\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res) => {\n  if (req.method === 'GET') {\n    return res.send('헬로우');\n  }\n\n  res.statusCode = 405;\n  console.log(res.statusCode);\n  return res.end();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdG9kb3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSUEsaUVBQWUsQ0FBQ0EsR0FBRCxFQUFzQkMsR0FBdEIsS0FBK0M7QUFDNUQsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsS0FBbkIsRUFBMEI7QUFDeEIsV0FBT0QsR0FBRyxDQUFDRSxJQUFKLENBQVMsS0FBVCxDQUFQO0FBQ0Q7O0FBRURGLEVBQUFBLEdBQUcsQ0FBQ0csVUFBSixHQUFpQixHQUFqQjtBQUNBQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUwsR0FBRyxDQUFDRyxVQUFoQjtBQUNBLFNBQU9ILEdBQUcsQ0FBQ00sR0FBSixFQUFQO0FBQ0QsQ0FSRCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtdG9kby8uL3BhZ2VzL2FwaS90b2Rvcy50cz9kYjg1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcblxuLy8gZXhwb3J0IGRlZmF1bHQgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4vLyAgIGlmIChyZXEubWV0aG9kID09PSAnR0VUJykge1xuLy8gICAgIHRyeSB7XG4vLyAgICAgICBjb25zdCB0b2RvcyA9IGF3YWl0IG5ldyBQcm9taXNlPFRvZG9UeXBlW10+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbi8vICAgICAgICAgZnMucmVhZEZpbGUoJy9kYXRhL3RvZG9zLmpzb24nLCAoZXJyLCBkYXRhKSA9PiB7XG4vLyAgICAgICAgICAgaWYgKGVycikge1xuLy8gICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIubWVzc2FnZSk7XG4vLyAgICAgICAgICAgfVxuXG4vLyAgICAgICAgICAgY29uc3QgdG9kb3NTdHJpbmcgPSBkYXRhLnRvU3RyaW5nKCk7XG4vLyAgICAgICAgICAgaWYgKCF0b2Rvc1N0cmluZykge1xuLy8gICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoW10pO1xuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgICBjb25zdCB0b2RvcyA9IEpTT04ucGFyc2UoZGF0YS50b1N0cmluZygpKTtcbi8vICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0b2Rvcyk7XG4vLyAgICAgICAgIH0pO1xuLy8gICAgICAgfSk7XG4vLyAgICAgICByZXMuc3RhdHVzQ29kZSA9IDIwMDtcbi8vICAgICAgIHJldHVybiByZXMuc2VuZCh0b2Rvcyk7XG4vLyAgICAgfSBjYXRjaCAoZSkge1xuLy8gICAgICAgY29uc29sZS5sb2coZSk7XG4vLyAgICAgICByZXMuc3RhdHVzQ29kZSA9IDUwMDtcbi8vICAgICAgIHJlcy5zZW5kKGUpO1xuLy8gICAgIH1cbi8vICAgfVxuXG4vLyAgIHJlcy5zdGF0dXNDb2RlID0gNDA1O1xuLy8gICByZXR1cm4gcmVzLmVuZCgpO1xuLy8gfTtcblxuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuXG5leHBvcnQgZGVmYXVsdCAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XG4gICAgcmV0dXJuIHJlcy5zZW5kKCftl6zroZzsmrAnKTtcbiAgfVxuXG4gIHJlcy5zdGF0dXNDb2RlID0gNDA1O1xuICBjb25zb2xlLmxvZyhyZXMuc3RhdHVzQ29kZSk7XG4gIHJldHVybiByZXMuZW5kKCk7XG59O1xuIl0sIm5hbWVzIjpbInJlcSIsInJlcyIsIm1ldGhvZCIsInNlbmQiLCJzdGF0dXNDb2RlIiwiY29uc29sZSIsImxvZyIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/todos.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/todos.ts"));
module.exports = __webpack_exports__;

})();
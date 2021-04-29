webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @redux-saga/core/effects */ "./node_modules/@redux-saga/core/dist/redux-saga-effects.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logIn),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logOut),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogin),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogOut),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(userSaga);




function logInAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/login', data);
}

function logIn(action) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logIn$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);

        case 3:
          _context.next = 5;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: 'LOG_IN_SUCCESS' //    data:result.data

          });

        case 5:
          _context.next = 11;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          _context.next = 11;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: 'LOG_IN_FAILURE',
            data: _context.t0.data
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 7]]);
}

function logOutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/logout');
}

function logOut() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logOut$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);

        case 3:
          _context2.next = 5;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: 'LOG_OUT_REQUEST'
          });

        case 5:
          _context2.next = 7;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: 'LOG_OUT_SUCCESS' //  data:result.data

          });

        case 7:
          _context2.next = 13;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 13;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: 'LOG_OUT_FAILURE',
            data: _context2.t0.data
          });

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 9]]);
}

function watchLogin() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogin$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])('LOG_IN_REQUEST', logIn);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}

function watchLogOut() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogOut$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])('LOG_OUT_REQUEST', logOut);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}

function userSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function userSaga$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogin), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogOut)]);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcyJdLCJuYW1lcyI6WyJsb2dJbiIsImxvZ091dCIsIndhdGNoTG9naW4iLCJ3YXRjaExvZ091dCIsInVzZXJTYWdhIiwibG9nSW5BUEkiLCJkYXRhIiwiYXhpb3MiLCJwb3N0IiwiYWN0aW9uIiwiZGVsYXkiLCJwdXQiLCJ0eXBlIiwibG9nT3V0QVBJIiwidGFrZUxhdGVzdCIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBT1lBLEs7bUdBb0JFQyxNO21HQXNCSkMsVTttR0FHQUMsVzttR0FJZUMsUTs7QUF4RHpCO0FBQ0E7O0FBRUEsU0FBU0MsUUFBVCxDQUFrQkMsSUFBbEIsRUFBd0I7QUFDcEIsU0FBT0MsNENBQUssQ0FBQ0MsSUFBTixDQUFXLFlBQVgsRUFBeUJGLElBQXpCLENBQVA7QUFDRDs7QUFFRCxTQUFVTixLQUFWLENBQWdCUyxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdHLGlCQUFNQyxzRUFBSyxDQUFDLElBQUQsQ0FBWDs7QUFISDtBQUFBO0FBSUcsaUJBQU1DLG9FQUFHLENBQUM7QUFDTkMsZ0JBQUksRUFBQyxnQkFEQyxDQUVUOztBQUZTLFdBQUQsQ0FBVDs7QUFKSDtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTTyxpQkFBTUQsb0VBQUcsQ0FBQztBQUNOQyxnQkFBSSxFQUFDLGdCQURDO0FBRU5OLGdCQUFJLEVBQUMsWUFBSUE7QUFGSCxXQUFELENBQVQ7O0FBVFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBZ0JBLFNBQVNPLFNBQVQsR0FBcUI7QUFDakIsU0FBT04sNENBQUssQ0FBQ0MsSUFBTixDQUFXLGFBQVgsQ0FBUDtBQUNEOztBQUVELFNBQVVQLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFUSxpQkFBTVMsc0VBQUssQ0FBQyxJQUFELENBQVg7O0FBRlI7QUFBQTtBQUdRLGlCQUFNQyxvRUFBRyxDQUFDO0FBQ05DLGdCQUFJLEVBQUM7QUFEQyxXQUFELENBQVQ7O0FBSFI7QUFBQTtBQU9HLGlCQUFNRCxvRUFBRyxDQUFDO0FBQ05DLGdCQUFJLEVBQUMsaUJBREMsQ0FFUDs7QUFGTyxXQUFELENBQVQ7O0FBUEg7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWU8saUJBQU1ELG9FQUFHLENBQUM7QUFDTkMsZ0JBQUksRUFBQyxpQkFEQztBQUVOTixnQkFBSSxFQUFDLGFBQUlBO0FBRkgsV0FBRCxDQUFUOztBQVpQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQXNCSixTQUFVSixVQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNJLGlCQUFNWSwyRUFBVSxDQUFDLGdCQUFELEVBQW1CZCxLQUFuQixDQUFoQjs7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFHQSxTQUFVRyxXQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNJLGlCQUFNVywyRUFBVSxDQUFDLGlCQUFELEVBQW1CYixNQUFuQixDQUFoQjs7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJZSxTQUFVRyxRQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNYLGlCQUFNVyxvRUFBRyxDQUFDLENBQ1RDLHFFQUFJLENBQUNkLFVBQUQsQ0FESyxFQUVUYyxxRUFBSSxDQUFDYixXQUFELENBRkssQ0FBRCxDQUFUOztBQURXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYTk0NzJlZTk1Y2RjNmRhMGE2ZDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFsbCwgZm9yaywgcHV0LCBkZWxheSwgdGFrZUxhdGVzdCB9IGZyb20gXCJAcmVkdXgtc2FnYS9jb3JlL2VmZmVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuZnVuY3Rpb24gbG9nSW5BUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvbG9naW4nLCBkYXRhKVxyXG4gIH0gXHJcbiAgXHJcbiAgZnVuY3Rpb24qIGxvZ0luKGFjdGlvbikgeyAgICAvLyDsnbzroZwg65Ok7Ja07Ji0XHJcbiAgICAgIHRyeSB7XHJcbiAgLy8gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSxhY3Rpb24uZGF0YSkgLy/ssqvrsojsqLAg7J6Q66as64qUIO2VqOyImOqzoCDrgpjrqLjsp4DripQg7J247IiY65OkIFxyXG4gICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgIHR5cGU6J0xPR19JTl9TVUNDRVNTJyxcclxuICAgICAgLy8gICAgZGF0YTpyZXN1bHQuZGF0YVxyXG4gICAgICB9KTtcclxuICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgIHR5cGU6J0xPR19JTl9GQUlMVVJFJyxcclxuICAgICAgICAgICAgIGRhdGE6ZXJyLmRhdGFcclxuICAgICAgICAgfSlcclxuICAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGZ1bmN0aW9uIGxvZ091dEFQSSgpIHtcclxuICAgICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvbG9nb3V0JylcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiogbG9nT3V0KCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTonTE9HX09VVF9SRVFVRVNUJyxcclxuICAgICAgICAgICAgIH0pO1xyXG4gICAgICAvLyAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dPdXRBUEkpXHJcbiAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgIHR5cGU6J0xPR19PVVRfU1VDQ0VTUycsXHJcbiAgICAgICAgICAvLyAgZGF0YTpyZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgICAgdHlwZTonTE9HX09VVF9GQUlMVVJFJyxcclxuICAgICAgICAgICAgICAgZGF0YTplcnIuZGF0YVxyXG4gICAgICAgICAgIH0pXHJcbiAgICAgICB9XHJcbiAgICB9XHJcbiAgXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ2luKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdCgnTE9HX0lOX1JFUVVFU1QnLCBsb2dJbik7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdCgnTE9HX09VVF9SRVFVRVNUJyxsb2dPdXQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgZm9yayh3YXRjaExvZ2luKSxcclxuICAgICBmb3JrKHdhdGNoTG9nT3V0KSxcclxuICAgIF0pXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9
webpackHotUpdate(5,{

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(554);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(27);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(561);

var _App2 = _interopRequireDefault(_App);

var _Header = __webpack_require__(562);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/harrislabel/Documents/gosofi/gosofi_webpage/pages/about.js?entry';

exports.default = function (props) {
  return _react2.default.createElement(_App2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(_Header2.default, { pathname: props.url.pathname, __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), _react2.default.createElement('p', {
    'data-jsx': 3793326599,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, 'Test About Page'), _react2.default.createElement(_style2.default, {
    styleId: 3793326599,
    css: 'p[data-jsx="3793326599"]{margin-top:50px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2Fib3V0LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9nQixBQUd5QixnQkFDbEIiLCJmaWxlIjoicGFnZXMvYWJvdXQuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2hhcnJpc2xhYmVsL0RvY3VtZW50cy9nb3NvZmkvZ29zb2ZpX3dlYnBhZ2UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwIGZyb20gJy4uL2NvbXBvbmVudHMvQXBwJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcidcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiAoXG4gIDxBcHA+XG4gICAgPEhlYWRlciBwYXRobmFtZT17cHJvcHMudXJsLnBhdGhuYW1lfSAvPlxuICAgIDxwPlRlc3QgQWJvdXQgUGFnZTwvcD5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBwe1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L0FwcD5cbilcbiJdfQ== */\n/*@ sourceURL=pages/about.js?entry */'
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2Fib3V0LmpzIl0sIm5hbWVzIjpbIkFwcCIsIkhlYWRlciIsInByb3BzIiwidXJsIiwicGF0aG5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFFUDs7Ozs7Ozs7a0JBQWUsVUFBQSxBQUFDLE9BQUQ7eUJBQ2IsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxBQUFDLGtDQUFPLFVBQVUsTUFBQSxBQUFNLElBQXhCLEFBQTRCO2dCQUE1QjtrQkFERixBQUNFLEFBQ0E7QUFEQTtzQkFDQSxjQUFBO2dCQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FGRixBQUVFO2FBRkY7U0FEYSxBQUNiO0FBQUE7QUFERiIsImZpbGUiOiJhYm91dC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvaGFycmlzbGFiZWwvRG9jdW1lbnRzL2dvc29maS9nb3NvZmlfd2VicGFnZSJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/harrislabel/Documents/gosofi/gosofi_webpage/pages/about.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/harrislabel/Documents/gosofi/gosofi_webpage/pages/about.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(109)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/about")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5hM2RhNGI4MjE5MWM1N2FjYTM2NC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWJvdXQuanM/MzE3OWY0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwIGZyb20gJy4uL2NvbXBvbmVudHMvQXBwJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcidcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiAoXG4gIDxBcHA+XG4gICAgPEhlYWRlciBwYXRobmFtZT17cHJvcHMudXJsLnBhdGhuYW1lfSAvPlxuICAgIDxwPlRlc3QgQWJvdXQgUGFnZTwvcD5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBwe1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L0FwcD5cbilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2Fib3V0LmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7Ozs7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBQUE7QUFBQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
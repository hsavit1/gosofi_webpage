'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/harrislabel/Documents/gosofi/gosofi_webpage/components/Header.js';

exports.default = function (_ref) {
  var pathname = _ref.pathname;
  return _react2.default.createElement('header', {
    'data-jsx': 44594221,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement('div', {
    'data-jsx': 44594221,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('a', { className: pathname === '/' && 'is-active', 'data-jsx': 44594221,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, 'GoSOFI'))), _react2.default.createElement('div', {
    'data-jsx': 44594221,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/about', __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement('a', { className: pathname === '/about' && 'is-active', 'data-jsx': 44594221,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, 'About')), _react2.default.createElement(_link2.default, { prefetch: true, href: '/team', __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement('a', { className: pathname === '/team' && 'is-active', 'data-jsx': 44594221,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, 'Team')), _react2.default.createElement(_link2.default, { prefetch: true, href: '/blog', __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, _react2.default.createElement('a', { className: pathname === '/blog' && 'is-active', 'data-jsx': 44594221,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, 'Blog')), _react2.default.createElement(_link2.default, { prefetch: true, href: '/donate', __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, _react2.default.createElement('a', { className: pathname === '/donate' && 'is-active', 'data-jsx': 44594221,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, 'Donate'))), _react2.default.createElement(_style2.default, {
    styleId: 44594221,
    css: 'header[data-jsx="44594221"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:25px}a[data-jsx="44594221"]{font-size:14px;margin-right:25px;text-decoration:none}a[data-jsx="44594221"]:hover{color:rgba(34,186,217,.75)}.rightJustified[data-jsx="44594221"]{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.is-active[data-jsx="44594221"]{text-decoration:underline}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCZ0IsQUFHc0IsQUFLRSxBQUtlLEFBR1AsQUFHRyxlQVZSLFdBV3BCLENBTkEsTUFKdUIscUJBQ3ZCLG9CQVBnQyx1QkFhaEMsNEZBWnFCLG1CQUNyQiIsImZpbGUiOiJjb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvaGFycmlzbGFiZWwvRG9jdW1lbnRzL2dvc29maS9nb3NvZmlfd2VicGFnZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuZXhwb3J0IGRlZmF1bHQgKHsgcGF0aG5hbWUgfSkgPT4gKFxuICA8aGVhZGVyPlxuPGRpdj5cbiAgICA8TGluayBwcmVmZXRjaCBocmVmPScvJz5cbiAgICAgIDxhIGNsYXNzTmFtZT17cGF0aG5hbWUgPT09ICcvJyAmJiAnaXMtYWN0aXZlJ30+R29TT0ZJPC9hPlxuICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgIDxMaW5rIHByZWZldGNoIGhyZWY9Jy9hYm91dCc+XG4gICAgICA8YSBjbGFzc05hbWU9e3BhdGhuYW1lID09PSAnL2Fib3V0JyAmJiAnaXMtYWN0aXZlJ30+QWJvdXQ8L2E+XG4gICAgPC9MaW5rPlxuXG4gICAgPExpbmsgcHJlZmV0Y2ggaHJlZj0nL3RlYW0nPlxuICAgICAgPGEgY2xhc3NOYW1lPXtwYXRobmFtZSA9PT0gJy90ZWFtJyAmJiAnaXMtYWN0aXZlJ30+VGVhbTwvYT5cbiAgICA8L0xpbms+XG5cbiAgICA8TGluayBwcmVmZXRjaCBocmVmPScvYmxvZyc+XG4gICAgICA8YSBjbGFzc05hbWU9e3BhdGhuYW1lID09PSAnL2Jsb2cnICYmICdpcy1hY3RpdmUnfT5CbG9nPC9hPlxuICAgIDwvTGluaz5cbiAgICA8TGluayBwcmVmZXRjaCBocmVmPScvZG9uYXRlJz5cbiAgICAgIDxhIGNsYXNzTmFtZT17cGF0aG5hbWUgPT09ICcvZG9uYXRlJyAmJiAnaXMtYWN0aXZlJ30+RG9uYXRlPC9hPlxuICAgIDwvTGluaz5cbjwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjVweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuICAgICAgYTpob3ZlcntcbiAgICAgICAgY29sb3I6IHJnYmEoMzQsIDE4NiwgMjE3LCAuNzUpO1xuICAgICAgfVxuICAgICAgLnJpZ2h0SnVzdGlmaWVke1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIH1cbiAgICAgIC5pcy1hY3RpdmUge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvaGVhZGVyPlxuKVxuIl19 */\n/*@ sourceURL=components/Header.js */'
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJwYXRobmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBRVA7Ozs7Ozs7O2tCQUFlLGdCQUFBO01BQUEsQUFBRyxnQkFBSCxBQUFHO3lCQUNoQixjQUFBO2dCQUFBOztnQkFBQTtrQkFBQSxBQUNGO0FBREU7QUFBQSxHQUFBLGtCQUNGLGNBQUE7Z0JBQUE7O2dCQUFBO2tCQUFBLEFBQ0k7QUFESjtBQUFBLHFCQUNJLEFBQUMsZ0NBQUssVUFBTixNQUFlLE1BQWYsQUFBb0I7Z0JBQXBCO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLE9BQUcsV0FBVyxhQUFBLEFBQWEsT0FBM0IsQUFBa0MseUJBQWxDOztnQkFBQTtrQkFBQTtBQUFBO0tBSEosQUFDRixBQUNJLEFBQ0UsQUFHRiw2QkFBQSxjQUFBO2dCQUFBOztnQkFBQTtrQkFBQSxBQUNBO0FBREE7QUFBQSxxQkFDQSxBQUFDLGdDQUFLLFVBQU4sTUFBZSxNQUFmLEFBQW9CO2dCQUFwQjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxPQUFHLFdBQVcsYUFBQSxBQUFhLFlBQTNCLEFBQXVDLHlCQUF2Qzs7Z0JBQUE7a0JBQUE7QUFBQTtLQUZGLEFBQ0EsQUFDRSxBQUdGLDJCQUFBLEFBQUMsZ0NBQUssVUFBTixNQUFlLE1BQWYsQUFBb0I7Z0JBQXBCO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLE9BQUcsV0FBVyxhQUFBLEFBQWEsV0FBM0IsQUFBc0MseUJBQXRDOztnQkFBQTtrQkFBQTtBQUFBO0tBTkYsQUFLQSxBQUNFLEFBR0YsMEJBQUEsQUFBQyxnQ0FBSyxVQUFOLE1BQWUsTUFBZixBQUFvQjtnQkFBcEI7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsT0FBRyxXQUFXLGFBQUEsQUFBYSxXQUEzQixBQUFzQyx5QkFBdEM7O2dCQUFBO2tCQUFBO0FBQUE7S0FWRixBQVNBLEFBQ0UsQUFFRiwwQkFBQSxBQUFDLGdDQUFLLFVBQU4sTUFBZSxNQUFmLEFBQW9CO2dCQUFwQjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxPQUFHLFdBQVcsYUFBQSxBQUFhLGFBQTNCLEFBQXdDLHlCQUF4Qzs7Z0JBQUE7a0JBQUE7QUFBQTtLQW5CSixBQU1FLEFBWUEsQUFDRTthQW5CSjtTQURhLEFBQ2I7QUFBQTtBQURGIiwiZmlsZSI6IkhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvaGFycmlzbGFiZWwvRG9jdW1lbnRzL2dvc29maS9nb3NvZmlfd2VicGFnZSJ9
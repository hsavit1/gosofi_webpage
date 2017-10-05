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

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/harrislabel/Documents/gosofi/gosofi_webpage/components/Header.js';

exports.default = function (_ref) {
  var pathname = _ref.pathname;
  return _react2.default.createElement('header', {
    'data-jsx': 177583,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('link', { href: '/static/css/Header.css', rel: 'stylesheet', 'data-jsx': 177583,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', 'data-jsx': 177583,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  })), _react2.default.createElement('div', { className: 'Header', 'data-jsx': 177583,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement('div', { className: 'LogoContainer', 'data-jsx': 177583,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement('a', { className: pathname === '/', 'data-jsx': 177583,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement('img', { className: 'Logo', src: '../static/go-sofi-tag.png', 'data-jsx': 177583,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  })))), _react2.default.createElement('div', { className: 'RightJustifiedMenu', 'data-jsx': 177583,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/about', __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, _react2.default.createElement('a', { className: pathname === '/about' && 'is-active', 'data-jsx': 177583,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, 'About')), _react2.default.createElement(_link2.default, { prefetch: true, href: '/team', __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, _react2.default.createElement('a', { className: pathname === '/team' && 'is-active', 'data-jsx': 177583,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, 'Team')), _react2.default.createElement(_link2.default, { prefetch: true, href: '/blog', __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, _react2.default.createElement('a', { className: pathname === '/blog' && 'is-active', 'data-jsx': 177583,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, 'Blog')), _react2.default.createElement(_link2.default, { prefetch: true, href: '/donate', __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, _react2.default.createElement('a', { className: pathname === '/donate' && 'is-active', 'data-jsx': 177583,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, 'Donate')))), _react2.default.createElement(_style2.default, {
    styleId: 177583,
    css: '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1DWSIsImZpbGUiOiJjb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvaGFycmlzbGFiZWwvRG9jdW1lbnRzL2dvc29maS9nb3NvZmlfd2VicGFnZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuXG5leHBvcnQgZGVmYXVsdCAoeyBwYXRobmFtZSB9KSA9PiAoXG5cbjxoZWFkZXI+XG4gIDxIZWFkPlxuICAgIDxsaW5rIGhyZWY9XCIvc3RhdGljL2Nzcy9IZWFkZXIuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgPC9IZWFkPlxuXG4gIDxkaXYgY2xhc3NOYW1lPVwiSGVhZGVyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJMb2dvQ29udGFpbmVyXCI+XG4gICAgICA8TGluayBwcmVmZXRjaCBocmVmPScvJz5cbiAgICAgICAgPGEgY2xhc3NOYW1lPXtwYXRobmFtZSA9PT0gJy8nfT48aW1nICBjbGFzc05hbWU9XCJMb2dvXCJzcmM9XCIuLi9zdGF0aWMvZ28tc29maS10YWcucG5nXCIgLz48L2E+XG4gICAgICA8L0xpbms+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJSaWdodEp1c3RpZmllZE1lbnVcIj5cbiAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9Jy9hYm91dCc+XG4gICAgICAgIDxhIGNsYXNzTmFtZT17cGF0aG5hbWUgPT09ICcvYWJvdXQnICYmICdpcy1hY3RpdmUnfT5BYm91dDwvYT5cbiAgICAgIDwvTGluaz5cblxuICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj0nL3RlYW0nPlxuICAgICAgICA8YSBjbGFzc05hbWU9e3BhdGhuYW1lID09PSAnL3RlYW0nICYmICdpcy1hY3RpdmUnfT5UZWFtPC9hPlxuICAgICAgPC9MaW5rPlxuICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj0nL2Jsb2cnPlxuICAgICAgICA8YSBjbGFzc05hbWU9e3BhdGhuYW1lID09PSAnL2Jsb2cnICYmICdpcy1hY3RpdmUnfT5CbG9nPC9hPlxuICAgICAgPC9MaW5rPlxuICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj0nL2RvbmF0ZSc+XG4gICAgICAgIDxhIGNsYXNzTmFtZT17cGF0aG5hbWUgPT09ICcvZG9uYXRlJyAmJiAnaXMtYWN0aXZlJ30+RG9uYXRlPC9hPlxuICAgICAgPC9MaW5rPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuPHN0eWxlIGpzeD57YFxuYH08L3N0eWxlPlxuXG5cbjwvaGVhZGVyPlxuXG5cbilcbiJdfQ== */\n/*@ sourceURL=components/Header.js */'
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJIZWFkIiwicGF0aG5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFHUDs7Ozs7Ozs7a0JBQWUsZ0JBQUE7TUFBQSxBQUFHLGdCQUFILEFBQUc7eUJBRWxCLGNBQUE7Z0JBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUEsNkNBQ1EsTUFBTixBQUFXLDBCQUF5QixLQUFwQyxBQUF3QywwQkFBeEM7O2dCQUFBO2tCQURGLEFBQ0UsQUFDQztBQUREOzhDQUNPLE1BQU4sQUFBVyxZQUFXLFNBQXRCLEFBQThCLHFEQUE5Qjs7Z0JBQUE7a0JBSEwsQUFDRSxBQUVHLEFBR0g7QUFIRzt1QkFHSCxjQUFBLFNBQUssV0FBTCxBQUFlLHNCQUFmOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZSw2QkFBZjs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO3FCQUNFLEFBQUMsZ0NBQUssVUFBTixNQUFlLE1BQWYsQUFBb0I7Z0JBQXBCO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLE9BQUcsV0FBVyxhQUFkLEFBQTJCLGlCQUEzQjs7Z0JBQUE7a0JBQUEsQUFBZ0M7QUFBaEM7NENBQXNDLFdBQU4sQUFBZ0IsUUFBTSxLQUF0QixBQUEwQix5Q0FBMUI7O2dCQUFBO2tCQUh0QyxBQUNFLEFBQ0UsQUFDRSxBQUFnQyxBQUdwQztBQUhvQzt5QkFHcEMsY0FBQSxTQUFLLFdBQUwsQUFBZSxrQ0FBZjs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO3FCQUNFLEFBQUMsZ0NBQUssVUFBTixNQUFlLE1BQWYsQUFBb0I7Z0JBQXBCO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLE9BQUcsV0FBVyxhQUFBLEFBQWEsWUFBM0IsQUFBdUMseUJBQXZDOztnQkFBQTtrQkFBQTtBQUFBO0tBRkosQUFDRSxBQUNFLEFBR0YsMkJBQUEsQUFBQyxnQ0FBSyxVQUFOLE1BQWUsTUFBZixBQUFvQjtnQkFBcEI7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsT0FBRyxXQUFXLGFBQUEsQUFBYSxXQUEzQixBQUFzQyx5QkFBdEM7O2dCQUFBO2tCQUFBO0FBQUE7S0FOSixBQUtFLEFBQ0UsQUFFRiwwQkFBQSxBQUFDLGdDQUFLLFVBQU4sTUFBZSxNQUFmLEFBQW9CO2dCQUFwQjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxPQUFHLFdBQVcsYUFBQSxBQUFhLFdBQTNCLEFBQXNDLHlCQUF0Qzs7Z0JBQUE7a0JBQUE7QUFBQTtLQVRKLEFBUUUsQUFDRSxBQUVGLDBCQUFBLEFBQUMsZ0NBQUssVUFBTixNQUFlLE1BQWYsQUFBb0I7Z0JBQXBCO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLE9BQUcsV0FBVyxhQUFBLEFBQWEsYUFBM0IsQUFBd0MseUJBQXhDOztnQkFBQTtrQkFBQTtBQUFBO0tBeEJSLEFBTUUsQUFNRSxBQVdFLEFBQ0U7YUF4QlI7U0FGZSxBQUVmO0FBQUE7QUFGQSIsImZpbGUiOiJIZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2hhcnJpc2xhYmVsL0RvY3VtZW50cy9nb3NvZmkvZ29zb2ZpX3dlYnBhZ2UifQ==
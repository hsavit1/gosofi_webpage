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
    'data-jsx': 4048371343,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('title', {
    'data-jsx': 4048371343,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, 'My page title'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', 'data-jsx': 4048371343,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  })), _react2.default.createElement('div', { className: 'Header', 'data-jsx': 4048371343,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement('div', { className: 'LogoContainer', 'data-jsx': 4048371343,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement('a', { className: pathname === '/', 'data-jsx': 4048371343,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement('img', { className: 'Logo', src: '../static/go-sofi-tag.png', 'data-jsx': 4048371343,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  })))), _react2.default.createElement('div', { className: 'RightJustifiedMenu', 'data-jsx': 4048371343,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/about', __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, _react2.default.createElement('a', { className: pathname === '/about' && 'is-active', 'data-jsx': 4048371343,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, 'About')), _react2.default.createElement(_link2.default, { prefetch: true, href: '/team', __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, _react2.default.createElement('a', { className: pathname === '/team' && 'is-active', 'data-jsx': 4048371343,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, 'Team')), _react2.default.createElement(_link2.default, { prefetch: true, href: '/blog', __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, _react2.default.createElement('a', { className: pathname === '/blog' && 'is-active', 'data-jsx': 4048371343,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, 'Blog')), _react2.default.createElement(_link2.default, { prefetch: true, href: '/donate', __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, _react2.default.createElement('a', { className: pathname === '/donate' && 'is-active', 'data-jsx': 4048371343,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, 'Donate')))), _react2.default.createElement(_style2.default, {
    styleId: 4048371343,
    css: 'header[data-jsx="4048371343"]{position:fixed;z-index:1;width:100%;box-sizing:border-box;top:0;left:0;height:60px;background-color:rgb(32,35,42)}.Header[data-jsx="4048371343"]{height:60px;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding-left:20px;padding-right:20px}.RightJustifiedMenu[data-jsx="4048371343"] a[data-jsx="4048371343"]{margin-right:45px}.LogoContainer[data-jsx="4048371343"]{padding-left:45px}.Logo[data-jsx="4048371343"]{max-height:40px;padding-top:15px}a[data-jsx="4048371343"]{font-size:16px;text-decoration:none;color:white;padding-bottom:18px;font-weight:300;font-style:normal}a[data-jsx="4048371343"]:hover{color:#0099ff}.rightJustified[data-jsx="4048371343"]{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.is-active[data-jsx="4048371343"]{border-bottom:3px solid #0099ff;color:#0099ff}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDWSxBQUdvQixBQVVILEFBV00sQUFJQSxBQUdGLEFBS0QsQUFRRCxBQUdXLEFBR08sWUFwQ1YsRUErQnhCLENBekNZLEFBaUNXLENBTEosRUFObkIsQUFHQSxPQXhCYSxPQThDRyxDQWpCaEIsQ0FuQmUsRUFUUyxBQWdDVixVQWNkLEVBYnNCLFVBaENkLE1BQ0MsSUFnQ1MsR0EvQkosWUFDcUIsQ0ErQmYsYUFPcEIsS0FOQSxNQTFCcUIsTUFMckIsdUZBTWdDLG1IQUdaLGtCQUNDLG1CQUNyQiIsImZpbGUiOiJjb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvaGFycmlzbGFiZWwvRG9jdW1lbnRzL2dvc29maS9nb3NvZmlfd2VicGFnZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuXG5leHBvcnQgZGVmYXVsdCAoeyBwYXRobmFtZSB9KSA9PiAoXG5cbjxoZWFkZXI+XG48SGVhZD5cbiAgICAgPHRpdGxlPk15IHBhZ2UgdGl0bGU8L3RpdGxlPlxuICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICA8L0hlYWQ+XG5cbjxkaXYgY2xhc3NOYW1lPVwiSGVhZGVyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJMb2dvQ29udGFpbmVyXCI+XG4gICAgICA8TGluayBwcmVmZXRjaCBocmVmPScvJz5cbiAgICAgICAgPGEgY2xhc3NOYW1lPXtwYXRobmFtZSA9PT0gJy8nfT48aW1nICBjbGFzc05hbWU9XCJMb2dvXCJzcmM9XCIuLi9zdGF0aWMvZ28tc29maS10YWcucG5nXCIgLz48L2E+XG4gICAgICA8L0xpbms+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJSaWdodEp1c3RpZmllZE1lbnVcIj5cbiAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9Jy9hYm91dCc+XG4gICAgICAgIDxhIGNsYXNzTmFtZT17cGF0aG5hbWUgPT09ICcvYWJvdXQnICYmICdpcy1hY3RpdmUnfT5BYm91dDwvYT5cbiAgICAgIDwvTGluaz5cblxuICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj0nL3RlYW0nPlxuICAgICAgICA8YSBjbGFzc05hbWU9e3BhdGhuYW1lID09PSAnL3RlYW0nICYmICdpcy1hY3RpdmUnfT5UZWFtPC9hPlxuICAgICAgPC9MaW5rPlxuICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj0nL2Jsb2cnPlxuICAgICAgICA8YSBjbGFzc05hbWU9e3BhdGhuYW1lID09PSAnL2Jsb2cnICYmICdpcy1hY3RpdmUnfT5CbG9nPC9hPlxuICAgICAgPC9MaW5rPlxuICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj0nL2RvbmF0ZSc+XG4gICAgICAgIDxhIGNsYXNzTmFtZT17cGF0aG5hbWUgPT09ICcvZG9uYXRlJyAmJiAnaXMtYWN0aXZlJ30+RG9uYXRlPC9hPlxuICAgICAgPC9MaW5rPlxuXG5cblxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG48c3R5bGUganN4PntgXG4gIGhlYWRlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDE7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMyLCAzNSwgNDIpO1xuICB9XG4gIC5IZWFkZXJ7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAvLyBtYXJnaW4tcmlnaHQ6IDI5cHg7XG4gICAgLy8gbWFyZ2luLWxlZnQ6IDc0cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIH1cbiAgLlJpZ2h0SnVzdGlmaWVkTWVudSBhe1xuICAgIG1hcmdpbi1yaWdodDogNDVweDtcblxuICB9XG4gIC5Mb2dvQ29udGFpbmVye1xuICAgIHBhZGRpbmctbGVmdDogNDVweDtcbiAgfVxuICAuTG9nb3tcbiAgICBtYXgtaGVpZ2h0OiA0MHB4O1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuXG4gIH1cbiAgYSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZy1ib3R0b206IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gIH1cbiAgYTpob3ZlcntcbiAgICBjb2xvcjogIzAwOTlmZjtcbiAgfVxuICAucmlnaHRKdXN0aWZpZWR7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxuICAuaXMtYWN0aXZlIHtcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzAwOTlmZjtcbiAgICBjb2xvcjogIzAwOTlmZjtcbiAgfVxuYH08L3N0eWxlPlxuXG5cbjwvaGVhZGVyPlxuXG5cbilcbiJdfQ== */\n/*@ sourceURL=components/Header.js */'
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJIZWFkIiwicGF0aG5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFHUDs7Ozs7Ozs7a0JBQWUsZ0JBQUE7TUFBQSxBQUFHLGdCQUFILEFBQUc7eUJBRWxCLGNBQUE7Z0JBQUE7O2dCQUFBO2tCQUFBLEFBQ0E7QUFEQTtBQUFBLEdBQUEsa0JBQ0EsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDSztBQURMO0FBQUEscUJBQ0ssY0FBQTtnQkFBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBREwsQUFDSyxBQUNBLDBEQUFNLE1BQU4sQUFBVyxZQUFXLFNBQXRCLEFBQThCLHFEQUE5Qjs7Z0JBQUE7a0JBSEwsQUFDQSxBQUVLLEFBR0w7QUFISzt1QkFHTCxjQUFBLFNBQUssV0FBTCxBQUFlLHNCQUFmOztnQkFBQTtrQkFBQSxBQUNJO0FBREo7cUJBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZSw2QkFBZjs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO3FCQUNFLEFBQUMsZ0NBQUssVUFBTixNQUFlLE1BQWYsQUFBb0I7Z0JBQXBCO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLE9BQUcsV0FBVyxhQUFkLEFBQTJCLGlCQUEzQjs7Z0JBQUE7a0JBQUEsQUFBZ0M7QUFBaEM7NENBQXNDLFdBQU4sQUFBZ0IsUUFBTSxLQUF0QixBQUEwQix5Q0FBMUI7O2dCQUFBO2tCQUh4QyxBQUNJLEFBQ0UsQUFDRSxBQUFnQyxBQUdwQztBQUhvQzt5QkFHcEMsY0FBQSxTQUFLLFdBQUwsQUFBZSxrQ0FBZjs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO3FCQUNFLEFBQUMsZ0NBQUssVUFBTixNQUFlLE1BQWYsQUFBb0I7Z0JBQXBCO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLE9BQUcsV0FBVyxhQUFBLEFBQWEsWUFBM0IsQUFBdUMseUJBQXZDOztnQkFBQTtrQkFBQTtBQUFBO0tBRkosQUFDRSxBQUNFLEFBR0YsMkJBQUEsQUFBQyxnQ0FBSyxVQUFOLE1BQWUsTUFBZixBQUFvQjtnQkFBcEI7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsT0FBRyxXQUFXLGFBQUEsQUFBYSxXQUEzQixBQUFzQyx5QkFBdEM7O2dCQUFBO2tCQUFBO0FBQUE7S0FOSixBQUtFLEFBQ0UsQUFFRiwwQkFBQSxBQUFDLGdDQUFLLFVBQU4sTUFBZSxNQUFmLEFBQW9CO2dCQUFwQjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxPQUFHLFdBQVcsYUFBQSxBQUFhLFdBQTNCLEFBQXNDLHlCQUF0Qzs7Z0JBQUE7a0JBQUE7QUFBQTtLQVRKLEFBUUUsQUFDRSxBQUVGLDBCQUFBLEFBQUMsZ0NBQUssVUFBTixNQUFlLE1BQWYsQUFBb0I7Z0JBQXBCO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLE9BQUcsV0FBVyxhQUFBLEFBQWEsYUFBM0IsQUFBd0MseUJBQXhDOztnQkFBQTtrQkFBQTtBQUFBO0tBeEJSLEFBTUEsQUFNSSxBQVdFLEFBQ0U7YUF4QlI7U0FGZSxBQUVmO0FBQUE7QUFGQSIsImZpbGUiOiJIZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2hhcnJpc2xhYmVsL0RvY3VtZW50cy9nb3NvZmkvZ29zb2ZpX3dlYnBhZ2UifQ==
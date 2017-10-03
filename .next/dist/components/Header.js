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
    'data-jsx': 588251094,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement('div', { className: 'Header', 'data-jsx': 588251094,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('div', {
    'data-jsx': 588251094,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('a', { className: pathname === '/' && 'is-active', 'data-jsx': 588251094,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, 'GoSOFI'))), _react2.default.createElement('div', {
    'data-jsx': 588251094,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/about', __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement('a', { className: pathname === '/about' && 'is-active', 'data-jsx': 588251094,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, 'About')), _react2.default.createElement(_link2.default, { prefetch: true, href: '/team', __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement('a', { className: pathname === '/team' && 'is-active', 'data-jsx': 588251094,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, 'Team')), _react2.default.createElement(_link2.default, { prefetch: true, href: '/blog', __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, _react2.default.createElement('a', { className: pathname === '/blog' && 'is-active', 'data-jsx': 588251094,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, 'Blog')), _react2.default.createElement(_link2.default, { prefetch: true, href: '/donate', __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, _react2.default.createElement('a', { className: pathname === '/donate' && 'is-active', 'data-jsx': 588251094,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, 'Donate')))), _react2.default.createElement(_style2.default, {
    styleId: 588251094,
    css: 'header[data-jsx="588251094"]{position:fixed;z-index:1;width:100%;top:0;left:0;height:50px}.Header[data-jsx="588251094"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-right:29px;margin-left:54px;padding-left:20px;margin-top:20px;padding-right:20px}a[data-jsx="588251094"]{font-size:14px;margin-right:25px;text-decoration:none}a[data-jsx="588251094"]:hover{color:rgba(34,186,217,.75)}.rightJustified[data-jsx="588251094"]{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.is-active[data-jsx="588251094"]{text-decoration:underline}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCWSxBQUdvQixBQVFGLEFBU0UsQUFLZSxBQUdMLEFBR0MsZUEzQmhCLEFBaUJRLFVBaEJQLENBMkJiLENBTkEsTUFKdUIsR0FoQmYsTUFDQyxPQUNLLEtBZWQsT0FkQSxhQUdnQyx1QkFpQmhDLDRGQWhCb0Isa0JBQ0QsaUJBQ0Msa0JBQ0YsZ0JBQ0csbUJBQ3JCIiwiZmlsZSI6ImNvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9oYXJyaXNsYWJlbC9Eb2N1bWVudHMvZ29zb2ZpL2dvc29maV93ZWJwYWdlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5leHBvcnQgZGVmYXVsdCAoeyBwYXRobmFtZSB9KSA9PiAoXG4gIDxoZWFkZXI+XG5cblxuPGRpdiBjbGFzc05hbWU9XCJIZWFkZXJcIj5cbiAgICA8ZGl2ID5cbiAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9Jy8nPlxuICAgICAgICA8YSBjbGFzc05hbWU9e3BhdGhuYW1lID09PSAnLycgJiYgJ2lzLWFjdGl2ZSd9PkdvU09GSTwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj0nL2Fib3V0Jz5cbiAgICAgICAgPGEgY2xhc3NOYW1lPXtwYXRobmFtZSA9PT0gJy9hYm91dCcgJiYgJ2lzLWFjdGl2ZSd9PkFib3V0PC9hPlxuICAgICAgPC9MaW5rPlxuXG4gICAgICA8TGluayBwcmVmZXRjaCBocmVmPScvdGVhbSc+XG4gICAgICAgIDxhIGNsYXNzTmFtZT17cGF0aG5hbWUgPT09ICcvdGVhbScgJiYgJ2lzLWFjdGl2ZSd9PlRlYW08L2E+XG4gICAgICA8L0xpbms+XG5cbiAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9Jy9ibG9nJz5cbiAgICAgICAgPGEgY2xhc3NOYW1lPXtwYXRobmFtZSA9PT0gJy9ibG9nJyAmJiAnaXMtYWN0aXZlJ30+QmxvZzwvYT5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9Jy9kb25hdGUnPlxuICAgICAgICA8YSBjbGFzc05hbWU9e3BhdGhuYW1lID09PSAnL2RvbmF0ZScgJiYgJ2lzLWFjdGl2ZSd9PkRvbmF0ZTwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuPHN0eWxlIGpzeD57YFxuICBoZWFkZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogNTBweDtcbiAgfVxuICAuSGVhZGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi1yaWdodDogMjlweDtcbiAgICBtYXJnaW4tbGVmdDogNTRweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB9XG4gIGEge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gIGE6aG92ZXJ7XG4gICAgY29sb3I6IHJnYmEoMzQsIDE4NiwgMjE3LCAuNzUpO1xuICB9XG4gIC5yaWdodEp1c3RpZmllZHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG4gIC5pcy1hY3RpdmUge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG5gfTwvc3R5bGU+XG5cblxuICA8L2hlYWRlcj5cblxuKVxuIl19 */\n/*@ sourceURL=components/Header.js */'
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJwYXRobmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBRVA7Ozs7Ozs7O2tCQUFlLGdCQUFBO01BQUEsQUFBRyxnQkFBSCxBQUFHO3lCQUNoQixjQUFBO2dCQUFBOztnQkFBQTtrQkFBQSxBQUdGO0FBSEU7QUFBQSxHQUFBLGtCQUdGLGNBQUEsU0FBSyxXQUFMLEFBQWUsc0JBQWY7O2dCQUFBO2tCQUFBLEFBQ0k7QUFESjtxQkFDSSxjQUFBO2dCQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxBQUFDLGdDQUFLLFVBQU4sTUFBZSxNQUFmLEFBQW9CO2dCQUFwQjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxPQUFHLFdBQVcsYUFBQSxBQUFhLE9BQTNCLEFBQWtDLHlCQUFsQzs7Z0JBQUE7a0JBQUE7QUFBQTtLQUhSLEFBQ0ksQUFDRSxBQUNFLEFBR0osNkJBQUEsY0FBQTtnQkFBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsQUFBQyxnQ0FBSyxVQUFOLE1BQWUsTUFBZixBQUFvQjtnQkFBcEI7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsT0FBRyxXQUFXLGFBQUEsQUFBYSxZQUEzQixBQUF1Qyx5QkFBdkM7O2dCQUFBO2tCQUFBO0FBQUE7S0FGSixBQUNFLEFBQ0UsQUFHRiwyQkFBQSxBQUFDLGdDQUFLLFVBQU4sTUFBZSxNQUFmLEFBQW9CO2dCQUFwQjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxPQUFHLFdBQVcsYUFBQSxBQUFhLFdBQTNCLEFBQXNDLHlCQUF0Qzs7Z0JBQUE7a0JBQUE7QUFBQTtLQU5KLEFBS0UsQUFDRSxBQUdGLDBCQUFBLEFBQUMsZ0NBQUssVUFBTixNQUFlLE1BQWYsQUFBb0I7Z0JBQXBCO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLE9BQUcsV0FBVyxhQUFBLEFBQWEsV0FBM0IsQUFBc0MseUJBQXRDOztnQkFBQTtrQkFBQTtBQUFBO0tBVkosQUFTRSxBQUNFLEFBRUYsMEJBQUEsQUFBQyxnQ0FBSyxVQUFOLE1BQWUsTUFBZixBQUFvQjtnQkFBcEI7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsT0FBRyxXQUFXLGFBQUEsQUFBYSxhQUEzQixBQUF3Qyx5QkFBeEM7O2dCQUFBO2tCQUFBO0FBQUE7S0F0Qk4sQUFHRixBQU1JLEFBWUUsQUFDRTthQXRCTjtTQURhLEFBQ2I7QUFBQTtBQURGIiwiZmlsZSI6IkhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvaGFycmlzbGFiZWwvRG9jdW1lbnRzL2dvc29maS9nb3NvZmlfd2VicGFnZSJ9
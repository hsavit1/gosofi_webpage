'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('link', { href: '/static/css/Header.css', rel: 'stylesheet', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  })), _react2.default.createElement('div', { className: 'Header', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement('div', { className: 'LogoContainer', __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement('a', { className: pathname === '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement('img', { className: 'Logo', src: '../static/go-sofi-tag.png', __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  })))), _react2.default.createElement('div', { className: 'RightJustifiedMenu', __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/about', __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, _react2.default.createElement('a', { className: pathname === '/about' && 'is-active', __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, 'About')), _react2.default.createElement(_link2.default, { prefetch: true, href: '/team', __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, _react2.default.createElement('a', { className: pathname === '/team' && 'is-active', __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, 'Team')), _react2.default.createElement(_link2.default, { prefetch: true, href: '/blog', __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, _react2.default.createElement('a', { className: pathname === '/blog' && 'is-active', __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, 'Blog')), _react2.default.createElement(_link2.default, { prefetch: true, href: '/donate', __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, _react2.default.createElement('a', { className: pathname === '/donate' && 'is-active', __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, 'Donate')))));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJIZWFkIiwicGF0aG5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUdQOzs7Ozs7OztrQkFBZSxnQkFBQTtNQUFBLEFBQUcsZ0JBQUgsQUFBRzt5QkFFbEIsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQSw2Q0FDUSxNQUFOLEFBQVcsMEJBQXlCLEtBQXBDLEFBQXdDO2dCQUF4QztrQkFERixBQUNFLEFBQ0E7QUFEQTs4Q0FDTSxNQUFOLEFBQVcsWUFBVyxTQUF0QixBQUE4QjtnQkFBOUI7a0JBSEosQUFDRSxBQUVFLEFBR0Y7QUFIRTt1QkFHRixjQUFBLFNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxBQUFDLGdDQUFLLFVBQU4sTUFBZSxNQUFmLEFBQW9CO2dCQUFwQjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxPQUFHLFdBQVcsYUFBZCxBQUEyQjtnQkFBM0I7a0JBQUEsQUFBZ0M7QUFBaEM7NENBQXNDLFdBQU4sQUFBZ0IsUUFBTSxLQUF0QixBQUEwQjtnQkFBMUI7a0JBSHRDLEFBQ0UsQUFDRSxBQUNFLEFBQWdDLEFBR3BDO0FBSG9DO3lCQUdwQyxjQUFBLFNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxBQUFDLGdDQUFLLFVBQU4sTUFBZSxNQUFmLEFBQW9CO2dCQUFwQjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxPQUFHLFdBQVcsYUFBQSxBQUFhLFlBQTNCLEFBQXVDO2dCQUF2QztrQkFBQTtBQUFBO0tBRkosQUFDRSxBQUNFLEFBR0YsMkJBQUEsQUFBQyxnQ0FBSyxVQUFOLE1BQWUsTUFBZixBQUFvQjtnQkFBcEI7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsT0FBRyxXQUFXLGFBQUEsQUFBYSxXQUEzQixBQUFzQztnQkFBdEM7a0JBQUE7QUFBQTtLQU5KLEFBS0UsQUFDRSxBQUVGLDBCQUFBLEFBQUMsZ0NBQUssVUFBTixNQUFlLE1BQWYsQUFBb0I7Z0JBQXBCO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLE9BQUcsV0FBVyxhQUFBLEFBQWEsV0FBM0IsQUFBc0M7Z0JBQXRDO2tCQUFBO0FBQUE7S0FUSixBQVFFLEFBQ0UsQUFFRiwwQkFBQSxBQUFDLGdDQUFLLFVBQU4sTUFBZSxNQUFmLEFBQW9CO2dCQUFwQjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxPQUFHLFdBQVcsYUFBQSxBQUFhLGFBQTNCLEFBQXdDO2dCQUF4QztrQkFBQTtBQUFBO0tBMUJPLEFBRWYsQUFNRSxBQU1FLEFBV0UsQUFDRTtBQTFCUiIsImZpbGUiOiJIZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2hhcnJpc2xhYmVsL0RvY3VtZW50cy9nb3NvZmkvZ29zb2ZpX3dlYnBhZ2UifQ==
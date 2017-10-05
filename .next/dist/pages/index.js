'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _App = require('../App');

var _App2 = _interopRequireDefault(_App);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('../components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/harrislabel/Documents/gosofi/gosofi_webpage/pages/index.js?entry';

exports.default = function (props) {
  return _react2.default.createElement(_App2.default, {
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
    'data-jsx': 584067198,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, 'goSOFI')), _react2.default.createElement(_Header2.default, { pathname: props.url.pathname, __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), _react2.default.createElement('div', { className: 'testing', 'data-jsx': 584067198,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement('p', {
    'data-jsx': 584067198,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, 'Hello World!')), _react2.default.createElement(_Footer2.default, { pathname: props.url.pathname, __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), _react2.default.createElement(_style2.default, {
    styleId: 584067198,
    css: '.testing[data-jsx="584067198"]{height:200vh;margin-top:60px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVnQixBQUlzQixhQUNHLGdCQUNsQiIsImZpbGUiOiJwYWdlcy9pbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvaGFycmlzbGFiZWwvRG9jdW1lbnRzL2dvc29maS9nb3NvZmlfd2VicGFnZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHAgZnJvbSAnLi4vQXBwJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcidcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4gKFxuICA8QXBwPlxuICA8SGVhZD5cbiAgICA8dGl0bGU+Z29TT0ZJPC90aXRsZT5cbiAgPC9IZWFkPlxuICAgIDxIZWFkZXIgcGF0aG5hbWU9e3Byb3BzLnVybC5wYXRobmFtZX0gLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRlc3RpbmdcIj5cbiAgICA8cD5IZWxsbyBXb3JsZCE8L3A+XG4gICAgPC9kaXY+XG4gICAgPEZvb3RlciBwYXRobmFtZT17cHJvcHMudXJsLnBhdGhuYW1lfS8+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnRlc3Rpbmd7XG5cbiAgICAgICAgaGVpZ2h0OiAyMDB2aDtcbiAgICAgICAgbWFyZ2luLXRvcDogNjBweDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG5cbiAgPC9BcHA+XG5cbilcbiJdfQ== */\n/*@ sourceURL=pages/index.js?entry */'
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFwcCIsIkhlYWRlciIsIkZvb3RlciIsIkhlYWQiLCJwcm9wcyIsInVybCIsInBhdGhuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU8sQUFFUDs7Ozs7Ozs7a0JBQWUsVUFBQSxBQUFDLE9BQUQ7eUJBQ2IsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDQTtBQURBO0FBQUEsR0FBQSxrQkFDQSxBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxjQUFBO2dCQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FGRixBQUNBLEFBQ0UsQUFFQSw0QkFBQSxBQUFDLGtDQUFPLFVBQVUsTUFBQSxBQUFNLElBQXhCLEFBQTRCO2dCQUE1QjtrQkFKRixBQUlFLEFBQ0E7QUFEQTtzQkFDQSxjQUFBLFNBQUssV0FBTCxBQUFlLHVCQUFmOztnQkFBQTtrQkFBQSxBQUNBO0FBREE7cUJBQ0EsY0FBQTtnQkFBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBTkYsQUFLRSxBQUNBLEFBRUEsa0NBQUEsQUFBQyxrQ0FBTyxVQUFVLE1BQUEsQUFBTSxJQUF4QixBQUE0QjtnQkFBNUI7a0JBUkYsQUFRRTtBQUFBOzthQVJGO1NBRGEsQUFDYjtBQUFBO0FBREYiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2hhcnJpc2xhYmVsL0RvY3VtZW50cy9nb3NvZmkvZ29zb2ZpX3dlYnBhZ2UifQ==
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('next/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('next/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('next/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('next/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('next/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

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

var _blockChainService = require('.././services/blockChainService');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/harrislabel/Documents/gosofi/gosofi_webpage/pages/index.js?entry';

// import { fundVault } from '../App'

var Home = function (_React$Component) {
  (0, _inherits3.default)(Home, _React$Component);

  function Home() {
    (0, _classCallCheck3.default)(this, Home);

    return (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).apply(this, arguments));
  }

  (0, _createClass3.default)(Home, [{
    key: 'fundV',
    value: function fundV() {
      return (0, _blockChainService.fundVault)();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(_App2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement('title', {
        'data-jsx': 1831640062,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, 'goSOFI')), _react2.default.createElement(_Header2.default, { pathname: this.props.url.pathname, __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), _react2.default.createElement('div', { className: 'testing', 'data-jsx': 1831640062,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement('p', {
        'data-jsx': 1831640062,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, 'Hello World!'), _react2.default.createElement('h3', {
        'data-jsx': 1831640062,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, 'Fund Left'), _react2.default.createElement('div', { id: 'fund-left', 'data-jsx': 1831640062,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }), _react2.default.createElement('br', {
        'data-jsx': 1831640062,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), _react2.default.createElement('div', { className: 'col-sm-10', 'data-jsx': 1831640062,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement('input', { id: 'fund-amount', type: 'number', className: 'form-control', 'data-jsx': 1831640062,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      })), _react2.default.createElement('button', { className: 'btn btn-primary col-sm-2', onClick: function onClick() {
          return _this2.fundV();
        }, 'data-jsx': 1831640062,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, 'Fund Vault')), _react2.default.createElement(_Footer2.default, { pathname: this.props.url.pathname, __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: 1831640062,
        css: '.testing[data-jsx="1831640062"]{height:200vh;margin-top:60px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDa0IsQUFJd0IsYUFDRyxnQkFDbEIiLCJmaWxlIjoicGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2hhcnJpc2xhYmVsL0RvY3VtZW50cy9nb3NvZmkvZ29zb2ZpX3dlYnBhZ2UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwIGZyb20gJy4uL0FwcCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgZnVuZFZhdWx0IH0gZnJvbSAnLi4vLi9zZXJ2aWNlcy9ibG9ja0NoYWluU2VydmljZSdcbi8vIGltcG9ydCB7IGZ1bmRWYXVsdCB9IGZyb20gJy4uL0FwcCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbmZ1bmRWKCkge1xuICByZXR1cm4gZnVuZFZhdWx0KCk7XG59XG5cbiAgICByZW5kZXIoKSB7XG5cbnJldHVybiAoXG4gIDxBcHA+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+Z29TT0ZJPC90aXRsZT5cbiAgICA8L0hlYWQ+XG4gICAgICA8SGVhZGVyIHBhdGhuYW1lPXt0aGlzLnByb3BzLnVybC5wYXRobmFtZX0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVzdGluZ1wiPlxuICAgICAgPHA+SGVsbG8gV29ybGQhPC9wPlxuICAgICAgPGgzPkZ1bmQgTGVmdDwvaDM+XG4gICAgICA8ZGl2IGlkPVwiZnVuZC1sZWZ0XCI+PC9kaXY+XG5cbiAgPGJyIC8+XG4gIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEwXCI+XG4gICAgICA8aW5wdXQgaWQ9XCJmdW5kLWFtb3VudFwiIHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiAvPlxuICA8L2Rpdj5cbiAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgY29sLXNtLTJcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmZ1bmRWKCkgfT5GdW5kIFZhdWx0PC9idXR0b24+XG5cbiAgICAgIDwvZGl2PlxuICAgICAgPEZvb3RlciBwYXRobmFtZT17dGhpcy5wcm9wcy51cmwucGF0aG5hbWV9Lz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnRlc3Rpbmd7XG5cbiAgICAgICAgICBoZWlnaHQ6IDIwMHZoO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgPC9BcHA+XG5cbik7XG5cbn1cblxufVxuIl19 */\n/*@ sourceURL=pages/index.js?entry */'
      }));
    }
  }]);

  return Home;
}(_react2.default.Component);

exports.default = Home;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFwcCIsIkhlYWRlciIsIkZvb3RlciIsIkhlYWQiLCJmdW5kVmF1bHQiLCJIb21lIiwicHJvcHMiLCJ1cmwiLCJwYXRobmFtZSIsImZ1bmRWIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBUzs7Ozs7O0FBQ1Q7O0lBRXFCLEE7Ozs7Ozs7Ozs7OzRCQUViLEFBQ047YUFBQSxBQUFPLEFBQ1I7Ozs7NkJBRVk7bUJBRWI7OzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTtvQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBRkosQUFDRSxBQUNFLEFBRUEsNEJBQUEsQUFBQyxrQ0FBTyxVQUFVLEtBQUEsQUFBSyxNQUFMLEFBQVcsSUFBN0IsQUFBaUM7b0JBQWpDO3NCQUpKLEFBSUksQUFDQTtBQURBOzBCQUNBLGNBQUEsU0FBSyxXQUFMLEFBQWUsdUJBQWY7O29CQUFBO3NCQUFBLEFBQ0E7QUFEQTt5QkFDQSxjQUFBO29CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FEQSxBQUNBLEFBQ0EsaUNBQUEsY0FBQTtvQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBRkEsQUFFQSxBQUNBLHFEQUFLLElBQUwsQUFBUSx5QkFBUjs7b0JBQUE7c0JBSEEsQUFHQSxBQUVKO0FBRkk7O29CQUVKOztvQkFBQTtzQkFMSSxBQUtKLEFBQ0E7QUFEQTtBQUFBLDBCQUNBLGNBQUEsU0FBSyxXQUFMLEFBQWUseUJBQWY7O29CQUFBO3NCQUFBLEFBQ0k7QUFESjtrREFDVyxJQUFQLEFBQVUsZUFBYyxNQUF4QixBQUE2QixVQUFTLFdBQXRDLEFBQWdELDRCQUFoRDs7b0JBQUE7c0JBUEEsQUFNSixBQUNJLEFBRUo7QUFGSTsyQkFFSixjQUFBLFlBQVEsV0FBUixBQUFrQiw0QkFBMkIsU0FBUyxtQkFBQTtpQkFBTSxPQUFOLEFBQU0sQUFBSztBQUFqRSx1QkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtTQWRBLEFBS0ksQUFTSixBQUdJLGdDQUFBLEFBQUMsa0NBQU8sVUFBVSxLQUFBLEFBQUssTUFBTCxBQUFXLElBQTdCLEFBQWlDO29CQUFqQztzQkFqQkosQUFpQkk7QUFBQTs7aUJBakJKO2FBREYsQUFDRSxBQTZCRDtBQTdCQzs7Ozs7RUFUZ0MsZ0JBQU0sQTs7a0JBQW5CLEEiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2hhcnJpc2xhYmVsL0RvY3VtZW50cy9nb3NvZmkvZ29zb2ZpX3dlYnBhZ2UifQ==
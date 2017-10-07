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

var _blockChainService = require('./services/blockChainService');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/harrislabel/Documents/gosofi/gosofi_webpage/App.js';


var App = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App() {
    (0, _classCallCheck3.default)(this, App);

    return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
  }

  (0, _createClass3.default)(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _blockChainService.setWeb3Instance)();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('main', {
        'data-jsx': 3300319969,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, this.props.children, _react2.default.createElement(_style2.default, {
        styleId: 3300319969,
        css: '*{font-family:Menlo,Monaco,"Lucida Console","Liberation Mono","DejaVu Sans Mono","Bitstream Vera Sans Mono","Courier New",monospace,serif}html{height:100%;font-style:normal;-webkit-font-smoothing:antialiased;line-height:1.15}body{margin:0;min-height:100%;padding:25px 20px;overflow-x:hidden;position:relative}p{font-size:14px;line-height:24px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFheUIsQUFHMkosQUFHcEksQUFNSCxBQU9NLFNBTkMsR0FORSxHQWFELFVBTkMsS0FOaUIsRUFhckMsV0FOb0Isa0JBQ0EsSUFQRCxjQVFuQixHQVBBLHNEQU5BIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvaGFycmlzbGFiZWwvRG9jdW1lbnRzL2dvc29maS9nb3NvZmlfd2VicGFnZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgc2V0V2ViM0luc3RhbmNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9ibG9ja0NoYWluU2VydmljZSdcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgc2V0V2ViM0luc3RhbmNlKClcbiAgICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybihcbiAgICA8bWFpbj5cbiAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgKiB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IE1lbmxvLCBNb25hY28sIFwiTHVjaWRhIENvbnNvbGVcIiwgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJEZWphVnUgU2FucyBNb25vXCIsIFwiQml0c3RyZWFtIFZlcmEgU2FucyBNb25vXCIsIFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlLCBzZXJpZjtcbiAgICAgICAgfVxuICAgICAgICBodG1sIHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAgICAgICB9XG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmc6IDI1cHggMjBweDtcbiAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvbWFpbj5cblxuICApfVxufVxuIl19 */\n/*@ sourceURL=App.js */'
      }));
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFwcC5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJzZXRXZWIzSW5zdGFuY2UiLCJBcHAiLCJwcm9wcyIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTOzs7O0FBQ1QsQUFBUzs7Ozs7OztJQUdZLEE7Ozs7Ozs7Ozs7O3dDQUNDLEFBQ2Q7QUFDSDs7Ozs2QkFFTSxBQUNQOzZCQUNBLGNBQUE7b0JBQUE7O29CQUFBO3NCQUFBLEFBQ0c7QUFESDtBQUFBLE9BQUEsT0FDRyxBQUFLLE1BRFIsQUFDYztpQkFEZDthQURBLEFBQ0EsQUEwQkE7QUExQkE7Ozs7O0FBUDZCLEE7O2tCQUFaLEEiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9oYXJyaXNsYWJlbC9Eb2N1bWVudHMvZ29zb2ZpL2dvc29maV93ZWJwYWdlIn0=
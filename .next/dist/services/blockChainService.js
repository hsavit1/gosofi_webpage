'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProperties = exports.fundVault = exports.setWeb3Instance = undefined;

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

var _truffleContract = require('truffle-contract');

var _truffleContract2 = _interopRequireDefault(_truffleContract);

var _lendVault = require('../build/contracts/lendVault.json');

var _lendVault2 = _interopRequireDefault(_lendVault);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LendVault = (0, _truffleContract2.default)(_lendVault2.default);

var fundVault = function fundVault() {
  var fundAmount = document.getElementById("fund-amount").val;
  LendVault.deployed().then(function (contractInstance) {
    contractInstance.fundVault({ from: web3.eth.accounts[0], value: web3.toWei(fundAmount, 'ether') }).then(function (v) {
      getProperties();
    });
  });
};

function getProperties() {
  LendVault.deployed().then(function (contractInstance) {
    contractInstance.getProperties.call().then(function (v) {
      var val = JSON.parse('[' + v.toString() + ']');

      console.log(val);
      document.getElementById("fund-left").html(web3.fromWei(val[1]));
    });
  });
}

var setWeb3Instance = function setWeb3Instance() {
  // return new Promise((resolve, reject) => {
  //     if (web3Instance) {
  //         resolve();
  //     } else {
  //         // Wait for loading completion to avoid race conditions with web3 injection timing.
  //         window.addEventListener('load', function () {
  //             var web3 = window.web3
  //             // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  //             if (typeof web3 !== 'undefined') {
  //                 // Use Mist/MetaMask's provider.
  //                 web3 = new Web3(web3.currentProvider)
  //                 web3Instance = web3
  //             } else {
  //                 // Fallback to localhost if no web3 injection.
  //                 var provider = new Web3.providers.HttpProvider('http://localhost:8545')
  //                 web3 = new Web3(provider)
  //                 web3Instance = web3
  //             }
  //
  //             resolve();
  //         })
  //     }
  // })
  if (typeof web3 !== 'undefined') {
    console.warn("Using web3 detected from external source like Metamask");
    // Use Mist/MetaMask's provider
    window.web3 = new _web2.default(web3.currentProvider);
  } else {

    console.warn("No web3 detected. Falling back to http://localhost:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    window.web3 = new _web2.default(new _web2.default.providers.HttpProvider("http://localhost:8545"));
  }

  LendVault.setProvider(web3.currentProvider);
  getProperties();
};

exports.setWeb3Instance = setWeb3Instance;
exports.fundVault = fundVault;
exports.getProperties = getProperties;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2Jsb2NrQ2hhaW5TZXJ2aWNlLmpzIl0sIm5hbWVzIjpbImRlZmF1bHQiLCJXZWIzIiwiY29udHJhY3QiLCJsZW5kX2FydGlmYWN0cyIsIkxlbmRWYXVsdCIsImZ1bmRWYXVsdCIsImZ1bmRBbW91bnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsIiwiZGVwbG95ZWQiLCJ0aGVuIiwiY29udHJhY3RJbnN0YW5jZSIsImZyb20iLCJ3ZWIzIiwiZXRoIiwiYWNjb3VudHMiLCJ2YWx1ZSIsInRvV2VpIiwidiIsImdldFByb3BlcnRpZXMiLCJjYWxsIiwiSlNPTiIsInBhcnNlIiwidG9TdHJpbmciLCJjb25zb2xlIiwibG9nIiwiaHRtbCIsImZyb21XZWkiLCJzZXRXZWIzSW5zdGFuY2UiLCJ3YXJuIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIiwic2V0UHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxBQUFTLEFBQVcsQUFBcEI7Ozs7QUFDQSxBQUFTLEFBQVcsQUFBcEI7Ozs7QUFDQSxBQUFPLEFBQVA7Ozs7OztBQUVBLElBQUksWUFBWSxBQUFTLEFBQVQsQUFBaEI7O0FBRUEsSUFBSSxZQUFZLFNBQVosQUFBWSxZQUFZLEFBQzFCO01BQUksYUFBYSxTQUFTLEFBQVQsZUFBd0IsQUFBeEIsZUFBdUMsQUFBeEQsQUFDQTtZQUFVLEFBQVYsV0FBcUIsQUFBckIsS0FBMEIsVUFBUyxBQUFULGtCQUEyQixBQUNuRDtxQkFBaUIsQUFBakIsVUFDRSxFQUFDLE1BQU0sS0FBSyxBQUFMLElBQVMsQUFBVCxTQUFrQixBQUFsQixBQUFQLElBQTZCLE9BQU8sS0FBSyxBQUFMLE1BQVcsQUFBWCxZQUF1QixBQUF2QixBQUFwQyxBQURGLFlBRUUsQUFGRixLQUVPLFVBQVMsQUFBVCxHQUFZLEFBQ2Y7QUFDRDtBQUpILEFBS0Q7QUFORCxBQU9EO0FBVEQ7O0FBYUEsU0FBUyxBQUFULGdCQUF5QixBQUN2QjtZQUFVLEFBQVYsV0FBcUIsQUFBckIsS0FBMEIsVUFBUyxBQUFULGtCQUEyQixBQUNuRDtxQkFBaUIsQUFBakIsY0FBK0IsQUFBL0IsT0FBc0MsQUFBdEMsS0FBMkMsVUFBUyxBQUFULEdBQVksQUFDckQ7VUFBSSxNQUFNLEtBQUssQUFBTCxNQUFXLE1BQUksRUFBRSxBQUFGLEFBQUosYUFBaUIsQUFBNUIsQUFBVixBQUVBOztjQUFRLEFBQVIsSUFBWSxBQUFaLEFBQ0E7ZUFBUyxBQUFULGVBQXdCLEFBQXhCLGFBQXFDLEFBQXJDLEtBQTBDLEtBQUssQUFBTCxRQUFhLElBQUksQUFBSixBQUFiLEFBQTFDLEFBQ0Q7QUFMRCxBQU1EO0FBUEQsQUFRRDs7O0FBR0QsSUFBSSxrQkFBa0IsU0FBbEIsQUFBa0Isa0JBQVksQUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO01BQUksT0FBTyxBQUFQLFNBQWdCLEFBQXBCLGFBQWlDLEFBQy9CO1lBQVEsQUFBUixLQUFhLEFBQWIsQUFDQTtBQUNBO1dBQU8sQUFBUCxPQUFjLEFBQUksQUFBSixrQkFBUyxLQUFLLEFBQWQsQUFBZCxBQUNIO0FBSkMsU0FJSyxBQUVMOztZQUFRLEFBQVIsS0FBYSxBQUFiLEFBQ0E7QUFDQTtXQUFPLEFBQVAsT0FBYyxBQUFJLEFBQUosa0JBQVMsSUFBSSxjQUFLLEFBQUwsVUFBZSxBQUFuQixhQUFnQyxBQUFoQyxBQUFULEFBQWQsQUFDSDtBQUVDOztZQUFVLEFBQVYsWUFBc0IsS0FBSyxBQUEzQixBQUNBO0FBQ0Q7QUFyQ0QsQUF1Q0E7O1FBQ0UsQUFERjtRQUVFLEFBRkY7UUFHRSxBQUhGIiwiZmlsZSI6ImJsb2NrQ2hhaW5TZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9oYXJyaXNsYWJlbC9Eb2N1bWVudHMvZ29zb2ZpL2dvc29maV93ZWJwYWdlIn0=
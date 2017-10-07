import { default as Web3} from 'web3';
import { default as contract } from 'truffle-contract'
import lend_artifacts from '../build/contracts/lendVault.json'

var LendVault = contract(lend_artifacts);

let fundVault = function () {
  let fundAmount = document.getElementById("fund-amount").val;
  LendVault.deployed().then(function(contractInstance) {
    contractInstance.fundVault(
      {from: web3.eth.accounts[0], value: web3.toWei(fundAmount, 'ether')}
    ).then(function(v) {
        getProperties();
      });
  });
}
  


function getProperties() {
  LendVault.deployed().then(function(contractInstance) {
    contractInstance.getProperties.call().then(function(v) {
      let val = JSON.parse('['+v.toString()+']');

      console.log(val);
      document.getElementById("fund-left").html(web3.fromWei(val[1]));
    });
  });
}


let setWeb3Instance = function () {
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
      console.warn("Using web3 detected from external source like Metamask")
      // Use Mist/MetaMask's provider
      window.web3 = new Web3(web3.currentProvider);
  } else {

    console.warn("No web3 detected. Falling back to http://localhost:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

  LendVault.setProvider(web3.currentProvider);
  getProperties();
}

export{
  setWeb3Instance,
  fundVault,
  getProperties
}

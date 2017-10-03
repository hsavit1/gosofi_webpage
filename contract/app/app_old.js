/// GET THE abi from this command after recompile: from node console:
//       compiledCode.contracts[‘:lendVault’].interface

web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

abi = JSON.parse(‘[{"constant":false,"inputs":[{"name":"_fundsRequestedInWei","type":"uint256"}],"name":"borrowFunds","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"tokenFund","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_paymentInWei","type":"uint256"}],"name":"makePayment","outputs":[],"payable":true,"type":"function"},{"constant":true,"inputs":[],"name":"fundLent","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"fundPaid","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"fundLeft","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"fundOwed","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"borrowersInfo","outputs":[{"name":"borrowerAddress","type":"address"},{"name":"tokensBorrowed","type":"uint256"},{"name":"tokensOwed","type":"uint256"},{"name":"initialized","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"fundReturn","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"getProperties","outputs":[{"name":"","type":"uint256[6]"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"fundVault","outputs":[],"payable":true,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"}]‘);

LendVaultContract = web3.eth.contract(abi);
// In your nodejs console, execute
//contractInstance.address to get the address at which the contract is deployed
//and change the line below to use your deployed address

// EVERY TIME RECOMPILE REPALACE ADDRESS get this from node console:
//       deployedContract.address
contractInstance = LendVaultContract.at(‘0x22a64844895ebe12a25560df277da2a836b83aea’);

$(document).ready(getProperties);

function fundVault() {
    let fundAmount = $("#fund-amount").val();
    contractInstance.fundVault({value: web3.toWei(fundAmount, ‘ether’), from: web3.eth.accounts[3]}, getProperties);
}

function borrowFunds() {
    let fundsRequested = $("#funds-requested").val();
    contractInstance.borrowFunds(web3.toWei(fundsRequested), {from: web3.eth.accounts[0]}, getProperties);
}

function makePayment() {
    let paymentAmount = $("#payment-amount").val();
    contractInstance.makePayment(web3.toWei(paymentAmount), {from: web3.eth.accounts[0]}, getProperties);
}

function getProperties() {
  let val = JSON.parse(‘[’+contractInstance.getProperties.call().toString()+‘]’);

  $("#token-fund").html(web3.fromWei(val[0]));
  $("#fund-left").html(web3.fromWei(val[1]));
  $("#fund-lent").html(web3.fromWei(val[2]));
  $("#fund-owed").html(web3.fromWei(val[3]));
  $("#fund-paid").html(web3.fromWei(val[4]));
  $("#fund-return").html(web3.fromWei(val[5]));
}

var LendVault = artifacts.require("./lendVault.sol");

module.exports = function(deployer) {
  //deployer.deploy(LendVault, ['Rama', 'Nick', 'Jose'], {gas: 500000});
  deployer.deploy(LendVault, {gas: 500000});
};

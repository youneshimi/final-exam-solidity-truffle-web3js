var ProjetContract = artifacts.require("ProjetContract");

module.exports = function(deployer) {
  deployer.deploy(ProjetContract);
};

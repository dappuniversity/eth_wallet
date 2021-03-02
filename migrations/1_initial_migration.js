const Migrations = artifacts.require("Migrations");
const DaiTokenMock = artifacts.require("DaiTokenMock");

module.exports = async function(deployer) {
  await deployer.deploy(Migrations);
  await deployer.deploy(DaiTokenMock);
  const tokenMock = await DaiTokenMock.deployed()
  // Mint 1,000 Dai Tokens for the deployer

  await tokenMock.mint(
    '0xa6B26659a48Aef654e4E567689E8183d8A66e755',
    '1000000000000000000000'
  )
  
};

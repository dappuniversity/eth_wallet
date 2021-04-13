const Migrations = artifacts.require("Migrations");
const DaiTokenMock = artifacts.require("DaiTokenMock");

module.exports = async function(deployer) {
  await deployer.deploy(Migrations);
  await deployer.deploy(DaiTokenMock);
  const tokenMock = await DaiTokenMock.deployed()
  // Mint 1,000 Dai Tokens for the deployer

  await tokenMock.mint(
    '0x1eF3FBe69f07A35B2928F03920C983daA4488E9A',
    '1000000000000000000000'
  )
  
};
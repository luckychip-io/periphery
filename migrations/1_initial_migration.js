const LuckyChipRouter02 = artifacts.require("LuckyChipRouter02");

module.exports = async function (deployer) {
  await deployer.deploy(LuckyChipRouter02, '0xCc3A356deE953c935Cf19DccEF27050b7bbc31dC', '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd');
  let instanceRouter = await LuckyChipRouter02.deployed();
};

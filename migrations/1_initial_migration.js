const LuckyChipRouter02 = artifacts.require("LuckyChipRouter02");
const FACTORY_ARTIFACT  = require('../../core/build/contracts/LuckyChipFactory.json');
module.exports = async function (deployer) {

  await deployer.deploy(LuckyChipRouter02, '0x731f1D8c84B6fBB5695252710aAB1088bAe83955', '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd');
  let instanceRouter = await LuckyChipRouter02.deployed();
};

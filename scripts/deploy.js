const hre = require("hardhat")

async function main() {
  const LeveragedYieldFarm = await hre.ethers.getContractFactory("LeveragedYieldFarm")
  const leveragedYieldFarm = await LeveragedYieldFarm.deploy()

  await leveragedYieldFarm.deployed()

  console.log(`Leveraged Yield Farm deployed to ${leveragedYieldFarm.address}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
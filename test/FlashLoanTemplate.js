const { legos } = require("@studydefi/money-legos");
const { expect } = require("chai");
require("dotenv").config()

describe("FlashLoanTemplate", function () {
  // You can find accounts to unlock by looking at the top DAI holders...
  // --> https://etherscan.io/token/0x6b175474e89094c44da98b954eedeac495271d0f#balances
  const UNLOCKED_ACCOUNT = '0x075e72a5eDf65F0A5f44699c7654C1a76941Ddc8'
  const AMOUNT_TO_TRANSFER = ethers.utils.parseUnits('1', 'ether')
  const AMOUNT_TO_FLASH = ethers.utils.parseUnits('100000', 'ether')

  let deployer // <-- Accounts
  let dai, flashLoanTemplate // <-- Contracts

  beforeEach(async () => {
    const FlashLoanTemplate = await ethers.getContractFactory("FlashLoanTemplate")
    flashLoanTemplate = await FlashLoanTemplate.deploy()

    // accounts = await ethers.getSigners()
    // deployer = accounts[0]

    accounts = await ethers.getSigner("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266")
    deployer = accounts


    dai = new ethers.Contract(legos.erc20.dai.address, legos.erc20.dai.abi)

    await hre.network.provider.request({
      method: "hardhat_impersonateAccount",
      params: [UNLOCKED_ACCOUNT],
    })

    const signer = await ethers.getSigner(UNLOCKED_ACCOUNT)

    await dai.connect(signer).transfer(flashLoanTemplate.address, AMOUNT_TO_TRANSFER)
  })

  describe("Funding Account with DAI...", () => {
    it("Funds deployer with funds to pay fee", async () => {
      expect(await dai.connect(deployer).balanceOf(deployer.address)).to.be.greaterThan(0)
    })
  })

  describe("Performing Flash Loan...", () => {
    it('Borrowing 1M DAI and throws revert info msg.', async () => {
      await expect(flashLoanTemplate.connect(deployer).initiateFlashLoan(
        legos.dydx.soloMargin.address,
        legos.erc20.dai.address,
        AMOUNT_TO_FLASH
      )).to.be.rejectedWith("You got desired funds, now code what to do next")
    })
  });
});

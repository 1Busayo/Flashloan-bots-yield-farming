# Flash Loan -- Leveraged Yield Farm 

Make use of Flash loan from DY/DX to earn more from Compound. 

## 🔧 Project Diagram: - How it works

## 🔧 Deposit Diagram:
![Deposit Diagram](https://i.gyazo.com/77913f25dd333c7f8a9ea99813053c61.png)
</br>
## 🔧 Withdraw Diagram:
![Deposit Diagram](https://i.gyazo.com/3c5736a988fe92fc7bd3c373230c2663.png)

## Technology Stack & Tools

- [Solidity](https://docs.soliditylang.org/en/v0.8.17/) (Writing Smart Contracts)
- Javascript (Testing)
- [Hardhat](https://hardhat.org/) (Development Framework)
- [Ethers.js](https://docs.ethers.io/v5/) (Blockchain Interaction)
- [Alchemy](https://www.alchemy.com/) (Blockchain Connection)
* [Metamask](https://metamask.io/) (Account Management)
* [Compound Protocol](https://app.compound.finance/) (Supply or Borrow Tokens and Earn cTokens)
* [dYdX Solo Margin](https://etherscan.io/address/0x1e0447b19bb6ecfdae1e4ae1694b0c3659614e4e) (Flash Loan Provider)

## Requirements For Initial Setup
- Install [NodeJS](https://nodejs.org/en/). We recommend using the latest LTS (Long-Term-Support) version, and preferably installing NodeJS via [NVM](https://github.com/nvm-sh/nvm#intro).
- Create an [Alchemy](https://www.alchemy.com/) account, you'll need to create an app for the Ethereum chain, on the mainnet network

## Setting Up
### 1. Clone/Download the Repository
Make sure to enter the project directory before attempting to run the project related commands:
`cd flashloan_masterclass_hardhat`

If the directory doesn't exist, you can execute `pwd` to find out your current path, and `ls` to see the files and folders available to you.

### 2. Install Dependencies:
`npm install`

### 3. Create and Setup .env
Before running any scripts, you'll want to create a .env file with the following values (see .env.example):

- **ALCHEMY_API_KEY=""**

### 4. Run tests:
`npx hardhat test`

## Other Notes
* Other Flashloan Providers 
  * [DY/DX]() - Decentralized Exchange offering flashloans with cheap fees; that is used on this example code.
  Alternative Flashloan Providers that can be used or to investigate
  * [Uniswap V2 Flashswaps](https://docs.uniswap.org/protocol/V2/concepts/core-concepts/flash-swaps)
    - Example Uniswap FlashSwap can be [found here](https://github.com/Uniswap/uniswap-v2-periphery/blob/master/contracts/examples/ExampleFlashSwap.sol)
  * [Aave Flashloan](https://docs.aave.com/developers/guides/flash-loans)
  * [Kollateral](https://www.kollateral.co/) - A liquidity aggregator 
* [Augment your profits with trading bot](https://dappuniversity.teachable.com/courses/940808/lectures/24527435) - TradingBot Masterclass
* Uses of Flash loans
  * Arbitrage - use the vast funds to make profits from price discrepencies e.g on Exchange.
  * Leverage - increase exposure e.g earn more with Yield Farming on protocols like Compound.
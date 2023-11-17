require("@nomicfoundation/hardhat-toolbox")
require("hardhat-gas-reporter");
require("dotenv").config()
const privateKeys = process.env.PRIVATE_KEYS || ""
const sepoliakey =process.env.SEPOLIA_PRIVATE_KEY
const mainkey =process.env.MAINNET_PRIVATE_KEY
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.5.17",
  mocha: {
    timeout: 100000000,
  },
  etherscan: {
    apiKey:"AMYQZ6AN3URESGFCCEWMUK55I8HAMZDT4V"

  },
  gasReporter: {
    enabled:true,
    currency:"USD",
    coinmarketcap:"360f973f-a8b8-44fd-89e5-39a07c6a8945",
    gasPriceApi:"https://api.etherscan.io/api?module=proxy&action=eth_gasPrice"
  },
 networks: {
    hardhat: {
      forking: {
        url: `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY_POLYGON}`,
      }
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [sepoliakey],
      gasPrice: 90000000000,
      gas: 9000000,
    },
    main: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [mainkey],
     
    }
  }

};

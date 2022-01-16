# `NFTxFASHION`

A NFT marketplace which bridges the nft holder and designer. The nft holder want to tell people that he/she owns the NFT by including NFTs on fashions (virtual fashion or physical fashion). For example, sneakers. If it is virtual fashion, designer can add the NFT to a computer generated sneaker design and the final sneaker design can be used in metaverse. If it is physical fashion, designer can finish the design and manufacture the sneaker to be worn in real life. The marketplace is similar to fiverr where both nft holder can send posts about his needs and designer can send posts about their skills. The marketplace will profit by charging the commission fee.

![Preview](preview.gif)

# ⭐️ `Star us`
If this boilerplate helps you build Ethereum dapps faster - please star this project, every star makes us very happy!

# 🚀 Quick Start

📄 Clone or fork `ethereum-nft-marketplace-boilerplate`:
```sh
git clone https://github.com/ethereum-boilerplate/ethereum-nft-marketplace-boilerplate.git
```
💿 Install all dependencies:
```sh
cd ethereum-nft-marketplace-boilerplate
yarn install 
```
✏ Rename `.env.example` to `.env` in the main folder and provide your `appId` and `serverUrl` from Moralis ([How to start Moralis Server](https://docs.moralis.io/moralis-server/getting-started/create-a-moralis-server)) 
Example:
```jsx
REACT_APP_MORALIS_APPLICATION_ID = xxxxxxxxxxxx
REACT_APP_MORALIS_SERVER_URL = https://xxxxxx.grandmoralis.com:2053/server
```

🔎 Locate the MoralisDappProvider in `src/providers/MoralisDappProvider/MoralisDappProvider.js` and paste the deployed marketplace smart contract address and ABI
```jsx
const [contractABI, setContractABI] = useState();
const [marketAddress, setMarketAddress] = useState();
```

🔃 Sync the `MarketItemCreated` event `/src/contracts/marketplaceBoilerplate.sol` contract with your Moralis Server, making the tableName `MarketItems`
```jsx
event MarketItemCreated (
  uint indexed itemId,
  address indexed nftContract,
  uint256 indexed tokenId,
  address seller,
  address owner,
  uint256 price,
  bool sold
);
```


🚴‍♂️ Run your App:
```sh
yarn start
```



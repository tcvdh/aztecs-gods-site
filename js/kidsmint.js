import { addresses, amount } from './kidsmerkle.js?ver=1.1.0'
import { KIDSABI } from './abi/kidsabi.js';

let whitelistAddresses = []
for (let i = 0; i < addresses.length; i++) {
  whitelistAddresses.push(ethers.utils.solidityKeccak256(['uint256', 'address', 'uint256'], [i, addresses[i], amount[i]]))
}

const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const infuraProvider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/85312c8ad188461d891e1a590e65ee9e");
const infuraContract = new ethers.Contract("0x81E3eC24f1b0E451a0aF6110211B209eE76C9E54", KIDSABI, infuraProvider);
var contract;
var provider;

var walletAddress = "0x";
getTotalSupply();

const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: "85312c8ad188461d891e1a590e65ee9e",
      }
    },
    walletlink: {
      package: CoinbaseWalletSDK,
      options: {
        appName: "Anime Aztecs",
        infuraId: "85312c8ad188461d891e1a590e65ee9e",
        chainId: 1,
      }
    },
  };

let web3Modal = new Web3Modal({
  cacheProvider: true,
  providerOptions,
  network: "mainnet"
});

async function loginWeb3() {
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        chainId: "0x1",
        infuraId: "85312c8ad188461d891e1a590e65ee9e",
      }
    },
    walletlink: {
      package: CoinbaseWalletSDK,
      options: {
        appName: "Aztecs Kids",
        infuraId: "85312c8ad188461d891e1a590e65ee9e",
        chainId: 1,
      }
    },
  };

  const instance = await web3Modal.connect();
  provider = new ethers.providers.Web3Provider(instance);  
  
  const currentChain = await provider.getNetwork()
  if(currentChain.chainId != 1) {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0x1' }], // chainId must be in hexadecimal numbers
    });
    provider = new ethers.providers.Web3Provider(instance);
  }
  const signer = provider.getSigner();
  contract = new ethers.Contract("0x81E3eC24f1b0E451a0aF6110211B209eE76C9E54", KIDSABI, signer)

  walletAddress = await signer.getAddress();
  const ethFirst = walletAddress.substring(0,4);
  const ethLast = walletAddress.substring(38,42);
  const fullAddress = `${ethFirst}...${ethLast}`;


  
  document.getElementById('connect').innerHTML = fullAddress;
  getENS();
  start();
}

async function getENS() {
  var fullAddress;

  const hasENS = await provider.lookupAddress(walletAddress);

  if(hasENS) {
    fullAddress = hasENS
    document.getElementById('connect').innerHTML = fullAddress;
  }
  
}


async function getTotalSupply() {
  const totalSupply = await infuraContract.totalSupply()
  document.getElementById('totalSupply').innerHTML = `Minted: ${totalSupply}/500`;
}


  async function mint() {
    const leafNodes = whitelistAddresses.map(addr => addr);
    const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true});
    var found = addresses.lastIndexOf(walletAddress);
    if(found < 0) {
      document.getElementById('amounttext').innerHTML = `You are not on the minting list. Maybe next time!`;
      $('#amounttext').addClass('text-danger');
      document.getElementById("amounttext").style.visibility = "visible";
      return
    }
    var claimingAddress = leafNodes[found];
    const hexProof = merkleTree.getHexProof(claimingAddress);

    const receipt = await contract.mint(walletAddress, amount[found], found, hexProof);
    document.getElementById('amounttext').innerHTML = "Your Aztec is waiting for you in your wallet!";
    console.log(receipt);
    await start();
    
  }




async function main() {
  if (!contract) {
    await loginWeb3();
    return
  }
    
  if(document.getElementById('main').innerHTML === "MINT") {
    await mint();
    await getTotalSupply();  
  }
}

async function connect() {
  if (!contract) {
      await loginWeb3();
      return
  } else {
    web3Modal.clearCachedProvider();
    await loginWeb3()
  }
}

if(web3Modal.cachedProvider) {
  loginWeb3()
}


async function start() {
  getTotalSupply();
  var found = addresses.lastIndexOf(walletAddress);
  if(found < 0) {
    document.getElementById('amounttext').innerHTML = `You are not on the minting list. Maybe next time!`;
    $('#amounttext').addClass('text-danger');
    document.getElementById("amounttext").style.visibility = "visible";
    return
  }
  var amountt = amount[found];
  const claimed = await contract.checkClaimed(found);

  if(claimed === true) {
    document.getElementById('amounttext').innerHTML = `You have already claimed, maybe next time again!`;
    $('#amounttext').addClass('text-danger');
    document.getElementById("amounttext").style.visibility = "visible";
    document.getElementById('main').innerHTML = "already claimed";
    return
  }
  document.getElementById('amounttext').innerHTML = `You can mint ${amountt}`;
  document.getElementById("amounttext").style.visibility = "visible";
  document.getElementById('main').innerHTML = "MINT";
}




document.getElementById("main").onclick = main;
document.getElementById("connect").onclick = connect;
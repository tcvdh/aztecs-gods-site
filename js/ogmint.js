import { OGABI } from './abi/ogabi.js';

const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const infuraProvider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/85312c8ad188461d891e1a590e65ee9e");
const infuraContract = new ethers.Contract("0x30a4706763C5AeeA9F05EF080ec24d52F883B39d", OGABI, infuraProvider);
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
    disableInjectedProvider: false,
  });

async function loginWeb3() {
  const instance = await web3Modal.connect();
  provider = new ethers.providers.Web3Provider(instance);
  
  
  const currentChain = await provider.getNetwork()
  if(currentChain.chainId != 1) {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0x1' }], 
    });
    provider = new ethers.providers.Web3Provider(instance);
  }
  const signer = provider.getSigner();
  contract = new ethers.Contract("0x30a4706763C5AeeA9F05EF080ec24d52F883B39d", OGABI, signer)

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


async function checkFreeMints() {
  const receipt = await contract.freeMintWhitelist(walletAddress);
  return receipt;
}


async function getTotalSupply() {
  const totalSupply = await infuraContract.totalSupply()
  document.getElementById('totalSupply').innerHTML = `Minted: ${totalSupply}/203`;
  }

  async function mint() {
    var amount = parseInt(document.getElementById('amountNumber').value);
  
    if(amount > 0 ) {
      if(amount > 20) {
          $('#amounttext').addClass('text-danger');
          document.getElementById('amounttext').innerHTML = "You can't mint more than 20.";
          return
      }
      var singlePrice = await contract.cost();
      var payableAmount = amount * singlePrice;

      var overrideOptions = {
        value: payableAmount.toString()
      }

      const receipt = await contract.mint(walletAddress, amount, overrideOptions);
      document.getElementById('amounttext').innerHTML = "Your Aztec is waiting for you in your wallet!";
      console.log(receipt);
      await start();
    } else {
      $('#amounttext').addClass('text-danger');
    }
  }

async function freeMint() {
  var freeMints = await checkFreeMints();
    var amount = parseInt(document.getElementById('amountNumber').value);
    if(amount > 0 ) {
      if(amount > freeMints) {
          $('#amounttext').addClass('text-danger');
          document.getElementById('amounttext').innerHTML = `You can't mint more than ${freeMints} for free.`;
          return
      }

      const receipt = await contract.freeMint(walletAddress, amount);
      console.log(receipt);
      await start();
    } else {
      $('#amounttext').addClass('text-danger');
    }

}

async function main() {
    // console.log("he")
    if (!contract) {
      await loginWeb3();
      return
    }
    
    if(document.getElementById('main').innerHTML === "MINT") {
      await mint();
      await getTotalSupply();  
    }

    if(document.getElementById('main').innerHTML === "MINT FOR FREE") {
      await freeMint();
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

  var freeMints = await checkFreeMints();
  if(freeMints == 0) {
    document.getElementById('amounttext').innerHTML = `Please select the amount you want to mint:`;
    document.getElementById("amount").style.visibility = "visible";
    document.getElementById("amounttext").style.visibility = "visible";
    // document.getElementById('main').innerHTML = "MINT";
  }

  var freeMints = await checkFreeMints();
  if(freeMints != 0) {
    document.getElementById('amounttext').innerHTML = `You can mint ${freeMints} Aztecs for free!!`;
    document.getElementById("amount").style.visibility = "visible";
    document.getElementById("amounttext").style.visibility = "visible";
    // document.getElementById('main').innerHTML = `MINT FOR FREE`;
  }
}




// document.getElementById("main").onclick = main;
// document.getElementById("connect").onclick = connect;
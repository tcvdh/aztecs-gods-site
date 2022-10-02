import { addresses, amount } from './custommerkle.js?ver=1.15.0'
let whitelistAddresses = []
for (let i = 0; i < addresses.length; i++) {
  whitelistAddresses.push(ethers.utils.solidityKeccak256(['uint256', 'address', 'uint256'], [i, addresses[i], amount[i]]))
}

const btn = document.querySelectorAll('#maskk');        
const radioButtons = document.querySelectorAll('input[name="Sentimiento"]');
let selectedType;
var hasOG = false;
var layerId = [999,999,999,999,999,999,999,999,999,999];

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {
        for (const radioButton of radioButtons) {
            if (radioButton.checked) {
                selectedType = radioButton.value;
                for (let i = 0; i < 10; i++) {
                    const CLayer = document.getElementById(`layer${i}`).getContext("2d");
                    CLayer.clearRect(0, 0, 512, 512);
                    layerId[i] = 999
                    const buttonelement = document.getElementById(buildLayers[i]);
                    buttonelement.style.backgroundColor =  "";
                }
                break;
            }
        }
        // show the output:
        console.log(selectedType)
    });
}

function returnSelectedType() {
    if(hasOG == true) {
        if(selectedType == "FemaleMasked") {
            return femaleMaskedOG;
        }
        else if(selectedType == "FemaleNoMasked") {
            return femaleNoMaskedOG;
        }
        else if(selectedType == "MaleMasked") {
            return maleMaskedOG;
        }
        else if(selectedType == "MaleNoMasked") {
            return maleNoMaskedOG;
        }
        else if(selectedType == "MaleOpenMasked") {
            return MaleOpenMaskedOG;
        } else {
            return "SHIT"
        }
    } else {
        if(selectedType == "FemaleMasked") {
            return femaleMasked;
        }
        else if(selectedType == "FemaleNoMasked") {
            return femaleNoMasked;
        }
        else if(selectedType == "MaleMasked") {
            return maleMasked;
        }
        else if(selectedType == "MaleNoMasked") {
            return maleNoMasked;
        }
        else if(selectedType == "MaleOpenMasked") {
            return MaleOpenMasked;
        } else {
            return "SHIT"
        }
    }
}

function returnSelectedTypeNumber() {
    if(selectedType == "FemaleMasked") {
        return "1";
    }
    else if(selectedType == "FemaleNoMasked") {
        return "2";
    }
    else if(selectedType == "MaleMasked") {
        return "3";
    }
    else if(selectedType == "MaleNoMasked") {
        return "4";
    }
    else if(selectedType == "MaleOpenMasked") {
        return "5";
    } else {
        return "SHIT"
    }
}

import { ABI, GODABI } from './abi.js';

import { femaleMasked, femaleNoMasked, maleMasked, maleNoMasked, MaleOpenMasked } from "./mapping.js?ver=1.1.0";
import { femaleMaskedOG, femaleNoMaskedOG, maleMaskedOG, maleNoMaskedOG, MaleOpenMaskedOG } from "./mappingOG.js?ver=1.1.0";

const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const infuraProvider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/85312c8ad188461d891e1a590e65ee9e");
const infuraContract = new ethers.Contract("0xA031Be7C66fE1d915A68Aaea7A7597f1b612e699", GODABI, infuraProvider);
var contract;
var provider;
var apiReturn;
var allowedAmount;
var walletIndex;
var paid = 0;

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
    contract = new ethers.Contract("0x30a4706763C5AeeA9F05EF080ec24d52F883B39d", ABI, signer)
    // console.log(contract)
    
    walletAddress = await signer.getAddress();
    const ethFirst = walletAddress.substring(0,4);
    const ethLast = walletAddress.substring(38,42);
    const fullAddress = `${ethFirst}...${ethLast}`;
    
    document.getElementById('connect').innerHTML = fullAddress;
    getENS();

    document.getElementById("id1").style.visibility = "visible"
    document.getElementById("id2").style.visibility = "visible"
    document.getElementById("id3").style.visibility = "visible"
    document.getElementById("id5").style.visibility = "visible"

    const connect2 = document.getElementById("connect2")
    connect2.parentNode.removeChild(connect2);
    var NFTbalance

    try {
        NFTbalance = await contract.balanceOf(walletAddress);
    } catch (error) {
        console.log(error)
        const id4 = document.getElementById("id4")
        id4.parentNode.removeChild(id4);
    }
    // console.log(NFTbalance)
    // const NFTbalance = await contract.balanceOf(walletAddress);
    // console.log(NFTbalance.toString())

    if(NFTbalance > 0) {
        hasOG = true;
        console.log("has OG")
        document.getElementById("id4").style.visibility = "visible"
    } else {
        const id4 = document.getElementById("id4")
        id4.parentNode.removeChild(id4);
    }
    // document.getElementById("genImg").src = "../img/clickGenerate.png";
    // start();

    await checkWL()
}

async function checkWL() {
    walletIndex = addresses.lastIndexOf(walletAddress)
    console.log(walletIndex)
    if(walletIndex >= 0) {
        const minted = await infuraContract.claimedBitMapFree(walletIndex)
        allowedAmount = amount[walletIndex] 
        console.log(minted.toNumber())
        if(allowedAmount - minted > 0) {
            document.getElementById('amounttext').innerHTML = `You can still mint ${allowedAmount - minted} Aztec God(s)`;
            document.getElementById("mintNow").style.visibility = "visible";
            document.getElementById("randomIt").style.visibility = "visible";
        } else {
            document.getElementById('amounttext').innerHTML = `You can mint at a reduced price of 0.02Ξ`;
            document.getElementById("mintNow").style.visibility = "visible";
            document.getElementById("randomIt").style.visibility = "visible";
            paid = 1
        }
    } else {
        document.getElementById('amounttext').innerHTML = `You can mint at a reduced price of 0.02Ξ`;
        document.getElementById("mintNow").style.visibility = "visible";
        document.getElementById("randomIt").style.visibility = "visible";
        paid = 1
    }
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
    // const totalSupply = await infuraContract.totalSupply()
    // document.getElementById('totalSupply').innerHTML = `Minted: ${totalSupply}/10000`;
    // console.log(totalSupply)
}

async function main() {
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

var modal = document.getElementById("myModal");
var currentIndex;
const buildLayers = ['Background', 'Body', 'Dress', 'Face Paint', 'Necklace', 'Eyes', 'Mouth', 'Hair', 'Earring', 'Mask']

function testt(name) {
    console.log(name.target.innerHTML)
    currentIndex = name.target.attributes.number.value;
    console.log(currentIndex)
    // console.log(returnSelectedType())
    var amount = returnSelectedType()[buildLayers[currentIndex]]
    // console.log(amount.length)

    for (let i = 0; i < amount.length; i++) {
        if(amount[i] != "placeholder") {
            var tag = document.createElement("img");
            tag.src = `../DownsizedLayers/${selectedType}/${buildLayers[currentIndex]}/${amount[i]}`
            tag.id = i;
            var element = document.getElementById("addElements");
            element.appendChild(tag);
        }
        
    }

    
    console.log(name.target.attributes.number.value)
    modal.style.display = "block"
}

function log(test) {
    document.getElementById("fail").style.visibility = "hidden"
    console.log(test.target.src)
    console.log(test)
    console.log(test.target.src)
    console.log(test.target.id)
    const tester = test.target.src;
    modal.style.display = "none";
    if(test.target.id < 10) {
        layerId[currentIndex] = 0 + test.target.id
    } else {
        layerId[currentIndex] = test.target.id
    }
    console.log(layerId[currentIndex])
    var amount = returnSelectedType()[buildLayers[currentIndex]]
    console.log(amount.length)
    if(tester) {
        const buttonelement = document.getElementById(buildLayers[currentIndex]);
        buttonelement.style.backgroundColor =  "rgba(235, 126, 131, 0.19)";
    }
    const CLayer = document.getElementById(`layer${currentIndex}`).getContext("2d");
    CLayer.clearRect(0, 0, 512, 512);
    var img = new Image();
    img.src = `../Downsized/${selectedType}/${buildLayers[currentIndex]}/${amount[test.target.id]}`
    img.onload = function() {
        CLayer.drawImage(img, 0, 0, 512, 512);
        // L1.drawImage(img, 0, 0, 512, 512);
    }
    var element = document.getElementById("addElements");
    element.replaceChildren()
}
// currentIndex = 0
async function random() {
    for (let i = 0; i < 10; i++) {
        currentIndex = i
        // document.getElementById("fail").style.visibility = "hidden"
        var amount = returnSelectedType()[buildLayers[currentIndex]]
        // console.log(amount)
        var randoId = Math.floor(Math.random() * amount.length);
        if(amount[randoId] == "placeholder") {
            randoId = Math.floor(Math.random() * amount.length);
            if(amount[randoId] == "placeholder") {
                randoId = Math.floor(Math.random() * amount.length);
                
            }
        }
        modal.style.display = "none";
        if(randoId < 10) {
            layerId[currentIndex] = 0 + randoId
        } else {
            layerId[currentIndex] = randoId
        }
        // console.log(layerId[currentIndex])
        const buttonelement = document.getElementById(buildLayers[currentIndex]);
        buttonelement.style.backgroundColor =  "rgba(235, 126, 131, 0.19)";
        // console.log(currentIndex)
        var CLayer = document.getElementById(`layer${currentIndex}`).getContext("2d");
        CLayer.clearRect(0, 0, 512, 512);
        var img = new Image();
        img.src = `../Downsized/${selectedType}/${buildLayers[currentIndex]}/${amount[randoId]}`
        await new Promise((resolve) => {
            img.onload = function() {
                CLayer.drawImage(img, 0, 0, 512, 512);
                // L1.drawImage(img, 0, 0, 512, 512);
                resolve()
            }
          });
    }
}

async function mint() {
    document.getElementById("mintNow").value = "Please Wait..."
    var uniqueDNA = [];
    uniqueDNA.push(returnSelectedTypeNumber())
    uniqueDNA.push(layerId[0])
    uniqueDNA.push(layerId[1])
    uniqueDNA.push(layerId[2])
    uniqueDNA.push(layerId[3])
    uniqueDNA.push(layerId[4])
    uniqueDNA.push(layerId[7])
    uniqueDNA.push(layerId[9])
    for (let i = 0; i < layerId.length; i++) {
        if(layerId[i] > 500) {
            console.log(layerId[i])
            document.getElementById("fail").style.visibility = "visible"
            document.getElementById("mintNow").value = "MINT IT NOW"
            return
        }  
    }
    const idString = layerId.join();
    console.log(idString)
    const DNAToCheck = `${returnSelectedTypeNumber()}${layerId.join("")}`
    console.log(uniqueDNA.join(''))

    const signer = provider.getSigner();
    const mintContract = new ethers.Contract("0xA031Be7C66fE1d915A68Aaea7A7597f1b612e699", GODABI, signer)

    const DNAcheck = await mintContract.DNAexists(uniqueDNA.join(''));
    console.log(DNAcheck)

    if(DNAcheck == true) {
        document.getElementById("exists").style.visibility = "visible"
        return
    }

    const response = await fetch(`https://aztec-gods-api.herokuapp.com/api/${walletAddress}/${selectedType}?ids=${idString}`);
    console.log(response)
    const myJson = await response.json(); 
    console.log(myJson)

    var singlePrice = await mintContract.cost();
    // var payableAmount = amount * singlePrice;

    var overrideOptions = {
        value: singlePrice.toString()
    }

    const receipt = await mintContract.mint(walletAddress, myJson.CID, myJson.tokenId, myJson.signature, overrideOptions);
    console.log(receipt);
    document.getElementById("success").style.visibility = "visible"
    document.getElementById("mintNow").value = "MINT IT NOW"

}

async function freeMint() {
    document.getElementById("mintNow").value = "Please Wait..."
    var uniqueDNA = [];
    uniqueDNA.push(returnSelectedTypeNumber())
    uniqueDNA.push(layerId[0])
    uniqueDNA.push(layerId[1])
    uniqueDNA.push(layerId[2])
    uniqueDNA.push(layerId[3])
    uniqueDNA.push(layerId[4])
    uniqueDNA.push(layerId[7])
    uniqueDNA.push(layerId[9])
    for (let i = 0; i < layerId.length; i++) {
        if(layerId[i] > 500) {
            console.log(layerId[i])
            document.getElementById("fail").style.visibility = "visible"
            document.getElementById("mintNow").value = "MINT IT NOW"
            return
        }  
    }
    const idString = layerId.join();
    console.log(idString)
    const DNAToCheck = `${returnSelectedTypeNumber()}${layerId.join("")}`
    console.log(uniqueDNA.join(''))

    const signer = provider.getSigner();
    const mintContract = new ethers.Contract("0xA031Be7C66fE1d915A68Aaea7A7597f1b612e699", GODABI, signer)

    const DNAcheck = await mintContract.DNAexists(uniqueDNA.join(''));
    console.log(DNAcheck)

    if(DNAcheck == true) {
        document.getElementById("exists").style.visibility = "visible"
        return
    }

    const response = await fetch(`https://aztec-gods-api.herokuapp.com/api/${walletAddress}/${selectedType}?ids=${idString}`);
    console.log(response)
    const myJson = await response.json(); 
    console.log(myJson)


    const leafNodes = whitelistAddresses.map(addr => addr);
    const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true});
    var claimingAddress = leafNodes[walletIndex];
    const hexProof = merkleTree.getHexProof(claimingAddress);
    console.log(walletAddress, myJson.CID, myJson.tokenId, myJson.signature, allowedAmount, 1, walletIndex, hexProof)
    const receipt = await mintContract.freeMint(walletAddress, [myJson.CID], [myJson.tokenId], [myJson.signature], allowedAmount, 1, walletIndex, hexProof);
    console.log(receipt);
    document.getElementById("success").style.visibility = "visible"
    document.getElementById("mintNow").value = "MINT IT NOW"
    await checkWL()

}

async function mintmanager() {
    if(paid == 0) {
        freeMint()
    } else {
        mint()
    }
}



document.getElementById("Background").onclick = testt;
document.getElementById("Body").onclick = testt;
document.getElementById("Dress").onclick = testt;
document.getElementById("Face Paint").onclick = testt;
document.getElementById("Necklace").onclick = testt;
document.getElementById("Eyes").onclick = testt;
document.getElementById("Mouth").onclick = testt;
document.getElementById("Hair").onclick = testt;
document.getElementById("Earring").onclick = testt;
document.getElementById("Mask").onclick = testt;

document.getElementById("myModal").onclick = log;


document.getElementById("connect").onclick = main;
document.getElementById("connect2").onclick = main;
// document.getElementById("hellosir").onclick = log;
document.getElementById("mintNow").onclick = mintmanager;

document.getElementById("randomIt").onclick = random;

// console.log(male)


window.onload = function() {
    var L0 = document.getElementById("layer0").getContext("2d");
    var L1 = document.getElementById("layer1").getContext("2d");

    var img = new Image();
    img.src = "../images/unnamed__1_-removebg-preview-modified.png"
    img.onload = function() {
        // L0.drawImage(img, 0, 0, 512, 512);
        // L1.drawImage(img, 0, 0, 512, 512);
    }
};



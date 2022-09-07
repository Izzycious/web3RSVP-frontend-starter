import abiJSON from './web3RSVP.json';
import {ethers} from "ethers";

function connectContract() {
    const connectContract = "0xDd3fD8C8b74564e5a83ee886ce5b0Dd9ad538dA9";
    const abiJSON = abiJSON.abi;

    let rsvpContract;
    try {
        const { ethereum } = window;
        if (ethereum) {
            //checking for eth obj in eth window
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.signer();
            //initiating new connections to the contract
            rsvpContract = new ethers.Contract(contractAddress, contractABI, signer);
        } else {
            console.log("Ethereum Object doesn't exist!");
        }
    } catch (error) {
        console.log("ERROR:", error);
    }
    return rsvpContract;
}

export default connectContract;
import React,{ createContext, useState} from 'react';
import Web3 from 'web3';
export const BlockchainContext=createContext("");
export const Blockchainprovider=({children})=>{

    const[connected,setconnected]=useState(false);
    const[account,setaccount]=useState("");
    const[walletbalance,setwalletbalance]=useState("");
    const[answer,setanswer]=useState("0");
    

    //contract
    const contractAddress="0x3Fe0BBCA7A69EdbCd7a0aEEa7Ae2284db9c706db";
    const contractAbi=[
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "n1",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "n2",
                    "type": "uint256"
                }
            ],
            "name": "addnumber",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "n1",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "n2",
                    "type": "uint256"
                }
            ],
            "name": "divdnumber",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "n1",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "n2",
                    "type": "uint256"
                }
            ],
            "name": "mulnumber",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "n1",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "n2",
                    "type": "uint256"
                }
            ],
            "name": "subnumber",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [],
            "name": "answer",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
    const web3= new Web3(window.ethereum);
    const contract= new web3.eth.Contract(contractAbi,contractAddress);
    
    const connectwallet=async () => {
        try {
            if(window.ethereum ){
              
               window.ethereum.request({ method: 'eth_requestAccounts' })
               .then(async accounts =>{ 
                console.log('Connected account:', accounts[0])
                setconnected(true);
                setaccount(accounts[0]);
                
                const wbwei=await web3.eth.getBalance(accounts[0]);
                const wbeth=web3.utils.fromWei(wbwei,'ether');
                setwalletbalance(wbeth);
               

               })
               .catch(error => console.error('Error:', error));
               
            }
            
        } catch (error) {
            console.log(error);
        }
    };
    
    const calladdfunc=async(n1,n2)=>{
        try {
             const ans=await contract.methods.addnumber(n1,n2).call();
             setanswer(ans.toString());
             console.log(ans.toString());
        } catch (error) {
            console.log(error);
        }
    }
    const callsubfunc=async(n1,n2)=>{
        try {
            const ans=await contract.methods.subnumber(n1,n2).call();
            setanswer(ans.toString());
            console.log(ans.toString());
        } catch (error) {
            console.log(error);
        }
    }
    const callmulfunc=async(n1,n2)=>{
        try {
            const ans=await contract.methods.mulnumber(n1,n2).call();
            setanswer(ans.toString());
            console.log(ans.toString());
        } catch (error) {
            console.log(error);
        }
    }
    const calldivdfunc=async(n1,n2)=>{
        try {
            const ans=await contract.methods.divdnumber(n1,n2).call();
            setanswer(ans.toString());
            console.log(ans.toString());
        } catch (error) {
            console.log(error);
        }
    }
    return(
       <BlockchainContext.Provider 
       value={{
        connectwallet,
        connected,
        account,
        walletbalance,
        calladdfunc,
        callsubfunc,
        callmulfunc,
        calldivdfunc,
        answer
       }}
       >
        {children}
       </BlockchainContext.Provider>
    )
}
export default Blockchainprovider;
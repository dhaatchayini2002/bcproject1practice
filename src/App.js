//import logo from './logo.svg';
import './App.css';
//import Blockchainprovider from './Components/BlockchainContext';
import Walletdetail from './Components/Walletdetail';
import Home from './Components/Home';
import { BlockchainContext } from './Components/BlockchainContext';
import { useContext } from 'react';



function App() {
  const{connected}=useContext(BlockchainContext);
  return (
    
      <div>
      {connected===true?<Walletdetail/>:<Home/>};
        
      </div> 
      
       
   
     
      
    
  );
}

export default App;

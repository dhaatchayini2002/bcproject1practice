import React from 'react'
import './Home.css'
import { useContext } from 'react'
import { BlockchainContext } from './BlockchainContext';

const Home = () => {
  const {connectwallet}=useContext(BlockchainContext);
  const {connected}=useContext(BlockchainContext);
  return (
    <div className='connectwallet'>
      <button onClick={connectwallet}>
        <p className='btntext'>Connect Wallet</p>
      </button>
      {console.log({connected})}
    </div>
  )
}

export default Home

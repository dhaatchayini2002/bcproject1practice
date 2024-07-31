import React, { useContext, useState } from 'react'
import './Walletdetail.css'
import { BlockchainContext } from './BlockchainContext'

const Walletdetail = () => {
  const{account}=useContext(BlockchainContext);
  const{walletbalance,answer,calladdfunc,callsubfunc,callmulfunc,calldivdfunc}=useContext(BlockchainContext);
 
  
  const [num1,setnum1]=useState(0);
  const [num2,setnum2]=useState(0);

  const addfunc=()=>{
    calladdfunc(num1,num2);
  }
  const subfunc=()=>{
    callsubfunc(num1,num2);
  }
  const mulfunc=()=>{
    callmulfunc(num1,num2);
  }
  const divdfunc=()=>{
    calldivdfunc(num1,num2);
  }
  return (
    <>
    <div className='walletdetail'>
      <h2>Blockchain Bank</h2>
      <div className='infofield'>
          <div>wallet balance: <span className='wb'>{walletbalance}</span></div>
          
          <div> address: <span className='acc'>{account}</span></div>
      </div>   
    </div>
    <div className='calculator'>
          <div className='inputnums'>
          <label>NUM 1</label><input type='number' placeholder='0' value={num1}  onChange={(e)=>setnum1(e.target.value)}/>
          <label>NUM 2</label><input type='number' placeholder='0' value={num2} onChange={(e)=>setnum2(e.target.value)}/>
          </div>

          <div className='opbtns'>
          <button className='addbtn' onClick={addfunc}>ADD</button>
          <button className='subbtn' onClick={subfunc}>SUB</button>
          <button className='mulbtn' onClick={mulfunc}>MUL</button>
          <button className='divbtn' onClick={divdfunc} >DIV</button>
          </div>
          <div className='ansfield'>
            <span className='ansbox' >{answer !== null && answer !== undefined ? answer : "ans"}</span>

          </div>
    </div>
    </>
  )
}

export default Walletdetail;

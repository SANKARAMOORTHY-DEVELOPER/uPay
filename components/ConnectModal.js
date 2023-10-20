import React from 'react'
// import { useNavigate } from 'react-router-dom'
import { ConnectButton } from '@suiet/wallet-kit';

const ConnectModal = () => {
    // const navigate=useNavigate();
  return (
    <div className='p-2 w-[100vw] h-[100vh]  bg-[rgb(0,0,0,0.7)] fixed inset-0 flex flex-col justify-center items-center mr-36 mb-24'>
    <div className='relative flex flex-col items-center bg-neutral-white p-2 px-3 rounded-[10px]'>
        <p className='text-lg text-white font-epilogue font-semibold capitalize p-1 my-3'>Please Connect Your Sui Wallet</p>
        {/* <button onClick={()=>{navigate("/")}} className=' bg-[#46ec80] px-5 py-1 rounded-[5px]'>Ok</button> */}
        <ConnectButton/>
    </div>
    </div>
  )
}

export default ConnectModal;
"use client"
import React from 'react'
import { ConnectButton } from '@suiet/wallet-kit'
import ScanModal from '../../components/ScanModal'

const page = () => {
  
  return (
    <div className=' h-[100vh] flex justify-center items-center'>
      <ScanModal/>
      
          {/* <ConnectButton/> */}
    </div>
  )
}

export default page
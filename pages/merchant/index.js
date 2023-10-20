import { useStateContext } from '../../context'
import RegisterForm from '../../components/RegisterForm'
import React, { useEffect } from 'react'
import MerchantDashboard from '../../components/MerchantDashboard';

const index = () => {
    const {registering,setRegistering}=useStateContext();
    useEffect(()=>{
        // write a logic to see if the address is a merchant
        // setRegistering(true);
    })
    if(registering)
    {
        return (
            <div>
                <RegisterForm/>
            </div>
          )
    }
    else{
        return (
            <div>
                <MerchantDashboard/>
            </div>
        )
    }
}

export default index
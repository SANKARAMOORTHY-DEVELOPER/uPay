import { createContext, useContext, useState } from "react";

const StateContext=createContext();

export const StateContextProvider=({children})=>{
    const [registering,setRegistering]=useState(false);
    // a fucntion to register for the merchant
    const addRegistration=(data)=>{
        try{
            console.log(data);
            
        }
        catch(e)
        {
            console.log(e);
        }
    }
    // a function to pay to the Merchant
    const payToMerchant=(data)=>{
        try{
            console.log(data);

        }
        catch(e)
        {
            console.log(e);
        }
    }
    return (
        <StateContext.Provider value={{addRegistration,registering,setRegistering,payToMerchant}}>
        {children}
        </StateContext.Provider>
    )
}

export const useStateContext=(()=>useContext(StateContext));
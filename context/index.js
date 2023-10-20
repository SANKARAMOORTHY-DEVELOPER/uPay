import { createContext, useContext, useState } from "react";

const StateContext=createContext();

export const StateContextProvider=({children})=>{
    const [registering,setRegistering]=useState(false);
    const addRegistration=(data)=>{
        try{
            console.log(data);
        }
        catch(e)
        {
            console.log(e);
        }
    }
    return (
        <StateContext.Provider value={{addRegistration,registering,setRegistering}}>
        {children}
        </StateContext.Provider>
    )
}

export const useStateContext=(()=>useContext(StateContext));
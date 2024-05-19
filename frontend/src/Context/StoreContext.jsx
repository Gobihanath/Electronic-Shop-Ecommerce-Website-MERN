import { createContext } from "react";
import {item_list} from "../Assets1/assets.js"

export const StoreContext=createContext(null)

const StoreContextProvider=(props)=>{

    const contextValue={
              item_list

    }
    return(
       <StoreContext.Provider  value={contextValue}>
        {props.children}
       </StoreContext.Provider>
    )



}


export default StoreContextProvider;
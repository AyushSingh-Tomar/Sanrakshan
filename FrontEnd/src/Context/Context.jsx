
import { createContext } from "react";
import {checkList} from '../assets/assets'
import {practiceList} from '../assets/assets'
export const Context=createContext(null);

const ContextProvider=(props) =>{
  const contextValue ={
    checkList,
    practiceList
// Any variable,function made here will be available at any component of the website
  }
  return (
         <Context.Provider value={contextValue}>
            {props.children}
         </Context.Provider>
  )
}

export {ContextProvider }
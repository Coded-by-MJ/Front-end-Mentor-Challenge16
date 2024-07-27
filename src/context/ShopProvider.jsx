import {createContext, useContext, useReducer} from 'react'
import products from "../data.json"
import { appReducer } from './AppReducer';

export const GlobalContext = createContext();



const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, [...products])


  // Actions

const addToCart = (id) => {
  dispatch({
    type: "ADD_ITEM",
    payload: id
  })

}

const removeFromCart = (id) => {
 dispatch({
   type: "REMOVE_ITEM",
   payload: id,
 })

}


const increaseQty = (id) => {
  dispatch({
    type: "INCREASE_QTY",
    payload: id,
  })
}
const decreaseQty = (id) => {
  dispatch({
    type: "DECREASE_QTY",
    payload: id,
  })
}

const resetAll = () => {
  dispatch({
    type: "RESET_ALL"
  })
}





  return (
    <GlobalContext.Provider value={{
      desserts: state,
      addToCart,
      removeFromCart,
      increaseQty,
      decreaseQty,
      resetAll

    }} >
      { children }
    </GlobalContext.Provider>

  )
}


const useData = () => useContext(GlobalContext);

export {ShopProvider as default, useData};
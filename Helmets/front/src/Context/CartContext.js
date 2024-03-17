import { createContext, useReducer, useContext, useEffect } from "react";
import reducer from '../reducer/cartReducer'
const CartContext = createContext();

const initialState = {
    //cart: [],
    cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
    total_item: "",
    total_amount: "",
    shipping_fee: "500",
    final_amount: "",
};

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const addToCart=(id, amount, product)   =>{
        dispatch({type:"ADD_TO_CART", payload:{id, amount, product}});
    }; 
    //remove item from cart
    const removeItem= (id)   =>{
        console.log('Removing item with id:', id);
         dispatch({type:"REMOVE_ITEM", payload:id});
    };
    //clear cart
    const clearCart= ()   =>{
        dispatch({type:"CLEAR_CART"});
    };
    //increase amount
    const setIncrease= (id)   =>{
        console.log('Increasing amount with id:', id);
        dispatch({type:"SET_INCREASE", payload:id});
    };

    //decrease amount
    const setDecrease= (id)   =>{
        dispatch({type:"SET_DECREASE", payload:id});
    };

    //get totals
    //store data in local storage

    useEffect(() => {
        dispatch({type:"GET_TOTAL_PRICE"});
        localStorage.setItem("cart", JSON.stringify(state.cart));
        dispatch({type:"ADD_SHIPPING_FEE"});
    },[state.cart]);
   

    return (
    <CartContext.Provider value={{...state, addToCart, removeItem,clearCart, setIncrease, setDecrease }}>
        {children}
        </CartContext.Provider>
    );
}

const useCartContext = () => {
    return useContext(CartContext);
}

export { CartProvider, useCartContext };
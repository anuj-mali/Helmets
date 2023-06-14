import reducer from '../reducer/checkoutReducer'
import { createContext, useReducer, useContext, useEffect } from "react";

const CheckoutContext = createContext();
const initialState = {
    checkout: [],
    total_item: "",
    final_amount: "",
    
};
const CheckoutProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    return (
        <CheckoutContext.Provider value={{...state}}>
            {children}
        </CheckoutContext.Provider>
    );
}
const useCheckoutContext = () => {
    return useContext(CheckoutContext);
}
export { CheckoutProvider, useCheckoutContext };
import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer" 

const AppContext = createContext();

// const API ="/products/";
const Api= axios.create({
    baseURL:"http://127.0.0.1:8000/store/products/",
    withCredentials: false,
    headers:{
        "Content-Type":"application/json",

    },
})

const initialState ={
    isLoading: false,
    isError: false,
    products:[],
    featuredProducts:[],
    isSingleLoading:false,
    isSingleError:false,
    singleProduct:JSON.parse(localStorage.getItem("singleProduct")) || {},
};
const AppProvider =({children})=>{

    const [state, dispatch] = useReducer(reducer, initialState);

    //API call for single product
    const getSingleProduct= async (url)=>{
        dispatch({type:"SET_SINGLE_LOADING"});
        try{
            const res = await Api.get(url);
            const singleProduct = await res.data;
            console.log("GET Single product",singleProduct);
            dispatch({type:"SET_SINGLE_PRODUCT", payload:singleProduct});
        }catch(error){
            console.log("GET Single product error",error);
            dispatch({type:"SET_SINGLE_ERROR"});
        }
    }


    const getProducts= async (url)=>{
        dispatch({type: "SET_LOADING"});
        try {
            const res = await Api.get(url);
            const products = await res.data;
            dispatch({type:"SET_API_DATA", payload:products});
        } catch (error) {
            dispatch({type:"API_ERR"});
            
        }
    };

    useEffect(()=>{
        getProducts("/");

    },[]);
    useEffect(()=>{
        localStorage.setItem("singleProduct", JSON.stringify(state.singleProduct));
    },[state.singleProduct]);

    return <AppContext.Provider value={{ ...state, getSingleProduct }}>{children}</AppContext.Provider>
};
// custom hook
const useProductContext=()=>{
    return useContext(AppContext);
};

export {AppProvider, useProductContext};
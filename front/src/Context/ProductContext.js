import { createContext, useContext, useEffect } from "react";
import axios from "axios";

const AppContext = createContext();

const API ="/customers/";
const Api= axios.create({
    baseURL:"http://127.0.0.1:8000/store/",
    withCredentials: false,
    headers:{
        "Content-Type":"application/json",
    },
})

const AppProvider =({children})=>{
    const getProducts= async (url)=>{
        const res = await Api.get(url);
        console.log(res.data);
    };

    useEffect(()=>{
        getProducts(API);
    },[]);

    return <AppContext.Provider value="Apple">{children}</AppContext.Provider>
};
// custom hook
const useProductContext=()=>{
    return useContext(AppContext);
};

export {AppProvider, useProductContext};
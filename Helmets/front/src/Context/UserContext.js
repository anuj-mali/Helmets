import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/userReducer"

const UserContext = createContext();

const Api= axios.create({
    baseURL:"http://127.0.0.1:8000/auth/jwt/",
    withCredentials: false,
    headers:{
        "Content-Type":"application/json",

    },
})

const initialState ={
    isLoading: false,
    isError: false,
    user_name:"",
    access:"",
};


const UserProvider =({children})=>{

const [state, dispatch] = useReducer(reducer, initialState);

    const login= async (url, data)=>{
        dispatch({type: "SET_LOADING"});
        try {
            const res = await Api.post(url, data);
            const user_token = await res.data;
            // console.log("user data",user_token);
            dispatch({type:"SET_USER", payload:user_token});
        } catch (error) {
            console.log(error);
            dispatch({type:"SET_ERROR"});
            
        }
    };
    const logout= ()=>{
        dispatch({type:"SET_LOGOUT"});
        console.log("logout");
    };


    return <UserContext.Provider value={{ ...state,login, logout }}>{children}</UserContext.Provider>
};
// custom hook
const useUserContext=()=>{
    return useContext(UserContext);
};

export {UserProvider, useUserContext};
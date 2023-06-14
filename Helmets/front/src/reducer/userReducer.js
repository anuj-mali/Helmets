const userReducer = (state, action) => {
    if (action.type === "SET_LOADING") {
        return {...state, isLoading: true}
    }
    if (action.type === "SET_ERROR") {
        return {...state, isError: true}
    }
    if (action.type === "SET_USER") {
        return {...state, 
            // user_name: action.payload.user_name, 
            access: action.payload.access}
    }
    if (action.type === "SET_LOGOUT") {
        return {...state, 
            // user_name: "", 
            access: ""}
    }
    return state
}

export default userReducer

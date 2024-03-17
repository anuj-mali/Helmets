const ProductReducer =(state,action) =>{
    switch(action.type){
        case "SET_LOADING":
           return{
            ...state,
            isLoading: true,
           };
        case "SET_API_DATA":
            {
                const featuredElements = action.payload.filter((current)=>{
                    return current.is_featured === true;
                });
                return{
                    ...state,
                    isLoading : false,
                    products : action.payload,
                    featuredProducts : featuredElements,
                }
            };   
        case "API_ERROR":
            return{
                ...state,
                isLoading: false,
                isError: true,
            };
        case "SET_SINGLE_LOADING":
            return{
                ...state,
                isSingleLoading: true,
            };
        case "SET_SINGLE_PRODUCT":
            return{
                ...state,
                isSingleLoading: false,
                singleProduct: action.payload,
            };
        case "SET_SINGLE_ERROR":
            return{
                ...state,
                isSingleLoading: false,
                isSingleError: true,
            };
            
        default:
            return state;    

    }
    };


export default ProductReducer;

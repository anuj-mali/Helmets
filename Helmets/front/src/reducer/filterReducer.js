const filterReducer = (state, action) =>{
    switch(action.type){
            case "LOAD_PRODUCTS":
                return {
                    ...state,
                    all_products: [...action.payload],
                    filtered_products: [...action.payload],
                }
            case "SORTING":
                    let userSortValue = document.getElementById("sort");
                    let sort = userSortValue.options[userSortValue.selectedIndex].value;
            return {
                    ...state,
                    sort,
                }
            case "SORTING_PRODUCTS":
                let newSortData;
                let tempSortData = [...action.payload];
                if(state.sort === "name-a"){
                    newSortData = tempSortData.sort((a, b) => 
                        a.name.localeCompare(b.name)
                    );
                }
                if(state.sort === "name-z"){
                    newSortData = tempSortData.sort((a, b) => 
                        b.name.localeCompare(a.name)
                    );
                }
                if(state.sort === "lowest"){
                   const sortingProducts = (a,b)=>{
                        return a.unit_price - b.unit_price;
                   }
                     newSortData = tempSortData.sort(sortingProducts);
                }
                if(state.sort === "highest"){
                    const sortingProducts = (a,b)=>{
                         return b.unit_price - a.unit_price;
                    }
                      newSortData = tempSortData.sort(sortingProducts);
                 }
                return {
                    ...state,
                    filtered_products: newSortData,
                }
            case "UPDATE_FILTER_VALUE":
                const { name, value } = action.payload;
                console.log("Test",name, value);

                return {
                    ...state,
                    filters: {
                    ...state.filters,
                    [name]: value,
                    }
                } 
                case "FILTERING_PRODUCTS":
                    let tempFilterProduct=[...action.payload];
                    
                    const {text}=state.filters;
                    if(text){
                        tempFilterProduct= tempFilterProduct.filter((item)=>{
                            return item.name.toLowerCase().includes(text);
                        }
                        );
                    }
                    return{
                        ...state,
                        filtered_products: tempFilterProduct,

                    };

                default:
                    return state;
    }
};

export default filterReducer;
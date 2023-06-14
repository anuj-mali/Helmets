// import { createContext, useContext, useEffect, useReducer } from "react";
// import { useProductContext } from "./ProductContext";
// import reducer from "../reducer/filterReducer";

// const FilterContext = createContext();

// const innitialState = {
//     filtered_products: [],
//     all_products: [],
//     sort: "name-a",
//     filters: {
//         text: "",
//     },
// };

// export const FilterContextProvider = ({ children }) => {
//     const { products } = useProductContext();

//     const[state, dispatch] = useReducer(reducer, innitialState);

//     // sorting Function
//     const sorting = () => {
//         dispatch({ type: "SORTING" });
//     };
//     //filtering Function
    
//     // const updateFilterValue = (event) => {
//     //     let name = event.target.name;
//     //     let value = event.target.value;
    
//     //     return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
//     //   };
//     // Update filter value
//   const updateFilterValue = (event) => {
//     const value = event.target.value;
//     dispatch({ type: "UPDATE_FILTERS_VALUE", payload: value });
//   };


//     //sort products
//     useEffect(() => {
//         console.log("Sorting");
//         dispatch({ type: "SORTING_PRODUCTS", payload: products})
//     }, [state.sort]);

//     useEffect(() => {
//         dispatch({ type: "LOAD_PRODUCTS", payload: products });
//     }, [products]);

//     return (
//     <FilterContext.Provider value={{ ...state, sorting, updateFilterValue }}>
//         {children}
//     </FilterContext.Provider>
//     );
// }

// export const useFilterContext = () => {
//     return useContext(FilterContext);
// }


import React, { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
  filtered_products: [],
  all_products: [],
  sort: "name-a",
  filters: {
    text: "",
  },
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  // Sorting function
  const sorting = (event) => {
    const value = event.target.value;
    dispatch({ type: "SORTING", payload: value });
  };

  // Update filter value
  // const updateFilterValue = (value) => {
  //   dispatch({ type: "UPDATE_FILTERS_VALUE", payload: value });
  // };
  const updateFilterValue = (name, value) => {
    dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  };

  // Sort products
  useEffect(() => {
    dispatch({type:"FILTERING_PRODUCTS", payload: products})
    dispatch({ type: "SORTING_PRODUCTS", payload: products });
  }, [state.sort, products, state.filters]);

  useEffect(() => {
    dispatch({ type: "LOAD_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state, sorting, updateFilterValue }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};

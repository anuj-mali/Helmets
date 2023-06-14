const cartReducer = (state, action) => {

    if (action.type === "ADD_TO_CART") {
        let { id, amount, product } = action.payload;
        console.log("ADD TO CART", id, amount, product);

        //check if item is already in the cart
        let existingItem = state.cart.find((item) => item.id === id);
        if (existingItem) {
            console.log("Item already in cart");
            let updatedCart = state.cart.map((item) => {
                if (item.id === id) {
                    let newAmount = item.amount + amount;
                    return { ...item, amount: newAmount };
                }else{
                return item;
            }
            });
            return {
                ...state,
                cart: updatedCart,
            };

        } else {            

        let cartProduct;
        cartProduct={
            id,
            name: product.name,
            amount,
            image: product.image,
            price: product.unit_price,
            brand: product.brand.name,
        };
        return{
            ...state,
            cart:[...state.cart, cartProduct],

        }
    }
    }
    //increase and decrease amount
    if (action.type === "SET_INCREASE") {
        console.log("SET INCREASE", action.payload);
        let updatedCart = state.cart.map((item) => {
            if (item.id === action.payload) {
                let newAmount = item.amount + 1;
                return { ...item, amount: newAmount };
            }else{
                return item;
            }
        });
        return {
            ...state,
            cart: updatedCart,
        };
    }
    if (action.type === "SET_DECREASE") {
        console.log("SET DECREASE", action.payload);

        let updatedCart = state.cart
            .map((item) => {
                if (item.id === action.payload) {
                    let newAmount = item.amount - 1;
                    return { ...item, amount: newAmount };
                }else{
                    return item;
                }
            })
            .filter((item) => item.amount !== 0);
        return {
            ...state,
            cart: updatedCart,
        };
    }

    if (action.type === "REMOVE_ITEM") {
        console.log("REMOVE ITEM", action.payload);
        let updatedCart = state.cart.filter((item) => item.id !== action.payload);
        
        return {
          ...state,
          cart: updatedCart,
        };
      }
        if (action.type === "CLEAR_CART") {
            console.log("CLEAR CART");
            return {
                ...state,
                cart: [],
            };
        }
        //get total price 
        if (action.type === "GET_TOTAL_PRICE") {
            let { total_amount, total_item } = state.cart.reduce(
                (cartTotal, cartItem) => {
                    const { amount, price } = cartItem;
                    cartTotal.total_item += amount;
                    cartTotal.total_amount += price * amount;
                    return cartTotal;
                },
                {
                    total_item: 0,
                    total_amount: 0,
                }
            );
            total_amount = parseFloat(total_amount.toFixed(2));
            
            return {
                ...state,
                total_amount,
                total_item,
            };
        }
        //add shipping fee
        if (action.type === "ADD_SHIPPING_FEE") {
            let final_amount = parseInt(state.total_amount) + parseInt(state.shipping_fee);
            return {
                ...state,
                final_amount,
            };
        }


    

        
      return state;
    };

export default cartReducer
import { ADD_TO_CART, GET_ALL_BOOKS_IN_CART, GET_ERROR_BOOKS_IN_CART, REMOVE_FROM_CART } from "../action";
import { InitialState } from "../store";

export const CartPageBooks = (state = InitialState.cart, action) => {
    switch (action.type) {
   
      case ADD_TO_CART:
        const item =action.payload
        const isItemExist = state.cartBooks.find(i=>i.book === item.book)
        if(isItemExist){
  
          return {
            ...state,
            cartBooks: state.cartBooks.map(i=> i.book ===isItemExist.book ? item : i),
          };
        }else{
          return{
            ...state,
            cartBooks: [...state.cartBooks, item]
          }
          }
      case REMOVE_FROM_CART:
        return {
          ...state,
          cartBooks: state.cartBooks.filter((book, i) => i !== action.payload),
        };
  
      default:
        return state;
    }
  };
  
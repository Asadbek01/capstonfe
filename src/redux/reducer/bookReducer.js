import {
  GET_BOOKS,
  GET_BOOKS_ERROR,
  GET_BOOKS_LOADING,
  GET_BOOKS_DETAIL,
  GET_BOOKS_DETAIL_ERROR,
  ADD_TO_CART,
  GET_SEARCHED_BOOKS,
  GET_ALL_BOOKS_IN_CART,
  GET_ERROR_BOOKS_IN_CART,
  REMOVE_FROM_CART,
  GET_CATEGORY_BOOKS,
} from "../action";
import { InitialState } from "../store";

export const BookReducer = (state = InitialState.book, action) => {
  switch (action.type) {
    case GET_BOOKS:
      case GET_SEARCHED_BOOKS:
        case GET_CATEGORY_BOOKS:
      return {
        ...state,
        stock: action.payload,
      };
      

    case GET_BOOKS_ERROR:
      return {
        ...state,
        errorCode: action.payload,
      };
    case GET_BOOKS_LOADING:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export const BookDetailReducer = (
  state = InitialState.bookWithSpecificId,
  action
) => {
  switch (action.type) {
    case GET_BOOKS_DETAIL:
      return {
        ...state,
        bookWithId: action.payload,
      };

    case GET_BOOKS_DETAIL_ERROR:
      return {
        ...state,
        errorCode: action.payload,
      };

    default:
      return state;
  }
};
export const CartPageBooks = (state = InitialState.cart, action) => {
  switch (action.type) {
    case GET_ALL_BOOKS_IN_CART:
      return {
        ...state,
        cartBooks: action.payload,
      };

    case GET_ERROR_BOOKS_IN_CART:
      return {
        ...state,
        errorCode: action.payload,
      };
    case ADD_TO_CART:
      const item =action.payload
      const isItemExist = state.cartBooks.find(i=>i.book === item.product)
      if(isItemExist){

        return {
          ...state,
          cartBooks: state.cartBooks.map(i=> i.product ===isItemExist.product? item: i),
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

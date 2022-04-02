import {  GET_BOOKS, GET_BOOKS_ERROR, GET_BOOKS_LOADING,ADD_TO_CART, REMOVE_FROM_CART } from "../action";
import { InitialState } from "../store";

export const BookReducer = (state = InitialState.book, action) =>{
 switch(action.type){
        case GET_BOOKS :
            return {
                ...state,
            stock: action.payload
            }

            case GET_BOOKS_ERROR :
            return {
                ...state,
                errorCode: action.payload
            }
            case GET_BOOKS_LOADING:
      return {
        ...state,
        isLoading: false,
      }
      case ADD_TO_CART:
      return {
        ...state,
        book: [...state.stock, action.payload],
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        
        //   products: state.products.filter(
        //     (book, i) => i !== action.payload
        //   ),
        // ALSO SLICE :D
        book: [
          ...state.stock.slice(0, action.payload),
          ...state.stock.slice(action.payload + 1),
        ],
      }

default:
    return state
 }
}
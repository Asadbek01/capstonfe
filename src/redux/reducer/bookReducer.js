import {  GET_BOOKS, GET_BOOKS_ERROR, GET_BOOKS_LOADING,GET_BOOKS_DETAIL,GET_BOOKS_DETAIL_ERROR} from "../action";
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
      

default:
    return state
 }
}



export const BookDetailReducer = (state = InitialState.cart, action) =>{
    switch(action.type){
           case GET_BOOKS_DETAIL :
               return {
                   ...state,
                   cartBooks: action.payload
               }
   
               case GET_BOOKS_DETAIL_ERROR :
               return {
                   ...state,
                   errorCode: action.payload
               }
        
   
   default:
       return state
    }
   }


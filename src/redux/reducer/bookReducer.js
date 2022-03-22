import {  GET_BOOKS, GET_BOOKS_ERROR, GET_BOOKS_LOADING  } from "../action";
import { InitialState } from "../store";

export const BookReducer = (state = InitialState.book, action) =>{
 switch(action.type){
        case GET_BOOKS :
            return {
                ...state,
            data: action.payload
            }

            case GET_BOOKS_ERROR :
            return {
                ...state,
                isError: true
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
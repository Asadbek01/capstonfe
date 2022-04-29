import {
  GET_BOOKS,
  GET_BOOKS_ERROR,
  GET_BOOKS_LOADING,
  GET_BOOKS_DETAIL,
  GET_BOOKS_DETAIL_ERROR,
  GET_SEARCHED_BOOKS,
  GET_CATEGORY_BOOKS,
  ADMIN_GET_ALL_PRODUCTS,
  ADMIN_GET_ALL_PRODUCTS_ERROR,
  NEW_PRODUCT_PROCCESS,
  NEW_PRODUCT_PROCCESS_ERROR,
  CLEAR_ERRORS,
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
        totalBooks: action.payload.totalBooks,
        pages: action.payload.pages,
      };
    case ADMIN_GET_ALL_PRODUCTS:
      return {
        ...state,
        stock: action.payload,
      };

     
    case GET_BOOKS_ERROR:
    case ADMIN_GET_ALL_PRODUCTS_ERROR:
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

export const newBookReducer = (state = InitialState.newBook, action) => {
  switch (action.type) {

    case NEW_PRODUCT_PROCCESS:
      return {
        ...state,
        isLoading: false,
        adminBook: action.payload,
      };

      case NEW_PRODUCT_PROCCESS_ERROR:
          return {
              ...state,
              error: action.payload,
              adminBook: []
          }

      // case NEW_PRODUCT_RESET:
      //     return {
      //         ...state,
      //         success: false
      //     }

      case CLEAR_ERRORS:
          return {
              ...state,
              errorCode: null
          }

          default:
            return state;
        }
}

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


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
  INCREASE_QUANTITY,
  ADMIN_GET_ALL_PRODUCTS,
  ADMIN_GET_ALL_PRODUCTS_ERROR,
  NEW_PRODUCT_PROCCESS,
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

export const newBooksAdmin = (state = InitialState.book, action) => {
  switch (action.type) {
  case NEW_PRODUCT_PROCCESS:
    return {
      ...state,
      isLoading: false,
      adminBook: [...state.adminBook, action.payload]
    }

default :
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

// const insceraseQnty =(state= InitialState.cart, action) =>
// {
//   switch (action.type) {
//     case INCREASE_QUANTITY:

//           const item =action.payload
//           const isItemExist = state.cartBooks.findIndex(i=>i.id === item.id)

//   }
// }

import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { BookDetailReducer, BookReducer } from "../reducer/bookReducer";
import { CartPageBooks } from "../reducer/cartReducer";
import { userReducer } from "../reducer/userReducer";

const composeFunction = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const InitialState = {
  book: {
    stock: [],
    category: [],
    errorCode: null,
    isLoading: true,
  },

  bookWithSpecificId: {
    bookWithId: [],
    errorCode: null,
  },
  cart: {
    cartBooks: [],
    errorCode: null,
  },
  user: {
    allUsers: [],
    loggedUser: [],
    loading: true,
    isAuth: false,
    error: null,
  },
};

const MixtureReducer = combineReducers({
  book: BookReducer,
  bookWithSpecificId: BookDetailReducer,
  cart: CartPageBooks,
  user: userReducer,
});

const configureStore = createStore(
  // 1 MainReducer,
  MixtureReducer,
  // 2 InitialState
  InitialState,
  // 3 Enhancer
  composeFunction(applyMiddleware(thunk))
);

export default configureStore;

import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { BookDetailReducer, BookReducer } from "../reducer/bookReducer";


const composeFunction =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const InitialState ={
    book:{
        stock: [],
        errorCode: null,
        isLoading: true
    },

    cart:{
        cartBooks: [],
        errorCode: null,
    },
  
}

const MixtureReducer = combineReducers({
    book: BookReducer,
    cart: BookDetailReducer
  
})

const configureStore = createStore(
    // 1 MainReducer,
    MixtureReducer,
    // 2 InitialState
    InitialState,
    // 3 Enhancer
 composeFunction(applyMiddleware(thunk))
    )

export default configureStore
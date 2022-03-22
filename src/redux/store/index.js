import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { BookReducer } from "../reducer/bookReducer";
import cartReducer from "../reducer/CartReducer";
import userReducer from "../reducer/userReducer";

const composeFunction =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const InitialState ={
    book:{
        data: [],
        isError: false
    },
    cart: {
        cartBooks: []
    },

    user: {
        name: ''
    }
}

const MixtureReducer = combineReducers({
    book: BookReducer,
    cart: cartReducer,
    user: userReducer
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
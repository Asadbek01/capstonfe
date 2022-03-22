import { createStore } from "redux";
import { BookReducer } from "../reducer/bookReducer";

export const InitialState ={
    book:{
        data: []
    }
}

createStore(
    // 1 MainReducer,
    BookReducer,
    // 2 InitialState
    InitialState,
    // 3 Enhancer
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
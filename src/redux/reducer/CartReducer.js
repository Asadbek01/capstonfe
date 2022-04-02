import { ADD_TO_CART, REMOVE_FROM_CART } from '../action'
import { InitialState } from '../store'

const cartReducer = (state = InitialState.book, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        book: [...state.data, action.payload],
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        
        //   products: state.products.filter(
        //     (book, i) => i !== action.payload
        //   ),
        // ALSO SLICE :D
        book: [
          ...state.data.slice(0, action.payload),
          ...state.data.slice(action.payload + 1),
        ],
      }

    default:
      return state
  }
}

export default cartReducer
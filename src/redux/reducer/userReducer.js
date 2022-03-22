import { SET_USER_NAME } from '../action'
import { InitialState } from '../store'

// let's write our reducer! :)
const userReducer = (state = InitialState.user, action) => {
  switch (action.type) {
    case SET_USER_NAME:
      return {
        ...state,
        name: action.payload,
      }

    default:
      return state
  }
}

export default userReducer
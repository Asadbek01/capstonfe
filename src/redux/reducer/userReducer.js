import { ADD_MY_INFO_TO_CURRENT_USER, LOG_OUT_USER, USER_LOGIN } from "../action"
import { InitialState } from "../store"

const userReducer = (state = InitialState.user, action) => {
    switch(action.type) {
        case USER_LOGIN: return {
            ...state,
            isLoggedIn: true
        }
        case ADD_MY_INFO_TO_CURRENT_USER: return {
            ...state,
            currentUser: action.payload
        }
        case LOG_OUT_USER: return {
            ...state,
            isLoggedIn: false,
            currentUser: null
        }
      
        // case ACTIONS.CLEAR_USER_INFO: return {
        //     isLoggedIn: false,
        //     currentUser: null,
        //     theme: 'dark'
        // }
        default: return state
    }
}

export default userReducer
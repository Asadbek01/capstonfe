import { ExpansionPanelActions } from "@material-ui/core"
import { CLEAR_ERRORS, USER_LOGIN, USER_LOGIN_ERROR, USER_LOGIN_REQUEST, USER_REGISTER, USER_REGISTER_ERROR, USER_REGISTER_REQUEST } from "../action"
import { InitialState } from "../store"



export const userReducer = ( state = InitialState.user, action ) => {
    switch(action.type) {

     case USER_LOGIN_REQUEST:
        return {
            loading: true,
            isAuth: false
        }  
        case USER_LOGIN:
            return {
                ...state,
                loading: false,
                isAuth: true,
                loggedUser: action.payload
            }  
            case USER_LOGIN_ERROR:
                return {
                    ...state,
                    loading: true,
                    isAuth: false,
                    user: null,
                    error: action.payload
                }          
                
                case CLEAR_ERRORS:
                    return {
                        ...state,
                        error: null
                    }
  


        default:
            return state
    }
}




export const userReducerRegister = ( state = InitialState.user, action ) => {
    switch(action.type) {

     case USER_REGISTER_REQUEST:
        return {
            loading: true,
            isAuth: false
        }  
        case USER_REGISTER:
            return {
                ...state,
                loading: false,
                isAuth: true,
                loggedUser: action.payload
            }  
            case USER_REGISTER_ERROR:
                return {
                    ...state,
                    loading: true,
                    isAuth: false,
                    user: null,
                    error: action.payload
                }          
                
                case CLEAR_ERRORS:
                    return {
                        ...state,
                        error: null
                    }
  


        default:
            return state
    }
}
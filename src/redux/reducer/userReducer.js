import { ExpansionPanelActions } from "@material-ui/core"
import { CLEAR_ERRORS, USER_LOAD, USER_LOAD_ERROR, USER_LOAD_REQUEST, USER_LOGIN, USER_LOGIN_ERROR, USER_LOGIN_REQUEST, USER_REGISTER, USER_REGISTER_ERROR, USER_REGISTER_REQUEST } from "../action"
import { InitialState } from "../store"



export const userReducer = ( state = InitialState.user, action ) => {
    switch(action.type) {

    
        case USER_LOGIN:
            case USER_REGISTER:
            return {
                ...state,
                loading: false,
                isAuth: true,
            }  
            case USER_LOAD:
                return {
                    ...state,
                    isAuth: true,
                    loggedUser: [...state.loggedUser, action.payload]

                }

             case USER_LOAD_ERROR:
                 return{
                    ...state,
                    isAuth: false,
                    error: action.payload
                 }

            case USER_LOGIN_ERROR:
                case USER_REGISTER_ERROR:
                return {
                    ...state,
                    loading: false,
                    isAuth: true,
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





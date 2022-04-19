import {
  CLEAR_ERRORS,
  USER_LOAD,
  USER_LOAD_ERROR,
  USER_LOGIN,
  USER_LOGIN_ERROR,
  USER_REGISTER,
  USER_REGISTER_ERROR,
  USER_LOG_OUT,
  USER_LOG_OUT_FAIL,
  USER_PROFILE_UPDATE,
  USER_PROFILE_UPDATE_ERROR,
  USER_PROFILE_RESET
} from "../action";
import { InitialState } from "../store";

export const userReducer = (state = InitialState.user, action) => {
  switch (action.type) {
    case USER_LOAD:
        case USER_REGISTER:
          case USER_LOGIN:
      return {
        ...state,
        isAuth: true,
        loading: false,
        loggedUser: action.payload
      };

      case USER_LOG_OUT:
        return {
          isAuth: false,
          loading: true,
          loggedUser: null

        }
        case USER_LOG_OUT_FAIL:
          return {
            ...state,
            error: action.payload
          }

    case USER_LOAD_ERROR:
        case USER_REGISTER_ERROR:
          case USER_LOGIN_ERROR:
      return {
        ...state,
        isAuth: false,
        loading: true,
        error: action.payload,
        loggedUser: []
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};


export const userProfileUpdate =(state ={}, action) => {
   switch(action.type){
     
    case USER_PROFILE_UPDATE:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload
      }

      case USER_PROFILE_RESET:
        return {
          isUpdated: false

        }

      case USER_PROFILE_UPDATE_ERROR:
        return{
          ...state,
          loading: false,
          error: action.payload
        }
    
    
    
    default:
       return state;
   }
}



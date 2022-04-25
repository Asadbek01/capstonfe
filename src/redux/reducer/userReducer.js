import {
  CLEAR_ERRORS,
  USER_LOAD,
  USER_LOAD_ERROR,
  USER_LOGIN,
  USER_LOGIN_ERROR,
  USER_REGISTER,
  USER_REGISTER_ERROR,
  USER_PROFILE_UPDATE,
  USER_PROFILE_UPDATE_ERROR,
  ADMIN_IS_ASKING_ALL_USERS,
  ADMIN_CANT_GET_ALL_USERS,
} from "../action";
import { InitialState } from "../store";

export const userReducer = (state = InitialState.user, action) => {
  switch (action.type) {
    case ADMIN_IS_ASKING_ALL_USERS:
      return {
        ...state,
        allUsers: [state.allUsers, action.payload],
      };
    case ADMIN_CANT_GET_ALL_USERS:
      return {
        ...state,
        allUsers: null,
      };

    case USER_LOAD:
    case USER_REGISTER:
    case USER_LOGIN:
      return {
        ...state,
        isAuth: true,
        loading: false,
        loggedUser: action.payload,
      };

    case USER_PROFILE_UPDATE:
      return {
        loading: false,
        isUpdated: null,
      };

    case USER_PROFILE_UPDATE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case USER_LOAD_ERROR:
    case USER_REGISTER_ERROR:
    case USER_LOGIN_ERROR:
      return {
        ...state,
        isAuth: false,
        loading: true,
        error: action.payload,
        loggedUser: [],
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

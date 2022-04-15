import {
  CLEAR_ERRORS,
  USER_LOAD,
  USER_LOAD_ERROR,
//   USER_LOGIN,
//   USER_LOGIN_ERROR,
//   USER_LOGIN_REQUEST,
//   USER_REGISTER,
//   USER_REGISTER_ERROR,
//   USER_REGISTER_REQUEST,
} from "../action";
import { InitialState } from "../store";

export const userReducer = (state = InitialState.user, action) => {
  switch (action.type) {
    case USER_LOAD:
      return {
        ...state,
        isAuth: true,
        loggedUser: [...state.loggedUser, action.payload],
      };

    case USER_LOAD_ERROR:
      return {
        ...state,
        isAuth: false,
        error: action.payload,
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



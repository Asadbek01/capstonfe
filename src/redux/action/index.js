import axios from "axios";
export const GET_BOOKS = "ADD_TO_BOOKS";
export const GET_BOOKS_ERROR = "GET_BOOKS_ERROR";
export const GET_BOOKS_LOADING = "GET_BOOKS_LOADING";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const SET_USER_NAME = "SET_USER_NAME ";
export const GET_BOOKS_DETAIL = "GET_BOOKS_DETAIL";
export const GET_BOOKS_DETAIL_ERROR = "GET_BOOKS_DETAIL_ERROR";
export const GET_SEARCHED_BOOKS = "GET_SEARCHED_BOOKS";
export const ERROR_SEARCHED_BOOKS = "ERROR_SEARCHED_BOOKS";
export const GET_ALL_BOOKS_IN_CART = "GET_ALL_BOOKS_IN_CART";
export const GET_ERROR_BOOKS_IN_CART = "GET_ERROR_BOOKS_IN_CART";
export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGIN_ERROR = "USER_LOGIN_ERROR";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const USER_REGISTER_REQUEST = "USER_RWGISTER_REQUEST";
export const USER_REGISTER = "USER_REGISTER";
export const USER_REGISTER_ERROR = "USER_REGISTER_ERROR";
export const USER_LOAD_REQUEST = "USER_LOAD_REQUEST";
export const USER_LOAD = "USER_LOAD";
export const USER_LOAD_ERROR = "USER_LOAD_ERROR";
export const GET_CATEGORY_BOOKS = "GET_CATEGORY_BOOKS";
export const ERROR_CATEGORY_BOOKS = "ERROR_CATEGORY_BOOKS";
export const USER_LOG_OUT_FAIL = 'USER_LOG_OUT_FAIL'
export const USER_LOG_OUT ='USER_LOG_OUT'
export const USER_PROFILE_UPDATE_ERROR = "USER_PROFILE_UPDATE_ERROR"
export const USER_PROFILE_UPDATE = "USER_PROFILE_UPDATE"
export const USER_PROFILE_RESET = "USERUSER_PROFILE_RESETUPDATE"




export const addToCartAction = (bookToAdd) => ({
  type: ADD_TO_CART,
  payload: bookToAdd, 
});
export const removeFromCartAction = (index) => ({
  type: REMOVE_FROM_CART,
  payload: index,
});

export const getBooks = (SearchQuery, currentPage = 1, category) => {
  return async (dispatch) => {
    try {
      let baselink = `http://localhost:3002/books?search=${SearchQuery}&page=${currentPage}`;
      if (category) {
        baselink = `http://localhost:3002/books?search=${SearchQuery}&page=${currentPage}&category=${category}`;
      }
      const { data } = await axios.get(baselink);
      
      dispatch({
        type: GET_BOOKS,
        payload: data,
      });
      dispatch({
        type: GET_BOOKS_LOADING,
      });
      dispatch({
        type: GET_SEARCHED_BOOKS,
        payload: data,
      });
      dispatch({
        type: GET_CATEGORY_BOOKS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_BOOKS_ERROR,
        payload: error.message,
      });
      dispatch({
        type: GET_BOOKS_LOADING,
        IsLoading: true,
      });
      dispatch({
        type: ERROR_SEARCHED_BOOKS,
        payload: error.message,
      });
      dispatch({
        type: ERROR_CATEGORY_BOOKS,
        payload: error.message,
      });
    }
  };
};

export const getBooksDetail = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("http://localhost:3002/books/" + id);

      dispatch({
        type: GET_BOOKS_DETAIL,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: GET_BOOKS_DETAIL_ERROR,
        payload: error.message,
      });
    }
  };
};

export const Register = (userDetails) => {
  return async (dispatch) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:3002/users/register",
        userDetails,
        config
      );
      let token = data.accessToken
      localStorage.setItem("MyToken", 'Bearer ' + token)
            dispatch({
        type: USER_REGISTER,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: USER_REGISTER_ERROR,
        payload: error.message,
      });
    }
  };
};


//  Login

export const Login = (userDetails) => {
  
  return async (dispatch) => {
    try {
          const config = {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:3002/users/login",
        userDetails,
        config
        );
      localStorage.setItem("MyToken" , data.accessToken)
      dispatch({
        type: USER_LOGIN,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: USER_LOGIN_ERROR,
        payload: error.message,
      });
    }
  };
};


// Update User

export const updateUser = (userDetails) => {
  return async (dispatch) => {
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await axios.put(
        "http://localhost:3002/users/me/update",
        userDetails,
        config
      );
      localStorage.getItem("MyToken")
            dispatch({
        type: USER_PROFILE_UPDATE,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: USER_PROFILE_UPDATE_ERROR,
        payload: error.message,
      });
    }
  };
};

// Load User
export const LoadUser = () => {
  return async (dispatch) => {
    try {
      let users = localStorage.getItem('MyToken');
      const config = {
        headers: {
          Authorization:
          users
        },
      };

      const { data } = await axios.get(
        "http://localhost:3002/users/me",
        config
      );
      dispatch({
        type: USER_LOAD,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: USER_LOAD_ERROR,
        payload: error.response.data.message,
      });
    }
  };
};

// logout user

export const LogOutUser = () => {
  return async (dispatch) => {
    try {
      const config = {
        method: "GET",
            };
      
      const { data } = await axios.get(
        "http://localhost:3002/users/me",
        config
        );
    dispatch({
      type: USER_LOG_OUT,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_LOG_OUT_FAIL,
      payload: error.message,
    });
  }
};
};

export const ClearErrors = () => {
  return async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };
};

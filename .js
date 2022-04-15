// user Reducer
// export const UserReducer = (state = InitialState.user, action) => {
//     switch (action.type) {
//       case USER_LOGIN:
//         return {
//           ...state,
//           loggedUser: action.payload,
//         };
    
//       case USER_LOAD_ERROR:
//         return {
//           ...state,
//           errorCode: action.payload,
//         };
//       default:
//         return state;
//     }
//   };



// action
export const Login = (email, password, rememberMe) => {
    return async (dispatch) => {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const { data } = await axios.post(
          "http://localhost:3002/users/login",
          { email, password, rememberMe },
          config
        );
      //   localStorage.setItem("MyToken", user.accessToken);
      //   console.log(user.accessToken)
  
        dispatch({
          type: USER_LOGIN,
          payload: data.user,
        });
      } catch (error) {
        dispatch({
          type: USER_LOGIN_ERROR,
          payload: error.message,
        });
      }
    };
  };
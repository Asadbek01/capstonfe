// USER_LOAD
const[registered, setRegisterd] = useState(false);
const [data, setData] = useState([]);
console.log(process.env.REACT_APP_TOKEN);
const fetchMyDetails = async () => {
  try {
    const response = await fetch("http://localhost:3002/users/me", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YzFhYjk2YjZkNzkzYTBhMDZmYTciLCJpYXQiOjE2NDk5NjM0MDMsImV4cCI6MTY1MDU2ODIwM30.kP4Dyl6EfjRDUo5qKE6b83Z36ai54mWdHla4e-ZqiXg",
      },
    });
    if (response.ok) {
      const data = await response.json();
      setData(data);
    } else {
      console.error("fetch failed");
    }
  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  fetchMyDetails();
}, []);


// user Reducer




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
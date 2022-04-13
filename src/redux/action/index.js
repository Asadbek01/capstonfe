import axios from "axios"
export const GET_BOOKS = "ADD_TO_BOOKS"
export const GET_BOOKS_ERROR = "GET_BOOKS_ERROR"
export const GET_BOOKS_LOADING = "GET_BOOKS_LOADING"
export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"
export const SET_USER_NAME = "SET_USER_NAME "
export const GET_BOOKS_DETAIL = "GET_BOOKS_DETAIL"
export const GET_BOOKS_DETAIL_ERROR = "GET_BOOKS_DETAIL_ERROR"
export const GET_SEARCHED_BOOKS = "GET_SEARCHED_BOOKS"
export const ERROR_SEARCHED_BOOKS = "ERROR_SEARCHED_BOOKS"
export const GET_ALL_BOOKS_IN_CART = "GET_ALL_BOOKS_IN_CART"
export const GET_ERROR_BOOKS_IN_CART = "GET_ERROR_BOOKS_IN_CART"
export const  USER_LOGIN_REQUEST= "USER_LOGIN_REQUEST"
export const  USER_LOGIN= "USER_LOGIN"
export const  USER_LOGIN_ERROR= "USER_LOGIN_ERROR"
export const  CLEAR_ERRORS= "CLEAR_ERRORS"
export const USER_REGISTER_REQUEST = "USER_RWGISTER_REQUEST"
export const USER_REGISTER  = "USER_REGISTER"
export const USER_REGISTER_ERROR = "USER_REGISTER_ERROR"

export const addToCartAction = (bookToAdd) => ({
    type: ADD_TO_CART,
    payload: bookToAdd,
  })
  export const removeFromCartAction = (index) => ({
    type: REMOVE_FROM_CART,
    payload: index,
  })

export const getBooks = () =>{
 return async (dispatch) => {

            try {
                const { data } =  await axios.get(`http://localhost:3002/books`)
                
                dispatch({
                    type: GET_BOOKS,
                    payload: data,
                })
                dispatch({
                    type: GET_BOOKS_LOADING,
                })
                
            } catch (error) {
                dispatch({
                    type: GET_BOOKS_ERROR,
                    payload: error.message
                })
                dispatch({
                    type: GET_BOOKS_LOADING,
                    IsLoading: true
                })
                
            }
        
    }
}

export const getSearchedBooks = (SearchQuery) =>{
    return async (dispatch) => {
               try {
                   const { data } =  await axios.get(`http://localhost:3002/books?search=${SearchQuery}`)
                   
                   dispatch({
                    type: GET_SEARCHED_BOOKS,
                    payload: data,
                })
             
                
            } catch (error) {
                dispatch({
                    type: ERROR_SEARCHED_BOOKS,
                    payload: error.message
                })
                   
               }
       }
   }
   


export const getBooksDetail = (id) =>{
   return async (dispatch) => {
               try {
                   
                   const { data } =  await axios.get("http://localhost:3002/books/" + id)
                
                   dispatch({
                       type: GET_BOOKS_DETAIL,
                       payload: data,
                   })
                 
                   
               } catch (error) {
                   dispatch({
                       type: GET_BOOKS_DETAIL_ERROR,
                       payload: error.message
                   })
                   
                   
               }
            }
   }



   
   export const Login = (email, password) =>{
    return async (dispatch) => {
                try {
                    
                    
                    dispatch({
                        type: USER_LOGIN_REQUEST,
                    })
                    
                    const config ={
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                    const { data } =  await axios.post("http://localhost:3002/users/login", {email, password}, config)
                    dispatch({
                        type: USER_LOGIN,
                        payload: data.user
                    })
                    
                } catch (error) {
                    dispatch({
                        type: USER_LOGIN_ERROR,
                        payload: error.response.data.message,
                    })
                    
                    
                }
             }
    }
 

    // REgister

     
   export const UserRegister = (userdata) =>{
    return async (dispatch) => {
                try {
                    
                    
                    dispatch({
                        type: USER_REGISTER_REQUEST,
                    })
                    
                    const config ={
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                    const { data } =  await axios.post("http://localhost:3002/users/register", userdata, config)
                    dispatch({
                        type: USER_REGISTER,
                        payload: data.user
                    })
                    
                } catch (error) {
                    dispatch({
                        type: USER_REGISTER_ERROR,
                        payload: error.response.data.message,
                    })
                    
                    
                }
             }
    }
export const ClearErrors =() =>{
    return async (dispatch) => {
    dispatch({type: CLEAR_ERRORS})
}
}
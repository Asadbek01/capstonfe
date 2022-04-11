import axios from "axios"
export const GET_BOOKS = "ADD_TO_BOOKS"
export const GET_BOOKS_ERROR = "GET_BOOKS_ERROR"
export const GET_BOOKS_LOADING = "GET_BOOKS_LOADING"
export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"
export const SET_USER_NAME = "SET_USER_NAME "
export const GET_BOOKS_DETAIL = "GET_BOOKS_DETAIL"
export const GET_BOOKS_DETAIL_ERROR = "GET_BOOKS_DETAIL_ERROR"

export const addToCartAction = (bookToAdd) => ({
    type: ADD_TO_CART,
    payload: bookToAdd,
  })
  export const removeFromCartAction = (index) => ({
    type: REMOVE_FROM_CART,
    payload: index,
  })

export const getBooks = (SearchQuery = "") =>{
 return (dispatch) => {
         setTimeout( async() => {

            try {
                const { data } =  await axios.get(`http://localhost:3002/books?search=${SearchQuery}`)
                
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
        }, 1000)
    }
}


export const getBooksDetail = (id) =>
    async (dispatch) => {
               try {
                   
                   const { data } =  await axios.get(`http://localhost:3002/books/${id}`)
                   
                   dispatch({
                       type: GET_BOOKS_DETAIL,
                       payload: data,
                   })
                   dispatch({
                       type: GET_BOOKS_LOADING,
                   })
                   
               } catch (error) {
                   dispatch({
                       type: GET_BOOKS_DETAIL_ERROR,
                       payload: error.message
                   })
                   dispatch({
                       type: GET_BOOKS_LOADING,
                       IsLoading: true
                   })
                   
               }
       
   }
// export const getBooksAction = () => {
//     return (dispatch, getState) => {

//         setTimeout(async () => {
//             try {
//                 let response = await fetch(
                    
//                 )
//                 if (response.ok) {
//                     let { data } = await response.json()

//                     console.log('BOOKS IN ACTION CREATOR', data)
                   
                  
//                 } else {
//                     console.log('error happened fetching the books')
//                     // maybe here we can dispatch another action!
//                     // an ERROR action :)
//                     // dispatch({
//                     //   type: GET_BOOKS_ERROR,
//                     // })
//                     // dispatch({
//                     //   type: GET_BOOKS_LOADING,
//                     // })
//                 }
//             } catch (error) {
//                 console.log(error)
//                 // maybe here we can dispatch another action!
//                 // an ERROR action :)
//                 //   
//             }
//         }, 1000)
//     }
// }
export const GET_BOOKS = "ADD_TO_BOOKS"
export const GET_BOOKS_ERROR = "GET_BOOKS_ERROR"
export const GET_BOOKS_LOADING = "GET_BOOKS_LOADING"    
export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"
export const SET_USER_NAME = "SET_USER_NAME "

// export const addToCartAction = (bookToAdd) => ({
//     type: ADD_TO_CART,
//     payload: bookToAdd,
//   })

export const getBooksAction = () => {
    return (dispatch, getState) => {
      const stateRightNow = getState()
      setTimeout(async () => {
        try {
          let response = await fetch(
            'http://localhost:3002/product'
          )
          if (response.ok) {
            let data = await response.json()
            console.log('BOOKS IN ACTION CREATOR', data)
            // here we're going to dispatch the action with data as the payload
            dispatch({
              type: GET_BOOKS,
              payload: data,
            })
            dispatch({
              type: GET_BOOKS_LOADING,
            })
          } else {
            console.log('error happened fetching the books')
            // maybe here we can dispatch another action!
            // an ERROR action :)
            dispatch({
              type: GET_BOOKS_ERROR,
            })
            dispatch({
              type: GET_BOOKS_LOADING,
            })
          }
        } catch (error) {
          console.log(error)
          // maybe here we can dispatch another action!
          // an ERROR action :)
          dispatch({
            type: GET_BOOKS_ERROR,
          })
          dispatch({
            type: GET_BOOKS_LOADING,
          })
        }
      }, 1000)
    }
  }
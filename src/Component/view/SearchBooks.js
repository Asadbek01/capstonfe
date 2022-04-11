import React, { useState } from 'react'


export const SearchBooks = ({ history}) => {
    const [ SearchQuery, setSearchQuery] = useState('')
    
    
    
    
     // prevent page refreshing
     const handleSubmit = (e) => {
        e.preventDefault()
        
        if(SearchQuery.trim()){
            history.push(`/search/${SearchQuery}`)
        }else{
            history.push("/")
        }
      }
      
      // search input onChange event
      const handleInputChange = (e) => {
        setSearchQuery(e.target.value)
      }

  return (
      <>
    <form onSubmit={handleSubmit()}>

         <div className="input-group">
          <input
            type="text"
            id="search_field"
            className="form-control"
            placeholder="Enter the book you want..."
            onChange={(e) => handleInputChange(e)}
          />
          <div className="input-group-append">
            <button id="search_btn" className="btn btn-primary">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </div>
    </form>
</>
  )
}

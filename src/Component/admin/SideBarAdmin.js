import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar-wrapper mt-n2">
      <nav id="sidebar">
        <ul className="list-unstyled components">
          <li>
            <Link to="/dashboard">
              <i className="fa fa-tachometer"></i> Dashboard
            </Link>
          </li>
     
          <li>
            <a href="books/admin"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <i className="fa fa-book"></i> Books
            </a>
            <ul className="collapse list-unstyled" id="productSubmenu">
              <li>
                <a href="books/admin">
                  <i className="fa fa-clipboard"></i> All
                </a>
              </li>

              <li>
                <a href="books/admin">
                  <i className="fa fa-plus"></i> Create
                </a>
              </li>
            </ul>
          </li> 
 

          <li>
            <Link to="/admin/orders">
              <i className="fa fa-shopping-basket"></i> Orders
            </Link>
          </li>
          <li>
            <Link to="/admin/users">
              <i className="fa fa-users"></i> Users
            </Link>
          </li>

          <li>
            <Link to="/admin/reviews">
              <i className="fa fa-star"></i> Reviews
            </Link>
          </li>
        </ul>
        
      </nav>
      
    </div>
  );
};

export default Sidebar;

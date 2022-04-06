import './App.css';
import "./Component/BooksStore/index.css"
import "./Component/view/Footer/index.css"
import { MainHomePage } from './Component/BooksStore/MainHomePage';
// import '../../css/MainHomePage.css'

import { MyNavbar } from './Component/BooksStore/Navbar';
import { CartPage } from './Component/BooksStore/CartPage';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import Login from './Component/view/LoginPage';
import SignUp from './Component/view/SignUpPage';
import BookDetail  from "./Component/BooksStore/BookDetail"
import "bootstrap/dist/css/bootstrap.min.css"
import { Footer } from './Component/view/Footer/Footer';
function App() {
  return (
  <BrowserRouter> 
   <MyNavbar />
   <Routes>
   <Route path='/login' element={<Login/>}/>
   <Route path='/signUp' element={<SignUp/>}/>
     <Route path='/' element={<MainHomePage/>}/>
     <Route path='/cart' element={<CartPage />}/>
     <Route path = "/detail/:id" element={<BookDetail />} />
    </Routes>
   <Footer />
  </BrowserRouter>
    )
}

export default App;

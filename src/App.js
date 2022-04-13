import './App.css';
import "./Component/BooksStore/index.css"
import "./Component/view/Footer/index.css"
import { MainHomePage } from './Component/BooksStore/MainHomePage';
// import '../../css/MainHomePage.css'

import { MyNavbar } from './Component/BooksStore/Navbar';
import { CartPage } from './Component/BooksStore/CartPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import SignUp from './Component/user/SignUpPage';
import UserLogin from './Component/user/LoginPage';
import "bootstrap/dist/css/bootstrap.min.css"
import { Footer } from './Component/view/Footer/Footer';
import { PageError } from './Component/view/PageError';
import BookDetail from './Component/view/BookDetail';
function App() {
  return (
  <Router>
   <MyNavbar />
     <Routes>
   <Route path='/' element={<UserLogin />}/>
   <Route path='/signUp' element={<SignUp/>}/>
     <Route path='/home' element={<MainHomePage/>} exact/>
     <Route path='/cart' element={<CartPage />}/>
     <Route path = "/detail/:id" element={<BookDetail />} />
     <Route path="*" element={<PageError />} />
     </Routes>
   <Footer />
  </Router>
    )
}

export default App;

import './App.css';
import { MainHomePage } from './Component/view/MainHomePage';
import { Footer } from './Component/view/Footer';
import { MyNavbar } from './Component/view/Navbar';
import { CartPage } from './Component/view/CartPage';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import Login from './Component/view/LoginPage';
import SignUp from './Component/view/SignUpPage';
import BookDetail from './Component/view/bookDetail';

function App() {
  return (
  <BrowserRouter> 
   <MyNavbar />
   <Routes>
   <Route path='/login' element={<Login/>}/>
   <Route path='/signUp' element={<SignUp/>}/>
     <Route path='/' element={<MainHomePage/>}/>
     <Route path='/cart' element={<CartPage />}/>
     <Route path = "/detail" element={<BookDetail />} />
    </Routes>
   <Footer />
  </BrowserRouter>
    )
}

export default App;

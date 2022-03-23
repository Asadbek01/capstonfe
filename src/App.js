import './App.css';
import { MainHomePage } from './Component/view/MainHomePage';
import { Footer } from './Component/view/Footer';
import { MyNavbar } from './Component/view/Navbar';
import { CartPage } from './Component/view/CartPage';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import Login from './Component/view/LoginPage';

function App() {
  return (
  <BrowserRouter> 
   <MyNavbar />
   <Routes>
   <Route path='/' element={<Login/>}/>
     <Route path='/home' element={<MainHomePage/>}/>
     <Route path='/cart' element={<CartPage />}/>
   </Routes>
   <Footer />
  </BrowserRouter>
    )
}

export default App;

import './App.css';
import { MainHomePage } from './Component/view/MainHomePage';
import { Footer } from './Component/view/Footer';
import { MyNavbar } from './Component/view/Navbar';
import { CartPage } from './Component/view/CartPage';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';

function App() {
  return (
  <BrowserRouter> 
   <MyNavbar />
   <Routes>
     <Route path='/' element={<MainHomePage/>}/>
     <Route path='/cart' element={<CartPage />}/>
   </Routes>
   <Footer />
  </BrowserRouter>
    )
}

export default App;

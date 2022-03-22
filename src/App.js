import './App.css';
import { MainHomePage } from './Component/view/MainHomePage';
import { Footer } from './Component/view/Footer';
import { MyNavbar } from './Component/view/Navbar';
import { BrowserRouter } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import CartIndicator from './Component/view/CartIndicator';

function App() {
  return (
<BrowserRouter>
      <MyNavbar />
<Container>
  <Row>
      <MainHomePage />
      <Footer />
   
  </Row>

    </Container>
    </BrowserRouter>
  )
}

export default App;

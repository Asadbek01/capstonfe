import "./App.css";
import "./Component/BooksStore/index.css";
import "./Component/view/Footer/index.css";
import { MainHomePage } from "./Component/BooksStore/MainHomePage";
import { MyNavbar } from "./Component/BooksStore/Navbar";
import { CartPage } from "./Component/BooksStore/CartPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./Component/user/SignUpPage";
import UserLogin from "./Component/user/LoginPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer } from "./Component/view/Footer/Footer";
import { PageError } from "./Component/view/PageError";
import BookDetail from "./Component/view/BookDetail";
import { LoadUser } from "./redux/action";
import store from "./redux/store";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  console.log(process.env.REACT_APP_TOKEN);
  const fetchMyDetails = async () => {
    try {
      const response = await fetch("http://localhost:3002/users/me", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YzFhYjk2YjZkNzkzYTBhMDZmYTciLCJpYXQiOjE2NDk5NjM0MDMsImV4cCI6MTY1MDU2ODIwM30.kP4Dyl6EfjRDUo5qKE6b83Z36ai54mWdHla4e-ZqiXg",
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setData(data);
      } else {
        console.error("fetch failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMyDetails();
  }, []);
  return (
    <Router>
      <div className="App">
        <MyNavbar userMe={data} />

        <Routes>
          <Route path="/" element={<UserLogin />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/home" element={<MainHomePage />} exact />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/detail/:id" element={<BookDetail />} />
          <Route path="*" element={<PageError />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

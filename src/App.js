import "./App.css";
import "./Component/BooksStore/index.css";
import "./Component/view/Footer/index.css";
import { MainHomePage } from "./Component/BooksStore/MainHomePage";
// import '../../css/MainHomePage.css'

import { MyNavbar } from "./Component/BooksStore/Navbar";
import { CartPage } from "./Component/BooksStore/CartPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Component/user/SignUpPage";
import UserLogin from "./Component/user/LoginPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer } from "./Component/view/Footer/Footer";
import { PageError } from "./Component/view/error/PageError";
import BookDetail from "./Component/view/BookDetail";
import { LoadUser } from "./redux/action";
import store from "./redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Profile } from "./Component/user/Profile";
import UpdateProfile from "./Component/user/UpdateUser";
import { Dashboard } from "./Component/admin/Dashboard";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    store.dispatch(LoadUser());
  }, []);

  const userMe = useSelector((state) => state.user.loggedUser);
  return (
    <BrowserRouter>
      <div className="App">
        <MyNavbar />

        <Routes>
          <Route path="/" element={<UserLogin />} exact />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/me" element={<Profile />} exact />
          <Route path="/home" element={<MainHomePage />} exact />
          <Route path="/cart" element={<CartPage />} exact />
          <Route path="/detail/:id" element={<BookDetail />} exact />
          <Route path="*" element={<PageError />} />
          <Route path="/me/update" element={<UpdateProfile />} exact />
          <Route path="/dashboard" element={<Dashboard />} exact />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

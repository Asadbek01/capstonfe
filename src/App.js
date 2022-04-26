import "./App.css";
import { MainHomePage } from "./Component/BooksStore/MainHomePage";
import { MyNavbar } from "./Component/BooksStore/Navbar";
import { CartPage } from "./Component/cartPage/CartPage";
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
import { BookList } from "./Component/admin/BookList";
import { Shipping } from "./Component/cartPage/Shipping";
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
          <Route path="/books/admin" element={<BookList />} exact />
          <Route path="/shipping" element={<Shipping />} exact />

        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

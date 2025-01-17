import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import UploadProductPage from "./views/UploadProductPage/UploadProductPage";
import DetailProductPage from "./views/DetailProductPage/DetailProductPage";
import CartPage from "./views/CartPage/CartPage";
import HistoryPage from "./views/HistoryPage/HistoryPage"
import ReviewPage from "./views/ReviewPage/ReviewPage"


function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/product/upload" component={Auth(UploadProductPage, true)} />
          {/* upload page 는 아무나 들어올 수 없음, 로그인 한 유저만 가능 true */}
          <Route exact path="/product/:productId" component={Auth(DetailProductPage, null)} />
          {/* 회원만 디테일 페이지 접속 가능 */}
          <Route exact path="/user/cart" component={Auth(CartPage, true)} />
          <Route exact path="/review" component={Auth(ReviewPage, true)} />
          {/* 로그인 된 회원만 히스토리 화면 접속 가능 */}
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;

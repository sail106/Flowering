import {  Route, Routes } from "react-router-dom";

import './App.css'
import LoginForm from './components/LoginForm'
import PasswordFindForm from './components/PasswordFindForm';
import SpinnerTest from './components/SpinnerTest';
import SignupForm from "./components/SignupForm";
import { Page } from "./components/store/Page";
import MyPage from "./components/MyPage";
import Navbar from "./components/Navbar";
import GlobalStyles from "../GlobalStyles";
import MainPage from "./components/MainPage";
import ConsultReservation from "./components/ConsultReservation";
import FaQ from "./components/FaQ";
import Footer from "./components/Footer";
import EditMyInfo from "./components/EidtMyInfo";
import  OneToOneVideoChat from "./components/OneToOneVideoChat";
 
function App() {

  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Page>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/pw' element={<PasswordFindForm />} />
          <Route path='/OneToOneVideoChat' element={<OneToOneVideoChat />} />
          <Route path='/test' element={<SpinnerTest />} />
          <Route path='/signup' element={<SignupForm />} />
          <Route path='/consulting' element={<ConsultReservation />} />
          <Route path='/mypage' element={<MyPage />} />
          <Route path='/editmyinfo' element={<EditMyInfo />} />
          <Route path='/faq' element={<FaQ />} />
        </Routes>
      <Footer />
      </Page>
    </>
  );
}

export default App

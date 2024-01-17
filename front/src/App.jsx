import {  Route, Routes } from "react-router-dom";

import './App.css'
import LoginForm from './components/LoginForm'
import PasswordFindForm from './components/PasswordFindForm';
import SpinnerTest from './components/SpinnerTest';
import SignupForm from "./components/SignupForm";
import { Page } from "./components/store/Page";
import MyInfo from './components/MyInfo';
import Navbar from "./components/Navbar";
import GlobalStyles from "../GlobalStyles";
import MainPage from "./components/MainPage";
import ConsultReservation from "./components/ConsultReservation";

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
          <Route path='/test' element={<SpinnerTest />} />
          <Route path='/signup' element={<SignupForm />} />
          <Route path='/mypage' element={<MyInfo />} />
          <Route path='/consulting' element={<ConsultReservation />} />
        </Routes>
      </Page>
    </>
  );
}

export default App

import { Route, Routes } from "react-router-dom";

import "./App.css";
import LoginForm from "./components/LoginForm";
import PasswordFindForm from "./components/PasswordFindForm";
import SpinnerTest from "./components/SpinnerTest";
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
import CommunityModify from "./components/modify/CommunityModify";
import ExpertsIntroduction from "./components/experts/ExpertsIntroduction";
import ExpertsProfile from "./components/experts/ExpertsProfile";
import CommunityPage from "./components/CommunityPage";
import ExpertPage from "./components/ExpertPage";
import BeautyConsulting from "./components/BeuatyConsulting";
import ExpertsProfileRegistration from "./components/experts/ExpertsProfileRegistration";
import ExpertsReservation from "./components/experts/ExpertsReservation";
import Review from "./components/experts/review";

function App() {
  return (
    <>
      <GlobalStyles />
      <Page>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/pw" element={<PasswordFindForm />} />
          <Route path="/test" element={<SpinnerTest />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/consulting" element={<ConsultReservation />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/mypage2" element={<ExpertPage />} />
          <Route path="/editmyinfo" element={<EditMyInfo />} />
          <Route path="/faq" element={<FaQ />} />
          <Route path="/beautyconsulting" element={<BeautyConsulting />} />
          <Route path="/communitymod" element={<CommunityModify />} />
          <Route path="/experts" element={<ExpertsIntroduction />} />
          <Route path="/expertsprofile" element={<ExpertsProfile />} />
          <Route path="/communityHome" element={<CommunityPage />} />
          <Route path="/expertsReservation" element={<ExpertsReservation />} />
          <Route path="/review" element={<Review />} />
          <Route
            path="/expertsprofileregistration"
            element={<ExpertsProfileRegistration />}
          />
        </Routes>
        <Footer />
      </Page>
    </>
  );
}

export default App;

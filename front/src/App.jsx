import { Route, Routes } from "react-router-dom";

import LoginForm from './components/LoginForm'
import PasswordFindForm from './components/PasswordFindForm';
import SpinnerTest from './components/SpinnerTest';
import SignupForm from "./components/SignupForm";
import { Page } from "./components/common/Page";
import MyPage from "./components/MyPage";
import Navbar from "./components/Navbar";
import GlobalStyles from "../GlobalStyles";
import MainPage from "./components/MainPage";
import ConsultReservation from "./components/ConsultReservation";
import FaQ from "./components/FaQ";
import Footer from "./components/Footer";
import EditMyInfo from "./components/EidtMyInfo";
  
import OneToManyVideoChat from "./components/community/OneToManyVideoChat";
import OneToOneVideoChat from "./components/OneToOneVideoChat";
import CommunityModify from "./components/modify/CommunityModify";
import ExpertsIntroduction from "./components/experts/ExpertsIntroduction";
import ExpertsProfile from "./components/experts/ExpertsProfile";
import CommunityPage from "./components/CommunityPage";
import ExpertPage from "./components/ExpertPage";
import BeautyConsulting from "./components/BeuatyConsulting";
import ExpertConsulting from "./components/mypage/ExpertConsulting";

function App() {
  return (
    <>
      <GlobalStyles />
      <Page>
      <Navbar />
        <Routes>
          <Route path='/OneToManyVideoChat' element={<OneToManyVideoChat />} />
          <Route path='/OneToOneVideoChat' element={<OneToOneVideoChat />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/pw" element={<PasswordFindForm />} />
          <Route path="/test" element={<SpinnerTest />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/consulting" element={<ConsultReservation />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path='/mypage2' element={<ExpertPage />} />
          <Route path="/editmyinfo" element={<EditMyInfo />} />
          <Route path="/faq" element={<FaQ />} />
          <Route path='/beautyconsulting' element={<BeautyConsulting />} />
          <Route path="/communitymod" element={<CommunityModify />} />
          <Route path="/experts" element={<ExpertsIntroduction />} />
          <Route path="/expertsprofile" element={<ExpertsProfile />} />
          <Route path="/expertconsulting" element={<ExpertConsulting />} />
          <Route path='/communityHome' element={<CommunityPage />} />
        </Routes>
        <Footer />
      </Page>
    </>
  );
}

export default App;

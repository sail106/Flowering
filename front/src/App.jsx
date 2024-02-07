import { Route, Routes } from "react-router-dom";

// import LoginForm from "./components/LoginForm";
import PasswordFindForm from "./components/PasswordFindForm";
import SpinnerTest from "./components/SpinnerTest";
import SignupForm from "./components/signup/SignupForm";
import SignupPw from "./components/signup/SignupPw";
import SignupRequired from "./components/signup/SignupRequired";
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
import ExpertsProfileBibi from "./components/experts/ExpertsProfileBibi";
import CommunityPage from "./components/CommunityPage";
import ExpertPage from "./components/ExpertPage";
import BeautyConsulting from "./components/BeuatyConsulting";
import ExpertConsulting from "./components/mypage/ExpertConsulting";
import ExpertsProfileRegistration from "./components/experts/ExpertsProfileRegistration";
import ExpertsReservation from "./components/experts/ExpertsReservation";
import Review from "./components/experts/Review";
import ExpertsProfileLeina from "./components/experts/ExpertsProfileLeina";
import ExpertsProfileDiana from "./components/experts/ExpertsProfileDiana";
import ExpertsProfileRuna from "./components/experts/ExpertsProfileRuna";
import Manager from "./components/ManagerPage/Manager";
import LoginForm from "./components/LoginForm";
import Consulting1stepresult from "./components/consultingresult/Consulting1stepresult";
import FinalresultInput from "./components/consultingresult/FinalresultInput";

import Finish1step from "./components/consultingresult/Finish1step";
import Finish2step from "./components/consultingresult/Finish2step";

import PhotoTest from "./components/PhotoTest";
import Finalresult3step from "./components/consultingresult/Finalresult3step";
import SkinProductCard from "./components/consultingresult/SkinProductCard";
import Orderpage from "./components/OrderPage";
import OrderResult from "./components/OrderResult";
import ExpertsProfileCommon from "./components/experts/ExpertsProfilecommon";

import SecondSurveyResult from "./components/SecondSurveyResult";
import FirstSurveyPage from "./components/FirstSurveyPage";
function App() {
  return (
    <>
      <GlobalStyles />
      <Page>
        <Navbar />
        <Routes>
          <Route path="/OneToManyVideoChat" element={<OneToManyVideoChat />} />
          <Route path="/OneToOneVideoChat" element={<OneToOneVideoChat />} />
          {/* <Route path="/admin" element={<Admin />} /> */}
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/pw" element={<PasswordFindForm />} />
          <Route path="/test" element={<SpinnerTest />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/signupPw" element={<SignupPw />} />
          <Route path="/signupRequired" element={<SignupRequired />} />
          <Route path="/consulting" element={<ConsultReservation />} />
          <Route path="/orderpage" element={<Orderpage />} />
          <Route path="/orderResult" element={<OrderResult />} />
          <Route path="/mypage/:id" element={<MyPage />} />
          <Route path="/expertmypage/:id" element={<ExpertPage />} />
          <Route path="/editmyinfo" element={<EditMyInfo />} />
          <Route path="/faq" element={<FaQ />} />
          <Route path="/beautyconsulting" element={<BeautyConsulting />} />
          <Route path="/communitymod" element={<CommunityModify />} />
          <Route path="/experts" element={<ExpertsIntroduction />} />
          <Route path="/expertsProfilecommon/:id" element={<ExpertsProfileCommon />} />

          <Route path="/expertsprofileBibi" element={<ExpertsProfileBibi />} />
          <Route
            path="/expertsprofileLeina"
            element={<ExpertsProfileLeina />}
          />
          <Route
            path="/expertsprofileDiana"
            element={<ExpertsProfileDiana />}
          />
          <Route path="/expertsprofileRuna" element={<ExpertsProfileRuna />} />
          <Route path="/expertconsulting" element={<ExpertConsulting />} />
          <Route path="/communityHome" element={<CommunityPage />} />
          <Route path="/expertsReservation" element={<ExpertsReservation />} />
          <Route path="/review" element={<Review />} />
          <Route path="/consulting1stepresult" element={<consulting1stepresult />} />
          <Route
            path="/expertsprofileregistration"
            element={<ExpertsProfileRegistration />}
          />
          <Route path="/manager" element={<Manager />} />

          <Route path="/finalresultInput" element={<FinalresultInput />} />

          <Route path="/phototest" element={<PhotoTest />} />

        </Routes>
        <Footer />
      </Page>
    </>
  );
}

export default App;

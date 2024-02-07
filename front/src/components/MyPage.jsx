import styled from "styled-components";
import MyInfo from "./mypage/MyInfo";
import MyConsulting from "./mypage/MyConsulting";
import MyCommunity from "./mypage/MyCommunity";
import { Page } from "./common/Page";
import { useSelector } from 'react-redux';
import { useParams, useNavigate   } from 'react-router-dom';
import { useEffect } from 'react';

const BackPage = styled(Page)`
  height: auto;
  display:flex;
  flex-direction:column;
  align-items:center;
`;

const Header = styled.span`
  display: flex;
  font-family: Lexend Deca;
  font-size: 56px;
  margin-top: 12%;
  justify-content: center;
  margin-bottom: 4%;
`;


const Margin = styled.div`
  margin-bottom : 10%;
`

const MyPage = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const User = useSelector(
    (state) => state.auth.logonUser
  );
  const navigate = useNavigate();
  const { routeid } = useParams();
  const isAccessible = (Number(routeid) === User.id && isAuthenticated && User.role ==='USER')

  useEffect(() => {
    if (!isAccessible) {
      alert('잘못된 접근입니다.'); // 시스템 경고창을 띄웁니다.
      navigate('/'); // 홈으로 리다이렉트합니다.
    }
  }, [isAccessible, navigate]); // isAccessible이 변경될 때마다 이 훅을 실행합니다.
  
  if (!isAccessible) {
    return null; // 이후의 컴포넌트 렌더링을 막기 위해 null을 반환합니다.
  }
  
  return (
    <BackPage>
      <Header>MY PAGE</Header>
      <MyInfo />

      <MyConsulting />
      <MyCommunity />
      
    <Margin/>
    </BackPage>
  );
};

export default MyPage;

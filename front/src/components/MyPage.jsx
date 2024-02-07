import styled from "styled-components";
import MyInfo from "./mypage/MyInfo";
import MyConsulting from "./mypage/MyConsulting";
import MyCommunity from "./mypage/MyCommunity";
import { Page } from "./common/Page";
import { useSelector } from 'react-redux';
import { useParams, useNavigate  } from 'react-router-dom';

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
  const { name, role, id, nickname, imageUrl } = useSelector(
    (state) => state.auth.logonUser
  );
  const navigate = useNavigate();
  const { routeid } = useParams();
  const isAccessible = routeid === id && isAuthenticated && role ==='CONSULTANT';

  if (!isAccessible) {
    // 접근이 불가능한 경우, 리다이렉트 또는 다른 처리를 수행할 수 있습니다.
    console.log('잘못된 접근입니다.'); // 콘솔에 경고 메시지를 출력합니다.
    navigate('/'); // 홈으로 리다이렉트합니다.
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

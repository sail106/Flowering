import styled from "styled-components";
import { Page } from "../store/Page";

const MyPage = styled(Page)`
  width: 75%;
`;

const Container = styled.div`
  margin: 10% 0%;
  display: flex;
  height: 80%;
  justify-content: center;
`;

const Head = styled.div`
  margin-top: 10%;
  text-align: center;
  font-family: "Lexend Deca";
  font-size: 40px;
  margin-bottom: 1%;
`;

const Head2 = styled.div`
  color: #979797;
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 30px;
`;

const Quarter = styled.div`
  width: 25%;
  height: 30%;
  border-left: 1px solid #B1B1B1;;
  &:last-child {
    border-right: 1px solid #B1B1B1;;
  }
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;

const Title = styled.div`
  color: #f28482;
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-weight: 500;
  margin-bottom:15%;
  white-space:pre;
`;

const Text = styled.div`
  color: #6d6d6d;
  font-family: "Noto Sans KR";
  font-size: 18px;
  line-height: 145%;
`;
const RightImg = styled.img`
`

const FourthPage = () => {
  return (
    <MyPage>
      <Head>BEAUTY CONSULTING EXPERTS</Head>
      <Head2>마음에 드는 전문가에게 받는  퍼스널 뷰티 컨설팅</Head2>
      <Container>

      </Container>
    </MyPage>
  );
};

export default FourthPage;

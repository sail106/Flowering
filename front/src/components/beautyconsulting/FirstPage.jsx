import styled from "styled-components";
import { Page } from "../store/Page";
import { ButtonBox } from "../store/Button";

const MyPage = styled(Page)`
  width: 80%;
`;

const Image = styled.img`
  width: 100%;
  height: 80%;
`;

const ImageWrapper3 = styled.div`
  position: absolute;
  bottom: 0;
  right: 70px;
  left: 0;
  top: 23%;
  width: 50%;
  height: 75%;
`;

const SolutionDiv = styled.div`
  position: absolute;
  margin-left: 55%;
  top: 18%;
  width: 50%;
`;

const SolutionTitle = styled.p`
  font-size: 45px;
  font-family: Poppins;
`;

const SolutionDescr = styled.p`
  font-size: 18px;
  line-height: 27px;
  font-family: Noto Sans KR;
`;

const Cost = styled.div`
  font-family: Poppins;
  font-size: 20px;
  margin: 5% 0%;
`;


const MyButton = styled(ButtonBox)`
  min-width: 230px;
  border-radius: 30px;
  width:10%;
`;

const FirstPage = () => {
  return (
    <MyPage>
      <ImageWrapper3>
        <Image src="src/assets/BeautySolution.png" alt="BIBI" />
      </ImageWrapper3>

      <SolutionDiv>
        <SolutionTitle>
          PERSONAL <br />
          BEAUTY SOLUTION
        </SolutionTitle>

        <SolutionDescr>
          Flowering 온라인 뷰티 솔루션 컨설팅입니다. <br />
          현재의 피부 상태와 고민을 점검하고 고객의 피부 유형, 색조, 취향 및{" "}
          <br />
          요구에 맞는 메이크업 기술, 헤어스타일 등 뷰티와 관련된 다양한 주제에
          대해 <br />
          AI와 전문가의 조언을 받는 서비스입니다.
        </SolutionDescr>
        <Cost>￦99,000</Cost>
        <MyButton>예약하기</MyButton>
      </SolutionDiv>
    </MyPage>
  );
};

export default FirstPage;

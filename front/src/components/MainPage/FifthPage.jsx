import styled from "styled-components";
import { Page } from "../common/Page";

const MyPage = styled(Page)``;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0px 50px 0px 0px;
`;

const ImageWrapper3 = styled.div`
  position: absolute;
  bottom: 0;
  right: 70px;
  left: 0;
  top: 50%;
  width: 50%;
  height: 75%;
`;

const SolutionDiv = styled.div`
  position: absolute;
  margin-left: 60%;
  top: 60%;
  width: 30%;
`;

const SolutionTitle = styled.p`
  font-size: 50px;
  font-family: Poppins;
`;

const SolutionDescr = styled.p`
  color: #6d6d6d;
  font-size: 22px;
  line-height: 145%;
  font-family: Noto Sans KR;
`;

const FifthPage = () => {
  return (
    <MyPage>
      <ImageWrapper3>
        <Image src="src/assets/beautysolution.png" alt="BIBI" />
      </ImageWrapper3>

      <SolutionDiv>
        <SolutionTitle>
          PERSONAL <br />
          BEAUTY SOLUTION
        </SolutionTitle>

        <SolutionDescr>
          Flowering만의 노하우로 고객의 현재 피부 상태
          <br />와 고민을 점검하고 고객의 피부 유형, 색조, 취향
          <br />및 요구에 맞는 메이크업 기술, 헤어스타일 등을
          <br /> 추천해드립니다.
        </SolutionDescr>

 
      </SolutionDiv>
    </MyPage>
  );
};

export default FifthPage;

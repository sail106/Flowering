import Title from "../modify/Title";
import styled from "styled-components";
import Experts from "../common/Experts";

const ExpertCard = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Margin = styled.div`
  margin-bottom: 130px;
`;
// 컴포넌트 정의
const ExpertsIntroduction = () => {
  return (
    <>
      <Title text={"Beauty consulting experts"} />
      <ExpertCard>
        <Experts
          nickname={"BIBI"}
          text={"당신만의 고유한 아름다움을 찾아드리겠습니다."}
          rate={4.9}
          ratenum={172}
          tag1={"기초케어"}
          tag2={"자연주의"}
          imgsrc={"src/assets/BIBI.png"}
          width={"280px"}
          height={"405px"}
          path={"/expertsProfileBibi"}
        />
        <Experts
          nickname={"LEINA"}
          text={"나를 마음껏 표현할 수 있을 때, 진정 아름다워집니다."}
          rate={4.7}
          ratenum={289}
          tag1={"스킨케어"}
          tag2={"헤어스타일링"}
          imgsrc={"src/assets/LEINA.png"}
          width={"305px"}
          height={"370px"}
          path={"/expertsProfileLeina"}
        />
        <Experts
          nickname={"DIANA"}
          text={"나의 강점을 살리며 다양하게 스타일링을 도전해보세요."}
          rate={4.9}
          ratenum={117}
          tag1={"트렌드"}
          tag2={"웨딩뷰티"}
          imgsrc={"src/assets/DIANA.png"}
          width={"296px"}
          height={"415px"}
          path={"/expertsProfileDiana"}
        />
        <Experts
          nickname={"RUNA"}
          text={"건강하고 자연스러운 아름다움을 선물해드립니다."}
          rate={4.8}
          ratenum={390}
          tag1={"에코뷰티"}
          tag2={"컬러리스트"}
          imgsrc={"src/assets/RUNA.png"}
          width={"294px"}
          height={"363px"}
          path={"/expertsProfileRuna"}
        />
      </ExpertCard>
      <Margin />
    </>
  );
};

export default ExpertsIntroduction;

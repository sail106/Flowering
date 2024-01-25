import Title from "../modify/Title";

import styled from "styled-components";
import Experts from "../store/Experts";

const ExpertCard = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ExpertsProfile = () => {
  return (
    <>
      <Title text={"Beauty consulting experts"} />
      <ExpertCard>
        <Experts
          nickname={"BIBI"}
          text={"당신만의 고유한 아름다움을 찾아드리겠습니다."}
          rate={4.9}
          ratenum={172}
          tag1={"스킨케어"}
          tag2={"자연주의"}
          imgsrc={"src/assets/BIBI.png"}
          width={"280px"}
          height={"405px"}
        />
      </ExpertCard>
    </>
  );
};

export default ExpertsProfile;

import CommunityHeader from "./community/CommunityHeader";
import CircleImg from "./store/CircleImg";
import Button from "./store/Button";
import Card from "./store/Card";
import CenterContainer from "./store/CenterContainer";
import styled from "styled-components";

const StyledDiv = styled.div`
  color: #6D6D6D;
  text-align: center;
  margin-bottom: 40px;
  font-size: 20px;
`;

const TempCard = styled.div`
  margin: 150px -300px;
`;

const CommunityPage = () => {
  return (
    <>
      <Card>
        <CenterContainer>
          <CommunityHeader />
          <CircleImg
            src="../src/assets/BIBI.png"
            scale="1.2"
            margin-bottom="40px"
          />
          <h3>키티공주님,</h3>
          <StyledDiv>화상 미팅을 열어 나만의 뷰티 노하우를<br/>
          친구들에게 공유해보세요.</StyledDiv>
          <Button width="300px">커뮤니티 방 개설하기</Button>
        </CenterContainer>
        <TempCard>
          <h2>실시간 커뮤니티</h2>
          <div>CardCardCardCardCardCardCard</div>
          <h2>미공개 커뮤니티</h2>
          <div>CardCardCardCardCardCardCard</div>
        </TempCard>
      </Card>
    </>
  );
};

export default CommunityPage;
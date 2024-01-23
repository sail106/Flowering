import CommunityHeader from "./community/CommunityHeader";
import CircleImg from "./store/CircleImg";
import Button from "./store/Button";
import Card from "./store/Card";
import CenterContainer from "./store/CenterContainer";

const CommunityPage = () => {
  return (
    <Card>
      <CenterContainer>
        <CommunityHeader />
        <CircleImg
          src="../src/assets/BIBI.png"
          scale="1.2"
        />
        <h3>키티공주님,</h3>
        <div>화상 미팅을 열어 나만의 뷰티 노하우를<br/>
        친구들에게 공유해보세요.</div>
        <Button width="300px">커뮤니티 방 개설하기</Button>
      </CenterContainer>
    </Card>
  );
};

export default CommunityPage;
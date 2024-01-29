import CommunityHeader from "./community/CommunityHeader";
import CircleImg from "./store/CircleImg";
import Button from "./store/Button";
import Card from "./store/Card";
import CenterContainer from "./store/CenterContainer";
import styled from "styled-components";
import ContentsCard from "./store/ContentsCard";

const StyledDiv = styled.div`
  color: #6D6D6D;
  text-align: center;
  margin-bottom: 40px;
  font-size: 20px;
`;

const TempCard = styled.div`
  margin: 150px 70px;
`;

const Styledh2 = styled.h2`
  margin-left: 4%;
  margin-top: 130px;
`;

const CommunityPage = () => {

  const handleEnterButtonClick = (community_id) => {
    console.log('버튼클릭'+community_id)

  };

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
          <StyledDiv>화상 미팅을 열어 나만의 뷰티 노하우를<br />
            친구들에게 공유해보세요.</StyledDiv>
          <Button width="300px">커뮤니티 방 개설하기</Button>
        </CenterContainer>
      </Card>
      <TempCard>
        <Styledh2>실시간 인기 커뮤니티</Styledh2>

        <ContentsCard
          cardMarginTop="0px"
          // paddingTop="0px"
          imageSrc="../src/assets/communityHome1.png"
          imageAlt="recommend-item"
          title="깐달걀 피부 만드는 추천템 공개"
          description="여드름 피부였던 제가
          깐달걀 피부가 될 수 있었던 화장품을 공개합니다!!"
          isButton="true"
          buttonText="입장하기" 
           onClick={() => handleEnterButtonClick("0")} 
        />

        <Styledh2>미공개 커뮤니티</Styledh2>
        <ContentsCard
          cardMarginTop="0px"
          // paddingTop="0px"
          imageSrc="../src/assets/blog post 1.png"
          imageAlt="recommend-item"
          title="일상 생활 속 나의 뷰티 습관"
          description="저만의 뷰티 습관 공개합니닷 ㅋㅋ"
          isButton="true"
          buttonText="내 일정에 추가하기"
          borderColor="#DCDCDC"
          backgroundColor="white"
          color="#383838"
        />

      </TempCard>
    </>
  );
};

export default CommunityPage;
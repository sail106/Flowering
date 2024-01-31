import styled from "styled-components";
import { Page } from "../common/Page";

const MyPage = styled(Page)`
  height: 120vh;
`;

const TextDiv3_1 = styled.div`
  position: absolute;
  color: black;
  font-family: Lexend Deca;
  font-size: 60px;
  line-height: 66px;
  letter-spacing: -2.25px;
  top: 20%;
  margin-left: 10%;
  right: 25%;
  left: 25%;
  margin: 0;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Card = styled.div`
  width: 33%;
  height: 41%;
  position: absolute;
  transition: transform 0.2s ease-in-out;
`;

const TextSection = styled.div`
  position: absolute;
  width: 20%;
`;

const PersonalBeauty = styled(TextSection)`
  margin-left: 23%;
  top: 50%;
`;

const PersonalBeautyCard = styled(Card)`
  right: 18%;
  top: 45%;
`;

const Community = styled(PersonalBeauty)`
  text-align: end;
  top: 90%;
  right: 22%;
`;

const CommunityCard = styled(Card)`
  right: 47%;
  top: 75%;
`;

const SolutionText = styled.p`
  font-family: Noto Sans KR;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const DescrText = styled(SolutionText)`
  color: #6d6d6d;
  font-size: 16px;
  line-height: 145%;
`;

const ReverseImage = styled(Image)`
  transform: scaleX(-1);
`;

const ThirdPage = () => {
  return (
    <MyPage>
      <TextDiv3_1>
        <p>SHARE BEAUTY BY VIDEO</p>
      </TextDiv3_1>

      <PersonalBeauty>
        <SolutionText>PERSONAL BEAUTY SOLUTION</SolutionText>
        <DescrText>
          고객의 피부 유형과 취향 및 요구에 맞는 <br />
          뷰티와 관련된 다양한 주제에 대해 AI와 <br />
          전문가의 조언을 받는 서비스입니다.
        </DescrText>
        <Image src="src/assets/RedLine.png" alt="RedLine" />
      </PersonalBeauty>

      <PersonalBeautyCard>
        <Image src="src/assets/personalBeauty.svg" alt="personalBeauty" />
      </PersonalBeautyCard>

      <Community>
        <SolutionText>VIDEO COMMUNITY</SolutionText>
        <DescrText>
          사람들과 함께 나만의 뷰티 팁이나 <br />
          피부 관련 고민을 나눌 수 있는 <br />
          화상 커뮤니티입니다.
        </DescrText>
        <ReverseImage src="src/assets/RedLine.png" alt="RedLine" />
      </Community>

      <CommunityCard>
        <Image src="src/assets/Community.svg" alt="Community" />
      </CommunityCard>
    </MyPage>
  );
};

export default ThirdPage;

import styled from 'styled-components';
import SkinProductCard from './consultingresult/SkinProductCard';
import MakeupProductCard from './consultingresult/MakeupProductCard';
import FirstSurveyResult from './FirstSurveyResult';
import SecondServeyResult from './SecondSurveyResult';

const P = styled.div`
  font-family: 'Noto Sans KR';
  white-space: pre-wrap;
  margin-left: 5px;
`;

const P2 = styled.p`
  font-family: 'Noto Sans KR';
  margin-left: 10px;
  margin-top: 20px;
  white-space: pre-wrap;
  display: flex;
`;

const Consulting1stepresultpage = styled.div`
  width: 77%;
  height: auto;
  margin-top: 15%;
  margin-left: 10%;
`;

const Margin = styled.div`
  margin: 110px;
`;
const Margin2 = styled.div`
  margin-top: 20px;
`;
const Margin3 = styled.div`
  margin-top: 40px;
`;

const MarginM = styled.div`
  margin-top: -20px;
`;

const H3 = styled.h3`
  font-family: 'Noto Sans KR';
`;

const H2 = styled.h2`
  text-align: justify;
  font-family: 'Noto Sans KR';
  font-size: 35px;
  white-space: pre-wrap;
`;

const InputSet = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
`;

const H = styled.span`
  font-family: 'Noto Sans KR';
  font-weight: bold;
`;

const Margin4 = styled(Margin)`
  margin-bottom: 20%;
`;

const FinalResult = () => {
  return (
    <Consulting1stepresultpage>
      <FirstSurveyResult />
      <SecondServeyResult />
      <Margin />
      <H2>3차 화상 컨설팅</H2>
      <hr />
      <H2>스킨케어</H2>
      <InputSet>
        <H3>피부 상태 |</H3>
        <P2> 극도로 예민한 얇은 피부</P2>
      </InputSet>
      <H3>전문가 솔루션</H3>
      <P2>
        저와 비슷한 경험이 있으신 분이였어요. 저도 어릴 때 저의 피부 장벽이 무너진 줄 모르고 레이저며 시술이며 너무 많이
        받고 좋다는 고기능성 제품을 사용하다보니 더욱 더 예민해지며 트러블까지 일어났던 기억이 나네요. 가장 메인 고민은,
        어떻게 하면 피부가 건강해질까 이셨고 피부 건강을 위해서는 가장 먼저 피부 장벽을 강화하는 것이 중요하기 때문에
        피부 장벽을 튼튼하게 해줄 제품들로 구성해보았습니다.
      </P2>
      <Margin2 />
      <InputSet>
        <H3>아침 :</H3>
        <P2> 효소 클렌징 - 히알루론산 앰플 - 세콜지 에센스 - 재생크림</P2>
      </InputSet>
      <MarginM />
      <InputSet>
        <H3>저녁 :</H3>
        <P2> 약산성 클렌징 - 히알루론산 앰플 - PDRN 앰플 - 재생크림 </P2>
      </InputSet>
      <Margin2 />
      <SkinProductCard></SkinProductCard>
      <Margin2 />
      <Margin />
      <H2>메이크업</H2>
      <InputSet>
        <H3>얼굴 유형 |</H3>

        <P2> 계란형 얼굴</P2>
      </InputSet>
      <MarginM />
      <InputSet>
        <H3>얼굴 분위기 |</H3>
        <P2> 생기발랄</P2>
      </InputSet>
      <H3>전문가 솔루션</H3>
      <P2>
        혜미님을 딱 보자마자 저는 복숭아가 떠올랐어요. 혜미님은 생기발랄한 이미지를 갖고 계시기 때문에 따뜻하고 화사한
        컬러를 활용하여 생기 넘치는 메이크업을 추천드립니다. 이목구비가 뚜렷하시기 때문에 색조에 너무 큰 힘을 주기보단
        얼굴의 윤곽을 살리는 음영 메이크업을 추천드립니다.
      </P2>
      <Margin3 />
      <InputSet>
        <P>
          <H>피부 메이크업 : </H>
          피부 톤에 맞는 파운데이션과 컨실러를 사용하여 피부 결점을 커버하고 매끈한 피부를 연출합니다. 옐로우 베이스의
          파운데이션을 사용하여 따뜻한 피부 톤을 연출합니다.
        </P>
      </InputSet>
      <Margin2 />
      <InputSet>
        <P>
          <H>아이 메이크업 : </H>
          아이라인과 섀도우를 사용하여 눈을 강조하고, 눈썹을 정돈하여 얼굴의 균형을 맞추어줍니다. 황금빛이 도는 브라운,
          코랄, 오렌지 컬러의 아이섀도우를 사용하여 따뜻한 봄웜 톤을 강조합니다. 눈썹은 자연스러운 일자형 눈썹과,
          브러시를 사용하여 자연스러운 아이라인을 그립니다.
        </P>
      </InputSet>
      <Margin2 />
      <InputSet>
        <P>
          <H>립 메이크업 : </H>
          입술을 부각시키기 위해 매트한 립스틱이나 글로시한 립글로스를 사용하여 입술을 돋보이게 합니다. 코랄, 따뜻한
          핑크 컬러의 립스틱이나 립 틴트를 사용하여 입술을 강조합니다.
        </P>
      </InputSet>
      <Margin2 />
      <InputSet>
        <P>
          <H>블러셔 : </H>
          살짝 주황빛이 도는 코랄이나 복숭아 컬러의 블러셔를 사용하여 건강하고 생기 넘치는 피부를 연출합니다.
        </P>
      </InputSet>
      <Margin2 />
      <InputSet>
        <P>
          <H>쉐이딩 : </H>
          얼굴의 윤곽을 부각시키기 위해 양 볼 아래, 이마 옆, 턱 주변 등에 입체적인 느낌을 연출합니다.
        </P>
      </InputSet>
      <Margin2 />
      <InputSet>
        <P>
          <H>하이라이팅 : </H>
          이마 중앙, 코, 볼 뼈 윗부분 등에 하이라이팅 제품을 사용하여 얼굴을 화사하게 보이도록 합니다. 황금빛의
          하이라이터를 사용하여 얼굴에 생기와 화사함을 더해줍니다.
        </P>
      </InputSet>
      <Margin />
      <MakeupProductCard />
      <Margin2 />
      <Margin />
      <H2>헤어스타일</H2>
      <InputSet>
        <H3>헤어 컬러 |</H3>
        <P2>브라운 컬러</P2>
      </InputSet>
      <MarginM />
      <InputSet>
        <H3>헤어 스타일 |</H3>
        <P2>웨이브 컬</P2>
      </InputSet>
      <H3>전문가 솔루션</H3>
      <P>
        혜미님은 생기발랄한 이미지와 계란형 얼굴형을 갖고 계셔서 어울리는 헤어스타일은 다양한데요. 일반적으로 계란형
        얼굴에 어울리는 헤어스타일은 얼굴을 부각시키고 균형을 잡아주는 스타일이 좋습니다. 예를 들어, 계란형 얼굴에는
        앞머리를 가볍게 내린 웨이브 헤어나 사이드 파트를 중심으로 볼륨있는 스타일, 레이어드 컷 등이 어울립니다. 또한,
        풍성한 볼륨의 스타일이나 잔머리를 활용한 스타일도 계란형 얼굴에 잘 어울립니다. 헤어스타일을 선택할 때 얼굴형과
        개인적인 취향을 고려하여 적절한 스타일을 찾아보시는 것이 좋습니다.
      </P>
      <Margin4 />
    </Consulting1stepresultpage>
  );
};

export default FinalResult;

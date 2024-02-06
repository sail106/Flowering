import styled from "styled-components";

const P = styled.p`
  white-space: pre-line;
  font-family: "Noto Sans KR";
  font-size: 17px;
`;

const H2 = styled.h2`
  font-family: "Noto Sans KR";
  font-size: 22px;
  font-weight: 500;
`;

const IMG = styled.img`
  width: 148px;
  height: 148px;
  /* background-color: rgba(169, 169, 169, 0.1); */
  background-image: src= "src/assets/backskin.png";
`;

const Card = styled.div`
  display: flex;
`;
const Content = styled.div`
  margin-left: 30px;
  margin-top: -15px;
`;
const Margin = styled.div`
  margin-top: 40px;
`;
const SkinProductCard = () => {
  return (
    <>
      <Margin />
      <Card>
        <IMG src="src/assets/skin1.png" alt="" />
        <Content>
          <H2>파파레시피 효소 파우터 클렌저</H2>
          <P>
            효소 클렌징은 효소를 이용하여 피부를 부드럽게 깨끗하게 하는 클렌징
            방법을 말합니다. 효소는 단백질을 분해하여 오염물질과 각질을
            제거해주는데, 이를 이용하여 클렌징을 하면 피부에 부담을 주지
            않으면서도 효과적으로 미세한 오염물질을 제거할 수 있습니다. 효소
            클렌징 제품은 피부에 자극을 주지 않으면서도 클렌징 효과를 높일 수
            있어, 민감한 피부 타입에게도 적합한 클렌징 방법 중 하나입니다.
          </P>
        </Content>
        <Margin />
      </Card>

      <Margin />
      <Card>
        <IMG src="src/assets/skin2.png" alt="" />
        <Content>
          <H2>웰라쥬 리얼 히알루로닉 블루 100앰플</H2>
          <P>
            히알루론산 앰플은 피부에 수분을 공급하고 보습을 유지하는 데 도움을
            주는 스킨케어 제품입니다. 히알루론산은 피부 내부에 수분을
            유지시켜줌으로써 피부를 촉촉하고 탄력있게 가꾸어주는데 도움을 줄 수
            있습니다. 이 앰플은 주로 세럼 형태로 제공되며, 일정량을 적당히
            피부에 흡수시킴으로써 피부의 보습과 탄력을 유지하는 데 도움을 줄 수
            있습니다. 특히 건조한 피부 타입이나 수분 부족한 피부에게 좋은 효과를
            가져다줄 수 있습니다.
          </P>
        </Content>
      </Card>
      <Margin />
      <Card>
        <IMG src="src/assets/skin3.png" alt="" />
        <Content>
          <H2>에스트라 아토베리어 365 하이드로 에센스</H2>
          <P>
            세콜지 에센스는 피부를 진정시키고 피부 장벽을 강화하는 데 도움을
            주는 스킨케어 제품입니다. 주로 피부에 자극을 받은 후에 사용하여
            피부를 진정시키고 피부 장벽을 회복하는 데 사용됩니다. 이 제품은
            피부를 부드럽게 가꾸어주고 건강한 피부 상태를 유지하는 데 도움을 줄
            수 있습니다. 세콜지 에센스는 일상적인 스킨케어 루틴에 포함하여
            피부를 건강하게 유지하는 데 도움을 줄 수 있습니다.
          </P>
        </Content>
      </Card>
      <Margin />
      <Card>
        <IMG src="src/assets/skin4.png" alt="" />
        <Content>
          <H2>라포슈포제 시카플라스트 B5+</H2>
          <P>
            재생 크림은 피부를 탄력있고 건강하게 유지하는 데 도움을 주는
            스킨케어 제품입니다. 이 크림은 피부 장벽을 강화하고 보습을 유지하여
            건강한 피부 상태를 유지하는 데 도움을 줍니다. 또한, 피부를
            진정시키고 피부 표면을 부드럽게 가꾸어주는 데 사용됩니다. 재생
            크림은 피부를 촉촉하고 탄력있게 유지하는 데 도움을 주며, 특히
            건조하고 민감한 피부에게 좋은 효과를 가져다줄 수 있습니다.
          </P>
        </Content>
      </Card>
      <Margin />
      <Card>
        <IMG src="src/assets/skin5.png" alt="" />
        <Content>
          <H2>비플레인 녹두 약산성 클렌징폼</H2>
          <P>
            세콜지 에센스는 피부를 진정시키고 피부 장벽을 강화하는 데 도움을
            주는 스킨케어 제품입니다. 주로 피부에 자극을 받은 후에 사용하여
            피부를 진정시키고 피부 장벽을 회복하는 데 사용됩니다. 이 제품은
            피부를 부드럽게 가꾸어주고 건강한 피부 상태를 유지하는 데 도움을 줄
            수 있습니다. 세콜지 에센스는 일상적인 스킨케어 루틴에 포함하여
            피부를 건강하게 유지하는 데 도움을 줄 수 있습니다.
          </P>
        </Content>
      </Card>
      <Margin />
      <Card>
        <IMG src="src/assets/skin6.png" alt="" />
        <Content>
          <H2>앰플엔 세라마이드샷 보습장벽 앰플</H2>
          <P>
            세라마이드 앰플은 피부 장벽을 강화하고 보습을 유지하는 데 도움을
            주는 스킨케어 제품입니다. 세라마이드는 피부 내부의 지방산과 함께
            결합하여 피부 장벽을 형성하고 보호하는 역할을 합니다. 이를 이용하여
            세라마이드 앰플은 피부를 촉촉하고 탄력있게 유지하는 데 도움을 주며,
            건강한 피부 상태를 유지하는 데 도움을 줄 수 있습니다. 특히 건조하고
            예민한 피부에게 좋은 효과를 가져다줄 수 있으며, 일상적인 스킨케어
            루틴에 포함하여 피부를 건강하게 가꾸어주는 데 사용됩니다.
          </P>
        </Content>
      </Card>
    </>
  );
};

export default SkinProductCard;

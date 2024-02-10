import styled from "styled-components";
import makeup6 from "../../assets/makeup6.png"
import makeup5 from "../../assets/makeup5.png"
import makeup4 from "../../assets/makeup4.png"
import makeup3 from "../../assets/makeup3.png"
import makeup2 from "../../assets/makeup2.png"
import makeup1 from "../../assets/makeup1.png"
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
  background-image: src= "../../assets/backskin.png";
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
const MakeupProductCard = () => {
  return (
    <>
      <Margin />
      <Card>
        <IMG src={makeup6} alt="makeup6" />
        <Content>
          <H2>라네즈 네오 쿠션</H2>
          <P>
            라네즈 네오 쿠션은 라네즈의 대표적인 메이크업 제품으로, 촉촉한
            수분감과 가벼운 발림감이 특징입니다. 이 제품은 피부에 자연스럽고
            매끈한 마무리감을 줄 뿐만 아니라 자외선 차단 기능도 갖추고 있어
            햇볕에 노출될 때 피부를 보호해줍니다. 또한, 다양한 피부 톤에 맞는
            컬러가 준비되어 있어 각자의 피부 톤과 맞는 제품을 선택하여 사용할 수
            있습니다. 라네즈 네오 쿠션은 자연스럽고 건강한 피부 표현을 원하는
            분들에게 좋은 선택이 될 수 있습니다.
          </P>
        </Content>
        <Margin />
      </Card>

      <Margin />
      <Card>
        <IMG src={makeup5} alt="makeup5" />
        <Content>
          <H2>데이지크 섀도우 팔레트</H2>
          <P>
            데이지크 섀도우 팔레트는 다양한 컬러를 활용하여 아이 메이크업을
            다채롭고 다양하게 연출할 수 있으며, 일상적인 메이크업부터 파티나
            이벤트용 메이크업까지 다양한 분위기의 메이크업을 연출할 수 있습니다.
            또한, 섀도우 팔레트에는 매트, 쉬머, 글리터 등 다양한 질감의
            아이섀도우가 포함되어 있어 다양한 표현이 가능합니다. 섀도우 팔레트는
            여러 컬러와 질감을 한 번에 사용할 수 있어 휴대하기도 편리하고 다양한
            메이크업을 즐기고자 하는 분들에게 인기가 있습니다.
          </P>
        </Content>
      </Card>
      <Margin />
      <Card>
        <IMG src={makeup4} alt="makeup4" />
        <Content>
          <H2>롬앤 쥬시 래스팅 틴트</H2>
          <P>
            롬앤 쥬시 래스팅 틴트는 입술에 수분을 공급하고 촉촉한 마무리감을 줄
            수 있는 제품입니다. 이 제품은 입술에 발리면서 촉촉한 느낌을 주며,
            투명한 컬러와 함께 입술을 촉촉하게 유지해줍니다. 또한, 립틴트의 경우
            지속력이 뛰어나면서도 입술을 건강하게 관리해주는 제품이 많이
            있습니다. 다양한 컬러와 질감으로 입술 메이크업에 활용할 수 있으며,
            촉촉함과 컬러를 동시에 즐길 수 있는 제품들이 많이 있습니다.
          </P>
        </Content>
      </Card>
      <Margin />
      <Card>
        <IMG src={makeup2} alt="makeup2" />
        <Content>
          <H2>크리니크 치크 팝</H2>
          <P>
            클리니크 치크 팝은 클리니크의 유명한 치크 메이크업 제품 라인으로,
            다양한 컬러와 선명한 발색력으로 유명합니다. 이 제품은 파우더 치크
            블러셔로, 부드럽고 실크 같은 질감으로 피부에 부드럽게 발리며
            자연스럽고 생기 넘치는 피부 톤을 연출할 수 있습니다. 또한, 다양한
            컬러가 준비되어 있어 각자의 피부 톤과 메이크업에 맞게 선택하여
            사용할 수 있습니다. 블러셔 브러시를 사용하여 부드럽게 발랐을 때
            선명하고 생동감 있는 블러셔 메이크업을 연출할 수 있으며, 오랫동안
            지속되는 웨어러블한 제품으로 알려져 있습니다.
          </P>
        </Content>
      </Card>
      <Margin />
      <Card>
        <IMG src={makeup1} alt="makeup1" />
        <Content>
          <H2>페리페라 브이 쉐딩</H2>
          <P>
            페리페라 브이 쉐딩 제품은 페리페라(Peripera) 브랜드의 쉐딩 제품으로,
            얼굴 윤곽을 부각시키고 입체적인 표정을 연출하는 데 사용됩니다. 이
            제품은 부드러운 질감과 자연스러운 발색으로 유명하며, 피부에 부드럽게
            녹아들어 자연스럽고 섬세한 그라데이션 효과를 연출할 수 있습니다.
            또한, 다양한 피부 톤에 어울리는 컬러가 준비되어 있어 다양한 피부
            톤에 맞게 선택하여 사용할 수 있습니다. 입체적인 얼굴 윤곽을
            연출하거나 얼굴의 비대칭을 조절하는 데 활용할 수 있는 제품입니다.
          </P>
        </Content>
      </Card>
      <Margin />
      <Card>
        <IMG src={makeup3} alt="makeup3" />
        <Content>
          <H2>프리즘 하이라이터</H2>
          <P>
            프리즘 하이라이터는 얼굴에 화사하고 반짝이는 효과를 줄 수 있는
            하이라이터 제품입니다. 이 제품은 다채로운 컬러와 반짝임이 혼합된
            파우더로, 피부에 부드럽게 발리며 화사한 빛을 더해줍니다. 다양한
            컬러와 질감으로 피부에 환상적인 광채를 연출할 수 있으며, 브러시를
            사용하여 쉽게 발랄하고 자연스럽게 발색할 수 있습니다. 프리즘
            하이라이터는 얼굴의 여러 부위에 사용하여 입체적인 표정을 부각시키고
            화사한 메이크업을 연출하는 데 사용됩니다.
          </P>
        </Content>
      </Card>
    </>
  );
};

export default MakeupProductCard;

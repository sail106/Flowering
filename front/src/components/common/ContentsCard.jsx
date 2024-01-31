import styled from "styled-components";

import Button from "./Button";

const Card = styled.div`
  margin-left: 4%;
  margin-top: ${props => props['margin-top'] || '20%'};
  display: flex;
  width: 377px;
  height: 415px;
  padding-bottom: 20px;
  flex-direction: column;
  align-items: start;
  border-radius: 30px;
  background: #fff;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
  transition: box-shadow 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }
`;
const ContentsImage = styled.img`
  height: 55%;
  width: 100%;
`;

const ContentsCategory = styled.span`
  color: #6d6d6d;
  font-family: "Noto Sans KR";
  font-size: 13px;
  padding: 10% 0% 0% 5%;
`;

const ContentsTitle = styled(ContentsCategory)`
  color: black;
  font-size: 23px;
  padding: 5% 0% 0% 5%;
  padding-top: ${props => props['padding-top'] || '5%'};
`;

const ContentsDate = styled(ContentsCategory)`
  font-family: Poppins;
`;

const ContentDiscription = styled(ContentsCategory)`
  color: black;
  font-size: 16px;
  padding-top: ${props => props['padding-top'] || '5%'};
`;



const ContentsCard = ({
  category, title, date, imageSrc,
  imageAlt, cardMarginTop, paddingTop,
  description, isButton, buttonText,
  borderColor, backgroundColor, color,onClick,community_id
}) => {

  const onButtonClick = () => {
    console.log('버튼클릭')
  };
  return (

    <Card margin-top={cardMarginTop}>

      <ContentsImage
        src={imageSrc}
        alt={imageAlt}
      />
      {category && <ContentsCategory>{category}</ContentsCategory>}

      <ContentsTitle
        padding-top={paddingTop}
      >
        {title}
      </ContentsTitle>
      {date && <ContentsDate>{date}</ContentsDate>}
      {description && <ContentDiscription>{description}</ContentDiscription>}
      {isButton &&
        <Button
          width="200px"
          marginTop="20px"
          marginLeft="90px"
          borderColor={borderColor}
          background-color={backgroundColor}
          color={color}
          onClick={onClick} 
          >
          {buttonText}
        </Button>
      }
    </Card>
  );
};

export default ContentsCard 
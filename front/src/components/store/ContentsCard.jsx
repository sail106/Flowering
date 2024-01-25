import styled from "styled-components";

const Card = styled.div`
  margin-left: 4%;
  margin-top: 20%;
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
  font-family: Noto Sans KR;
  font-size: 13px;
  padding: 10% 0% 0% 5%;
`;

const ContentsTitle = styled(ContentsCategory)`
  color: black;
  font-size: 23px;
  padding: 5% 0% 0% 5%;
`;

const ContentsDate = styled(ContentsCategory)`
  font-family: Poppins;
`;

const ContentsCard = ({category, title, date, imageSrc, imageAlt}) => {
  return (
    <Card>
      <ContentsImage
       src={imageSrc}
       alt={imageAlt}
      />
      <ContentsCategory>{category}</ContentsCategory>
      <ContentsTitle>{title}</ContentsTitle>
      <ContentsDate>{date}</ContentsDate>
    </Card>
  );
};

export default ContentsCard 
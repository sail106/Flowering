import styled from "styled-components";
import {OrderUserTable, DataTable, Title, Content, Filed} from "./OrderPage";


const headers = [
    {
        text: 'CONSULTANT',
        value: 'consultant_img'
    },
    {
        text: 'PRODUCT',
        value: 'item_name'
    },
    {
        text: 'PRICE',
        value: 'item_price'
    }
];
const items = [
    {
        consultant_img: 'https://cdnimg.melon.co.kr/cm2/artistcrop/images/002/61/143/261143_20210325180240_500.jpg?61e575e8653e5920470a38d1482d7312/melon/resize/416/quality/80/optimize',
        item_name: 'LEINA 뷰티 솔루션 컨설팅',
        item_price: '89,000'
    }
];



const userInfo = {
    username: "김혜미",
    email : "hyeinsuin@gmail.com"
}







const OrderResult = () =>{

    

    return (
        <Filed>
            <Content>
            <CheckImg src="src/assets/success_animation.gif" alt="1차 설문 완료" />
            <H3>1차 설문 테스트 완료</H3>
            <P>
                2차 사진 테스트 진단을 완료하여 주세요. <br /> 정확한 진단을 위해
                유의사항을 잘 참고해주세요.
            </P>
            <StepImg
                src="src/assets/1step_test.png"
                alt="1차 설문 완료, 2차 사진 테스트 진행 예정"
            />
            <Margin2 />
                
                <DataTable headers={headers} items={items} />
                <OrderUserTable userInfo={userInfo} />
            </Content>
        </Filed>
    );
};

export default OrderResult;




const Margin = styled.div`
  margin: 110px;
`;
const Margin2 = styled.div`
  margin-top: 20px;
`;

const H3 = styled.h3`
  font-family: "Noto Sans KR";
  font-size: 25px;
  text-align: center;
`;

const P = styled.p`
  font-family: "Noto Sans KR";
  font-size: 20px;
  color: gray;
  text-align: center;
`;

const CheckImg = styled.img`
  width: 65px;
  height: 65px;
`;

const StepImg = styled.img`
  margin-top: 30px;
  width: 675px;
  height: 79px;
`;
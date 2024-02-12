import styled from "styled-components";
import {OrderUserTable, DataTable, Content, Filed, BtnList} from "./order/OrderPage";
import { ButtonBox } from "./common/Button";
import { useNavigate } from "react-router-dom";
import success_animation from "../assets/success_animation.gif"
import processbar from "../assets/processbar.svg"
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

    const navigate = useNavigate();

    const handleTestButtonClick = () => {
        // 이동하고자 하는 경로로 navigate 함수를 호출
        navigate('/target-path'); 
    };
    const handleLaterButtonClick = () => {
        // 이동하고자 하는 경로로 navigate 함수를 호출
        navigate('/mypage'); 
    };
    return (
        <Filed>
            <Content>
            <CheckImg src={success_animation} alt="1차 설문 완료" />
            <H3>결제가 정상적으로 완료되었습니다.</H3>

            <P>
            진단 테스트로 이동하여 1차 설문 테스트와 2차 사진 테스트 진단을 완료하여 주세요.<br />
            2차 사진 테스트 진단을 완료하여 주세요. <br /><Collaps>* 테스트는 약 20분 소요됩니다.</Collaps> 
            </P>
            <StepImg
                src={processbar}
                alt="1차 설문 완료, 2차 사진 테스트 진행 예정"
            />
            <Margin2 />
            <DataTable headers={headers} items={items} />
            <OrderUserTable userInfo={userInfo} />
            <BtnList>
                    <ButtonBox border={"#F28482"} background-color={"#ffffff"} color={"#F28482"} onClick={handleLaterButtonClick}>나중에 하기</ButtonBox>
                    <ButtonBox onClick={handleTestButtonClick}>진단 테스트 시작</ButtonBox>
            </BtnList>
            
            </Content>
        </Filed>
    );
};

export default OrderResult;

const Collaps = styled.span`
    color: #F28482;
    font-weight: bold;
    font-size: 14px;
`



const Margin2 = styled.div`
    margin-top: 20px;
    margin-bottom: 100px;
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
    width: 165px;
    height: 165px;
`;

const StepImg = styled.img`
    margin-top: 30px;
    width: 675px;
    height: 79px;
`;
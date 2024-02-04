import { useEffect } from 'react';
import styled from "styled-components";
import { ButtonBox } from "./common/Button";
import axios from 'axios';

const Title = styled.span`
    width: 177px;
    height: 63px;
    flex-grow: 0;
    font-family: LexendDeca;
    font-size: 50px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #000;    
`
const Filed = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 100px;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0;
`


const BtnList = styled.div`
    width: 564px;
    height: 60px;
    flex-grow: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 30px;
    padding: 0;
`

const OrderTable = styled.div`
    height: 151px;
    align-self: stretch;
    flex-grow: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    gap: 20px;
    padding: 0;     
`
const OrderSubTitleAndBar = styled.div`
    height: 39px;
    align-self: stretch;
    flex-grow: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    padding: 0;
    border-bottom: 1px solid #bcbcbc;
`
const OrderSubTitleBar = styled.div`
    height: 29px;
    align-self: stretch;
    flex-grow: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
    padding: 8px;
`
const OrderObject = styled.span`
    height: 28px;
    align-self: stretch;
    flex-grow: 0;
    font-family: NotoSansKR;
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: normal;
    text-align: left;
    color: #000;
`
const OrderUser = styled.div`
    height: 60px;
    align-self: stretch;
    flex-grow: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    gap: 4px;
    padding: 8px;
`
const OrderUserInfo = styled.span`
    height: 28px;
    align-self: stretch;
    flex-grow: 0;
    font-family: NotoSansKR;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: normal;
    text-align: left;
    color: #000;
`
const StyledTable = styled.table`
  width: 100%; // 필요에 따라 조정
  border-collapse: collapse; // 테이블 셀 간의 간격 없애기

    th, td {
        padding: 8px; // 셀 내부 여백
        text-align: left; // 텍스트 정렬
    }

    // tbody의 첫 번째 행 위에 구분선 추가
    thead th {
    border-bottom: 1px solid #bcbcbc;
    }

`;


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
        item_price: '99,000'
    }
];



const userInfo = {
    username: "김혜미",
    email : "hyeinsuin@gmail.com"
}


const Order = () =>{

    useEffect(() => {
        const jquery = document.createElement("script");
        jquery.src = "http://code.jquery.com/jquery-1.12.4.min.js";
        const iamport = document.createElement("script");
        iamport.src = "http://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
        document.head.appendChild(jquery);
        document.head.appendChild(iamport);
        return () => {
            document.head.removeChild(jquery);
            document.head.removeChild(iamport);
        };
    }, []);
    
    const requestPay = () => {
        const { IMP } = window;
        IMP.init('imp03878765');
    
        IMP.request_pay({
            // pg: 'html5_inicis.INIBillTst',
            pg: 'kakaopay.TC0ONETIME',
            pay_method: 'card',
            merchant_uid: new Date().getTime(),
            name: '테스트 상품',
            amount: 1,
            buyer_email: 'test@naver.com',
            buyer_name: '코드쿡',
            buyer_tel: '010-1234-5678',
            buyer_addr: '서울특별시',
            buyer_postcode: '123-456',
        }, async (rsp) => {
        try {
            const { data } = await axios.post('http://localhost:8080/verifyIamport/' + rsp.imp_uid);
            if (rsp.paid_amount === data.response.amount) {
                alert('결제 성공');
            } else {
                alert('결제 실패');
            }
        } catch (error) {
            console.error('Error while verifying payment:', error);
            alert('결제 실패');
            } 
        });
    };




    return(
        <Filed>
            <Content>

            <Title>ORDER</Title>

            <DataTable 
                headers={headers} 
                items={items}
            />

            <OrderUserTable
                userInfo={userInfo}
            />

            <BtnList>
                <ButtonBox border='#f28482' background-color='#ffffff' color='#f28482'>취소하기</ButtonBox>
                <ButtonBox onClick={requestPay}>결제하기</ButtonBox>
            </BtnList>
            </Content>
        </Filed>
        


    )
};

export default Order;
function DataTable({ headers, items = [] }) {
    if (!headers || !headers.length) {
        throw new Error('<DataTable /> headers is required.')
    }
    const headerKey = headers.map((header) => header.value);

    return (
        <StyledTable>
            <thead>
                <tr>
                {headers.map((header) => 
                    <th key={header.text}>
                        {header.text} {/* 컬럼명 바인딩 */}
                    </th> 
                )}
                </tr>
            </thead>
            <tbody>
                {items.map((item, index) => (
                    <tr key={index}>
                    {headerKey.map((key) => 
                        <td key={key + index}>
                            {/* key 값에 따라 조건부 렌더링을 수행, item_price일 경우 원화 기호 추가 */}
                            {key === 'item_price' ? 
                                `₩ ${item[key]}` : // item_price 값 앞에 원화 기호(₩) 추가
                                (key === 'consultant_img' ? 
                                    <img src={item[key]} alt="Consultant" style={{ width: '100px', height: 'auto' }} /> : 
                                    item[key]
                                )
                            }
                        </td>
                    )}
                    </tr>
                ))}
            </tbody>
        </StyledTable>
    )
}

function OrderUserTable({userInfo}){
    return <OrderTable>
        <OrderSubTitleAndBar>
            <OrderSubTitleBar>
                <OrderObject>주문자 정보</OrderObject>
            </OrderSubTitleBar>
            <OrderUser>
                <OrderUserInfo>{userInfo.username}</OrderUserInfo>
                <OrderUserInfo>{userInfo.email}</OrderUserInfo>
            </OrderUser>
        </OrderSubTitleAndBar>
    </OrderTable>
}


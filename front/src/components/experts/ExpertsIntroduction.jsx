import Title from "../modify/Title";
import styled from "styled-components";
import Experts from "../common/Experts";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { setExpertList } from "../../store/ExpertsListSlice";
import BIBI from "../../assets/BIBI.png"
import LEINA from "../../assets/LEINA.png"
import DIANA from "../../assets/DIANA.png"
import RUNA from "../../assets/RUNA.png"

const ExpertCard = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Margin = styled.div`
  margin-bottom: 130px;
`;
// 컴포넌트 정의
const ExpertsIntroduction = () => {

  const { access_token } = useSelector(state => state.auth.logonUser);
  const [expertsData, setExpertsData] = useState([]);
  const [extraData, setextraData] = useState([]);
  const dispatch = useDispatch();


  useEffect(() => {

    console.log("ssss")
    const fetchData = async () => {

      try {
        const token = access_token; // 여기에 액세스 토큰을 설정합니다.
        console.log('tooo   '+token)

        const config = {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        };

        const url=import.meta.env.VITE_APP_API_KEY;

        const response = await axios.get('http://i10c106.p.ssafy.io:8080/v1/consultant/list', config);

        // 요청 성공 시 수행할 작업
        console.log('Response:', response.data);
        console.log('Response:', response.data.data_body);

        setExpertsData(response.data.data_body); // response.data를 expertsData에 저장
        dispatch(setExpertList(response.data.data_body))

        // console.log('succcc'+response.data.data_body.data)
      } 
      catch (error) {
        console.error('Error :', error);
        // alert('결제 실패');
      }

    };

    fetchData(); // fetchData 함수 호출

  }, [access_token]);


  return (
    <>
      <Title text={"Beauty consulting experts"} />

      <ExpertCard>

        {expertsData.map((expert) => (

          <Experts
            key={expert.consultant_id} // 각 전문가의 ID를 키로 사용
            id={expert.consultant_id} // 고유한 키 추가
            nickname={expert.user_response.nickname}
            text={expert.simple_introduce}
            rate={expert.star}
            ratenum={expert.reviewnum}
            tag1={expert.tag1}
            tag2={expert.tag2}
            imgsrc={expert.user_response.profile_img_url}
            width={"280px"}
            height={"405px"}
            path={"/expertsProfilecommon/" + expert.consultant_id}
          />

        ))}

        <Experts
          nickname={"BIBI"}
          text={"당신만의 고유한 아름다움을 찾아드리겠습니다."}
          rate={4.9}
          ratenum={172}
          tag1={"기초케어"}
          tag2={"자연주의"}
          imgsrc={BIBI}
          width={"280px"}
          height={"405px"}
          path={"/expertsProfileBibi"}
        />

        <Experts
          nickname={"LEINA"}
          text={"나를 마음껏 표현할 수 있을 때, 진정 아름다워집니다."}
          rate={4.7}
          ratenum={289}
          tag1={"스킨케어"}
          tag2={"헤어스타일링"}
          imgsrc={LEINA}
          width={"305px"}
          height={"370px"}
          path={"/expertsProfileLeina"}
        />
        <Experts
          nickname={"DIANA"}
          text={"나의 강점을 살리며 다양하게 스타일링을 도전해보세요."}
          rate={4.9}
          ratenum={117}
          tag1={"트렌드"}
          tag2={"웨딩뷰티"}
          imgsrc={DIANA}
          width={"296px"}
          height={"415px"}
          path={"/expertsProfileDiana"}
        />
        <Experts
          nickname={"RUNA"}
          text={"건강하고 자연스러운 아름다움을 선물해드립니다."}
          rate={4.8}
          ratenum={390}
          tag1={"에코뷰티"}
          tag2={"컬러리스트"}
          imgsrc={RUNA}
          width={"294px"}
          height={"363px"}
          path={"/expertsProfileRuna"}
        />
      </ExpertCard>
      <Margin />
    </>
  );
};

export default ExpertsIntroduction;

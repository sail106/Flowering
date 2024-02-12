import styled from "styled-components";
import Input from "../common/Input";
import { ButtonBox } from "../common/Button";
import { IoMdRemove } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import BIBI from "../../assets/BIBI.png"
import camera from "../../assets/camera.png"
import { useDispatch, useSelector } from "react-redux";
import { fetchExpertById } from "../../store/ExpertsListSlice";
import { useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";
import axios from "axios";
const MyPage = styled.div`
  width: 100vw;
  position: relative;
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const Margin = styled.div`
  margin: -20px;
`;

const Regist = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 220px;
`;

const MyImg = styled.img`
  margin-top: 5%;
  border-radius: 50%;
  width: 250px;
  margin-top: 80px;
  height: 250px;
  cursor: pointer;
`;

const CameraImg = styled(MyImg)`
  position: absolute;
  top: 12%;
  right: 43%;
  width: 3%;
  height: auto;
  background-color: #e2dfd8;
  cursor: pointer;
`;

const Container = styled.div`
  width: 50%;
  padding: 30px;
  background-color: #f5f5f5;
  margin: 70px;
  font-weight: 700;
  font-size: 25px;
`;

const PP = styled.p`
  margin-top: -50px;
  width: 53%;
`;

const Nic = styled.div`
  left: 525px;
  top: 534px;
  position: absolute;
`;

const H3 = styled.h3`
  padding-top: 30px;
  text-align: start;
  position: absolute;
  left: 362px;
  top: 538px;
`;
const H32 = styled.h3`
  padding-top: 30px;
  text-align: start;
  position: absolute;
  left: 362px;
  top: 585px;
`;
const H33 = styled.h3`
  padding-top: 30px;
  text-align: start;
  position: absolute;
  left: 362px;

  top: 753px;
`;

const H4 = styled.h3`
  padding-top: 30px;
  text-align: start;
  position: absolute;
  left: 362px;
  top: 1125px;
`;

const H42 = styled.h3`
  padding-top: 30px;
  text-align: start;
  position: absolute;
  left: 362px;
  top: 1170px;
`;
const H5 = styled.h3`
  padding-top: 30px;
  text-align: start;
  position: absolute;
  left: 362px;
  top: 1006px;
`;

const H52 = styled.h3`
  padding-top: 30px;
  text-align: start;
  position: absolute;
  left: 362px;
  top: 1052px;
`;

const Company = styled.h3`
  padding-top: 30px;
  text-align: start;
   
`;
const Workperiod = styled.h3`
  padding-top: 40px;
  text-align: start;
   
`;


const Put = styled.div`
  margin-left: 150px;
`;
const Put2 = styled.div`
  margin-left: 65px;
`;
const Career = styled.p`
  margin-top: 13px;
  margin-left: -435px;
  margin-bottom: 17px;
  font-family: "Noto Sans KR";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Career2 = styled.p`
  align-items: start;
  margin-top: 7px;
  margin-left: -390px;
  font-family: "Noto Sans KR";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const MyButton = styled(ButtonBox)`
  border-radius: 300px;
  margin: 120px;
  width: 230.145px;
  height: 59.143px;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Plus = styled(GoPlus)`
  font-size: 30px;
  display: flex;
  /* position: absolute; */
  left: 1140px;
  top: 1190px;
  color: gray;
  cursor: pointer;
`;
const Remove = styled(IoMdRemove)`
  font-size: 27px;
  left: 1140px;
  top: 1081px;
  color: gray;
  cursor: pointer;
`;

const ReviewInput = styled.textarea`
  width: 600px;
  height: 120px;
  padding: 10px;
  margin: 10px;
  margin-left: 150px;
  font-family: "Noto Sans KR";
  font-size: 16px;
  border: 1px solid #8e8c8c;
  border-radius: 5px;
  resize: none;
  margin-bottom: 10px;
  font-size: 14px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #b7b5b5;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px; /* 이 부분을 추가하여 간격을 조정합니다. */

`;

const TagInput = styled.input`
  margin: 5px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
const ExpertsProfileRegistration = () => {
  const User = useSelector(
    (state) => state.auth.logonUser
  );
  const accessToken = useSelector((state) => state.auth.logonUser.access_token);

  const [shortIntroduction, setShortIntroduction] = useState(""); // 한줄 소개
  const [detailedIntroduction, setDetailedIntroduction] = useState(""); // 자세한 소개

  console.log('전문가등록' + User.id)

  const baseurl = import.meta.env.VITE_APP_BASE_URL;
  const [Selectedid, setSelecteid] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [expertData, setExpertData] = useState(null); // 응답 데이터를 저장할 상태
  const [tags, setTags] = useState([]);


  const [workplace, setWorkplace] = useState('');
  const [employmentPeriod, setEmploymentPeriod] = useState('');

  useEffect(() => {

    const fetchData = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        };
        const { data } = await axios.get(baseurl + 'consultant/myinfo', config);
        console.log(data.data_body)
        console.log(data.data_body.simple_introduce)
        console.log(data.data_body.hash_tags)
        setSelecteid(data.data_body.consultant_id);
        setShortIntroduction(data.data_body.simple_introduce)
        setDetailedIntroduction(data.data_body.self_introduce)

        // setTags(data.data_body.hash_tags.workplace);
        // setTags(data.data_body.hash_tags.map(tag => tag.workplace));
        setTags(data.data_body.hash_tags.map(tag => ({ id: tag.hashtagId, workplace: tag.workplace })));

        // hahstagId

      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [accessToken, baseurl]);



  useEffect(() => {
    if (Selectedid) {
      dispatch(fetchExpertById(Selectedid))
        .then((response) => {
          setExpertData(response);
          console.log(response);
          console.log(response.payload.user_response.nickname);
          console.log(Selectedid);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [Selectedid, dispatch]);
  const { access_token } = useSelector(state => state.auth.logonUser);

  const handleEnterButtonClick = async () => {
    console.log(workplaces + " " + employmentPeriods)
    try {
      const token = access_token; // 여기에 액세스 토큰을 설정합니다.
      console.log('tooo   ' + token)

      const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      };

      const baseurl = import.meta.env.VITE_APP_BASE_URL;
      console.log(tags)
      const body = {
        self_introduce: detailedIntroduction,
        simple_introduce: shortIntroduction,
      };

      const response = await axios.put(baseurl + 'consultant/update', body, config);

      // 요청 성공 시 수행할 작업
      console.log('Response:', response.data);
      console.log(shortIntroduction)
      console.log(detailedIntroduction)
      alert('저장완료')
    }
    catch (error) {
      console.error('Error :', error);
      // alert('결제 실패');
    }


    try {
      const token = access_token; // 여기에 액세스 토큰을 설정합니다.
      console.log('tooo   ' + token)

      const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      };

      const baseurl = import.meta.env.VITE_APP_BASE_URL;
      console.log(tags)

      for (const tag of tags) {
        if (!tag.id) {
          const body = {
            workplace: tag.workplace
          };

          const response = await axios.post(baseurl + 'hashtags/create', body, config);

          // 요청 성공 시 수행할 작업
          console.log('Response:', response.data);
        }
      }

      alert('해시태그저장완료')
    }
    catch (error) {
      console.error('Error :', error);
      // alert('결제 실패');
    }



    // employmentPeriod + " " + workplace)
    try {
      const token = access_token; // 여기에 액세스 토큰을 설정합니다.
      console.log('tooo   ' + token)

      const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      };

      const baseurl = import.meta.env.VITE_APP_BASE_URL;

      for (const career of careers) { // 경력 객체를 사용하여 반복문을 수행합니다.
        if (!career.id) {
          const body = {
            consultantId: 1,
            workplace: career.workplace,
            start_date_of_employment: career.startDateOfEmployment,
            end_date_of_employment: career.endDateOfEmployment
          };

          const response = await axios.post(baseurl + 'careers/create', body, config);

          // 요청 성공 시 수행할 작업
          console.log('Response:', response.data);
        }
      }

      alert('경력저장완료')
    }
    catch (error) {
      console.error('Error :', error);
      // alert('결제 실패');
    }


    // navigate(`/expertmypage/${User.id}`);
  };

  const handleTagInputChange = (e) => {
    if (e.key === 'Enter' && e.target.value.trim() !== '' && tags.length < 2) {
      const newTag = {
        // hashtagId: tags.length + 1, // 태그의 ID를 현재 태그 배열의 길이에 1을 더한 값으로 설정합니다.
        workplace: e.target.value.trim()
      };
      console.log(newTag)
      setTags([...tags, newTag]);
      e.target.value = '';
    }
  };


  const handleRemoveTag = async (tag) => {
    console.log(tag)
    const updatedTags = tags.filter((t) => t.id !== tag.id);
    setTags(updatedTags);

    try {

      const token = access_token;
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      };
      const baseurl = import.meta.env.VITE_APP_BASE_URL;
      const response = await axios.delete(baseurl + `hashtags/${tag.id}`, config);
      console.log('Response:', response.data);
      alert('삭제완료');
    } catch (error) {
      console.error('Error:', error);
    }
  };


  const [workplaces, setWorkplaces] = useState([]);
  const [employmentPeriods, setEmploymentPeriods] = useState([]);

  // 회사명 변경 핸들러
  const handleWorkplaceChange = (index, value) => {
    const updatedWorkplaces = [...workplaces];
    updatedWorkplaces[index] = value;
    setWorkplaces(updatedWorkplaces);
  };

  // 근무 기간 변경 핸들러
  const handleEmploymentPeriodChange = (index, value) => {
    const updatedEmploymentPeriods = [...employmentPeriods];
    updatedEmploymentPeriods[index] = value;
    setEmploymentPeriods(updatedEmploymentPeriods);
  };

  // 경력 추가 버튼 클릭 시
  const handleAddCareer = () => {
    setWorkplaces([...workplaces, '']);
    setEmploymentPeriods([...employmentPeriods, '']);
  };

  // 경력 삭제 버튼 클릭 시
  const handleRemoveCareer = (index) => {
    const updatedWorkplaces = [...workplaces];
    updatedWorkplaces.splice(index, 1);
    setWorkplaces(updatedWorkplaces);

    const updatedEmploymentPeriods = [...employmentPeriods];
    updatedEmploymentPeriods.splice(index, 1);
    setEmploymentPeriods(updatedEmploymentPeriods);
  };

  return (
    <>
      <MyPage>
        <MyImg src={expertData?.payload?.user_response?.profile_img_url ?? ''} alt="프로필 사진" />
        <CameraImg src={camera} alt="프로필 사진" />
        <Container>전문가 소개</Container>
        <PP>
          <Regist>
            <h3>전문가 닉네임</h3>
            <Nic>{expertData?.payload?.user_response?.nickname ?? ''}   </Nic>
          </Regist>

          <H3>한줄 소개</H3>
          <Put>
            <Input
              width={"587px"}
              placeholder="한줄 소개를 입력하세요"
              value={shortIntroduction}
              onChange={(e) => setShortIntroduction(e.target.value)}
            />
          </Put>
          <H32>자세한 소개</H32>
          <ReviewInput
            placeholder="자세한 소개를 입력하세요"
            value={detailedIntroduction}
            onChange={(e) => setDetailedIntroduction(e.target.value)}
          />

          <H33>전문 분야</H33>


          {/* <Put>
            
            <Input width={"587px"} placeholder="한줄 소개를 입력하세요" />
          </Put> */}
        </PP>

        <InputContainer>
          {tags.map((tag, index) => (
            <div key={tag.hashtagId}>
              <span>{tag.workplace}</span>
              <button onClick={() => handleRemoveTag(tag)}>Remove</button>
            </div>
          ))}
          <TagInput
            type="text"
            placeholder="hashtag를 입력하세요"
            onKeyDown={handleTagInputChange}
          />
        </InputContainer>

        <Container>경력 사항</Container>

        <Margin />

        <H4>회사명</H4>
        <Career>아모레퍼시픽</Career>
        <H42>근무기간</H42>
        <Career2>2018.08 ~ 2022.03</Career2>
        <Remove />








        <Plus />
        <br />
        <H5>회사명</H5>
        <Put2>
          <Input
            width={"587px"}
            placeholder="회사명을 입력하세요"
            value={workplace}
            onChange={(e) => setWorkplace(e.target.value)}
          />
        </Put2>
        <H52>근무기간</H52>
        <Put2>
          <Input
            width={"587px"}
            placeholder="0000-00-00 ~ 0000-00-00"
            value={employmentPeriod}
            onChange={(e) => setEmploymentPeriod(e.target.value)}
          />
        </Put2>




        {workplaces.map((workplace, index) => (
          <div key={index}>
            <Remove />

            <br />
            <Company>회사명</Company>
            <Put2>
              <Input
                width={"587px"}
                placeholder="회사명을 입력하세요"
                value={workplace}
                onChange={(e) => handleWorkplaceChange(index, e.target.value)}
              />
            </Put2>
            <Workperiod>근무기간</Workperiod>
            <Put2>
              <Input
                width={"587px"}
                placeholder="0000-00-00 ~ 0000-00-00"
                value={employmentPeriods[index]}
                onChange={(e) => handleEmploymentPeriodChange(index, e.target.value)}
              />
            </Put2>
            {/* <Remove onClick={() => handleRemoveCareer(index)}/> */}
            <Plus />

            {/* <button onClick={() => handleRemoveCareer(index)}>Remove</button> */}
          </div>
        ))}

        {/* <button onClick={handleAddCareer}>Add Career</button> */}








        <br />
        <ButtonContainer>
          <MyButton onClick={handleEnterButtonClick}>저장하기</MyButton>
        </ButtonContainer>
      </MyPage>
    </>
  );
};

export default ExpertsProfileRegistration;

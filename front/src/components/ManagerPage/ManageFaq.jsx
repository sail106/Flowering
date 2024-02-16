import styled from "styled-components";
import { IoCloseOutline } from "react-icons/io5";
import Input from "../common/Input";
import { GoPlus } from "react-icons/go";
import { useState, useEffect, Fragment } from "react";
import axios from "axios";
import FaQBox from "../faq/FaqBox";
import { useSelector } from "react-redux";

const Span = styled.div`
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
`;

const Margin = styled.div`
  margin: 100px;
`;

const Answer = styled.div`
  color: #383838;
  font-family: "Noto Sans KR";
  font-size: 17px;
  margin-left: 10px;
  margin-top: 6px;
  text-align: justify;
  font-weight: 500;
`;

const FaqRow = styled.span`
  display: flex;
  justify-content: start;
  margin-right: 330px;
`;

const CloseOutline = styled(IoCloseOutline)`
  font-weight: bold;
  font-size: 23px;
  cursor: pointer;
`;

const GoPlus1 = styled(GoPlus)`
  font-weight: bold;
  font-size: 25px;
  cursor: pointer;
  margin-top: 15px;
`;

const ReviewInput = styled.textarea`
  width: 815px;
  height: 120px;
  padding: 10px;
  font-family: "Noto Sans KR";
  font-size: 16px;
  border: 1px solid #8e8c8c;
  border-radius: 5px;
  resize: none;
  font-size: 14px;
  margin-left: 15px;
  margin-top: 15px;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #b7b5b5;
  }
`;

const Box = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  width: 100%;
`;

const PutMargin = styled.div`
  margin-top: 50px;
`;

const H2 = styled.h3`
  font-family: "Noto Sans KR";
  font-size: 30px;
  padding-left: 8px;
`;

const InputBox = styled.input`
  border: 1px solid gray;
  width: 800px;
  padding: 15px;
  &::placeholder {
    color: #b1b1b1;
  }
  border-width: 0 0 1px;
  &:focus {
    outline: none;
  }
  margin-bottom: 15px;
  margin-left: 15px;
`;

const Align = styled.div``;
// ExpertsList component
const ManagerFaq = () => {
  const baseurl = import.meta.env.VITE_APP_BASE_URL;
  const [faqData, setfaqData] = useState([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const accessToken = useSelector((state) => state.auth.logonUser.access_token);
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  };
  const mydata = async () => {
    try {
      const response = await axios.get(baseurl + "faq/list");
      setfaqData(response.data.data_body); // 데이터를 상태에 저장

    } catch (error) {
      console.error("Failed to update user info:", error);
    }
  };
  useEffect(() => {
    mydata();
  }, []);
  const DeleteFaq = async (faq_id) => {
    try {
      const response = await axios.delete(
        baseurl + `faq/delete/${faq_id}`,
        config
      );

      mydata();
      // 여기에서 필요한 경우 추가적인 상태 업데이트를 수행할 수 있습니다.
    } catch (error) {
      console.error("Error deleting FAQ:", error);
    }
  };
  const AddFaq = async () => {
    const data = {
      title: question,
      content: answer,
    };
    try {
      const response = await axios.post(baseurl + "faq/add", data, config);

      setQuestion('')
      setAnswer('')
      mydata();
      // 필요한 경우 추가적인 상태 업데이트를 수행합니다.
    } catch (error) {
      console.error("Error adding FAQ:", error);
    }
  };
  return (
    <>
      <Align>
        {faqData.map((faq, index) => (
          <Fragment>
            <Box>
              <FaqRow>
                <Span>Q. </Span>
                <Answer>{faq.title}</Answer>
              </FaqRow>
              <CloseOutline onClick={() => DeleteFaq(faq.faq_id)} />
            </Box>
            <Box>
              <FaqRow>
                <Span>A. </Span>
                <Answer>
                  {faq.content.split("\n").map((line, index) => (
                    <Fragment key={index}>
                      {line}
                      <br />
                    </Fragment>
                  ))}
                </Answer>
              </FaqRow>
            </Box>
            <PutMargin/>
          </Fragment>
        ))}

        <Box>
          <FaqRow>
            <Span>Q. </Span>
            <InputBox
              placeholder="질문을 입력해주세요"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </FaqRow>
          <GoPlus1 onClick={AddFaq} />
        </Box>
        <FaqRow>
          <Span>A. </Span>
          <ReviewInput
            placeholder=" 답변을 입력해주세요"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
        </FaqRow>
        <Margin />
      </Align>
      <H2>Contents</H2>
    </>
  );
};

export default ManagerFaq;

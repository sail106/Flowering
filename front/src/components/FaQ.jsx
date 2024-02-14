import styled from "styled-components";
import { Page } from "./common/Page";
import FaQBox from "./faq/FaqBox";
import axios from "axios";

const MyPage = styled(Page)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
`;

const Header = styled.div`
  font-family: Lexend Deca;
  font-size: 50px;
  margin-top: 8%;
  justify-content: center;
  margin-bottom: 4%;
`;

const Margin = styled.div`
  height: 35%;
`;

const FaQ = () => {
  const baseurl = import.meta.env.VITE_APP_BASE_URL;
  const [faqData, setfaqData] = useState([]); // 상태 초기화
  useEffect(() => {
    const mydata = async () => {
      try {
        const response = await axios.get(baseurl + "faq/list");
        console.log(response.data.data_body);
        setfaqData(response.data.data_body); // 데이터를 상태에 저장
      } catch (error) {
        console.error("Failed to update user info:", error);
      }
    };
    mydata();
  }, []);
  return (
    <>
      <MyPage>
        <Header>FAQ</Header>
        {faqData.map((faq, index) => (
          <FaQBox key={index} question={faq.title} answer={faq.content} />
        ))}
      </MyPage>
      <Margin />
    </>
  );
};

export default FaQ;

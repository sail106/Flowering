import FirstSurveyResultPage from './FirstSurveyResult/FirstSurveyResultPage';
import { useEffect } from 'react';
import axios from 'axios';

const FirstSurveyResult = () => {
  const Token = useSelector((state) => state.auth.logonUser);
  const [data, setData] = useState(null);

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://i10c106.p.ssafy.io:8080/v1/survey/find/1',
      headers: {
        Authorization: `Bearer ${Token.access_token}`,
      },
    })
      .then((res) => {
        setData(res.data.data_body);
      })
      .catch((error) => {
        console.log(error);
        throw new Error(error);
      });
  }, [Token.access_token]);

  return (
    <>
      <FirstSurveyResultPage data={data} />
    </>
  );
};

export default FirstSurveyResult;

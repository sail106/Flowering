import Title from './Title'
import MyCalendar from '../store/MyCalendar'
import RadioButton from '../store/RadioButton'
import styled from 'styled-components';

const Cal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContentInput = styled.textarea`

  height: 90px; 
  margin-bottom: 10px;
`;

const AddImageButton = styled.button`
  border: none;
  color: black;
  padding: 10px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

const CommunityModify = () => {
  return (
    <>
      <Cal>
        <Title />
        <MyCalendar />
        <RadioButton />
        <h3>주제</h3>
        <ContentInput placeholder="입력하세요" />
        <h3>설명</h3>
        <ContentInput placeholder="입력하세요" />
        <h3>썸네일 이미지</h3>
        <AddImageButton>+사진 추가</AddImageButton>
      </Cal>
    </>
  );
}

export default CommunityModify;

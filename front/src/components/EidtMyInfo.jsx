import styled from "styled-components";
import { Page } from "./store/Page";

const MyPage = styled(Page)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  min-height:100vh;
`;
const MyImg = styled.img`
  margin-top: 10%;
  border-radius: 50%;
  width: 15%;
  height:15%;
`;

const CameraImg = styled(MyImg)`
    position:absolute;
    top:22%;
    right:43%;
    width:3%;
    height:auto;
    background-color:#E2DFD8;
`

const EditMyInfo = () => {
    return (
      <MyPage>
         <MyImg src="src/assets/naverFavicon.jpg" alt="프로필 사진" />
         <CameraImg src="src/assets/camera.png" alt="프로필 사진" />

      </MyPage>
    );
  };
  
  export default EditMyInfo;
  
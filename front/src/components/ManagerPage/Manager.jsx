import styled from "styled-components";
import ExpertsList from "./ExpertsList";
import ManagerFaq from "./ManageFaq";

// ManagerPage 스타일드 컴포넌트
const ManagerPage = styled.div`
  width: 100vw;
  position: relative;
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;



// Manager 컴포넌트
const Manager = () => {
  return (
    <ManagerPage>
      <ExpertsList />
      <ManagerFaq />
    </ManagerPage>
  );
};

export default Manager;

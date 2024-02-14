import styled from "styled-components";
import { IoMdSearch } from "react-icons/io";

import SolutionArea from "./SolutionArea"
import ConditionLabel from "./ConditionLabel";
import Input from "../common/Input";
import Search from "../modals/Search"
import SearchModal from "../modals/Search";

const MyContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const ModalBox = styled.div`
  display: flex;
  align-items: center;
  border-color: "#B1B1B1";
  border-width: 1px;
  border-radius: 5px;
  border-style: groove;
  margin-top: 100px;
`;

const ConsultantSolution = ({ expertMethod, userType }) => {

  return (
    <>
      <h2>전문가 솔루션</h2>
      <SolutionArea />
      {expertMethod?.map((el, index) => {
        return (
          <MyContainer key={index}>
            <ConditionLabel>{el} :</ConditionLabel>
            <Input
              placeholder={`${el} 솔루션을 입력하세요`}
              padding-bottom="3px"
              padding-top="8px"
            />
          </MyContainer>
        )
      })}
      <ModalBox>
        <IoMdSearch />
        <Search title={userType}/>
      </ModalBox>
    </>
  )
}

export default ConsultantSolution
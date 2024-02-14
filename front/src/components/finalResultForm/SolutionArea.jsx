import styled from "styled-components";

const SolutionInput = styled.textarea`
  width: 1250px;
  height: 120px;
  padding: 10px;
  font-family: "Noto Sans KR";
  border: 1px solid #8e8c8c;
  border-radius: 5px;
  resize: none;
  &:focus {
    outline: none;
  }
`;

const SolutionArea = () => {
  return (
    <>
      <SolutionInput />
    </>
  )
}

export default SolutionArea;
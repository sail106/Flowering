import styled from "styled-components";

const StyledLabel = styled.label`
  color: #979797;
  display:flex;
  padding-top: 13px;
  padding-bottom: 5px;
`;

const LabelStyle = (props) => {
  return (
    <StyledLabel>{props.children}</StyledLabel>
  );
};

export default LabelStyle;
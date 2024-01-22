import styled from "styled-components";


export const ButtonBox = styled.button`
  border: 1px solid #F28482;
  background-color: #F28482;
  border-radius: ${props => props['border-radius'] || '6px'};
  width: ${props => props.width || '420px'};
  padding-top: 13px;
  padding-bottom: 13px;
  margin-bottom: 10px;
  color: white;
  font-size: medium;
  font-weight: bold;
`;

const Button = (props) => {
  return (
    <ButtonBox width={props.width} border-radius={props.borderRadius} >{props.children}</ButtonBox>
  )
}

export default Button;
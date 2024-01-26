import styled from "styled-components";


export const ButtonBox = styled.button`
  border: 1px solid ${props => props.borderColor || '#F28482'};
  background-color: ${props => props['background-color'] || '#F28482'};
  border-radius: ${props => props['border-radius'] || '25px'};
  width: ${props => props.width || '420px'};
  padding-top: 13px;
  padding-bottom: 13px;
  margin-top: ${props => props['margin-top'] || '0px'};
  margin-left: ${props => props['margin-left'] || '0px'};
  margin-bottom: 10px;
  color: ${props => props.color || 'white'};
  font-size: medium;
  font-weight: bold;
`;

const Button = (props) => {
  return (
    <ButtonBox
      width={props.width}
      border-radius={props.borderRadius}
      margin-top={props.marginTop}
      margin-left={props.marginLeft}
      borderColor={props.borderColor}
      background-color={props['background-color']}
      color={props.color}
    >
      {props.children}
    </ButtonBox>
  )
}

export default Button;
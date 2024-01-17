import styled from "styled-components"

const InputBox = styled.input`
  border: 1px solid gray;

  width: ${props => props.width || '400px'};
  padding-top: 15px;
  padding-bottom: 15px;
  &::placeholder{
		color: #B1B1B1;
	}
  border-width: 0 0 1px;
  appearance: ${props => props.appearance};
`;

const Input = (props) => {
  return (
    <div>
      <InputBox
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        width={props.width}
        name={props.name}
      />
    </div>
  )
}

export default Input
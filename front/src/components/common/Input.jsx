import styled from "styled-components"

const InputBox = styled.input`
  border: 1px solid gray;
  width: ${props => props.width || '400px'};
  padding:15px;
  &::placeholder{
		color: #B1B1B1;
	}
  border-width: 0 0 1px;
  &:focus {
  outline: none;
}
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
        onChange={props.onChange}
        required={props.required}
        disabled={props.disabled}
        value={props.value}
      />
    </div>
  )
}

export default Input
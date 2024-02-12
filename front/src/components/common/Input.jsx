import styled from "styled-components"

const InputBox = styled.input`
  border: 1px solid gray;
  width: ${props => props.width || '400px'};
  padding:15px;
  display: ${props => props.display || 'block'};
  &::placeholder{
		color: #B1B1B1;
	}
  border-width: 0 0 1px;
  &:focus {
    outline: none;
  }
`;

const Input = (props) => {
  const changeInputHandler = (e) => {
    if(props.onInputChange){
      props.onInputChange(e.target.value);
    }

  }

  return (
    <div>
      <InputBox
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        width={props.width}
        name={props.name}
        onChange={changeInputHandler}
        required={props.required}
        disabled={props.disabled}
        value={props.value}
        display={props.display}
      />
    </div>
  )
}

export default Input
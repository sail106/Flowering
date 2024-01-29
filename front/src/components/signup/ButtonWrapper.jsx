import styled from "styled-components";

const ButtonCenter = styled.div`
  display: flex;
  justify-content: center;
`

const ButtonWrapper = (props) => {
  return (
    <ButtonCenter>{props.children}</ButtonCenter>
  )
}

export default ButtonWrapper;
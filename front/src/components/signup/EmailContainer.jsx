import styled from "styled-components";

const EmailContainter = styled.div`
  display: flex;
  gap: 20px;
`;

const EmailContainer = (props) => {
  return (
    <EmailContainter>{props.children}</EmailContainter>
  )
}

export default EmailContainer;
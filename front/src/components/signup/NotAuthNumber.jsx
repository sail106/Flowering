import styled from "styled-components";

const NotAuthPage = styled.p`
  text-align: center;
  color: #F28482;
  text-decoration: underline;
  text-decoration-color: #667085;
  padding-bottom: 40px;
`

const NotAuthNumber = (props) => {
  return (
    <NotAuthPage>{props.children}</NotAuthPage>
  );
};

export default NotAuthNumber;
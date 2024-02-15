
import styled from "styled-components";
import { Link } from "react-router-dom";

const Account = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  text-align: center;
`;

const AccountLink = styled(Link)`
  text-decoration: none;
  color: black;
  margin-left: 15px;
  margin-right: 15px;
  font-weight: bold;
  color: #667085;
`;

const AccountManage = props => {
  return (
    <Account>
      {props.children}
      <AccountLink to="/pw2">비밀번호 찾기</AccountLink>
      <AccountLink to="/signup">회원가입</AccountLink>
    </Account>
  );
};

export default AccountManage;

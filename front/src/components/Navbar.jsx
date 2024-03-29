import { logoutUser } from "../store/authSlice";

import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { GoPerson } from "react-icons/go";
import isPropValid from "@emotion/is-prop-valid";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const NavBox = styled.div.withConfig({
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== "backgroundColor" && prop !== "textColor",
})`
  position: fixed;
  width: 100%;
  z-index: 3;
  height: 100px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  letter-spacing: 1px;
  top: 0;
`;

const MyLink = styled(Link)`
  color: inherit;
  padding: 40px;
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 32px;
  letter-spacing: -1.2px;
`;

const NavMenu = styled.div`
  list-style: none;
  a {
    padding: 0px 15px;
    color: inherit;
  }
  a:hover {
    color: #f28482;
  }
  font-family: "Poppins", sans-serif;
  font-weight: 500;

  font-style: normal;
`;

const NavMenu2 = styled(NavMenu)`
  padding-right: 100px;
  :hover {
    color: #f28482;
  }
  align-items: center;
  justify-content: center;
  display: flex;
`;

const StyledPerson = styled(GoPerson)`
  font-size: 30px;
`;
const LoginText = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
`;

const Navbar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const baseurl = import.meta.env.VITE_APP_BASE_URL;
  const User = useSelector((state) => state.auth.logonUser);
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("black");
  const location = useLocation();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    // 로그아웃 누르면 JWT토큰 만료 + 리덕스 초기화
    dispatch(logoutUser());
  };

  const checkScroll = () => {
    const currentScrollY = window.scrollY;
    const viewportHeight = window.innerHeight;

    if (currentScrollY >= 0 && currentScrollY < viewportHeight) {
      setTextColor("white");
      setBackgroundColor("#ffc8b9");
    } else if (currentScrollY >= viewportHeight && currentScrollY < viewportHeight * 2) {
      setTextColor("white");
      setBackgroundColor("#f8e4a9");
    } else {
      setTextColor("black");
      setBackgroundColor("white");
    }
  };

  useEffect(() => {
    if (location.pathname === "/") {
      checkScroll();
    } else {
      setTextColor("black");
      setBackgroundColor("white");
    }

    const onScroll = () => {
      if (location.pathname === "/") {
        checkScroll();
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [location]);

  return (
    <NavBox backgroundColor={backgroundColor} textColor={textColor}>
      <MyLink to="/">Flowering</MyLink>
      <NavMenu>
        <Link to={"/"} reloadDocument>
          Home
        </Link>
        <Link to={"/beautyconsulting"} reloadDocument>
          Consulting
        </Link>
        <Link to={"/"} reloadDocument>
          Community
        </Link>
        <Link to={"#"} reloadDocument>
          Contents
        </Link>
        <Link to={"/faq"} reloadDocument>
          FAQ
        </Link>
      </NavMenu>
      <NavMenu2>
        {isAuthenticated ? (
          <Link to="/" onClick={handleLogout}>
            Logout
          </Link>
        ) : (
          <Link to="/login" reloadDocument>
            Login
          </Link>
        )}
        {isAuthenticated && User.role === "USER" ? (
          <Link to={`/mypage/${User.id}`} reloadDocument>
            <StyledPerson />
          </Link>
        ) : isAuthenticated && User.role === "CONSULTANT" ? (
          <Link to={`/expertmypage/${User.id}`} reloadDocument>
            <StyledPerson />
          </Link>
        ) : isAuthenticated && User.role === "ADMIN" ? (
          <Link to={`/manager`} reloadDocument>
            <StyledPerson />
          </Link>
        ) : (
          <Link to="/login" reloadDocument>
            <StyledPerson />
          </Link>
        )}
      </NavMenu2>
    </NavBox>
  );
};

export default Navbar;

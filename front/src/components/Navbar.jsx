import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { GoPerson } from "react-icons/go";
import isPropValid from '@emotion/is-prop-valid';
const NavBox = styled.div.withConfig({
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'backgroundColor' && prop !== 'textColor',
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

const Logo = styled.a`
  color:inherit;
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
    padding: 8px 12px;
    color: inherit;
  }
  a:hover {
    color: #f28482;
  }
  font-family: "Poppins", sans-serif;
  font-weight: 500;

  font-style: normal;
`;

const NavInfoLogo = styled.div`
  color:inherit;
  padding-right: 100px;
  img {
    /* border: 1px solid black; */
    padding-left: 10px;
    padding-right: 10px;
  }
  /* img:hover {
    content: url("src/assets/pinkCartIcon.svg");
  } */
`;

const StyledPerson = styled(GoPerson)`
  font-size:30px;
`

const Navbar = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("black");
  const location = useLocation();
  const checkScroll = () => {
    const currentScrollY = window.scrollY;
    const viewportHeight = window.innerHeight;

    if (currentScrollY >= 0 && currentScrollY < viewportHeight) {
      setTextColor("white");
      setBackgroundColor("#ffc8b9");
    } else if (
      currentScrollY >= viewportHeight &&
      currentScrollY < viewportHeight * 2
    ) {
      setTextColor("white");
      setBackgroundColor("#f8e4a9");
    } else {
      setTextColor("black");
      setBackgroundColor('white');
    }
  };

  useEffect(() => {
    if (location.pathname === "/") {
      checkScroll();
    } else {
      setTextColor('black')
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
      <Logo>Flowering</Logo>
      <NavMenu>
        <Link to={"/"}>Home</Link>
        <Link to={"/pw"}>Consulting</Link>
        <Link to={"#"}>Community</Link>
        <Link to={"#"}>Contents</Link>
        <Link to={"/faq"}>FAQ</Link>
      </NavMenu>
      <NavInfoLogo>
        
        <StyledPerson />
      </NavInfoLogo>
    </NavBox>
  );
};

export default Navbar;

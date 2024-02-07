import { color } from "@chakra-ui/react";
import styled from "styled-components";

const ServeyStatus = styled.div`
  font-family: "Noto Sans KR";
  font-size: 2opx;
  font-weight: 400;
  color: ${(props) => props[color] || "#b1b1b1"};
`;

const ProgressStatus = ({ color }) => {
  return <ServeyStatus color={color} />;
};

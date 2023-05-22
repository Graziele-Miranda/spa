import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  grid-column: ${(props) => props.$column};
  grid-row: ${(props) => props.$row};
  width: ${(props) => (props.$mode ? "80px" : "186px")};
  display: grid;
  grid-template-rows: 7% 22% 9% 28% 32%;
  height: 100vh;
  min-height: 300px;
  background: #1e2222;
  box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 8px 8px 0px;
  @media screen and (max-height: 500px) {
    grid-template-rows: auto auto auto auto auto;
  }
`;
export const OpenClose = styled.button`
  transform: ${(props) => (props.$mode ? "rotateY(180deg)" : "")};
  grid-row: 1;
  background-color: #1e2222;
  border: none;
  margin-left: ${(props) => (props.$mode ? "7%" : "70%")};
  color: #f5f7fa;
  border-top-right-radius: 8px;
  justify-content: ${(props) => (props.$mode ? "center" : "left")};
  :hover {
    color: #e3e6ed;
    cursor: pointer;
  }
`;
export const Logout = styled.button`
  background-color: #1e2222;
  height: fit-content;
  width: fit-content;
  grid-row: 5;
  margin-top: 28vh;
  margin-bottom: 55px;
  border: none;
  margin-left: ${(props) => (props.$mode ? "25px" : "55px")};
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.$mode ? "center" : "left")};
  :hover {
    opacity: 0.5;
  }
`;

export const Icon = styled.div`
  width: 100%;
  margin-left: ${(props) => (props.$mode ? "" : "15px")};
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.$mode ? "center" : "left")};
`;

export const User = styled.div`
  width: ${(props) => (props.$mode ? "80px" : "186px")};
  display: flex;
  align-items: stretch;
  flex-direction: column;
  justify-content: center;
  grid-row: 2;
  padding-top: 0px;
  text-align: center;
`;
export const Img = styled.div`
  margin: ${(props) => (props.$mode ? "15px" : "0 auto")};
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.$mode ? "50px" : "80px")};
  height: ${(props) => (props.$mode ? "50px" : "80px")};
  border-radius: 50%;
  border: ${({ level }) => {
    if (level > 1) {
      return "3px solid #E41165 ";
    } else {
      return "3px solid #007bff";
    }
  }};
  margin-top: ${(props) => (props.$mode ? "-24px" : "-32%")};
  margin-bottom: 5px;
  background-color: white;
`;

export const Name = styled.h1`
  font-weight: 100;
  color: #ffff;
  align-self: center;
  font-size: 12px;
  display: ${(props) => (props.$mode ? "none" : "")};
`;
export const Id = styled.h2`
  font-weight: 100;
  color: #ffff;
  align-self: center;
  font-size: 10px;
  display: ${(props) => (props.$mode ? "none" : "")};
`;
export const Email = styled.h2`
  text-decoration: underline;
  font-weight: 100;
  color: #ffff;
  align-self: center;
  font-size: 12px;
  display: ${(props) => (props.$mode ? "none" : "")};
`;
export const Ul = styled.ul`
  width: ${(props) => (props.$mode ? "80px" : "100%")};
  grid-row: 4/5;
  list-style-type: none;
  margin-top: 40%;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-template-rows: auto;
  @media (max-width: 1367px) {
    margin-top: 55%;
  }
`;

export const Li = styled.li`
  width: 100%;
  justify-content: center;
  height: 59px;
  display: flex;
  text-align: center;
  vertical-align: middle; 
  background-color: ${({ selected, level }) => {
    if (selected && level > 1) {
      return "#E41165";
    } else if (selected && level === 1) {
      return "#007bff";
    } else {
      return "#1e2222";
    }
  }};
  @media (max-width: 1367px) {
    height: 45px;
  }
  :hover {
    background-color: ${({ level }) => {
      if (level > 1) {
        return "#E41165";
      } else {
        return "#007bff";
      }
    }};
  }
`;

export const Slink = styled(Link)`
  padding: 0;
  margin: 0;
  text-decoration: none;
`;

export const Span = styled.span`
  color: #ffff;
  margin-left: 10px;
  display: ${(props) => (props.$mode ? "none" : " flex")};
`;

export const DivPhotoI = styled.div``;

export const DivDots = styled.div`
  display: flex;
  margin: 0 auto;
  width: 75px;
  display: ${(props) => (props.$mode ? "none" : "flex")};
`;

export const Dot1 = styled.div`
  height: 15px;
  width: 15px;
  border-radius: 30px;
  background-color: ${({ level }) => {
    if (level >= 1) {
      return "#E41165";
    } else {
      return "#FFFFFF";
    }
  }};
`;

export const Dot2 = styled.div`
  height: 15px;
  width: 15px;
  border-radius: 30px;
  background-color: ${({ level }) => {
    if (level >= 2) {
      return "#E41165";
    } else {
      return "#FFFFFF";
    }
  }};
`;
export const Dot3 = styled.div`
  height: 15px;
  width: 15px;
  border-radius: 30px;
  background-color: ${({ level }) => {
    if (level >= 3) {
      return "#E41165";
    } else {
      return "#FFFFFF";
    }
  }};
`;

export const Dot4 = styled.div`
  height: 15px;
  width: 15px;
  border-radius: 30px;
  background-color: ${({ level }) => {
    if (level >= 4) {
      return "#E41165";
    } else {
      return "#FFFFFF";
    }
  }};
`;

export const Dot5 = styled.div`
  height: 15px;
  width: 15px;
  border-radius: 30px;
  background-color: ${({ level }) => {
    if (level >= 5) {
      return "#E41165";
    } else {
      return "#FFFFFF";
    }
  }};
`;

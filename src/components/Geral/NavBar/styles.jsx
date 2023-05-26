import styled, { css } from "styled-components";

export const Container = styled.div`
  grid-column: ${(props) => props.$column};
  grid-row: ${(props) => props.$row};
  width: auto;
  min-width: 60%;
  margin-left: 5%;
  margin-right: 8%;
  margin-top: 1%;
  height: 60px;
  display: grid;
  grid-template-columns: 10% 75% 15%;
  border-radius: 8px;
  background: #313132;
  border-bottom: 1px solid #313132;
  @media (min-width: 50px) and (max-width: 500px) {
    width: 94%;
    height: 80%;
    grid-template-columns: 1fr;
    grid-template-rows: 50% 50%;
    display: grid;
  }
`;
export const DivInfoNotication = styled.div`
display: grid;
grid-column:3;
width:100%;
top:-6%;
z-index:2;
float: right;
position:relative;
justify-content:flex-end;
`;

export const DivNotification = styled.div`
  width:100%;
  height:100%;
  grid-column:3;
  position:relative;
  align-items:center;
  justify-content:flex-end;
  display:grid;
  right:10%;
  height: 60%;
  margin: 0 auto;
  margin-top: 5%;
  @media(max-width: 501px) {
    margin-top: 100%;
  }
  @media(max-width: 1367px){ 
    margin-top: 8%;
  }
`;


export const Logo = styled.div`
  grid-column: 1;
  padding-left: 0px;
  @media (min-width: 50px) and (max-width: 500px) {
    grid-row: 1;
    justify-content: center !important;
    align-items: center !important;
    display: flex;
    position: relative;
  }
`;

export const DivSear = styled.div`
  grid-column: 2;
  display: flex;
  width: 600px;
  height: 33px;
  max-width: 40%;
  min-width: 60%;
  margin-top: 12px;
  margin-left: 20%;
  background: #ffffff;
  border: 1px solid #cbd0dd;
  border-radius: 8px;
  @media (min-width: 50px) and (max-width: 500px) {
    justify-content: center !important;
    align-items: center !important;
    display: flex;
    width: 100%;
    grid-row: 2;
    grid-column: 1;
    margin-top: 5px;
  }
`;

export const Search = styled.div`
  width: 90%;
  height: 100%;
  background: #ffffff;
`;

export const GoSearch = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  padding-left: 5px;
  border-radius: 8px;
  background: #ffffff;
  ::-webkit-input-placeholder {
    color: #9fa6bc;
  }
`;

export const DivIcon = styled.button`
  ${(props) => {
    switch (props.$mode) {
      case "true":
        return css`
          display: none;
        `;
      default:
        return css``;
    }
  }}
  padding-top: 5px;
  width: 10%;
  height: 100%;
  background: #ffffff;
  border: none;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;


export const CloseSear = styled.div`
  ${(props) => {
    switch (props.$mode) {
      case "true":
        return css`
          display: block;
        `;
      default:
        return css`
          display: none;
        `;
    }
  }}
  z-index: 99;
  width: 80vw;
  height: 90vh;
  background-color: aliceblue;
`;
export const NotificationBadge = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  background-color: red;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;
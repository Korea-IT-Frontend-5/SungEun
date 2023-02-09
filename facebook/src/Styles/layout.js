import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export const Container = styled.div`
  position: relative;
  min-height: calc(100% - 180px);
  padding: 20px 0 164px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
  text-align: center;

  @media only screen and (min-width: 900px) {
    flex-direction: row;
  }
`;

export const MainTxt = styled.div`
  margin: 0 40px;
`;

export const MainTxtCont = styled.div`
  width: 400px;
  margin: 0 auto;
`;

export const H2 = styled.h2`
  font-size: 24px;
  line-height: 28px;
  width: auto;
`;

export const Header = styled.header``;

export const Footer = styled.footer`
  height: 180px;
  padding: 20px 40px;
  background: #ffffff;
  ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding-top: 8px;
    li {
      display: inline-block;
      padding-right: 10px;
      a {
        color: #8a8d91;
      }
    }
  }
  hr {
    margin: 8px 0 0;
  }
  p {
    font-size: ${({ theme }) => theme.FONT_SIZE.fs11};
    color: ${({ theme }) => theme.PALETTE.gray[100]};
    font-weight: bold;
    margin: 20px 0;
  }
`;

export const LoginFormDiv = styled.div`
  width: 396px;
  padding: 20px 0 28px;
  margin: 40px auto 0;
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(0 0 0 / 10%), 0 8px 16px rgba(0 0 0 / 10%);
  border-radius: 8px;
  background-color: #fff;

  form {
    display: flex;
    flex-direction: column;
  }
  div {
    padding: 6px 0;
    margin: auto;
    width: 364px;
  }

  input {
    font-size: 17px;
    background-color: #fff;
    border: 1px solid #dddfe2;
    color: #1d2129;
    padding: 14px 16px;
    width: 100%;
    border-radius: 6px;
  }
`
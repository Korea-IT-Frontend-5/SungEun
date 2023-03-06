import styled from "styled-components";
import { flexCenter } from "./common";

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  margin: 100px auto;
`;

export const Container = styled.div`
  width: 400px;
  margin: 0 auto;

  @media only screen and (min-width: 840px) {
    width: 840px;
  }
  @media only screen and (min-width: 1320px) {
    width: 1320px;
  }
`;

export const ListWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media only screen and (min-width: 840px) {
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
  }
`;

export const ListView = styled.div`
  width: 400px;
  margin: 10px;
  padding: 20px;
  border-radius: 20px;
  border: 1px solid #f2f2f2;
  box-shadow: 0 2px 4px rgba(0 0 0 / 10%), 0 8px 16px rgba(0 0 0 / 10%);
  
  @media only screen and (min-width: 1320px) {
    display: flex;
    justify-content: space-around;
    width: 640px;
  }
`;

export const Section = styled.div`

  &:last-of-type {
    margin: 10px 0 0;
  }
  @media only screen and (min-width: 1320px) {
    width: calc(65% - 15px);
    & + & {
      width: 35%;
    }
    &:last-of-type {
      margin: 0;
    }
  }
`;

export const ImgWrap = styled.div`
  overflow: hidden;
  width: 100px;
  margin-right: 10px;
  aspect-ratio: 3 / 4;
  border-radius: 5px;

  .swiper {
    aspect-ratio: 3 / 4;
  }
  .swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet, 
  .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 2px;
    width: 5px;
    height: 5px;
  }
  .swiper-pagination-bullet-active {
    transform: scale(1.5);
    background: rgba(0, 0, 0, 0.7);
    transition: all 0.5s;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ContWrap = styled.div`
  display:flex;
  overflow: hidden;
  height: 133px;
  margin-top: 10px;
  // background-color: pink;
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 44px ;


`;

export const UserWrap = styled.div`
  display: flex;
  align-items: flex-end;
  img {
    display: block;
    overflow: hidden;
    width: 44px;
    height: 44px;
    margin-right: 15px;
    border: 0;
    border-radius: 50%;
    /* background-color: red;*/
  }
  p {
    font-size: 18px;
    font-weight: bold;
  }
`

export const BtnWrap = styled.div`
`;

export const Content = styled.div`
  flex: 1;

  span {
    display: block;
    margin-top: 5px;
    font-size: 11px;
    color: #bbb;
  }
  /* background-color: green; */
`;

export const MemoComm = styled.div`
  /* background-color: #f2f2f2; */
`;

export const CommView = styled.div`
  margin-bottom: 5px;
  padding: 5px 0 5px 10px; 
  border-radius: 5px;
  background-color: #f2f2f2;
  .noDate {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 132px;

    p {
      font-size: 12px;
      padding: 10px 0;
      color: #777;
    }
  }
  ul {
    display: block;
    overflow-y: auto;
    height: 132px;

    li {
      font-size: 12px;
      padding: 10px 0;
      color: #777;

      & + li {
        border-top: 1px dotted #dbdbdb;
      }

      span {
        display: inline-block;
        margin: 5px 0 0 6px;
        font-size: 11px;
        color: #bbb;
      }
    }
  }
`
export const CommTextArea = styled.div`
  ${flexCenter};

  textarea {
    margin-right: 5px;
  }
`

export const ModalWrap = styled.div`
  position: fixed;
  top: 0;
  left:0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba(0,0,0,0.7);
`;

export const ModalContainer = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 540px;
  padding: 20px;
  background: #fff;
  border-radius: 20px;
  transform: translate(-50%, -50%);
`;

export const ModalTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

export const ModalForm = styled.form`
  /*margin-top: 10px;
  padding: 15px;
  border-radius: 5px;
  background-color: #f2f2f2;*/
`;

export const ModalCont = styled.div`
  margin-top: 10px;
  padding: 15px;
  border-radius: 5px;
  background-color: #f2f2f2;
`;

export const ModalInputBox = styled.div`
  position: relative;

  li + li {
    margin-left: 5px;
  }

  label {
    display: none;
  }

  input[type='text'] {
    height: 40px;
    margin-bottom: 5PX;
  }

  textarea {
    margin-bottom: 0;
    height: 90px;
  }

  span {
    display: block;
    font-size: 13px;
    font-weight: bold;
    padding: 5px 0;
  }
`;

export const ModalPhotoInput = styled.ul`
  display: flex;
  align-items: center;

  li {
    position: relative;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    background-color: #eee;

    :before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 2px;
      height: 24px;
      z-index: 2;
      background-color: #666;
      transform: translate(-50%, -50%);
    }
    :after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 24px;
      height: 2px;
      z-index: 2;
      background-color: #666;
      transform: translate(-50%, -50%);
    }
  }

  div {
    position: relative;
    overflow:hidden;
    border-radius: 5px;
  }

  label {
    display: none;
  }

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 4;
    width: 100%;
    transform: translate(-50%, -50%);
    object-fit: cover;
  }

  button {
    position: absolute;
    top: -3px;
    right: -5px;
    z-index: 5;
    display:none;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    background-color: #fff;
    border-radius: 50%;
    border: 1px solid #dbdbdb;
    cursor: pointer;
    transform: rotate(0);
    transition: all 0.5s;

    :hover {
      transform: rotate(180deg);
    }
  }

  input[type='file'] {
    position: relative;
    z-index: 3;
    opacity: 0;
  }
`;

export const ModalBtnArea = styled.div`
  ${flexCenter};
  margin-top: 20px;
`;

export const Error = styled.p`
  color: ${({ theme }) => theme.PALETTE.error};
  font-size: ${({ theme }) => theme.FONT_SIZE.ssmall};
  visibility: ${({ visible }) => visible ? 'visible' : 'hidden'};
`;
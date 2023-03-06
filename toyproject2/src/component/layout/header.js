import * as S from "../../style/layout";
import UserPhto from "../../images/user/user.png";
import { Button } from "../../style/button";

function HeaderTit() {
  
  return(
    <>
      <S.UserWrap>
        <img src={UserPhto} />
        <p>홍길동</p>
      </S.UserWrap>
      <S.BtnWrap>
        <Button variant={'primary-blue'} size={'auto'}>수정</Button>
        <Button variant={'primary'} size={'auto'}>삭제</Button>
      </S.BtnWrap>
    </>
  );
}

export default HeaderTit;
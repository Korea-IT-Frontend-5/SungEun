import * as S from "../../style/layout";
import UserPhto from "../../images/user/user.png";
import { Button } from "../../style/button";
import { useState } from "react";
import ModifyModal from "./modifyModal";

function HeaderTit({setModifyModalPop, onModifyListBox, onDelListBox, id, username}) {
  // console.log(username);
  const modifyModalOpen = (id) => {
    setModifyModalPop(true);
    onModifyListBox(id);
  }

  return(
    <>
      <S.UserWrap>
        <img src={UserPhto} />
        <p>{username}</p>
      </S.UserWrap>
      <S.BtnWrap>
        <Button variant={'primary-blue'} size={'auto'} onClick={()=>modifyModalOpen(id)}>수정</Button>
        <Button variant={'primary'} size={'auto'} onClick={()=>onDelListBox(id)}>삭제</Button>
      </S.BtnWrap>
    </>
  );
}

export default HeaderTit;
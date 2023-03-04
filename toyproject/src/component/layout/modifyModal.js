import * as S from "../../style/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../style/button";
import UsePhoto from "../../images/user/profile.jpg";
import UsePhoto2 from "../../images/user/profile02.jpg";
import { useViewState } from "../../context/listDate";
import { useState } from "react";
import useInputs from "../common/form/useInputs";

function ModifyModal({setModifyModalPop, showAddToastMessage, findId}) {

  // 에러창 띄우기
  const [errorObjView, setErrorObjView] = useState(false);
  const [errorUserNameView, setErrorUserNameView] = useState(false);

  console.log(findId)
  // state
  const [id, setId] = useState(findId);

  // 수정 데이터 가져오기
  const listBox = useViewState(); 
  const listBoxFind = [...listBox];
  const newListBox = listBoxFind.find((list) => list.id === id);
  // const [obj, setObj] = useState(newListBox.obj);
  // const [username, setUsername] = useState(newListBox.username);

  // form 입력정보
  const [{ obj, username }, onChangeModifyValue] = useInputs({
    obj: newListBox.obj,
    username: newListBox.username,
  })
  // const onChangeModifyValue = (e) => {
  //   if(e.target.value == ''){
  //     if(e.target.name == 'obj') return setErrorObjView(true);
  //     if(e.target.name == 'username') return setErrorUserNameView(true);
  //   }else{
  //     if(e.target.name == 'obj') return (setObj(e.target.value),setErrorObjView(false));
  //     if(e.target.name == 'username') return (setUsername(e.target.value),setErrorUserNameView(false));
  //   }
  // }
  
  // 등록일
  let now = new Date();
  let dayNow = now.toLocaleString('ko-kr');

  // 게시글 수정하기 Modal창 닫기
  const modifyModalClose = () => {
    setModifyModalPop(false);
  }
  

  // 게시글 수정
  const onModifyListBox = (e) => {
    e.preventDefault();
    let setDayNow = '';
    setDayNow = dayNow;   

    console.log(obj);
    console.log(username);

    if(!obj) return setErrorObjView(true);
    if(!username) return setErrorUserNameView(true);
    
    setErrorObjView(false);
    setErrorUserNameView(false);
    
    showAddToastMessage(obj, username, setDayNow, id);

  }

  return (
    <S.ModalWrap>
      <S.ModalContainer>
        <S.ModalTitle>게시글 수정하기</S.ModalTitle>
        <S.ModalForm onSubmit={onModifyListBox}>
          <S.ModalCont>
            {/* 내용 */}
            <S.ModalInputBox>
              <label htmlFor="obj">내용</label>
              <textarea name="obj" placeholder="내용" value={obj} onChange={onChangeModifyValue}></textarea>
              <S.Error visible={errorObjView}>내용을 입력해 주세요.</S.Error>
            </S.ModalInputBox>
            {/* 내용 사진 등록 */}
            <S.ModalInputBox>
              <span>내용 사진</span>
              <S.ModalPhotoInput>
                <li>
                  <div>
                    <label htmlFor="objPhoto1">사진1</label>
                    <input type="file" id="objPhoto1" />
                    <img src={ UsePhoto } />
                  </div>
                  <button style={{display: 'flex'}}><FontAwesomeIcon icon={faTimes} /></button>
                </li>
                <li>
                  <div>
                    <label htmlFor="objPhoto2">사진2</label>
                    <input type="file" id="objPhoto2" />
                    <img src={ UsePhoto2 } />
                  </div>
                  <button style={{display: 'flex'}}><FontAwesomeIcon icon={faTimes} /></button>
                </li>
                <li>
                  <div>
                    <label htmlFor="objPhoto3">사진3</label>
                    <input type="file" id="objPhoto3" />
                  </div>
                  <button><FontAwesomeIcon icon={faTimes} /></button>
                </li>
                <li>
                  <div>
                    <label htmlFor="objPhoto4">사진4</label>
                    <input type="file" id="objPhoto4" />
                  </div>
                  <button><FontAwesomeIcon icon={faTimes} /></button>
                </li>
                <li>
                  <div>
                    <label htmlFor="objPhoto5">사진5</label>
                    <input type="file" id="objPhoto5" />
                  </div>
                  <button><FontAwesomeIcon icon={faTimes} /></button>
                </li>
              </S.ModalPhotoInput>
            </S.ModalInputBox>
            <hr />
            {/* 작성자명 */}
            <S.ModalInputBox>
              <label htmlFor="username">작성자명</label>
              <input type="text" name="username" placeholder="작성자명" value={username} onChange={onChangeModifyValue} />
              <S.Error visible={errorUserNameView}>작성자 성함을 입력해 주세요.</S.Error>
            </S.ModalInputBox>
            {/* 프로필 사진 등록 */}
            <S.ModalInputBox>
              <span>프로필 사진</span>
              <S.ModalPhotoInput>
                <li>
                  <label htmlFor="profile"></label>
                  <input type="file" id="profile" />
                  <button><FontAwesomeIcon icon={faTimes} /></button>
                </li>
              </S.ModalPhotoInput>
            </S.ModalInputBox>
          </S.ModalCont>
          {/* btn */}
          <S.ModalBtnArea>
            <Button variant={'primary-blue'} size={'auto'} type="submit">수정</Button>
            <Button variant={'primary'} size={'auto'} onClick={modifyModalClose}>닫기</Button>
          </S.ModalBtnArea>
        </S.ModalForm>
      </S.ModalContainer>
    </S.ModalWrap>
  );
}
export default ModifyModal;
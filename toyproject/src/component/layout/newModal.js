import * as S from "../../style/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../style/button";
import UsePhoto from "../../images/user/profile.jpg";
import UsePhoto2 from "../../images/user/profile02.jpg";
import { useState } from "react";

function NewModal({showAddToastMessage, setModalPop}) {
  const [errorObjView, setErrorObjView] = useState(false);
  const [errorUserNameView, setErrorUserNameView] = useState(false);

  // Modal창 닫기
  const modalClose = () => {
    setModalPop(false);
  }

  // form 입력정보
  const onChangeValue = (e) => {
    const value = e.target.value;
    if(value == '' && e.target.name == 'obj') return setErrorObjView(true);
    if(value == '' && e.target.name == 'username') return setErrorUserNameView(true);
    setErrorObjView(false);
    setErrorUserNameView(false);
  }

  // 등록일
  let now = new Date();
  let dayNow = now.toLocaleString('ko-kr');

  // 추가 버튼 클릭
  const listPageOpen = (e) => {
    e.preventDefault();

    let setDayNow = '';
    setDayNow = dayNow;    

    const obj = e.target.obj.value;
    const username = e.target.username.value;

    if(!obj) return setErrorObjView(true);
    if(!username) return setErrorUserNameView(true);

    setErrorObjView(false);
    setErrorUserNameView(false);
    setModalPop(false);
    showAddToastMessage(obj, username, setDayNow);
  }

  return (
    <S.ModalWrap>
      <S.ModalContainer>
        <S.ModalTitle>게시글 등록하기</S.ModalTitle>
        <S.ModalForm onSubmit={listPageOpen}>
          <S.ModalCont>
            {/* 내용 */}
            <S.ModalInputBox>
              <label htmlFor="obj">내용</label>
              <textarea 
                name="obj" 
                placeholder="내용" 
                onChange={onChangeValue}
              ></textarea>
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
                    <img src={ UsePhoto } name="photo1" />
                  </div>
                  <button style={{display: 'flex'}}><FontAwesomeIcon icon={faTimes} /></button>
                </li>
                <li>
                  <div>
                    <label htmlFor="objPhoto2">사진2</label>
                    <input type="file" id="objPhoto2" />
                    <img src={ UsePhoto2 } name="photo2" />
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
              <input type="text" 
                name="username" 
                placeholder="작성자명"
                onChange={onChangeValue}
              />
              <S.Error visible={errorUserNameView}>작성자 성함을 입력해 주세요.</S.Error>
            </S.ModalInputBox>
            {/* 프로필 사진 등록 */}
            <S.ModalInputBox>
              <span>프로필 사진</span>
              <S.ModalPhotoInput>
                <li>
                  <div>
                    <label htmlFor="profile"></label>
                    <input type="file" id="profile" />
                    <img src={ UsePhoto } name="profile" />
                  </div>
                  <button style={{display: 'flex'}}><FontAwesomeIcon icon={faTimes} /></button>
                </li>
              </S.ModalPhotoInput>
            </S.ModalInputBox>
          </S.ModalCont>
          {/* btn */}
          <S.ModalBtnArea>
            <Button variant={'primary-blue'} size={'auto'}>등록</Button>
            <Button variant={'primary'} size={'auto'} onClick={modalClose}>닫기</Button>
          </S.ModalBtnArea>
        </S.ModalForm>
      </S.ModalContainer>
    </S.ModalWrap>
  );
}
export default NewModal;
import * as S from "../../style/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../style/button";
import UsePhoto from "../../images/user/profile.jpg";
import UsePhoto2 from "../../images/user/profile02.jpg";
import useInputs from "../common/form/useInputs";
import { useState } from "react";

function NewModal({setModalPop, setListPageView, setListPageArray}) {
  const [data, setDate] = useState([]);

  const [{ obj, username }] = useInputs({
    obj: '',
    username: '',
  })
  // console.log(useInputs)

  const modalClose = () => {
    setModalPop(false);
  }

  const listPageOpen = () => {
    setListPageView(true);
    setModalPop(false);
    // setListPageArray(listPageInxView => [[obj, username] , ...listPageInxView])
  }

  return (
    <S.ModalWrap>
      <S.ModalContainer>
        <S.ModalTitle>게시글 등록하기</S.ModalTitle>
        <S.ModalForm>
          <S.ModalCont>
            {/* 내용 */}
            <S.ModalInputBox>
              <label htmlFor="obj">내용</label>
              <textarea id="obj" name="obj" placeholder="내용"></textarea>
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
              <input type="text" id="username" name="username" placeholder="작성자명" />
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
            <Button variant={'primary-blue'} size={'auto'} onClick={listPageOpen}>등록</Button>
            <Button variant={'primary'} size={'auto'} onClick={modalClose}>닫기</Button>
          </S.ModalBtnArea>
        </S.ModalForm>
      </S.ModalContainer>
    </S.ModalWrap>
  );
}
export default NewModal;
import * as S from "../../style/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../style/button";
import UsePhoto from "../../images/user/profile.jpg";
import UsePhoto2 from "../../images/user/profile02.jpg";
import useInputs from "../common/form/useInputs";
import { useViewState } from "../../context/listDate";

function ModifyModal({setModifyModalPop, onModifyListBox}) {
  
  // 게시글 수정하기 Modal창 닫기
  const modifyModalClose = () => {
    setModifyModalPop(false);
  }

  return (
    <S.ModalWrap>
      <S.ModalContainer>
        <S.ModalTitle>게시글 수정하기</S.ModalTitle>
        <S.ModalForm>
          <S.ModalCont>
            {/* 내용 */}
            <S.ModalInputBox>
              <label htmlFor="obj">내용</label>
              <textarea id="obj" placeholder="내용"></textarea>
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
              <input type="text" id="username" name="username" placeholder="작성자명" />
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
            <Button variant={'primary-blue'} size={'auto'}>등록</Button>
            <Button variant={'primary'} size={'auto'} onClick={modifyModalClose}>닫기</Button>
          </S.ModalBtnArea>
        </S.ModalForm>
      </S.ModalContainer>
    </S.ModalWrap>
  );
}
export default ModifyModal;
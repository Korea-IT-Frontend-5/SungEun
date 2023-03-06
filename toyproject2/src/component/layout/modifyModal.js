import * as S from "../../style/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../style/button";
import UsePhoto from "../../images/user/profile.jpg";
import UsePhoto2 from "../../images/user/profile02.jpg";

function ModifyModal() {

  return (
    <S.ModalWrap style={{display: 'none'}}>
      <S.ModalContainer>
        <S.ModalTitle>게시글 수정하기</S.ModalTitle>
        <S.ModalForm>
          <S.ModalCont>
            {/* 내용 */}
            <S.ModalInputBox>
              <label>내용</label>
              <textarea name="obj" placeholder="내용"></textarea>
              <S.Error>내용을 입력해 주세요.</S.Error>
            </S.ModalInputBox>
            {/* 내용 사진 등록 */}
            <S.ModalInputBox>
              <span>내용 사진</span>
              <S.ModalPhotoInput>
                <li>
                  <div>
                    <label htmlFor="objPhoto1">사진1</label>
                    <input type="file" />
                    <img src={UsePhoto} />
                  </div>
                  <button style={{display: 'flex'}}><FontAwesomeIcon icon={faTimes} /></button>
                </li>
                <li>
                  <div>
                    <label>사진2</label>
                    <input type="file" />
                    <img src={UsePhoto2} />
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
                    <label>사진4</label>
                    <input type="file" />
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
              <input type="text" name="username" placeholder="작성자명" />
              <S.Error>작성자 성함을 입력해 주세요.</S.Error>
            </S.ModalInputBox>
            {/* 프로필 사진 등록 */}
            <S.ModalInputBox>
              <span>프로필 사진</span>
              <S.ModalPhotoInput>
                <li>
                  <label></label>
                  <input type="file" />
                  <button><FontAwesomeIcon icon={faTimes} /></button>
                </li>
              </S.ModalPhotoInput>
            </S.ModalInputBox>
          </S.ModalCont>
          {/* btn */}
          <S.ModalBtnArea>
            <Button variant={'primary-blue'} size={'auto'} type="submit">수정</Button>
            <Button variant={'primary'} size={'auto'}>닫기</Button>
          </S.ModalBtnArea>
        </S.ModalForm>
      </S.ModalContainer>
    </S.ModalWrap>
  );
}
export default ModifyModal;
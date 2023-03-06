
import { Button } from "../../style/button";
import * as S from "../../style/layout";

function MemoComment() {
  return (
    <S.MemoComm>
      <S.CommView>
        {/* 댓글이 없을때 */}
        {/* <div className="noDate"><p>등록된 댓글이 없습니다.</p></div> */}
        {/* 댓글이 있을때 */}
        <ul>
          <li>
            <p>너무 좋아요</p>
            <div>
              <Button variant={'primary-etc'} size={'small'}>수정</Button>
              <Button variant={'primary-etc'} size={'small'}>삭제</Button>
              <span>2023.03.06 20:30</span>
            </div>
          </li>
          <li>
            <p>너무 좋아요</p>
            <div>
              <Button variant={'primary-etc'} size={'small'}>수정</Button>
              <Button variant={'primary-etc'} size={'small'}>삭제</Button>
              <span>2023.03.06 20:30</span>
            </div>
          </li>
        </ul>
      </S.CommView>
      <S.CommTextArea>
        <textarea placeholder="댓글"></textarea>
        <Button variant={'primary-auto'} size={'etc'}>등록</Button>
      </S.CommTextArea>
    </S.MemoComm>
  );
}
export default MemoComment;
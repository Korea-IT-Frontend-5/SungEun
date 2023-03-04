import HeaderTit from "./header";
import Content from "./content";
import MemoComment from "./comment";
import * as S from "../../style/layout";

function List({ setModifyModalPop, onModifyListBox, onDelListBox, list }) {
  return (
    <S.ListView>
      <S.Section>
        {/* userProfile, 수정버튼, 삭제버튼 */}
        <S.Header>
          <HeaderTit 
            list={list}
            setModifyModalPop={setModifyModalPop} 
            onModifyListBox={onModifyListBox} 
            onDelListBox={onDelListBox} />
        </S.Header>
        {/* 이미지 swiper, 게시글 내용 */}
        <S.ContWrap>
          <Content list={list} />
        </S.ContWrap>
      </S.Section>
      {/* 댓글 */}
      <S.Section>
        <MemoComment />
      </S.Section>
    </S.ListView>
  );
}
export default List;
import List from "./list";
import * as S from "../../style/layout";
import { Button } from "../../style/button";
import NewModal from "./newModal";
import ModifyModal from "./modifyModal";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Layout() {
  return(
    <S.Wrapper>
      <S.Container>
        {/* 게시글 등록하기 Modal창 */}
        <NewModal /> 
        {/* 게시글 수정하기 Modal창 */}
        <ModifyModal /> 
        {/* 게시글 등록하기 버튼 */}
        <Button variant={'primary-auto'} size={'full'}>게시글 등록</Button>
        {/* 게시글 배열 */}
        <S.ListWrap>
          <List />
          <List />
          <List />
          <List />
        </S.ListWrap>
      </S.Container>
      <ToastContainer autoClose={1000} theme="colored" />
    </S.Wrapper>
  )
}
export default Layout;
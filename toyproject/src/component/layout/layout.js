import List from "./list";
import * as S from "../../style/layout";
import { Button } from "../../style/button";
import NewModal from "./newModal";
import { useState } from "react";
import ModifyModal from "./modifyModal";

function Layout() {
  const [modalPop, setModalPop] = useState(false);
  const [modifyModalPop, setModifyModalPop] = useState(false);
  const [listPageView, setListPageView ] = useState(false);
  const [listPageArray, setListPageArray] = useState([]);

  // 게시글 등록하기 Modal창 띄우시
  const modalOpen = (setListPageView, setListPageArray) => {
    setModalPop(true);
    // setListPageView(setListPageView);
  }

  // 게시글 수정하기 Modal창 띄우기
  const modifyModalView = (setModifyModalPop) => {
    setModifyModalPop(setModifyModalPop);
  }

  // 게시글 등록하기
  const listView = (e,) => {
    e.preventDefault(0);
    setListPageArray(setListPageArray);
    // console.log(listPageArray)
    // setListPageArray()
  }
  // console.log(listPageView)

  // const commInput = (e) => {
  //   e.preventDefault();
  //   let setTodayNow = '';
  //   setTodayNow = todayNow;    

  //   if (commTxt === '') {
  //     return;
  //   }
  //   setOnCheck(true);
  //   setCommTxtArray(commentValueList => [[commTxt, setTodayNow], ...commentValueList]);
  //   setCommTxt('');
  // };
  return(
    <S.Wrapper>
      <S.Container>
        {/* 게시글 등록하기 Modal창 */}
        { modalPop && <NewModal setModalPop={setModalPop} setListPageView={setListPageView} /> }  
        {/* 게시글 수정하기 Modal창 */}
        { modifyModalPop && <ModifyModal setModifyModalPop={setModifyModalPop} /> }  
        {/* 게시글 등록하기 버튼 */}
        <Button variant={'primary-auto'} size={'full'} onClick={modalOpen}>게시글 등록</Button>
        {/* 게시글 배열 */}
        {/* { listPageView && ( */}
          <S.ListWrap>
          {/* { listPageArray.map((ListValue, inx) => { */}
            {/* console.log(ListValue); */}
            <List setModifyModalPop={setModifyModalPop} />
            <List setModifyModalPop={setModifyModalPop} />
            <List setModifyModalPop={setModifyModalPop} />
            <List setModifyModalPop={setModifyModalPop} />
            <List setModifyModalPop={setModifyModalPop} />
          {/* })} */}
          </S.ListWrap>
        {/* )} */}
      </S.Container>
    </S.Wrapper>
  )
}
export default Layout;
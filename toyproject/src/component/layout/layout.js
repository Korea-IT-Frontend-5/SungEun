import List from "./list";
import * as S from "../../style/layout";
import { Button } from "../../style/button";
import NewModal from "./newModal";
import { useState } from "react";
import ModifyModal from "./modifyModal";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Add_Box, Del_Box, Modify_Box, useViewDispatch, useViewState } from "../../context/listDate";

function Layout() {
  //const [id, setId] = useState(0);
  const [modalPop, setModalPop] = useState(false);
  const [modifyModalPop, setModifyModalPop] = useState(false);
  const listBox = useViewState(); 
  const dispatch = useViewDispatch();
  // const [listBox, setListBox] = useState([]);

  //let id = 0;
  //if (id==0) return;

  // 게시글 등록하기 Modal창 띄우시
  const modalOpen = () => {
    setModalPop(true);
  }

  // Toast 및 게시글 등록하기
  const handleAddList = (obj, username, setDayNow) => 
  new Promise((resolve, reject) => {
    if(!obj || !username){
      return reject('Need Fullfilled');
    }
    setTimeout(() => {
      let id = listBox[listBox.length - 1].id + 1;
      dispatch(Add_Box({id, obj, username, setDayNow})); 
      resolve(listBox)
    }, 1000);
  }).then((res) => {
    listBox([res, ...listBox]);
  });
  const showAddToastMessage = (obj, username, setDayNow) => {
    toast.promise(handleAddList(obj, username, setDayNow), {
      pending: 'List Loading',
      success: 'List Success',
      error: 'List Error',
    });
  };

  // 게시글 삭제
  const onDelListBox = (id) => {
    dispatch(Del_Box({ id }));
  } 

  // 게시글 수정
  const onModifyListBox = (id, obj, username) => {
    dispatch(Modify_Box({id, obj, username}))
  }

  return(
    <S.Wrapper>
      <S.Container>
        {/* 게시글 등록하기 Modal창 */}
        { modalPop && 
          <NewModal 
            setModalPop={setModalPop} 
            showAddToastMessage={showAddToastMessage} /> 
        }  
        {/* 게시글 수정하기 Modal창 */}
        { modifyModalPop && 
          <ModifyModal 
            setModifyModalPop={setModifyModalPop}
            //showAddTodoToastMessage={showAddTodoToastMessage}
            onModifyListBox={onModifyListBox} /> 
        }  
        {/* 게시글 등록하기 버튼 */}
        <Button variant={'primary-auto'} size={'full'} 
          onClick={modalOpen}
        >게시글 등록</Button>
        {/* 게시글 배열 */}
        <S.ListWrap>
          {listBox.map((list, inx) => ( 
            <List key={inx} id={list.id} obj={list.obj} username={list.username} setDayNow={list.setDayNow} setModifyModalPop={setModifyModalPop} onDelListBox={onDelListBox} />
          ))}
        </S.ListWrap>
      </S.Container>
      <ToastContainer autoClose={1000} theme="colored" />
    </S.Wrapper>
  )
}
export default Layout;
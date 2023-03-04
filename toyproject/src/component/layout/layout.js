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
  // state
  const [modalPop, setModalPop] = useState(false);
  const [modifyModalPop, setModifyModalPop] = useState(false);
  const listBox = useViewState(); 
  const dispatch = useViewDispatch();

  // 게시글 등록하기 Modal창 띄우시
  const modalOpen = () => {
    setModalPop(true);
  }

  // Toast 및 게시글 등록하기
  const handleAddList = (obj, username, setDayNow, id) => 
    new Promise((resolve, reject) => {
      if(!obj || !username){
        return reject('Need Fullfilled');
      }
      if(id == undefined) {
        setTimeout(() => {
          let id = listBox.length + 1;
          dispatch(Add_Box({id, obj, username, setDayNow}));
        }, 1000);
        resolve(listBox)
      }else{
        setTimeout(() => {
          dispatch(Modify_Box({id, obj, username, setDayNow}));
          setModifyModalPop(false);
        }, 1000);
        resolve(listBox)
      }
    }).then((res) => {
      listBox([res, ...listBox]);
    });
  
  const showAddToastMessage = (obj, username, setDayNow, id) => {
    toast.promise(handleAddList(obj, username, setDayNow, id), {
      pending: 'List Loading',
      success: 'List Success',
      error: 'List Error',
    });
  };

  // 게시글 삭제
  const onDelListBox = (id) => {
    if(window.confirm('정말 삭제하시겠습니까?')){
      dispatch(Del_Box({ id }));
    }
  } 

  // 게시글 수정
  const [findId, setFindId] = useState('');
  const onModifyListBox = (id) => {
    setFindId(id);
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
          findId={findId}
          setModifyModalPop={setModifyModalPop}
          showAddToastMessage={showAddToastMessage} /> 
        }  
        {/* 게시글 등록하기 버튼 */}
        <Button variant={'primary-auto'} size={'full'} 
          onClick={modalOpen}
        >게시글 등록</Button>
        {/* 게시글 배열 */}
        <S.ListWrap>
        {listBox.map((list) => ( 
          <List key={list.id} 
            list={list} 
            setModifyModalPop={setModifyModalPop} 
            onModifyListBox={onModifyListBox}
            onDelListBox={onDelListBox} />
        ))}
        </S.ListWrap>
      </S.Container>
      <ToastContainer autoClose={1000} theme="colored" />
    </S.Wrapper>
  )
}
export default Layout;
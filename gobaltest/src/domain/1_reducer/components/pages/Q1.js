import NavigateButton from "../../../../components/NavigateButton";
import { Add_state, Del_state, useShopDispatch, useShopState } from "../../../../store/1_reducer";
import Q1Form from "../atom/Form";
import ReducerQ1List from "../atom/List";

const ReducerQ1Page = () => {
  const shopList = useShopState();
  const dispacth = useShopDispatch();
  /* 
      문제 1)
      로직 분리하기
    
      재료 추가 로직 분리하기

      1) 재료 추가 로직 작성하기
      2) 재료 삭제 로직 작성하기

      3) 위 로직을 현재 컴포넌트가 아닌 비즈니스 로직을 분리하여
          src/store/1_reducer.js에 구현해보세요
    */

  const onAddState = (name, price) => { 
    const id = shopList.length + 1;
    dispacth(Add_state({id, name, price}));
  }
  
  const onDelState = (id) => {
    dispacth(Del_state(id));
  }

  return (
    <>
      <h2>문제 1</h2>
      <table>
        <thead>
          <tr>
            <th>재료</th>
            <th>가격</th>
          </tr>
        </thead>
        <ReducerQ1List ingredients={shopList} onDelState={onDelState} />
      </table>
      <Q1Form onAddState={onAddState} />
      <NavigateButton isFistPage to={"/2_context/q1"} />
    </>
  );
};
export default ReducerQ1Page;

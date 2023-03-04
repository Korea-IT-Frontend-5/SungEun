import { useState } from "react";

const ContextQ2Form2 = ({ onAddIsEdit, onListView }) => {

  const [isEdit, setIsEdit] = useState(true);

  const onSubmitForm = (e) => {
    onAddIsEdit(isEdit);
    onListView(isEdit);
  }
  return (
    <div>
      <h1>Q2Form2</h1>
      <button onClick={onSubmitForm}>STATUS 추가</button>
    </div>
  );
};
export default ContextQ2Form2;

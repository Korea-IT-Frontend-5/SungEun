import { useContext, useState } from "react";
import { isEdit, setIsEdit } from "../../../../../store/3_context";

const ContextQ2Form2 = ({ onAddIsEdit }) => {

  return (
    <div>
      <h1>Q2Form2</h1>
      <button onClick={onAddIsEdit}>STATUS 추가</button>
    </div>
  );
};
export default ContextQ2Form2;

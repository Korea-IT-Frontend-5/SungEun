import useInputs from "../../../../../utils/UseInputs";
import ContextQ2Form2 from "./Form2";

const ContextQ2Form = ({ onAddForm, onAddIsEdit, onListView }) => {

  const [{ name, nickname }, onChangeForm, reset] = useInputs({
    name: '',
    nickname: ''
  })

  const onSubmit = (e) => {
    e.preventDefault();    
    if (!name && !nickname) return alert('정확히 입력해 주세요.');

    onAddForm(name, nickname);
    reset();
  }

  return (
    <div>
      <h1>Q2Form</h1>
      <input name="name" value={name} onChange={onChangeForm} placeholder="name" />
      <input name="nickname" value={nickname} onChange={onChangeForm} placeholder="nick-name" />
      <button onClick={onSubmit}>추가</button>
      <ContextQ2Form2 onAddIsEdit={onAddIsEdit} onListView={onListView} />
    </div>
  );
};
export default ContextQ2Form;

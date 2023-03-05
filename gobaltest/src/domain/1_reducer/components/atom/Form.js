import useInputs from "../../../../utils/UseInputs";


const Q1Form = ({ onAddState }) => {
  
  const [{ name, price }, onChangForm, reset] = useInputs({
    name: '',
    price: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name && !price) return alert('정확히 입력해 주세요.');
    onAddState(name, price);
    reset();
  }

  return (
    <form onSubmit={onSubmit}>
      <label>
        <input type="text" name="name" value={name} onChange={onChangForm} placeholder="재료" />
      </label>
      <label>
        <input type="number" name="price" value={price} onChange={onChangForm} placeholder="가격" />
      </label>
      <button type="submit">추가</button>
    </form>
  );
};
export default Q1Form;

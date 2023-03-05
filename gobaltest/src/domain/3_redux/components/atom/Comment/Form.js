import useInputs from "../../../../../utils/UseInputs";

const CommentForm = ({ onSubmit }) => {

  const [{ name, content }, onChangeComm] = useInputs({
    name: '',
    content: '',
  });

  return (
    <form onSubmit={onSubmit}>
      <label>
        <input type="text" name="name" value={name} onChange={onChangeComm} placeholder="이름" />
      </label>
      <label>
        <input type="text" name="content" value={content} onChange={onChangeComm} placeholder="내용" />
      </label>
      <button type="submit">추가</button>
    </form>
  );
};
export default CommentForm;

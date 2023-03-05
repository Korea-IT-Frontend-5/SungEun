const ReducerQ1List = ({ ingredients, onDelState }) => {
  return (
    <tbody>
      {ingredients.map((ingredient) => (
        <tr key={ingredient.id}>
          <td>{ingredient.name}</td>
          <td>{ingredient.price}</td>
          <td>
            <button onClick={()=>onDelState(ingredient.id)}>삭제</button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};
export default ReducerQ1List;

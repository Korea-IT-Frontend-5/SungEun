const ContextQ1Detail2 = ({onModal, isModalOpen}) => {

  return (
    <>
      <h2>ContextQ1Detail2</h2>
      <button onClick={onModal}>{ isModalOpen ? '숨기기' : '보이기'}</button>
    </>
  );
};
export default ContextQ1Detail2;

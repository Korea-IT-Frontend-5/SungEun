import ContextQ1Detail2 from "./Detail2";

const ContextQ1Detail = ({onModal, isModalOpen}) => {
  return (
    <>
      <h2>ContextQ1Detail</h2>
      <button onClick={onModal}>{ isModalOpen ? '숨기기' : '보이기'}</button>
      <ContextQ1Detail2 onModal={onModal} isModalOpen={isModalOpen} />
    </>
  );
};
export default ContextQ1Detail;

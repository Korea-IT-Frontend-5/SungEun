import { useState } from "react";
import { Button } from "../../style/button";
import * as S from "../../style/layout";

function MemoComment() {
  let now = new Date();
  let todayNow = now.toLocaleString('ko-kr');
  
  const [onCheck, setOnCheck] = useState(false);
  const [commTxt, setCommTxt] = useState('');
  const [commTxtArray, setCommTxtArray] = useState([]);

  const onCommTxtChange = (e) => {
    setCommTxt(e.target.value);
  };

  const commInput = (e) => {
    e.preventDefault();
    let setTodayNow = '';
    setTodayNow = todayNow;    

    if (commTxt === '') {
      return;
    }
    setOnCheck(true);
    setCommTxtArray(commentValueList => [[commTxt, setTodayNow], ...commentValueList]);
    setCommTxt('');
  };

  return (
    <S.MemoComm>
      <S.CommView>
        { !onCheck
          ? <div className="noDate"><p>등록된 댓글이 없습니다.</p></div>
          : ( 
              <ul>
                { commTxtArray.map((commValue, inx) => {
                  return (
                    <li key={inx}>
                      <p>{commValue[0]}</p>
                      <span>{commValue[1]}</span>
                    </li>
                  )
                })}
              </ul>
            )
        }
      </S.CommView>
      <S.CommTextArea>
        <textarea placeholder="댓글" value={commTxt} onChange={onCommTxtChange}></textarea>
        <Button variant={'primary-auto'} size={'etc'} onClick={commInput}>등록</Button>
      </S.CommTextArea>
    </S.MemoComm>
  );
}
export default MemoComment;
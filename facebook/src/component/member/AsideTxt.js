import * as S from '../../Styles/layout'
import logo from '../../images/common/logo.svg';

function AsideTxt() {
  return (
    <S.MainTxt>
      <S.MainTxtCont>
        <h1><img src={ logo } /></h1>
        <S.H2>Facebook에서 전세계에 있는 친구, 가족, 지인들과 함께 이야기를 나눠보세요.</S.H2>
      </S.MainTxtCont>
    </S.MainTxt>
  );
}

export default AsideTxt;
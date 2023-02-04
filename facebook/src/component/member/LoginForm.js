import Button from '../form/button';
import * as S from '../../Styles/layout';

function LoginForm() {

  const PwFind = (e) => {
    e.preventdefault();
    return (
      alert('창 띄우기')
      // <div>PwFindPage</div>
    );
  }
  return (
    <S.LoginFormDiv>
      <form>
        <div>
          <input type="text" title="이메일 또는 전화번호" placeholder="이메일 또는 전화번호" />
        </div>
        <div>
          <input type="password" title="비밀번호" placeholder="비밀번호" />
        </div>
        <div>
          <Button variant={'primary'} size={'full'} onClick={PwFind}>로그인</Button>
        </div>
        <div>
          <a href="/pwfind" className='col_blue'>비밀번호를 잊으셨나요?</a>
          {/* <Link to="/pwfind">비밀번호를 잊으셨나요?</Link> */}
        </div>
        <hr />
        <div>
          <Button variant={'primary-green'} size={'auto'}>새 계정 만들기</Button>
        </div>
      </form>
    </S.LoginFormDiv>
  );
}

export default LoginForm;
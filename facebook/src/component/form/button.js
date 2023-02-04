import * as S from '../../Styles/button'

function Button(props) {
  const { variant, size, children, ...rest } = props;

  return (
    <S.Button variant={variant} size={size} {...rest}>{ children }</S.Button>
  );
}
export default Button;
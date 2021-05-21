import * as S from './Button.styles';

function Button({ size = 'medium', children, ...rest }) {
  return (
    <S.Button size={size} {...rest}>
      {children}
    </S.Button>
  );
}

export default Button;

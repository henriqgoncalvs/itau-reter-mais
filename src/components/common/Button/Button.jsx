import * as S from './Button.styles';

function Button({ size = 'medium', disabled, children, ...rest }) {
  return (
    <S.Button size={size} disabled={disabled} {...rest}>
      {children}
    </S.Button>
  );
}

export default Button;

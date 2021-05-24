import * as S from './InfoBox.styles';

function InfoBox({ children, icon, clicked, ...rest }) {
  return (
    <S.Box clicked={clicked} {...rest}>
      {icon && <img src={icon} />}
      {children}
    </S.Box>
  );
}

export default InfoBox;

import * as S from './InfoBox.styles';

function InfoBox({ children, icon, ...rest }) {
  return (
    <S.Box {...rest}>
      {icon && <img src={icon} />}
      {children}
    </S.Box>
  );
}

export default InfoBox;

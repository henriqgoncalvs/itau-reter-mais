import * as S from './InfoBox.styles';

function InfoBox({ children, ...rest }) {
  return <S.Box {...rest}>{children}</S.Box>;
}

export default InfoBox;

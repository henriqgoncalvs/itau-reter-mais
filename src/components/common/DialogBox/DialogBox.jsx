import * as S from './DialogBox.styles';

function DialogBox({ children, direction = 'right' }) {
  return <S.Wrapper direction={direction}>{children}</S.Wrapper>;
}

export default DialogBox;

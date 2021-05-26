import manBlue from 'assets/img/man-blue.svg';

import * as S from './DialogBox.styles';

function DialogBox({ children, direction = 'right', withIcon, iconSrc }) {
  return (
    <S.Wrapper direction={direction}>
      {withIcon && <S.Icon src={iconSrc || manBlue} />}
      <S.Dialog direction={direction}>{children}</S.Dialog>
    </S.Wrapper>
  );
}

export default DialogBox;

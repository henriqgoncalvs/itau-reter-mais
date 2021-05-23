import manBlue from 'assets/img/man-blue.svg';

import * as S from './DialogBox.styles';

function DialogBox({ children, direction = 'right', withIcon, iconSrc }) {
  return (
    <S.Wrapper direction={direction}>
      <S.Dialog direction={direction}>{children}</S.Dialog>
      {withIcon && <S.Icon src={iconSrc || manBlue} />}
    </S.Wrapper>
  );
}

export default DialogBox;

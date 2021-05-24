import womanYellow from 'assets/img/woman-yellow.svg';

import * as S from './DialogWithIcon.styles';

function DialogWithIcon({
  gifSrc,
  direction = 'left',
  withBackground = false,
  children,
}) {
  return (
    <S.Wrapper direction={direction} withBackground={withBackground}>
      <S.Img gifSrc={gifSrc}>
        <img src={womanYellow} />
      </S.Img>
      <S.Text>{children}</S.Text>
      {gifSrc && (
        <S.Gif>
          <img src={gifSrc} />
        </S.Gif>
      )}
    </S.Wrapper>
  );
}

export default DialogWithIcon;

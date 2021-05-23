import * as S from './DialogWithIconGif.styles';

function DialogWithIconGif({ imgSrc, gifSrc, children }) {
  return (
    <S.Wrapper>
      <S.Img>
        <img src={imgSrc} />
      </S.Img>
      <S.Text>{children}</S.Text>
      <S.Gif>
        <img src={gifSrc} />
      </S.Gif>
    </S.Wrapper>
  );
}

export default DialogWithIconGif;

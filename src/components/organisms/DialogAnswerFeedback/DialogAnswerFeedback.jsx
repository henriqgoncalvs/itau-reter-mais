import womanGreen from 'assets/img/woman-green.svg';
import womanRed from 'assets/img/woman-red.svg';

import * as S from './DialogAnswerFeedback.styles';

function DialogAnswerFeedback({ correctAnswer, gifSrc, children }) {
  return (
    <S.Wrapper>
      <S.Img gifSrc={gifSrc}>
        <img src={correctAnswer ? womanGreen : womanRed} />
      </S.Img>
      <S.Text correctAnswer={correctAnswer}>{children}</S.Text>
      {gifSrc && (
        <S.Gif correctAnswer={correctAnswer}>
          <img src={gifSrc} />
        </S.Gif>
      )}
    </S.Wrapper>
  );
}

export default DialogAnswerFeedback;

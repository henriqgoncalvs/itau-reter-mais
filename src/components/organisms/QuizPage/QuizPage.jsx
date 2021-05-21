import { forwardRef } from 'react';

import * as S from './QuizPage.styles';

const QuizPage = forwardRef(({ children, ...rest }, ref) => (
  <S.Wrapper ref={ref} {...rest}>
    {children}
  </S.Wrapper>
));

QuizPage.displayName = 'QuizPage';

export default QuizPage;

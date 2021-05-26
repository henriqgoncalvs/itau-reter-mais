import * as S from './QuizPage.styles';

const QuizPage = ({ children, ...rest }) => (
  <S.Wrapper {...rest}>{children}</S.Wrapper>
);

QuizPage.displayName = 'QuizPage';

export default QuizPage;

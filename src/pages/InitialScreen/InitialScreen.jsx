import Button from 'components/common/Button/Button';
import Text from 'components/common/Text/Text';
import QuizBlock from 'components/organisms/QuizBlock/QuizBlock';
import QuizPage from 'components/organisms/QuizPage/QuizPage';

const InitialScreen = ({ nextPage }) => (
  <QuizPage>
    <QuizBlock>
      <Text tag="h1" size="large" weight="bold" align="center">
        Olá! <br /> Que bom ter você nessa jornada!
      </Text>
      <Button size="large" onClick={() => nextPage()}>
        Começar!
      </Button>
    </QuizBlock>
  </QuizPage>
);

export default InitialScreen;

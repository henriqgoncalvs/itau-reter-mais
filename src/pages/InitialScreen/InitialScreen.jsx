import Button from 'components/common/Button/Button';
import Text from 'components/common/Text/Text';
import QuizBlock from 'components/organisms/QuizBlock/QuizBlock';

const InitialScreen = ({ nextPage }) => (
  <QuizBlock>
    <Text tag="h1" size="large" weight="bold" align="center">
      Olá! <br /> Que bom ter você nessa jornada!
    </Text>
    <Button size="large" onClick={() => nextPage()}>
      Começar!
    </Button>
  </QuizBlock>
);

export default InitialScreen;

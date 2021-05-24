import Logo from 'components/common/Logo/Logo';
import QuizBlock from 'components/organisms/QuizBlock/QuizBlock';

import { usePipwerksContext } from 'contexts/PipwerksProvider';

import QuizScreen from 'pages/QuizScreen';

const App = () => {
  const { pipwerks } = usePipwerksContext();

  if (!pipwerks) {
    return (
      <QuizBlock>
        Ocorreu um erro com o LMS, por favor tente novamente!
      </QuizBlock>
    );
  }

  return (
    <>
      <Logo />
      <QuizScreen />
    </>
  );
};

export default App;

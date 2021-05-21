import { useState } from 'react';

import Logo from 'components/common/Logo/Logo';
import { usePipwerksContext } from 'contexts/PipwerksProvider';
import InitialScreen from 'pages/InitialScreen';
import QuizScreen from 'pages/QuizScreen';

const App = () => {
  const [quizInit, setQuizInit] = useState(false);
  const { pipwerks } = usePipwerksContext();

  if (!pipwerks) {
    return <div>Não foi possível carregar a aplicação</div>;
  }

  return (
    <>
      <Logo />
      {!quizInit && <InitialScreen setQuizInit={setQuizInit} />}
      {quizInit && <QuizScreen />}
    </>
  );
};

export default App;

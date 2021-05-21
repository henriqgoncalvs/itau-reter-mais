import { useState } from 'react';

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
    <div className="bg-app bg-center bg-no-repeat bg-cover w-full min-h-screen flex items-center justify-center">
      {!quizInit && <InitialScreen setQuizInit={setQuizInit} />}
      {quizInit && <QuizScreen />}
    </div>
  );
};

export default App;

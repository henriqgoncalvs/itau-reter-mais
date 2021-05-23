import Logo from 'components/common/Logo/Logo';

import { usePipwerksContext } from 'contexts/PipwerksProvider';

import QuizScreen from 'pages/QuizScreen';

const App = () => {
  const { pipwerks } = usePipwerksContext();

  if (!pipwerks) {
    return <div>Não foi possível carregar a aplicação</div>;
  }

  return (
    <>
      <Logo />
      <QuizScreen />
    </>
  );
};

export default App;

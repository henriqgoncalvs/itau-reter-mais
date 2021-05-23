import { AnimatePresence } from 'framer-motion';

import Logo from 'components/common/Logo/Logo';

import { usePipwerksContext } from 'contexts/PipwerksProvider';

import QuizScreen from 'pages/QuizScreen';

const App = () => {
  const { pipwerks } = usePipwerksContext();

  if (!pipwerks) {
    return <div>Não foi possível carregar a aplicação</div>;
  }

  return (
    <AnimatePresence exitBeforeEnter>
      <Logo />
      <QuizScreen />
    </AnimatePresence>
  );
};

export default App;

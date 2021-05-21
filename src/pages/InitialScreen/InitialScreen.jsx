import QuizBlock from 'components/organisms/QuizBlock/QuizBlock';

const InitialScreen = ({ setQuizInit }) => (
  <QuizBlock>
    <button type="button" onClick={() => setQuizInit(true)}>
      QUERO APRENDER!
    </button>
  </QuizBlock>
);

export default InitialScreen;

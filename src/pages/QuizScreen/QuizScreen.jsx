import { useEffect, useRef, useState } from 'react';

import Q1 from 'components/layout/Quizes/Q1';
import Q2 from 'components/layout/Quizes/Q2';
import Q3 from 'components/layout/Quizes/Q3';
import QuizPage from 'components/organisms/QuizPage/QuizPage';
import InitialScreen from 'pages/InitialScreen/InitialScreen';

const QuizScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayArray, setDisplayArray] = useState({
    0: true,
    1: false,
    2: false,
    3: false,
  });

  const quizRefs = useRef(new Array());

  const nextPage = () => {
    const newIndex = activeIndex + 1;
    setDisplayArray((prev) => ({ ...prev, [newIndex]: true }));
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    quizRefs.current[activeIndex].scrollIntoView();
  }, [activeIndex]);

  useEffect(() => {
    console.log(quizRefs);
  }, [quizRefs]);

  return (
    <>
      <div ref={(element) => (quizRefs.current[0] = element)}>
        <InitialScreen nextPage={nextPage} />
      </div>

      <QuizPage
        display={displayArray[1] ? 'flex' : 'none'}
        ref={(element) => (quizRefs.current[1] = element)}
      >
        <Q1 nextPage={nextPage} />
      </QuizPage>

      <QuizPage
        display={displayArray[2] ? 'flex' : 'none'}
        ref={(element) => (quizRefs.current[2] = element)}
      >
        <Q2 nextPage={nextPage} />
      </QuizPage>

      <QuizPage
        display={displayArray[3] ? 'flex' : 'none'}
        ref={(element) => (quizRefs.current[3] = element)}
      >
        <Q3 nextPage={nextPage} />
      </QuizPage>
    </>
  );
};

export default QuizScreen;

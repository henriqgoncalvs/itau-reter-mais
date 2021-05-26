import { useEffect, useRef, useState } from 'react';

import Q1 from 'components/layout/Quizes/Q1';
import Q2 from 'components/layout/Quizes/Q2';
import Q3 from 'components/layout/Quizes/Q3';
import Q4 from 'components/layout/Quizes/Q4';
import Q5 from 'components/layout/Quizes/Q5';
import Q6 from 'components/layout/Quizes/Q6';
import Q7 from 'components/layout/Quizes/Q7';
import Q8 from 'components/layout/Quizes/Q8';
import Q9 from 'components/layout/Quizes/Q9';
import Q10 from 'components/layout/Quizes/Q10';
import QuizPage from 'components/organisms/QuizPage/QuizPage';

import InitialScreen from 'pages/InitialScreen/InitialScreen';

const QuizScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayArray, setDisplayArray] = useState([true]);

  const [initialScroll, setInitialScroll] = useState(false);
  const quiz1Ref = useRef(null);

  const nextPage = () => {
    const newIndex = activeIndex < 10 ? activeIndex + 1 : activeIndex;
    setDisplayArray((prev) => ({ ...prev, [newIndex]: true }));
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    quiz1Ref.current.scrollIntoView();
  }, [initialScroll]);

  return (
    <>
      <div>
        <InitialScreen
          nextPage={nextPage}
          setInitialScroll={setInitialScroll}
        />
      </div>

      <div ref={quiz1Ref}>
        <QuizPage display={displayArray[1] ? 'flex' : 'none'}>
          <Q1 nextPage={nextPage} />
        </QuizPage>
      </div>

      <QuizPage display={displayArray[2] ? 'flex' : 'none'}>
        <Q2 nextPage={nextPage} />
      </QuizPage>

      <QuizPage display={displayArray[3] ? 'flex' : 'none'}>
        <Q3 />
      </QuizPage>

      <QuizPage display={displayArray[3] ? 'flex' : 'none'}>
        <Q4 nextPage={nextPage} />
      </QuizPage>

      <QuizPage display={displayArray[4] ? 'flex' : 'none'}>
        <Q5 nextPage={nextPage} />
      </QuizPage>

      <QuizPage display={displayArray[5] ? 'flex' : 'none'}>
        <Q6 />
      </QuizPage>

      <QuizPage display={displayArray[5] ? 'flex' : 'none'}>
        <Q7 nextPage={nextPage} />
      </QuizPage>

      <QuizPage display={displayArray[5] ? 'flex' : 'none'}>
        <Q8 nextPage={nextPage} />
      </QuizPage>

      <QuizPage display={displayArray[6] ? 'flex' : 'none'}>
        <Q9 nextPage={nextPage} />
      </QuizPage>

      <QuizPage display={displayArray[7] ? 'flex' : 'none'}>
        <Q10 nextPage={nextPage} />
      </QuizPage>
    </>
  );
};

export default QuizScreen;

import { useState } from 'react';

function useQuiz(quizesArray = []) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [quizRenderArray, setQuizRenderArray] = useState([quizesArray[0]]);

  const nextPage = () => {
    const newIndex =
      activeIndex >= quizesArray.length - 1
        ? quizesArray.length
        : activeIndex + 1;
    setActiveIndex(newIndex);
    // console.log(quizesArray);
    setQuizRenderArray((prev) => [...prev, quizesArray[newIndex]]);
    console.log(quizRenderArray[newIndex], newIndex);
  };

  const previousPage = () => {
    const newIndex = activeIndex > 0 ? activeIndex - 1 : 0;
    setActiveIndex(newIndex);
  };

  const Quiz = () => (
    <>
      {quizRenderArray?.map((QuizItem, index) => (
        <QuizItem
          key={index}
          nextPage={nextPage}
          style={{ display: index < activeIndex ? 'initial' : 'none' }}
        />
      ))}
    </>
  );

  return {
    activeIndex,
    setActiveIndex,
    nextPage,
    previousPage,
    Quiz,
  };
}

export default useQuiz;

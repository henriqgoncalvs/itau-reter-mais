import { useEffect, useState } from 'react';

function useQuiz(pagesArray = []) {
  const [index, setIndex] = useState(0);
  const [QuizPage, setQuizPage] = useState(<p>Carregando</p>);

  useEffect(() => {
    if (index) {
      setQuizPage(pagesArray[index]);
    }
  }, [index, pagesArray]);

  const nextPage = () => {
    const newIndex =
      index >= pagesArray.length - 1 ? pagesArray.length : index + 1;
    setIndex(newIndex);
    setQuizPage(pagesArray[newIndex]);
  };

  const previousPage = () => {
    const newIndex = index > 0 ? index - 1 : 0;
    setIndex(newIndex);
    setQuizPage(pagesArray[newIndex]);
  };

  return { index, setIndex, QuizPage, nextPage, previousPage };
}

export default useQuiz;

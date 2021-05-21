import QuizBlock from 'components/organisms/QuizBlock/QuizBlock';

const Q1 = ({ nextPage }) => {
  const handleNext = () => {
    nextPage();
  };

  return (
    <QuizBlock>
      <h1>
        O processo será interativo e você precisará tomar ações ao longo da
        jornada
      </h1>
      <div style={{ minWidth: '280px' }}>
        <p>Vamos começar?</p>
      </div>
      <button onClick={handleNext} type="button">
        VAMOS!!
      </button>
    </QuizBlock>
  );
};

export default Q1;

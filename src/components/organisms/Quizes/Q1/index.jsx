const Q1 = ({ nextPage }) => {
  const handleNext = () => {
    nextPage();
  };

  return (
    <div>
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
    </div>
  );
};

export default Q1;

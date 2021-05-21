const InitialScreen = ({ setQuizInit }) => (
  <div className="flex flex-col items-center justify-center gap-14 px-12 max-w-screen-md py-8 px-6 w-screen md:pt-0">
    <button type="button" onClick={() => setQuizInit(true)}>
      QUERO APRENDER!
    </button>
  </div>
);

export default InitialScreen;

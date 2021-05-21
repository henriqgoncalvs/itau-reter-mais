import { useState } from 'react';

import { usePipwerksContext } from 'contexts/PipwerksProvider';

const Q20 = ({ setIndex }) => {
  const { pipwerks } = usePipwerksContext();
  const [modalFinish, setModalFinish] = useState(false);

  const handleRecomecar = () => {
    setIndex(0);
    if (pipwerks) pipwerks.SCORM.set('cmi.core.lesson_status', 'incomplete');
    pipwerks.SCORM.set('cmi.core.score.raw', '0');
  };

  const handleEncerrar = () => {
    setModalFinish(true);
  };

  return (
    <div>
      {modalFinish && (
        <button onClick={() => setModalFinish(false)}>
          Feche a janela para encerrar o curso!
        </button>
      )}
      <h1>Que jornada, hein?</h1>
      <p>
        Ufa, espero que você tenha navegado com a gente e aproveitado o processo
        de aprendizagem ao máximo! Tenha sempre em mente os nossos pilares:
        personalização, humanização e resolutividade. Com isso sempre em mente,
        aliado aos processos que nós já possuímos, os resultados virão com muito
        mais facilidade! Nos vemos em breve!
      </p>
      <div className="flex flex-wrap justify-center mx-auto items-center gap-8">
        <button onClick={handleRecomecar} type="button">
          RECOMEÇAR
        </button>
        <button onClick={handleEncerrar} type="button">
          ENCERRAR O CURSO
        </button>
      </div>
    </div>
  );
};

export default Q20;

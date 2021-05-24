import { useEffect, useState } from 'react';

import justin from 'assets/img/nao-vejo-a-hora-de-lancar-spiderman-no-way-home.gif';
import suzana from 'assets/img/suzana-parabens.gif';

import Button from 'components/common/Button/Button';
import Text from 'components/common/Text/Text';
import DialogAnswerFeedback from 'components/organisms/DialogAnswerFeedback';
import QuestionsCheckbox from 'components/organisms/QuestionsCheckbox';
import QuizBlock from 'components/organisms/QuizBlock/QuizBlock';

import { usePipwerksContext } from 'contexts/PipwerksProvider';

const options = [
  {
    id: 0,
    description:
      'O seu cartão tem diversos benefícios pelo relacionamento que você já tem com a gente. Com essa oferta, você vai economizar muito durante o ano. Vale a pena aceitar!',
  },
  {
    id: 1,
    description:
      'Vou providenciar o cancelamento, então. Por favor, aguarde um momento para que eu lhe informe todas as condições do encerramento do contrato.',
  },
];

const Q8 = ({ nextPage }) => {
  const { incrementScore } = usePipwerksContext();
  const [optionsAnswer, setOptionsAnswer] = useState(null);
  const [answered, setAnswered] = useState(false);

  const handleNext = () => {
    if (optionsAnswer !== null && optionsAnswer === 0) {
      nextPage();
    }
  };

  useEffect(() => {
    if (optionsAnswer === 0 && !answered) {
      incrementScore(10);
      setAnswered(true);
    }
  }, [incrementScore, optionsAnswer, answered]);

  return (
    <QuizBlock>
      <Text alignSelf="flex-start" weight="bold" size="medium">
        Conduza para o fechamento
      </Text>

      <Text alignSelf="flex-start">
        Você mostrou todos os benefícios e fez as ofertas disponíveis de acordo
        com o perfil do cliente. Mas, ainda assim, ele não tem certeza… E agora,
        o que você diz, User?
      </Text>

      <Text alignSelf="flex-start">
        Seja racional e use as informações fornecidas pelo cliente ou pelo
        sistema para encontrar a melhor solução.
      </Text>

      <QuestionsCheckbox
        setValue={setOptionsAnswer}
        options={options}
        name="Q8"
      />

      {optionsAnswer === 0 && (
        <DialogAnswerFeedback correctAnswer gifSrc={suzana}>
          Show! Vale a pena fazer um último esforço e mostrar que o cliente está
          deixando passar uma ótima oportunidade. Por isso repasse todos os
          benefícios que ele tem ao ficar com o cartão.
        </DialogAnswerFeedback>
      )}

      {optionsAnswer === 1 && (
        <DialogAnswerFeedback gifSrc={justin}>
          Calma lá! Vale a pena fazer um último esforço e mostrar que o cliente
          está deixando passar uma ótima oportunidade.
        </DialogAnswerFeedback>
      )}

      <Button onClick={handleNext}>Confirmar</Button>
    </QuizBlock>
  );
};

export default Q8;

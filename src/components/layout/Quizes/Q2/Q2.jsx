import { useState } from 'react';

import Button from 'components/common/Button/Button';
import Line from 'components/common/Line/Line';
import Title from 'components/common/Title/Title';
import QuestionsCheckbox from 'components/organisms/QuestionsCheckbox/QuestionsCheckbox';
import QuizBlock from 'components/organisms/QuizBlock/QuizBlock';
import { usePipwerksContext } from 'contexts/PipwerksProvider';

const options = [
  {
    id: 0,
    description:
      'Eu sou cliente há bastante tempo e, por isso, tenho vários benefícios.',
  },
  {
    id: 1,
    description: 'Eu me sinto único, porque o atendimento é personalizado.',
  },
  {
    id: 2,
    description:
      'Parecem que eles me conhecem há um tempão e sempre me oferencem exatamente o que eu preciso.',
  },
];

const Q1 = ({ nextPage }) => {
  const { set } = usePipwerksContext();
  const [optionsAnswer, setOptionsAnswer] = useState(0);

  const handleNext = () => {
    if (optionsAnswer === 2) {
      set('score', 10);
    }
    nextPage();
  };

  return (
    <QuizBlock>
      <Title weight="bold" align="center" size="medium">
        Tão importante como descobrir o real motivo pelo qual o cliente quer
        partir é saber o que podemos fazer para ele ficar.
      </Title>
      <Title align="center">
        User, ao pensar nas marcas, produtos e serviços que gosta, o que faz com
        que você continue sendo cliente?
      </Title>

      <QuestionsCheckbox setValue={setOptionsAnswer} options={options} />

      <Button onClick={handleNext}>Confirmar</Button>

      <Line />

      <Title align="center">
        Todos esses motivos fazem os olhos do cliente brilhar. Principalmente
        quando falamos de algo tão importante: sua vida financeira.
      </Title>
      <Title align="center">
        Afinal, isso engloba uma série de outras coisas importantes para ele:
        seus sonhos, sua família, suas conquistas e até suas dificuldades no
        momento.
      </Title>
    </QuizBlock>
  );
};

export default Q1;

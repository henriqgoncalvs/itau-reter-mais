import { useState } from 'react';

import AnimatedWrapper from 'components/common/AnimatedWrapper/AnimatedWrapper';
import Button from 'components/common/Button/Button';
import Line from 'components/common/Line/Line';
import Text from 'components/common/Text/Text';
import QuestionsCheckbox from 'components/organisms/QuestionsCheckbox';
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

const Q2 = ({ nextPage }) => {
  const { set, user } = usePipwerksContext();
  const [optionsAnswer, setOptionsAnswer] = useState(null);

  const handleNext = () => {
    if (optionsAnswer !== null) {
      if (optionsAnswer === 2) {
        set('score', 25);
      }
      nextPage();
    }
  };

  return (
    <QuizBlock>
      <AnimatedWrapper direction="top">
        <Text weight="bold" align="center" size="medium">
          Tão importante como descobrir o real motivo pelo qual o cliente quer
          partir é saber o que podemos fazer para ele ficar.
        </Text>
        <Text align="center">
          {user}, ao pensar nas marcas, produtos e serviços que gosta, o que faz
          com que você continue sendo cliente?
        </Text>
      </AnimatedWrapper>

      <AnimatedWrapper delay={0.6}>
        <QuestionsCheckbox
          setValue={setOptionsAnswer}
          options={options}
          name="Q2"
        />
      </AnimatedWrapper>

      <AnimatedWrapper direction="bottom" delay={1.2}>
        <Button onClick={handleNext} disabled={optionsAnswer === null}>
          Confirmar
        </Button>
      </AnimatedWrapper>

      <Line />

      <AnimatedWrapper direction="right" delay={1.8}>
        <Text align="center">
          Todos esses motivos fazem os olhos do cliente brilhar. Principalmente
          quando falamos de algo tão importante: sua vida financeira.
        </Text>
        <Text align="center">
          Afinal, isso engloba uma série de outras coisas importantes para ele:
          seus sonhos, sua família, suas conquistas e até suas dificuldades no
          momento.
        </Text>
      </AnimatedWrapper>
    </QuizBlock>
  );
};

export default Q2;

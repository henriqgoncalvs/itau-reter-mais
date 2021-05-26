import { useEffect, useState } from 'react';

import AnimatedWrapper from 'components/common/AnimatedWrapper/AnimatedWrapper';
import Line from 'components/common/Line/Line';
import NextPageIcon from 'components/common/NextPageIcon';
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
  const [showNextSection, setShowNextSection] = useState(false);

  useEffect(() => {
    if (optionsAnswer !== null) {
      setShowNextSection(true);
      if (optionsAnswer === 2) {
        set('score', 25);
      }
      nextPage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [optionsAnswer, set, setShowNextSection]);

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

      {showNextSection && (
        <AnimatedWrapper direction="right">
          <Line />
          <Text align="center">
            Todos esses motivos fazem os olhos do cliente brilhar.
            Principalmente quando falamos de algo tão importante: sua{' '}
            <strong>vida financeira</strong>.
          </Text>
          <Text align="center">
            Afinal, isso engloba uma série de outras coisas importantes para
            ele: seus <strong>sonhos</strong>, sua <strong>família</strong>,
            suas <strong>conquistas</strong> e até suas{' '}
            <strong>dificuldades</strong> no momento.
          </Text>
        </AnimatedWrapper>
      )}

      {showNextSection && (
        <AnimatedWrapper direction="bottom" delay={1.2}>
          <NextPageIcon />
        </AnimatedWrapper>
      )}
    </QuizBlock>
  );
};

export default Q2;

import { useEffect, useState } from 'react';

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
  const { incrementScore, get } = usePipwerksContext();
  const [optionsAnswer, setOptionsAnswer] = useState(null);
  const [user, setUser] = useState('');

  const handleNext = () => {
    if (optionsAnswer) {
      if (optionsAnswer === 2) {
        incrementScore(10);
      }
      nextPage();
    }
  };

  useEffect(() => {
    if (get) {
      setUser(get('name'));
    }
  }, [get]);

  return (
    <QuizBlock>
      <Text weight="bold" align="center" size="medium">
        Tão importante como descobrir o real motivo pelo qual o cliente quer
        partir é saber o que podemos fazer para ele ficar.
      </Text>
      <Text align="center">
        {user}, ao pensar nas marcas, produtos e serviços que gosta, o que faz
        com que você continue sendo cliente?
      </Text>

      <QuestionsCheckbox
        setValue={setOptionsAnswer}
        options={options}
        name="Q2"
      />

      <Button onClick={handleNext}>Confirmar</Button>

      <Line />

      <Text align="center">
        Todos esses motivos fazem os olhos do cliente brilhar. Principalmente
        quando falamos de algo tão importante: sua vida financeira.
      </Text>
      <Text align="center">
        Afinal, isso engloba uma série de outras coisas importantes para ele:
        seus sonhos, sua família, suas conquistas e até suas dificuldades no
        momento.
      </Text>
    </QuizBlock>
  );
};

export default Q2;

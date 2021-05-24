import { useEffect, useState } from 'react';

import acolherIcon from 'assets/img/acolher.png';
import confiancaIcon from 'assets/img/confianca.png';
import tranquilizarIcon from 'assets/img/tranquilizar.png';
import willSmith from 'assets/img/will-smith.gif';

import AnimatedWrapper from 'components/common/AnimatedWrapper';
import Button from 'components/common/Button/Button';
import Line from 'components/common/Line/Line';
import Text from 'components/common/Text/Text';
import Dialog from 'components/organisms/Dialog';
import DialogWithIcon from 'components/organisms/DialogWithIcon';
import InformativeCheckboxes from 'components/organisms/InformativeCheckboxes';
import QuizBlock from 'components/organisms/QuizBlock/QuizBlock';

import { usePipwerksContext } from 'contexts/PipwerksProvider';

const options = [
  {
    id: 0,
    title: 'Acolha',
    description:
      'Eu sou cliente há bastante tempo e, por isso, tenho vários benefícios.',
    icon: acolherIcon,
  },
  {
    id: 1,
    title: 'Transmita confiança',
    description: 'Eu me sinto único, porque o atendimento é personalizado.',
    icon: confiancaIcon,
  },
  {
    id: 2,
    title: 'Tranquilize',
    description:
      'Parecem que eles me conhecem há um tempão e sempre me oferencem exatamente o que eu preciso.',
    icon: tranquilizarIcon,
  },
];

const Q3 = ({ nextPage }) => {
  const { get } = usePipwerksContext();
  const [user, setUser] = useState('');

  const handleNext = () => {
    nextPage();
  };

  useEffect(() => {
    if (get) {
      setUser(get('name'));
    }
  }, [get]);

  return (
    <QuizBlock>
      <AnimatedWrapper direction="top">
        <Text size="medium">
          Por isso, a primeira coisa que fazemos quando o cliente nos procura,
          independentemente do canal, é: <strong>ACOLHER</strong>
        </Text>
      </AnimatedWrapper>

      <AnimatedWrapper delay={0.6}>
        <Dialog>
          <Dialog.Box>
            Bom dia, Tiago! Bem-vindo(a) ao meu atendimento. Meu nome é {user},
            em que posso ajudar? Está tudo bem com você?
          </Dialog.Box>
        </Dialog>
      </AnimatedWrapper>

      <AnimatedWrapper delay={1.2}>
        <InformativeCheckboxes options={options} />
      </AnimatedWrapper>

      <Line />

      <AnimatedWrapper direction="right" delay={1.8}>
        <DialogWithIcon gifSrc={willSmith}>
          <Text weight="bold" size="medium" style={{ marginBottom: '1rem' }}>
            Pega essa dica!
          </Text>
          <Text>
            Coloque-se no lugar do cliente e escute-o com atenção. As
            informações recebidas são valiosas para você negociar e oferecer
            propostas personalizadas.
          </Text>
        </DialogWithIcon>
      </AnimatedWrapper>

      <AnimatedWrapper direction="bottom" delay={2.4}>
        <Button onClick={handleNext}>Confirmar</Button>
      </AnimatedWrapper>
    </QuizBlock>
  );
};

export default Q3;

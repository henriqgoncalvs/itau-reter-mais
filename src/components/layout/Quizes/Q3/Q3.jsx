import acolherIcon from 'assets/img/acolher.png';
import confiancaIcon from 'assets/img/confianca.png';
import tranquilizarIcon from 'assets/img/tranquilizar.png';
import willSmith from 'assets/img/will-smith.gif';

import AnimatedWrapper from 'components/common/AnimatedWrapper';
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
    description: 'Faça um atendimento personalizado. Cada cliente é único!',
    icon: acolherIcon,
  },
  {
    id: 1,
    title: 'Transmita confiança',
    description: 'Mostre ao cliente que você quer ajudá-lo.',
    icon: confiancaIcon,
  },
  {
    id: 2,
    title: 'Tranquilize',
    description:
      'Esteja à disposição para encontrar uma solução junto com o cliente e faça-o perceber que a situação vai ser resolvida.',
    icon: tranquilizarIcon,
  },
];

const Q3 = () => {
  const { user } = usePipwerksContext();

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
        <DialogWithIcon gifSrc={willSmith} withIcon={false}>
          <Text weight="bold" size="medium" style={{ marginBottom: '1rem' }}>
            Pega essa dica!
          </Text>
          <Text>
            Coloque-se no lugar do cliente e escute-o com atenção. As
            informações recebidas são valiosas para você{' '}
            <strong>negociar</strong> e oferecer{' '}
            <strong>propostas personalizadas</strong>.
          </Text>
        </DialogWithIcon>
      </AnimatedWrapper>
    </QuizBlock>
  );
};

export default Q3;

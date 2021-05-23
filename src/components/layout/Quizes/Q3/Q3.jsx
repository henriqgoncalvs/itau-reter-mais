import acolherIcon from 'assets/img/acolher.png';
import computerHappyGif from 'assets/img/computer-happy.gif';
import confiancaIcon from 'assets/img/confianca.png';
import tranquilizarIcon from 'assets/img/tranquilizar.png';

import Button from 'components/common/Button/Button';
import Line from 'components/common/Line/Line';
import Text from 'components/common/Text/Text';
import Dialog from 'components/organisms/Dialog';
import DialogWithIcon from 'components/organisms/DialogWithIcon';
import InformativeCheckboxes from 'components/organisms/InformativeCheckboxes';
import QuizBlock from 'components/organisms/QuizBlock/QuizBlock';

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
  const handleNext = () => {
    nextPage();
  };

  return (
    <QuizBlock>
      <Text size="medium">
        Por isso, a primeira coisa que fazemos quando o cliente nos procura,
        independentemente do canal, é: <strong>ACOLHER</strong>
      </Text>
      <Dialog>
        <Dialog.Box>
          Bom dia, Tiago! Bem-vindo(a) ao meu atendimento. Meu nome é [USER], em
          que posso ajudar? Está tudo bem com você?
        </Dialog.Box>
      </Dialog>

      <InformativeCheckboxes options={options} />

      <Line />

      <DialogWithIcon gifSrc={computerHappyGif}>
        <Text weight="bold" size="medium" style={{ marginBottom: '1rem' }}>
          Pega essa dica!
        </Text>
        <Text>
          Coloque-se no lugar do cliente e escute-o com atenção. As informações
          recebidas são valiosas para você negociar e oferecer propostas
          personalizadas.
        </Text>
      </DialogWithIcon>
      <Button onClick={handleNext}>Confirmar</Button>
    </QuizBlock>
  );
};

export default Q3;

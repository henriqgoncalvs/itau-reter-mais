import checkbox from 'assets/img/checkmark.svg';
import Button from 'components/common/Button/Button';
import Line from 'components/common/Line/Line';
import Title from 'components/common/Title/Title';
import Dialog from 'components/organisms/Dialog';
import InformativeCheckboxes from 'components/organisms/InformativeCheckboxes';
import QuizBlock from 'components/organisms/QuizBlock/QuizBlock';

const messages = [
  {
    id: 0,
    text: 'Bom dia, Tiago! Bem-vindo(a) ao meu atendimento. Meu nome é [USER], em que posso ajudar? Está tudo bem com você?',
  },
];

const options = [
  {
    id: 0,
    title: 'Acolha',
    description:
      'Eu sou cliente há bastante tempo e, por isso, tenho vários benefícios.',
    icon: checkbox,
  },
  {
    id: 1,
    title: 'Transmita confiança',
    description: 'Eu me sinto único, porque o atendimento é personalizado.',
    icon: checkbox,
  },
  {
    id: 2,
    title: 'Tranquilize',
    description:
      'Parecem que eles me conhecem há um tempão e sempre me oferencem exatamente o que eu preciso.',
    icon: checkbox,
  },
];

const Q3 = ({ nextPage }) => {
  const handleNext = () => {
    nextPage();
  };

  return (
    <QuizBlock>
      <Title size="medium">
        Por isso, a primeira coisa que fazemos quando o cliente nos procura,
        independentemente do canal, é: <strong>ACOLHER</strong>
      </Title>
      <Dialog messages={messages} />

      <InformativeCheckboxes options={options} />

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
      <Button onClick={handleNext}>Confirmar</Button>
    </QuizBlock>
  );
};

export default Q3;

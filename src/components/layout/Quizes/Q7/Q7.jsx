import checkbox from 'assets/img/checkmark.svg';
import computerHappyGif from 'assets/img/computer-happy.gif';
import Button from 'components/common/Button/Button';
import Text from 'components/common/Text/Text';
import DialogWithIcon from 'components/organisms/DialogWithIcon';
import InformativeCheckboxes from 'components/organisms/InformativeCheckboxes';
import QuizBlock from 'components/organisms/QuizBlock/QuizBlock';

const options = [
  {
    id: 0,
    title: 'Dúvida',
    icon: checkbox,
  },
  {
    id: 1,
    title: 'Mal-entendido',
    icon: checkbox,
  },
  {
    id: 2,
    title: 'Fuga da conversa',
    icon: checkbox,
  },
  {
    id: 3,
    title: 'Pré-julgamento',
    description:
      'Parecem que eles me conhecem há um tempão e sempre me oferencem exatamente o que eu preciso.',
    icon: checkbox,
  },
  {
    id: 4,
    title: 'Preço',
    icon: checkbox,
  },
];

const Q7 = ({ nextPage }) => {
  const handleNext = () => {
    nextPage();
  };

  return (
    <QuizBlock>
      <Text alignSelf="flex-start" weight="bold" size="medium">
        Negocie
      </Text>

      <Text alignSelf="flex-start">
        O cliente pode não aceitar sua oferta logo de cara por diversos fatores:
      </Text>

      <InformativeCheckboxes options={options} />

      <Text alignSelf="flex-start">
        Seja racional e use as informações fornecidas pelo cliente ou pelo
        sistema para encontrar a melhor solução.
      </Text>

      <DialogWithIcon gifSrc={computerHappyGif}>
        <Text weight="bold" size="medium" style={{ marginBottom: '1rem' }}>
          Pega essa dica!
        </Text>
        <Text>
          Valorize sua oferta. Use uma vacina de cada vez. Assim, você terá
          cartas na manga para continuar a negociação se o cliente recusar a
          primeira oferta.
        </Text>
      </DialogWithIcon>
      <Button onClick={handleNext}>Confirmar</Button>
    </QuizBlock>
  );
};

export default Q7;

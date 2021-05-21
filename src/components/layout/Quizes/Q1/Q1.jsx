import Button from 'components/common/Button/Button';
import Input from 'components/common/Input/Input';
import Title from 'components/common/Title/Title';
import QuizBlock from 'components/organisms/QuizBlock/QuizBlock';
import { usePipwerksContext } from 'contexts/PipwerksProvider';

const Q1 = ({ nextPage }) => {
  const { set, get } = usePipwerksContext();

  const handleInputChange = (e) => {
    set('name', e.target.value);
  };

  const handleNext = () => {
    get('name');
    nextPage();
  };

  return (
    <QuizBlock>
      <Title weight="bold" align="center" size="medium">
        Pra começar, como gosta de ser chamado?
      </Title>
      <Input
        onChange={handleInputChange}
        placeholder="Digite seu nome ou apelido"
      />
      <Button onClick={handleNext}>Vamos começar</Button>
    </QuizBlock>
  );
};

export default Q1;

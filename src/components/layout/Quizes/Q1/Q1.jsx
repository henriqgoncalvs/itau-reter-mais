import { useState } from 'react';

import Button from 'components/common/Button/Button';
import Input from 'components/common/Input/Input';
import Text from 'components/common/Text/Text';
import QuizBlock from 'components/organisms/QuizBlock/QuizBlock';

import { usePipwerksContext } from 'contexts/PipwerksProvider';

const Q1 = ({ nextPage }) => {
  const { set, setUser } = usePipwerksContext();
  const [name, setName] = useState('');

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleNext = () => {
    if (name !== '') {
      setUser(name);
      set('status', 'incomplete');
      nextPage();
    }
  };

  return (
    <QuizBlock>
      <Text weight="bold" align="center" size="medium">
        Pra começar, como gosta de ser chamado?
      </Text>
      <Input
        onChange={handleInputChange}
        placeholder="Digite seu nome ou apelido"
      />
      <Button onClick={handleNext} disabled={name === ''}>
        Vamos começar
      </Button>
    </QuizBlock>
  );
};

export default Q1;

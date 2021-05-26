import { useState } from 'react';

import AnimatedWrapper from 'components/common/AnimatedWrapper';
import Button from 'components/common/Button/Button';
import Input from 'components/common/Input/Input';
import NextPageIcon from 'components/common/NextPageIcon';
import Text from 'components/common/Text/Text';
import QuizBlock from 'components/organisms/QuizBlock/QuizBlock';

import { usePipwerksContext } from 'contexts/PipwerksProvider';

const Q1 = ({ nextPage }) => {
  const { set, setUser } = usePipwerksContext();
  const [name, setName] = useState('');
  const [showNextSection, setShowNextSection] = useState(false);

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleNext = () => {
    if (name !== '') {
      setUser(name);
      set('status', 'incomplete');
      setShowNextSection(true);
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

      {!showNextSection && (
        <Button onClick={handleNext} disabled={name === ''}>
          Vamos começar
        </Button>
      )}

      {showNextSection && (
        <AnimatedWrapper direction="bottom">
          <NextPageIcon />
        </AnimatedWrapper>
      )}
    </QuizBlock>
  );
};

export default Q1;

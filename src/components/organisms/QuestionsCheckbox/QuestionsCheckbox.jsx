import Checkbox from 'components/common/Checkbox';

import * as S from './QuestionsCheckbox.styles';

function QuestionsCheckbox({ options, setValue, name }) {
  return (
    <S.Wrapper>
      {options.map((opt) => (
        <Checkbox key={opt.id} setValue={setValue} opt={opt} name={name} />
      ))}
    </S.Wrapper>
  );
}

export default QuestionsCheckbox;

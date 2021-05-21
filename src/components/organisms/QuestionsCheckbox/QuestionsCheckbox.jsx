import Checkbox from 'components/common/Checkbox';

import * as S from './QuestionsCheckbox.styles';

function QuestionsCheckbox({ options, setValue }) {
  return (
    <S.Wrapper>
      {options.map((opt) => (
        <Checkbox
          key={opt.id}
          setValue={setValue}
          opt={opt}
          checked={opt.id === 0}
        />
      ))}
    </S.Wrapper>
  );
}

export default QuestionsCheckbox;

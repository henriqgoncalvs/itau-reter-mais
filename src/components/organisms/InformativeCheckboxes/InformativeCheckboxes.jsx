import InformativeCheckbox from 'components/common/InformativeCheckbox';

import * as S from './InformativeCheckboxes.styles';

function InformativeCheckboxes({ options }) {
  return (
    <S.Wrapper>
      {options.map((opt) => (
        <InformativeCheckbox key={opt.id} opt={opt} />
      ))}
    </S.Wrapper>
  );
}

export default InformativeCheckboxes;

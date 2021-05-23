import * as S from './InformativeCheckbox.styles';

function InformativeCheckbox({ opt }) {
  return (
    <S.Wrapper>
      <img src={opt.icon} />
      <S.Content>
        {opt.title && <p>{opt.title}</p>}
        {opt.description && <p>{opt.description}</p>}
      </S.Content>
    </S.Wrapper>
  );
}

export default InformativeCheckbox;

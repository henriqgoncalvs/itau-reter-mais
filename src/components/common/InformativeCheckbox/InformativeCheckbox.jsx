import * as S from './InformativeCheckbox.styles';

function InformativeCheckbox({ opt }) {
  return (
    <S.Wrapper>
      <img src={opt.icon} />
      <S.Content>
        <p>{opt.title}</p>
        <p>{opt.description}</p>
      </S.Content>
    </S.Wrapper>
  );
}

export default InformativeCheckbox;

import * as S from './TextListWithIndex.styles';

function TextListWithIndex({ items }) {
  return (
    <S.Wrapper>
      {items.map((item, index) => (
        <S.ListItem key={index}>
          <span>{index}</span>
          {item.text}
        </S.ListItem>
      ))}
    </S.Wrapper>
  );
}

export default TextListWithIndex;

import * as S from './Title.styles';

function Title({
  tag = 'p',
  size = 'small',
  align = 'left',
  weight = 'normal',
  children = '',
}) {
  if (tag === 'h1')
    return (
      <S.Heading size={size} align={align} weight={weight}>
        {children}
      </S.Heading>
    );

  return (
    <S.Paragraph size={size} align={align} weight={weight}>
      {children}
    </S.Paragraph>
  );
}

export default Title;

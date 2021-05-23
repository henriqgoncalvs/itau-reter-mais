import * as S from './Text.styles';

function Text({
  tag = 'p',
  size = 'small',
  align = 'left',
  alignSelf = 'initial',
  weight = 'normal',
  children = '',
  withBackground = false,
  ...rest
}) {
  if (tag === 'h1')
    return (
      <S.Heading
        size={size}
        align={align}
        alignSelf={alignSelf}
        weight={weight}
        withBackground={withBackground}
        {...rest}
      >
        {children}
      </S.Heading>
    );

  return (
    <S.Paragraph
      size={size}
      align={align}
      alignSelf={alignSelf}
      weight={weight}
      withBackground={withBackground}
      {...rest}
    >
      {children}
    </S.Paragraph>
  );
}

export default Text;

import reterMaisLogo from 'assets/img/reter-mais-logo.png';

import * as S from './Logo.styles';

function Logo() {
  return (
    <S.Wrapper>
      <img src={reterMaisLogo} alt="Reter Mais" />
    </S.Wrapper>
  );
}

export default Logo;

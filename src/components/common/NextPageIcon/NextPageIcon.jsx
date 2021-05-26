import roleIcon from 'assets/img/role-icon.png';

import * as S from './NextPageIcon.styles';

function NextPageIcon() {
  return (
    <S.Wrapper>
      <S.Text>Role a página para continuar</S.Text>
      <img src={roleIcon} />
    </S.Wrapper>
  );
}

export default NextPageIcon;

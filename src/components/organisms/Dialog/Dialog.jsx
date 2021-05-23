import DialogBox from 'components/common/DialogBox';

import * as S from './Dialog.styles';

function Dialog({ children }) {
  return <S.Wrapper>{children}</S.Wrapper>;
}

Dialog.Box = DialogBox;

export default Dialog;

import DialogBox from 'components/common/DialogBox';

import * as S from './Dialog.styles';

function Dialog({ messages }) {
  return (
    <S.Wrapper>
      {messages.map((msg) => (
        <DialogBox key={msg.id} direction={msg.direction}>
          {msg.text}
        </DialogBox>
      ))}
    </S.Wrapper>
  );
}

export default Dialog;

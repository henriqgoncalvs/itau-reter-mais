import { useEffect, useState } from 'react';

import Dialog from 'components/common/DialogBox';
import Text from 'components/common/Text';
import DialogWithIcon from 'components/organisms/DialogWithIcon';
import InfoBoxes from 'components/organisms/InfoBoxes';
import QuizBlock from 'components/organisms/QuizBlock';

import { usePipwerksContext } from 'contexts/PipwerksProvider';

const informativeBoxes = [
  {
    text: 'Faça um atendimento personalizado.',
  },
  {
    text: 'Transmita confiança.',
  },
  {
    text: 'Escute e acolha.',
  },
];

function Q9() {
  const { get } = usePipwerksContext();
  const [user, setUser] = useState('');

  useEffect(() => {
    if (get) {
      setUser(get('name'));
    }
  }, [get]);

  return (
    <QuizBlock>
      <Text alignSelf="flex-start" weight="bold" size="medium">
        Cliente retido?
      </Text>

      <Text alignSelf="flex-start">
        Você mostrou todos os benefícios e fez as ofertas disponíveis de acordo
        com o perfil do cliente. Mas, ainda assim, ele não tem certeza… E agora,
        o que você diz, {user}?
      </Text>

      <Dialog>
        <Dialog.Box direction="left" withIcon>
          Poderia ajudar em algo mais? Agradeço a ligação. Tenha um excelente
          dia!
        </Dialog.Box>
      </Dialog>

      <InfoBoxes boxes={informativeBoxes} />

      <DialogWithIcon>
        Ficamos por aqui, {user}! Mas você pode continuar sua jornada e aprender
        mais sobre retenção. Acesse XXXX.
        <Text>
          Valorize sua oferta. Use uma vacina de cada vez. Assim, você terá
          cartas na manga para continuar a negociação se o cliente recusar a
          primeira oferta.
        </Text>
      </DialogWithIcon>
    </QuizBlock>
  );
}

export default Q9;

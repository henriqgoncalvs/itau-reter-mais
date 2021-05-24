import { useEffect, useState } from 'react';

import acolherIcon from 'assets/img/acolher.png';
import confiancaIcon from 'assets/img/confianca.png';
import personalizadoIcon from 'assets/img/personalizado.png';

import Button from 'components/common/Button';
import Text from 'components/common/Text';
import Dialog from 'components/organisms/Dialog';
import DialogWithIcon from 'components/organisms/DialogWithIcon';
import InfoBoxes from 'components/organisms/InfoBoxes';
import QuizBlock from 'components/organisms/QuizBlock';
import YesNoTable from 'components/organisms/YesNoTable';

import { usePipwerksContext } from 'contexts/PipwerksProvider';

const yesNoItems = {
  yes: [
    'Confirme o tipo de cartão contratado.',
    'Faça um resumo das novas condições do cartão para evitar dúvidas no futuro.',
    'Em caso de mudança de grade, explique todos os detalhes e pergunte se o cliente tem dúvidas.',
    'Caso o cliente solicite, gere o número de protocolo do atendimento.',
  ],
  no: [
    'Informe as condições do cancelamento (checklist colaborativa) antes de efetivá-lo.',
    'Faça um resumo das novas condições do cartão para evitar dúvidas no futuro.',
    'Em caso de mudança de grade, explique todos os detalhes e pergunte se o cliente tem dúvidas.',
    'Caso o cliente solicite, gere o número de protocolo do atendimento.',
  ],
};

const informativeBoxes = [
  {
    text: 'Faça um atendimento personalizado.',
    icon: personalizadoIcon,
  },
  {
    text: 'Transmita confiança.',
    icon: confiancaIcon,
  },
  {
    text: 'Escute e acolha.',
    icon: acolherIcon,
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

  const handleFinish = () => {
    console.log('acabou');
  };

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

      <YesNoTable tableItems={yesNoItems} />

      <Dialog>
        <Dialog.Box>
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

      <Button size="large" onClick={handleFinish}>
        Finalizar
      </Button>
    </QuizBlock>
  );
}

export default Q9;

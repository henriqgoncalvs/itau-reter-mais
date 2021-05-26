import aumentarLimiteImg from 'assets/img/aumentar-limite.jpg';
import desempregadoImg from 'assets/img/desempregado.jpg';
import muitoCaroImg from 'assets/img/muito-caro.jpg';
import naoUsoImg from 'assets/img/nao-uso.jpg';

import AnimatedWrapper from 'components/common/AnimatedWrapper/AnimatedWrapper';
import Text from 'components/common/Text/Text';
import Dialog from 'components/organisms/Dialog';
import DialogWithIcon from 'components/organisms/DialogWithIcon';
import InfoBoxes from 'components/organisms/InfoBoxes';
import QuizBlock from 'components/organisms/QuizBlock/QuizBlock';

const annuityBoxes = [
  {
    text: 'Troca de pontos',
  },
  {
    text: 'Desconto na anuidade',
  },
  {
    text: 'Downgrade / Upgrade',
  },
];

const doesntKnowBennefitsBoxes = [
  {
    text: 'Desconto na anuidade',
  },
  {
    text: 'Downgrade / Upgrade (de acordo com a necessidade do cliente)',
  },
  {
    text: 'Cartão sem anuidade ou com desconto por gastos.',
  },
];

const lowLimitBoxes = [
  {
    text: 'Limite emergencial ou aumento de limite',
  },
  {
    text: 'Desconto na anuidade',
  },
  {
    text: 'Cartão sem anuidade ou com desconto por gastos',
  },
];

const financialDifficutiesBoxes = [
  {
    text: 'Desconto na anuidade',
  },
  {
    text: 'Downgrade (dentro da mesma família)',
  },
  {
    text: 'Cartão sem anuidade ou com desconto por gastos',
  },
];

const Q6 = () => {
  return (
    <QuizBlock>
      <AnimatedWrapper direction="top">
        <Text weight="bold" size="large">
          Cada situação, uma solução!
        </Text>

        <Text alignSelf="flex-start">
          Sabe aquele discurso pronto, na ponta da língua? Pode esquecer! O
          cliente quer uma solução que é a cara dele. Dá uma olhada nas{' '}
          <strong>ofertas</strong>
          que você pode fazer de acordo com o <strong>motivo</strong> que ele
          trouxe:
        </Text>
      </AnimatedWrapper>

      {/* Anuidade */}

      <AnimatedWrapper delay={0.6}>
        <Text alignSelf="flex-start" weight="bold" size="medium" withBackground>
          Anuidade
        </Text>

        <Dialog>
          <Dialog.Box direction="left" withIcon iconSrc={muitoCaroImg}>
            Minha anuidade é muito alta, é um absurdo…
          </Dialog.Box>
        </Dialog>

        <DialogWithIcon direction="right" withIcon={false}>
          <Text>
            Se mesmo depois de argumentar sobre todos os benefícios, o cliente
            ainda não estiver convencido, fale sobre:
          </Text>
        </DialogWithIcon>

        <InfoBoxes boxes={annuityBoxes} />
      </AnimatedWrapper>

      {/* Cliente não percebe os benefícios */}

      <AnimatedWrapper direction="right" delay={1.2}>
        <Text alignSelf="flex-start" weight="bold" size="medium" withBackground>
          Cliente não percebe os benefícios
        </Text>

        <Dialog>
          <Dialog.Box direction="left" withIcon iconSrc={naoUsoImg}>
            Não uso cartão pra nada. Não acho vantagem em ter esse cartão.
          </Dialog.Box>
        </Dialog>

        <DialogWithIcon direction="right" withIcon={false}>
          <Text>
            Se mesmo depois de argumentar sobre todos os benefícios, o cliente
            ainda não estiver convencido, fale sobre:
          </Text>
        </DialogWithIcon>

        <InfoBoxes boxes={doesntKnowBennefitsBoxes} />
      </AnimatedWrapper>

      {/* Limite baixo */}

      <AnimatedWrapper delay={1.5}>
        <Text alignSelf="flex-start" weight="bold" size="medium" withBackground>
          Limite baixo
        </Text>

        <Dialog>
          <Dialog.Box direction="left" withIcon iconSrc={aumentarLimiteImg}>
            Eu gostaria de aumentar meu limite...
          </Dialog.Box>
        </Dialog>

        <DialogWithIcon direction="right" withIcon={false}>
          <Text>
            Se mesmo depois de argumentar sobre todos os benefícios, o cliente
            ainda não estiver convencido, fale sobre:
          </Text>
        </DialogWithIcon>

        <InfoBoxes boxes={lowLimitBoxes} />
      </AnimatedWrapper>

      {/* Dificuldade financeira */}

      <AnimatedWrapper direction="right" delay={1.7}>
        <Text alignSelf="flex-start" weight="bold" size="medium" withBackground>
          Dificuldade financeira
        </Text>
        <Dialog>
          <Dialog.Box direction="left" withIcon iconSrc={desempregadoImg}>
            Neste momento estou desempregado, não tenho condições de pagar a
            anuidade.
          </Dialog.Box>
        </Dialog>

        <DialogWithIcon direction="right" withIcon={false}>
          <Text>
            Se mesmo depois de argumentar sobre todos os benefícios, o cliente
            ainda não estiver convencido, fale sobre:
          </Text>
        </DialogWithIcon>

        <InfoBoxes boxes={financialDifficutiesBoxes} />

        <DialogWithIcon>
          <Text>
            Em caso de <strong>mudança de grade</strong>, reforce todos os
            detalhes, principalmente sobre perda de benefícios e alteração no
            programa de pontos.
          </Text>
        </DialogWithIcon>
      </AnimatedWrapper>
    </QuizBlock>
  );
};

export default Q6;

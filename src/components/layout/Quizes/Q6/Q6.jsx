import AnimatedWrapper from 'components/common/AnimatedWrapper/AnimatedWrapper';
import Button from 'components/common/Button/Button';
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

const Q6 = ({ nextPage }) => {
  const handleNext = () => {
    nextPage();
  };

  return (
    <QuizBlock>
      <AnimatedWrapper direction="top">
        <Text alignSelf="flex-start" weight="bold" size="medium">
          Cada situação, uma solução!
        </Text>

        <Text alignSelf="flex-start">
          Sabe aquele discurso pronto, na ponta da língua? Pode esquecer! O
          cliente quer uma solução que é a cara dele. Dá uma olhada nas ofertas
          que você pode fazer de acordo com o motivo que ele trouxe:
        </Text>
      </AnimatedWrapper>

      {/* Anuidade */}

      <AnimatedWrapper delay={0.6}>
        <Text alignSelf="flex-start" weight="bold" size="medium" withBackground>
          Anuidade
        </Text>

        <Dialog>
          <Dialog.Box direction="left" withIcon>
            Não sabia que eu posso fazer parte do Programa de Pontos. Como
            funciona isso?
          </Dialog.Box>
        </Dialog>

        <DialogWithIcon direction="right">
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
          <Dialog.Box direction="left" withIcon>
            Não uso cartão pra nada. Não acho vantagem em ter esse cartão.
          </Dialog.Box>
        </Dialog>

        <DialogWithIcon direction="right">
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
          <Dialog.Box direction="left" withIcon>
            Eu gostaria de aumentar meu limite...
          </Dialog.Box>
        </Dialog>

        <DialogWithIcon direction="right">
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
          <Dialog.Box direction="left" withIcon>
            Neste momento estou desempregado, não tenho condições de pagar a
            anuidade.
          </Dialog.Box>
        </Dialog>

        <DialogWithIcon direction="right">
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

      <AnimatedWrapper direction="bottom" delay={2}>
        <Button onClick={handleNext}>Confirmar</Button>
      </AnimatedWrapper>
    </QuizBlock>
  );
};

export default Q6;

import { useEffect, useState } from 'react';

import leoCongrats from 'assets/img/leo-congrats.gif';
import notSoFast from 'assets/img/not-so-fast.gif';

import AnimatedWrapper from 'components/common/AnimatedWrapper/AnimatedWrapper';
import Button from 'components/common/Button/Button';
import Text from 'components/common/Text/Text';
import Dialog from 'components/organisms/Dialog';
import DialogAnswerFeedback from 'components/organisms/DialogAnswerFeedback/DialogAnswerFeedback';
import DialogWithIcon from 'components/organisms/DialogWithIcon';
import InfoBoxesCollapsed from 'components/organisms/InfoBoxesCollapsed/InfoBoxesCollapsed';
import QuestionsCheckbox from 'components/organisms/QuestionsCheckbox';
import QuizBlock from 'components/organisms/QuizBlock/QuizBlock';

import { usePipwerksContext } from 'contexts/PipwerksProvider';

const options = [
  {
    id: 0,
    description: 'Aguarde um momento, que vou seguir com o cancelamento.',
  },
  {
    id: 1,
    description:
      'Gostaria de entender melhor como você usa seu cartão atualmente.',
  },
];

const collapsedBoxes = [
  {
    id: 0,
    text: 'Você usa seu cartão com frequência? Realiza compras sempre?',
    collapsedComponent: {
      title: 'Se o volume de compras for alto:',
      description: `
        Ele pode se interessar por um Programa de Pontos, caso ainda não tenha.
        Você também pode falar sobre a troca de pontos para isentar a anuidade.
      `,
    },
  },
  {
    id: 1,
    text: 'Qual é seu consumo mensal no cartão de crédito?',
    collapsedComponent: {
      title: `
        O consumo ajuda a identificar o tipo de cartão que o cliente precisa no dia a dia.
      `,
      description: `
        Ele pode se interessar por um cartão com anuidade isenta por consumo mínimo mensal.
      `,
    },
  },
  {
    id: 2,
    text: 'Você tem outros cartões que usa com frequência?',
    collapsedComponent: {
      description: `
        Caso tenha outros cartões, pergunte o porquê esses cartões são mais vantajosos e quais benefícios ele mais aproveita.
      `,
    },
  },
];

const Q4 = ({ nextPage }) => {
  const { set, user } = usePipwerksContext();
  const [optionsAnswer, setOptionsAnswer] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [allBoxesSeen, setAllBoxesSeen] = useState(false);

  const handleNext = () => {
    if (optionsAnswer && optionsAnswer === 1 && allBoxesSeen) {
      nextPage();
    }
  };

  useEffect(() => {
    if (optionsAnswer === 1 && !answered) {
      set('score', 50);
      setAnswered(true);
    }
  }, [set, optionsAnswer, answered]);

  return (
    <QuizBlock>
      <AnimatedWrapper direction="top">
        <Text alignSelf="flex-start" weight="bold" size="medium">
          Entenda o motivo
        </Text>

        <Text alignSelf="flex-start">
          Você conheceu o cliente e criou conexão com ele. Chegou o momento de
          <strong>entender a sua dor.</strong>
        </Text>
      </AnimatedWrapper>

      <AnimatedWrapper delay={0.6}>
        <DialogWithIcon>
          <Text>
            Compreenda se houve algum motivo de insatisfação com o banco para
            que possamos resolver.
          </Text>
        </DialogWithIcon>
      </AnimatedWrapper>

      <AnimatedWrapper direction="right" delay={1.2}>
        <Dialog>
          <Dialog.Box>
            Qual foi o motivo de querer desistir da nossa parceria e cancelar o
            cartão?
          </Dialog.Box>

          <Dialog.Box direction="left">
            É que, no momento, ele não atende minhas necessidades.
          </Dialog.Box>
        </Dialog>
      </AnimatedWrapper>

      <AnimatedWrapper delay={1.6}>
        <DialogWithIcon>
          <Text>
            Lembre-o sobre o tempo que tem o cartão. Se ele ficou com a gente
            por tanto tempo, é porque gostou dos serviços e condições.
          </Text>
        </DialogWithIcon>
      </AnimatedWrapper>

      <AnimatedWrapper direction="left" delay={2}>
        <Dialog>
          <Dialog.Box>
            Você tem cartão conosco há 5 anos. Teve algum problema neste
            período?
          </Dialog.Box>

          <Dialog.Box direction="left">
            Não tive nenhum problema. Mas, sabe o que é, {user}... A coisa não
            está fácil pra ninguém e preciso cortar alguns gastos.
          </Dialog.Box>
        </Dialog>
      </AnimatedWrapper>

      <AnimatedWrapper delay={2.2}>
        <DialogWithIcon>
          <Text>E agora, {user}, o que você diz ao cliente?</Text>
        </DialogWithIcon>
      </AnimatedWrapper>

      <AnimatedWrapper direction="bottom" delay={2.5}>
        <QuestionsCheckbox
          setValue={setOptionsAnswer}
          options={options}
          name="Q4"
        />

        {optionsAnswer === 0 && (
          <AnimatedWrapper direction="bottom">
            <DialogAnswerFeedback gifSrc={notSoFast}>
              Não é bem por aí! Descubra como o cliente usa o cartão para
              personalizar a negociação e fazer a oferta ideal.
            </DialogAnswerFeedback>
          </AnimatedWrapper>
        )}

        {optionsAnswer === 1 && (
          <AnimatedWrapper direction="bottom">
            <DialogAnswerFeedback correctAnswer gifSrc={leoCongrats}>
              Arrasou! Ao descobrir como o cliente usa o cartão, você pode
              personalizar a negociação e fazer a oferta ideal.
            </DialogAnswerFeedback>
          </AnimatedWrapper>
        )}

        {answered && (
          <AnimatedWrapper direction="bottom">
            <InfoBoxesCollapsed
              boxes={collapsedBoxes}
              setAllBoxesSeen={setAllBoxesSeen}
            />
          </AnimatedWrapper>
        )}
      </AnimatedWrapper>

      <AnimatedWrapper direction="bottom" delay={2.7}>
        <Button
          onClick={handleNext}
          disabled={
            optionsAnswer === null || optionsAnswer === 0 || !allBoxesSeen
          }
        >
          Confirmar
        </Button>
      </AnimatedWrapper>
    </QuizBlock>
  );
};

export default Q4;

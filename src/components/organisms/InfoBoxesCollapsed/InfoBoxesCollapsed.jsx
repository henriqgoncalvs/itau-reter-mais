import { useEffect, useState } from 'react';

import InfoBox from 'components/common/InfoBox';
import Text from 'components/common/Text';

import DialogWithIcon from '../DialogWithIcon';

import * as S from './InfoBoxesCollapsed.styles';

function InfoBoxesCollapsed({ boxes, setAllBoxesSeen }) {
  const [openCollapsed, setOpenCollapsed] = useState(null);
  const [boxesOpened, setBoxesOpened] = useState([false, false, false]);

  useEffect(() => {
    if (!boxesOpened.includes(false)) setAllBoxesSeen(true);
  }, [boxesOpened, setAllBoxesSeen]);

  return (
    <S.Wrapper>
      <S.BoxWrapper>
        {boxes.map((box, index) => (
          <InfoBox
            key={box.id}
            clicked={boxesOpened[index]}
            onClick={() => {
              setBoxesOpened((prev) => [
                ...prev.slice(0, index),
                true,
                ...prev.slice(index + 1),
              ]);
              setOpenCollapsed(index);
            }}
          >
            {box.text}
          </InfoBox>
        ))}
      </S.BoxWrapper>

      {openCollapsed === 0 && (
        <DialogWithIcon withBackground withIcon={false}>
          {boxes?.[0].collapsedComponent?.title && (
            <Text weight="bold">{boxes?.[0].collapsedComponent?.title}</Text>
          )}

          <Text>{boxes?.[0].collapsedComponent?.description}</Text>
        </DialogWithIcon>
      )}

      {openCollapsed === 1 && (
        <DialogWithIcon withBackground withIcon={false}>
          {boxes?.[1].collapsedComponent?.title && (
            <Text weight="bold">{boxes?.[1].collapsedComponent?.title}</Text>
          )}

          <Text>{boxes?.[1].collapsedComponent?.description}</Text>
        </DialogWithIcon>
      )}
      {openCollapsed === 2 && (
        <DialogWithIcon withBackground withIcon={false}>
          {boxes?.[2].collapsedComponent?.title && (
            <Text weight="bold">{boxes?.[2].collapsedComponent?.title}</Text>
          )}

          <Text>{boxes?.[2].collapsedComponent?.description}</Text>
        </DialogWithIcon>
      )}
    </S.Wrapper>
  );
}

export default InfoBoxesCollapsed;

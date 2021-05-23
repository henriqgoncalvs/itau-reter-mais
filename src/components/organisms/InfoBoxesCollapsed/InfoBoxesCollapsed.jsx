import { useState } from 'react';

import InfoBox from 'components/common/InfoBox';
import Text from 'components/common/Text';

import DialogWithIcon from '../DialogWithIcon';

import * as S from './InfoBoxesCollapsed.styles';

function InfoBoxesCollapsed({ boxes }) {
  const [openCollapsed, setOpenCollapsed] = useState(null);

  return (
    <S.Wrapper>
      <S.BoxWrapper>
        {boxes.map((box, index) => (
          <InfoBox key={box.id} onClick={() => setOpenCollapsed(index)}>
            {box.text}
          </InfoBox>
        ))}
      </S.BoxWrapper>

      {openCollapsed === 0 && (
        <DialogWithIcon withBackground>
          <Text weight="bold">{boxes?.[0].collapsedComponent?.title}</Text>

          <Text>{boxes?.[0].collapsedComponent?.description}</Text>
        </DialogWithIcon>
      )}

      {openCollapsed === 1 && (
        <DialogWithIcon withBackground>
          <Text weight="bold">{boxes?.[1].collapsedComponent?.title}</Text>

          <Text>{boxes?.[1].collapsedComponent?.description}</Text>
        </DialogWithIcon>
      )}
      {openCollapsed === 2 && (
        <DialogWithIcon withBackground>
          <Text weight="bold">{boxes?.[2].collapsedComponent?.title}</Text>

          <Text>{boxes?.[2].collapsedComponent?.description}</Text>
        </DialogWithIcon>
      )}
    </S.Wrapper>
  );
}

export default InfoBoxesCollapsed;

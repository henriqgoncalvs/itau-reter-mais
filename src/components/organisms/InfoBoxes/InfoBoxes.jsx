import InfoBox from 'components/common/InfoBox';

import * as S from './InfoBoxes.styles';

function InfoBoxes({ boxes }) {
  return (
    <S.Wrapper>
      <S.BoxWrapper>
        {boxes.map((box) => (
          <InfoBox key={box.id} icon={box.icon}>
            {box.text}
          </InfoBox>
        ))}
      </S.BoxWrapper>
    </S.Wrapper>
  );
}

export default InfoBoxes;

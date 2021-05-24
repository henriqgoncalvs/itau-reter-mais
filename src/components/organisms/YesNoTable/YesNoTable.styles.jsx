import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: stretch;
  justify-content: space-around;

  ${media.lessThan('small')`
    flex-direction: column;
  `}

  margin: 2rem 0;

  ul {
    flex: 0.4;
  }
`;

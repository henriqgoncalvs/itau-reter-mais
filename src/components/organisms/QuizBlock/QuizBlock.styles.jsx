import { motion } from 'framer-motion';
import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  max-width: 100rem;

  background-color: ${({ theme }) => theme.colors.white};

  border-radius: 0.8rem;

  padding: 5rem;

  overflow: hidden;

  ${({ theme }) => theme.utils.display.flex.center}
  flex-direction: column;

  ${media.lessThan('medium')`
    /* width: calc(100vw - 2rem); */
    padding: 3rem 2rem;
  `}
`;

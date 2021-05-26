import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

import variants from 'mock/animations.motion';

function AnimatedWrapper({ delay = 0, direction = 'left', children, ...rest }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('end');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="init"
      transition={{ duration: 0.7, delay: delay + 0.3 }}
      variants={variants[direction]}
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedWrapper;

import { createContext, useContext, useEffect } from 'react';
import usePipwerks from 'lib/hooks/use-pipwerks';

const PipwerksContext = createContext({
  pipwerks: null,
});

const PipwerksProvider = ({ children }) => {
  const { pipwerks } = usePipwerks('libraries/SCORM_API_wrapper.js');

  useEffect(() => {
    if (pipwerks) pipwerks.SCORM.version = '1.2';
    if (pipwerks) pipwerks.SCORM.init();
  }, [pipwerks]);

  return (
    <PipwerksContext.Provider value={{ pipwerks }}>
      {children}
    </PipwerksContext.Provider>
  );
};

export default PipwerksProvider;
export const usePipwerksContext = () => useContext(PipwerksContext);

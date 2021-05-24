import { createContext, useContext, useEffect, useState } from 'react';

import usePipwerks from 'hooks/use-pipwerks';

const dataModelParser = {
  score: 'cmi.core.score.raw',
  status: 'cmi.core.lesson_status',
  location: 'cmi.core.lesson_location',
  name: 'cmi.core.student_name',
};

const PipwerksContext = createContext({
  pipwerks: null,
});

const PipwerksProvider = ({ children }) => {
  const { pipwerks } = usePipwerks('libraries/SCORM_API_wrapper.js');
  const [user, setUser] = useState('');

  useEffect(() => {
    if (pipwerks) {
      pipwerks.SCORM.version = '1.2';
      pipwerks.SCORM.init();
    }
  }, [pipwerks]);

  const set = (dataModel, value) => {
    pipwerks.SCORM.set(dataModelParser[dataModel], value);
  };

  const get = (dataModel) => {
    pipwerks.SCORM.get(dataModelParser[dataModel]);
  };

  return (
    <PipwerksContext.Provider value={{ pipwerks, set, get, user, setUser }}>
      {children}
    </PipwerksContext.Provider>
  );
};

export default PipwerksProvider;
export const usePipwerksContext = () => useContext(PipwerksContext);

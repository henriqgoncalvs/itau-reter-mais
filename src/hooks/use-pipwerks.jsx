import { useEffect, useState } from 'react';

const useScript = (resourceUrl) => {
  const [pipwerks, setPipwerks] = useState(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = resourceUrl;
    script.async = false;
    script.onload = () => {
      // eslint-disable-next-line no-console
      console.log('SCORM API Wrapper loaded successfully');
      setPipwerks(window.pipwerks);
    };
    document.body.appendChild(script);
  }, [resourceUrl]);

  return { pipwerks };
};
export default useScript;

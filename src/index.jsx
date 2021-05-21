import React from 'react';
import ReactDOM from 'react-dom';

import GlobalProvider from 'contexts/GlobalProvider/GlobalProvider';
import PipwerksProvider from 'contexts/PipwerksProvider';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <PipwerksProvider>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </PipwerksProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

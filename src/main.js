import React from 'react';
import ReactDOM from 'react-dom';

import { LoggerProvider } from 'reprolog';
import { newOldDiffLogger } from 'reprolog/loggers';
import { consoleTableOutput } from 'reprolog/outputs';

import App from './App';

const config = { whiteList: ['ItemRenderer'] };

const Root = () => (
  <LoggerProvider
    propsLogger={newOldDiffLogger(consoleTableOutput())}
    propsLoggerConfig={config}
  >
    <App />
  </LoggerProvider>
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    React.createElement(Root),
    document.getElementById('mount'),
  );
});

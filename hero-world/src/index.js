import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/app/App';
import Segundo from './component/segundo/Segundo';
import Tercero from './component/tercero/Tercero';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
  <Segundo />,
  document.getElementById('segundo')
);

ReactDOM.render(
  <Tercero />,
  document.getElementById('tercero')
);
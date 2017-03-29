import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Segundo from './Segundo';
import Tercero from './Tercero';
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
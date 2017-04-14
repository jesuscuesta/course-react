import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/app/App';
import Segundo from './component/segundo/Segundo';
import Tercero from './component/tercero/Tercero';
import Cuarto from './component/cuarto/Cuarto';
import Quinto from './component/quinto/Quinto';
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

ReactDOM.render(
  <Cuarto />,
  document.getElementById('cuarto')
);

ReactDOM.render(
  <Quinto />,
  document.getElementById('quinto')
);
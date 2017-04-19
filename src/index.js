import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const start = new Date().getTime();

function update() {
  ReactDOM.render(
    <App elapsed={new Date().getTime() - start} />,
    document.getElementById('root')
  );

  requestAnimationFrame(update);
}

requestAnimationFrame(update);

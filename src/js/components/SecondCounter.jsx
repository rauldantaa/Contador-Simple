import React from 'react';
import ReactDOM from 'react-dom/client';
import SecondsCounter from './SecondsCounter';
import Buttons from './Buttons';

const root = ReactDOM.createRoot(document.getElementById('root'));
let counter = 0;
let intervalId;
let targetAlert = null;

function renderApp() {
  root.render(
    <React.StrictMode>
      <SecondsCounter seconds={counter} />
      <Buttons
        onStop={() => clearInterval(intervalId)}
        onReset={() => {
          counter = 0;
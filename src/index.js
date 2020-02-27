import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/app/app.jsx';
import offers from './offers.js';

const placesCount = 312;

ReactDOM.render(
    <App
      placesCount={placesCount}
      offers={offers}
    />, document.getElementById(`root`));

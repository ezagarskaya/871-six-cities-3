import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/app/app.jsx';

const placesCount = 312;

ReactDOM.render(
    <App
      placesCount={placesCount}
    />, document.getElementById(`root`));

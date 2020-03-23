import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';

const App = (props) => {
  const {placesCount, offers} = props;
  const clickHandler = () => {};

  return (
    <Main placesCount={placesCount}
      offers={offers}
      handleClick={clickHandler} />
  );
};

App.propTypes = {
  offers: PropTypes.object,
  placesCount: PropTypes.number,
};


export default App;

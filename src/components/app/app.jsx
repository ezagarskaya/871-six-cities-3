import React from 'react';
import Main from '../main/main.jsx';

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {placesCount, offers} = props;
  return (
    <Main placesCount={placesCount}
      offers={offers}/>
  );
};

export default App;

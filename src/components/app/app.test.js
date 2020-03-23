import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

it(`renders correctly`, () => {
  const tree = renderer
    .create(<App placesCount={1} offers={ {name: ``, img: ``}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

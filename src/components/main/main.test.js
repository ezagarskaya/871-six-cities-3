import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

it(`renders correctly`, () => {
  const tree = renderer
    .create(<Main placesCount={1} offers={ {name: ``, img: ``}} handleClick={() => {}}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

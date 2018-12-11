import { AppBar } from './app-bar';
import React from 'react';
import { create } from 'react-test-renderer';

describe('<AppBar />', () => {
  it('should render correctly', () => {
    const component = create(<AppBar />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

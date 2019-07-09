import React from 'react';
import { Splash } from './splash.component';
import { create } from 'react-test-renderer';

describe('<Splash />', () => {
  it('should render correctly', () => {
    const component = create(<Splash />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

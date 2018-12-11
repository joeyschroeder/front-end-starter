import React from 'react';
import { SplashScreen } from './splash.screen';
import { create } from 'react-test-renderer';

describe('<SplashScreen />', () => {
  it('should render correctly', () => {
    const component = create(<SplashScreen />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

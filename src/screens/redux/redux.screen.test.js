import React from 'react';
import { ReduxScreen } from './redux.screen';
import { create } from 'react-test-renderer';

describe('<ReduxScreen />', () => {
  it('should render correctly', () => {
    const component = create(<ReduxScreen />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

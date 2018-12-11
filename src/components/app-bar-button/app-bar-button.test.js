import { AppBarButton } from './app-bar-button';
import React from 'react';
import { create } from 'react-test-renderer';

describe('<AppBarButton />', () => {
  it('should render correctly', () => {
    const component = create(<AppBarButton />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

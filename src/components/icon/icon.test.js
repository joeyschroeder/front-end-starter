import { Icon } from './icon';
import React from 'react';
import { create } from 'react-test-renderer';

describe('<Icon />', () => {
  it('should render correctly', () => {
    const component = create(<Icon />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

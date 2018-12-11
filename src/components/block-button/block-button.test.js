import { BlockButton } from './block-button';
import React from 'react';
import { create } from 'react-test-renderer';

describe('<BlockButton />', () => {
  it('should render correctly', () => {
    const component = create(<BlockButton />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

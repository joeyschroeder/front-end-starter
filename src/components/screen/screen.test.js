import React from 'react';
import { Screen } from './screen';
import { create } from 'react-test-renderer';

describe('<Screen />', () => {
  it('should render correctly', () => {
    const component = create(<Screen />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

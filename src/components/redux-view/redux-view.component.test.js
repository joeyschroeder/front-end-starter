import React from 'react';
import { ReduxView } from './redux-view.component';
import { create } from 'react-test-renderer';

describe('<ReduxView />', () => {
  it('should render correctly', () => {
    const component = create(<ReduxView />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

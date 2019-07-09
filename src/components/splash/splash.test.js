/* global React, create */
import { Splash } from './splash';

describe('<Splash />', () => {
  it('should render correctly', () => {
    const component = create(<Splash />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

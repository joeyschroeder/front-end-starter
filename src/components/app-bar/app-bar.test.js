/* global React, create */
import { AppBar } from './app-bar';

describe('<AppBar />', () => {
  it('should render correctly', () => {
    const component = create(<AppBar />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

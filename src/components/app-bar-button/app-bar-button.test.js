/* global React, create */
import { AppBarButton } from './app-bar-button';

describe('<AppBarButton />', () => {
  it('should render correctly', () => {
    const component = create(<AppBarButton />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

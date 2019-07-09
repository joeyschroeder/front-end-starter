/* global React, create */
import { Icon } from './icon';

describe('<Icon />', () => {
  it('should render correctly', () => {
    const component = create(<Icon />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

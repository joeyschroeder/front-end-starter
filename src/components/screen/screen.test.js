/* global React, create */
import { Screen } from './screen';

describe('<Screen />', () => {
  it('should render correctly', () => {
    const component = create(<Screen />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

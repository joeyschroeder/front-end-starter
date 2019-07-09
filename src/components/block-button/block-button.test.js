/* global React, create */
import { BlockButton } from './block-button';

describe('<BlockButton />', () => {
  it('should render correctly', () => {
    const component = create(<BlockButton />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

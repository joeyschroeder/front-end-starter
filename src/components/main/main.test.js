import ShallowRenderer from 'react-test-renderer/shallow';
import { Main } from './main';
/* global React */

describe('<Main />', () => {
  it('should render correctly', () => {
    const renderer = new ShallowRenderer();
    const component = renderer.render(<Main />);
    expect(component).toMatchSnapshot();
  });
});

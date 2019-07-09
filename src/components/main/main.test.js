import { Main } from './main';
/* global React */
import ShallowRenderer from 'react-test-renderer/shallow';

describe('<Main />', () => {
  it('should render correctly', () => {
    const renderer = new ShallowRenderer();
    const component = renderer.render(<Main />);
    expect(component).toMatchSnapshot();
  });
});

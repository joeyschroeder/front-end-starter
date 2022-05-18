import ShallowRenderer from 'react-test-renderer/shallow';
import { Root } from './root';
/* global React */

describe('<Root />', () => {
  const renderer = new ShallowRenderer();

  it('should render correctly', () => {
    renderer.render(<Root />);
    const result = renderer.getRenderOutput();

    expect(result).toMatchSnapshot();
  });
});

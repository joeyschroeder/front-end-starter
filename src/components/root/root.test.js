import ShallowRenderer from 'react-test-renderer/shallow';
import { configureStore } from 'util/configure-store/configure-store';
import { Root } from './root';
/* global React */

describe('<Root />', () => {
  const renderer = new ShallowRenderer();
  const store = configureStore();

  it('should render correctly', () => {
    renderer.render(<Root store={store} />);
    const result = renderer.getRenderOutput();

    expect(result).toMatchSnapshot();
  });
});

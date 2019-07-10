import { Root } from './root';
import ShallowRenderer from 'react-test-renderer/shallow';
import { configureStore } from 'util/configure-store/configure-store';
import { createMemoryHistory } from 'history';
/* global React */

describe('<Root />', () => {
  const renderer = new ShallowRenderer();

  // keyLength is set to zero so a new key is not
  // generated during every snapshot comparison
  const history = createMemoryHistory({ keyLength: 0 });
  const store = configureStore(history);

  it('should render correctly', () => {
    renderer.render(<Root history={history} store={store} />);
    const result = renderer.getRenderOutput();

    expect(result).toMatchSnapshot();
  });
});

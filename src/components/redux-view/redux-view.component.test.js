/* global React, create */
import { ReduxView } from './redux-view.component';

describe('<ReduxView />', () => {
  it('should render correctly', () => {
    const component = create(<ReduxView />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

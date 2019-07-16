import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { mount, shallow } from '../../../config/enzymeConfig';
import Home from '../../components/Home';
import articles from '../../__mocks__/articles';
import store from '../../__mocks__/store';

describe('<Home />', () => {
  test('renders without crashing', () => {
    const component = mount(<Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>);
    expect(component).toHaveLength(1);
  });
  const props = {
    articles,
    getAllArticles: jest.fn()
  };
  const component = shallow(<listOfArticles {...props} />);
  it('should render a <listOfArticles /> component ', () => {
    expect(component).toMatchSnapshot();
  });
});

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { mount, shallow } from '../../../config/enzymeConfig';
import Home, { Home as HomeComponent } from '../../components/Home/Home';
import article from '../../__mocks__/article';
import articles from '../../__mocks__/articles';
import store from '../../__mocks__/store';

const props = {
  articles,
  bookmarks: [{ articleSlug: 'articleSlug', article }],
  getAllArticles: jest.fn(),
  getAllBookmarks: jest.fn()
};

describe('<Home />', () => {
  test('renders without crashing', () => {
    const component = mount(<Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>);
    expect(component).toHaveLength(1);
  });

  it('should render a <listOfArticles /> component ', () => {
    const component = shallow(<HomeComponent {...props} />);
    expect(component).toHaveLength(1);
  });

  it('should render a <listOfArticles /> component ', () => {
    const component = shallow(<HomeComponent {...{ ...props, article: { ...props.article, coverUrl: null } }} />);
    expect(component).toHaveLength(1);
  });

  it('should render a <listOfArticles /> component ', () => {
    const component = shallow(<HomeComponent {...{ ...props, bookmarks: '' }} />);
    expect(component).toHaveLength(1);
  });

  it('should render a <listOfArticles /> component ', () => {
    const component = shallow(<listOfArticles {...props} />);
    expect(component).toMatchSnapshot();
  });
});

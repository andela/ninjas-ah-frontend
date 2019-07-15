import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'react-thunk';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import articles from '../../../__mocks__/articles';
import { mockStore, initialState } from '../../../__mocks__/store';
import ListOfArticles from '../../../components/Articles/ListOfArticles/ListOfArticles';
import { shallow, mount } from '../../../../config/enzymeConfig';

const props = {
  articles,
  getAllArticles: jest.fn()
};
const store = mockStore({
  ...initialState,
  articles: { articles }
});
describe('<ListOfArticles />', () => {
  it('should render a <ListOfArticles /> component ', () => {
    const component = mount(<Provider store={store}>
        <MemoryRouter>
          <ListOfArticles />
        </MemoryRouter>
      </Provider>);
  });
});

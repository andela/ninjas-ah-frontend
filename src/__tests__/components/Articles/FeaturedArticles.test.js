import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { mount } from '../../../../config/enzymeConfig';
import FeaturedArticles from '../../../components/Articles/FeaturedArticles/FeaturedArticles';
import store from '../../../__mocks__/store';

describe('<FeaturedArticles />', () => {
  test('Get features articles', () => {
    const component = mount(<Provider store={store}>
        <MemoryRouter>
          <FeaturedArticles />
        </MemoryRouter>
      </Provider>);
    expect(component).toHaveLength(1);
  });
});

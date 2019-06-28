import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { mount } from '../../../../config/enzymeConfig';
import Tags from '../../../components/Articles/Tags/Tags';
import store from '../../../__mocks__/store';

describe('<Tags />', () => {
  test('renders without crashing', () => {
    const component = mount(<Provider store={store}>
        <MemoryRouter>
          <Tags />
        </MemoryRouter>
      </Provider>);
    expect(component).toHaveLength(1);
  });
});

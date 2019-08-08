import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { mount } from '../../../config/enzymeConfig';
import Layout from '../../components/Layout';
import mockWindow from '../../__mocks__/window';
import store from '../../__mocks__/store';

describe('<Layout />', () => {
  test('renders without crashing', () => {
    const component = mount(<Provider store={store}>
        <MemoryRouter>
          <Layout>
            <div>Hello</div>
          </Layout>
        </MemoryRouter>
      </Provider>);
    mockWindow.event({ name: 'resize', target: {} });
    expect(component).toHaveLength(1);
  });
});

import React from 'react';
import { shallow } from '../../../config/enzymeConfig';
import Layout from '../../components/Layout/Layout';
import store from '../../__mocks__/store';

describe('<Layout />', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<Layout store={store} />);
    expect(wrapper.find('Header').length).toBe(1);
  });
});

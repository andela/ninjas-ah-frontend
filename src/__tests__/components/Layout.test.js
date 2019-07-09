import React from 'react';
import { shallow } from '../../../config/enzymeConfig';
<<<<<<< HEAD
import Layout from '../../components/Layout';
import { mockWindow } from '../../__mocks__/window';

describe('<Layout />', () => {
  test('renders without crashing', () => {
    const component = shallow(<Layout>
        <div>Hello</div>
      </Layout>);
    mockWindow.event({ name: 'resize', target: {} });
    expect(component).toHaveLength(1);
    expect(component.contains(<div>Hello</div>)).toBeTruthy();
=======
import Layout from '../../components/Layout/Layout';
import store from '../../__mocks__/store';

describe('<Layout />', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<Layout store={store} />);
    expect(wrapper.find('Header').length).toBe(1);
>>>>>>> [feature #165412886]Get notifications
  });
});

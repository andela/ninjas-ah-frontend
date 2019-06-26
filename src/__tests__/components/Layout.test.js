import React from 'react';
import { shallow } from '../../../config/enzymeConfig';
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
  });
});

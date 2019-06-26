import React from 'react';
import { shallow } from '../../../config/enzymeConfig';
import Layout from '../../components/Layout';

describe('<Layout />', () => {
  test('renders without crashing', () => {
    const component = shallow(
      <Layout>
        <div>Hello</div>
      </Layout>
    );
    expect(component).toHaveLength(1);
    expect(component.contains(<div>Hello</div>)).toBeTruthy();
  });
});

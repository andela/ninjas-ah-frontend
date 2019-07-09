import React from 'react';
import { mount } from '../../../config/enzymeConfig';
import Header from '../../components/Header';

describe('<Header />', () => {
  test('renders without crashing', () => {
    const component = mount(<Header />);
    const form = component.find('form');
    const input = component.find('input[name="searchArticle"]');

    form.simulate('submit', { target: {} });
    input.simulate('change', { target: { name: 'searchArticle', value: 'Hello' } });

    expect(component).toHaveLength(1);
    expect(input.instance().value).toEqual('Hello');
  });
});

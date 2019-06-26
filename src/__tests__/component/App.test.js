import React from 'react';
import { shallow } from '../../../config/enzymeConfig';
import App from '../../components/App';

describe('<App />', () => {
  test('renders without crashing', () => {
    const component = shallow(<App />);
    expect(component).toHaveLength(1);
  });
});

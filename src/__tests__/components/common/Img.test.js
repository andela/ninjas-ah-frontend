import React from 'react';
import { mount } from '../../../../config/enzymeConfig';
import { Img } from '../../../components/common';

describe('<Img />', () => {
  test('renders without crashing', () => {
    expect(mount(<Img />)).toHaveLength(1);
    expect(mount(<Img imgSrc="" />)).toHaveLength(1);
  });
});

import React from 'react';
import { MemoryRouter, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configure, mount, shallow } from '../../../../config/enzymeConfig';
import store from '../../../__mocks__/store';
import { Follow } from '../../../components/FollowUnfollow/Follow';

describe('<FollowUnfollow /> component', () => {
  it('test handle click', () => {
    const component = shallow(<Follow />);
  });
});

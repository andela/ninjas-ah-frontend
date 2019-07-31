import React from 'react';
import { MemoryRouter, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configure, mount, shallow } from '../../../../config/enzymeConfig';
import store from '../../../__mocks__/store';
import { Follow } from '../../../components/FollowUnfollow/Follow';
import Following, { Following as Follows } from '../../../components/FollowUnfollow/Following';

const props = {
  followers: {
    followers: [
      {
        followed: 4,
        follower: {
          id: 1,
          firstName: 'prince',
          lastName: 'sengayire',
          username: 'sengayire',
          email: 'prince123.sengayire@andela.com'
        },
        userId: 4
      }
    ]
  },
  getFollowers: jest.fn(),
  getFollowing: jest.fn(),
  unfollow: jest.fn(),
  follow: jest.fn(),
  followUser: jest.fn(),
  unfollow: jest.fn(),
  following: [
    {
      followedUser: {
        id: 1,
        firstName: 'prince',
        lastName: 'sengayire',
        username: 'sengayire',
        email: 'prince123.sengayire@andela.com'
      }
    }
  ],
  article: { author: { username: 'dp' } }
};
const state = { followersNumber: 3, target: { name: 'getFollowers' }, modalStyle: 'block' };

describe('<FollowUnfollow /> component', () => {
  it('test handle click', () => {
    const component = mount(<Follows {...props} />);
    const follow = component.find('button#unfollow').simulate('click');
  });
  it('test handle click', () => {
    const myprops = {
      followers: {
        followers: [
          {
            followed: 4,
            follower: {
              id: 1,
              firstName: 'prince',
              lastName: 'sengayire',
              username: 'sengayire',
              email: 'prince123.sengayire@andela.com'
            },
            userId: 4
          }
        ]
      },
      getFollowers: jest.fn(),
      getFollowing: jest.fn(),
      follow: jest.fn(),
      article: { author: { username: 'dp' } }
    };
    const component = mount(<Follows {...myprops} />);
    const follow = component.find('button#follow').simulate('click');
  });

  it('render withpout fail', () => {
    const component = mount(<Provider store={store}>
        <MemoryRouter>
          <Following state={state} {...props} />
        </MemoryRouter>
      </Provider>);
  });
});

import React from 'react';
import { MemoryRouter, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configure, mount, shallow } from '../../../../config/enzymeConfig';
import store from '../../../__mocks__/store';
import FollowUnfollow, { FollowUnfollow as Follow } from '../../../components/FollowUnfollow/FollowUnfollow';
import { unfollow } from '../../../actions';

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
  ]
};
const state = { followersNumber: 3, target: { name: 'getFollowers' }, modalStyle: 'block' };
let component;
const button = 'follow';
const username = 'daprince';
let wrapper;
describe('<FollowUnfollow /> component', () => {
  it('test handle click', () => {
    const component = shallow(<Follow state={state} {...props} />);
    component.instance().handleClick = jest.fn();
    component.setState({ clicked: { target: { name: 'getFollowers' } } });
    const wrapper = component.find('.getFollowers').simulate('click');
  });
  it('Bookmark Article', () => {
    const component = shallow(<Follow state={state} {...props} />);
    const nextProps = {
      followers: { followers: 10 },
      following: {
        id: 1,
        firstName: 'prince',
        lastName: 'sengayire',
        username: 'sengayire',
        email: 'prince123.sengayire@andela.com'
      }
    };
    component.setState(prevState => ({
      ...prevState,
      followersNumber: { followers: { followers: 10 } },
      followingNumber: {
        following: {
          id: 1,
          firstName: 'prince',
          lastName: 'sengayire',
          username: 'sengayire',
          email: 'prince123.sengayire@andela.com'
        }
      }
    }));
    component.instance().componentWillReceiveProps(nextProps);
  });
  it('test handle click', () => {
    const component = shallow(<Follow state={state} {...props} />);
    component.instance().handleClick = jest.fn();
    component.setState({ followersNumber: 2, followingNumber: 2, clicked: 'getFollowers' });
    component.update();
    component.find('.getFollowers').simulate('click', { target: { name: 'getFollowers' } });
    const follow = component.find('#follow').simulate('click');
  });

  it('test handle click', () => {
    const get = shallow(<Follow state={state} {...props} />);
    get.find('.getfollowing').simulate('click');
    get.find('.getfollowing button');
    get.find('#followingFollow').simulate('click');
  });

  it('test handle click', () => {
    const userId = 4;
    const following = [
      {
        followed: 4,
        followedUser: {
          id: 1,
          firstName: 'prince',
          lastName: 'sengayire',
          username: 'sengayire',
          email: 'prince123.sengayire@andela.com'
        }
      }
    ];
    const component = shallow(<Follow state={state} {...props} />);

    component.setState({ followersNumber: 2, followingNumber: 2, clicked: 'getFollowers' });
    component.update();
    component.find('.getFollowers').simulate('click', { target: { name: 'getFollowers' } });
    component.instance().isFollowed(following, userId);
    component.instance().handleClick = jest.fn();
    component.setProps({
      following: [
        {
          followed: 4,
          followedUser: {
            id: 1,
            firstName: 'prince',
            lastName: 'sengayire',
            username: 'sengayire',
            email: 'prince123.sengayire@andela.com'
          }
        }
      ]
    });
    const follow = component.find('#Unfollow').simulate('click');
  });
  it('test handle click', () => {
    const get = mount(<Provider store={store}>
        <MemoryRouter>
          <FollowUnfollow state={state} {...props} />
        </MemoryRouter>
      </Provider>);
  });
});

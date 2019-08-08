import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { Iterable } from 'immutable';
import store from '../../../__mocks__/store';
import LikeComment, { LikeComment as LikeCommentComponent } from '../../../components/Articles/Comments/LikeComment';
import { shallow, mount } from '../../../../config/enzymeConfig';

let component;
const props = {
  isAuth: true,
  profile: {},
  comments: {},
  comment: {
    articleSlug: 'slug',
    id: 1
  },
  numberOfLikes: 2,
  whoLiked: 2,
  likeComment: jest.fn(),
  getLikesComment: jest.fn()
};
const state = { likeClicked: false, hasLiked: false, likes: 0 };

describe('COMMENT THREAD', () => {
  beforeEach(() => {
    component = shallow(<LikeCommentComponent {...props} />);
    component.setState(state);
  });
  it('component will receive props', () => {
    const commentLikes = [{ commentId: 1, number: 2, whoLiked: [1, 2, 3] }];
    const profile = { id: 1 };
    const nextProps = { ...props, commentLikes };
    component = shallow(<LikeCommentComponent {...props} />);

    component.setProps(nextProps);
  });
  test('render the props', () => {
    const component = mount(<Provider store={store}>
        <MemoryRouter>
          <LikeComment {...props} />
        </MemoryRouter>
      </Provider>);

    expect(component).toHaveLength(1);
  });

  test('should call the handleCommentLike function', () => {
    const component = mount(<Provider store={store}>
        <MemoryRouter>
          <LikeComment {...props} />
        </MemoryRouter>
      </Provider>);

    component.find('button').simulate('click');
  });
});

import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../../../__mocks__/store';
import CommentThread, {
  CommentThread as ComponentThreadComponent
} from '../../../components/Articles/Comments/CommentThread';
import { shallow, mount } from '../../../../config/enzymeConfig';
import user from '../../../__mocks__/user';

let component = '';
let submitButton = '';
let form = '';
let toggleComment = '';
let deleteComment = '';
const closeComment = '';

const state = {
  comments: [
    {
      id: 2,
      articleSlug: 'slug',
      userId: 1,
      body: 'we are here',
      commentAuthor: user
    },
    {
      id: 4,
      articleSlug: 'slug',
      userId: 5,
      body: 'we are here',
      commentAuthor: user
    }
  ],
  commentHistory: [
    {
      id: 1,
      body: 'comment edited'
    }
  ],
  errors: {},
  commentEditor: { 0: { display: 'block' } },
  newComments: { 'comment-0': { value: 'we are here' } },
  commentEditorHistory: ''
};

const props = {
  profile: {
    id: 1,
    ...user
  },
  isAuth: true,
  loading: false,
  slug: '',
  deleteComment: jest.fn(comment => comment),
  fetchComments: jest.fn(),
  toggleCommentEditor: jest.fn(key => key),
  closeCommentEditor: jest.fn(),
  getCommentHistory: jest.fn(),
  editCommentHistory: [
    {
      id: 1,
      body: 'comment edited'
    }
  ],
  toggleCommentHistory: jest.fn(),
  editComment: jest.fn(),
  onSubmit: jest.fn(),
  comments: ['this is the first comment', 'this is the another comment'],
  deleted: true
};

describe('COMMENT THREAD', () => {
  test('kkk', () => {
    component = shallow(<ComponentThreadComponent state={state} {...props} />);
    component.setState(state);

    submitButton = component.find('#submit-comment').exists();
    form = component.find('#submit-comment');
    form.map(f => f.simulate('submit', { preventDefault: jest.fn() }));
    component.instance().onDeleteComment(1, 1);
    component.instance().toggleCommentHistory();
    component.instance().componentWillReceiveProps(props);
    component.instance().onChangeEditComment({ target: { value: 'hello world' } });
    component.instance().toggleCommentEditor(2);
    component.instance().closeCommentEditor({ preventDefault: jest.fn() });
    component.instance().onSubmit({ preventDefault: jest.fn() });
  });

  test('Should not comment when the user is not authenticated', () => {
    component = shallow(
      <ComponentThreadComponent state={state} {...{ ...props, isAuth: false }} />
    );
    component.setState(state);

    submitButton = component.find('#submit-comment').exists();
    form = component.find('#submit-comment');
    form.map(f => f.simulate('submit', { preventDefault: jest.fn() }));
  });

  test('Should comment when the user is logged in', () => {
    component = shallow(
      <ComponentThreadComponent state={{ ...state, newComments: {} }} {...props} />
    );
    component.setState({ ...state, newComments: {} });

    submitButton = component.find('#submit-comment').exists();
    form = component.find('#submit-comment');
    form.map(f => f.simulate('submit', { preventDefault: jest.fn() }));
  });

  test('Should toggle edit form', () => {
    component = shallow(<ComponentThreadComponent state={{ ...state }} {...props} />);
    component.setState({ ...state });

    toggleComment = component.find('#toggle-comment');
    toggleComment.simulate('click');
  });

  test('Should toggle history', () => {
    component = shallow(<ComponentThreadComponent state={{ ...state }} {...props} />);
    component.setState({ ...state });

    toggleComment = component.find('#toggle-history');
    toggleComment.simulate('click');
  });

  test('Should toggle comment history', () => {
    component = shallow(<ComponentThreadComponent state={{ ...state }} {...props} />);
    component.setState({ ...state });

    toggleComment = component.find('#toggle-history');
    toggleComment.simulate('click');
  });

  test('Should delete comment', () => {
    component = shallow(<ComponentThreadComponent state={{ ...state }} {...props} />);
    component.setState({ ...state });

    deleteComment = component.find('#delete-comment');
    deleteComment.simulate('click');
  });

  test('Should close toggle comment editor', () => {
    component = shallow(<ComponentThreadComponent state={{ ...state }} {...props} />);
    component.setState({ ...state });

    submitButton = component.find('#close-comment-editor').exists();
    form = component.find('#close-comment-editor');
    form.map(f => f.simulate('click', { preventDefault: jest.fn() }));
  });

  test('render the props', () => {
    const component = mount(
      <Provider store={store}>
        <MemoryRouter>
          <CommentThread {...props} />
        </MemoryRouter>
      </Provider>
    );

    expect(component).toHaveLength(1);
  });
});

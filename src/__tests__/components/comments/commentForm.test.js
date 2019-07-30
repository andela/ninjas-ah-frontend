import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../../../__mocks__/store';
import CommentForm, { CommentForm as CommentFormComponent } from '../../../components/Articles/Comments/CommentForm';
import { shallow, mount } from '../../../../config/enzymeConfig';
import user from '../../../__mocks__/user';

const props = {
  errors: { error: ['12'] },
  comments: [
    {
      body: 'Hello John Doe',
      userId: 1,
      commentAuthor: {
        firstName: 'John',
        lastName: 'Doe',
        username: 'johndoe',
        image: 'image.png'
      },
      createdAt: '2019-01-01'
    }
  ],

  createComment: jest.fn(),
  isAuth: true,
  profile: {
    id: 1,
    ...user
  }
};
const state = { loading: true, comment: 'this is the comment' };

describe('<CommentComponent />', () => {
  const component = shallow(<CommentFormComponent {...props} />);
  test('should render a <CommentFormComponent /> component ', () => {
    expect(component).toMatchSnapshot();
  });
  test('should set state', () => {
    component.setState({ ...state });
    expect(component).toHaveLength(1);
  });

  test('should call onChange method when the comment is provided', () => {
    const component = shallow(<CommentFormComponent {...props} />);
    const spy = jest.spyOn(component.instance(), 'onChange');
    component.instance().forceUpdate();
    component.setProps({ ...props, errors: { errors: ['error1'] } });
    const event = { target: { value: 'body' } };
    const textArea = component.find('#commentBody');
    textArea.simulate('change', event);
    expect(textArea.length).toBe(1);
    expect(spy).toHaveBeenCalled();
  });

  test('should submit comment', () => {
    const component = shallow(<CommentFormComponent state={state} {...props} />);
    const instance = component.instance();

    const fakeEvent = { preventDefault: jest.fn() };
    instance.onSubmit(fakeEvent);
  });

  test('', () => {
    const component = shallow(<CommentFormComponent state={state} {...{ ...props, isAuth: false }} />);

    component.setState({ errors: { token: 'some' } });
    const fakeEvent = { preventDefault: () => {} };
  });

  test('render the props', () => {
    const component = mount(<Provider store={store}>
        <MemoryRouter>
          <CommentForm {...props} />
        </MemoryRouter>
      </Provider>);

    expect(component).toHaveLength(1);
  });
});

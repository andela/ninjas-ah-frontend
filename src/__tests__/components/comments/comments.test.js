import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'react-thunk';
import { Provider } from 'react-redux';
import article from '../../../__mocks__/article';
import { CommentForm as CommentFormComponent } from '../../../components/Articles/Comments/CommentForm';
import { shallow, mount } from '../../../../config/enzymeConfig';

describe('<CommentComponent />', () => {
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
    createComment: jest.fn()
  };
  const state = { title: 'comments' };
  const component = shallow(<CommentFormComponent {...props} />);
  it('should render a <CommentFormComponent /> component ', () => {
    expect(component).toMatchSnapshot();
  });
  it('should set state', () => {
    component.setState({ ...state });
    expect(component).toHaveLength(1);
  });
  it('should call onChange method when the comment is provided', () => {
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
  it('should submit comment', () => {
    const instance = component.instance();
    const fakeEvent = { preventDefault: () => {} };
    instance.onSubmit(fakeEvent);
  });
  it('should not comment if not logged in ', () => {
    component.setProps({ isAuth: false });
    component.setState({ errors: { token: 'some' } });
    const fakeEvent = { preventDefault: () => {} };
});

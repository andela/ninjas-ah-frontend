import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'react-thunk';
import { Provider } from 'react-redux';
import article from '../../../__mocks__/article';
import CreateArticle, { CreateArticle as CreateArticleComponent } from '../../../components/Profile/Articles/CreateArticle/CreateArticle';
import { shallow, mount } from '../../../../config/enzymeConfig';

describe('<CreateArticle />', () => {
  const props = {
    errors: { error: ['article not found'] },
    article: {
      title: 'Hello John Doe',
      description: 'John Doe, Mocker',
      body: 'body of the article'
    },
    onCreateArticle: jest.fn(),
    history: { push: jest.fn() },
    onEditorStateChange: jest.fn(),
    createPost: jest.fn()
  };

  const component = shallow(<CreateArticleComponent {...props} />);
  it('should render a <CreateArticleComponent /> component ', () => {
    expect(component).toMatchSnapshot();
  });
  it('should call onChange method when the title value is changed', () => {
    const spy = jest.spyOn(component.instance(), 'onChange');
    component.instance().forceUpdate();
    const event = { target: { value: 'title' } };
    const textArea = component.find('#articleTitle');
    textArea.simulate('change', event);
    expect(textArea.length).toBe(1);
    expect(spy).toHaveBeenCalled();
  });
  it('should call onChange method when the description value is changed', () => {
    const spy = jest.spyOn(component.instance(), 'onChange');
    component.instance().forceUpdate();
    const event = { target: { value: 'description' } };
    const textArea = component.find('#articleDescription');
    textArea.simulate('change', event);
    expect(textArea.length).toBe(1);
    expect(spy).toHaveBeenCalled();
  });
  it('should call onChange method when the body value is changed', () => {
    const instance = component.instance();
    instance.onEditorStateChange();
    expect(instance).toBeDefined();
  });
  it('should onFileChange', () => {
    const instance = component.instance();
    const fakeEvent = { target: { files: ['name'] } };
    instance.fileSelectedHandler(fakeEvent);
    expect(instance).toBeDefined();
  });
  it('should create articles', () => {
    const instance = component.instance();
    const fakeEvent = { preventDefault: () => {} };
    instance.onSubmit(fakeEvent);
  });
  it('should create articles', () => {
    const instance = component.instance();
    const fakeEvent = { preventDefault: () => {} };
    component.setProps({ article });
    instance.onSubmit(fakeEvent);
  });
});

import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'react-thunk';
import { Provider } from 'react-redux';
import article from '../../../__mocks__/article';
import { EditArticle as EditArticleComponent } from '../../../components/Profile/Articles/EditArticle/EditArticle';
import { shallow, mount } from '../../../../config/enzymeConfig';

const props = {
  fetchOneArticle: jest.fn(async () => {
    await true;
  }),
  errors: { errors: ['article not found'] },
  article,
  message: { message: 'article edited successfully' },
  match: { params: { slug: 'slug-slug-slug' } },
  editPost: jest.fn(),
  onEditorStateChange: jest.fn()
};
const state = {
  article: { title: 'hello', description: 'hello' },
  message: 'hello',
  title: 'hello',
  slug: 'slug-slug-slug',
  body: JSON.stringify({
    blocks: [
      {
        key: 'cnu26',
        text: 'test componentWillReceiveProps failedtest componentWillReceiveProps failed',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          { offset: 0, length: 74, style: 'color-rgb(36,41,46)' },
          { offset: 0, length: 74, style: 'bgcolor-rgb(255,255,255)' },
          { offset: 0, length: 74, style: 'fontsize-32' },
          {
            offset: 0,
            length: 74,
            style:
              'fontfamily--apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol'
          }
        ],
        entityRanges: [],
        data: { 'text-align': 'start' }
      },
      {
        key: 'emuik',
        text: 'Okey',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [
          { offset: 0, length: 4, style: 'color-rgb(36,41,46)' },
          { offset: 0, length: 4, style: 'bgcolor-rgb(255,255,255)' },
          { offset: 0, length: 4, style: 'fontsize-32' },
          {
            offset: 0,
            length: 4,
            style:
              'fontfamily--apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol'
          }
        ],
        entityRanges: [],
        data: {}
      }
    ],
    entityMap: {}
  })
};
const component = shallow(<EditArticleComponent {...props} />);
describe('<EditArticleComponent />', () => {
  it('should render a <EditArticleComponent /> component ', () => {
    component.setProps({ article: state.article });
    expect(component).toMatchSnapshot();
    component.instance().convertToEditorState(state.body);
  });
  it('should create articles', () => {
    const instance = component.instance();
    const fakeEvent = { preventDefault: () => {} };
    instance.onSubmit(fakeEvent);
  });
  it('should call onChange method when the body value is changed', () => {
    const instance = component.instance();
    component.setProps({ ...props });
    instance.onEditorStateChange();
    expect(instance).toBeDefined();
  });
  it('should call onChange method when the description value is changed', () => {
    const spy = jest.spyOn(component.instance(), 'onChange');
    component.instance().forceUpdate();
    component.setProps({ ...props, errors: {} });
    const event = { target: { value: 'description' } };
    const textArea = component.find('#articleDescription');
    textArea.simulate('change', event);
    expect(textArea.length).toBe(1);
    expect(spy).toHaveBeenCalled();
  });
  it('should create articles', () => {
    const instance = component.instance();
    const fakeEvent = { preventDefault: () => {} };
    instance.onSubmit(fakeEvent);
  });
});

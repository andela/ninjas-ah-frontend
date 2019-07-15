import React from 'react';
import article from '../../../__mocks__/article';
import URL from '../../../__mocks__/URL';
import { PreviewArticle as PreviewArticleComponent } from '../../../components/Profile/Articles/PreviewArticle/PreviewArticle';
import { shallow } from '../../../../config/enzymeConfig';

const props = {
  errors: {},
  article: {
    title: 'Hello John Doe',
    description: 'John Doe, Mocker',
    body: 'body of the article',
    slug: 'slug-slug-slug'
  },
  message: { message: 'Published' },
  fetchOneArticle: jest.fn(),
  history: {},
  match: { params: { slug: 'slug-slug-slug' } },
  publishArticle: jest.fn(),
  unpublishArticle: jest.fn(),
  deleteArticle: jest.fn(),
  fileSelectedHandler: jest.fn(),
  createObjectURL: jest.fn(),
  uploadImage: jest.fn()
};
const state = {
  article: {
    title: 'Hello John Doe',
    description: 'John Doe, Mocker',
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
    }),
    slug: 'slug-slug-slug'
  },
  message: { message: 'Published' }
};
const component = shallow(<PreviewArticleComponent {...props} />);
describe('<PreviewArticle />', () => {
  it('should render a <PreviewArticleComponent /> component ', () => {
    expect(component).toMatchSnapshot();
  });
  it('should trigger submit', () => {
    const instance = component.instance();
    const fakeEvent = { preventDefault: () => {} };
    instance.onSubmit(fakeEvent);
  });
  it('should trigger publish ', () => {
    component.setProps({ article: state.article, message: state.message });
    component.instance().handlePublish();
  });
  it('should trigger unpublish ', () => {
    component.setProps({ article: state.article });
    component.setState({ message: state.message });
    component.instance().handleUnpublish();
  });
  it('should trigger handleDelete ', () => {
    component.setProps({ article: state.article, message: state.message });
    component.instance().handleDelete();
  });
  it('should cover image upload ', () => {
    component.setProps({ imageErrors: 'Image not uploaded' });
    component.instance().fileSelectedHandler({ target: { files: ['image/image.png'] } });
  });
});

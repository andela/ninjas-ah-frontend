import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'react-thunk';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { mockStore, initialState } from '../../../__mocks__/store';
import {
  Rating as RatingComponent,
  mapStateToProps
} from '../../../components/Articles/Article/Rating';
import { shallow, mount } from '../../../../config/enzymeConfig';

describe('<Article />', () => {
  const props = {
    message: 'Thank you for rating this article',
    errors: { token: 'Failed to authenticate token' },
    submitRate: jest.fn(),
    createRate: jest.fn(),
    closeMessage: jest.fn(),
    ratingStars: jest.fn(),
    fetchOneArticle: jest.fn(),
    getSpecificArticle: jest.fn(),
    isAuth: true,
    slug: 'slug-article-12fg51x',
    article: {
      title: 'yes man',
      rating: 1,
      description: 'yes'
    },
    loading: false
  };
  const component = shallow(<RatingComponent {...props} />);
  it('should create <RatingComponent /> snapshot ', () => {
    expect(component).toMatchSnapshot();
  });
  it('should trigger submit rate ', () => {
    component.setProps({ message: props.message, slug: props.slug, isAuth: true });
    component.instance().submitRate(4);
  });
  it('should trigger close message ', () => {
    component.setState({ message: { rating: 'updated' } });
    component
      .find('.rating-errors i')
      .at(1)
      .simulate('click');
    component.instance().closeMessage();
  });
  it('should trigger close message ', () => {
    component.setState({ message: { rating: 'updated' } });
    component
      .find('.rating-errors i')
      .at(0)
      .simulate('click');
    component.instance().closeMessage();
  });
  it('should trigger submit rate ', () => {
    component.setProps({ message: props.message, slug: props.slug, isAuth: false });
    component.setState({ errors: { token: 'some' } });
    component.instance().submitRate(4);
  });
  it('should trigger submit rate ', () => {
    component.setProps({ message: props.message, slug: props.slug, isAuth: false });
    component.setState({ errors: { token: 'token' } });
    component.instance().submitRate(4);
  });
  it('should trigger submit rate ', () => {
    component
      .find('.one-star')
      .at(1)
      .simulate('click', 5);
  });

  it('should test map state', () => {
    mapStateToProps({
      user: { isAuth: true },
      articles: { article: props.article },
      rating: {
        createRate: {
          loading: false,
          message: 'yes',
          errors: { token: 'token' }
        }
      }
    });
    expect(mapStateToProps).toBeDefined();
  });
});

import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'react-thunk';
import { Provider } from 'react-redux';
import { createRate } from '../../../actions/rating';
import { Rating as RatingComponent } from '../../../components/Articles/Article/Rating';
import { shallow, mount } from '../../../../config/enzymeConfig';

describe('<RatingComponent />', () => {
  const props = {
    slug: 'slug-slug',
    rating: 1,
    errors: { error: ['12'] },
    createRate: jest.fn(),
    fetchOneArticle: jest.fn()
  };
  const rating = {
    slug: 'slug-slug',
    rating: 1
  };
  const component = shallow(<RatingComponent {...props} />);
  it('should render a <CreateRatingComponent /> component ', () => {
    expect(component).toMatchSnapshot();
  });
  const dispatch = jest.fn(action => action);

  describe('Create rating', () => {
    test('returns rating information', async () => {
      const result = createRate(rating)(dispatch);
      expect(result).toHaveProperty('type');
      expect(result).toHaveProperty('payload');
    });
  });
});

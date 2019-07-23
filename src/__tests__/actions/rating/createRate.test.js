import React from 'react';
import { createRate, clearCreateRateStore } from '../../../actions/rating';
import { Rating as RatingComponent } from '../../../components/Articles/Article/Rating';
import { shallow, mount } from '../../../../config/enzymeConfig';

describe('<RatingComponent />', () => {
  const rating = {
    slug: 'slug-slug',
    rating: 1
  };
  const dispatch = jest.fn(action => action);

  describe('Create rating', () => {
    test('returns rating information', async () => {
      clearCreateRateStore()(dispatch);
      const result = createRate(rating)(dispatch);
      expect(result).toHaveProperty('type');
      expect(result).toHaveProperty('payload');
    });
  });
});

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { mount } from '../../../../config/enzymeConfig';
import SignupBanner from '../../../components/Home/SignupBanner/SignupBanner';
import store from '../../../__mocks__/store';

describe('<SignupBanner />', () => {
  test('Banner', () => {
    const component = mount(<Provider store={store}>
        <MemoryRouter>
          <SignupBanner />
        </MemoryRouter>
      </Provider>);
    expect(component).toHaveLength(1);
  });
});

import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { mount, shallow } from '../../../config/enzymeConfig';
import SocialMediaAuth, { SocialMediaAuth as SocialMediaAuthComponent } from '../../components/SocialMediaAuth/SocialMediaAuth';
import store from '../../__mocks__/store';
import { socialAuth } from '../../actions/user';

describe('<SocialMediaAuth />', () => {
  test('if the "id" and the "token" are available in the url', () => {
    const props = { location: { search: '?id=0&token=token' } };
    const component = mount(<Provider store={store}>
        <MemoryRouter>
          <SocialMediaAuth {...props} />
        </MemoryRouter>
      </Provider>);

    expect(component).toHaveLength(1);
  });

  test('display an error if the email or username is already used', () => {
    const props = { getUser: socialAuth, location: { search: '?code=409&email=409&username=409' } };
    const component = shallow(<SocialMediaAuthComponent {...props} />);
    component.setProps({ errors: { email: 'email already used' } });
  });
});

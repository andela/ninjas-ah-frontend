import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { mount, shallow } from '../../../../config/enzymeConfig';
import ProfileEditPicture, { ProfileEditPicture as ProfileEditPictureComponent } from '../../../components/Profile/ProfileEdit/ProfileEditPicture/ProfileEditPicture';
import { mockStore, initialState } from '../../../__mocks__/store';
import user from '../../../__mocks__/user';

describe('<ProfileEditPicture />', () => {
  test('should renders without crashing ', () => {
    const component = mount(<Provider
        store={mockStore({
          ...initialState,
          user: { ...initialState.user, profile: { ...user } }
        })}
      >
        <MemoryRouter>
          <ProfileEditPicture />
        </MemoryRouter>
      </Provider>);

    const file = new File([new Blob()], 'image.jpg', { type: 'image/jpg' });
    const form = component.find('.ProfileEditPicture form');
    const input = component.find('.ProfileEditPicture form input');

    input.simulate('change', {
      target: {
        name: input.instance().name,
        files: [file]
      }
    });
    form.simulate('submit', { preventDefault: jest.fn() });
    expect(component).toHaveLength(1);
  });

  test('should show a selected image', () => {
    const component = shallow(<ProfileEditPictureComponent />);
    component.instance().showSelectedImage({ target: { result: window.btoa('image.jpg') } });
  });

  test('show an error', () => {
    const component = shallow(<ProfileEditPictureComponent />);
    component.setProps({ errors: { message: 'Network error' } });
  });

  test('update the profile of a user with the new image', () => {
    const props = { editProfile: jest.fn(() => true) };
    const component = shallow(<ProfileEditPictureComponent {...props} />);
    component.setState({ file: 'file' });
    component.setProps({ image: { circle: 'image.jpg' } });
  });
});

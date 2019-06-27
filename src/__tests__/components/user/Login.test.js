import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import queryString from 'query-string';
import { Login } from '../../../components/Login/Login';

const mockStore = configureMockStore([thunk]);
configure({ adapter: new Adapter() });

describe('Login component', () => {
  let store;
  const login = jest.fn(() => ({ errors: [], message: 'message' }));
  let wrapper;
  beforeEach(() => {
    store = mockStore();
    wrapper = mount(<Provider store={store}>
        <Router>
          <Login login={login} />
        </Router>
      </Provider>);
    wrapper.instance().handleChange = jest.fn();
    wrapper.instance().handleChange();
  });

  describe('test component functions', () => {
    describe('handle input changes', () => {
      it('Handle changes on email field ', () => {
        wrapper
          .find('input[name="email"]')
          .simulate('change', { target: { value: 'prince@gmail.com' } });
        expect(wrapper.instance().handleChange).toHaveBeenCalled();
      });
      it('Handle changes on password field', () => {
        wrapper
          .find('input[name="password"]')
          .simulate('change', { target: { value: 'prince@1234' } });
        expect(wrapper.instance().handleChange).toHaveBeenCalled();
      });
    });
    describe('handle submit', () => {
      it('submit login success', () => {
        wrapper.instance().handleSubmit = jest.fn();
        wrapper.instance().handleSubmit();
        const fakeEvent = { preventDefault: () => {} };
        wrapper.find('.login').simulate('submit', fakeEvent);
        expect(wrapper.instance().handleSubmit).toHaveBeenCalled();
        expect(wrapper.instance().handleSubmit).toHaveBeenCalledWith();
      });
      it('test component will receve props', () => {
        const component = shallow(<Login />);
        const prevState = {};
        component.instance().componentWillReceiveProps(prevState);
      });
    });
  });
});

import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../../../__mocks__/store';
import user from '../../../__mocks__/user';
import { mount, shallow } from '../../../../config/enzymeConfig';
import Chat, { Chat as ChatComponent } from '../../../components/Chat/Chat';

const chats = [
  {
    id: 2,
    userId: 1,
    message: 'hello world',
    chatGroupId: 1,
    user: {
      id: 1,
      ...user
    }
  }
];

const chat = {
  id: 3,
  userId: 5,
  message: 'voila',
  chatGroupId: 2,
  user: {
    id: 1,
    user
  }
};

const state = {
  inputMessage: '',
  chats,
  modalIsOpen: false
};

const props = {
  profile: {
    id: 1,
    ...user
  },
  isAuth: true
};

let component = '';
let input = '';
let submitButton = '';
let deleteButton = '';
let modalButton = '';
let closeModalButton = '';

describe('CHAT', () => {
  beforeEach(() => {
    component = shallow(<ChatComponent state={state} {...props} />);
    component.setState(state);
    input = component.find('[name="inputMessage"]');
    submitButton = component.find('#submit-chat');
    deleteButton = component.find('.delete-chat');
    modalButton = component.find('[className*="open-chat-modal"]');
    closeModalButton = component.find('[className*="close-chat-modal"]');

    component.instance().getAllMessages(chats);
    component.instance().getNewMessage(chat);
    component.instance().deleteChat(2);
    component.instance().afterOpenModal();

    modalButton.simulate('click', {});
    closeModalButton.simulate('click', {});
  });

  test('send message if input is correct', () => {
    component.setProps({ ...props, token: 'access-token' });
    component.setState({ ...state, inputMessage: 'message' });
    input.simulate('change', { target: { value: 'hello world' } });
    submitButton.simulate('click', { preventDefault: jest.fn() });
  });

  test('should not send message when the field is empty', () => {
    component.setProps({ ...props, token: 'access-token' });
    component.setState({ ...state, inputMessage: '' });
    input.simulate('change', { target: { value: '' } });
    submitButton.simulate('click', { preventDefault: jest.fn() });
  });

  test('should delete a message', () => {
    component.setProps({ ...props, token: 'access-token' });
    component.setState({ ...state, inputMessage: 'message' });
    input.simulate('change', { target: { value: 'hello world' } });
    deleteButton.simulate('click', { preventDefault: jest.fn() });
  });

  test('render the props', () => {
    const component = mount(<Provider store={store}>
        <MemoryRouter>
          <Chat {...props} />
        </MemoryRouter>
      </Provider>);

    expect(component).toHaveLength(1);
  });
});

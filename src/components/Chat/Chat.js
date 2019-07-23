import React, { Component } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import { connect } from 'react-redux';
import { Input, Button } from '../common';
import { socketIOClient } from '../../helpers';

import './Chat.scss';

export class Chat extends Component {
  constructor() {
    super();

    this.state = {
      inputMessage: '',
      chats: [],
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  getAllMessages = (chats) => {
    this.setState(prevState => ({
      ...prevState,
      chats: [...prevState.chats, ...chats.reverse()]
    }));
  };

  getNewMessage = (chat) => {
    this.setState(prevState => ({
      ...prevState,
      chats: [...prevState.chats, chat]
    }));
  };

  deleteChat = (chatId) => {
    const { chats } = this.state;
    this.setState(prevState => ({
      prevState,
      chats: chats.filter(chat => chat.id !== parseInt(chatId, 10))
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { token } = this.props;
    const { inputMessage: message } = this.state;
    if (message) {
      this.setState({ inputMessage: '' });
      socketIOClient.emit('message', { message, token });
    } else {
      toast.error('Please type a message....');
    }
  };

  handleDelete = (chatId, userId) => {
    socketIOClient.emit('deleteChat', chatId, userId);
  };

  componentDidMount = () => {
    socketIOClient.emit('connectedToChat');
    socketIOClient.on('newMessage', this.getNewMessage);

    socketIOClient.on('allMessages', this.getAllMessages);

    socketIOClient.on('chatDeleted', this.deleteChat);
  };

  afterOpenModal = () => {
    this.scrollChatThreadToBottom();
  };

  componentDidUpdate = () => {
    this.scrollChatThreadToBottom();
  };

  scrollChatThreadToBottom = () => {
    const chatModal = document.querySelector('#grab-chat-modal');
    const scrollChatThreadToBottom = chatModal && chatModal.scrollTo(0, 100000000000);
    return scrollChatThreadToBottom;
  };

  render() {
    const { profile } = this.props;
    const { inputMessage, chats } = this.state;
    return (
      <div className="Chat modal-dialog">
        <Modal
          ariaHideApp={false}
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          className="Modal"
          contentLabel="Example Modal">
          <button className="close-chat-modal" onClick={this.closeModal}>
            close
          </button>
          <ToastContainer position={toast.POSITION.TOP_CENTER} />
          <div className="modal-body" id="grab-chat-modal">
            <br />
            <div className="small-screen-4" id="grab-chat-thread">
              {(chats || []).map((chat, key) => (
                <div key={key}>
                  <div
                    id="chats"
                    className={`${
                      chat.userId === profile.id
                        ? 'darkenBlue card-chat radius-2'
                        : 'gree-accent card-chat-left'
                    } radius-2`}>
                    <span className="user-name-style">
                      {chat.userId === profile.id
                        ? 'Me'
                        : `${chat.user.firstName} ${chat.user.lastName}`}
                    </span>
                    <p>{chat.message}</p>
                    <small className="user-name-style">
                      {new Date(chat.createdAt).getHours()}:{new Date(chat.createdAt).getMinutes()}
                      <div className="date-right">
                        {new Date(chat.createdAt).toLocaleString().split(',')[0]}
                      </div>
                    </small>
                  </div>
                  {chat.userId === profile.id ? (
                    <div
                      onClick={() => this.handleDelete(chat.id, profile.id)}
                      className="delete-icon delete-chat">
                      <i className="fa fa-trash margin-top-delete" />
                    </div>
                  ) : (
                    ''
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="fixed-input">
            <Input
              name="inputMessage"
              type="text"
              value={inputMessage}
              onChange={this.handleChange}
              inputClass="radius-5 medium-text resize"
              placeholder=" Enter a message"
            />
          </div>

          <div className="float-btn">
            <Button id="submit-chat" type="submit" text="Signup" onClick={this.handleSubmit}>
              SEND
            </Button>
          </div>
        </Modal>
        <div onClick={this.openModal} className="float open-chat-modal">
          <i className="fa fa-comments-o my-float" />
        </div>
      </div>
    );
  }
}

Chat.propTypes = { profile: PropTypes.object, token: PropTypes.string };

const mapStateToProps = ({ user: { isAuth, profile, token } }) => ({
  isAuth,
  profile,
  token
});

export default connect(mapStateToProps)(Chat);

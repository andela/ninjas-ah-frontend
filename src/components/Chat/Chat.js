import React, { Component } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input, Button } from '../common';
import { customStyles } from './customStyles';
import { socketIOClient } from '../../helpers';

import './Chat.scss';

class Chat extends Component {
  constructor() {
    super();

    this.state = {
      inputMessage: '',
      chats: [],
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    // creates a reference for your element to use
    this.myDivToFocus = React.createRef();
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

  handleSubmit = async (e) => {
    e.preventDefault();

    if (this.myDivToFocus.current) {
      this.myDivToFocus.current.scrollIntoView({
        behavior: 'smooth',
        inline: 'end'
      });
    }

    const { token } = this.props;
    const { inputMessage: message } = this.state;
    this.setState({ inputMessage: '' });
    socketIOClient.emit('message', { message, token });
  };

  handleDelete = (chatId, userId) => {
    socketIOClient.emit('deleteChat', chatId, userId);
  };

  componentDidMount = () => {
    socketIOClient.emit('connectedToChat');
    socketIOClient.on('newMessage', (chat) => {
      this.setState(prevState => ({
        ...prevState,
        chats: [...prevState.chats, chat]
      }));
    });

    socketIOClient.on('allMessages', (chats) => {
      this.setState(prevState => ({
        ...prevState,
        chats: [...prevState.chats, ...chats]
      }));
    });

    socketIOClient.on('chatDeleted', (chatId) => {
      const { chats } = this.state;
      this.setState(prevState => ({
        prevState,
        chats: chats.filter(chat => chat.id !== parseInt(chatId, 10))
      }));
    });
  };

  render() {
    const { profile } = this.props;
    const { inputMessage, chats } = this.state;
    return (
      <div className="modal-dialog">
        <Modal
          ariaHideApp={false}
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal">
          <div className="modal-body">
            <h2 className="center-align medium-text text-grey">Ninjas CHAT</h2>
            <br />
            {(chats || []).map((chat, key) => (
              <div key={key}>
                <div
                  ref={this.myDivToFocus}
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
                    className="delete-icon">
                    <i className="fa fa-trash margin-top-delete" />
                  </div>
                ) : (
                  ''
                )}
              </div>
            ))}
          </div>
          <div className="padding-fixed">
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
              <Button type="submit" text="Signup" onClick={this.handleSubmit}>
                SEND
              </Button>
            </div>
          </div>
        </Modal>
        <div onClick={this.openModal} className="float">
          <i className="fa fa-plus my-float" />
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

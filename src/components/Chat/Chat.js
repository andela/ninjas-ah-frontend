import './Chat.scss';
import React, { Component } from 'react';
import Modal from 'react-modal';
import { Input, Button } from '../common';
import { customStyles } from './customStyles';

class Chat extends Component {
  constructor() {
    super();

    this.state = { modalIsOpen: false };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  handleSubmit = () => {
    console.log('working');
  };

  render() {
    return (
      <div>
        <Modal
          ariaHideApp={false}
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal">
          <button onClick={this.closeModal}>close</button>

          <div id="chats" className="darkenBlue card-chat radius-2">
            sdfasfsdfsd
          </div>

          <div>
            <Input
              className="style-left"
              name="text"
              type="text"
              inputClass="radius-5 medium-text resize"
              placeholder=" Enter a message"
            />

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

export default Chat;

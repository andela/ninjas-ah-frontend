import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './Alert.scss';
import Button from '../Button/Button';

export class Alert extends Component {
  state = { showAlert: true };

  handleClick = () => {
    const { showAlert } = this.state;
    this.setState({ showAlert: !showAlert });
  };

  componentWillReceiveProps = nextProps => nextProps.message && this.setState({ showAlert: true });

  render() {
    const { showAlert } = this.state;
    const { message, className, alertType, size } = this.props;
    const iconStyle = {
      fontSize: `${size}px`,
      color: 'white',
      position: 'absolute',
      right: '5%',
      top: '17%'
    };

    return showAlert ? (
      <div className={`${className} ${alertType}`}>
        <p>{message}</p>
        <Button buttonClass={`radius-4 bold button ${alertType}`} onClick={this.handleClick}>
          <FontAwesomeIcon style={iconStyle} icon={faTimes} />
        </Button>
      </div>
    ) : (
      ''
    );
  }
}

Alert.propTypes = {
  message: PropTypes.any,
  className: PropTypes.string,
  alertType: PropTypes.string,
  size: PropTypes.number
};

Alert.defaultProps = {
  message: 'Alert',
  className: 'Alert center-align large-screen-1 medium-screen-2 small-screen-3',
  alertType: 'info',
  size: 25
};

export default Alert;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, Input, Button, Img, Alert } from '../../../common';
import './ProfileEditPicture.scss';
import { uploadImage, editProfile } from '../../../../actions/user';

export class ProfileEditPicture extends Component {
  state = {
    selectedImage: '',
    file: '',
    image: '',
    errors: {},
    message: ''
  };

  handleChange = (e) => {
    const file = e.target.files[0] || new Blob();
    const reader = new FileReader();

    this.setState({
      selectedImage: e.target.value,
      file,
      errors: {},
      message: ''
    });
    reader.readAsDataURL(file);
    reader.onload = e.target.value && this.showSelectedImage;
  };

  showSelectedImage = ({ target: { result } }) => this.setState({ image: result });

  handleSubmit = (e) => {
    e.preventDefault();
    const { file } = this.state;
    const { uploadImage } = this.props;
    const formData = new FormData();
    formData.append('image', file);

    return (file && uploadImage(formData)) || false;
  };

  componentWillReceiveProps = (nextProps) => {
    const { editProfile } = this.props;
    const { errors, file } = this.state;
    const image = nextProps.image && nextProps.image.circle;

    if (!nextProps.loading && image && file) {
      editProfile({ image });
      this.setState({ file: '' });
    }

    this.setState({
      message: nextProps.uploadMessage || nextProps.editProfileMessage,
      errors: { ...errors, ...nextProps.errors }
    });
  };

  render() {
    const { loading } = this.props;
    const { image, selectedImage, errors, message } = this.state;
    const error = errors.token || errors.authentication || errors.permission || errors.message;

    return (
      <div className="ProfileEditPicture">
        <div className="small-screen-4">
          <div className="small-screen-4">
            {(message || error) && (
              <Alert alertType={(message && 'success') || 'danger'} message={message || error} />
            )}
          </div>
          <Form onSubmit={this.handleSubmit}>
            <Input
              name="image"
              type="file"
              inputClass="medium-text radius-5"
              value={selectedImage}
              onChange={this.handleChange}
              isRequired={true}
            />
            <Button type="submit" loading={loading}>
              Upload
            </Button>
          </Form>
        </div>
        <div className="divider" />
        <div className="small-screen-4">{image ? <Img imgSrc={image} maxWidth="400px" /> : ''}</div>
      </div>
    );
  }
}

ProfileEditPicture.propTypes = {
  loading: PropTypes.bool,
  image: PropTypes.object,
  uploadMessage: PropTypes.string,
  editProfileMessage: PropTypes.string,
  errors: PropTypes.object,
  uploadImage: PropTypes.func,
  editProfile: PropTypes.func
};

const mapStateToProps = ({
  user: {
    uploadImage: { loading, image, message, errors },
    editProfile
  }
}) => ({
  loading: loading || editProfile.loading,
  image,
  uploadMessage: message,
  editProfileMessage: editProfile.message,
  errors
});

export default connect(
  mapStateToProps,
  { uploadImage, editProfile }
)(ProfileEditPicture);

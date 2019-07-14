module.exports = {
  profile: JSON.parse(localStorage.user || '{}'),
  isAuth: !!localStorage.token,
  signup: {
    loading: false,
    message: '',
    errors: {}
  },
  login: {
    loading: false,
    message: '',
    errors: {}
  },
  getUser: {
    loading: false,
    message: '',
    errors: {}
  },
  editProfile: {
    loading: false,
    message: '',
    errors: {}
  },
  uploadImage: {
    loading: false,
    image: {},
    errors: {}
  },
  forgotPassword: {
    loading: false,
    message: '',
    errors: {}
  },
  updatePassword: {
    loading: false,
    message: '',
    errors: {}
  }
};

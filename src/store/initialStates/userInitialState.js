const checkUser = require('../../helpers/checkUser')();

module.exports = {
  profile: checkUser.profile,
  token: localStorage.token,
  isAuth: checkUser.isAuth,
  listOfUsers: [],
  currentUser: {},
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
  logout: {
    loading: false,
    message: '',
    errors: {}
  },
  getUser: {
    loading: false,
    message: '',
    errors: {}
  },
  getUsers: {
    loading: false,
    message: '',
    errors: {}
  },
  searchUser: {
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
  },
  adminCreateUser: {
    loading: false,
    message: '',
    errors: {}
  },
  adminGetPermissions: {
    loading: false,
    message: '',
    permissions: [],
    errors: {}
  },
  deleteUser: {
    loading: false,
    message: '',
    errors: {}
  },
  permissions: {
    articles: ['read', 'create', 'edit', 'delete'],
    comments: ['read', 'create', 'edit', 'delete'],
    tags: ['read', 'create', 'edit', 'delete'],
    users: ['read', 'create', 'edit', 'delete'],
    permissions: ['read', 'create', 'edit', 'delete']
  }
};

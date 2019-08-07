module.exports = {
  fetchComments: {
    comments: [],
    loading: false,
    message: '',
    errors: {}
  },
  createComment: {
    loading: false,
    message: '',
    errors: {}
  },
  editComment: {
    comment: {},
    loading: false,
    message: '',
    errors: {}
  },
  deleteComment: {
    loading: false,
    message: '',
    errors: {},
    deleted: false
  },
  getCommentHistory: {
    editCommentHistory: [],
    historyLoading: false,
    message: '',
    errors: ''
  },
  comment: { likes: { number: 0, whoLiked: [] } },
  getLikes: {
    loading: false,
    message: '',
    errors: {}
  },
  like: {
    loading: false,
    message: '',
    errors: {}
  },
  commentLikes: []
};

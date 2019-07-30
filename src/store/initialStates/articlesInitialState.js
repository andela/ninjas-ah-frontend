module.exports = {
  articles: [],
  article: {
    highlights: [],
    likes: { number: 0, whoLiked: [] },
    dislikes: { number: 0, whoDisliked: [] }
  },
  message: {},
  errors: {},
  image: {},
  highlight: {
    loading: false,
    message: '',
    errors: {}
  },
  getHighlights: {
    loading: false,
    message: '',
    errors: {}
  },
  deleteHighlight: {
    loading: false,
    message: '',
    errors: {}
  },
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
  dislike: {
    loading: false,
    message: '',
    errors: {}
  }
};

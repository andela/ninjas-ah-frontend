module.exports = {
  articles: [],
  article: {
    highlights: [],
    reports: [],
    likes: { number: 0, whoLiked: [] },
    dislikes: { number: 0, whoDisliked: [] }
  },
  currentArticlesReports: [],
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
  reportArticle: {
    loading: false,
    message: '',
    errors: {}
  },
  getOneArticleReports: {
    loading: false,
    message: '',
    errors: {}
  },
  getArticlesReports: {
    loading: false,
    message: '',
    errors: {}
  },
  deleteArticleReport: {
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
  },
  deleteArticle: {
    loading: false,
    message: '',
    errors: {}
  }
};

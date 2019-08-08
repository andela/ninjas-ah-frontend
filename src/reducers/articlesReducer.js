import { articlesType } from '../actions-types';
import { articles as initialState } from '../store/initialState';
import { updateArticleLikesOrDislikes } from '../helpers';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case articlesType.FETCH_ARTICLES_START:
      return {
        ...state,
        articles: [],
        loading: true
      };
    case articlesType.FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: [...state.articles, ...payload.articles],
        articlesCount: payload.articlesCount,
        loading: false
      };
    case articlesType.FETCH_ARTICLES_END:
      return {
        ...state,
        loading: false
      };
    case articlesType.FETCH_ARTICLES_FAILURE:
      return {
        ...state,
        errors: { ...state.errors, ...payload.errors },
        loading: false
      };
    case articlesType.FETCH_ARTICLE_START:
      return {
        ...state,
        article: { ...state.article }
      };
    case articlesType.FETCH_ARTICLE_SUCCESS:
      return {
        ...state,
        article: { ...state.article, ...payload.article },
        errors: {},
        message: {}
      };
    case articlesType.FETCH_ARTICLE_FAILURE:
      return {
        ...state,
        errors: payload,
        article: { ...state.article },
        loading: false
      };
    case articlesType.CREATE_ARTICLE_START:
      return {
        ...state,
        article: {},
        errors: []
      };
    case articlesType.CREATE_ARTICLE_SUCCESS:
      return {
        ...state,
        article: { ...state.article, ...payload.article },
        errors: []
      };
    case articlesType.CREATE_ARTICLE_FAILURE:
      return {
        ...state,
        article: { ...state.article },
        errors: { ...state.errors, ...payload }
      };
    case articlesType.EDIT_ARTICLE_SUCCESS:
      return {
        ...state,
        message: { ...state.message, ...payload }
      };
    case articlesType.EDIT_ARTICLE_FAILURE:
      return {
        ...state,
        errors: { ...state.errors, ...payload }
      };
    // delete article
    case articlesType.CLEAR_DELETE_ARTICLE_STORE:
      return {
        ...state,
        deleteArticle: { ...payload, loading: false, message: '', errors: {} }
      };
    case articlesType.DELETE_ARTICLE_START:
      return {
        ...state,
        deleteArticle: { loading: true, message: '', errors: {} }
      };
    case articlesType.DELETE_ARTICLE_SUCCESS:
      return {
        ...state,
        message: { ...state.message, ...payload },
        deleteArticle: { loading: false, message: payload.message, errors: {} }
      };
    case articlesType.DELETE_ARTICLE_FAILURE:
      return {
        ...state,
        errors: { ...state.errors, ...payload },
        deleteArticle: {
          ...state.deleteArticle,
          loading: false,
          message: '',
          errors: {
            ...payload.errors,
            message: payload.message || payload.error
          }
        }
      };
    case articlesType.DELETE_ARTICLE_END:
      return {
        ...state,
        deleteArticle: { ...state.deleteArticle, loading: false }
      };
    // publish article
    case articlesType.PUBLISH_ARTICLE_SUCCESS:
      return {
        ...state,
        message: { ...state.message, ...payload }
      };
    case articlesType.PUBLISH_ARTICLE_FAILURE:
      return {
        ...state,
        errors: { ...state.errors, ...payload }
      };
    case articlesType.UNPUBLISH_ARTICLE_SUCCESS:
      return {
        ...state,
        message: { ...state.message, ...payload }
      };
    case articlesType.UNPUBLISH_ARTICLE_FAILURE:
      return {
        ...state,
        errors: { ...state.errors, ...payload }
      };
    case articlesType.FETCH_MY_PUBLISHED_ARTICLES_START:
      return {
        ...state,
        articles: []
      };
    case articlesType.FETCH_MY_PUBLISHED_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: [...state.articles, ...payload.articles]
      };
    case articlesType.FETCH_MY_PUBLISHED_ARTICLES_FAILURE:
      return {
        ...state,
        errors: payload,
        article: {}
      };
    // highlight article
    case articlesType.CLEAR_HIGHLIGHT_ARTICLE_STORE:
      return {
        ...state,
        highlight: { ...payload, loading: false, message: '', errors: {} }
      };
    case articlesType.HIGHLIGHT_ARTICLE_START:
      return {
        ...state,
        highlight: { ...state.highlight, message: '', loading: true, errors: {} }
      };
    case articlesType.HIGHLIGHT_ARTICLE_END:
      return {
        ...state,
        highlight: { ...state.highlight, loading: false }
      };
    case articlesType.HIGHLIGHT_ARTICLE_SUCCESS:
      return {
        ...state,
        article: {
          ...state.article,
          highlights: [...state.article.highlights, payload.created[0]]
        },
        highlight: { loading: false, message: payload.message, errors: {} }
      };
    case articlesType.HIGHLIGHT_ARTICLE_FAILURE:
      return {
        ...state,
        highlight: {
          loading: false,
          message: '',
          errors: {
            ...payload.errors,
            message: payload.message || (Array.isArray(payload.errors) && payload.errors[0])
          }
        }
      };
    // get highlights
    case articlesType.CLEAR_GET_ARTICLE_HIGHLIGHTS_STORE:
      return {
        ...state,
        getHighlights: { ...payload, loading: false, message: '', errors: {} }
      };
    case articlesType.GET_ARTICLE_HIGHLIGHTS_START:
      return {
        ...state,
        getHighlights: {
          ...state.getHighlights,
          message: '',
          loading: true,
          errors: {}
        }
      };
    case articlesType.GET_ARTICLE_HIGHLIGHTS_END:
      return {
        ...state,
        getHighlights: { ...state.getHighlights, loading: false }
      };
    case articlesType.GET_ARTICLE_HIGHLIGHTS_SUCCESS:
      return {
        ...state,
        article: { ...state.article, highlights: payload.highlights },
        getHighlights: { loading: false, message: payload.message, errors: {} }
      };
    case articlesType.GET_ARTICLE_HIGHLIGHTS_FAILURE:
      return {
        ...state,
        article: { ...state.article, highlights: [] },
        getHighlights: {
          loading: false,
          message: '',
          errors: {
            ...payload.errors,
            message: payload.message || (Array.isArray(payload.errors) && payload.errors[0])
          }
        }
      };
    // delete highlight
    case articlesType.CLEAR_DELETE_ARTICLE_HIGHLIGHT_STORE:
      return {
        ...state,
        deleteHighlight: { ...payload, loading: false, message: '', errors: {} }
      };
    case articlesType.DELETE_ARTICLE_HIGHLIGHT_START:
      return {
        ...state,
        highlight: { ...state.highlight, message: '', errors: {} },
        deleteHighlight: {
          ...state.deleteHighlight,
          loading: true,
          message: '',
          errors: {}
        }
      };
    case articlesType.DELETE_ARTICLE_HIGHLIGHT_END:
      return {
        ...state,
        deleteHighlight: { ...state.deleteHighlight, loading: false }
      };
    case articlesType.DELETE_ARTICLE_HIGHLIGHT_SUCCESS:
      return {
        ...state,
        article: {
          ...state.article,
          highlights: [
            ...state.article.highlights.filter(({ id }) => id !== parseInt(payload.highlightId, 10))
          ]
        },
        deleteHighlight: { loading: false, message: payload.message, errors: {} }
      };
    case articlesType.DELETE_ARTICLE_HIGHLIGHT_FAILURE:
      return {
        ...state,
        deleteHighlight: {
          loading: false,
          message: '',
          errors: {
            ...payload.errors,
            message: payload.message || (Array.isArray(payload.errors) && payload.errors[0])
          }
        }
      };
    // report article
    case articlesType.CLEAR_REPORT_ARTICLE_STORE:
      return {
        ...state,
        reportArticle: { ...payload, loading: false, message: '', errors: {} }
      };
    case articlesType.REPORT_ARTICLE_START:
      return {
        ...state,
        reportArticle: { ...state.reportArticle, message: '', loading: true, errors: {} }
      };
    case articlesType.REPORT_ARTICLE_END:
      return {
        ...state,
        reportArticle: { ...state.reportArticle, loading: false }
      };
    case articlesType.REPORT_ARTICLE_SUCCESS:
      return {
        ...state,
        article: {
          ...state.article,
          reports: [...state.article.reports, payload.report]
        },
        currentArticlesReports: [...state.currentArticlesReports, payload.report],
        reportArticle: { loading: false, message: payload.message, errors: {} }
      };
    case articlesType.REPORT_ARTICLE_FAILURE:
      return {
        ...state,
        reportArticle: {
          loading: false,
          message: '',
          errors: {
            ...payload.errors,
            message: payload.message || (Array.isArray(payload.errors) && payload.errors[0])
          }
        }
      };
    // get reports for all articles
    case articlesType.CLEAR_GET_ARTICLES_REPORTS_STORE:
      return {
        ...state,
        getArticlesReports: { ...payload, loading: false, message: '', errors: {} }
      };
    case articlesType.GET_ARTICLES_REPORTS_START:
      return {
        ...state,
        getArticlesReports: {
          ...state.getArticlesReports,
          message: '',
          loading: true,
          errors: {}
        }
      };
    case articlesType.GET_ARTICLES_REPORTS_END:
      return {
        ...state,
        getArticlesReports: { ...state.getArticlesReports, loading: false }
      };
    case articlesType.GET_ARTICLES_REPORTS_SUCCESS:
      return {
        ...state,
        currentArticlesReports: payload.reports,
        getArticlesReports: { loading: false, message: payload.message, errors: {} }
      };
    case articlesType.GET_ARTICLES_REPORTS_FAILURE:
      return {
        ...state,
        getArticlesReports: {
          loading: false,
          message: '',
          errors: {
            ...payload.errors,
            message: payload.message || (Array.isArray(payload.errors) && payload.errors[0])
          }
        }
      };
    // get reports for one article
    case articlesType.CLEAR_GET_ARTICLE_REPORTS_STORE:
      return {
        ...state,
        getOneArticleReports: { ...payload, loading: false, message: '', errors: {} }
      };
    case articlesType.GET_ARTICLE_REPORTS_START:
      return {
        ...state,
        getOneArticleReports: {
          ...state.getOneArticleReports,
          message: '',
          loading: true,
          errors: {}
        }
      };
    case articlesType.GET_ARTICLE_REPORTS_END:
      return {
        ...state,
        getOneArticleReports: { ...state.getOneArticleReports, loading: false }
      };
    case articlesType.GET_ARTICLE_REPORTS_SUCCESS:
      return {
        ...state,
        article: { ...state.article, reports: payload.reports },
        getOneArticleReports: { loading: false, message: payload.message, errors: {} }
      };
    case articlesType.GET_ARTICLE_REPORTS_FAILURE:
      return {
        ...state,
        getOneArticleReports: {
          loading: false,
          message: '',
          errors: {
            ...payload.errors,
            message: payload.message || (Array.isArray(payload.errors) && payload.errors[0])
          }
        }
      };
    // delete report
    case articlesType.CLEAR_DELETE_ARTICLE_REPORT_STORE:
      return {
        ...state,
        deleteArticleReport: { ...payload, loading: false, message: '', errors: {} }
      };
    case articlesType.DELETE_ARTICLE_REPORT_START:
      return {
        ...state,
        deleteArticleReport: {
          ...state.deleteArticleReport,
          loading: true,
          message: '',
          errors: {}
        }
      };
    case articlesType.DELETE_ARTICLE_REPORT_END:
      return {
        ...state,
        deleteArticleReport: { ...state.deleteArticleReport, loading: false }
      };
    case articlesType.DELETE_ARTICLE_REPORT_SUCCESS:
      return {
        ...state,
        article: {
          ...state.article,
          reports: [
            ...state.article.reports.filter(({ id }) => id !== parseInt(payload.reportId, 10))
          ]
        },
        currentArticlesReports: [
          ...state.currentArticlesReports.filter(({ id }) => id !== parseInt(payload.reportId, 10))
        ],
        deleteArticleReport: { loading: false, message: payload.message, errors: {} }
      };
    case articlesType.DELETE_ARTICLE_REPORT_FAILURE:
      return {
        ...state,
        deleteArticleReport: {
          loading: false,
          message: '',
          errors: {
            ...payload.errors,
            message: payload.message || (Array.isArray(payload.errors) && payload.errors[0])
          }
        }
      };
    // get article likes
    case articlesType.GET_ARTICLE_LIKES_START:
      return {
        ...state,
        getLikes: { ...payload, loading: true, message: '', errors: {} }
      };
    case articlesType.GET_ARTICLE_LIKES_SUCCESS:
      return {
        ...state,
        article: {
          ...state.article,
          likes: { number: payload.likes, whoLiked: payload.whoLiked.userId },
          dislikes: { number: payload.dislikes, whoDisliked: payload.whoDisliked.userId }
        },
        getLikes: { ...payload, loading: false, message: payload.message, errors: {} }
      };
    case articlesType.GET_ARTICLE_LIKES_FAILURE:
      return {
        ...state,
        article: { ...state.article }
      };
    case articlesType.GET_ARTICLE_LIKES_END:
      return {
        ...state,
        getLikes: { ...payload.getLikes, loading: false }
      };
    // like article
    case articlesType.LIKE_ARTICLE_START:
      return {
        ...state,
        like: { ...payload, loading: true, message: '', errors: {} }
      };
    case articlesType.LIKE_ARTICLE_SUCCESS:
      return {
        ...state,
        article: {
          ...state.article,
          ...updateArticleLikesOrDislikes({
            userId: payload.createLike.userId,
            whoLiked: state.article.likes.whoLiked,
            currentLikes: state.article.likes.number,
            whoDisliked: state.article.dislikes.whoDisliked,
            currentDislikes: state.article.dislikes.number,
            action: 'like'
          })
        },
        like: { ...payload, loading: false, message: payload.message, errors: {} }
      };
    case articlesType.LIKE_ARTICLE_FAILURE:
      return {
        ...state,
        article: { ...state.article }
      };
    case articlesType.LIKE_ARTICLE_END:
      return {
        ...state,
        like: { ...payload.like, loading: false }
      };
    // dislike article
    case articlesType.DISLIKE_ARTICLE_START:
      return {
        ...state,
        dislike: { ...payload, loading: true, message: '', errors: {} }
      };
    case articlesType.DISLIKE_ARTICLE_SUCCESS:
      return {
        ...state,
        article: {
          ...state.article,
          ...updateArticleLikesOrDislikes({
            userId: payload.createLike.userId,
            whoLiked: state.article.likes.whoLiked,
            currentLikes: state.article.likes.number,
            whoDisliked: state.article.dislikes.whoDisliked,
            currentDislikes: state.article.dislikes.number,
            action: 'dislike'
          })
        },
        dislike: { ...payload, loading: false, message: payload.message, errors: {} }
      };
    case articlesType.DISLIKE_ARTICLE_FAILURE:
      return {
        ...state,
        article: { ...state.article }
      };
    case articlesType.DISLIKE_ARTICLE_END:
      return {
        ...state,
        dislike: { ...payload.dislike, loading: false }
      };
    default:
      return state;
  }
};

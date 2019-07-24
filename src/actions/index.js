import * as userAction from './user';
import * as notificationActions from './notificationActions';
import {
  getAllArticles,
  fetchOneArticle,
  createPost,
  editPost,
  deleteArticle,
  publishArticle,
  unpublishArticle,
  getPublished
} from './articles';
import { createRate } from './rating';
import { uploadImage } from './images';
import { fetchComments, createComment, deleteComment, editComment } from './comments';

export {
  userAction,
  notificationActions,
  getAllArticles,
  fetchOneArticle,
  createPost,
  editPost,
  deleteArticle,
  publishArticle,
  unpublishArticle,
  uploadImage,
  getPublished,
  createRate,
  fetchComments,
  createComment,
  deleteComment,
  editComment
};

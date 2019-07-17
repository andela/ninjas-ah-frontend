const notification = require('./initialStates/notification');
const user = require('./initialStates/userInitialState');
const articles = require('./initialStates/articlesInitialState');
const images = require('./initialStates/imagesInitialState');
const rating = require('./initialStates/ratingInitialState');
const bookmarks = require('./initialStates/bookmarks');
const comments = require('./initialStates/commentsInitialState');

module.exports = { user, notification, articles, images, rating, bookmarks, comments };

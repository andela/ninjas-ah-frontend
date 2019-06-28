const notification = require('./initialStates/notification');
const user = require('./initialStates/userInitialState');
const articles = require('./initialStates/articlesInitialState');
const images = require('./initialStates/imagesInitialState');

module.exports = { user, notificationReducer: notification, articles, images };

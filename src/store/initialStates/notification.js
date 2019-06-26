module.exports = {
  config: {
    inApp: {
      alias: 'Authors Haven',
      articles: {
        show: false,
        on: []
      }
    },
    email: {
      alias: 'Email',
      articles: {
        show: false,
        on: []
      }
    }
  },
  updateNotificationConfiguration: { loading: false, message: '', errors: {} },
  getNotificationConfiguration: { loading: false, message: '', errors: {} }
};

export default (Object.notification = {
  config: {
    inApp: {
      articles: {
        show: true,
        on: ['publish', 'comment']
      }
    },
    email: {
      articles: {
        show: true,
        on: ['publish', 'comment']
      }
    }
  },
  updateNotificationConfiguration: { loading: false, message: '', errors: {} },
  getNotificationConfiguration: { loading: false, message: '', errors: {} }
});

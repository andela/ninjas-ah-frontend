export default (Object.notification = {
  configuration: {
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
  updateNotificationConfiguration: { loading: false, message: '', errors: {} }
});

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
  notifications: [],
  updateNotificationConfiguration: { loading: false, message: '', errors: {} },
  getNotificationConfiguration: { loading: false, message: '', errors: {} },
  getNotification: { loading: false, message: '', errors: '' },
  getUnseenNotification: { loading: false, message: '', errors: '' },
  unseenNotifications: [],
  updateUnseenNotification: { loading: false, message: '', errors: {} },
  showNotificationModal: false,
  deleteNotification: { loading: false, message: '', errors: {} }
};

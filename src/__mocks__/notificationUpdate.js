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

export const notifications = {
  notifications: {
    id: 1,
    message: 'Message here',
    status: 'unseen'
  },
  updateNotificationConfiguration: { loading: false, message: '', errors: {} }
};

export const unseenNotifications = [];

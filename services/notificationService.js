// Simple notification service for managing notification preferences
// In a real app, this would integrate with push notification services

class NotificationService {
  constructor() {
    // In-memory storage for notification preferences
    // In a real app, this would be stored in AsyncStorage or a database
    this.preferences = new Map();
    this.notifications = [];
    
    // Set default notification preference to true
    this.preferences.set('notifications_enabled', true);
  }

  // Get notification preference
  getNotificationPreference() {
    return this.preferences.get('notifications_enabled') || false;
  }

  // Set notification preference
  setNotificationPreference(enabled) {
    this.preferences.set('notifications_enabled', enabled);
    console.log(`Notifications ${enabled ? 'enabled' : 'disabled'}`);
    
    if (!enabled) {
      // Clear any pending notifications when disabled
      this.clearAllNotifications();
    }
    
    return enabled;
  }

  // Add a notification (only if notifications are enabled)
  addNotification(notification) {
    if (!this.getNotificationPreference()) {
      console.log('Notifications are disabled, not adding notification');
      return false;
    }

    const newNotification = {
      id: Date.now().toString(),
      timestamp: new Date(),
      read: false,
      ...notification
    };

    this.notifications.unshift(newNotification);
    console.log('Notification added:', newNotification);
    
    // In a real app, this would trigger a push notification
    this.simulateNotification(newNotification);
    
    return true;
  }

  // Simulate a notification (for development)
  simulateNotification(notification) {
    if (this.getNotificationPreference()) {
      console.log('📱 Notification:', notification.title, '-', notification.message);
      
      // In a real app, you would use:
      // - React Native's PushNotificationIOS for iOS
      // - React Native's PushNotification for Android
      // - Firebase Cloud Messaging
      // - OneSignal
      // etc.
    }
  }

  // Get all notifications
  getNotifications() {
    return this.notifications;
  }

  // Clear all notifications
  clearAllNotifications() {
    this.notifications = [];
    console.log('All notifications cleared');
  }

  // Mark notification as read
  markAsRead(notificationId) {
    const notification = this.notifications.find(n => n.id === notificationId);
    if (notification) {
      notification.read = true;
    }
  }

  // Send a test notification (for demonstration)
  sendTestNotification() {
    return this.addNotification({
      title: 'Test Notification',
      message: 'This is a test notification from the settings page.',
      type: 'test'
    });
  }

  // Send loan-related notifications
  sendLoanNotification(type, data = {}) {
    const notifications = {
      'loan_approved': {
        title: 'Loan Approved! 🎉',
        message: `Your loan application for $${data.amount || '5,000'} has been approved.`,
        type: 'loan'
      },
      'payment_due': {
        title: 'Payment Due Reminder',
        message: `Your loan payment of $${data.amount || '250'} is due in ${data.days || '3'} days.`,
        type: 'payment'
      },
      'payment_overdue': {
        title: 'Payment Overdue ⚠️',
        message: `Your payment of $${data.amount || '250'} is overdue. Please pay immediately.`,
        type: 'payment'
      },
      'loan_rejected': {
        title: 'Loan Application Update',
        message: 'We regret to inform you that your loan application was not approved.',
        type: 'loan'
      }
    };

    const notification = notifications[type];
    if (notification) {
      return this.addNotification(notification);
    }
    
    return false;
  }
}

// Create a singleton instance
const notificationService = new NotificationService();

export default notificationService;

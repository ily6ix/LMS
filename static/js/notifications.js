document.addEventListener('DOMContentLoaded', function() {
  // Mark notification as read
  const markReadButtons = document.querySelectorAll('.mark-read');
  
  markReadButtons.forEach(button => {
    button.addEventListener('click', function() {
      const notificationItem = this.closest('.notification-item');
      notificationItem.classList.remove('unread');
      this.textContent = 'Marked as Read';
      this.disabled = true;
      
      // Update notification count in header
      updateNotificationCount();
    });
  });

  // Mark all as read
  const markAllReadButton = document.getElementById('mark-all-read');
  
  markAllReadButton.addEventListener('click', function() {
    const unreadNotifications = document.querySelectorAll('.notification-item.unread');
    
    unreadNotifications.forEach(notification => {
      notification.classList.remove('unread');
      const markReadButton = notification.querySelector('.mark-read');
      if (markReadButton) {
        markReadButton.textContent = 'Marked as Read';
        markReadButton.disabled = true;
      }
    });
    
    // Update notification count in header
    updateNotificationCount();
  });

  // Grade section toggle functionality
  const gradeToggles = document.querySelectorAll('.grade-toggle');
  
  gradeToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
      const gradeSection = this.closest('.grade-section');
      const notificationList = gradeSection.querySelector('.notification-list');
      
      this.classList.toggle('collapsed');
      notificationList.classList.toggle('collapsed');
    });
  });

  // Save notification settings
  const saveSettingsButton = document.querySelector('.btn-primary i.fa-save').parentNode;
  
  saveSettingsButton.addEventListener('click', function() {
    const emailNewApp = document.getElementById('email-new-app').checked;
    const emailStatusChange = document.getElementById('email-status-change').checked;
    const emailSystem = document.getElementById('email-system').checked;
    const emailUser = document.getElementById('email-user').checked;
    
    // In a real implementation, this would save the settings to the server
    console.log('Saving notification settings:', {
      emailNewApp,
      emailStatusChange,
      emailSystem,
      emailUser
    });
    
    // Show success message
    alert('Notification settings saved successfully!');
  });

  // Send custom notification
  const sendNotificationButton = document.querySelector('.btn-primary i.fa-paper-plane').parentNode;
  
  sendNotificationButton.addEventListener('click', function() {
    const recipients = document.getElementById('notification-recipients').value;
    const title = document.getElementById('notification-title').value.trim();
    const message = document.getElementById('notification-message').value.trim();
    const sendEmail = document.getElementById('send-email').checked;
    
    // Validate inputs
    if (!title) {
      alert('Please enter a notification title');
      return;
    }
    
    if (!message) {
      alert('Please enter a notification message');
      return;
    }
    
    // In a real implementation, this would send the notification to the server
    console.log('Sending notification:', {
      recipients,
      title,
      message,
      sendEmail
    });
    
    // Show success message
    alert('Notification sent successfully!');
    
    // Clear form
    document.getElementById('notification-title').value = '';
    document.getElementById('notification-message').value = '';
    document.getElementById('send-email').checked = false;
  });

  // Helper function to update notification count in header
  function updateNotificationCount() {
    const unreadCount = document.querySelectorAll('.notification-item.unread').length;
    const notificationBadge = document.querySelector('.header-icon .notification-badge');
    
    if (notificationBadge) {
      notificationBadge.textContent = unreadCount;
      
      // Hide badge if no unread notifications
      if (unreadCount === 0) {
        notificationBadge.style.display = 'none';
      } else {
        notificationBadge.style.display = 'flex';
      }
    }
  }
});
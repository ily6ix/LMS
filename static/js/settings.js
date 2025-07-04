document.addEventListener('DOMContentLoaded', function() {
  // Settings tab functionality
  const settingsTabs = document.querySelectorAll('.settings-tab');
  const settingsContents = document.querySelectorAll('.settings-content');
  
  settingsTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const tabId = this.getAttribute('data-tab');
      
      // Update active tab
      settingsTabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      
      // Show active content
      settingsContents.forEach(content => content.classList.remove('active'));
      document.getElementById(`${tabId}-settings`).classList.add('active');
    });
  });

  // Account settings
  const saveAccountBtn = document.getElementById('save-account');
  
  saveAccountBtn.addEventListener('click', function() {
    const name = document.getElementById('settings-name').value.trim();
    const email = document.getElementById('settings-email').value.trim();
    const password = document.getElementById('settings-password').value;
    const confirmPassword = document.getElementById('settings-confirm').value;
    
    // Validate inputs
    if (!name) {
      alert('Please enter your name');
      return;
    }
    
    if (!email) {
      alert('Please enter your email');
      return;
    }
    
    if (password && password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    // In a real implementation, this would save the account settings
    console.log('Saving account settings:', {
      name,
      email,
      passwordChanged: !!password
    });
    
    alert('Account settings saved successfully!');
  });

  // Profile picture upload
  const profilePictureUpload = document.getElementById('profile-picture-upload');
  const removePictureBtn = document.getElementById('remove-picture');
  const userAvatar = document.querySelector('.user-avatar');
  
  profilePictureUpload.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        userAvatar.innerHTML = `<img src="${e.target.result}" alt="Profile picture" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">`;
      };
      reader.readAsDataURL(file);
    }
  });
  
  removePictureBtn.addEventListener('click', function() {
    userAvatar.innerHTML = 'A';
    profilePictureUpload.value = '';
  });

  // Notification preferences
  const saveNotificationsBtn = document.getElementById('save-notifications');
  
  saveNotificationsBtn.addEventListener('click', function() {
    const emailNotifications = document.getElementById('notify-email').checked;
    const browserNotifications = document.getElementById('notify-browser').checked;
    const dailySummary = document.getElementById('notify-daily').checked;
    
    // In a real implementation, this would save the notification preferences
    console.log('Saving notification preferences:', {
      emailNotifications,
      browserNotifications,
      dailySummary
    });
    
    alert('Notification preferences saved successfully!');
  });

  // System settings
  const saveSystemBtn = document.getElementById('save-system');
  
  saveSystemBtn.addEventListener('click', function() {
    const schoolName = document.getElementById('settings-school').value.trim();
    const systemEmail = document.getElementById('settings-email-from').value.trim();
    const sessionTimeout = document.getElementById('settings-session').value;
    const maintenanceMode = document.getElementById('settings-maintenance').checked;
    
    // Validate inputs
    if (!schoolName) {
      alert('Please enter the school name');
      return;
    }
    
    if (!systemEmail) {
      alert('Please enter the system email');
      return;
    }
    
    // In a real implementation, this would save the system settings
    console.log('Saving system settings:', {
      schoolName,
      systemEmail,
      sessionTimeout,
      maintenanceMode
    });
    
    alert('System settings saved successfully!');
  });

  // Email configuration
  const testEmailBtn = document.getElementById('test-email');
  const saveEmailBtn = document.getElementById('save-email');
  
  testEmailBtn.addEventListener('click', function() {
    // In a real implementation, this would send a test email
    console.log('Sending test email');
    alert('Test email sent successfully!');
  });
  
  saveEmailBtn.addEventListener('click', function() {
    const smtpHost = document.getElementById('settings-smtp-host').value.trim();
    const smtpPort = document.getElementById('settings-smtp-port').value;
    const smtpSecurity = document.getElementById('settings-smtp-security').value;
    const smtpUsername = document.getElementById('settings-smtp-username').value.trim();
    const smtpPassword = document.getElementById('settings-smtp-password').value;
    
    // Validate inputs
    if (!smtpHost) {
      alert('Please enter the SMTP host');
      return;
    }
    
    if (!smtpPort) {
      alert('Please enter the SMTP port');
      return;
    }
    
    // In a real implementation, this would save the email configuration
    console.log('Saving email configuration:', {
      smtpHost,
      smtpPort,
      smtpSecurity,
      smtpUsername,
      passwordChanged: !!smtpPassword
    });
    
    alert('Email configuration saved successfully!');
  });

  // Theme settings
  const saveThemeBtn = document.getElementById('save-theme');
  
  saveThemeBtn.addEventListener('click', function() {
    const selectedTheme = document.querySelector('input[name="theme"]:checked').value;
    const autoTheme = document.getElementById('auto-theme').checked;
    
    // In a real implementation, this would apply the theme
    console.log('Saving theme settings:', {
      theme: selectedTheme,
      autoTheme
    });
    
    alert('Theme settings saved successfully!');
  });

  // Branding settings
  const saveBrandingBtn = document.getElementById('save-branding');
  const logoUpload = document.getElementById('settings-logo');
  const faviconUpload = document.getElementById('settings-favicon');
  
  logoUpload.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        document.querySelector('.logo-preview img').src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
  
  faviconUpload.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        document.querySelector('.favicon-preview img').src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
  
  saveBrandingBtn.addEventListener('click', function() {
    const primaryColor = document.getElementById('settings-primary-color').value;
    
    // In a real implementation, this would save the branding settings
    console.log('Saving branding settings:', {
      primaryColor,
      logoChanged: !!logoUpload.files[0],
      faviconChanged: !!faviconUpload.files[0]
    });
    
    alert('Branding settings saved successfully!');
  });

  // Security settings
  const saveSecurityBtn = document.getElementById('save-security');
  const ipRestrictionCheckbox = document.getElementById('settings-ip-restriction');
  const allowedIpsTextarea = document.getElementById('settings-allowed-ips');
  
  ipRestrictionCheckbox.addEventListener('change', function() {
    allowedIpsTextarea.disabled = !this.checked;
  });
  
  saveSecurityBtn.addEventListener('click', function() {
    const passwordPolicy = document.getElementById('settings-password-policy').value;
    const passwordExpiry = document.getElementById('settings-password-expiry').value;
    const require2FA = document.getElementById('settings-2fa').checked;
    const ipRestriction = ipRestrictionCheckbox.checked;
    const allowedIps = allowedIpsTextarea.value.trim();
    
    // In a real implementation, this would save the security settings
    console.log('Saving security settings:', {
      passwordPolicy,
      passwordExpiry,
      require2FA,
      ipRestriction,
      allowedIps
    });
    
    alert('Security settings saved successfully!');
  });

  // Backup settings
  const saveBackupSettingsBtn = document.getElementById('save-backup-settings');
  const createBackupBtn = document.getElementById('create-backup');
  const restoreBackupBtn = document.getElementById('restore-backup');
  
  saveBackupSettingsBtn.addEventListener('click', function() {
    const backupFrequency = document.getElementById('settings-backup-frequency').value;
    const backupRetention = document.getElementById('settings-backup-retention').value;
    const includeFiles = document.getElementById('settings-backup-include-files').checked;
    
    // In a real implementation, this would save the backup settings
    console.log('Saving backup settings:', {
      backupFrequency,
      backupRetention,
      includeFiles
    });
    
    alert('Backup settings saved successfully!');
  });
  
  createBackupBtn.addEventListener('click', function() {
    const backupDatabase = document.getElementById('backup-database').checked;
    const backupFiles = document.getElementById('backup-files').checked;
    const backupSettings = document.getElementById('backup-settings').checked;
    
    if (!backupDatabase && !backupFiles && !backupSettings) {
      alert('Please select at least one item to backup');
      return;
    }
    
    // In a real implementation, this would create a backup
    console.log('Creating backup:', {
      backupDatabase,
      backupFiles,
      backupSettings
    });
    
    alert('Backup created successfully!');
  });
  
  restoreBackupBtn.addEventListener('click', function() {
    const restoreFile = document.getElementById('restore-file').files[0];
    
    if (!restoreFile) {
      alert('Please select a backup file to restore');
      return;
    }
    
    if (!confirm('Are you sure you want to restore from this backup? This will overwrite all current data and cannot be undone.')) {
      return;
    }
    
    // In a real implementation, this would restore from the backup
    console.log('Restoring from backup:', restoreFile.name);
    
    alert('Backup restored successfully!');
  });
});
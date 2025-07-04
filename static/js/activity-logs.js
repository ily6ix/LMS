document.addEventListener('DOMContentLoaded', function() {
  // Grade section toggle functionality
  const gradeToggles = document.querySelectorAll('.grade-toggle');
  
  gradeToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
      const gradeSection = this.closest('.grade-section');
      const tableContainer = gradeSection.querySelector('.table-container');
      
      this.classList.toggle('collapsed');
      tableContainer.classList.toggle('collapsed');
    });
  });

  // Apply filters
  const applyFiltersBtn = document.getElementById('apply-filters');
  
  applyFiltersBtn.addEventListener('click', function() {
    const user = document.getElementById('log-user').value;
    const action = document.getElementById('log-action').value;
    const dateFrom = document.getElementById('log-date-from').value;
    const dateTo = document.getElementById('log-date-to').value;
    
    // In a real implementation, this would filter the logs based on the selected criteria
    console.log('Filtering logs:', {
      user,
      action,
      dateFrom,
      dateTo
    });
    
    // For demo purposes, show a message
    alert(`Filtering logs for ${user || 'all users'}, ${action || 'all actions'}, from ${dateFrom || 'any date'} to ${dateTo || 'any date'}`);
  });

  // Export logs
  const exportLogsBtn = document.getElementById('export-logs');
  
  exportLogsBtn.addEventListener('click', function() {
    // In a real implementation, this would export the logs to a file
    console.log('Exporting logs');
    
    // For demo purposes, show a message
    alert('Logs exported successfully!');
  });

  // Save log settings
  const saveLogSettingsBtn = document.getElementById('save-log-settings');
  
  saveLogSettingsBtn.addEventListener('click', function() {
    const logRetention = document.getElementById('log-retention').value;
    const logLogin = document.getElementById('log-login').checked;
    const logFailedLogin = document.getElementById('log-failed-login').checked;
    const logDataChanges = document.getElementById('log-data-changes').checked;
    const logExports = document.getElementById('log-exports').checked;
    
    // In a real implementation, this would save the log settings
    console.log('Saving log settings:', {
      logRetention,
      logLogin,
      logFailedLogin,
      logDataChanges,
      logExports
    });
    
    // For demo purposes, show a message
    alert('Log settings saved successfully!');
  });

  // Set default dates for date filters
  const today = new Date();
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(today.getDate() - 30);
  
  document.getElementById('log-date-from').value = formatDate(thirtyDaysAgo);
  document.getElementById('log-date-to').value = formatDate(today);

  // Helper function to format date as YYYY-MM-DD
  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
});
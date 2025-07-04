document.addEventListener('DOMContentLoaded', function() {
  // Grade section toggle functionality
  const gradeToggles = document.querySelectorAll('.grade-toggle');
  
  gradeToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
      const card = this.closest('.card');
      const tableContainer = card.querySelector('.table-container');
      
      this.classList.toggle('collapsed');
      tableContainer.classList.toggle('collapsed');
    });
  });

  // View history modal
  const viewHistoryButtons = document.querySelectorAll('.view-history');
  const historyModal = document.getElementById('history-modal');
  const closeHistoryModal = document.getElementById('close-history-modal');
  const cancelHistoryModal = document.getElementById('cancel-history-modal');
  
  viewHistoryButtons.forEach(button => {
    button.addEventListener('click', function() {
      const applicationId = this.getAttribute('data-id');
      // In a real implementation, this would fetch the status history data
      console.log('Viewing status history for application:', applicationId);
      historyModal.classList.add('show');
    });
  });
  
  closeHistoryModal.addEventListener('click', function() {
    historyModal.classList.remove('show');
  });
  
  cancelHistoryModal.addEventListener('click', function() {
    historyModal.classList.remove('show');
  });

  // Generate tracking link functionality
  const trackingApplicationInput = document.getElementById('tracking-application');
  const trackingLinkInput = document.getElementById('tracking-link');
  const generateLinkButton = document.querySelector('.btn-primary i.fa-link').parentNode;
  
  generateLinkButton.addEventListener('click', function() {
    const applicationId = trackingApplicationInput.value.trim();
    if (applicationId) {
      // In a real implementation, this would generate a unique tracking link
      const trackingLink = `https://awesomeschool.edu/track/${applicationId}-${generateRandomString(3)}`;
      trackingLinkInput.value = trackingLink;
    } else {
      alert('Please enter an application ID');
    }
  });

  // Copy tracking link functionality
  const copyButton = document.querySelector('.input-group .btn-outline');
  
  copyButton.addEventListener('click', function() {
    trackingLinkInput.select();
    document.execCommand('copy');
    this.textContent = 'Copied!';
    setTimeout(() => {
      this.textContent = 'Copy';
    }, 2000);
  });

  // Helper function to generate random string
  function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
});
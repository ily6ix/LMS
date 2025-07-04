document.addEventListener('DOMContentLoaded', function() {
  // Initialize applicants by grade chart
  const ctx = document.getElementById('applicantsByGradeChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'],
      datasets: [{
        label: 'Number of Applicants',
        data: [5, 8, 6, 9, 7, 4, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(255, 159, 64, 0.7)',
          'rgba(199, 199, 199, 0.7)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(199, 199, 199, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            precision: 0
          }
        }
      },
      plugins: {
        title: {
          display: true,
          text: 'Number of Applicants by Grade',
          font: {
            size: 16
          }
        },
        legend: {
          display: false
        }
      }
    }
  });

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

  // View application modal
  const viewButtons = document.querySelectorAll('.view-application');
  const applicationModal = document.getElementById('application-modal');
  const closeModal = document.getElementById('close-modal');
  const cancelModal = document.getElementById('cancel-modal');
  
  viewButtons.forEach(button => {
    button.addEventListener('click', function() {
      const applicationId = this.getAttribute('data-id');
      // In a real implementation, this would fetch the application data
      console.log('Viewing application:', applicationId);
      applicationModal.classList.add('show');
    });
  });
  
  closeModal.addEventListener('click', function() {
    applicationModal.classList.remove('show');
  });
  
  cancelModal.addEventListener('click', function() {
    applicationModal.classList.remove('show');
  });

  // Document modal
  const documentButtons = document.querySelectorAll('.document-btn');
  const documentsModal = document.getElementById('documents-modal');
  const closeDocumentsModal = document.getElementById('close-documents-modal');
  const cancelDocumentsModal = document.getElementById('cancel-documents-modal');
  
  documentButtons.forEach(button => {
    button.addEventListener('click', function() {
      const documentCount = this.getAttribute('data-documents');
      // In a real implementation, this would fetch the documents
      console.log('Viewing documents:', documentCount);
      documentsModal.classList.add('show');
    });
  });
  
  closeDocumentsModal.addEventListener('click', function() {
    documentsModal.classList.remove('show');
  });
  
  cancelDocumentsModal.addEventListener('click', function() {
    documentsModal.classList.remove('show');
  });
});
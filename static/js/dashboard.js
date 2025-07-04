document.addEventListener('DOMContentLoaded', function() {
  // Initialize charts
  const ctx = document.getElementById('applicationsChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'],
      datasets: [{
        label: 'Applications',
        data: [5, 8, 6, 9, 7, 4, 3],
        backgroundColor: '#3b82f6',
        borderColor: '#2563eb',
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
      }
    }
  });

  // Application toggle
  const applicationToggle = document.getElementById('application-toggle');
  
  applicationToggle.addEventListener('change', function() {
    // This would update the database in a real implementation
    console.log('Application status changed to:', this.checked ? 'Open' : 'Closed');
  });
});
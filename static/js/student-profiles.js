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

  // View student modal
  const viewButtons = document.querySelectorAll('.view-student');
  const studentModal = document.getElementById('student-modal');
  const closeStudentModal = document.getElementById('close-student-modal');
  const cancelStudentModal = document.getElementById('cancel-student-modal');
  
  viewButtons.forEach(button => {
    button.addEventListener('click', function() {
      const studentId = this.getAttribute('data-id');
      // In a real implementation, this would fetch the student data
      console.log('Viewing student:', studentId);
      studentModal.classList.add('show');
    });
  });
  
  closeStudentModal.addEventListener('click', function() {
    studentModal.classList.remove('show');
  });
  
  cancelStudentModal.addEventListener('click', function() {
    studentModal.classList.remove('show');
  });

  // Add/Edit student modal
  const addStudentBtn = document.getElementById('add-student-btn');
  const editStudentModal = document.getElementById('edit-student-modal');
  const closeEditModal = document.getElementById('close-edit-modal');
  const cancelEditModal = document.getElementById('cancel-edit-modal');
  
  addStudentBtn.addEventListener('click', function() {
    // Reset form fields if needed
    editStudentModal.classList.add('show');
  });
  
  closeEditModal.addEventListener('click', function() {
    editStudentModal.classList.remove('show');
  });
  
  cancelEditModal.addEventListener('click', function() {
    editStudentModal.classList.remove('show');
  });

  // Tab functionality
  const tabs = document.querySelectorAll('.tab');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const tabContainer = this.closest('.tabs');
      const tabContents = tabContainer.parentElement.querySelectorAll('.tab-content');
      const tabId = this.getAttribute('data-tab');
      
      // Update active tab
      tabContainer.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      
      // Show active tab content
      tabContents.forEach(content => content.classList.remove('active'));
      document.getElementById(`${tabId}-tab`).classList.add('active');
    });
  });

  // Search functionality
  const searchInput = document.getElementById('student-search');
  const gradeFilter = document.getElementById('student-grade');
  const searchButton = document.querySelector('.btn-primary i.fa-search').parentNode;
  
  searchButton.addEventListener('click', function() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const gradeValue = gradeFilter.value;
    
    // In a real implementation, this would filter the students based on search term and grade
    console.log('Searching for:', searchTerm, 'in grade:', gradeValue || 'All Grades');
    
    // For demo purposes, show a message
    alert(`Searching for: "${searchTerm}" in ${gradeValue ? 'Grade ' + gradeValue : 'All Grades'}`);
  });
});
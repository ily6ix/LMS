document.addEventListener('DOMContentLoaded', function() {
  // Tab functionality
  const tabs = document.querySelectorAll('.tab');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const tabId = this.getAttribute('data-tab');
      
      // Update active tab
      tabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      
      // Show active tab content
      const tabContents = document.querySelectorAll('.tab-content');
      tabContents.forEach(content => content.classList.remove('active'));
      document.getElementById(`${tabId}-tab`).classList.add('active');
    });
  });

  // View permissions modal
  const viewPermissionsButtons = document.querySelectorAll('.view-permissions');
  
  viewPermissionsButtons.forEach(button => {
    button.addEventListener('click', function() {
      const role = this.getAttribute('data-role');
      
      // In a real implementation, this would fetch the role permissions
      console.log('Viewing permissions for role:', role);
      
      // For demo purposes, just switch to the Applications tab
      document.querySelector('.tab[data-tab="applications"]').click();
    });
  });

  // Add/Edit role modal
  const addRoleBtn = document.getElementById('add-role-btn');
  const editRoleButtons = document.querySelectorAll('.edit-role');
  const roleModal = document.getElementById('role-modal');
  const closeRoleModal = document.getElementById('close-role-modal');
  const cancelRoleModal = document.getElementById('cancel-role-modal');
  const saveRoleBtn = document.getElementById('save-role');
  
  addRoleBtn.addEventListener('click', function() {
    // Reset form fields
    document.getElementById('role-name').value = '';
    document.getElementById('role-description').value = '';
    
    // Set default permissions
    document.getElementById('perm-view-applications').checked = true;
    document.getElementById('perm-approve-applications').checked = false;
    document.getElementById('perm-delete-applications').checked = false;
    document.getElementById('perm-export-applications').checked = false;
    
    document.getElementById('perm-view-students').checked = true;
    document.getElementById('perm-edit-students').checked = false;
    document.getElementById('perm-delete-students').checked = false;
    document.getElementById('perm-view-documents').checked = true;
    document.getElementById('perm-upload-documents').checked = false;
    
    document.getElementById('perm-view-blog').checked = true;
    document.getElementById('perm-create-blog').checked = false;
    document.getElementById('perm-edit-blog').checked = false;
    document.getElementById('perm-delete-blog').checked = false;
    document.getElementById('perm-publish-blog').checked = false;
    
    document.getElementById('perm-manage-users').checked = false;
    document.getElementById('perm-manage-roles').checked = false;
    document.getElementById('perm-view-logs').checked = true;
    document.getElementById('perm-system-settings').checked = false;
    document.getElementById('perm-send-notifications').checked = false;
    
    // Update modal title
    document.querySelector('#role-modal .modal-title').textContent = 'Add New Role';
    
    // Show modal
    roleModal.classList.add('show');
  });
  
  editRoleButtons.forEach(button => {
    button.addEventListener('click', function() {
      const role = this.getAttribute('data-role');
      
      // In a real implementation, this would fetch the role data
      console.log('Editing role:', role);
      
      // For demo purposes, set some values
      document.getElementById('role-name').value = this.closest('tr').cells[0].textContent;
      document.getElementById('role-description').value = this.closest('tr').cells[1].textContent;
      
      // Set permissions based on role
      if (role === 'administrator') {
        document.getElementById('perm-view-applications').checked = true;
        document.getElementById('perm-approve-applications').checked = true;
        document.getElementById('perm-delete-applications').checked = true;
        document.getElementById('perm-export-applications').checked = true;
        
        document.getElementById('perm-view-students').checked = true;
        document.getElementById('perm-edit-students').checked = true;
        document.getElementById('perm-delete-students').checked = true;
        document.getElementById('perm-view-documents').checked = true;
        document.getElementById('perm-upload-documents').checked = true;
        
        document.getElementById('perm-view-blog').checked = true;
        document.getElementById('perm-create-blog').checked = true;
        document.getElementById('perm-edit-blog').checked = true;
        document.getElementById('perm-delete-blog').checked = true;
        document.getElementById('perm-publish-blog').checked = true;
        
        document.getElementById('perm-manage-users').checked = true;
        document.getElementById('perm-manage-roles').checked = true;
        document.getElementById('perm-view-logs').checked = true;
        document.getElementById('perm-system-settings').checked = true;
        document.getElementById('perm-send-notifications').checked = true;
      } else if (role === 'reviewer') {
        document.getElementById('perm-view-applications').checked = true;
        document.getElementById('perm-approve-applications').checked = true;
        document.getElementById('perm-delete-applications').checked = false;
        document.getElementById('perm-export-applications').checked = true;
        
        document.getElementById('perm-view-students').checked = true;
        document.getElementById('perm-edit-students').checked = true;
        document.getElementById('perm-delete-students').checked = false;
        document.getElementById('perm-view-documents').checked = true;
        document.getElementById('perm-upload-documents').checked = true;
        
        document.getElementById('perm-view-blog').checked = true;
        document.getElementById('perm-create-blog').checked = false;
        document.getElementById('perm-edit-blog').checked = false;
        document.getElementById('perm-delete-blog').checked = false;
        document.getElementById('perm-publish-blog').checked = false;
        
        document.getElementById('perm-manage-users').checked = false;
        document.getElementById('perm-manage-roles').checked = false;
        document.getElementById('perm-view-logs').checked = true;
        document.getElementById('perm-system-settings').checked = false;
        document.getElementById('perm-send-notifications').checked = true;
      } else if (role === 'content') {
        document.getElementById('perm-view-applications').checked = false;
        document.getElementById('perm-approve-applications').checked = false;
        document.getElementById('perm-delete-applications').checked = false;
        document.getElementById('perm-export-applications').checked = false;
        
        document.getElementById('perm-view-students').checked = false;
        document.getElementById('perm-edit-students').checked = false;
        document.getElementById('perm-delete-students').checked = false;
        document.getElementById('perm-view-documents').checked = false;
        document.getElementById('perm-upload-documents').checked = false;
        
        document.getElementById('perm-view-blog').checked = true;
        document.getElementById('perm-create-blog').checked = true;
        document.getElementById('perm-edit-blog').checked = true;
        document.getElementById('perm-delete-blog').checked = true;
        document.getElementById('perm-publish-blog').checked = true;
        
        document.getElementById('perm-manage-users').checked = false;
        document.getElementById('perm-manage-roles').checked = false;
        document.getElementById('perm-view-logs').checked = true;
        document.getElementById('perm-system-settings').checked = false;
        document.getElementById('perm-send-notifications').checked = true;
      } else if (role === 'viewer') {
        document.getElementById('perm-view-applications').checked = true;
        document.getElementById('perm-approve-applications').checked = false;
        document.getElementById('perm-delete-applications').checked = false;
        document.getElementById('perm-export-applications').checked = false;
        
        document.getElementById('perm-view-students').checked = true;
        document.getElementById('perm-edit-students').checked = false;
        document.getElementById('perm-delete-students').checked = false;
        document.getElementById('perm-view-documents').checked = true;
        document.getElementById('perm-upload-documents').checked = false;
        
        document.getElementById('perm-view-blog').checked = true;
        document.getElementById('perm-create-blog').checked = false;
        document.getElementById('perm-edit-blog').checked = false;
        document.getElementById('perm-delete-blog').checked = false;
        document.getElementById('perm-publish-blog').checked = false;
        
        document.getElementById('perm-manage-users').checked = false;
        document.getElementById('perm-manage-roles').checked = false;
        document.getElementById('perm-view-logs').checked = true;
        document.getElementById('perm-system-settings').checked = false;
        document.getElementById('perm-send-notifications').checked = false;
      }
      
      // Update modal title
      document.querySelector('#role-modal .modal-title').textContent = 'Edit Role';
      
      // Show modal
      roleModal.classList.add('show');
    });
  });
  
  closeRoleModal.addEventListener('click', function() {
    roleModal.classList.remove('show');
  });
  
  cancelRoleModal.addEventListener('click', function() {
    roleModal.classList.remove('show');
  });
  
  saveRoleBtn.addEventListener('click', function() {
    const roleName = document.getElementById('role-name').value.trim();
    const roleDescription = document.getElementById('role-description').value.trim();
    
    // Validate inputs
    if (!roleName) {
      alert('Please enter a role name');
      return;
    }
    
    // In a real implementation, this would save the role data
    console.log('Saving role:', {
      name: roleName,
      description: roleDescription,
      permissions: {
        viewApplications: document.getElementById('perm-view-applications').checked,
        approveApplications: document.getElementById('perm-approve-applications').checked,
        deleteApplications: document.getElementById('perm-delete-applications').checked,
        exportApplications: document.getElementById('perm-export-applications').checked,
        
        viewStudents: document.getElementById('perm-view-students').checked,
        editStudents: document.getElementById('perm-edit-students').checked,
        deleteStudents: document.getElementById('perm-delete-students').checked,
        viewDocuments: document.getElementById('perm-view-documents').checked,
        uploadDocuments: document.getElementById('perm-upload-documents').checked,
        
        viewBlog: document.getElementById('perm-view-blog').checked,
        createBlog: document.getElementById('perm-create-blog').checked,
        editBlog: document.getElementById('perm-edit-blog').checked,
        deleteBlog: document.getElementById('perm-delete-blog').checked,
        publishBlog: document.getElementById('perm-publish-blog').checked,
        
        manageUsers: document.getElementById('perm-manage-users').checked,
        manageRoles: document.getElementById('perm-manage-roles').checked,
        viewLogs: document.getElementById('perm-view-logs').checked,
        systemSettings: document.getElementById('perm-system-settings').checked,
        sendNotifications: document.getElementById('perm-send-notifications').checked
      }
    });
    
    // Close modal
    roleModal.classList.remove('show');
    
    // Show success message
    alert('Role saved successfully!');
  });

  // Add/Edit user modal
  const addUserBtn = document.getElementById('add-user-btn');
  const editUserButtons = document.querySelectorAll('.edit-user');
  const userModal = document.getElementById('user-modal');
  const closeUserModal = document.getElementById('close-user-modal');
  const cancelUserModal = document.getElementById('cancel-user-modal');
  const saveUserBtn = document.getElementById('save-user');
  
  addUserBtn.addEventListener('click', function() {
    // Reset form fields
    document.getElementById('user-name').value = '';
    document.getElementById('user-email').value = '';
    document.getElementById('user-role').value = '';
    document.getElementById('user-password').value = '';
    document.getElementById('user-confirm-password').value = '';
    document.getElementById('send-welcome-email').checked = true;
    
    // Update modal title
    document.querySelector('#user-modal .modal-title').textContent = 'Add New User';
    
    // Show modal
    userModal.classList.add('show');
  });
  
  editUserButtons.forEach(button => {
    button.addEventListener('click', function() {
      const userId = this.getAttribute('data-id');
      
      // In a real implementation, this would fetch the user data
      console.log('Editing user:', userId);
      
      // For demo purposes, set some values
      document.getElementById('user-name').value = this.closest('tr').cells[0].textContent;
      document.getElementById('user-email').value = this.closest('tr').cells[1].textContent;
      document.getElementById('user-role').value = this.closest('tr').cells[2].textContent === 'Administrator' ? 'administrator' : 
                                                  this.closest('tr').cells[2].textContent === 'Application Reviewer' ? 'reviewer' :
                                                  this.closest('tr').cells[2].textContent === 'Content Manager' ? 'content' : 'viewer';
      document.getElementById('user-password').value = '';
      document.getElementById('user-confirm-password').value = '';
      document.getElementById('send-welcome-email').checked = false;
      
      // Update modal title
      document.querySelector('#user-modal .modal-title').textContent = 'Edit User';
      
      // Show modal
      userModal.classList.add('show');
    });
  });
  
  closeUserModal.addEventListener('click', function() {
    userModal.classList.remove('show');
  });
  
  cancelUserModal.addEventListener('click', function() {
    userModal.classList.remove('show');
  });
  
  saveUserBtn.addEventListener('click', function() {
    const userName = document.getElementById('user-name').value.trim();
    const userEmail = document.getElementById('user-email').value.trim();
    const userRole = document.getElementById('user-role').value;
    const userPassword = document.getElementById('user-password').value;
    const userConfirmPassword = document.getElementById('user-confirm-password').value;
    const sendWelcomeEmail = document.getElementById('send-welcome-email').checked;
    
    // Validate inputs
    if (!userName) {
      alert('Please enter a user name');
      return;
    }
    
    if (!userEmail) {
      alert('Please enter an email address');
      return;
    }
    
    if (!userRole) {
      alert('Please select a role');
      return;
    }
    
    if (userPassword && userPassword !== userConfirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    // In a real implementation, this would save the user data
    console.log('Saving user:', {
      name: userName,
      email: userEmail,
      role: userRole,
      password: userPassword ? '********' : '',
      sendWelcomeEmail
    });
    
    // Close modal
    userModal.classList.remove('show');
    
    // Show success message
    alert('User saved successfully!');
  });
});
document.addEventListener('DOMContentLoaded', function() {
  // Load sidebar
  const sidebarContainer = document.getElementById('sidebar-container');
  if (sidebarContainer) {
    sidebarContainer.innerHTML = `
      <aside class="sidebar" id="sidebar">
        <div class="sidebar-header">
          <i class="fas fa-graduation-cap"></i>
          <h2>Admin Portal</h2>
        </div>
        <nav class="sidebar-menu">
          <a href="dashboard.html" class="sidebar-menu-item" id="dashboard-link">
            <i class="fas fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </a>
          <a href="applications.html" class="sidebar-menu-item" id="applications-link">
            <i class="fas fa-file-alt"></i>
            <span>Applications</span>
          </a>
          <a href="status-tracking.html" class="sidebar-menu-item" id="status-tracking-link">
            <i class="fas fa-tasks"></i>
            <span>Status Tracking</span>
          </a>
          <a href="student-profiles.html" class="sidebar-menu-item" id="student-profiles-link">
            <i class="fas fa-user-graduate"></i>
            <span>Student Profiles</span>
          </a>
          <a href="notifications.html" class="sidebar-menu-item" id="notifications-link">
            <i class="fas fa-bell"></i>
            <span>Notifications</span>
          </a>
          <a href="user-roles.html" class="sidebar-menu-item" id="user-roles-link">
            <i class="fas fa-users-cog"></i>
            <span>User Roles</span>
          </a>
          <a href="blog-editor.html" class="sidebar-menu-item" id="blog-editor-link">
            <i class="fas fa-edit"></i>
            <span>Blog Editor</span>
          </a>
          <a href="activity-logs.html" class="sidebar-menu-item" id="activity-logs-link">
            <i class="fas fa-history"></i>
            <span>Activity Logs</span>
          </a>
        </nav>
        <div class="sidebar-footer">
          <a href="settings.html" class="sidebar-menu-item" id="settings-link">
            <i class="fas fa-cog"></i>
            <span>Settings</span>
          </a>
        </div>
      </aside>
    `;
  }

  // Load header
  const headerContainer = document.getElementById('header-container');
  if (headerContainer) {
    headerContainer.innerHTML = `
      <header class="header">
        <div class="header-left">
          <button class="toggle-sidebar" id="toggle-sidebar">
            <i class="fas fa-bars"></i>
          </button>
          <div class="header-search">
            <i class="fas fa-search"></i>
            <input type="text" placeholder="Search...">
          </div>
        </div>
        <div class="header-right">
          <div class="header-icon">
            <i class="fas fa-bell"></i>
            <span class="notification-badge">3</span>
          </div>
          <div class="header-icon">
            <i class="fas fa-envelope"></i>
            <span class="notification-badge">5</span>
          </div>
          <div class="user-profile">
            <div class="user-avatar">A</div>
            <span>Admin User</span>
          </div>
        </div>
      </header>
    `;
  }

  // Set active sidebar item based on current page
  const currentPage = window.location.pathname.split('/').pop();
  const currentLink = document.getElementById(`${currentPage.split('.')[0]}-link`);
  if (currentLink) {
    currentLink.classList.add('active');
  }

  // Mobile sidebar toggle
  const toggleSidebar = document.getElementById('toggle-sidebar');
  const sidebar = document.getElementById('sidebar');
  
  if (toggleSidebar && sidebar) {
    toggleSidebar.addEventListener('click', function() {
      sidebar.classList.toggle('show');
    });
  }
});
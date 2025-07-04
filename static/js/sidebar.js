document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const sidebar = document.getElementById('sidebar');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const closeSidebar = document.getElementById('closeSidebar');
    const submenuToggles = document.querySelectorAll('.submenu-toggle');
    
    // Toggle mobile menu
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            sidebar.classList.add('open');
        });
    }
    
    // Close sidebar on mobile
    if (closeSidebar) {
        closeSidebar.addEventListener('click', function() {
            sidebar.classList.remove('open');
        });
    }
    
    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(event) {
        const isClickInsideSidebar = sidebar.contains(event.target);
        const isClickOnMenuToggle = mobileMenuToggle.contains(event.target);
        
        if (!isClickInsideSidebar && !isClickOnMenuToggle && window.innerWidth <= 992) {
            sidebar.classList.remove('open');
        }
    });
    
    // Toggle submenus
    submenuToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            
            const menuItem = this.closest('.has-submenu');
            
            // Close other open submenus
            document.querySelectorAll('.has-submenu.open').forEach(item => {
                if (item !== menuItem) {
                    item.classList.remove('open');
                }
            });
            
            // Toggle current submenu
            menuItem.classList.toggle('open');
        });
    });
    
    // Collapse sidebar functionality (for future implementation)
    const collapseToggle = document.createElement('button');
    collapseToggle.className = 'collapse-toggle';
    collapseToggle.innerHTML = '<i class="fas fa-angle-double-left"></i>';
    collapseToggle.style.cssText = `
        position: absolute;
        top: 70px;
        right: -12px;
        background: var(--primary-color);
        color: white;
        border: none;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 12px;
        z-index: 101;
        display: none;
    `;
    
    sidebar.appendChild(collapseToggle);
    
    // Only show collapse toggle on desktop
    if (window.innerWidth > 992) {
        collapseToggle.style.display = 'flex';
    }
    
    collapseToggle.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
        
        if (sidebar.classList.contains('collapsed')) {
            this.innerHTML = '<i class="fas fa-angle-double-right"></i>';
        } else {
            this.innerHTML = '<i class="fas fa-angle-double-left"></i>';
        }
    });
    
    // Update UI based on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 992) {
            collapseToggle.style.display = 'flex';
        } else {
            collapseToggle.style.display = 'none';
            sidebar.classList.remove('collapsed');
        }
    });
    
    // Active menu item based on current page
    const currentPage = window.location.pathname.split('/').pop();
    
    if (currentPage) {
        const menuLinks = document.querySelectorAll('.sidebar-menu a');
        
        menuLinks.forEach(link => {
            const href = link.getAttribute('href');
            
            if (href === currentPage) {
                // Remove active class from all menu items
                document.querySelectorAll('.menu-item').forEach(item => {
                    item.classList.remove('active');
                });
                
                // Add active class to current menu item
                link.closest('.menu-item').classList.add('active');
                
                // If in submenu, open parent menu
                const parentSubmenu = link.closest('.submenu');
                if (parentSubmenu) {
                    parentSubmenu.closest('.has-submenu').classList.add('open');
                }
            }
        });
    }
});
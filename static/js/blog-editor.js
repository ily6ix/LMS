document.addEventListener('DOMContentLoaded', function() {
  // Editor functionality
  const editorButtons = document.querySelectorAll('.editor-btn');
  const editorContent = document.getElementById('editor-content');
  
  editorButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const command = this.getAttribute('data-command');
      const value = this.getAttribute('data-value') || '';
      
      if (command === 'createLink') {
        const url = prompt('Enter the link URL:');
        if (url) document.execCommand(command, false, url);
      } else if (command === 'insertImage') {
        const url = prompt('Enter the image URL:');
        if (url) document.execCommand(command, false, url);
      } else {
        document.execCommand(command, false, value);
      }
      
      // Focus back on editor
      editorContent.focus();
    });
  });

  // Create new post
  const createPostBtn = document.getElementById('create-post-btn');
  const editorCard = document.getElementById('editor-card');
  
  createPostBtn.addEventListener('click', function() {
    // Reset form fields
    document.getElementById('post-title').value = '';
    document.getElementById('post-excerpt').value = '';
    document.getElementById('editor-content').innerHTML = '<p>Start writing your blog post here...</p>';
    document.getElementById('post-category').value = '';
    document.getElementById('post-date').value = new Date().toISOString().split('T')[0]; // Today's date
    document.getElementById('post-status').value = 'draft';
    document.getElementById('post-featured-image').value = '';
    document.getElementById('image-preview').innerHTML = '';
    
    // Show editor card
    editorCard.style.display = 'block';
    
    // Scroll to editor
    editorCard.scrollIntoView({ behavior: 'smooth' });
  });

  // Cancel post
  const cancelPostBtn = document.getElementById('cancel-post');
  
  cancelPostBtn.addEventListener('click', function() {
    // Hide editor card
    editorCard.style.display = 'none';
  });

  // Save as draft
  const saveDraftBtn = document.getElementById('save-draft');
  
  saveDraftBtn.addEventListener('click', function() {
    // Set status to draft
    document.getElementById('post-status').value = 'draft';
    
    // Save post
    savePost();
  });

  // Publish post
  const publishPostBtn = document.getElementById('publish-post');
  
  publishPostBtn.addEventListener('click', function() {
    // Set status to published
    document.getElementById('post-status').value = 'published';
    
    // Save post
    savePost();
  });

  // Save post function
  function savePost() {
    const title = document.getElementById('post-title').value.trim();
    const excerpt = document.getElementById('post-excerpt').value.trim();
    const content = document.getElementById('editor-content').innerHTML;
    const category = document.getElementById('post-category').value;
    const date = document.getElementById('post-date').value;
    const status = document.getElementById('post-status').value;
    
    // Validate inputs
    if (!title) {
      alert('Please enter a post title');
      return;
    }
    
    if (!content || content === '<p>Start writing your blog post here...</p>') {
      alert('Please enter post content');
      return;
    }
    
    // In a real implementation, this would save the post data
    console.log('Saving post:', {
      title,
      excerpt,
      content,
      category,
      date,
      status
    });
    
    // Hide editor card
    editorCard.style.display = 'none';
    
    // Show success message
    alert('Post saved successfully!');
  }

  // Featured image preview
  const featuredImageInput = document.getElementById('post-featured-image');
  const imagePreview = document.getElementById('image-preview');
  
  featuredImageInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        imagePreview.innerHTML = `<img src="${e.target.result}" alt="Featured image preview">`;
      };
      reader.readAsDataURL(file);
    } else {
      imagePreview.innerHTML = '';
    }
  });

  // View post
  const viewPostButtons = document.querySelectorAll('.view-post');
  const viewPostModal = document.getElementById('view-post-modal');
  const closeViewModal = document.getElementById('close-view-modal');
  const closePreviewBtn = document.getElementById('close-preview');
  const editPreviewBtn = document.getElementById('edit-preview');
  
  viewPostButtons.forEach(button => {
    button.addEventListener('click', function() {
      const postId = this.getAttribute('data-id');
      
      // In a real implementation, this would fetch the post data
      console.log('Viewing post:', postId);
      
      // For demo purposes, we'll use the sample data in the HTML
      // In a real implementation, you would update these values with the fetched data
      
      // Show modal
      viewPostModal.classList.add('show');
    });
  });
  
  closeViewModal.addEventListener('click', function() {
    viewPostModal.classList.remove('show');
  });
  
  closePreviewBtn.addEventListener('click', function() {
    viewPostModal.classList.remove('show');
  });
  
  editPreviewBtn.addEventListener('click', function() {
    // Close view modal
    viewPostModal.classList.remove('show');
    
    // Set form values based on preview
    document.getElementById('post-title').value = document.getElementById('preview-title').textContent;
    document.getElementById('post-excerpt').value = ''; // This would be set from the fetched data
    document.getElementById('editor-content').innerHTML = document.getElementById('preview-content').innerHTML;
    document.getElementById('post-category').value = 'news'; // This would be set from the fetched data
    document.getElementById('post-date').value = '2023-05-15'; // This would be set from the fetched data
    document.getElementById('post-status').value = 'published';
    
    // Show editor card
    editorCard.style.display = 'block';
    
    // Scroll to editor
    editorCard.scrollIntoView({ behavior: 'smooth' });
  });

  // Edit post
  const editPostButtons = document.querySelectorAll('.edit-post');
  
  editPostButtons.forEach(button => {
    button.addEventListener('click', function() {
      const postId = this.getAttribute('data-id');
      
      // In a real implementation, this would fetch the post data
      console.log('Editing post:', postId);
      
      // For demo purposes, set some values
      document.getElementById('post-title').value = this.closest('tr').cells[0].textContent;
      document.getElementById('post-excerpt').value = '';
      document.getElementById('editor-content').innerHTML = '<p>This is the content of the post...</p>';
      document.getElementById('post-category').value = 'news';
      document.getElementById('post-date').value = '2023-05-15';
      document.getElementById('post-status').value = this.closest('tr').querySelector('.badge').textContent === 'Published' ? 'published' : 'draft';
      
      // Show editor card
      editorCard.style.display = 'block';
      
      // Scroll to editor
      editorCard.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Delete post
  const deletePostButtons = document.querySelectorAll('.delete-post');
  const deleteModal = document.getElementById('delete-modal');
  const closeDeleteModal = document.getElementById('close-delete-modal');
  const cancelDeleteBtn = document.getElementById('cancel-delete');
  const confirmDeleteBtn = document.getElementById('confirm-delete');
  let currentPostId = null;
  
  deletePostButtons.forEach(button => {
    button.addEventListener('click', function() {
      currentPostId = this.getAttribute('data-id');
      
      // Show delete confirmation modal
      deleteModal.classList.add('show');
    });
  });
  
  closeDeleteModal.addEventListener('click', function() {
    deleteModal.classList.remove('show');
  });
  
  cancelDeleteBtn.addEventListener('click', function() {
    deleteModal.classList.remove('show');
  });
  
  confirmDeleteBtn.addEventListener('click', function() {
    // In a real implementation, this would delete the post
    console.log('Deleting post:', currentPostId);
    
    // Close modal
    deleteModal.classList.remove('show');
    
    // Show success message
    alert('Post deleted successfully!');
  });
});
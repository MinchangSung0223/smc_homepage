document.addEventListener('DOMContentLoaded', () => {
    // Navigation
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = {
        'nav-about': document.getElementById('section-about'),
        'nav-blog': document.getElementById('section-blog'),
        'nav-portfolio': document.getElementById('section-portfolio'),
        'nav-cv': null, // Placeholder
        'section-write': document.getElementById('section-write') // New inline editor
    };
    const detailSection = document.getElementById('section-detail');

    // Make showSection globally available
    window.showSection = function (navId) {
        // Hide all sections
        Object.values(sections).forEach(sec => {
            if (sec) sec.style.display = 'none';
        });
        detailSection.style.display = 'none';

        // Show target section
        if (sections[navId]) {
            sections[navId].style.display = 'block';
        } else if (navId === 'section-detail') {
            detailSection.style.display = 'block';
        }

        // Update active nav
        navLinks.forEach(link => {
            if (link.id === navId) link.classList.add('active');
            else if (navId !== 'section-write' && navId !== 'section-detail') link.classList.remove('active');
        });

        // Special handling for Blog
        if (navId === 'nav-blog') {
            loadPosts();
        }

        window.scrollTo(0, 0);
    };

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            showSection(link.id);
        });
    });

    // Blog Logic
    const blogList = document.getElementById('blog-list');
    const postContent = document.getElementById('postContent');
    const noteForm = document.getElementById('noteForm');

    // Delete Modal Elements
    const deleteModal = document.getElementById('deleteModal');
    const deleteForm = document.getElementById('deleteForm');
    const closeDeleteModal = document.getElementById('closeDeleteModal');

    window.currentPostId = null; // Global for delete modal access
    let isEditMode = false;

    async function loadPosts() {
        try {
            const response = await fetch('/api/posts');
            const posts = await response.json();

            blogList.innerHTML = '';
            posts.forEach(post => {
                const div = document.createElement('div');
                div.className = 'post-item';
                div.innerHTML = `
                    <a href="#" class="post-title" data-id="${post.id}">${post.title}</a>
                    <div class="post-meta">${post.date} | ${post.tag}</div>
                    <div class="post-summary">${post.summary || ''}</div>
                `;
                div.querySelector('.post-title').addEventListener('click', (e) => {
                    e.preventDefault();
                    loadPostDetail(post.id);
                });
                blogList.appendChild(div);
            });
        } catch (error) {
            console.error('Error loading posts:', error);
            blogList.innerHTML = '<p>Failed to load posts.</p>';
        }
    }

    async function loadPostDetail(id) {
        try {
            const response = await fetch(`/api/posts/${id}`);
            const post = await response.json();

            window.currentPostId = id;

            // Render Markdown
            postContent.innerHTML = `
                <h1>${post.title}</h1>
                <div style="color: #666; margin-bottom: 2rem;">${post.date} | ${post.tag}</div>
                ${marked.parse(post.content)}
            `;

            // Render LaTeX
            renderMathInElement(postContent, {
                delimiters: [
                    { left: '$$', right: '$$', display: true },
                    { left: '$', right: '$', display: false }
                ],
                throwOnError: false
            });

            showSection('section-detail');

        } catch (error) {
            console.error('Error loading post:', error);
        }
    }

    // Back Button
    document.getElementById('backBtn').addEventListener('click', () => {
        showSection('nav-blog');
    });

    // Write / Edit Logic
    document.getElementById('writeBtn').addEventListener('click', () => {
        isEditMode = false;
        noteForm.reset();
        document.getElementById('writeTitle').textContent = 'New Post';
        showSection('section-write');
    });

    document.getElementById('editPostBtn').addEventListener('click', async () => {
        if (!window.currentPostId) return;
        try {
            const response = await fetch(`/api/posts/${window.currentPostId}`);
            const post = await response.json();

            isEditMode = true;
            document.getElementById('noteTitle').value = post.title;
            document.getElementById('noteTag').value = post.tag;
            document.getElementById('noteSummary').value = post.summary;
            document.getElementById('noteContent').value = post.content;
            document.getElementById('writeTitle').textContent = 'Edit Post';

            showSection('section-write');
        } catch (error) {
            console.error('Error loading for edit:', error);
        }
    });

    document.getElementById('cancelWriteBtn').addEventListener('click', () => {
        if (isEditMode && window.currentPostId) {
            showSection('section-detail');
        } else {
            showSection('nav-blog');
        }
    });

    // Note Form Submit
    noteForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const postData = {
            password: document.getElementById('notePassword').value,
            title: document.getElementById('noteTitle').value,
            tag: document.getElementById('noteTag').value,
            summary: document.getElementById('noteSummary').value,
            content: document.getElementById('noteContent').value
        };

        const url = isEditMode ? `/api/posts/${window.currentPostId}` : '/api/posts';
        const method = isEditMode ? 'PUT' : 'POST';

        try {
            const response = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(postData)
            });

            if (response.ok) {
                alert('Saved successfully');
                noteForm.reset();
                if (isEditMode) {
                    loadPostDetail(window.currentPostId);
                } else {
                    showSection('nav-blog');
                }
            } else {
                const data = await response.json();
                alert(data.error || 'Failed to save');
            }
        } catch (error) {
            console.error('Error saving:', error);
            alert('Server error');
        }
    });

    // Delete Logic
    document.getElementById('deletePostBtn').addEventListener('click', () => {
        if (!window.currentPostId) return;
        document.getElementById('deletePassword').value = '';
        deleteModal.style.display = 'flex';
    });

    closeDeleteModal.addEventListener('click', () => deleteModal.style.display = 'none');

    window.addEventListener('click', (e) => {
        if (e.target === deleteModal) deleteModal.style.display = 'none';
    });

    deleteForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const password = document.getElementById('deletePassword').value;

        try {
            const response = await fetch(`/api/posts/${window.currentPostId}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ password })
            });

            if (response.ok) {
                alert('Deleted successfully');
                deleteModal.style.display = 'none';
                showSection('nav-blog');
            } else {
                const data = await response.json();
                alert(data.error || 'Failed to delete');
            }
        } catch (error) {
            console.error('Error deleting:', error);
            alert('Server error');
        }
    });
});

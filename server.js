const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;
const POSTS_FILE = path.join(__dirname, 'posts.json');
const DEFAULT_PASSWORD = 'admin123';

app.use(bodyParser.json());
app.use(express.static(__dirname));

// Initialize posts.json if it doesn't exist
if (!fs.existsSync(POSTS_FILE)) {
    fs.writeFileSync(POSTS_FILE, JSON.stringify([], null, 2));
}

// Helper: Read posts from JSON
function readPosts() {
    const data = fs.readFileSync(POSTS_FILE, 'utf-8');
    const posts = JSON.parse(data);

    // Migration: Ensure all posts have a password
    let modified = false;
    posts.forEach(post => {
        if (!post.password) {
            post.password = DEFAULT_PASSWORD;
            modified = true;
        }
    });

    if (modified) {
        writePosts(posts);
    }

    return posts;
}

// Helper: Write posts to JSON
function writePosts(posts) {
    fs.writeFileSync(POSTS_FILE, JSON.stringify(posts, null, 2));
}

// Helper: Get next ID
function getNextId(posts) {
    if (posts.length === 0) return 1;
    return Math.max(...posts.map(p => p.id)) + 1;
}

// GET all posts
app.get('/api/posts', (req, res) => {
    try {
        const posts = readPosts();
        // Don't send passwords to client
        const safePosts = posts.map(({ password, ...rest }) => rest);
        res.json(safePosts.sort((a, b) => new Date(b.date) - new Date(a.date)));
    } catch (error) {
        console.error('Error reading posts:', error);
        res.status(500).json({ error: 'Failed to read posts' });
    }
});

// GET single post
app.get('/api/posts/:id', (req, res) => {
    try {
        const posts = readPosts();
        const post = posts.find(p => p.id === parseInt(req.params.id));
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }
        // Don't send password to client
        const { password, ...safePost } = post;
        res.json(safePost);
    } catch (error) {
        console.error('Error reading post:', error);
        res.status(500).json({ error: 'Failed to read post' });
    }
});

// CREATE post
app.post('/api/posts', (req, res) => {
    const { password, title, content, tag, summary } = req.body;

    if (!password) {
        return res.status(400).json({ error: 'Password is required' });
    }

    if (!title || !content) {
        return res.status(400).json({ error: 'Title and content are required' });
    }

    try {
        const posts = readPosts();
        const newPost = {
            id: getNextId(posts),
            title,
            content,
            tag: tag || 'General',
            summary: summary || '',
            date: new Date().toISOString().split('T')[0],
            password: password // Save per-post password
        };
        posts.push(newPost);
        writePosts(posts);
        res.json({ success: true, post: { ...newPost, password: undefined } });
    } catch (error) {
        console.error('Error creating post:', error);
        res.status(500).json({ error: 'Failed to create post' });
    }
});

// UPDATE post
app.put('/api/posts/:id', (req, res) => {
    const { password, title, content, tag, summary } = req.body;

    try {
        const posts = readPosts();
        const index = posts.findIndex(p => p.id === parseInt(req.params.id));

        if (index === -1) {
            return res.status(404).json({ error: 'Post not found' });
        }

        // Verify per-post password
        if (posts[index].password !== password) {
            return res.status(403).json({ error: 'Invalid password for this post' });
        }

        posts[index] = {
            ...posts[index],
            title: title || posts[index].title,
            content: content || posts[index].content,
            tag: tag || posts[index].tag,
            summary: summary || posts[index].summary
            // Password remains unchanged
        };

        writePosts(posts);
        res.json({ success: true, post: { ...posts[index], password: undefined } });
    } catch (error) {
        console.error('Error updating post:', error);
        res.status(500).json({ error: 'Failed to update post' });
    }
});

// DELETE post
app.delete('/api/posts/:id', (req, res) => {
    const { password } = req.body;

    try {
        const posts = readPosts();
        const post = posts.find(p => p.id === parseInt(req.params.id));

        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }

        // Verify per-post password
        if (post.password !== password) {
            return res.status(403).json({ error: 'Invalid password for this post' });
        }

        const filteredPosts = posts.filter(p => p.id !== parseInt(req.params.id));
        writePosts(filteredPosts);
        res.json({ success: true });
    } catch (error) {
        console.error('Error deleting post:', error);
        res.status(500).json({ error: 'Failed to delete post' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

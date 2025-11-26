const fs = require('fs');
const path = require('path');

const postsDir = path.join(__dirname, 'posts');
const outputFile = path.join(__dirname, 'posts.json');

// Ensure posts directory exists
if (!fs.existsSync(postsDir)) {
    fs.mkdirSync(postsDir);
    console.log('Created posts directory.');
}

const posts = [];

fs.readdirSync(postsDir).forEach(file => {
    if (path.extname(file) === '.md') {
        const content = fs.readFileSync(path.join(postsDir, file), 'utf-8');

        // Simple frontmatter parser
        const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---/;
        const match = content.match(frontmatterRegex);

        if (match) {
            const frontmatter = match[1];
            const metadata = {};

            frontmatter.split('\n').forEach(line => {
                const [key, ...value] = line.split(':');
                if (key && value) {
                    metadata[key.trim()] = value.join(':').trim().replace(/^"|"$/g, '');
                }
            });

            posts.push({
                filename: file,
                ...metadata
            });
        }
    }
});

// Sort by date descending
posts.sort((a, b) => new Date(b.date) - new Date(a.date));

fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2));
console.log(`Successfully indexed ${posts.length} posts to posts.json`);

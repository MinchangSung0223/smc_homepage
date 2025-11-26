const fs = require('fs');
const path = require('path');

const POSTS_FILE = path.join(__dirname, 'posts.json');
const DIRS_TO_IMPORT = ['etc', 'post', 'posts_old']; // Added posts_old just in case, as it has content
const DEFAULT_PASSWORD = 'sy3253';

// Read existing posts
let posts = [];
if (fs.existsSync(POSTS_FILE)) {
    posts = JSON.parse(fs.readFileSync(POSTS_FILE, 'utf-8'));
}

function getNextId() {
    if (posts.length === 0) return 1;
    return Math.max(...posts.map(p => p.id)) + 1;
}

function parseFrontmatter(content) {
    const frontmatterRegex = /^---\s*([\s\S]*?)\s*---\s*/;
    const match = content.match(frontmatterRegex);

    if (match) {
        const frontmatter = match[1];
        const body = content.replace(frontmatterRegex, '');
        const metadata = {};

        frontmatter.split('\n').forEach(line => {
            const [key, ...value] = line.split(':');
            if (key && value) {
                metadata[key.trim()] = value.join(':').trim().replace(/^['"](.*)['"]$/, '$1'); // Remove quotes
            }
        });

        return { metadata, body };
    }

    return { metadata: {}, body: content };
}

function importFiles() {
    DIRS_TO_IMPORT.forEach(dirName => {
        const dirPath = path.join(__dirname, dirName);
        if (!fs.existsSync(dirPath)) {
            console.log(`Directory not found: ${dirName}`);
            return;
        }

        const files = fs.readdirSync(dirPath);

        files.forEach(file => {
            if (path.extname(file).toLowerCase() !== '.md') return;
            if (file.toLowerCase() === 'readme.md') return; // Skip READMEs

            const filePath = path.join(dirPath, file);
            const content = fs.readFileSync(filePath, 'utf-8');
            const { metadata, body } = parseFrontmatter(content);

            // Determine fields
            const title = metadata.title || path.basename(file, '.md').replace(/-/g, ' ');
            const date = metadata.date || new Date().toISOString().split('T')[0];
            const tag = metadata.tag || dirName; // Use directory name as default tag
            const summary = metadata.summary || '';

            // Check for duplicates (simple check by title)
            if (posts.some(p => p.title === title)) {
                console.log(`Skipping duplicate: ${title}`);
                return;
            }

            const newPost = {
                id: getNextId(),
                title,
                content: body,
                tag,
                summary,
                date,
                password: DEFAULT_PASSWORD
            };

            posts.push(newPost);
            console.log(`Imported: ${title}`);
        });
    });

    fs.writeFileSync(POSTS_FILE, JSON.stringify(posts, null, 2));
    console.log('Import completed.');
}

importFiles();

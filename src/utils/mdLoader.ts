import i18n from "i18next";

export const loadMarkdownPosts = async () => {
    const currentLang = i18n.language || "en";

    const arabicFiles = import.meta.glob("../content/ar/*.md", { as: "raw" });
    const englishFiles = import.meta.glob("../content/en/*.md", { as: "raw" });

    const files = currentLang === "ar" ? arabicFiles : englishFiles;

    const posts = await Promise.all(
        Object.entries(files).map(async ([path, resolver]) => {
            const slug = path.split('/').pop()?.replace('.md', '') || 'unknown';
            const content = await resolver();

            const frontmatterMatch = content.match(/^---\s*\ntitle:\s*["']?(.*?)["']?\s*\n/);
            const markdownTitleMatch = content.match(/^# (.+)/m);

            const title = frontmatterMatch
                ? frontmatterMatch[1]
                : markdownTitleMatch
                    ? markdownTitleMatch[1]
                    : slug.replace(/-/g, ' ');

            const matchDate = content.match(/date:\s*(\S+)/);
            const date = matchDate ? matchDate[1] : 'unknown';

            const validDate = isValidDate(date) ? new Date(date) : new Date();

            const matchTags = content.match(/tags:\s*\[([^\]]+)\]/);
            const tags = matchTags ? matchTags[1].split(',').map(tag => tag.trim().replace(/['"]/g, '')) : [];

            const matchSummary = content.match(/summary:\s*["'](.*)["']/);
            const summary = matchSummary ? matchSummary[1] : 'No summary available.';

            const readingTime = calculateReadingTime(content);

            return {
                title,
                date: validDate.toISOString(),
                tags,
                lastmod: validDate.toISOString(),
                draft: false,
                summary,
                images: ["/static/images/twitter-card.png"],
                type: "Blog",
                readingTime,
                slug,
                path: `blog/${slug}`,
                filePath: `blog/${slug}.md`,
                toc: generateToc(content),
                structuredData: {
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "headline": title,
                    "datePublished": validDate.toISOString(),
                    "dateModified": validDate.toISOString(),
                    "description": summary,
                    "image": "/static/images/twitter-card.png",
                    "url": `https://example.com/blog/${slug}`,
                },
            };
        })
    );

    return posts;
};

const calculateReadingTime = (content: string) => {
    const words = content.split(/\s+/).length;
    const minutes = words / 200; // Average reading speed
    const time = minutes * 60 * 1000; // in milliseconds
    return {
        text: `${Math.ceil(minutes)} min read`,
        minutes,
        time,
        words,
    };
};

// Function to generate Table of Contents (TOC) from the Markdown content
const generateToc = (content: string) => {
    const toc = [];
    const regex = /^(##+)\s*(.+)/gm;
    let match;
    while ((match = regex.exec(content)) !== null) {
        const depth = match[1].length; // Depth is based on the number of hashes
        const value = match[2];
        const url = `#${value.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '')}`;
        toc.push({ value, url, depth });
    }
    return toc;
};

// Function to check if a date is valid
const isValidDate = (date: string) => {
    const parsedDate = new Date(date);
    return !isNaN(parsedDate.getTime());
};

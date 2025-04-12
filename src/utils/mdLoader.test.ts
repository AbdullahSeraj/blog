import { loadMarkdownPosts } from './mdLoader';

jest.mock('i18next', () => ({
    language: 'en',
}));

const mockContent = `
---
title: "Test Post"
date: 2024-01-01
tags: ["nuxt", "blog"]
summary: "This is a test post"
---

# Test Post

## Section 1
`;

jest.mock(
    '../content/en/post1.md',
    () => mockContent,
    { virtual: true }
);

describe('loadMarkdownPosts', () => {
    it('should load and parse markdown posts correctly', async () => {
        const files = {
            '../content/en/post1.md': async () => mockContent,
        };

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (global as any).importMeta = {
            glob: jest.fn(() => files),
        };

        const posts = await loadMarkdownPosts();

        expect(posts).toHaveLength(1);
        const post = posts[0];

        expect(post.title).toBe('Test Post');
        expect(post.slug).toBe('post1');
        expect(post.tags).toEqual(['nuxt', 'blog']);
        expect(post.summary).toBe('This is a test post');
        expect(post.readingTime.text).toMatch(/min read/);
        expect(post.toc).toEqual([
            { value: 'Section 1', url: '#section-1', depth: 2 },
        ]);
    });
});

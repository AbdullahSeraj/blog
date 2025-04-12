import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';
import { Post } from '../../types/post';
import { formatDate } from '../../utils/string';
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import remarkMath from 'remark-math';
import i18next from 'i18next';

interface CodeProps extends React.HTMLAttributes<HTMLElement> {
    inline?: boolean;
    className?: string;
    children?: React.ReactNode;
}

const BlogDetails: React.FC = () => {
    const currentLang = i18next.language || "en";

    const englishFiles = import.meta.glob("/src/content/en/*.md", { as: "raw", eager: false });
    const arabicFiles = import.meta.glob("/src/content/ar/*.md", { as: "raw", eager: false });

    const posts = currentLang === "ar" ? arabicFiles : englishFiles;

    const { slug } = useParams<{ slug: string }>();
    const [content, setContent] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const [post, setPost] = useState<Post | undefined>()

    function parseMarkdown(raw: string): { data: unknown | Post; content: string } {
        const match = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/m.exec(raw);
        if (!match) return { data: {}, content: raw };

        const frontmatterRaw = match[1];
        const content = match[2];

        const data = Object.fromEntries(
            frontmatterRaw.split('\n').map((line) => {
                const [key, ...rest] = line.split(':');
                return [key.trim(), rest.join(':').trim().replace(/^['"]|['"]$/g, '')];
            })
        );

        return { data, content };
    }

    useEffect(() => {
        const loadPost = async () => {
            try {
                const filePath = currentLang === "ar" ? `/src/content/ar/${slug}.md` : `/src/content/en/${slug}.md`;
                const importer = posts[filePath];

                if (!importer) {
                    setError('Post not found.');
                    return;
                }

                const rawContent = await importer();

                const { data, content } = parseMarkdown(rawContent);

                setPost(data as Post);
                setContent(content);
            } catch (e) {
                console.error('Markdown parsing error:', e);
                setError('Failed to load post.');
            }
        };

        if (slug) loadPost();
    }, [currentLang, posts, slug]);

    if (error) return <div className="text-red-500 text-center py-6">{error}</div>;
    if (!content) return <div className="text-center py-6">Loading...</div>;

    return (
        <div className="mx-auto py-8">
            <header className="pt-6 xl:pb-6">
                <div className="space-y-1 text-center">
                    <dl className="space-y-10">
                        <div>
                            <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                                {post?.date &&
                                    <time dateTime={post?.date}>{formatDate(post?.date || "", "en-US")}</time>
                                }
                            </dd>
                        </div>
                    </dl>
                    <div>
                        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 dark:text-gray-100">{post?.title}</h1>
                    </div>
                </div>
            </header>
            <article className="prose prose-lg dark:prose-invert max-w-none">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm, remarkMath]}
                    rehypePlugins={[rehypeHighlight, rehypeKatex]}
                    components={{
                        img: ({ ...props }) => (
                            <img {...props} className="rounded-lg shadow-lg my-4" />
                        ),
                        a: ({ ...props }) => (
                            <a {...props} className="text-pink-600 font-medium hover:text-pink-800 dark:text-pink-400 dark:hover:text-pink-300 underline" />
                        ),
                        h1: ({ ...props }) => (
                            <h1 {...props} className="text-4xl font-extrabold mt-10 mb-6 text-center text-gray-900 dark:text-gray-100" />
                        ),
                        h2: ({ ...props }) => (
                            <h2 {...props} className="text-2xl font-bold mt-8 mb-4" />
                        ),
                        h3: ({ ...props }) => (
                            <h3 {...props} className="text-xl font-bold mt-6 mb-3" />
                        ),
                        ul: ({ ...props }) => (
                            <ul {...props} className="list-disc list-inside my-4 space-y-2 text-gray-800 dark:text-gray-200" />
                        ),

                        ol: ({ ...props }) => (
                            <div className='ml-5'>
                                <ol
                                    {...props}
                                    className="list-decimal pl-3 space-y-3 text-gray-700 dark:text-gray-300"
                                />
                            </div>
                        ),
                        li: ({ ...props }) => (
                            <li {...props} className="leading-relaxed pl-3" />
                        ),
                        p: ({ ...props }) => (
                            <p
                                {...props}
                                className="text-base leading-7 text-gray-700 dark:text-gray-200 my-4"
                            />
                        ),
                        code({ inline, className, children, ...props }: CodeProps) {
                            const match = /language-(\w+)/.exec(className || '');

                            return !inline && match ? (
                                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 my-4">
                                    <div className="flex items-center text-gray-500 text-sm mb-2">
                                        <span className="bg-teal-500 w-3 h-3 rounded-full mr-2"></span>
                                        <span className="bg-yellow-500 w-3 h-3 rounded-full mr-2"></span>
                                        <span className="bg-red-500 w-3 h-3 rounded-full mr-2"></span>
                                        <span className="ml-auto">{match[1]}</span>
                                    </div>
                                    <pre className="overflow-x-auto">
                                        <code className={className} {...props}>
                                            {children}
                                        </code>
                                    </pre>
                                </div>
                            ) : (
                                <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm" {...props}>
                                    {children}
                                </code>
                            );
                        },
                        blockquote: ({ ...props }) => (
                            <blockquote
                                {...props}
                                className="border-l-4 border-pink-500 pl-4 italic my-4"
                            />
                        ),
                        video: ({ ...props }) => (
                            <div className="my-6">
                                <video {...props} className="rounded-lg shadow-lg w-full" controls />
                            </div>
                        ),
                    }}
                >
                    {content}
                </ReactMarkdown>
            </article>
        </div>
    );
};

export default BlogDetails;

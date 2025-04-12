export interface Post {
    slug: string;
    title: string;
    content?: string;
    date: string;
    lastmod: string;
    tags: string[];
    draft: boolean;
    summary: string;
    images: string[];
    type: string;
    readingTime: {
        text: string;
        minutes: number;
        time: number;
        words: number;
    };
    path: string;
    filePath: string;
    toc: Array<{
        value: string;
        url: string;
        depth: number;
    }>;
    structuredData: {
        "@context": string;
        "@type": string;
        headline: string;
        datePublished: string;
        dateModified: string;
        description: string;
        image: string;
        url: string;
    };
}
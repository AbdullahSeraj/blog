import React from 'react';
import ReactMarkdown from 'react-markdown';

type PostProps = {
    title: string;
    content: string;
};

export const Post: React.FC<PostProps> = ({ title, content }) => {
    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
};

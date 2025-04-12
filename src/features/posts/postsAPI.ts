import { loadMarkdownPosts } from '../../utils/mdLoader';
import { Post } from '../../types/post';

export const fetchPosts = async (): Promise<Post[]> => {
    const posts = await loadMarkdownPosts();
    return posts;
};

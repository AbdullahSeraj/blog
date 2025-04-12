import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post } from '../../types/post';

interface TagStat {
    title: string;
    count: number;
}

interface PostsState {
    posts: Post[];
    tags: TagStat[];
}

const initialState: PostsState = {
    posts: [],
    tags: [],
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts(state, action: PayloadAction<Post[]>) {
            const sortedPosts = action.payload.sort(
                (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
            );
            state.posts = sortedPosts;

            const tagMap: Record<string, number> = {};

            sortedPosts.forEach(post => {
                post.tags.forEach(tag => {
                    tagMap[tag] = (tagMap[tag] || 0) + 1;
                });
            });

            state.tags = Object.entries(tagMap).map(([title, count]) => ({
                title,
                count,
            }));
        },
    },
});

export const { setPosts } = postsSlice.actions;
export default postsSlice.reducer;

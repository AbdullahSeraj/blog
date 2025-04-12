import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import ListLayout from '../../components/ListLayoutWithTags';
import { RootState } from '../../app/store';

const POSTS_PER_PAGE = 5;

const Blog = () => {
    const { posts } = useSelector((state: RootState) => state.posts);
    const [searchParams] = useSearchParams();

    const pageNumber = parseInt(searchParams.get('page') || '1', 10);

    const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

    const start = (pageNumber - 1) * POSTS_PER_PAGE;
    const end = start + POSTS_PER_PAGE;
    const initialDisplayPosts = posts.slice(start, end);

    const pagination = {
        currentPage: pageNumber,
        totalPages: totalPages,
    };

    return (
        <ListLayout
            posts={posts}
            initialDisplayPosts={initialDisplayPosts}
            pagination={pagination}
            title="AllPosts"
        />
    );
};

export default Blog;

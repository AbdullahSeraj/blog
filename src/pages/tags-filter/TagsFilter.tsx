import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../app/store';
import ListLayout from '../../components/ListLayoutWithTags'
import { useEffect, useState } from 'react';
import { Post } from '../../types/post';

const POSTS_PER_PAGE = 5

const TagsFilter = () => {
    const { slug } = useParams<{ slug: string }>();
    const { posts } = useSelector((state: RootState) => state.posts)

    const [filterPosts, setFilterPosts] = useState<Post[]>(posts)

    useEffect(() => {
        setFilterPosts(posts.filter(post => post.tags.includes(slug || "")))
    }, [posts, slug])

    const pageNumber = 1
    const totalPages = Math.ceil(filterPosts.length / POSTS_PER_PAGE)
    const initialDisplayPosts = filterPosts.slice(0, POSTS_PER_PAGE * pageNumber)
    const pagination = {
        currentPage: pageNumber,
        totalPages: totalPages,
    }

    return (
        <ListLayout
            posts={filterPosts}
            initialDisplayPosts={initialDisplayPosts}
            pagination={pagination}
            title="All Posts"
        />
    )
}

export default TagsFilter
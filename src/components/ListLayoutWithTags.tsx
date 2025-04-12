import { Link, useLocation } from "react-router-dom"
import { formatDate } from "../utils/string"
import Tag from "./Tag"
import { Post } from "../types/post"
import Pagination from "./Pagination"
import { RootState } from "../app/store"
import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"

interface PaginationProps {
    totalPages: number
    currentPage: number
}
interface ListLayoutProps {
    posts: Post[]
    title: string
    initialDisplayPosts: Post[]
    pagination?: PaginationProps
}

const ListLayoutWithTags = ({ posts, initialDisplayPosts, pagination, title }: ListLayoutProps) => {
    const { t } = useTranslation()
    const { tags } = useSelector((state: RootState) => state.posts)
    const { pathname } = useLocation()

    const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts

    return (
        <div>
            <div className="pt-6 pb-6">
                <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:hidden sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
                    {title}
                </h1>
            </div>
            <div className="flex sm:gap-24">
                <div className="hidden h-full max-w-[280px] min-w-[280px] flex-wrap overflow-auto rounded-sm bg-gray-50 pt-5 shadow-md sm:flex dark:bg-gray-900 dark:shadow-gray-800">
                    <div className="px-6 py-4">
                        {pathname.startsWith('/blog') ? (
                            <h3 className="text-primary-500 font-bold uppercase">{t("AllPosts")}</h3>
                        ) : (
                            <Link
                                to={`/blog`}
                                className="hover:text-primary-500 dark:hover:text-primary-500 font-bold text-gray-700 uppercase dark:text-gray-300"
                            >
                                {t("AllPosts")}
                            </Link>
                        )}
                        <ul>
                            {tags.map((t, i) => {
                                return (
                                    <li key={i} className="my-3">
                                        {decodeURI(pathname.split('/tags/')[1]) === t.title ? (
                                            <h3 className="text-primary-500 inline px-3 py-2 text-sm font-bold uppercase">
                                                {`${t.title} (${t.count})`}
                                            </h3>
                                        ) : (
                                            <Link
                                                to={`/tags/${t.title}`}
                                                className="hover:text-primary-500 dark:hover:text-primary-500 px-3 py-2 text-sm font-medium text-gray-500 uppercase dark:text-gray-300"
                                                aria-label={`View posts tagged ${t}`}
                                            >
                                                {`${t.title} (${t.count})`}
                                            </Link>
                                        )}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="flex-1">
                    <ul>
                        {displayPosts.map((post) => {
                            const { path, date, title, summary, tags } = post
                            return (
                                <li key={path} className="py-5">
                                    <article className="flex flex-col space-y-2 xl:space-y-0">
                                        <dl>
                                            <dt className="sr-only">Published on</dt>
                                            <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                                                <time dateTime={date} suppressHydrationWarning>
                                                    {formatDate(date, 'en-US')}
                                                </time>
                                            </dd>
                                        </dl>
                                        <div className="space-y-3">
                                            <div>
                                                <h2 className="text-2xl leading-8 font-bold tracking-tight">
                                                    <Link to={`/${path}`} className="text-gray-900 dark:text-gray-100">
                                                        {title}
                                                    </Link>
                                                </h2>
                                                <div className="flex flex-wrap">
                                                    {tags?.map((tag) => <Tag key={tag} text={tag} />)}
                                                </div>
                                            </div>
                                            <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                                                {summary}
                                            </div>
                                        </div>
                                    </article>
                                </li>
                            )
                        })}
                    </ul>
                    {pagination && pagination.totalPages > 1 && (
                        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default ListLayoutWithTags
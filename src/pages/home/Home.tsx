import { useSelector } from 'react-redux'
import { RootState } from '../../app/store';
import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/string';
import Tag from '../../components/Tag';
import i18n from "i18next";
import { useTranslation } from 'react-i18next';

const MAX_DISPLAY = 5

const siteMetadata = {
    locale: 'en-US',
};

const Home = () => {
    const lang = i18n.language || "en";
    const { t } = useTranslation()
    const { posts } = useSelector((state: RootState) => state.posts)

    return (
        <>
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
                <div className="space-y-2 pt-6 pb-8 md:space-y-5">
                    <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
                        {t("Latest")}
                    </h1>
                    <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
                        {t("LatestDes")}
                    </p>
                </div>
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    {!posts.length && 'No posts found.'}
                    {posts.slice(0, MAX_DISPLAY).map((post) => {
                        const { slug, date, title, summary, tags } = post
                        return (
                            <li key={slug} className="py-12">
                                <article>
                                    <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                                        <dl>
                                            <dt className="sr-only">Published on</dt>
                                            <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                                                <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                                            </dd>
                                        </dl>
                                        <div className="space-y-5 xl:col-span-3">
                                            <div className="space-y-6">
                                                <div>
                                                    <h2 className="text-2xl leading-8 font-bold tracking-tight">
                                                        <Link
                                                            to={`/blog/${slug}`}
                                                            className="text-gray-900 dark:text-gray-100"
                                                        >
                                                            {title}
                                                        </Link>
                                                    </h2>
                                                    <div className="flex flex-wrap">
                                                        {tags.map((tag) => (
                                                            <Tag key={tag} text={tag} />
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                                                    {summary}
                                                </div>
                                            </div>
                                            <div className="text-base leading-6 font-medium">
                                                {lang === 'en' ?
                                                    <Link
                                                        to={`/blog/${slug}`}
                                                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                                        aria-label={`Read more: "${title}"`}
                                                    >
                                                        {t("ReadMore")} &rarr;
                                                    </Link>
                                                    :
                                                    <Link
                                                        to={`/blog/${slug}`}
                                                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                                        aria-label={`Read more: "${title}"`}
                                                    >
                                                        {t("ReadMore")} &larr;
                                                    </Link>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </li>
                        )
                    })}
                </ul>
            </div>
            {posts.length > MAX_DISPLAY && (
                <div className="flex justify-end text-base leading-6 font-medium">
                    {lang === 'en' ?
                        <Link
                            to="/blog"
                            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            aria-label="All posts"
                        >
                            {t("AllPosts")} &rarr;
                        </Link>
                        :
                        <Link
                            to="/blog"
                            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            aria-label="All posts"
                        >
                            {t("AllPosts")} &larr;
                        </Link>
                    }
                </div>
            )}
            <div className='flex justify-center gap-4 pt-4'>
                <div className=''>
                    <div className="pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100">{t("Subscribe")}</div>
                    <div className='flex  gap-4'>
                        <div className='border-2 border-gray-600 rounded-md'>
                            <input autoComplete="email" className="focus:ring-primary-600 w-72 rounded-md px-5 py-2 focus:border-transparent focus:outline-none focus:ring-2 dark:bg-black" id="email-input" placeholder={t("EnterEmail")} required type="email" name="email" />
                        </div>
                        <button className="bg-primary-500 w-fit rounded-md py-2 px-4 font-medium text-white sm:py-0 hover:bg-primary-700 dark:hover:bg-primary-400 focus:ring-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-black" type="submit">{t("SignUp")}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
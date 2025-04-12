import { Link } from 'react-router-dom'
import { slug } from 'github-slugger'
import Tag from '../../components/Tag'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'

const Tags = () => {
    const { t } = useTranslation()
    const isRTL = i18next.language === 'ar'
    const { tags } = useSelector((state: RootState) => state.posts)

    return (
        <>
            <div className='h-full'>
                <div className="flex flex-col items-start justify-start divide-y divide-gray-200 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0 dark:divide-gray-700">
                    <div className="space-x-2 pt-6 pb-8 md:space-y-5">
                        <h1 className={`text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 ${isRTL ? "md:border-l-2" : "md:border-r-2"} md:px-6 md:text-6xl md:leading-14 dark:text-gray-100`}>
                            {t("Tags")}
                        </h1>
                    </div>
                    <div className="flex gap-4 max-w-lg flex-wrap">
                        {tags.length === 0 && 'No tags found.'}
                        {tags.map((t, i) => {
                            return (
                                <div key={i} className="flex gap-1 mt-2 mb-2">
                                    <Tag text={t.title} />
                                    <Link
                                        to={`/tags/${slug(t.title)}`}
                                        className="-ml-2 text-sm font-semibold text-gray-600 uppercase dark:text-gray-300"
                                        aria-label={`View posts tagged ${t}`}
                                    >
                                        {` (${t.count})`}
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tags
import { useTranslation } from 'react-i18next'
import CustomLink from './CustomLink'
import i18next from 'i18next'

type Props = {
    title: string, description: string, imgSrc?: string, href?: string
}

const Card = ({ title, description, imgSrc, href }: Props) => {
    const { t } = useTranslation()
    const isRTL = i18next.language === 'ar'

    return (

        < div className="md max-w-[544px] p-4 md:w-1/2" >
            <div
                className={`${imgSrc && 'h-full'
                    } overflow-hidden rounded-md border-2 border-gray-200/60 dark:border-gray-700/60`}
            >
                {imgSrc &&
                    (href ? (
                        <CustomLink href={href} aria-label={`Link to ${title}`}>
                            <img
                                alt={title}
                                src={imgSrc}
                                className="object-cover object-center md:h-36 lg:h-48"
                                width={544}
                                height={306}
                            />
                        </CustomLink>
                    ) : (
                        <img
                            alt={title}
                            src={imgSrc}
                            className="object-cover object-center md:h-36 lg:h-48"
                            width={544}
                            height={306}
                        />
                    ))}
                <div className="p-6">
                    <h2 className="mb-3 text-2xl leading-8 font-bold tracking-tight">
                        {href ? (
                            <CustomLink href={href} aria-label={`Link to ${title}`}>
                                {title}
                            </CustomLink>
                        ) : (
                            title
                        )}
                    </h2>
                    <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
                    {href && (
                        isRTL ?
                            <CustomLink
                                href={href}
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-base leading-6 font-medium"
                                aria-label={`Link to ${title}`}
                            >
                                {t("LearnMore")} &larr;
                            </CustomLink>
                            :
                            <CustomLink
                                href={href}
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-base leading-6 font-medium"
                                aria-label={`Link to ${title}`}
                            >
                                {t("LearnMore")} &rarr;
                            </CustomLink>
                    )}
                </div>
            </div>
        </div >
    )
}

export default Card

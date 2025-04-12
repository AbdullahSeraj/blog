import { useTranslation } from 'react-i18next'
import Card from '../../components/Card'

interface Project {
    title: string
    description: string
    href?: string
    imgSrc?: string
}

export default function Projects() {
    const { t } = useTranslation()

    const projectsData: Project[] = [
        {
            title: t("Project1Title"),
            description: t("Project1Des"),
            imgSrc: '/static/images/google.png',
            href: 'https://www.google.com',
        },
        {
            title: t("Project2Title"),
            description: t("Project2Des"),
            imgSrc: '/static/images/time-machine.jpg',
            href: '/blog/the-time-machine',
        },
    ]

    return (
        <>
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
                <div className="space-y-2 pt-6 pb-8 md:space-y-5">
                    <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
                        {t("Projects")}
                    </h1>
                    <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
                        {t("ProjectsDes")}
                    </p>
                </div>
                <div className="container py-12">
                    <div className="-m-4 flex flex-wrap">
                        {projectsData.map((d) => (
                            <Card
                                key={d.title}
                                title={d.title}
                                description={d.description}
                                imgSrc={d.imgSrc}
                                href={d.href}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

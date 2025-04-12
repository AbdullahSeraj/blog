interface Props {
    children: React.ReactNode
}

const PageTitle = ({ children }: Props) => {
    return (
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 dark:text-gray-100">
            {children}
        </h1>
    )
}

export default PageTitle
import { slug } from 'github-slugger'
import { Link } from 'react-router-dom'
interface Props {
    text: string
}

const Tag = ({ text }: Props) => {
    return (
        <Link
            to={`/tags/${slug(text)}`}
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mr-3 text-sm font-medium uppercase"
        >
            {text}
        </Link>
    )
}

export default Tag

import { Link } from 'react-router-dom';
import React from 'react';

interface CustomLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, ...rest }) => {
    const isInternalLink = href && href.startsWith('/');
    const isAnchorLink = href && href.startsWith('#');

    if (isInternalLink) {
        return <Link className="break-words" to={href} {...rest} />;
    }

    if (isAnchorLink) {
        return <a className="break-words" href={href} {...rest} />;
    }

    return (
        <a
            className="break-words"
            target="_blank"
            rel="noopener noreferrer"
            href={href}
            {...rest}
        />
    );
};

export default CustomLink;

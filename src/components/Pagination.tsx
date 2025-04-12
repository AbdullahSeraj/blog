import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

interface PaginationProps {
    totalPages: number;
    currentPage: number;
}

const Pagination = ({ totalPages, currentPage }: PaginationProps) => {
    const { t } = useTranslation()
    const { pathname } = useLocation();
    const prevPage = currentPage - 1 > 0;
    const nextPage = currentPage + 1 <= totalPages;

    return (
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <nav className="flex justify-between items-center">
                {!prevPage ? (
                    <button className="cursor-auto opacity-50" disabled>
                        {t("Previous")}
                    </button>
                ) : (
                    <Link
                        to={`${pathname}?page=${currentPage - 1}`}
                        rel="prev"
                        className="text-blue-500 hover:underline"
                    >
                        {t("Previous")}
                    </Link>
                )}

                <span className="text-gray-600">
                    {t("Page")} {currentPage} {t("of")} {totalPages}
                </span>

                {!nextPage ? (
                    <button className="cursor-auto opacity-50" disabled>
                        {t("Next")}
                    </button>
                ) : (
                    <Link
                        to={`${pathname}?page=${currentPage + 1}`}
                        rel="next"
                        className="text-blue-500 hover:underline"
                    >
                        {t("Next")}
                    </Link>
                )}
            </nav>
        </div>
    );
};

export default Pagination;

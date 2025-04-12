import { useState } from "react";
import { RootState } from "../app/store";
import { useSelector } from "react-redux";
import { formatDate } from "../utils/string";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function SearchDialog() {
    const { t } = useTranslation()
    const { posts } = useSelector((state: RootState) => state.posts)
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");
    const navigation = useNavigate()

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(search.toLowerCase())
    );

    const handleClick = (slug: string) => {
        navigation(`/blog/${slug}`)
        setIsOpen(false)
    }

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="p-2 rounded-lg"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="hover:text-primary-500 dark:hover:text-primary-400 h-6 w-6 text-gray-900 dark:text-gray-100"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path></svg>
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/30 pt-24 px-4">
                    <div className="w-full max-w-md bg-white rounded-xl shadow-xl overflow-hidden">
                        <div className="border-b px-4 py-2">
                            <div className="flex items-center">
                                <input
                                    type="text"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder={t("Search")}
                                    className="w-full px-2 py-1 text-sm outline-none"
                                />
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="ml-2 text-sm text-gray-500 hover:text-gray-700"
                                >
                                    X
                                </button>
                            </div>
                        </div>

                        <div className="px-4 pt-2 text-xs font-semibold text-pink-600 uppercase">
                            {t("Content")}
                        </div>

                        <div className="max-h-80 overflow-y-auto">
                            {filteredPosts.map((post, idx) => (
                                <button
                                    key={idx}
                                    className="block w-full text-start px-4 py-3 cursor-pointer hover:bg-gray-100"
                                    onClick={() => handleClick(post.slug)}
                                >
                                    <div
                                        className="text-sm text-gray-500"
                                    >
                                        {formatDate(post.date, "en-US")}
                                    </div>
                                    <div
                                        className="text-sm font-medium text-black"
                                    >
                                        {post.title}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

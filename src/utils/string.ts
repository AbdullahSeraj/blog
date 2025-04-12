export const formatDate = (date: string | number | Date, locale: Intl.LocalesArgument) => {
    return new Date(date).toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' });
};
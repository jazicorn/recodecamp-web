/** API url | Custom env mandatory to begin with VITE
 * https://vitejs.dev/guide/env-and-mode.html#env-files */
const apiURL = import.meta.env.VITE_API_BASE_URL;

export const _QUESTION_ROUTE = (currentLanguage, getMenuRoute) => {
    return `${apiURL}/api/${currentLanguage}/${getMenuRoute}`
};

export const _CATEGORIES_ROUTE = (currentLanguage) => {
    return `${apiURL}/api/categories/${currentLanguage}`
};

export const _LANGUAGES_ROUTE = () => {
    return `${apiURL}/api/languages`
};

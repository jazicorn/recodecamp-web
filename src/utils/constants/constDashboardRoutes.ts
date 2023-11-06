/** API url | Custom env mandatory to begin with VITE
 * https://vitejs.dev/guide/env-and-mode.html#env-files */
const baseURL = import.meta.env.VITE_API_BASE_URL;

export const _QUESTION_ROUTE = (currentLanguage, getMenuRoute) => {
    if (import.meta.env.PROD) {
        return `${baseURL}/api/${currentLanguage}/${getMenuRoute}`
    } else {
        return `/api/${currentLanguage}/${getMenuRoute}`
    }
};

export const _CATEGORIES_ROUTE = (currentLanguage) => {
    if (import.meta.env.PROD) {
        return `${baseURL}/api/categories/${currentLanguage}`
    } else {
        return `api/categories/${currentLanguage}`
    }
};

export const _LANGUAGES_ROUTE = () => {
    if (import.meta.env.PROD) {
        return `${baseURL}/api/languages`
    } else {
        return `/api/languages`
    }
};

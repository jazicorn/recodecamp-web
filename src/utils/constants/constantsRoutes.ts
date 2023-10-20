/** API url | Custom env mandatory to begin with VITE
 * https://vitejs.dev/guide/env-and-mode.html#env-files */
const baseURL = import.meta.env.VITE_API_BASE_URL;

export const _USER_ROUTE_REGISTER = () => {
  if (import.meta.env.PROD) {
    return `${baseURL}/guest/new`;
  } else {
    return `/api/guest/new`;
  }
};

export const _USER_ROUTE_LOGIN = () => {
  if (import.meta.env.PROD) {
    return `${baseURL}/guest/login`;
  } else {
    return `/api/guest/login`;
  }
};

export const _USER_ROUTE_AUTH_ME = () => {
  if (import.meta.env.PROD) {
    return `${baseURL}/guest/auth/me`;
  } else {
    return `/api/guest/auth/me`;
  }
};

export const _USER_ROUTE_VERIFY = () => {
  if (import.meta.env.PROD) {
    return `${baseURL}/guest/verify`;
  } else {
    return `/api/guest/verify`;
  }
};

export const _USER_ROUTE_LOGOUT = () => {
  if (import.meta.env.PROD) {
    return `${baseURL}/guest/logout`;
  } else {
    return `/api/guest/logout`;
  }
};

export const _USER_ROUTE_DELETE = () => {
  if (import.meta.env.PROD) {
    return `${baseURL}/guest/delete`;
  } else {
    return `/api/guest/delete`;
  }
};

/** API url | Custom env mandatory to begin with VITE
 * https://vitejs.dev/guide/env-and-mode.html#env-files */
const baseURL = import.meta.env.VITE_API_BASE_URL;
const emailURL = import.meta.env.VITE_API_EMAIL_URL;

export const _USER_ROUTE_REGISTER = () => {
  if (import.meta.env.PROD) {
    return `${baseURL}/api/guest/new`;
  } else {
    return `/api/guest/new`;
  }
};

export const _USER_ROUTE_LOGIN = () => {
  if (import.meta.env.PROD) {
    return `${baseURL}/api/guest/login`;
  } else {
    return `/api/guest/login`;
  }
};

export const _USER_ROUTE_AUTH_ME = () => {
  if (import.meta.env.PROD) {
    return `${baseURL}/api/guest/auth/me`;
  } else {
    return `/api/guest/auth/me`;
  }
};

export const _USER_ROUTE_VERIFY = () => {
  if (import.meta.env.PROD) {
    return `${baseURL}/api/guest/verify`;
  } else {
    return `/api/guest/verify`;
  }
};

export const _USER_ROUTE_LOGOUT = () => {
  if (import.meta.env.PROD) {
    return `${baseURL}/api/guest/logout`;
  } else {
    return `/api/guest/logout`;
  }
};

export const _USER_ROUTE_DELETE = () => {
  if (import.meta.env.PROD) {
    return `${baseURL}/api/guest/delete`;
  } else {
    return `/api/guest/delete`;
  }
};

export const _USER_ROUTE_ACCOUNT_VERIFICATION = () => {
  if (import.meta.env.PROD) {
    return `${baseURL}/api/guest/verify/account`;
  } else {
    return `/api/guest/verify/account`;
  }
};

/** Send Email To User for Account Creation Confirmation */
export const _USER_ROUTE_ACCOUNT_CONFIRMATION_EMAIL = () => {
  if (import.meta.env.PROD) {
    return `${emailURL}/api/confirm/account`;
  } else {
    return `/api/confirm/account`;
  }
};

/**Validate User Confirmation Email URL */
export const _USER_ROUTE_ACCOUNT_VALIDATION = () => {
  if (import.meta.env.PROD) {
    return `${baseURL}/api/guest/validate/account`;
  } else {
    return `/api/guest/validate/account`;
  }
};

export const _USER_ROUTE_ACCOUNT_PASSWORD_RESET = () => {
  if (import.meta.env.PROD) {
    return `${baseURL}/api/guest/password/reset`;
  } else {
    return `/api/guest/password/reset`;
  }
};

export const _USER_ROUTE_ACCOUNT_PASSWORD_EMAIL_RESET = () => {
  if (import.meta.env.PROD) {
    return `${emailURL}/api/password/reset`;
  } else {
    return `/api/password/reset`;
  }
};

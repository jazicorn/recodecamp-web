'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports._USER_ROUTE_DELETE =
  exports._USER_ROUTE_LOGOUT =
  exports._USER_ROUTE_VERIFY =
  exports._USER_ROUTE_AUTH_ME =
  exports._USER_ROUTE_LOGIN =
  exports._USER_ROUTE_REGISTER =
    void 0
/** API url | Custom env mandatory to begin with VITE
 * https://vitejs.dev/guide/env-and-mode.html#env-files */
var baseURL = import.meta.env.VITE_API_BASE_URL
var _USER_ROUTE_REGISTER = function () {
  if (import.meta.env.PROD) {
    return ''.concat(baseURL, '/guest/new')
  } else {
    return '/api/guest/new'
  }
}
exports._USER_ROUTE_REGISTER = _USER_ROUTE_REGISTER
var _USER_ROUTE_LOGIN = function () {
  if (import.meta.env.PROD) {
    return ''.concat(baseURL, '/guest/login')
  } else {
    return '/api/guest/login'
  }
}
exports._USER_ROUTE_LOGIN = _USER_ROUTE_LOGIN
var _USER_ROUTE_AUTH_ME = function () {
  if (import.meta.env.PROD) {
    return ''.concat(baseURL, '/guest/auth/me')
  } else {
    return '/api/guest/auth/me'
  }
}
exports._USER_ROUTE_AUTH_ME = _USER_ROUTE_AUTH_ME
var _USER_ROUTE_VERIFY = function () {
  if (import.meta.env.PROD) {
    return ''.concat(baseURL, '/guest/verify')
  } else {
    return '/api/guest/verify'
  }
}
exports._USER_ROUTE_VERIFY = _USER_ROUTE_VERIFY
var _USER_ROUTE_LOGOUT = function () {
  if (import.meta.env.PROD) {
    return ''.concat(baseURL, '/guest/logout')
  } else {
    return '/api/guest/logout'
  }
}
exports._USER_ROUTE_LOGOUT = _USER_ROUTE_LOGOUT
var _USER_ROUTE_DELETE = function () {
  if (import.meta.env.PROD) {
    return ''.concat(baseURL, '/guest/delete')
  } else {
    return '/api/guest/delete'
  }
}
exports._USER_ROUTE_DELETE = _USER_ROUTE_DELETE

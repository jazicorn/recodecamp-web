'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports._LANGUAGES_RAPID_API =
  exports._LANGUAGES_CODE_MIRROR =
  exports._LANGUAGES_ALL =
  exports._LANGUAGES_SHORTHAND =
  exports.DEFAULT_USER =
    void 0;
/** Icons */
var javascript_original_svg_1 = require('../assets/tech/javascript/javascript-original.svg');
var java_original_svg_1 = require('../assets/tech/java/java-original.svg');
var python_original_svg_1 = require('../assets/tech/python/python-original.svg');
/**CodeMirror Languages */
var lang_javascript_1 = require('@codemirror/lang-javascript');
var lang_java_1 = require('@codemirror/lang-java');
var lang_python_1 = require('@codemirror/lang-python');
exports.DEFAULT_USER = {
  _ID: '123-456-789',
  _CREATED_AT: new Date().toISOString(),
  _UPDATED_AT: new Date().toISOString(),
  _ACCESS_TOKEN: '',
  _FIRST_LOGIN: false,
  _ADMIN: false,
  _SUBSCRIPTION: '1000, Unknown',
  _IP_ADDRESS: '',
  _PASSCODE: '',
  _PASSCODE_CONFIRMED: false,
  _EMAIL: '',
  _EMAIL_CONFIRMED: false,
  _EMAIL_PASSCODE: '',
  _PASSWORD: '',
  _DEFAULT_LANGUAGE: '',
  _DEFAULT_ROUTE: '',
  _POINTS_TOTAL: 0,
  _POINTS_JAVASCRIPT: 0,
  _POINTS_JAVA: 0,
  _POINTS_PYTHON: 0,
  _COURSES: '',
};
exports._LANGUAGES_SHORTHAND = {
  javascript: 'js',
  java: 'java',
  python: 'py',
};
exports._LANGUAGES_ALL = {
  javascript: javascript_original_svg_1.default,
  java: java_original_svg_1.default,
  python: python_original_svg_1.default,
};
exports._LANGUAGES_CODE_MIRROR = {
  javascript: (0, lang_javascript_1.javascript)({ jsx: true }),
  java: (0, lang_java_1.java)(),
  python: (0, lang_python_1.python)(),
};
exports._LANGUAGES_RAPID_API = {
  javascript: 93,
  java: 91,
  python: 92,
};

/** Icons */
import JS_Icon from '../assets/tech/javascript/javascript-original.svg';
import JAVA_Icon from '../assets/tech/java/java-original.svg';
import PY_Icon from '../assets/tech/python/python-original.svg';
/**CodeMirror Languages */
import { javascript } from '@codemirror/lang-javascript';
import { java } from '@codemirror/lang-java';
import { python } from '@codemirror/lang-python';

export const DEFAULT_USER = {
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

export const _LANGUAGES_SHORTHAND = {
  javascript: 'js',
  java: 'java',
  python: 'py',
};

export const _LANGUAGES_ALL = {
  javascript: JS_Icon,
  java: JAVA_Icon,
  python: PY_Icon,
};

export const _LANGUAGES_CODE_MIRROR = {
  javascript: javascript({ jsx: true }),
  java: java(),
  python: python(),
};

export const _LANGUAGES_RAPID_API = {
  javascript: 93,
  java: 91,
  python: 92,
};

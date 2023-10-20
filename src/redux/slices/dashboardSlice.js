'use strict'
var _a
Object.defineProperty(exports, '__esModule', { value: true })
exports.menuConsoleMessage =
  exports.menuPoints =
  exports.menuQuestion =
  exports.menuCategoryRoute =
  exports.menuCategoryInfo =
  exports.menuCategory =
  exports.menuLanguage =
  exports.menuLanguages =
  exports.menuUser =
  exports.menu =
  exports.dashboardSlice =
    void 0
var toolkit_1 = require('@reduxjs/toolkit')
// Define the initial state using that type
var initialState = {
  languages: ['javascript'],
  languageDefault: import.meta.env.VITE_DEFAULT_LANGUAGE,
  categoryDefault: import.meta.env.VITE_DEFAULT_CATEGORY,
  categoryRouteDefault: import.meta.env.VITE_DEFAULT_ROUTE,
  category: import.meta.env.VITE_DEFAULT_CATEGORY,
  language: import.meta.env.VITE_DEFAULT_LANGUAGE,
  categoryInfo: {},
  categoryRoute: import.meta.env.VITE_DEFAULT_ROUTE,
  question: {},
  points: 0,
  consoleMessage: '',
  user: {
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
    _EMAIL: 'john@doe.com',
    _EMAIL_CONFIRMED: false,
    _EMAIL_PASSCODE: '',
    _PASSWORD: '',
    _DEFAULT_LANGUAGE: 'javascript',
    _DEFAULT_ROUTE: '',
    _POINTS_TOTAL: 0,
    _POINTS_JAVASCRIPT: 0,
    _POINTS_JAVA: 0,
    _POINTS_PYTHON: 0,
    _COURSES: '',
  },
}
exports.dashboardSlice = (0, toolkit_1.createSlice)({
  name: 'dashboard',
  initialState: initialState,
  // `createSlice` will infer the state type from the `initialState` argument
  reducers: {
    menu: function (state) {
      state.languages
      state.language
      state.languageDefault
      state.category
      state.categoryDefault
      state.categoryInfo
      state.categoryRoute
      state.categoryRouteDefault
      state.question
      state.points
      state.consoleMessage
      state.user
    },
    menuLanguages: function (state, action) {
      state.languages = action.payload
    },
    menuLanguage: function (state, action) {
      state.language = action.payload
      state.categoryRoute = import.meta.env.VITE_DEFAULT_ROUTE
    },
    menuCategory: function (state, action) {
      state.category = action.payload
    },
    menuCategoryInfo: function (state, action) {
      state.categoryInfo = action.payload
    },
    menuCategoryRoute: function (state, action) {
      state.categoryRoute = action.payload
    },
    menuQuestion: function (state, action) {
      state.question = action.payload
      state.consoleMessage = ''
    },
    menuPoints: function (state, action) {
      state.points = action.payload
    },
    menuConsoleMessage: function (state, action) {
      state.consoleMessage = action.payload
    },
    menuUser: function (state, action) {
      state.user = action.payload
    },
  },
})
;(exports.menu = ((_a = exports.dashboardSlice.actions), _a.menu)),
  (exports.menuUser = _a.menuUser),
  (exports.menuLanguages = _a.menuLanguages),
  (exports.menuLanguage = _a.menuLanguage),
  (exports.menuCategory = _a.menuCategory),
  (exports.menuCategoryInfo = _a.menuCategoryInfo),
  (exports.menuCategoryRoute = _a.menuCategoryRoute),
  (exports.menuQuestion = _a.menuQuestion),
  (exports.menuPoints = _a.menuPoints),
  (exports.menuConsoleMessage = _a.menuConsoleMessage)
exports.default = exports.dashboardSlice.reducer
// Other code such as selectors can use the imported `RootState` type

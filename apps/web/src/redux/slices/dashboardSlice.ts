import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
interface DashboardState {
  languages: string[],
  languageDefault: string,
  categoryDefault: string,
  categoryRouteDefault: string,
  language: string,
  category: string,
  categoryInfo: object,
  categoryInfo2: object,
  categoryRoute: string,
  question: object,
  points: number,
  consoleMessage: string,
  user: object,
}

// Define the initial state using that type
const initialState: DashboardState = {
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
    _SUBSCRIPTION: "1000, Unknown",
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
    _POINTS_JAVA: 0 ,
    _POINTS_PYTHON: 0,
    _COURSES: '',
  },
}

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: initialState,
  // `createSlice` will infer the state type from the `initialState` argument
  reducers: {
    menu: (state) => {
      state.languages;
      state.language;
      state.languageDefault;
      state.category;
      state.categoryDefault;
      state.categoryInfo;
      state.categoryRoute;
      state.categoryRouteDefault;
      state.question;
      state.points;
      state.consoleMessage;
      state.user;
    },
    menuLanguages: (state, action) => {
      state.languages = action.payload;
    },
    menuLanguage: (state, action) => {
      state.language = action.payload;
    },
    menuCategory: (state, action) => {
      state.category = action.payload;
    },
    menuCategoryInfo: (state, action) => {
      state.categoryInfo = action.payload;
    },
    menuCategoryRoute: (state, action) => {
      state.categoryRoute = action.payload;
    },
    menuQuestion: (state, action) => {
      state.question = action.payload;
      state.consoleMessage = '';
    },
    menuPoints: (state, action) => {
      state.points = action.payload;
    },
    menuConsoleMessage: (state, action) => {
      state.consoleMessage = action.payload;
    },
    menuUser: (state, action) => {
      state.user = action.payload;
    }
  },
});

export const { menu, menuUser, menuLanguages, menuLanguage, menuCategory, menuCategoryInfo, menuCategoryRoute, menuQuestion, menuPoints, menuConsoleMessage } = dashboardSlice.actions

export default dashboardSlice.reducer;

// Other code such as selectors can use the imported `RootState` type

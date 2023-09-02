import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
interface DashboardState {
  languageDefault: string,
  categoryDefault: string,
  categoryRouteDefault: string,
  language: string,
  category: string,
  categoryRoute: string,
  question: object,
  points: number,
  consoleMessage: string,
}

// Define the initial state using that type
const initialState: DashboardState = {
  languageDefault: import.meta.env.VITE_DEFAULT_LANGUAGE,
  categoryDefault: import.meta.env.VITE_DEFAULT_CATEGORY,
  categoryRouteDefault: import.meta.env.VITE_DEFAULT_ROUTE,
  category: import.meta.env.VITE_DEFAULT_CATEGORY,
  categoryRoute: import.meta.env.VITE_DEFAULT_ROUTE,
  question: {},
  points: 0,
  consoleMessage: '',
}

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: initialState,
  // `createSlice` will infer the state type from the `initialState` argument
  reducers: {
    menu: (state) => {
      state.language;
      state.languageDefault;
      state.category;
      state.categoryDefault;
      state.categoryRoute;
      state.categoryRouteDefault;
      state.question;
      state.points;
      state.consoleMessage;
    },
    menuLanguage: (state, action) => {
      state.language = action.payload;
    },
    menuCategory: (state, action) => {
      state.category = action.payload;
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
  },
});

export const { menu, menuLanguage, menuCategory, menuCategoryRoute, menuQuestion, menuPoints, menuConsoleMessage } = dashboardSlice.actions

export default dashboardSlice.reducer;

// Other code such as selectors can use the imported `RootState` type

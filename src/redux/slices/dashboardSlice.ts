import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { _DEFAULT_USER } from '../../utils/constants/constUser';
import { _QUESTION_ROUTE, _CATEGORIES_ROUTE, _LANGUAGES_ROUTE } from '../../utils/constants/constDashboardRoutes';

export const dashboardLanguages = createAsyncThunk('dashboard/languages', async (data, thunkAPI) => {
  try {
    const url = _LANGUAGES_ROUTE();
    const res = await fetch(url, {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json', 
      },
      body: JSON.stringify(data),
    });

    const resJSON = await res.json();
    return resJSON;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export const dashboardCategories = createAsyncThunk('dashboard/categories', async (data, thunkAPI) => {
  try {
    const url = _CATEGORIES_ROUTE();
    const res = await fetch(url, {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json', 
      },
      body: JSON.stringify(data),
    });

    const resJSON = await res.json();
    return resJSON;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export const dashboardQuestion = createAsyncThunk('dashboard/question', async (data, thunkAPI) => {
  try {
    const url = _QUESTION_ROUTE();
    const res = await fetch(url, {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json', 
      },
      body: JSON.stringify(data),
    });

    const resJSON = await res.json();
    return resJSON;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

// Define a type for the slice state
interface DashboardState {
  user: object;
  points: number;
  language: string;
  languageDefault: string;
  languages: string[];
  categoryDefault: string;
  categoryRouteDefault: string;
  category: string;
  categoryInfo: object;
  categoryInfo2: object;
  categoryRoute: string;
  categories: string[];
  question: object;
  consoleMessage: string;
  statusDashboardQuestion: string;
  statusDashboardCategories: string;
  statusDashboardLanguages: string;
  errorDashboardQuestion: null | string;
  errorDashboardCategories: null | string;
  errorDashboardLanguages: null | string;
}

// Define the initial state using that type
const initialState: DashboardState = {
  user: _DEFAULT_USER,
  points: 0,
  language: import.meta.env.VITE_DEFAULT_LANGUAGE,
  languageDefault: import.meta.env.VITE_DEFAULT_LANGUAGE,
  languages: ['javascript'],
  category: import.meta.env.VITE_DEFAULT_CATEGORY,
  categoryDefault: import.meta.env.VITE_DEFAULT_CATEGORY,
  categoryRoute: import.meta.env.VITE_DEFAULT_ROUTE,
  categoryRouteDefault: import.meta.env.VITE_DEFAULT_ROUTE,
  categoryInfo: {},
  categories:[''],
  question: {},
  consoleMessage: '',
  statusDashboardQuestion: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  statusDashboardCategories: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  statusDashboardLanguages: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  errorDashboardQuestion: null,
  errorDashboardCategories: null,
  errorDashboardLanguages: null,
};

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: initialState,
  // `createSlice` will infer the state type from the `initialState` argument
  reducers: {
    menuLanguages: (state, action) => {
      state.languages = action.payload;
    },
    menuLanguage: (state, action) => {
      state.language = action.payload;
      state.categoryRoute = import.meta.env.VITE_DEFAULT_ROUTE;
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
    },
  },
  extraReducers(builder) {
    builder
      .addCase(dashboardQuestion.pending, (state, action) => {
        state.statusDashboardQuestion = 'loading';
      })
      .addCase(dashboardQuestion.fulfilled, (state, action) => {
        state.question = action.payload.data;
        state.statusDashboardQuestion = 'succeeded';
      })
      .addCase(dashboardQuestion.rejected, (state, action) => {
        state.statusDashboardQuestion = 'failed';
        state.errorDashboardQuestion = action.error.message;
      })
      .addCase(dashboardCategories.pending, (state, action) => {
        state.statusDashboardCategories = 'loading';
      })
      .addCase(dashboardCategories.fulfilled, (state, action) => {
        state.categories = action.payload.data;
        state.statusDashboardCategories = 'succeeded';
      })
      .addCase(dashboardCategories.rejected, (state, action) => {
        state.statusDashboardCategories = 'failed';
        state.errorDashboardCategories = action.error.message;
      })
      .addCase(dashboardLanguages.pending, (state, action) => {
        state.statusDashboardLanguages = 'loading';
      })
      .addCase(dashboardLanguages.fulfilled, (state, action) => {
        state.languages = action.payload.data;
        state.statusDashboardLanguages = 'succeeded';
      })
      .addCase(dashboardLanguages.rejected, (state, action) => {
        state.statusDashboardLanguages = 'failed';
        state.errorDashboardLanguages = action.error.message;
      })
    },
});

/** Fetch API's */
export const fetchQuestion = (state) => state.dashboard.question;

export const fetchCategories = (state) => state.dashboard.categories;

export const fetchLanguages = (state) => state.dashboard.languages;

/** Fetch API's Status */
export const fetchQuestionStatus = (state) => state.dashboard.statusDashboardQuestion;

export const fetchCategoriesStatus = (state) => state.dashboard.statusDashboardCategories;

export const fetchLanguagesStatus = (state) => state.dashboard.statusDashboardLanguages;

export const {
  menu,
  menuUser,
  menuLanguages,
  menuLanguage,
  menuCategory,
  menuCategoryInfo,
  menuCategoryRoute,
  menuQuestion,
  menuPoints,
  menuConsoleMessage,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;

// Other code such as selectors can use the imported `RootState` type

import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
/** Notifications */
import { notifications } from '@mantine/notifications';
import { IconX, IconCheck } from '@tabler/icons-react';
import { _DEFAULT_USER } from '../../utils/constants/constantsUser';
import {
  _USER_ROUTE_REGISTER,
  _USER_ROUTE_LOGIN,
  _USER_ROUTE_AUTH_ME,
  _USER_ROUTE_VERIFY,
  _USER_ROUTE_LOGOUT,
  _USER_ROUTE_DELETE,
} from '../../utils/constants/constantsRoutes';

export const userRegister = createAsyncThunk('auth/register', async (data, thunkAPI) => {
  try {
    const url = _USER_ROUTE_REGISTER();
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const resJSON = await res.json();
    return resJSON;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export const userLogin = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    const url = _USER_ROUTE_LOGIN();
    //console.log(url)
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });

    const resJSON = await res.json();
    return resJSON.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export const userAuthMe = createAsyncThunk('auth/me', async (_, thunkAPI) => {
  try {
    const url = _USER_ROUTE_AUTH_ME();
    const res = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    const resJSON = await res.json();
    return resJSON.data;
  } catch (err) {
    //console.log(err)
    return thunkAPI.rejectWithValue('Authentication Error');
  }
});

export const userVerify = createAsyncThunk('auth/verify', async (_, thunkAPI) => {
  try {
    const url = await _USER_ROUTE_VERIFY();
    const res = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    const resJSON = await res.json();
    return resJSON.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export const userLogout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const url = _USER_ROUTE_LOGOUT();
    //console.log("logouturl:", url)
    const res = await fetch(url, {
      method: 'DELETE',
    });

    const resJSON = await res.json();
    return resJSON;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export const userDelete = createAsyncThunk('auth/delete', async (user, thunkAPI) => {
  //console.log(user)
  try {
    const url = _USER_ROUTE_DELETE();
    //console.log("logouturl:", url)
    const res = await fetch(url, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });

    const resJSON = await res.json();
    return resJSON;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

// Define a type for the slice state
interface AuthState {
  user: object;
  authenticated: boolean;
  status: string;
  error: null;
  screenLoader: boolean;
  userLandingScreenLoader: boolean;
  userComponentScreenLoader: boolean;
}

// Define the initial state using that type
const defaultState: AuthState = {
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
  authenticated: false,
  status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  screenLoader: false,
  userLandingScreenLoader: false,
  userComponentScreenLoader: false,
};

export const authSlice = createSlice({
  name: 'authentication',
  initialState: defaultState,
  // `createSlice` will infer the state type from the `initialState` argument
  reducers: {
    stateUser: {
      reducer(state) {
        state.user;
      },
    },
    validUser: {
      reducer(state, action) {
        if (state.user === undefined || Object.keys(state.user).length === 0) {
          state.authenticated = false;
        } else {
          if (
            state.user._ID === null ||
            state.user._ID.trim() === '123-456-789' ||
            state.user._ID.trim().length <= 16
          ) {
            state.authenticated = false;
          } else {
            state.authenticated = true;
          }
        }
      },
    },
    updateUser: {
      reducer(state, action) {
        state.user = action.payload;
      },
      prepare() {
        return {
          payload: {},
        };
      },
    },
    updateStatus: {
      reducer(state, action) {
        state.status = action.payload;
      },
      prepare() {
        return {
          payload: {},
        };
      },
    },
    updateAuthentication: {
      reducer(state, action) {
        state.authenticated = action.payload;
      },
      prepare() {
        return {
          payload: {},
        };
      },
    },
    screenLoader: {
      reducer(state, action) {
        state.screenLoader = action.payload;
      },
    },
    userLandingScreenLoader: {
      reducer(state, action) {
        state.userLandingScreenLoader = action.payload;
      },
    },
    userComponentScreenLoader: {
      reducer(state, action) {
        state.userComponentScreenLoader = action.payload;
      },
    },
  },
  extraReducers(builder) {
    builder
      .addCase(userRegister.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        state.status = 'succeeded';
      })
      .addCase(userRegister.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(userLogin.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
        validUser(action.payload);
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(userAuthMe.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(userAuthMe.fulfilled, (state, action) => {
        state.status = 'succeeded';
        //console.log(action.payload)
        validUser(action.payload);
      })
      .addCase(userAuthMe.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(userVerify.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(userVerify.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
        validUser(action.payload);
      })
      .addCase(userVerify.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(userLogout.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(userLogout.fulfilled, (state, action) => {
        state.status = 'succeeded';
      })
      .addCase(userLogout.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(userDelete.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(userDelete.fulfilled, (state, action) => {
        state.status = 'succeeded';
      })
      .addCase(userDelete.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const fetchUser = (state) => state.authentication.user;

export const fetchUserAuth = (state) => state.authentication.authenticated;

export const fetchUserStatus = (state) => state.authentication.status;

export const fetchUserError = (state) => state.authentication.error;

export const fetchUserScreenLoader = (state) => state.authentication.screenLoader;

export const fetchUserLandingScreenLoader = (state) => state.authentication.userLandingScreenLoader;

export const fetchUserComponentScreenLoader = (state) => state.authentication.userComponentScreenLoader;

export const {
  stateUser,
  validUser,
  updateUser,
  updateStatus,
  updateAuthentication,
  screenLoader,
  userLandingScreenLoader,
  userComponentScreenLoader,
} = authSlice.actions;

export default authSlice.reducer;

// Other code such as selectors can use the imported `RootState` type

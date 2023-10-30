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
  _USER_ROUTE_ACCOUNT_VERIFICATION,
  _USER_ROUTE_ACCOUNT_CONFIRMATION,
  _USER_ROUTE_ACCOUNT_VALIDATION,
  _USER_ROUTE_ACCOUNT_PASSWORD_RESET,
} from '../../utils/constants/constantsRoutes';

export const userRegister = createAsyncThunk('auth/register', async (data, thunkAPI) => {
  try {
    const url = _USER_ROUTE_REGISTER();
    const res = await fetch(url, {
      method: 'POST',
      mode: 'same-origin',
      redirect: 'follow',
      credentials: 'include',
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

export const userLogin = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    const url = _USER_ROUTE_LOGIN();
    //console.log(url)
    const res = await fetch(url, {
      method: 'POST',
      mode: 'same-origin',
      redirect: 'follow',
      credentials: 'include',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json', 
      },
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
      mode: 'same-origin',
      redirect: 'follow',
      credentials: 'include',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json', 
      },
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
      mode: 'same-origin',
      redirect: 'follow',
      credentials: 'include',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json', 
      },
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
      mode: 'same-origin',
      credentials: 'include',
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
      mode: 'same-origin',
      redirect: 'follow',
      credentials: 'include',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json',  
      },
      body: JSON.stringify(user),
    });

    const resJSON = await res.json();
    return resJSON;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export const userAccountVerification = createAsyncThunk('auth/account/verify', async (data, thunkAPI) => {
  //console.log(user)
  try {
    const url = _USER_ROUTE_ACCOUNT_VERIFICATION();
    //console.log("logouturl:", url)
    const res = await fetch(url, {
      method: 'POST',
      mode: 'same-origin',
      redirect: 'follow',
      credentials: 'include',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json', 
      },
      body: JSON.stringify(data), // data = { email : "", passcode: ""}
    });

    const resJSON = await res.json();
    return resJSON;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export const userAccountConfirmation = createAsyncThunk('auth/account/confirm', async (data, thunkAPI) => {
  //console.log(user)
  try {
    const url = _USER_ROUTE_ACCOUNT_CONFIRMATION();
    //console.log("logouturl:", url)
    const res = await fetch(url, {
      method: 'POST',
      mode: 'same-origin',
      redirect: 'follow',
      credentials: 'include',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json', 
      },
      body: JSON.stringify(data), // data = { email : "", passcode: ""}
    });

    const resJSON = await res.json();
    return resJSON;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export const userAccountValidation = createAsyncThunk('auth/account/validation', async (data, thunkAPI) => {
  //console.log(user)
  try {
    const url = _USER_ROUTE_ACCOUNT_VALIDATION();
    //console.log("logouturl:", url)
    const res = await fetch(url, {
      method: 'POST',
      mode: 'same-origin',
      redirect: 'follow',
      credentials: 'include',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json',  
      },
      body: JSON.stringify(data), // data = { email : "", passcode: ""}
    });

    const resJSON = await res.json();
    //console.log("resJSON", resJSON);
    return resJSON;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export const userAccountPasswordReset = createAsyncThunk('auth/account/password/reset', async (user, thunkAPI) => {
  //console.log(user)
  try {
    const url = _USER_ROUTE_ACCOUNT_PASSWORD_RESET();
    //console.log("logouturl:", url)
    const res = await fetch(url, {
      method: 'POST',
      mode: 'same-origin',
      redirect: 'follow',
      credentials: 'include',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json', 
      },
      body: JSON.stringify(user), // user = { email : "", passcode: ""}
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
  statusRegister: string;
  statusLogin: string;
  statusLogout: string;
  statusAuth: string;
  statusVerify: string;
  statusDelete: string;
  statusAccountVerify: string;
  statusAccountConfirm: string;
  statusAccountValidate: string;
  statusAccountPasswordReset: string;
  error: null;
  errorRegister: null;
  errorLogin: null;
  errorLogout: null;
  errorAuth: null;
  errorVerify: null;
  errorDelete: null;
  errorAccountVerify: null;
  errorAccountConfirm: null;
  errorAccountValidate: null;
  errorAccountPasswordReset: null;
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
  statusRegister: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  statusLogin: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  statusLogout: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  statusAuth: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  statusVerify: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  statusDelete: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  statusAccountVerify: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  statusAccountConfirm: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  statusAccountValidate: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  statusAccountPasswordReset: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  errorRegister: null,
  errorLogin: null,
  errorLogout: null,
  errorAuth: null,
  errorVerify: null,
  errorDelete: null,
  errorAccountVerify: null,
  errorAccountConfirm: null,
  errorAccountValidate: null,
  errorAccountPasswordReset: null,
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
        state.statusRegister = 'loading';
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.statusRegister = 'succeeded';
      })
      .addCase(userRegister.rejected, (state, action) => {
        state.status = 'failed';
        state.statusRegister = 'failed';
        state.error = action.error.message;
        state.errorRegister = action.error.message;
      })
      .addCase(userLogin.pending, (state, action) => {
        state.status = 'loading';
        state.statusLogin = 'loading';
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.statusLogin = 'succeeded';
        state.user = action.payload;
        validUser(action.payload);
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.status = 'failed';
        state.statusLogin = 'failed';
        state.error = action.error.message;
        state.errorLogin = action.error.message;
      })
      .addCase(userAuthMe.pending, (state, action) => {
        state.status = 'loading';
        state.statusAuth = 'loading';
      })
      .addCase(userAuthMe.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.statusAuth = 'succeeded';
        validUser(action.payload);
      })
      .addCase(userAuthMe.rejected, (state, action) => {
        state.status = 'failed';
        state.statusAuth = 'failed';
        state.error = action.error.message;
        state.errorAuth = action.error.message;
      })
      .addCase(userVerify.pending, (state, action) => {
        state.status = 'loading';
        state.statusVerify = 'loading';
      })
      .addCase(userVerify.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.statusVerify = 'succeeded';
        state.user = action.payload;
        validUser(action.payload);
      })
      .addCase(userVerify.rejected, (state, action) => {
        state.status = 'failed';
        state.statusVerify = 'failed';
        state.error = action.error.message;
        state.errorVerify = action.error.message;
      })
      .addCase(userLogout.pending, (state, action) => {
        state.status = 'loading';
        state.statusLogout = 'loading';

      })
      .addCase(userLogout.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.statusLogout = 'succeeded';
      })
      .addCase(userLogout.rejected, (state, action) => {
        state.status = 'failed';
        state.statusLogout = 'failed';
        state.error = action.error.message;
        state.errorLogout = action.error.message;
      })
      .addCase(userDelete.pending, (state, action) => {
        state.status = 'loading';
        state.statusDelete = 'loading';
      })
      .addCase(userDelete.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.statusDelete = 'succeeded';
      })
      .addCase(userDelete.rejected, (state, action) => {
        state.status = 'failed';
        state.statusDelete = 'failed';
        state.error = action.error.message;
        state.errorDelete = action.error.message;
      })
      .addCase(userAccountVerification.pending, (state, action) => {
        state.status = 'loading';
        state.statusAccountVerify = 'loading';
      })
      .addCase(userAccountVerification.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.statusAccountVerify = 'succeeded';
      })
      .addCase(userAccountVerification.rejected, (state, action) => {
        state.status = 'failed';
        state.statusAccountVerify = 'failed';
        state.error = action.error.message;
        state.errorAccountVerify = action.error.message;
      })
      .addCase(userAccountConfirmation.pending, (state, action) => {
        state.status = 'loading';
        state.statusAccountConfirm = 'loading';
      })
      .addCase(userAccountConfirmation.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.statusAccountConfirm = 'succeeded';
      })
      .addCase(userAccountConfirmation.rejected, (state, action) => {
        state.status = 'failed';
        state.statusAccountConfirm = 'failed';
        state.error = action.error.message;
        state.errorAccountConfirm = action.error.message;
      })
      .addCase(userAccountValidation.pending, (state, action) => {
        state.status = 'loading';
        state.statusAccountValidate = 'loading';
      })
      .addCase(userAccountValidation.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.statusAccountValidate = 'succeeded';
      })
      .addCase(userAccountValidation.rejected, (state, action) => {
        state.status = 'failed';
        state.statusAccountValidate = 'failed';
        state.error = action.error.message;
        state.errorAccountValidate = action.error.message;
      })
      .addCase(userAccountPasswordReset.pending, (state, action) => {
        state.status = 'loading';
        state.statusAccountPasswordReset = 'loading';
      })
      .addCase(userAccountPasswordReset.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.statusAccountPasswordReset = 'succeeded';
      })
      .addCase(userAccountPasswordReset.rejected, (state, action) => {
        state.status = 'failed';
        state.statusAccountPasswordReset = 'failed';
        state.error = action.error.message;
        state.errorAccountPasswordReset = action.error.message;
      })
  },
});

/** Fetch API User */
export const fetchUser = (state) => state.authentication.user;

export const fetchUserAuth = (state) => state.authentication.authenticated;

/** Fetch API User Status */
export const fetchUserStatus = (state) => state.authentication.status;

export const fetchUserStatusRegister = (state) => state.authentication.statusRegister;

export const fetchUserStatusLogin = (state) => state.authentication.statusLogin;

export const fetchUserStatusAuth = (state) => state.authentication.statusAuth;

export const fetchUserStatusVerify = (state) => state.authentication.statusVerify;

export const fetchUserStatusLogout = (state) => state.authentication.statusLogout;

export const fetchUserStatusDelete = (state) => state.authentication.statusDelete;

export const fetchUserStatusAccountVerify = (state) => state.authentication.statusAccountVerify;

export const fetchUserStatusAccountConfirm = (state) => state.authentication.statusAccountConfirm;

export const fetchUserStatusAccountValidate = (state) => state.authentication.statusAccountValidate;

export const fetchUserStatusAccountPasswordReset = (state) => state.authentication.statusAccountPasswordReset;

/** Fetch API User Error */
export const fetchUserError = (state) => state.authentication.error;

export const fetchUserErrorRegister = (state) => state.authentication.errorRegister;

export const fetchUserErrorLogin = (state) => state.authentication.errorLogin;

export const fetchUserErrorLogout = (state) => state.authentication.errorLogout;

export const fetchUserErrorAuth = (state) => state.authentication.errorAuth;

export const fetchUserErrorVerify = (state) => state.authentication.errorVerify;

export const fetchUserErrorDelete = (state) => state.authentication.errorDelete;

export const fetchUserErrorAccountVerify = (state) => state.authentication.errorAccountVerify;

export const fetchUserErrorAccountConfirm = (state) => state.authentication.errorAccountConfirm;

export const fetchUserErrorAccountValidate = (state) => state.authentication.errorAccountValidate;

export const fetchUserErrorAccountPasswordReset = (state) => state.authentication.errorAccountPasswordReset;

/** Loaders */
export const fetchUserScreenLoader = (state) => state.authentication.screenLoader;

export const fetchUserLandingScreenLoader = (state) => state.authentication.userLandingScreenLoader;

export const fetchUserComponentScreenLoader = (state) => state.authentication.userComponentScreenLoader;

/** Export Reducers */
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

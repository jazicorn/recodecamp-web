'use strict'
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1]
          return t[1]
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function () {
          return this
        }),
      g
    )
    function verb(n) {
      return function (v) {
        return step([n, v])
      }
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.')
      while ((g && ((g = 0), op[0] && (_ = 0)), _))
        try {
          if (
            ((f = 1),
            y &&
              (t = op[0] & 2 ? y['return'] : op[0] ? y['throw'] || ((t = y['return']) && t.call(y), 0) : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t
          if (((y = 0), t)) op = [op[0] & 2, t.value]
          switch (op[0]) {
            case 0:
            case 1:
              t = op
              break
            case 4:
              _.label++
              return { value: op[1], done: false }
            case 5:
              _.label++
              y = op[1]
              op = [0]
              continue
            case 7:
              op = _.ops.pop()
              _.trys.pop()
              continue
            default:
              if (!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) && (op[0] === 6 || op[0] === 2)) {
                _ = 0
                continue
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1]
                break
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1]
                t = op
                break
              }
              if (t && _.label < t[2]) {
                _.label = t[2]
                _.ops.push(op)
                break
              }
              if (t[2]) _.ops.pop()
              _.trys.pop()
              continue
          }
          op = body.call(thisArg, _)
        } catch (e) {
          op = [6, e]
          y = 0
        } finally {
          f = t = 0
        }
      if (op[0] & 5) throw op[1]
      return { value: op[0] ? op[1] : void 0, done: true }
    }
  }
var _a
Object.defineProperty(exports, '__esModule', { value: true })
exports.userComponentScreenLoader =
  exports.userLandingScreenLoader =
  exports.screenLoader =
  exports.updateAuthentication =
  exports.updateStatus =
  exports.updateUser =
  exports.validUser =
  exports.stateUser =
  exports.fetchUserComponentScreenLoader =
  exports.fetchUserLandingScreenLoader =
  exports.fetchUserScreenLoader =
  exports.fetchUserError =
  exports.fetchUserStatus =
  exports.fetchUserAuth =
  exports.fetchUser =
  exports.authSlice =
  exports.userDelete =
  exports.userLogout =
  exports.userVerify =
  exports.userAuthMe =
  exports.userLogin =
  exports.userRegister =
    void 0
var toolkit_1 = require('@reduxjs/toolkit')
var constantsRoutes_1 = require('../../utils/constants/constantsRoutes')
exports.userRegister = (0, toolkit_1.createAsyncThunk)('auth/register', function (data, thunkAPI) {
  return __awaiter(void 0, void 0, void 0, function () {
    var url, res, resJSON, err_1
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 3, , 4])
          url = (0, constantsRoutes_1._USER_ROUTE_REGISTER)()
          return [
            4 /*yield*/,
            fetch(url, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(data),
            }),
          ]
        case 1:
          res = _a.sent()
          return [4 /*yield*/, res.json()]
        case 2:
          resJSON = _a.sent()
          return [2 /*return*/, resJSON]
        case 3:
          err_1 = _a.sent()
          return [2 /*return*/, thunkAPI.rejectWithValue(err_1.response.data)]
        case 4:
          return [2 /*return*/]
      }
    })
  })
})
exports.userLogin = (0, toolkit_1.createAsyncThunk)('auth/login', function (user, thunkAPI) {
  return __awaiter(void 0, void 0, void 0, function () {
    var url, res, resJSON, err_2
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 3, , 4])
          url = (0, constantsRoutes_1._USER_ROUTE_LOGIN)()
          return [
            4 /*yield*/,
            fetch(url, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(user),
            }),
          ]
        case 1:
          res = _a.sent()
          return [4 /*yield*/, res.json()]
        case 2:
          resJSON = _a.sent()
          return [2 /*return*/, resJSON.data]
        case 3:
          err_2 = _a.sent()
          return [2 /*return*/, thunkAPI.rejectWithValue(err_2.response.data)]
        case 4:
          return [2 /*return*/]
      }
    })
  })
})
exports.userAuthMe = (0, toolkit_1.createAsyncThunk)('auth/me', function (_, thunkAPI) {
  return __awaiter(void 0, void 0, void 0, function () {
    var url, res, resJSON, err_3
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 3, , 4])
          url = (0, constantsRoutes_1._USER_ROUTE_AUTH_ME)()
          return [
            4 /*yield*/,
            fetch(url, {
              method: 'GET',
              headers: { 'Content-Type': 'application/json' },
            }),
          ]
        case 1:
          res = _a.sent()
          return [4 /*yield*/, res.json()]
        case 2:
          resJSON = _a.sent()
          return [2 /*return*/, resJSON.data]
        case 3:
          err_3 = _a.sent()
          //console.log(err)
          return [2 /*return*/, thunkAPI.rejectWithValue('Authentication Error')]
        case 4:
          return [2 /*return*/]
      }
    })
  })
})
exports.userVerify = (0, toolkit_1.createAsyncThunk)('auth/verify', function (_, thunkAPI) {
  return __awaiter(void 0, void 0, void 0, function () {
    var url, res, resJSON, err_4
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 4, , 5])
          return [4 /*yield*/, (0, constantsRoutes_1._USER_ROUTE_VERIFY)()]
        case 1:
          url = _a.sent()
          return [
            4 /*yield*/,
            fetch(url, {
              method: 'GET',
              headers: { 'Content-Type': 'application/json' },
            }),
          ]
        case 2:
          res = _a.sent()
          return [4 /*yield*/, res.json()]
        case 3:
          resJSON = _a.sent()
          return [2 /*return*/, resJSON.data]
        case 4:
          err_4 = _a.sent()
          return [2 /*return*/, thunkAPI.rejectWithValue(err_4.response.data)]
        case 5:
          return [2 /*return*/]
      }
    })
  })
})
exports.userLogout = (0, toolkit_1.createAsyncThunk)('auth/logout', function (_, thunkAPI) {
  return __awaiter(void 0, void 0, void 0, function () {
    var url, res, resJSON, err_5
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 3, , 4])
          url = (0, constantsRoutes_1._USER_ROUTE_LOGOUT)()
          return [
            4 /*yield*/,
            fetch(url, {
              method: 'DELETE',
            }),
          ]
        case 1:
          res = _a.sent()
          return [4 /*yield*/, res.json()]
        case 2:
          resJSON = _a.sent()
          return [2 /*return*/, resJSON]
        case 3:
          err_5 = _a.sent()
          return [2 /*return*/, thunkAPI.rejectWithValue(err_5.response.data)]
        case 4:
          return [2 /*return*/]
      }
    })
  })
})
exports.userDelete = (0, toolkit_1.createAsyncThunk)('auth/delete', function (user, thunkAPI) {
  return __awaiter(void 0, void 0, void 0, function () {
    var url, res, resJSON, err_6
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 3, , 4])
          url = (0, constantsRoutes_1._USER_ROUTE_DELETE)()
          return [
            4 /*yield*/,
            fetch(url, {
              method: 'DELETE',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(user),
            }),
          ]
        case 1:
          res = _a.sent()
          return [4 /*yield*/, res.json()]
        case 2:
          resJSON = _a.sent()
          return [2 /*return*/, resJSON]
        case 3:
          err_6 = _a.sent()
          return [2 /*return*/, thunkAPI.rejectWithValue(err_6.response.data)]
        case 4:
          return [2 /*return*/]
      }
    })
  })
})
// Define the initial state using that type
var defaultState = {
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
  status: 'idle',
  error: null,
  screenLoader: false,
  userLandingScreenLoader: false,
  userComponentScreenLoader: false,
}
exports.authSlice = (0, toolkit_1.createSlice)({
  name: 'authentication',
  initialState: defaultState,
  // `createSlice` will infer the state type from the `initialState` argument
  reducers: {
    stateUser: {
      reducer: function (state) {
        state.user
      },
    },
    validUser: {
      reducer: function (state, action) {
        if (state.user === undefined || Object.keys(state.user).length === 0) {
          state.authenticated = false
        } else {
          if (
            state.user._ID === null ||
            state.user._ID.trim() === '123-456-789' ||
            state.user._ID.trim().length <= 16
          ) {
            state.authenticated = false
          } else {
            state.authenticated = true
          }
        }
      },
    },
    updateUser: {
      reducer: function (state, action) {
        state.user = action.payload
      },
      prepare: function () {
        return {
          payload: {},
        }
      },
    },
    updateStatus: {
      reducer: function (state, action) {
        state.status = action.payload
      },
      prepare: function () {
        return {
          payload: {},
        }
      },
    },
    updateAuthentication: {
      reducer: function (state, action) {
        state.authenticated = action.payload
      },
      prepare: function () {
        return {
          payload: {},
        }
      },
    },
    screenLoader: {
      reducer: function (state, action) {
        state.screenLoader = action.payload
      },
    },
    userLandingScreenLoader: {
      reducer: function (state, action) {
        state.userLandingScreenLoader = action.payload
      },
    },
    userComponentScreenLoader: {
      reducer: function (state, action) {
        state.userComponentScreenLoader = action.payload
      },
    },
  },
  extraReducers: function (builder) {
    builder
      .addCase(exports.userRegister.pending, function (state, action) {
        state.status = 'loading'
      })
      .addCase(exports.userRegister.fulfilled, function (state, action) {
        state.status = 'succeeded'
      })
      .addCase(exports.userRegister.rejected, function (state, action) {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(exports.userLogin.pending, function (state, action) {
        state.status = 'loading'
      })
      .addCase(exports.userLogin.fulfilled, function (state, action) {
        state.status = 'succeeded'
        state.user = action.payload
        ;(0, exports.validUser)(action.payload)
      })
      .addCase(exports.userLogin.rejected, function (state, action) {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(exports.userAuthMe.pending, function (state, action) {
        state.status = 'loading'
      })
      .addCase(exports.userAuthMe.fulfilled, function (state, action) {
        state.status = 'succeeded'
        //console.log(action.payload)
        ;(0, exports.validUser)(action.payload)
      })
      .addCase(exports.userAuthMe.rejected, function (state, action) {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(exports.userVerify.pending, function (state, action) {
        state.status = 'loading'
      })
      .addCase(exports.userVerify.fulfilled, function (state, action) {
        state.status = 'succeeded'
        state.user = action.payload
        ;(0, exports.validUser)(action.payload)
      })
      .addCase(exports.userVerify.rejected, function (state, action) {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(exports.userLogout.pending, function (state, action) {
        state.status = 'loading'
      })
      .addCase(exports.userLogout.fulfilled, function (state, action) {
        state.status = 'succeeded'
      })
      .addCase(exports.userLogout.rejected, function (state, action) {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(exports.userDelete.pending, function (state, action) {
        state.status = 'loading'
      })
      .addCase(exports.userDelete.fulfilled, function (state, action) {
        state.status = 'succeeded'
      })
      .addCase(exports.userDelete.rejected, function (state, action) {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})
var fetchUser = function (state) {
  return state.authentication.user
}
exports.fetchUser = fetchUser
var fetchUserAuth = function (state) {
  return state.authentication.authenticated
}
exports.fetchUserAuth = fetchUserAuth
var fetchUserStatus = function (state) {
  return state.authentication.status
}
exports.fetchUserStatus = fetchUserStatus
var fetchUserError = function (state) {
  return state.authentication.error
}
exports.fetchUserError = fetchUserError
var fetchUserScreenLoader = function (state) {
  return state.authentication.screenLoader
}
exports.fetchUserScreenLoader = fetchUserScreenLoader
var fetchUserLandingScreenLoader = function (state) {
  return state.authentication.userLandingScreenLoader
}
exports.fetchUserLandingScreenLoader = fetchUserLandingScreenLoader
var fetchUserComponentScreenLoader = function (state) {
  return state.authentication.userComponentScreenLoader
}
exports.fetchUserComponentScreenLoader = fetchUserComponentScreenLoader
;(exports.stateUser = ((_a = exports.authSlice.actions), _a.stateUser)),
  (exports.validUser = _a.validUser),
  (exports.updateUser = _a.updateUser),
  (exports.updateStatus = _a.updateStatus),
  (exports.updateAuthentication = _a.updateAuthentication),
  (exports.screenLoader = _a.screenLoader),
  (exports.userLandingScreenLoader = _a.userLandingScreenLoader),
  (exports.userComponentScreenLoader = _a.userComponentScreenLoader)
exports.default = exports.authSlice.reducer
// Other code such as selectors can use the imported `RootState` type

import { configureStore} from '@reduxjs/toolkit';
//import { createStore, applyMiddleware, combineReducers } from 'redux';
// import monitorReducersEnhancer from './enhancers/monitorReducers'
//import thunkMiddleware from 'redux-thunk'
import { dashboardSlice } from './slices/dashboardSlice.ts'

const store = configureStore({
  reducer: {
    dashboard: dashboardSlice.reducer,
    devTools: process.env.NODE_ENV !== 'production',
  },
})

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
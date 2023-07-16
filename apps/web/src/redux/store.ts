import { configureStore } from '@reduxjs/toolkit'
// import monitorReducersEnhancer from './enhancers/monitorReducers'
// import thunkMiddleware from 'redux-thunk'
// import dashboardReducer from './slices/dashboardSlice.ts'

const store = configureStore({
  reducer: {
  },
})

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
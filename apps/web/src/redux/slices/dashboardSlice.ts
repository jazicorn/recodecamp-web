import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
interface DashboardState {
  categoryDefault: string,
  category: string,
  categoryRoute: string,
  question: object
}

// Define the initial state using that type
const initialState: DashboardState = {
  categoryDefault: "variable",
  category: "",
  categoryRoute: "",
  question: {}
}

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: initialState,
  // `createSlice` will infer the state type from the `initialState` argument
  reducers: {
    menuItem: (state, action) => {
      state.categoryDefault = action.payload;
      state.category = action.payload;
      state.categoryRoute = action.payload;
      state.question = action.payload;
    },
  },
});

export const { menuItem } = dashboardSlice.actions

export default dashboardSlice.reducer;

// Other code such as selectors can use the imported `RootState` type

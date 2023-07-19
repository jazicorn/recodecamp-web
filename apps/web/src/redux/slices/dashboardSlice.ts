import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
interface DashboardState {
  value: string
}

// Define the initial state using that type
const initialState: DashboardState = {
  value: "banner",
}

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: initialState,
  // `createSlice` will infer the state type from the `initialState` argument
  reducers: {
    menuItem: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { menuItem } = dashboardSlice.actions

export default dashboardSlice.reducer;

// Other code such as selectors can use the imported `RootState` type

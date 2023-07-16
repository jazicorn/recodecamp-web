import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
interface DashboardState {
  value: string
}

// Define the initial state using that type
const initialState: DashboardState = {
  value: "",
}

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: 'd_banner',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  
})

// Other code such as selectors can use the imported `RootState` type

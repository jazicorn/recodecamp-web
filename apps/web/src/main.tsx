/**CSS*/
import './styles/tailwind.input.css'
import { MantineProvider } from '@mantine/core'
/**Custom Day/Night Context*/
import { ThemeProvider } from './context/ThemeContext.tsx'
/**React*/
import React from 'react'
import ReactDOM from 'react-dom/client'
/**React Redux*/
import { Provider } from 'react-redux'
import store from './redux/store.ts'
/**React Router*/
import { RouterProvider, createHashRouter as Router, createRoutesFromElements, Route} from 'react-router-dom'
import ErrorBoundary from "./ErrorBoundary.tsx";
/**Pages*/
import Dashboard from './pages/Dashboard.tsx'
import Home from './pages/Home.tsx'
/**Layouts*/
import D_Home from './layout/Layout.D_Home'
import D_Code from './layout/Layout.D_Code'

const router = Router(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} errorElement={<ErrorBoundary />} />
      <Route path="learn" element={<Dashboard />}>
        <Route path="" element={<D_Home />} errorElement={<ErrorBoundary />}/>
        <Route path="code" element={<D_Code />} errorElement={<ErrorBoundary />}/>
      </Route>
      <Route path="*" element={<Home/>} errorElement={<ErrorBoundary />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <RouterProvider router={router} />
        </MantineProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)

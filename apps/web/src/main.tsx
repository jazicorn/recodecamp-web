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
/**Non-Default Pages*/
import Dashboard from './pages/Dashboard.tsx'
import Code from './pages/Dashboard.Code.tsx';

import Home from './pages/Home.tsx'

const router = Router(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} errorElement={<ErrorBoundary />} />
      <Route path="/learn" element={<Dashboard />} errorElement={<ErrorBoundary />}/>
      <Route path="/code" element={<Code />} errorElement={<ErrorBoundary />}/>
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

/**CSS*/
import './styles/tailwind.input.css'
import { MantineProvider } from '@mantine/core'
/**Custom Day/Night Context*/
import { ThemeProvider } from './context/ThemeContext.tsx'
/**React*/
import React from 'react'
import ReactDOM from 'react-dom/client'
/**React Redux*/
//import { Provider } from 'react-redux'
//import configureStore from './redux/configureStore'
/**React Router*/
import { RouterProvider, createHashRouter as Router, createRoutesFromElements, Route} from 'react-router-dom'
import ErrorBoundary from "./ErrorBoundary.tsx";
/**Non-Default Pages*/
import Dashboard from './pages/Dashboard.tsx'
import Home from './pages/Home.tsx'

//const store = configureStore()

const router = Router(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} errorElement={<ErrorBoundary />} />
      <Route path="/learn" element={<Dashboard />} errorElement={<ErrorBoundary />}/>
      <Route path="*" element={<Home/>} errorElement={<ErrorBoundary />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        {/* <Provider store={store}> */}
          <RouterProvider router={router} />
        {/* </Provider> */}
      </MantineProvider>
    </ThemeProvider>
  </React.StrictMode>
)

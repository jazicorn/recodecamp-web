import './styles/index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { MantineProvider } from '@mantine/core'
import { ThemeProvider } from './context/ThemeContext.tsx'
import { RouterProvider, createHashRouter as Router, createRoutesFromElements, Route, Navigate} from 'react-router-dom'
import Root from './Root.tsx'
import Learn from './pages/Learn.tsx'

const router = Router(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Root />} />
      <Route path="/learn" element={<Learn />}  />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <RouterProvider router={router} />
      </MantineProvider>
    </ThemeProvider>
  </React.StrictMode>
)

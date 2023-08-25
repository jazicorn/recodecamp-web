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
/**React Query */
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
/**Pages*/
import Home from './pages/Home.tsx';
import Admin from './pages/Admin.tsx';
import Dashboard from './pages/Dashboard.tsx';
import Dashboard_Admin from './pages/Dashboard_Admin.tsx';
/**Layouts*/
import D_Home from './layout/Layout.D_Home';
import D_Code from './layout/Layout.D_Code';
import D_Categories from './layout/Layout.D_Categories';

const router = Router(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} errorElement={<ErrorBoundary />} />
      <Route path="learn" element={<Dashboard />}>
        <Route path="" element={<D_Home />} errorElement={<ErrorBoundary />}/>
        <Route path="code" element={<D_Code />} errorElement={<ErrorBoundary />}/>
        <Route path="categories" element={<D_Categories />} errorElement={<ErrorBoundary />}/>
      </Route>
      <Route path="admin" element={<Admin/>} errorElement={<ErrorBoundary />}/>
      <Route path="dashboard" element={<Dashboard_Admin />}>
        <Route path="" element={<D_Home />} errorElement={<ErrorBoundary />}/>
        <Route path="code" element={<D_Code />} errorElement={<ErrorBoundary />}/>
        <Route path="categories" element={<D_Categories />} errorElement={<ErrorBoundary />}/>
      </Route>
      <Route path="*" element={<Home/>} errorElement={<ErrorBoundary />}/>
    </Route>
  )
)

// Create a react-query client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </MantineProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)

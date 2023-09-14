/**CSS*/
import './styles/tailwind.input.css';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
/**Custom Day/Night Context*/
import { ThemeProvider } from './context/ThemeContext.tsx';
/**React*/
import React from 'react';
import ReactDOM from 'react-dom/client';
/**React Redux*/
import { Provider } from 'react-redux';
import store from './redux/store.ts';
/**React Router*/
import { RouterProvider, createHashRouter as Router, createRoutesFromElements, Route} from 'react-router-dom'
import ErrorBoundary from "./ErrorBoundary.tsx";
/**React Query */
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
/**Pages*/
import Home from './pages/Home.tsx';
import Auth from './pages/Auth.tsx';
import Dashboard from './pages/Dashboard.tsx';
// import Dashboard_Admin from './pages/Admin.Dashboard.tsx';
/**Auth Components */
import A_Admin_Login from './components/auth/A_Admin.Login.tsx';
import A_Admin_Register from './components/auth/A_Admin.Register.tsx';
import A_Guest_Register from './components/auth/A_Guest.Register.tsx';
import A_Guest_Login from './components/auth/A_Guest.Login.tsx';
import A_User_Register from './components/auth/A_User.Register.tsx';
import A_User_Login from './components/auth/A_User.Login.tsx';
/**Layouts | Home Pages*/
import H_Home from './layout/Layout.H_Banner';
import H_About from './layout/Layout.H_About';
/**Layouts | Dashboard Pages*/
import D_Home from './layout/Layout.D_Home';
import D_Code from './layout/Layout.D_Code';
import D_Categories from './layout/Layout.D_Categories';
import D_Calendar from './layout/Layout.D_Calendar';
import D_Docs from './layout/Layout.D_Docs';
import D_Notes from './layout/Layout.D_Notes';
import D_Settings from './layout/Layout.D_Settings';

const router = Router(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} errorElement={<ErrorBoundary />} >
        <Route path="" element={<H_Home />} errorElement={<ErrorBoundary />}/>
        <Route path="about" element={<H_About />} errorElement={<ErrorBoundary />}/>
      </Route>
      <Route path="/learn" element={<Dashboard />}>
        <Route path="" element={<D_Home />} errorElement={<ErrorBoundary />}/>
        <Route path="code" element={<D_Code />} errorElement={<ErrorBoundary />}/>
        <Route path="categories" element={<D_Categories />} errorElement={<ErrorBoundary />}/>
        <Route path="calendar" element={<D_Calendar />} errorElement={<ErrorBoundary />}/>
        <Route path="docs" element={<D_Docs />} errorElement={<ErrorBoundary />}/>
        <Route path="notes" element={<D_Notes />} errorElement={<ErrorBoundary />}/>
        <Route path="settings" element={<D_Settings />} errorElement={<ErrorBoundary />}/>
      </Route>
      <Route path="/auth" element={<Auth />}>
        <Route path="admin/signup" element={<A_Admin_Register/>} errorElement={<ErrorBoundary />}/>
        <Route path="admin/login" element={<A_Admin_Login/>} errorElement={<ErrorBoundary />}/>
        <Route path="guest/signup" element={<A_Guest_Register />} errorElement={<ErrorBoundary />} />
        <Route path="guest/login" element={<A_Guest_Login />} errorElement={<ErrorBoundary />} />
        <Route path="user/signup" element={<A_User_Register />} errorElement={<ErrorBoundary />} />
        <Route path="user/login" element={<A_User_Login />} errorElement={<ErrorBoundary />} />
      </Route>
      {/* <Route path="admin/dashboard" element={<Dashboard_Admin />} errorElement={<ErrorBoundary />}>
        <Route path="" element={<D_Home />} errorElement={<ErrorBoundary />}/>
        <Route path="code" element={<D_Code />} errorElement={<ErrorBoundary />}/>
        <Route path="categories" element={<D_Categories />} errorElement={<ErrorBoundary />}/>
      </Route> */}
      <Route path="*" element={<Home />} errorElement={<ErrorBoundary />}/>
    </Route>
  )
)

// Create a react-query client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <MantineProvider withGlobalStyles withNormalizeCSS>
            <Notifications position="top-center"/>
            <RouterProvider router={router} />
            <ReactQueryDevtools initialIsOpen={false} />
          </MantineProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)

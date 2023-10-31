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
import { 
  RouterProvider, 
  createBrowserRouter as Router, 
  createRoutesFromElements, 
  Route 
} from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary.tsx';
/**React Query */
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
/**Pages*/
import Home from './pages/Home.tsx';
import Auth from './pages/Auth.tsx';
import Dashboard from './pages/Dashboard.tsx';
import Profile from './pages/Profile.tsx';
import NotFound from './pages/NotFound.tsx';
// import Dashboard_Admin from './pages/Admin.Dashboard.tsx';
/**Auth Components */
import A_Admin_Login from './components/auth/A_Admin.Login.tsx';
import A_Admin_Register from './components/auth/A_Admin.Register.tsx';
import A_Guest_Register from './components/auth/A_Guest.Register.tsx';
import A_Guest_Login from './components/auth/A_Guest.Login.tsx';
import A_Guest_Account_Confirmation from './components/auth/A_Guest.Account_Confirmation.tsx';
import A_Guest_Account_Not_Found from './components/auth/A_Guest.Account_Not_Found.tsx';
import A_User_Register from './components/auth/A_User.Register.tsx';
import A_User_Login from './components/auth/A_User.Login.tsx';
/**Layouts | Home Pages*/
import H_Home from './layout/Layout.H_Banner';
//import H_About from './layout/Layout.H_About';
/**Layouts | Dashboard Pages*/
import D_Home from './layout/dashboard/Layout.D_Home';
import D_Code from './layout/dashboard/Layout.D_Code';
import D_Categories from './layout/dashboard/Layout.D_Categories';
import D_Plans from './layout/dashboard/Layout.D_Plans';
import D_Calendar from './layout/dashboard/Layout.D_Calendar';
import D_Docs from './layout/dashboard/Layout.D_Docs';
import D_Notes from './layout/dashboard/Layout.D_Notes';
import D_Search from './layout/dashboard/Layout.D_Search';
import D_Settings from './layout/dashboard/Layout.D_Settings';
import D_Settings_User from './layout/dashboard/Layout.D_Settings_User';

const router = Router(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} errorElement={<ErrorBoundary />}>
        <Route path="" element={<H_Home />} errorElement={<ErrorBoundary />} />
        <Route path="*" element={<H_Home />} errorElement={<ErrorBoundary />} />
      </Route>
      <Route path="/learn" element={<Dashboard />}>
        <Route path="" element={<D_Home />} errorElement={<ErrorBoundary />} />
        <Route path="code" element={<D_Code />} errorElement={<ErrorBoundary />} />
        <Route path="categories" element={<D_Categories />} errorElement={<ErrorBoundary />} />
        <Route path="plans" element={<D_Plans />} errorElement={<ErrorBoundary />} />
        <Route path="calendar" element={<D_Calendar />} errorElement={<ErrorBoundary />} />
        <Route path="docs" element={<D_Docs />} errorElement={<ErrorBoundary />} />
        <Route path="notes" element={<D_Notes />} errorElement={<ErrorBoundary />} />
        <Route path="search" element={<D_Search />} errorElement={<ErrorBoundary />} />
        <Route path="settings/user" element={<D_Settings_User />} errorElement={<ErrorBoundary />} />
        <Route path="settings/dashboard" element={<D_Settings />} errorElement={<ErrorBoundary />} />
        <Route path="*" element={<D_Home />} errorElement={<ErrorBoundary />} />
      </Route>
      <Route path="/auth" element={<Auth />}>
        <Route path="account/confirm" element={<A_Guest_Account_Not_Found/>} errorElement={<ErrorBoundary />} />  
        <Route path="account/confirm/:passcode" element={<A_Guest_Account_Confirmation />} errorElement={<ErrorBoundary />} />
        <Route path="admin/signup" element={<A_Admin_Register />} errorElement={<ErrorBoundary />} />
        <Route path="admin/login" element={<A_Admin_Login />} errorElement={<ErrorBoundary />} />
        <Route path="guest/signup" element={<A_Guest_Register />} errorElement={<ErrorBoundary />} />
        <Route path="guest/login" element={<A_Guest_Login />} errorElement={<ErrorBoundary />} />
        <Route path="user/signup" element={<A_User_Register />} errorElement={<ErrorBoundary />} />
        <Route path="user/login" element={<A_User_Login />} errorElement={<ErrorBoundary />} />
        <Route path="*" element={<A_Guest_Login />} errorElement={<ErrorBoundary />} />
      </Route>
      <Route path="/profile/:id" element={<Profile />} errorElement={<ErrorBoundary />} />
      <Route path="/profile/settings" element={<Profile />} errorElement={<ErrorBoundary />} />
      <Route path="/profile/dashboard" element={<Profile />} errorElement={<ErrorBoundary />} />
      {/* <Route path="admin/dashboard" element={<Dashboard_Admin />} errorElement={<ErrorBoundary />}>
        <Route path="" element={<D_Home />} errorElement={<ErrorBoundary />}/>
        <Route path="code" element={<D_Code />} errorElement={<ErrorBoundary />}/>
        <Route path="categories" element={<D_Categories />} errorElement={<ErrorBoundary />}/>
      </Route> */}
      <Route path="404" element={<NotFound />} errorElement={<ErrorBoundary />} />
      <Route path="*" element={<Home />} errorElement={<ErrorBoundary />} />
    </Route>
  )
);

// Create a react-query client
const queryClient = new QueryClient();
queryClient.clear();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <MantineProvider withGlobalStyles withNormalizeCSS theme={
            {
              colors: { 
                'ocean-blue': [
                  '#7AD1DD', 
                  '#5FCCDB', 
                  '#44CADC', 
                  '#2AC9DE', 
                  '#1AC2D9', 
                  '#11B7CD', 
                  '#09ADC3', 
                  '#0E99AC', 
                  '#128797', 
                  '#147885'
                ],
              }
            }}>
            <Notifications position="top-center" />
            <RouterProvider router={router} />
            <ReactQueryDevtools initialIsOpen={false} />
          </MantineProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

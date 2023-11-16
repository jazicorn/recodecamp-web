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
import { 
  QueryClient, 
  QueryClientProvider 
} from '@tanstack/react-query';
/**Pages*/
import Dashboard from './pages/Dashboard.tsx';
import Auth from './pages/Auth.tsx';
import Learn from './pages/Learn.tsx';
import Profile from './pages/Profile.tsx';
import NotFound from './pages/NotFound.tsx';
// import Dashboard_Admin from './pages/Admin.Dashboard.tsx';
/**Auth Components */
//import A_Admin_Login from './components/auth/A_Admin.Login.tsx';
//import A_Admin_Register from './components/auth/A_Admin.Register.tsx';
import A_Guest_Register from './components/auth/guest/A_Guest.Register.tsx';
import A_Guest_Login from './components/auth/guest/A_Guest.Login.tsx';
import A_Guest_Account_Confirmation from './components/auth/guest/A_Guest.Account_Confirmation.tsx';
import A_Guest_Account_Confirmation_Error from './components/auth/guest/A_Guest.Account_Confirmation_Error.tsx';
import A_Guest_Account_Confirmation_Status from './components/auth/guest/A_Guest.Account_Confirmation_Status.tsx';
import A_Guest_Account_Confirmation_ReSend from './components/auth/guest/A_Guest.Account_Confirmation_ReSend.tsx';
import A_Guest_Account_Not_Found from './components/auth/guest/A_Guest.Account_Not_Found.tsx';
//import A_User_Register from './components/auth/A_User.Register.tsx';
//import A_User_Login from './components/auth/A_User.Login.tsx';
/**Layouts | Learn Pages*/
import L_Home from './layout/dashboard/learn/Layout.L_Home';
import L_Code from './layout/dashboard/learn/Layout.L_Code';
import L_Categories from './layout/dashboard/learn/Layout.L_Categories';
import L_Plans from './layout/dashboard/learn/Layout.L_Plans';
import L_Calendar from './layout/dashboard/learn/Layout.L_Calendar';
import L_Docs from './layout/dashboard/learn/Layout.L_Docs';
import L_Notes from './layout/dashboard/learn/Layout.L_Notes';
import L_Search from './layout/dashboard/learn/Layout.L_Search';
import L_Settings from './layout/dashboard/learn/Layout.L_Settings';
import L_Settings_User from './layout/dashboard/learn/Layout.L_Settings_User';

const router = Router(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Dashboard />} errorElement={<ErrorBoundary />}/>
      <Route path="/learn" element={<Learn />}>
        <Route path="" element={<L_Home />} errorElement={<ErrorBoundary />} />
        <Route path="code" element={<L_Code />} errorElement={<ErrorBoundary />} />
        <Route path="categories" element={<L_Categories />} errorElement={<ErrorBoundary />} />
        <Route path="plans" element={<L_Plans />} errorElement={<ErrorBoundary />} />
        <Route path="calendar" element={<L_Calendar />} errorElement={<ErrorBoundary />} />
        <Route path="docs" element={<L_Docs />} errorElement={<ErrorBoundary />} />
        <Route path="notes" element={<L_Notes />} errorElement={<ErrorBoundary />} />
        <Route path="search" element={<L_Search />} errorElement={<ErrorBoundary />} />
        <Route path="settings/user" element={<L_Settings_User />} errorElement={<ErrorBoundary />} />
        <Route path="settings/dashboard" element={<L_Settings />} errorElement={<ErrorBoundary />} />
        <Route path="*" element={<L_Home />} errorElement={<ErrorBoundary />} />
      </Route>
       <Route path="/auth" element={<Auth />}>
        {/* <Route path="admin/signup" element={<A_Admin_Register />} errorElement={<ErrorBoundary />} />
        <Route path="admin/login" element={<A_Admin_Login />} errorElement={<ErrorBoundary />} /> */}
        <Route path="guest/signup" element={<A_Guest_Register />} errorElement={<ErrorBoundary />} />
        <Route path="guest/login" element={<A_Guest_Login />} errorElement={<ErrorBoundary />} />
        {/* <Route path="user/signup" element={<A_User_Register />} errorElement={<ErrorBoundary />} />
        <Route path="user/login" element={<A_User_Login />} errorElement={<ErrorBoundary />} /> */}
        <Route path="*" element={<A_Guest_Login />} errorElement={<ErrorBoundary />} />
      </Route>
      <Route path="/auth/account/" element={<Auth />}>
        <Route path="confirm" element={<A_Guest_Account_Confirmation/>} errorElement={<ErrorBoundary />} />
        <Route path="confirm/error" element={<A_Guest_Account_Confirmation_Error/>} errorElement={<ErrorBoundary />} />
        <Route path="confirm/resend" element={<A_Guest_Account_Confirmation_ReSend />} errorElement={<ErrorBoundary />} />
        <Route path="confirm/status/:passcode" element={<A_Guest_Account_Confirmation_Status />} errorElement={<ErrorBoundary />} />
        <Route path="*" element={<A_Guest_Account_Not_Found/>} errorElement={<ErrorBoundary />} />
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
      <Route path="*" element={<Dashboard />} errorElement={<ErrorBoundary />} />
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

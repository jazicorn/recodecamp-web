// Page: Dashboard
import { useContext, useEffect, useState, useCallback } from 'react';
import { Outlet, useLocation, useParams, useNavigate } from 'react-router-dom';
import type { Location, Params } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
/** Custom Hooks */
import useWindowSize from '../hooks/useWindowSize';
//import Transition from '../hooks/useTransition';
/** Components */
import Header from '../components/header/Header_Dashboard';
import D_Header from '../components/dashboard/D_Header';
import D_Navigation from '../components/dashboard/D_Navigation';
import D_Navigation_Mobile from '../components/dashboard/D_Navigation_Mobile';
//import D_Route from '../components/dashboard/D_Route';
//import D_Route_User_Editor from '../components/dashboard/D_Route_User_Editor';
/** Notifications */
import { notifications } from '@mantine/notifications';
import { IconX, IconCheck } from '@tabler/icons-react';
/** React Redux Hooks */
//import { useAppDispatch } from '../redux/reduxHooks.ts';
import { useAppDispatch, useAppSelector } from '../redux/reduxHooks.ts';
import type { RootState } from '../redux/store.ts';
import { 
  menuUser,
} from '../redux/slices/dashboardSlice.ts';
/**Custom Helpers */
import { DEFAULT_USER } from '../utils/constants';

const getRoutePath = (location: Location, params: Params): string => {
  const { pathname } = location;
  if (!Object.keys(params).length) {
    return pathname; // we don't need to replace anything
  }
  let path = pathname;
  Object.entries(params).forEach(([paramName, paramValue]) => {
    if (paramValue) {
      path = path.replace(paramValue, `:${paramName}`);
    }
  });
  return path;
};

const Dashboard = () => {
  const { isDesktopMDXL, isDesktopXL } = useWindowSize();
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;
  const navigate = useNavigate();

  /** Redux Dispatch Instance */
  const dispatch = useAppDispatch();
  const getUser = useAppSelector((state:RootState) => state?.dashboard?.user) || DEFAULT_USER;

  /**Detect User Browser Path */
  const location = useLocation();
  const params = useParams();
  
  const [path, setPath] = useState();

  useEffect(() => {
    setPath(getRoutePath(location, params));
  }, [location, params]);

  /** Guest Verify */
  const guestVerify = useCallback(async () => {
    try {
      let url;
      if(import.meta.env.PROD) {
        url = `${baseURL}/guest/verify`;
      } else {
        url = `/api/guest/verify`;
      }
      await fetch(url, { 
        method: 'GET',
        headers: {
          'Accept' : 'application/json',
          'Content-Type': 'application/json',
        },
      }).then(function(res) {
          if(res.ok) {
            console.log("🏠 Guest | Logged In");
            // Success Notification
            notifications.show({
              id: 'success',
              withCloseButton: true,
              autoClose: 2000,
              title: "Verifying...",
              message: '',
              color: 'teal',
              icon: <IconCheck />,
              className: 'my-notification-class',
              style: { backgroundColor: 'white' },
              sx: { backgroundColor: 'teal' },
              loading: true,
            });
            return res
          } else {
            // Failure Notification
            notifications.show({
              id: 'failure',
              withCloseButton: true,
              autoClose: 2000,
              title: "Verification Error",
              message: '',
              color: 'red',
              icon: <IconX />,
              className: 'my-notification-class',
              style: { backgroundColor: 'white' },
              sx: { backgroundColor: 'red' },
              loading: false,
            });
              setTimeout(() => {
              navigate("/");
            }, '1000');
          }
      }).then(function(response) {
        //console.log("response", response);
        return response.json()
      }).then(function(response) {
        const auth = response;
        //console.log("data auth:", data.authenticated)
        if(auth.authenticated) {
          console.log("✅ Guest | Verified");
          //console.log("data,user:", data.user)
          return auth.data
        } else {
          console.log("🚫 Guest | Not Verified | Please Login");
          notifications.show({
              id: 'invalidUser',
              withCloseButton: true,
              autoClose: 2000,
              title: "",
              message: '',
              color: 'teal',
              icon: <IconCheck />,
              className: 'my-notification-class',
              style: { backgroundColor: 'white' },
              sx: { backgroundColor: 'teal' },
              loading: true,
            });
          setTimeout(() => {
            navigate("/");
          }, '1000');
          return DEFAULT_USER
        };
      }).then(function(data) {
        if(data.user !== undefined && Object.keys(data.user).length > 0 ) {
          dispatch(menuUser(data.user));
          return data.user
        } else {
          dispatch(menuUser(data));
          return data
        }
      }).then(function() {
        /**Only redirect if not '/learn' path */
        const result = () => {
          console.log("⏳ Delay | Redirect in 1 second");
          navigate("/learn");
        };
        if(path !== '/learn') {
          setTimeout(() => {result}, "1000");
        };  
      })
    } catch(error) {
      console.log("🚫 Guest | Failed to Verify | Please Login")
      console.log(error);
    }
  },[dispatch, navigate, path]);

  useEffect(() => {
    if(getUser === undefined) {
      guestVerify();
    }
    if(getUser._ID.trim() === '123-456-789') {
      guestVerify();
    }
  },[dispatch, getUser, guestVerify]);

  return (
    <div className="tw-h-screen">
      {/**Background | Position: Absolute */}
      <div className={`${ darkMode ? 'home-bg-dark' : 'home-bg-light' } home-bg-container`}/>
      {/**Page Content | Position: Relative */}
      <article className={`${isDesktopMDXL || isDesktopXL ? 'tw-min-w-[51.2em]' : 'tw-min-w-[28.5em]'} dashboard-article`}>
        <header className="tw-w-full"><Header /></header>
        <header className="tw-w-full">{path !== '/learn' && <D_Header/>}</header>
        {isDesktopMDXL || isDesktopXL ?
          <div className="">
            { path === '/learn' ?
              <main className={`${darkMode ? 'dashboard-container-dark' : 'dashboard-container-light'} dashboard-container-desktop-learn`}>
                <Outlet/>
              </main>
              :
              <main className={`${darkMode ? 'dashboard-container-dark' : 'dashboard-container-light'} dashboard-container-desktop`}>
                <section className={`tw-row-start-1 tw-row-end-2 tw-col-start-1 tw-col-end-1 `}>
                  <D_Navigation/>
                </section>
                <section className={`tw-row-start-1 tw-row-end-2 tw-col-start-2 tw-col-end-3 `}>
                  <Outlet/>
                </section>
              </main>
            }
          </div>
          :
          <main className={`${darkMode ? 'dashboard-container-dark' : 'dashboard-container-light'} tw-px-5 tw-py-2 tw-w-full`}>
            <section className='tw-col-start-1 tw-col-end-1 tw-row-start-1 tw-row-end-1 tw-z-20'>
              <D_Navigation_Mobile/>
            </section>
            <section className='tw-col-start-1 tw-col-end-1 tw-row-start-2 tw-row-end-2'>
              <Outlet/>
            </section>
          </main>
        }
      </article>
    </div>
  )
}

export default Dashboard
 
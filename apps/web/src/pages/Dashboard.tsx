// Page: Dashboard
import { useContext, useEffect, useState, useCallback } from 'react';
import { Outlet, useLocation, useParams, useNavigate } from 'react-router-dom';
import type { Location, Params } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
/** Custom Hooks */
import useWindowSize from '../hooks/useWindowSize';
//import Transition from '../hooks/useTransition';
/** Components */
import Header from '../components/header/Header';
import Header_Dashboard from '../components/dashboard/D_Header';
import D_Navigation from '../components/dashboard/D_Navigation';
import D_NavigationMobile from '../components/dashboard/D_Navigation_Mobile';
import D_Route from '../components/dashboard/D_Route';
import D_Route_User_Editor from '../components/dashboard/D_Route_User_Editor';
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
import { detectTokenFromLocalStorage, getTokenFromLocalStorage, removeTokenFromLocalStorage } from '../utils/common';
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
  const getUser = useAppSelector((state:RootState) => state?.dashboard?.user);

  /**Detect User Browser Path */
  const location = useLocation();
  const params = useParams();
  
  const [path, setPath] = useState();

  useEffect(() => {
    setPath(getRoutePath(location, params));
  }, [location, params]);

  const noLanguagePaths = () => {
    if( path === '/learn' || path === '/learn/calendar' || path === '/learn/docs' || path === '/learn/notes' || path === '/learn/settings/dashboard' ||  path === '/learn/settings/user') {
      return true
    } else {
      return false
    }
  };

  const pathFilter = noLanguagePaths();
  /** Guest Login */
  const guestLogin = useCallback(async () => {
    try {
      const token = getTokenFromLocalStorage();
      //console.log("token:", token);
      let url;
      if(import.meta.env.PROD) {
        url = `${baseURL}/guest/verify`;
      } else {
        url = `/api/guest/verify`;
      }
      await fetch(url, { 
        method: 'POST',
        headers: {
          'Accept' : 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({token: `${token}`}),        
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
            removeTokenFromLocalStorage()
          }
      }).then(function(response) {
        //console.log("response", response);
        return response.json()
      }).then(function(response) {
        const data = response;
        //console.log("data auth:", data.authenticated)
        if(data.authenticated) {
          console.log("✅ Guest | Verified");
          //console.log("data,user:", data.user)
          return data
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
        };
      }).then(function(data) {
        if(data.user !== undefined && Object.keys(data.user).length > 0 ) {
          dispatch(menuUser(data.user));
        };
        return data
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
    const auth = detectTokenFromLocalStorage();
    if(auth && getUser === undefined) {
      guestLogin();
    }
    if(auth && getUser._ID.trim() === '123-456-789') {
      guestLogin();
    }
    if(!auth && getUser === undefined) {
      dispatch(menuUser(DEFAULT_USER));
    }
  },[dispatch, getUser, guestLogin]);

  return (
    <div className="tw-font-space_mono">
      {/**Background | Position: Absolute */}
      <div className={`${ darkMode ? 'tw-bg-[url(../assets/bg/sw-1.jpg),_url(../assets/bg/landscape.jpg)] tw-bg-blend-overlay tw-opacity-40' : 'tw-bg-[url(../assets/bg/sw-1.jpg),_url(../assets/bg/landscape.jpg)] tw-bg-blend-overlay tw-opacity-40'} 
      tw-fixed tw-bg-cover tw-bg-center tw-bg-no-repeat tw-h-full tw-w-full `}/>
      {/**Page Content | Position: Relative */}
      <article className={`${isDesktopMDXL || isDesktopXL ? 'tw-min-w-[51.2em]' : 'tw-min-w-[28.5em]'} tw-w-full tw-relative tw-z-10 tw-h-screen tw-flex tw-flex-col tw-grow tw-place-items-center`}>
        <Header />
        {path !== '/learn' && <Header_Dashboard />}
        {isDesktopMDXL || isDesktopXL ?
        <div className="tw-w-full tw-h-full">
          { path === '/learn' && 
            <main className={`${darkMode ? '[&>section]:tw-backdrop-brightness-25 ' 
            : '[&>section]:tw-backdrop-brightness-85'}
            tw-bg-transparent tw-pb-5 tw-mt-1 tw-w-full tw-h-full 
            [&>*]:tw-backdrop-blur-sm
            tw-grid tw-gap-1 tw-px-5 [&>*]:tw-rounded tw-border tw-border-transparent`}>
              <Outlet/>
            </main>
          }
          { path === '/learn/code' && 
            <main className={`${darkMode ? '[&>section]:tw-backdrop-brightness-25 ' 
            : '[&>section]:tw-backdrop-brightness-85'}
            tw-grid-rows-dashboard-extended tw-grid-cols-dashboard tw-bg-transparent tw-pb-5 tw-mt-1 tw-w-full tw-h-full 
            [&>*]:tw-backdrop-blur-sm tw-min-h-[30em]
            tw-grid tw-gap-1 tw-px-5 [&>*]:tw-rounded tw-border tw-border-transparent`}>
              <section className={`${pathFilter ? 'tw-row-end-2' : 'tw-row-end-3'} 
              tw-col-start-1 tw-col-end-1 tw-row-start-1 `}>
                <D_Navigation/>
              </section>
              {!pathFilter &&
              <section className={`tw-col-start-2 tw-col-end-3 tw-row-start-1 tw-row-end-1`}>
                <D_Route/>
              </section>
              }
              <div className={`${pathFilter ? 'tw-row-start-1 tw-row-end-2' 
              : ' tw-row-start-2 tw-row-end-3'} tw-col-start-2 tw-col-end-3 `}>
                <Outlet/>
              </div>
            </main>
          }
          { path === '/learn/categories' && 
            <main className={`${darkMode ? '[&>section]:tw-backdrop-brightness-25 ' 
            : '[&>section]:tw-backdrop-brightness-85'}
            tw-grid-rows-dashboard-extended tw-grid-cols-dashboard tw-bg-transparent tw-pb-5 tw-mt-1 tw-w-full tw-h-full 
            [&>*]:tw-backdrop-blur-sm tw-min-h-[30em]
            tw-grid tw-gap-1 tw-px-5 [&>*]:tw-rounded tw-border tw-border-transparent`}>
              <section className={`${pathFilter ? 'tw-row-end-2' : 'tw-row-end-3'} 
              tw-col-start-1 tw-col-end-1 tw-row-start-1 `}>
                <D_Navigation/>
              </section>
              {!pathFilter &&
              <section className={`tw-col-start-2 tw-col-end-3 tw-row-start-1 tw-row-end-1`}>
                <D_Route/>
              </section>
              }
              <div className={`${pathFilter ? 'tw-row-start-1 tw-row-end-2' 
              : ' tw-row-start-2 tw-row-end-3'} tw-col-start-2 tw-col-end-3 `}>
                <Outlet/>
              </div>
            </main>
          }
          { path === '/learn/calendar' && 
            <main className={`${darkMode ? '[&>section]:tw-backdrop-brightness-25 ' 
            : '[&>section]:tw-backdrop-brightness-85'}
            tw-grid-rows-dashboard-no-langauge tw-grid-cols-dashboard tw-bg-transparent tw-pb-5 tw-mt-1 tw-w-full tw-h-full 
            [&>*]:tw-backdrop-blur-sm tw-min-h-[30em]
            tw-grid tw-gap-1 tw-px-5 [&>*]:tw-rounded tw-border tw-border-transparent`}>
              <section className={`tw-row-start-1 tw-row-end-2 tw-col-start-1 tw-col-end-1`}>
                <D_Navigation/>
              </section>
              {!pathFilter &&
              <section className={`tw-col-start-2 tw-col-end-3 tw-row-start-1 tw-row-end-1`}>
                 <D_Route/>
              </section>
              }
              <div className={`${pathFilter ? 'tw-row-start-1 tw-row-end-2' 
              : ' tw-row-start-2 tw-row-end-3'} tw-col-start-2 tw-col-end-3 `}>
                <Outlet/>
              </div>
            </main>
          }
          { path === '/learn/docs' && 
            <main className={`${darkMode ? '[&>section]:tw-backdrop-brightness-25 ' 
            : '[&>section]:tw-backdrop-brightness-85'}
            tw-grid-rows-dashboard-no-langauge tw-grid-cols-dashboard tw-bg-transparent tw-pb-5 tw-mt-1 tw-w-full tw-h-full 
            [&>*]:tw-backdrop-blur-sm tw-min-h-[30em]
            tw-grid tw-gap-1 tw-px-5 [&>*]:tw-rounded tw-border tw-border-transparent`}>
              <section className={`tw-row-end-2 tw-col-start-1 tw-col-end-1 tw-row-start-1 `}>
                <D_Navigation/>
              </section>
              {!pathFilter &&
              <section className={`tw-col-start-2 tw-col-end-3 tw-row-start-1 tw-row-end-1`}>
                <D_Route/>
              </section>
              }
              <div className={`tw-row-start-1 tw-row-end-2 tw-col-start-2 tw-col-end-3 `}>
                <Outlet/>
              </div>
            </main>
          }
          { path === '/learn/notes' && 
            <main className={`${darkMode ? '[&>section]:tw-backdrop-brightness-25 ' 
            : '[&>section]:tw-backdrop-brightness-85'}
            tw-grid-rows-dashboard-no-language tw-grid-cols-dashboard tw-bg-transparent tw-pb-5 tw-mt-1 tw-w-full tw-h-full 
            [&>*]:tw-backdrop-blur-sm tw-min-h-[30em]
            tw-grid tw-gap-1 tw-px-5 [&>*]:tw-rounded tw-border tw-border-transparent`}>
              <section className={`tw-row-end-2 tw-col-start-1 tw-col-end-1 tw-row-start-1 `}>
                <D_Navigation/>
              </section>
              {!pathFilter &&
              <section className={`tw-col-start-2 tw-col-end-3 tw-row-start-1 tw-row-end-1`}>
                <D_Route/>
              </section>
              }
              <div className={`tw-row-start-1 tw-row-end-2 tw-col-start-2 tw-col-end-3 `}>
                <Outlet/>
              </div>
            </main>
          }
          { path === '/learn/settings/user' && 
            <main className={`${darkMode ? '[&>section]:tw-backdrop-brightness-25 ' 
            : '[&>section]:tw-backdrop-brightness-85'}
            tw-grid-rows-dashboard-no-language tw-grid-cols-dashboard tw-bg-transparent tw-pb-5 tw-mt-1 tw-w-full tw-h-full 
            [&>*]:tw-backdrop-blur-sm tw-min-h-[30em]
            tw-grid tw-gap-1 tw-px-5 [&>*]:tw-rounded tw-border tw-border-transparent`}>
              <section className={`tw-row-end-2 tw-col-start-1 tw-col-end-1 tw-row-start-1 `}>
                <D_Navigation/>
              </section>
              {!pathFilter &&
              <section className={`tw-col-start-2 tw-col-end-3 tw-row-start-1 tw-row-end-1`}>
                <D_Route/>
              </section>
              }
              <div className={`tw-row-start-1 tw-row-end-2 tw-col-start-2 tw-col-end-3 `}>
                <Outlet/>
              </div>
            </main>
          }
          { path === '/learn/settings/dashboard' && 
            <main className={`${darkMode ? '[&>section]:tw-backdrop-brightness-25 ' 
            : '[&>section]:tw-backdrop-brightness-85'}
            tw-grid-rows-dashboard-no-language tw-grid-cols-dashboard tw-bg-transparent tw-pb-5 tw-mt-1 tw-w-full tw-h-full 
            [&>*]:tw-backdrop-blur-sm tw-min-h-[30em]
            tw-grid tw-gap-1 tw-px-5 [&>*]:tw-rounded tw-border tw-border-transparent`}>
              <section className={`tw-row-end-2 tw-col-start-1 tw-col-end-1 tw-row-start-1 `}>
                <D_Navigation/>
              </section>
              {!pathFilter &&
              <section className={`tw-col-start-2 tw-col-end-3 tw-row-start-1 tw-row-end-1`}>
                <D_Route/>
              </section>
              }
              <div className={`tw-row-start-1 tw-row-end-2 tw-col-start-2 tw-col-end-3 `}>
                <Outlet/>
              </div>
            </main>
          }
        </div>
        :
        <main className={`${darkMode ? '[&>section]:tw-backdrop-brightness-25 ' 
        : '[&>section]:tw-backdrop-brightness-85'} 
          tw-bg-transparent tw-pb-5 tw-mt-1 tw-w-full tw-h-full tw-grow [&>*]:tw-backdrop-blur-sm
          tw-grid tw-grid-rows-dashboard-mobile tw-grid-cols-dashboard-mobile tw-gap-1 tw-px-5 [&>*]:tw-rounded tw-border tw-border-transparent`}>
            {/** z index can't go higher than 50 to work*/}
            <section className='tw-row-start-1 tw-row-end-1 tw-z-50'>
              <D_NavigationMobile/>
            </section>
            <section className=' tw-row-start-2 tw-row-end-2'>
              {path === '/learn/editor' ? <D_Route_User_Editor/> : <D_Route/>}
            </section>
            <div className='tw-row-start-3 tw-row-end-6'>
              <Outlet/>
            </div>
        </main>
        }
      </article>
    </div>
  )
}

export default Dashboard
 
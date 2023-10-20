// Page: Dashboard
import { useContext, useEffect, useState, useCallback } from 'react'
import { Outlet, useLocation, useParams, useNavigate } from 'react-router-dom'
import type { Location, Params } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'
/** Custom Hooks */
import useWindowSize from '../hooks/useWindowSize'
//import Transition from '../hooks/useTransition';
/** Components */
import Header from '../components/header/Header_Dashboard'
import D_Header from '../components/dashboard/D_Header'
import D_Navigation from '../components/dashboard/D_Navigation'
import D_Navigation_Mobile from '../components/dashboard/D_Navigation_Mobile'
//import D_Route from '../components/dashboard/D_Route';
//import D_Route_User_Editor from '../components/dashboard/D_Route_User_Editor';
/** Notifications */
import { notifications } from '@mantine/notifications'
import { IconX, IconCheck } from '@tabler/icons-react'
import Emoji from 'react-emojis'
/** React Redux Hooks */
//import { useAppDispatch } from '../redux/reduxHooks.ts';
import { useAppDispatch, useAppSelector } from '../redux/reduxHooks.ts'
import type { RootState } from '../redux/store.ts'
import {
  updateUser,
  userLogout,
  userAuthMe,
  userVerify,
  screenLoader,
  fetchUser,
  fetchUserAuth,
  fetchUserStatus,
  fetchUserScreenLoader,
} from '../redux/slices/authSlice.ts'
/**Custom Helpers */
import { _DEFAULT_USER } from '../utils/constants/constantsUser'
import { LoadingDashboardXL } from '../components/dashboard/loading'
/** API url | Custom env mandatory to begin with VITE
 * https://vitejs.dev/guide/env-and-mode.html#env-files */
const baseURL = import.meta.env.VITE_API_BASE_URL

const getRoutePath = (location: Location, params: Params): string => {
  const { pathname } = location
  if (!Object.keys(params).length) {
    return pathname // we don't need to replace anything
  }
  let path = pathname
  Object.entries(params).forEach(([paramName, paramValue]) => {
    if (paramValue) {
      path = path.replace(paramValue, `:${paramName}`)
    }
  })
  return path
}

const Dashboard = () => {
  const { isDesktopMDXL, isDesktopXL } = useWindowSize()
  const { state } = useContext(ThemeContext)
  const darkMode = state.darkMode

  /** Navigation */
  const navigate = useNavigate()

  /**Detect User Browser Path */
  const location = useLocation()
  const params = useParams()

  const [path, setPath] = useState()

  useEffect(() => {
    setPath(getRoutePath(location, params))
  }, [location, params])

  /** Redux Dispatch Instance */
  const dispatch = useAppDispatch()

  /** Loading Screen */
  const [loading, setLoading] = useState(true)

  /** Redux Store: User */
  const getUser = useAppSelector(fetchUser)
  const authenticated = useAppSelector(fetchUserAuth)
  const status = useAppSelector(fetchUserStatus)
  const fetchScreenLoader = useAppSelector(fetchUserScreenLoader)

  /**Detect Auth */
  const [auth, setAuth] = useState(true)

  /** Guest AuthMe */
  const guestAuthMe = useCallback(async () => {
    try {
      /** Fetch User Request and return(unwrap) API Request Result */
      const originalPromiseResult = await dispatch(userAuthMe()).unwrap()
      if (originalPromiseResult === undefined || originalPromiseResult.error) {
        console.log('🚫 Guest | Invalid User')
        setAuth(false)
        // Failure Notification
        notifications.show({
          id: 'failure',
          withCloseButton: true,
          autoClose: 2000,
          title: 'Verification Error',
          message: 'User Not Found. Please Login',
          color: 'red',
          icon: <IconX />,
          className: 'my-notification-class',
          style: { backgroundColor: 'white' },
          sx: { backgroundColor: 'red' },
          loading: false,
        })
        setTimeout(() => {
          navigate('/auth/guest/login')
        }, '600')
      } else {
        setLoading(true)
        /** Fetch Verification Request and return(unwrap) API Request Result */
        const verifiedPromiseResult = await dispatch(userVerify()).unwrap()
        //console.log("verifiedPromiseResult:\n", verifiedPromiseResult)
        if (verifiedPromiseResult === undefined || verifiedPromiseResult.error) {
          console.log('🚫 Guest | Invalid User')
          /** Set Authentication to false if Verification Error */
          setAuth(false)
          // Failure Notification
          notifications.show({
            id: 'failure',
            withCloseButton: true,
            autoClose: 2000,
            title: 'Verification Error',
            message: '',
            color: 'red',
            icon: <IconX />,
            className: 'my-notification-class',
            style: { backgroundColor: 'white' },
            sx: { backgroundColor: 'red' },
            loading: false,
          })
          setTimeout(async () => {
            /** Logout If Authentication Error */
            await dispatch(userLogout()).unwrap()
            /** Redirect to Not Found Page */
            await navigate('/')
          }, '400')
        } else if (Object.keys(verifiedPromiseResult).length === 0) {
          setLoading(true)
          console.log('❓ Guest | Not Found')
          /** Set Authentication to false if Verification Error */
          setAuth(false)
          // Failure Notification
          notifications.show({
            id: 'failure',
            withCloseButton: true,
            autoClose: 2000,
            title: 'User Not Found',
            message: '',
            color: 'red',
            icon: <Emoji emoji="white-question-mark" />,
            className: 'my-notification-class',
            style: { backgroundColor: 'white' },
            sx: { backgroundColor: 'gray' },
            loading: false,
          })
          setTimeout(async () => {
            /** Logout If Authentication Error */
            await dispatch(userLogout()).unwrap()
            /** Redirect to HomePage */
            await navigate('/404')
          }, '400')
        } else {
          console.log('👍 Guest | Verified')
          setAuth(true)
          // Success Notification
          notifications.show({
            id: 'success',
            withCloseButton: true,
            autoClose: 1000,
            title: 'Verifying...',
            message: '',
            color: 'teal',
            icon: <IconCheck />,
            className: 'my-notification-class',
            style: { backgroundColor: 'white' },
            sx: { backgroundColor: 'teal' },
            loading: true,
          })
        }
      }
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    guestAuthMe()
  }, [])

  setTimeout(async () => {
    setLoading(false)
  }, '1000')

  setTimeout(async () => {
    dispatch(screenLoader(false))
  }, '1000')

  return (
    <div className="tw-h-screen">
      {/**Background | Position: Absolute */}
      <div className={`${darkMode ? 'home-bg-dark' : 'home-bg-light'} home-bg-container`} />
      {/**Page Content | Position: Relative */}
      <article
        className={`${isDesktopMDXL || isDesktopXL ? 'tw-min-w-[51.2em]' : 'tw-min-w-[28.5em]'} dashboard-article`}
      >
        <header className="tw-w-full">
          <Header />
        </header>
        <header className="tw-w-full">{path !== '/learn' && <D_Header />}</header>
        {loading || fetchScreenLoader ? (
          <div
            className={`${
              darkMode ? '[&>*]:tw-bg-neutral-900/70' : '[&>*]:tw-bg-neutral-300/70'
            } tw-text-transparent tw-flex tw-flex-col tw-w-full tw-h-screen tw-place-self-center tw-place-content-center tw-place-items-center tw-p-2`}
          >
            <LoadingDashboardXL />
          </div>
        ) : (
          <>
            {isDesktopMDXL || isDesktopXL ? (
              <>
                {path === '/learn' ? (
                  <main
                    className={`${
                      darkMode ? 'dashboard-container-dark' : 'dashboard-container-light'
                    } dashboard-container-desktop-learn`}
                  >
                    <Outlet />
                  </main>
                ) : (
                  <main
                    className={`${
                      darkMode ? 'dashboard-container-dark' : 'dashboard-container-light'
                    } dashboard-container-desktop`}
                  >
                    <section className={`tw-row-start-1 tw-row-end-2 tw-col-start-1 tw-col-end-1 `}>
                      <D_Navigation />
                    </section>
                    <section className={`tw-row-start-1 tw-row-end-2 tw-col-start-2 tw-col-end-3 `}>
                      <Outlet />
                    </section>
                  </main>
                )}
              </>
            ) : (
              <main
                className={`${
                  darkMode ? 'dashboard-container-dark' : 'dashboard-container-light'
                } tw-px-5 tw-py-2 tw-w-full`}
              >
                <section className="tw-col-start-1 tw-col-end-1 tw-row-start-1 tw-row-end-1 tw-z-20">
                  <D_Navigation_Mobile />
                </section>
                <section className="tw-col-start-1 tw-col-end-1 tw-row-start-2 tw-row-end-2">
                  <Outlet />
                </section>
              </main>
            )}
          </>
        )}
      </article>
    </div>
  )
}

export default Dashboard

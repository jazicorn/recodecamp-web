/** React */
import { useContext, useState, useEffect, useCallback } from 'react';
import { Link, useNavigate, useLocation, useParams } from 'react-router-dom';
/** Custom Hooks */
import useWindowSize from '../../hooks/useWindowSize';
import Transition from '../../hooks/useTransition';
/** Icons */
import { IconMenu2 } from '@tabler/icons-react';
import { ThemeContext } from '../../context/ThemeContext';
import { ReactComponent as Logo } from '../../assets/icons/logos/campfire-2-svgrepo-com.svg';
import { ReactComponent as Moon } from '../../assets/icons/settings/moon-cloudy-svgrepo-com.svg';
import { ReactComponent as Sun } from '../../assets/icons/settings/sun-svgrepo-com.svg';
import { removeTokenFromLocalStorage, getTokenFromLocalStorage } from '../../utils/common';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
/** Redux */
//import { useAppDispatch } from '../../redux/reduxHooks.ts';
import { useAppDispatch, useAppSelector } from '../../redux/reduxHooks.ts';
import type { RootState } from '../../redux/store.ts';
import {
  validUser,
  updateUser,
  updateAuthentication,
  userLogout,
  userAuthMe,
  userVerify,
  fetchUser,
  fetchUserAuth,
  fetchUserStatus,
} from '../../redux/slices/authSlice.ts';
import { _DEFAULT_USER } from '../../utils/constants/constantsUser.ts';
/** Notifications */
import { notifications } from '@mantine/notifications';
import { Loader } from '@mantine/core';
import { IconX, IconCheck } from '@tabler/icons-react';
//import { IconX, IconCheck } from '@tabler/icons-react';
import Emoji from 'react-emojis';
/** Button Components */
import Button_User_Logout from '../buttons/Button_User_Logout';
import Button_User_Login from '../buttons/Button_User_Login';
import Button_Dashboard from '../buttons/Button_Dashboard';

/** API url | Custom env mandatory to begin with VITE
 * https://vitejs.dev/guide/env-and-mode.html#env-files */
const baseURL = import.meta.env.VITE_API_BASE_URL;

/** Get Browser Route */
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

/** Refresh Page */
const refreshPage = () => {
  window.location.reload(false);
};

/** Component | Header */
const Header = () => {
  const { isMobile } = useWindowSize();

  /** Set User Preferences */
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  //turn darkmode on and off
  const toggleTheme = () => {
    if (darkMode) {
      theme.dispatch({ type: 'LIGHTMODE', darkMode: false });
      localStorage.theme = 'light';
    } else {
      theme.dispatch({ type: 'DARKMODE', darkMode: true });
      localStorage.theme = 'dark';
    }
  };

  /** Get Route Parameters */
  const location = useLocation();
  const params = useParams();

  const [path, setPath] = useState();

  useEffect(() => {
    setPath(getRoutePath(location, params));
  }, [location, params]);

  const pagesPath = () => {
    if (path !== '/') {
      return true;
    } else {
      return false;
    }
  };

  const homePath = () => {
    if (path === '/') {
      return true;
    } else {
      return false;
    }
  };

  const pathFilter = pagesPath();

  const [menu, setMenu] = useState(true);

  function isMenu(e) {
    e.preventDefault();
    setMenu(!menu);
    console.log(menu);
  }

  useEffect(() => {
    menu;
  }, [menu]);

  /** Loading Screen */
  const [loading, setLoading] = useState(false);

  /** Button Loader */
  const [loadingButton, setLoadingButton] = useState(true);

  setTimeout(() => {
    setLoadingButton(false);
  }, '1000');

  /** Initialize Navigation */
  const navigate = useNavigate();

  /** Redux Dispatch Instance */
  const dispatch = useAppDispatch();

  /** Redux Store: User */
  const getUser = useAppSelector(fetchUser);
  const authenticated = useAppSelector(fetchUserAuth);
  const status = useAppSelector(fetchUserStatus);

  const [auth, setAuth] = useState(false);

  /** Guest AuthMe */
  const guestAuthMe = useCallback(async () => {
    setAuth(false);
    try {
      const originalPromiseResult = await dispatch(userAuthMe()).unwrap();
      if (originalPromiseResult === undefined || originalPromiseResult.error) {
        setAuth(false);
        if (status === 'idle') {
          console.log('❓ Guest | Idle');
        } else if (status === 'loading') {
          console.log('🔄 Guest | Loading');
          setLoadingButton(true);
        } else if (status === 'failed') {
          console.log('🚫 Guest | Not Detected');
        } else if (status === 'succeeded') {
          console.log('🚫 Guest | Not Detected');
        } else {
          console.log('🚫 Guest | Not Detected');
        }
      } else {
        setAuth(true);
        console.log('🧑 Guest | Detected');
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    guestAuthMe();
  }, []);

  if (isMobile) {
    return (
      <div
        className={`${darkMode ? 'tw-bg-campfire-neutral-900/70 tw-text-campfire-blue' : 'tw-bg-neutral-300/70'} ${
          menu ? 'tw-h-fit ' : 'tw-px-5'
        } tw-font-space_mono tw-text-sm tw-flex tw-flex-col tw-w-full tw-relative tw-z-20 tw-place-items-center tw-grow-0`}
      >
        <header className={`tw-grow-0 tw-h-[48px] tw-px-2 tw-w-full tw-flex tw-flex-row tw-justify-between tw-rounded`}>
          <nav className="tw-flex tw-flex-row tw-place-self-center">
            <button onClick={(e) => isMenu(e)} className="tw-place-self-center">
              <Transition>
                <IconMenu2 style={{ height: 22, width: 36 }} />
              </Transition>
            </button>
          </nav>
          <ol className="tw-flex tw-flex-row tw-items-center tw-pl-0.5 tw-ml-10">
            {!darkMode ? (
              <li>
                <button className="tw-place-self-center" onClick={toggleTheme}>
                  <Transition>
                    <Sun style={{ height: 24, width: 36 }} />
                  </Transition>
                </button>
              </li>
            ) : (
              <li>
                <button className="tw-place-self-center" onClick={toggleTheme}>
                  <Transition>
                    <Moon style={{ height: 24, width: 36 }} />
                  </Transition>
                </button>
              </li>
            )}
          </ol>
        </header>
        {menu && (
          <div
            className={`${
              darkMode ? 'tw-border-neutral-500 tw-bg-neutral-800' : 'tw-bg-neutral-100 tw-border-neutral-800'
            } tw-border-t-2 tw-w-full tw-h-fit tw-py-4 tw-px-4`}
          >
            <Transition>
              <div className="tw-flex tw-flex-row tw-place-content-center tw-pb-4 tw-pt-2">
                <Link to={`/`} className="tw-flex tw-flex-row">
                  <span className="">
                    <Logo style={{ height: 26, width: 40 }} />
                  </span>
                  <h5 className={`tw-text-2xl ${darkMode ? '' : ''} hover:tw-text-campfire-blue`}>ReCodeCamp</h5>
                </Link>
              </div>
            </Transition>
            <Transition>
              <ul
                className={`${
                  darkMode ? 'tw-text-neutral-300' : ''
                } [&>li]:tw-font-space_mono tw-flex tw-flex-col [&>li]:tw-text-xl
          [&>li]:tw-pl-1 [&>li]:tw-h-[32px] tw-pr-3`}
              >
                {/* <li className={`${darkMode ? "" : ""} hover:tw-text-campfire-blue`}>
              <Link to={'/about'}>About</Link>
            </li>
            <li className={`${darkMode ? "" : ""} hover:tw-text-campfire-blue`}>
              <Link to={`/contact`}>Contact</Link>
            </li> */}
                <li
                  className={`${
                    darkMode ? '' : ''
                  } tw-underline tw-decoration-dashed tw-decoration-2 hover:tw-text-campfire-blue`}
                >
                  <Button_Dashboard/>
                  {/* <Link to={`/learn`}>Dashboard</Link> */}
                </li>
                {loadingButton ? (
                  <li
                    className={`${
                      darkMode
                        ? 'tw-bg-neutral-400 tw-text-campfire-neutral-900 hover:tw-bg-campfire-neutral-300'
                        : 'tw-bg-neutral-800 tw-text-campfire-neutral-100 hover:tw-bg-campfire-neutral-400'
                    } 
              tw-font-space_mono tw-rounded tw-py-1 tw-flex tw-flex-row tw-place-content-center`}
                  >
                    <Loader color="gray" size="xs" className="tw-place-self-center" />
                  </li>
                ) : (
                  <>
                    {!auth ? (
                      <>
                        <li
                          className={`${
                            darkMode
                              ? 'tw-bg-neutral-400 tw-text-campfire-neutral-900 hover:tw-bg-campfire-neutral-300'
                              : 'tw-bg-neutral-800 tw-text-campfire-neutral-100 hover:tw-bg-campfire-neutral-400'
                          } tw-font-space_mono tw-rounded tw-py-1 tw-flex tw-flex-row tw-place-content-center`}
                        >
                          <Button_User_Login />
                        </li>
                      </>
                    ) : (
                      <>
                        <li
                          className={`${
                            darkMode
                              ? 'tw-bg-neutral-400 tw-text-campfire-neutral-900 hover:tw-bg-campfire-neutral-300'
                              : 'tw-bg-neutral-800 tw-text-campfire-neutral-100 hover:tw-bg-campfire-neutral-400'
                          } tw-font-space_mono tw-rounded tw-pl-1 tw-mt-1 tw-ml-1 tw-flex tw-flex-row tw-place-content-center`}
                        >
                          <Button_User_Logout />
                        </li>
                      </>
                    )}
                  </>
                )}
              </ul>
            </Transition>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`${pathFilter && !darkMode && 'tw-bg-campfire-neutral-200/70 '} ${
        darkMode ? 'tw-bg-campfire-neutral-900/70 tw-text-campfire-neutral-300' : 'tw-bg-light'
      } tw-font-space_mono tw-flex tw-flex-col tw-w-full tw-place-items-center tw-px-5 tw-relative`}
    >
      <header className={`tw-grow-0 tw-h-[48px] tw-px-2 tw-w-full tw-flex tw-flex-row tw-justify-between tw-rounded`}>
        <Link to={`/`} className="tw-flex tw-flex-row tw-place-self-center">
          <span className="tw-pt-1 ">
            <Transition>
              <Logo style={{ height: 24, width: 24 }} />
            </Transition>
          </span>
          <h5 className={`tw-text-2xl  tw-pl-2 hover:tw-text-campfire-blue`}>
            <Transition>ReCodeCamp</Transition>
          </h5>
        </Link>
        <nav className="tw-flex tw-flex-row tw-items-center tw-pl-4 tw-ml-2 tw-font-space_grotesk_medium">
          <ul className={`${darkMode ? '' : ''} [&>li]:tw-text-lg tw-flex tw-flex-row tw-gap-5`}>
            {/* <li className={`${darkMode ? "" : ""} hover:tw-text-campfire-blue tw-self-center`}>
              <Link to={'/about'}><Transition>About</Transition></Link>
            </li>
            <li className={`${darkMode ? "" : ""} hover:tw-text-campfire-blue tw-self-center`}>
              <Link to={`/contact`}><Transition>Contact</Transition></Link>
            </li> */}
            <li
              className={`${
                darkMode ? '' : ''
              } hover:tw-text-campfire-blue tw-flex tw-flex-row tw-content-center tw-place-self-center tw-underline tw-decoration-dashed tw-decoration-2`}
            >
              <Button_Dashboard/>
            </li>
            <>
              {loadingButton ? (
                <li>
                  <button
                    className={`${
                      darkMode
                        ? 'tw-bg-neutral-200 tw-text-campfire-neutral-900 hover:tw-bg-campfire-neutral-400'
                        : 'tw-bg-neutral-800 tw-text-campfire-neutral-100 hover:tw-bg-campfire-neutral-400'
                    } tw-rounded tw-px-4 tw-py-1.5 tw-flex tw-flex-row tw-font-space_grotesk_medium tw-text-[17px] tw-w-[5.5em] tw-h-[1.8em] tw-flex tw-place-content-center tw-place-items-center`}
                  >
                    <Loader color="gray" size="xs" className="" />
                  </button>
                </li>
              ) : (
                <>
                  {auth ? (
                    <li>
                      <div
                        className={`${
                          darkMode
                            ? 'tw-bg-neutral-200 tw-text-campfire-neutral-900 hover:tw-bg-campfire-neutral-400'
                            : 'tw-bg-neutral-800 tw-text-campfire-neutral-100 hover:tw-bg-campfire-neutral-400'
                        } tw-rounded tw-px-4 tw-flex tw-flex-row tw-font-space_grotesk_medium tw-text-[17px] tw-w-[5.5em] tw-h-[1.8em] tw-flex tw-place-content-center tw-place-items-center`}
                      >
                        {loading ? <Loader color="gray" size="xs" className="" /> : <Button_User_Logout />}
                      </div>
                    </li>
                  ) : (
                    <li>
                      <div
                        className={`${
                          darkMode
                            ? 'tw-bg-neutral-200 tw-text-campfire-neutral-900 hover:tw-bg-campfire-neutral-400'
                            : 'tw-bg-neutral-800 tw-text-campfire-neutral-100 hover:tw-bg-campfire-neutral-400'
                        } tw-rounded tw-px-4 tw-py-1.5 tw-flex tw-flex-row tw-font-space_grotesk_medium tw-text-[17px] tw-w-[5.5em] tw-h-[1.8em] tw-flex tw-place-content-center tw-place-items-center`}
                      >
                        {loading ? <Loader color="gray" size="xs" className="" /> : <Button_User_Login />}
                      </div>
                    </li>
                  )}
                </>
              )}
            </>
          </ul>
          <ol className="tw-flex tw-flex-row tw-items-center tw-pl-0.5 tw-ml-4">
            {!darkMode ? (
              <li>
                <button className="tw-pt-1 tw-place-self-center" onClick={toggleTheme}>
                  <Transition>
                    <Sun style={{ height: 26, width: 38 }} />
                  </Transition>
                </button>
              </li>
            ) : (
              <li>
                <button className="tw-pt-1 tw-place-self-center" onClick={toggleTheme}>
                  <Transition>
                    <Moon style={{ height: 26, width: 38 }} />
                  </Transition>
                </button>
              </li>
            )}
          </ol>
        </nav>
      </header>
    </div>
  );
};

export default Header;

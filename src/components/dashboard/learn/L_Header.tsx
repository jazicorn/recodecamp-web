// Component: Header_Dashboard
/** React Imports */
import { 
  useContext, 
  useCallback, 
  useState, 
  useEffect, 
  useRef 
} from 'react';
import { 
  Link, 
  useNavigate, 
  useLocation, 
  useParams 
} from 'react-router-dom';
/** React Redux */
//import { useAppDispatch } from '../../redux/reduxHooks.ts';
import { 
  useAppDispatch, 
  useAppSelector
 } from '../../../redux/reduxHooks.ts';
import type { RootState } from '../../../redux/store.ts';
import { 
  validUser, 
  updateUser, 
  fetchUser, 
  fetchUserAuth, 
  fetchUserStatus 
} from '../../../redux/slices/authSlice.ts';
/** Custom Hooks */
import useWindowSize from '../../../hooks/useWindowSize';
import Transition from '../../../hooks/useTransition';
import { ThemeContext } from '../../../context/ThemeContext';
/** Data */
import { DEFAULT_USER } from '../../../utils/constants.ts';
/** Icons */
import { 
  IconMenu2, 
  IconUserCircle, 
  IconUser, 
  IconSettings, 
  IconDeviceDesktop 
} from '@tabler/icons-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
/** Images */
import { ReactComponent as Logo } from '../../../assets/icons/logos/campfire-2-svgrepo-com.svg';
import { ReactComponent as Moon } from '../../../assets/icons/settings/moon-cloudy-svgrepo-com.svg';
import { ReactComponent as Sun } from '../../../assets/icons/settings/sun-svgrepo-com.svg';
/** Notifications */
import { notifications } from '@mantine/notifications';
import { IconX, IconCheck } from '@tabler/icons-react';
//import { IconX, IconCheck } from '@tabler/icons-react';
import Emoji from 'react-emojis';
/** Components */
import Header_Dashboard_Menu from './L_Header_Menu';

/** API url | Custom env mandatory to begin with VITE
 * https://vitejs.dev/guide/env-and-mode.html#env-files */
const baseURL = import.meta.env.VITE_API_BASE_URL;

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

const L_Header = () => {
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

  /** Initialize Navigation */
  const navigate = useNavigate();

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

  const pathFilter = pagesPath();

  /** Redux Dispatch Instance */
  const dispatch = useAppDispatch();

  /** Redux Store: User */
  const getUser = useAppSelector(fetchUser);
  const authenticated = useAppSelector(fetchUserAuth);
  const status = useAppSelector(fetchUserStatus);

  /** User Profile | Name */
  const [userName, setUserName] = useState('');
  const createUserName = () => {
    if (
      getUser._EMAIL === undefined ||
      getUser._EMAIL.toLowerCase() === 'john@doe.com' ||
      getUser._EMAIL.length === 0
    ) {
      setUserName('Guest');
    } else {
      const emailName = getUser._EMAIL.split('@')[0];
      setUserName(emailName);
    }
  };
  useEffect(() => {
    createUserName();
  });

  /** User Profile | Status */
  const [profile, setProfile] = useState('');
  const getProfile = () => {
    if (userName === undefined || userName.toLowerCase() === 'guest' || userName.length === 0) {
      setProfile('guest');
    } else {
      setProfile(userName);
    }
  };

  useEffect(() => {
    getProfile();
  });

  /** Dropdown Menu | Mobile */
  const [mobileMenuDropdown, setMobileMenuDropdown] = useState(false);

  function toggleMobileMenuDropdown(e) {
    e.preventDefault();
    setMobileMenuDropdown(!mobileMenuDropdown);
    //console.log(mobileMenuDropdown)
  }

  const mobileRef = useRef();

  useEffect(() => {
    const mobileCheckIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (mobileMenuDropdown && mobileRef.current && !mobileRef.current.contains(e.target)) {
        setMobileMenuDropdown(!mobileMenuDropdown);
      }
    };

    document.addEventListener('mousedown', mobileCheckIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', mobileCheckIfClickedOutside);
    };
  }, [mobileMenuDropdown]);

  /** Dropdown Menu | Desktop */
  const [menuDropdown, setMenuDropdown] = useState(false);

  function toggleMenuDropdown() {
    // e.preventDefault();
    setMenuDropdown(!menuDropdown);
    //console.log(dropdown)
  }

  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (menuDropdown && ref.current && !ref.current.contains(e.target)) {
        setMenuDropdown(!menuDropdown);
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [menuDropdown]);

  if (isMobile) {
    return (
      <div
        className={`${
          darkMode ? 'tw-bg-campfire-neutral-700' : 'tw-bg-light '
        } tw-font-space_mono tw-text-sm tw-flex tw-flex-col tw-w-full tw-place-items-center tw-grow-0 tw-relative tw-z-50 tw-px-2`}
      >
        <header className={`tw-grow-0 tw-h-[48px] tw-w-full tw-flex tw-flex-row tw-justify-between tw-rounded tw-py-2`}>
          <nav className="tw-flex tw-flex-row tw-place-items-center tw-h-full">
            <div className="tw-flex tw-flex-row tw-h-full tw-items-center">
              <Link to={`/`} className="tw-flex tw-flex-row tw-pr-3">
                <span className="tw-pt-1 ">
                  <Transition>
                    <Logo style={{ height: 20, width: 20 }} />
                  </Transition>
                </span>
                <h5 className={`tw-text-[22px] ${darkMode ? '' : ''} tw-pt-1 tw-pl-1.5 hover:tw-text-campfire-blue`}>
                  <Transition>ReCodeCamp</Transition>
                </h5>
              </Link>
            </div>
          </nav>
          <ol className=" tw-h-full tw-flex tw-flex-row tw-items-center tw-pl-2 tw-ml-2">
            <li
              className={`${
                darkMode ? 'hover:tw-text-campfire-neutral-300' : 'hover:tw-text-campfire-neutral-700'
              } tw-self-items-center tw-pr-4 tw-h-full`}
            >
              <Transition>
                <button onClick={() => toggleMenuDropdown()}>
                  {darkMode ? (
                    <IconUserCircle color="#d4d4d4" width={30} height={30} />
                  ) : (
                    <IconUserCircle color="#000" width={34} height={34} />
                  )}
                </button>
              </Transition>
            </li>
            <span className="tw-border-campfire-blue tw-border-l-2 tw-pl-2">
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
            </span>
          </ol>
        </header>
        {menuDropdown ? (
          <div
            ref={ref}
            className={`${
              darkMode
                ? 'tw-bg-campfire-blue-300/90 tw-border-campfire-neutral-500/50'
                : 'tw-bg-campfire-blue-200/90 tw-border-campfire-neutral-50/50'
            } tw-border-4 tw-rounded tw-absolute tw-place-self-end tw-w-[16em] tw-h-fit tw-pt-4 tw-mt-14 tw-mr-[3em] tw-p-2 tw-z-200`}
          >
            <Header_Dashboard_Menu />
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }

  /**Desktop */
  return (
    <div
      className={`${pathFilter && !darkMode && 'tw-bg-campfire-neutral-200/70 '} ${
        darkMode ? 'tw-bg-campfire-neutral-700 tw-text-campfire-neutral-300' : 'tw-bg-light '
      } tw-flex-col
    tw-z-50 tw-relative tw-font-space_mono tw-flex tw-h-[3em] tw-w-full tw-place-items-center tw-px-5 `}
    >
      <header className={`tw-grow-0 tw-h-[48px] tw-px-2 tw-w-full tw-flex tw-flex-row tw-justify-between tw-rounded`}>
        <div className="tw-flex tw-flex-row tw-h-full tw-py-2.5">
          <Link to={`/`} className="tw-flex tw-flex-row tw-place-self-center tw-pr-3">
            <span className="tw-pt-1 ">
              <Transition>
                <Logo style={{ height: 21, width: 21 }} />
              </Transition>
            </span>
            <h5 className={`tw-text-[21px] ${darkMode ? '' : ''} tw-pl-1.5 hover:tw-text-campfire-blue`}>
              <Transition>ReCodeCamp</Transition>
            </h5>
          </Link>
          <Transition>
            <p
              className={`${
                darkMode ? '' : ''
              } tw-font-space_grotesk_medium tw-border-campfire-blue tw-border-l-2 tw-text-[17px] tw-pb-1
            tw-flex tw-row tw-items-center tw-w-full tw-h-full tw-p-2`}
            >
              <span className="tw-pl-1 tw-pr-2">👋</span>
              <span className="tw-pr-2">Welcome:</span>
              <Link
                to={`/profile/${profile}`}
                target="_blank"
                className={`${
                  darkMode
                    ? 'tw-decoration-campfire-blue tw-text-campfire-purple-300 hover:tw-text-campfire-neutral-500'
                    : 'tw-decoration-campfire-purple-300 tw-text-campfire-blue hover:tw-text-campfire-neutral-400'
                } 
                tw-font-space_grotesk_medium tw-underline tw-decoration-[3px] tw-pt-0.5`}
              >
                {userName}
              </Link>
            </p>
          </Transition>
        </div>
        <nav className="tw-flex tw-flex-row tw-items-center tw-pl-4 tw-ml-2 tw-font-space_mono">
          <ul className={`${darkMode ? '' : ''} tw-px-2 tw-py-2 tw-text-sm tw-flex tw-flex-row tw-gap-4 tw-h-full`}>
            <li
              className={`${
                darkMode ? 'hover:tw-text-campfire-neutral-300' : 'hover:tw-text-campfire-neutral-700'
              } tw-self-items-center`}
            >
              <Transition>
                <button onClick={() => toggleMenuDropdown()}>
                  {darkMode ? (
                    <IconUserCircle color="#d4d4d4" width={30} height={30} />
                  ) : (
                    <IconUserCircle color="#000" width={34} height={34} />
                  )}
                </button>
              </Transition>
            </li>
          </ul>
          <div className="tw-py-2.5 tw-h-full">
            <ol className="tw-border-campfire-blue tw-border-l-2 tw-h-full tw-flex tw-flex-row tw-items-center tw-pl-2 tw-ml-2">
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
          </div>
        </nav>
      </header>
      {menuDropdown ? (
        <div
          ref={ref}
          className={`${
            darkMode
              ? 'tw-bg-campfire-blue-300/90 tw-border-campfire-neutral-500/50'
              : 'tw-bg-campfire-blue-200/90 tw-border-campfire-neutral-50/50'
          } tw-border-4 tw-rounded tw-absolute tw-place-self-end tw-w-[16em] tw-h-[26em] tw-pt-4 tw-mt-14 tw-mr-[3em] tw-p-2 tw-z-200`}
        >
          <Header_Dashboard_Menu />
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

export default L_Header;

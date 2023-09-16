import { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// hooks
import useWindowSize from '../../hooks/useWindowSize';
import Transition from '../../hooks/useTransition';
import { useLocation, useParams } from 'react-router-dom';
// icons
import { IconMenu2 } from '@tabler/icons-react';
import { ThemeContext } from '../../context/ThemeContext';
import { ReactComponent as Logo } from '../../assets/icons/logos/campfire-2-svgrepo-com.svg';
import { ReactComponent as Moon } from '../../assets/icons/settings/moon-cloudy-svgrepo-com.svg';
import { ReactComponent as Sun } from '../../assets/icons/settings/sun-svgrepo-com.svg';
import { removeTokenFromLocalStorage, getTokenFromLocalStorage } from '../../utils/common';
/**Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
/** */
import { useAppDispatch } from '../../redux/reduxHooks.ts';
//import { useAppDispatch, useAppSelector } from '../../redux/reduxHooks.ts';
//import type { RootState } from '../../redux/store.ts';
import { 
  menuUser,
} from '../../redux/slices/dashboardSlice.ts';
import { DEFAULT_USER } from '../../utils/constants.ts';

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

const Header = () => {
  const { isMobile } = useWindowSize();

  /** Set User Preferences */
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  //turn darkmode on and off
  const toggleTheme = () => {
    if (darkMode) {
      theme.dispatch({ type: 'LIGHTMODE', darkMode: false })
      localStorage.theme = 'light'
    } else {
      theme.dispatch({ type: 'DARKMODE', darkMode: true })
      localStorage.theme = 'dark'
    }
  };

  /** Redux Dispatch Instance */
  const dispatch = useAppDispatch();

  /** User Logout */
  const navigate = useNavigate();
  const logout = (e) => {
    e.preventDefault();
    removeTokenFromLocalStorage();
    dispatch(menuUser(DEFAULT_USER));
    console.log("👋 Goodbye | User Logged Out");
    setTimeout(() => {
      console.log("⏳ Delay | Page Redirect In 1 Second.");
      navigate("/");
    }, '1000');
  };

  /** Get User Access Token From Storage */
  const accessToken = getTokenFromLocalStorage();

  const [ token, setToken] = useState('');
  useEffect(() => {
    if(accessToken === undefined || accessToken === null) {
      setToken('');
    } else {
      setToken(accessToken);
    }
  },[accessToken]);

  /** Get Route Parameters */
  const location = useLocation();
  const params = useParams();
  
  const [path, setPath] = useState();

  useEffect(() => {
    setPath(getRoutePath(location, params));
  }, [location, params]);

  const pagesPath = () => {
    if( path !== '/') {
      return true
    } else {
      return false
    }
  };

  const pathFilter = pagesPath();

  const [ menu, setMenu ] = useState(true);

  function isMenu(e) {
    e.preventDefault()
    setMenu(!menu);
    console.log(menu)
  }

  useEffect(() => {
    menu
  },[menu]);

  if(isMobile) {
    return (
      <div className={`${darkMode ? 'tw-bg-campfire-neutral-700 tw-text-campfire-blue' : 'tw-bg-light '
        } ${menu ? "tw-h-fit " : "tw-px-5"} tw-font-space_mono tw-text-sm tw-dark tw-flex tw-flex-col tw-w-full tw-place-items-center tw-grow-0`}>
        <header
          className={`tw-grow-0 tw-h-[48px] tw-px-2 tw-w-full tw-flex tw-flex-row tw-justify-between tw-rounded`}
        >
          <nav className="tw-flex tw-flex-row tw-place-self-center">
            <button className="tw-place-self-center">
              <Transition><IconMenu2 style={{ height: 22, width: 36 }} /></Transition>
            </button>
          </nav>
            <ol className="tw-flex tw-flex-row tw-items-center tw-pl-0.5 tw-ml-10">
              {!darkMode ? (
                <li>
                  <button className="tw-place-self-center" onClick={toggleTheme}>
                    <Transition><Sun style={{ height: 24, width: 36 }} /></Transition>
                  </button>
                </li>
              ) : (
                <li>
                  <button className="tw-place-self-center" onClick={toggleTheme}>
                    <Transition><Moon style={{ height: 24, width: 36 }} /></Transition>
                  </button>
                </li>
              )}
            </ol>
        </header>
        {menu && 
        <div className={`${darkMode ? "tw-border-neutral-500 tw-bg-neutral-800" : "tw-bg-neutral-100 tw-border-neutral-800"} tw-border-t-2 tw-w-full tw-h-fit tw-py-4 tw-px-4`}>
          <Transition>
          <div className="tw-flex tw-flex-row tw-place-content-center tw-pb-4 tw-pt-2">
            <Link to={`/`} className="tw-flex tw-flex-row">
              <span className="">
                <Logo style={{ height: 26, width: 40 }} />
              </span>
              <h5 className={`tw-text-2xl ${darkMode ? '' : ''} hover:tw-text-campfire-blue`}>
                ReCodeCamp
              </h5>
            </Link>
          </div>
          </Transition>
          <Transition>
          <ul className={`${darkMode ? "tw-text-neutral-300" : ""} [&>li]:tw-font-space_mono tw-flex tw-flex-col tw-gap-y-1
          [&>li]:tw-pl-1 [&>li]:tw-h-[26px] tw-pr-3`}>
            <li className={`${darkMode ? "" : ""} hover:tw-text-campfire-blue`}>
              <Link to={'/about'}>About</Link>
            </li>
            <li className={`${darkMode ? "" : ""} hover:tw-text-campfire-blue`}>
              <Link to={`/contact`}>Contact</Link>
            </li>
            <li className={`${darkMode ? "" : ""} hover:tw-text-campfire-blue`}>
              <Link to={`/learn`}>Dashboard</Link>
              <span className={`tw-float-top tw-pl-1.5 tw-self-start tw-text-xs`}>
              {darkMode ?  
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" style={{color: '#d4d4d4',}} /> :
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" style={{color: '#404040',}} />
              }
              </span>
            </li>
            {token === undefined || token.length === 0 || token === null ?
            <>
              <li className={`${darkMode ? "tw-bg-neutral-400 tw-text-campfire-neutral-900 hover:tw-bg-campfire-neutral-300" 
              : "tw-bg-neutral-800 tw-text-campfire-neutral-100 hover:tw-bg-campfire-neutral-400"} tw-font-space_mono tw-rounded tw-py-1 tw-flex tw-flex-row`}>
                <Link to={'/auth/guest/login'} className="tw-w-full">
                  <button className="tw-font-space_mono">
                    Login
                  </button>
                </Link>
              </li>
            </>
            :
            <>
              <li className={`${darkMode ? "tw-bg-neutral-400 tw-text-campfire-neutral-900 hover:tw-bg-campfire-neutral-300" 
              : "tw-bg-neutral-800 tw-text-campfire-neutral-100 hover:tw-bg-campfire-neutral-400"} tw-font-space_mono tw-rounded tw-py-1 tw-flex tw-flex-row`}>
                  <button onClick={(e) => logout(e)} className="tw-font-space_mono ">
                    Logout
                  </button>
              </li>
            </>
            }
          </ul>
          </Transition>
        </div>
        }
      </div>
    )
  }

  return (
    <div className={`${pathFilter && !darkMode && 'tw-bg-campfire-neutral-200/70 '} ${darkMode ? 'tw-bg-campfire-neutral-700 tw-text-campfire-neutral-300' : 'tw-bg-light'
      } tw-dark tw-font-space_mono tw-flex tw-flex-col tw-w-full tw-place-items-center tw-px-5 tw-relative`}>
      <header
        className={`tw-grow-0 tw-h-[48px] tw-px-2 tw-w-full tw-flex tw-flex-row tw-justify-between tw-rounded`}
      >
        <Link to={`/`} className="tw-flex tw-flex-row tw-place-self-center">
          <span className="tw-pt-1 ">
            <Transition><Logo style={{ height: 22, width: 38 }} /></Transition>
          </span>
          <h5 className={`tw-text-lg ${darkMode ? '' : ''} hover:tw-text-campfire-blue`}>
            <Transition>ReCodeCamp</Transition>
          </h5>
        </Link>
        <nav className="tw-flex tw-flex-row tw-items-center tw-pl-4 tw-ml-2 tw-font-space_mono">
          <ul className={`${darkMode ? "" : ""} tw-text-sm tw-flex tw-flex-row tw-gap-5`}>
            <li className={`${darkMode ? "" : ""} hover:tw-text-campfire-blue tw-self-center`}>
              <Link to={'/about'}><Transition>About</Transition></Link>
            </li>
            <li className={`${darkMode ? "" : ""} hover:tw-text-campfire-blue tw-self-center`}>
              <Link to={`/contact`}><Transition>Contact</Transition></Link>
            </li>
            <li className={`${darkMode ? "" : ""} hover:tw-text-campfire-blue tw-flex tw-flex-row tw-content-center`}>
              <Link to={`/learn`} className="tw-place-self-center">
                <Transition>
                  <span>Dashboard</span>
                </Transition>
              </Link>
              <span className={`tw-float-top tw-pl-1 tw-pt-1 tw-self-start tw-text-xs`}>
              {darkMode ?  
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" style={{color: '#d4d4d4',}} /> :
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" style={{color: '#404040',}} />
              }
              </span>
            </li>
            {token === undefined || token.length === 0 || token === null ?
            <li>
              <button className={`${darkMode ? "tw-bg-neutral-200 tw-text-campfire-neutral-900 hover:tw-bg-campfire-neutral-400" : "tw-bg-neutral-800 tw-text-campfire-neutral-100 hover:tw-bg-campfire-neutral-400"} tw-rounded tw-px-4 tw-py-1.5 tw-flex tw-flex-row tw-font-space_mono`}>
                <Link to={'/auth/guest/login'}><Transition>Login</Transition></Link>
              </button>
            </li>
            :
            <li>
              <button onClick={(e) => logout(e)} className={`${darkMode ? "tw-bg-neutral-200 tw-text-campfire-neutral-900 hover:tw-bg-campfire-neutral-400" : "tw-bg-neutral-800 tw-text-campfire-neutral-100 hover:tw-bg-campfire-neutral-400"} tw-rounded tw-px-4 tw-py-1.5 tw-flex tw-flex-row tw-font-space_mono`}>
                <Transition>Logout</Transition>
              </button>
            </li>
          }
          </ul>
          <ol className="tw-flex tw-flex-row tw-items-center tw-pl-0.5 tw-ml-4">
            {!darkMode ? (
              <li>
                <button className="tw-pt-1 tw-place-self-center" onClick={toggleTheme}>
                  <Transition><Sun style={{ height: 26, width: 38 }} /></Transition>
                </button>
              </li>
            ) : (
              <li>
                <button className="tw-pt-1 tw-place-self-center" onClick={toggleTheme}>
                  <Transition><Moon style={{ height: 26, width: 38 }} /></Transition>
                </button>
              </li>
            )}
          </ol>
        </nav>
      </header>
    </div>
  )
}

export default Header

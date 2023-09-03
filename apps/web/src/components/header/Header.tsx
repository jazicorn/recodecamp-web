import { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// hooks
import useWindowSize from '../../hooks/useWindowSize';
import Transition from '../../hooks/useTransition';
import { useLocation, useParams } from 'react-router-dom';
// icons
import { IconMenu2 } from '@tabler/icons-react';
import { ThemeContext } from '../../context/ThemeContext'
import { ReactComponent as Logo } from '../../assets/icons/logos/campfire-2-svgrepo-com.svg'
import { ReactComponent as Moon } from '../../assets/icons/settings/moon-cloudy-svgrepo-com.svg'
import { ReactComponent as Sun } from '../../assets/icons/settings/sun-svgrepo-com.svg'

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
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  //turn darkmode on and off
  const toggleTheme = () => {
    if (darkMode) {
      theme.dispatch({ type: 'LIGHTMODE', darkMode: false })
      localStorage.theme = 'light'
    } else {
      theme.dispatch({ type: 'DARKMODE', darkMode: true })
      localStorage.theme = 'dark'
    }
  }
  const location = useLocation();
  const params = useParams();
  
  const [path, setPath] = useState();

  useEffect(() => {
    setPath(getRoutePath(location, params));
  }, [location, params]);

  const pagesPath = () => {
    if( path === '/learn') {
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
      <div className={`${darkMode ? 'tw-bg-campfire-neutral-700 tw-text-campfire-blue ' : 'tw-bg-light '
        } ${menu ? "tw-h-full" : "tw-px-5"} tw-font-space_mono tw-text-sm tw-dark tw-flex tw-flex-col tw-h-fit tw-w-full tw-place-items-center tw-relative`}>
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
          <ul className={`${darkMode ? "tw-text-neutral-300" : ""} [&>li>button]:tw-font-mono tw-flex tw-flex-col tw-gap-y-2 [&>li]:tw-pl-1`}>
            <li className={`${darkMode ? "" : ""} hover:tw-text-campfire-blue`}>
              <Link tp={'/about'}>About</Link>
            </li>
            <li className={`${darkMode ? "" : ""} hover:tw-text-campfire-blue`}>
              <Link to={`/learn`}>Dashboard</Link>
            </li>
            <li className={`${darkMode ? "" : ""} hover:tw-text-campfire-blue`}>
              <Link>Documentation</Link>
            </li>
            <li className={`${darkMode ? "" : ""} hover:tw-text-campfire-blue`}>
              <Link>Contact</Link>
            </li>
            <li className={`${darkMode ? "tw-bg-neutral-300 tw-text-campfire-neutral-900 hover:tw-text-campfire-blue" 
            : "tw-bg-neutral-800 tw-text-campfire-neutral-100 hover:tw-text-campfire-blue"} tw-font-space_mono tw-rounded tw-py-2 tw-flex tw-flex-row`}>
              <Link to={'/auth/guest/login'}>
                <button className="tw-font-space_mono ">
                  Login
                </button>
              </Link>
            </li>
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
            <Logo style={{ height: 22, width: 38 }} />
          </span>
          <h5 className={`tw-text-lg ${darkMode ? '' : ''} hover:tw-text-campfire-blue`}>
            ReCodeCamp
          </h5>
        </Link>
        <nav className="tw-flex tw-flex-row tw-items-center tw-pl-4 tw-ml-2 [&>ol>li>button]:tw-font-mono">
          <ol className={`${darkMode ? "" : ""} tw-text-sm tw-flex tw-flex-row tw-gap-5 tw-items-center`}>
            <li className={`${darkMode ? "" : ""} hover:tw-text-campfire-blue`}>
              <Link to={'/about'}><Transition>About</Transition></Link>
            </li>
            <li className={`${darkMode ? "" : ""} hover:tw-text-campfire-blue`}>
              <Link to={`/learn`}><Transition>Dashboard</Transition></Link>
            </li>
            <li className={`${darkMode ? "" : ""} hover:tw-text-campfire-blue`}>
              <Link><Transition>Documentation</Transition></Link>
            </li>
            <li className={`${darkMode ? "" : ""} hover:tw-text-campfire-blue`}>
              <Link><Transition>Contact</Transition></Link>
            </li>
            <li className={`${darkMode ? "tw-bg-neutral-200 tw-text-campfire-neutral-900" : "tw-bg-neutral-800 tw-text-campfire-neutral-100 "} hover:tw-text-campfire-blue tw-rounded tw-px-4 tw-py-1.5 tw-flex tw-flex-row`}>
              <Link to={'auth/guest/login'}><Transition>Login</Transition></Link>
            </li>
          </ol>
          <ol className="tw-flex tw-flex-row tw-items-center tw-pl-0.5 tw-ml-10">
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

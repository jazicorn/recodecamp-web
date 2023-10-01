import { useContext, useCallback, useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// hooks
import useWindowSize from '../../hooks/useWindowSize';
import Transition from '../../hooks/useTransition';
import { useLocation, useParams } from 'react-router-dom';
// icons
import { 
  IconMenu2, 
  IconUserCircle,
  IconUser,
  IconSettings,
  IconDeviceDesktop,
 } from '@tabler/icons-react';
import { ThemeContext } from '../../context/ThemeContext';
import { ReactComponent as Logo } from '../../assets/icons/logos/campfire-2-svgrepo-com.svg';
import { ReactComponent as Moon } from '../../assets/icons/settings/moon-cloudy-svgrepo-com.svg';
import { ReactComponent as Sun } from '../../assets/icons/settings/sun-svgrepo-com.svg';
import { removeTokenFromLocalStorage, getTokenFromLocalStorage } from '../../utils/common';
/**Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
/** */
//import { useAppDispatch } from '../../redux/reduxHooks.ts';
import { useAppDispatch, useAppSelector } from '../../redux/reduxHooks.ts';
import type { RootState } from '../../redux/store.ts';
import { 
  menuUser,
} from '../../redux/slices/dashboardSlice.ts';
import { DEFAULT_USER } from '../../utils/constants.ts';
/** Notifications */
import { notifications } from '@mantine/notifications';
//import { IconX, IconCheck } from '@tabler/icons-react';
import Emoji from 'react-emojis';

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

const Header_Dashboard = () => {
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

  /** UserName */
  const getUser = useAppSelector((state:RootState) => state?.dashboard?.user);
  const [userName, setUserName] = useState('');
  const createUserName = () => {
    if(getUser._EMAIL === undefined || getUser._EMAIL.toLowerCase() === 'john@doe.com' || getUser._EMAIL.length === 0) {
      setUserName('Guest');
    } else {
      const emailName = getUser._EMAIL.split('@')[0];
      setUserName(emailName);
    }
  }
  useEffect(() => {
    createUserName()
  });

  /**Link to User Profile */
  const [profile, setProfile] = useState('');
  const getProfile = () => {
    if(userName === undefined || userName.toLowerCase() === "guest" || userName.length === 0) {
      setProfile('guest');
    } else {
      setProfile(userName)
    }
  };
  useEffect(() => {
    getProfile()
  });

  /**Get logout url */
  let url;
  if(import.meta.env.PROD) {
    url = `${baseURL}/guest/logout`
  } else {
    url = `/api/guest/logout`
  }

  /** Retrieve Category Based Question */
  const logoutUser = useCallback(async (url) => {
    /** Retrieve Question from API */
   try {
      const result = await fetch(url, {
          method: 'DELETE',
          headers: {
              'Accept' : 'application/json',
              'Content-Type': 'application/json',
          },
        }
      );
      if(result.status === "200") {
        return true
      }
    } catch(error) {
      console.log(error);
    }
  },[]);

  /** Redux Dispatch Instance */
  const dispatch = useAppDispatch();
  
  /** User Logout */
  const navigate = useNavigate();
  const logout = (e) => {
    e.preventDefault();
    //console.log("goodbye");
    const removeUser = logoutUser(url);
    if(removeUser) {
      removeTokenFromLocalStorage();
      dispatch(menuUser(DEFAULT_USER));
      console.log("👋 Goodbye | User Logged Out");
      // Success Notification
      notifications.show({
        id: 'success',
        withCloseButton: true,
        autoClose: 2000,
        title: "User Logged Out",
        message: 'See you next time.',
        color: 'cyan',
        icon: <Emoji emoji="waving-hand"/> ,
        className: 'my-notification-class',
        style: { backgroundColor: 'white' },
        sx: { backgroundColor: 'teal' },
        loading: false,
      });
      setTimeout(() => {
        console.log("⏳ Delay | Page Redirect In 1 Second.");
        navigate("/");
      }, '1000');
    } else {
      console.log("🚫 Guest | Account Deletion Failed");
      // Failure Notification
      notifications.show({
        id: 'failure',
        withCloseButton: true,
        autoClose: 2000,
        title: "Failed to Logout",
        message: 'Please try again.',
        color: 'red',
        icon: <Emoji emoji="face-with-monocle"/>,
        className: 'my-notification-class',
        style: { backgroundColor: 'white' },
        sx: { backgroundColor: 'red' },
        loading: false,
      });
    }
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

  /** Mobile Menu*/
  const [ mobileMenuDropdown, setMobileMenuDropdown ] = useState(false);

  function toggleMobileMenuDropdown(e) {
    e.preventDefault()
    setMobileMenuDropdown(!mobileMenuDropdown);
    //console.log(mobileMenuDropdown)
  }

  const mobileRef = useRef();

  useEffect(() => {
    const mobileCheckIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (mobileMenuDropdown && mobileRef.current && !mobileRef.current.contains(e.target)) {
        setMobileMenuDropdown(!mobileMenuDropdown)
      }
    }

    document.addEventListener("mousedown", mobileCheckIfClickedOutside)

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", mobileCheckIfClickedOutside)
    }
  }, [mobileMenuDropdown]);
  

  /**Desktop Dropdown Menu */
  const [ menuDropdown, setMenuDropdown] = useState(false);

  function toggleMenuDropdown(e) {
    e.preventDefault();
    setMenuDropdown(!menuDropdown);
    //console.log(dropdown)
  };

  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (menuDropdown && ref.current && !ref.current.contains(e.target)) {
        setMenuDropdown(!menuDropdown)
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [menuDropdown]);

  if(isMobile) {
    return (
      <div className={`${darkMode ? 'tw-bg-campfire-neutral-700 tw-text-campfire-blue' : 'tw-bg-light '
        } ${mobileMenuDropdown ? "tw-h-fit" : "tw-px-5"} tw-font-space_mono tw-text-sm tw-flex tw-flex-col tw-w-full tw-place-items-center tw-grow-0 tw-z-50 `}>
        <header
          className={`${mobileMenuDropdown ? "tw-px-7" : "tw-px-2"} tw-grow-0 tw-h-[48px] tw-w-full tw-flex tw-flex-row tw-justify-between tw-rounded tw-py-2`}
        >
          <nav className="tw-flex tw-flex-row tw-place-self-center">
            <button onClick ={(e) => toggleMobileMenuDropdown(e)} className="tw-place-self-center">
              <Transition><IconMenu2 style={{ height: 22, width: 36 }} /></Transition>
            </button>
          </nav>
            <ol className=" tw-h-full tw-flex tw-flex-row tw-items-center tw-pl-2 tw-ml-2">
              <li className={`${darkMode ? "hover:tw-text-campfire-neutral-300": "hover:tw-text-campfire-neutral-700"} tw-self-items-center tw-pr-4 tw-h-full`}>
              <Transition>
                <button onClick={(e) => toggleMenuDropdown(e)}>
                  {darkMode ? <IconUserCircle color="#d4d4d4" width={30} height={30}/> : <IconUserCircle color="#000" width={34} height={34} />} 
                </button>
              </Transition>
            </li>
            <span className="tw-border-campfire-blue tw-border-l-2 tw-pl-2">
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
            </span>
          </ol>
        </header>
        {menuDropdown &&
        <div ref={ref} className={`${darkMode ? 
        "tw-bg-campfire-blue-300/90 tw-border-campfire-neutral-500/50" 
        : "tw-bg-campfire-blue-200/90 tw-border-campfire-neutral-50/50"} 
        tw-border-4 tw-rounded tw-absolute tw-place-self-end tw-w-[16em] tw-h-[26em] tw-pt-4 tw-mt-14 tw-mr-[3em] tw-p-2`}>
          <Transition>
          <ul className="tw-z-300 [&>li]:tw-text-xl [&>li]:tw-flex-row [&>li]:tw-flex [&>li>span]:tw-px-1
          tw-flex tw-flex-col tw-place-items-center tw-gap-4">
            {darkMode ? <IconUserCircle color="#d4d4d4" width={100} height={100}/> 
            : <IconUserCircle color="#000"width={100} height={100} />} 
            <hr className={`${darkMode ? 'tw-border-campfire-neutral-800' : 'tw-border-campfire-blue' } 
        tw-place-self-center tw-my-3 tw-h-[px] tw-w-[100px]`}/>
            <li className={`${darkMode ? "hover:tw-text-campfire-neutral-700": "hover:tw-text-campfire-neutral-100"}`}>
              <span>
                <Link to={`/profile/${profile}`} target="_blank" className="">
                  User Profile
                </Link>
              </span>
              {darkMode ?  
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" style={{color: '#d4d4d4',}} /> :
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" style={{color: '#404040',}} />
              }
            </li>
            <li className={`${darkMode ? "hover:tw-text-campfire-neutral-700": "hover:tw-text-campfire-neutral-100"}`}>
              <span>
                <Link to={'/learn/settings/user'}>
                  User Settings
                </Link>
              </span>
              {darkMode ?  
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" style={{color: '#d4d4d4',}} /> :
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" style={{color: '#404040',}} />
              }
            </li>
            <li className={`${darkMode ? "hover:tw-text-campfire-neutral-700": "hover:tw-text-campfire-neutral-100"}`}>
              <span>
                <Link to={'/profile/dashboard'}>
                  User Dashboard
                </Link>
              </span>
              {darkMode ?  
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" style={{color: '#d4d4d4',}} /> :
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" style={{color: '#404040',}} />
              }
            </li>
            <hr className={`${darkMode ? 'tw-border-campfire-neutral-800' : 'tw-border-campfire-blue' } 
        tw-place-self-center tw-my-3 tw-h-[px] tw-w-[100px]`}/>
            {token === undefined || token.length === 0 || token === null ?
              <li>
                <button className={`${darkMode ? "tw-bg-neutral-200 tw-text-campfire-neutral-900 hover:tw-bg-campfire-neutral-400" : "tw-bg-neutral-800 tw-text-campfire-neutral-100 hover:tw-bg-campfire-neutral-400"} tw-rounded tw-px-4 tw-py-1.5 tw-flex tw-flex-row tw-font-space_mono tw-text-lg`}>
                  <Link to={'/auth/guest/login'}><Transition>Login</Transition></Link>
                </button>
              </li>
              :
              <li>
                <button onClick={(e) => logout(e)} className={`${darkMode ? "tw-bg-neutral-200 tw-text-campfire-neutral-900 hover:tw-bg-campfire-neutral-400" : "tw-bg-neutral-800 tw-text-campfire-neutral-100 hover:tw-bg-campfire-neutral-400"} tw-rounded tw-px-4 tw-py-1.5 tw-flex tw-flex-row tw-font-space_mono tw-text-lg`}>
                  <Transition>Logout</Transition>
                </button>
              </li>
            }
          </ul>
          </Transition>
        </div>
        }
      </div>
    )
  }

  /**Desktop */
  return (
    <div className={`${pathFilter && !darkMode && 'tw-bg-campfire-neutral-200/70 '} ${darkMode ? 'tw-bg-campfire-neutral-700 tw-text-campfire-neutral-300' : 'tw-bg-light '} tw-flex-col
    tw-z-50 tw-relative tw-font-space_mono tw-flex tw-h-[3em] tw-w-full tw-place-items-center tw-px-5 `}>
      <header
        className={`tw-grow-0 tw-h-[48px] tw-px-2 tw-w-full tw-flex tw-flex-row tw-justify-between tw-rounded`}
      >
        <div className="tw-flex tw-flex-row tw-h-full tw-py-2.5">
          <Link to={`/`} className="tw-flex tw-flex-row tw-place-self-center tw-pr-3">
            <span className="tw-pt-1 ">
              <Transition><Logo style={{ height: 21, width: 21 }} /></Transition>
            </span>
            <h5 className={`tw-text-[21px] ${darkMode ? '' : ''} tw-pl-1.5 hover:tw-text-campfire-blue`}>
              <Transition>ReCodeCamp</Transition>
            </h5>
          </Link>
          <Transition>
            <p className={`${darkMode ? "" : ""} tw-font-space_grotesk_medium tw-border-campfire-blue tw-border-l-2 tw-text-[17px] tw-pb-1
            tw-flex tw-row tw-items-center tw-w-full tw-h-full tw-p-2`}>
              <span className="tw-pl-1 tw-pr-2">👋</span>
              <span className="tw-pr-2">Welcome:</span>
              <Link to={`/profile/${profile}`} target="_blank" className={`${darkMode ? 
                "tw-decoration-campfire-blue tw-text-campfire-purple-300 hover:tw-text-campfire-neutral-500" : "tw-decoration-campfire-purple-300 tw-text-campfire-blue hover:tw-text-campfire-neutral-400"} 
                tw-font-space_grotesk_medium tw-underline tw-decoration-[3px] tw-pt-0.5`}>{userName}
              </Link>
            </p>
          </Transition>        
        </div>
        <nav className="tw-flex tw-flex-row tw-items-center tw-pl-4 tw-ml-2 tw-font-space_mono">
          <ul className={`${darkMode ? "" : ""} tw-px-2 tw-py-2 tw-text-sm tw-flex tw-flex-row tw-gap-4 tw-h-full`}>
            <li className={`${darkMode ? "hover:tw-text-campfire-neutral-300": "hover:tw-text-campfire-neutral-700"} tw-self-items-center`}>
              <Transition>
                <button onClick={(e) => toggleMenuDropdown(e)}>
                  {darkMode ? <IconUserCircle color="#d4d4d4" width={30} height={30}/> : <IconUserCircle color="#000" width={34} height={34} />} 
                </button>
              </Transition>
            </li>
          </ul>
          <div className="tw-py-2.5 tw-h-full">
            <ol className="tw-border-campfire-blue tw-border-l-2 tw-h-full tw-flex tw-flex-row tw-items-center tw-pl-2 tw-ml-2">
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
          </div>      
        </nav>
      </header>
      {menuDropdown &&
      <div ref={ref} className={`${darkMode ? 
      "tw-bg-campfire-blue-300/90 tw-border-campfire-neutral-500/50" 
      : "tw-bg-campfire-blue-200/90 tw-border-campfire-neutral-50/50"} 
      tw-border-4 tw-rounded tw-absolute tw-place-self-end tw-w-[18em] tw-h-[26em] tw-pt-4 tw-mt-14 tw-mr-[3em] tw-p-2`}>
        <Transition>
        <ul className="tw-z-300 [&>li]:tw-text-lg [&>li]:tw-flex-row [&>li]:tw-flex [&>li>span]:tw-px-1
        tw-flex tw-flex-col tw-gap-4">
          <li className="tw-self-center">
            {darkMode ? 
            <IconUserCircle color="#d4d4d4" width={100} height={100}/>: 
            <IconUserCircle color="#000"width={100} height={100} />}
          </li> 
          <hr className={`${darkMode ? 'tw-border-campfire-neutral-800' : 'tw-border-campfire-blue' } 
          tw-place-self-center tw-my-1 tw-h-[px] tw-w-[100px]`}/>
          <li className={`${darkMode ? "hover:tw-text-campfire-neutral-700": "hover:tw-text-campfire-neutral-100 "}`}>
            <span>
            {darkMode ?
              <IconUser color="#737373" width={30} height={30}/>:
              <IconUser color="#737373" width={30} height={30}/>
            }
            </span>
            <span>
              <Link to={`/profile/${profile}`} target="_blank" className="">
                User Profile
              </Link>
            </span>
            {darkMode ?  
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" style={{color: '#737373',}} /> :
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" style={{color: '#737373',}} />
            }
          </li>
          <li className={`${darkMode ? "hover:tw-text-campfire-neutral-700": "hover:tw-text-campfire-neutral-100"}`}>
            <span>
              {darkMode ?
              <IconSettings color="#737373" width={30} height={30}/>:
              <IconSettings color="#737373" width={30} height={30}/>
              }
            </span>
            <span>
              <Link to={'/learn/settings/user'}>
                User Settings
              </Link>
            </span>
            {darkMode ?  
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" style={{color: '#737373',}} /> :
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" style={{color: '#737373',}} />
            }
          </li>
          <li className={`${darkMode ? "hover:tw-text-campfire-neutral-700": "hover:tw-text-campfire-neutral-100"}`}>
            <span>
              {darkMode ?
              <IconDeviceDesktop color="#737373" width={30} height={30}/> :
              <IconDeviceDesktop color="#737373" width={30} height={30}/>
              }
            </span>
            <span>
              <Link to={'/profile/dashboard'}>
                User Dashboard
              </Link>
            </span>
            {darkMode ?  
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" style={{color: '#737373',}} /> :
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" style={{color: '#737373',}} />
            }
          </li>
          <hr className={`${darkMode ? 'tw-border-campfire-neutral-800' : 'tw-border-campfire-blue' } 
          tw-place-self-center tw-my-3 tw-h-[px] tw-w-[100px]`}/>
          {token === undefined || token.length === 0 || token === null ?
            <li className="tw-self-center">
                <Link to={'/auth/guest/login'} target="_blank" className={`${darkMode ? 
                "tw-bg-neutral-200 tw-text-campfire-neutral-900 hover:tw-bg-campfire-neutral-400" : "tw-bg-neutral-800 tw-text-campfire-neutral-100 hover:tw-bg-campfire-neutral-400"} tw-rounded tw-px-4 tw-py-1.5 tw-flex tw-flex-row tw-font-space_mono tw-text-lg tw-self-center`}><Transition>Login</Transition></Link>
            </li>
            :
            <li className="tw-self-center">
              <button onClick={(e) => logout(e)} className={`${darkMode ? 
                "tw-bg-neutral-200 tw-text-campfire-neutral-900 hover:tw-bg-campfire-neutral-400" : "tw-bg-neutral-800 tw-text-campfire-neutral-100 hover:tw-bg-campfire-neutral-400"} tw-rounded tw-px-4 tw-py-1.5 tw-flex tw-flex-row tw-font-space_mono tw-text-lg `}>
                <Transition>Logout</Transition>
              </button>
            </li>
          }
          </ul>
          </Transition>
        </div>
      }
    </div>
  )
}

export default Header_Dashboard

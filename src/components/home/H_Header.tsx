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

/** Component | Header */
const H_Header = () => {
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

  const [menu, setMenu] = useState(false);

  function isMenu(e) {
    e.preventDefault();
    setMenu(!menu);
    console.log(menu);
  }

  useEffect(() => {
    menu;
  }, [menu]);

  if (isMobile) {
    return (
      <div
        className={`${darkMode ? 'tw-text-campfire-neutral-300' : ''} ${
          menu ? 'tw-h-fit ' : ''
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
                  <Link target="_blank" to={`/portal`}>Portal</Link>
                </li>
                <li
                  className={`${
                    darkMode
                      ? 'tw-bg-neutral-400 tw-text-campfire-neutral-900 hover:tw-bg-campfire-neutral-300'
                      : 'tw-bg-neutral-800 tw-text-campfire-neutral-100 hover:tw-bg-campfire-neutral-400'
                  } tw-font-space_mono tw-rounded tw-py-1 tw-flex tw-flex-row tw-place-content-center tw-place-items-center`}
                >
                  <Link target="_blank" to={`/auth/guest/signup`}>Register</Link>
                </li>
              </ul>
            </Transition>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`${darkMode ? 'tw-text-campfire-neutral-300' : 'tw-bg-light'
      } tw-font-space_mono tw-flex tw-flex-col tw-w-full tw-place-items-center tw-px-5 tw-relative`}
    >
      <header className={`tw-grow-0 tw-h-[48px] tw-px-2 tw-w-full tw-flex tw-flex-row tw-justify-between tw-rounded`}>
        <Link to={`/portal`} className="tw-flex tw-flex-row tw-place-self-center">
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
              <Link target="_blank" to={`/portal`}>Portal</Link>
            </li>
            <li>
              <div
                className={`${
                  darkMode
                    ? 'tw-bg-neutral-200 tw-text-campfire-neutral-900 hover:tw-bg-campfire-neutral-400'
                    : 'tw-bg-neutral-800 tw-text-campfire-neutral-100 hover:tw-bg-campfire-neutral-400'
                } tw-rounded tw-px-4 tw-flex tw-flex-row tw-font-space_grotesk_medium tw-text-[17px] tw-w-[5.5em] tw-h-[1.8em] tw-flex tw-place-content-center tw-place-items-center`}
              >
                <Link target="_blank" to={`/auth/guest/signup`}>Register</Link>
              </div>
            </li>
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

export default H_Header;

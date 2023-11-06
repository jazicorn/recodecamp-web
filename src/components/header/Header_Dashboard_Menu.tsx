// Component: Header_Logout
/** React Imports */
import { useContext, useCallback, useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// hooks
import useWindowSize from '../../hooks/useWindowSize';
import Transition from '../../hooks/useTransition';
import { useLocation, useParams } from 'react-router-dom';
// icons
import { IconMenu2, IconUserCircle, IconUser, IconSettings, IconDeviceDesktop } from '@tabler/icons-react';
import { ThemeContext } from '../../context/ThemeContext';
import { ReactComponent as Logo } from '../../assets/icons/logos/campfire-2-svgrepo-com.svg';
import { ReactComponent as Moon } from '../../assets/icons/settings/moon-cloudy-svgrepo-com.svg';
import { ReactComponent as Sun } from '../../assets/icons/settings/sun-svgrepo-com.svg';
/**Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
/** */
//import { useAppDispatch } from '../../redux/reduxHooks.ts';
import { useAppDispatch, useAppSelector } from '../../redux/reduxHooks.ts';
import type { RootState } from '../../redux/store.ts';
import {
  validUser,
  updateUser,
  userLogout,
  fetchUser,
  fetchUserAuth,
  fetchUserStatus,
} from '../../redux/slices/authSlice.ts';
import { DEFAULT_USER } from '../../utils/constants.ts';
/** Notifications */
import { notifications } from '@mantine/notifications';
import { IconX, IconCheck } from '@tabler/icons-react';
//import { IconX, IconCheck } from '@tabler/icons-react';
import Emoji from 'react-emojis';
/** Buttons: Auth */
import Button_User_Logout from '../buttons/Button_User_Logout';
import Button_User_Login from '../buttons/Button_User_Login';

/** API url | Custom env mandatory to begin with VITE
 * https://vitejs.dev/guide/env-and-mode.html#env-files */
const baseURL = import.meta.env.VITE_API_BASE_URL;

const Header_Dashboard_Menu = () => {
  /** Set User Preferences */
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  /** Initialize Navigation */
  const navigate = useNavigate();

  /** Redux Dispatch Instance */
  const dispatch = useAppDispatch();

  /** Redux Store: User */
  const getUser = useAppSelector(fetchUser);
  const authenticated = useAppSelector(fetchUserAuth);
  const status = useAppSelector(fetchUserStatus);

  /** Loading Screen */
  const [loading, setLoading] = useState(false);

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

  return (
    <>
      <Transition>
        <ul
          className={`${
            darkMode ? '[&>li]:tw-text-campfire-neutral-300' : '[&>li]:tw-text-campfire-neutral-900'
          } [&>li]:tw-text-xl [&>li]:tw-flex-row [&>li]:tw-flex [&>li>span]:tw-px-1
      tw-flex tw-flex-col tw-place-items-center tw-gap-4`}
        >
          {darkMode ? (
            <IconUserCircle color="#d4d4d4" width={100} height={100} />
          ) : (
            <IconUserCircle color="#000" width={100} height={100} />
          )}
          <hr
            className={`${darkMode ? 'tw-border-campfire-neutral-800' : 'tw-border-campfire-blue'} 
    tw-place-self-center tw-my-3 tw-h-[px] tw-w-[100px]`}
          />
          <li className={`${darkMode ? 'hover:tw-text-campfire-neutral-700' : 'hover:tw-text-campfire-neutral-100'}`}>
            <span>
              <Link to={`/profile/${profile}`} target="_blank" className="">
                User Profile
              </Link>
            </span>
            {darkMode ? (
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" style={{ color: '#d4d4d4' }} />
            ) : (
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" style={{ color: '#404040' }} />
            )}
          </li>
          <li className={`${darkMode ? 'hover:tw-text-campfire-neutral-700' : 'hover:tw-text-campfire-neutral-100'}`}>
            <span>
              <Link to={'/learn/settings/user'}>User Settings</Link>
            </span>
            {darkMode ? (
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" style={{ color: '#d4d4d4' }} />
            ) : (
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" style={{ color: '#404040' }} />
            )}
          </li>
          <li className={`${darkMode ? 'hover:tw-text-campfire-neutral-700' : 'hover:tw-text-campfire-neutral-100'}`}>
            <span>
              <Link to={'/profile/dashboard'}>User Dashboard</Link>
            </span>
            {darkMode ? (
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" style={{ color: '#d4d4d4' }} />
            ) : (
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" style={{ color: '#404040' }} />
            )}
          </li>
          <hr
            className={`${darkMode ? 'tw-border-campfire-neutral-800' : 'tw-border-campfire-blue'} 
    tw-place-self-center tw-my-3 tw-h-[px] tw-w-[100px]`}
          />
          {!authenticated ? (
            <div
              className={`${
                darkMode
                  ? 'tw-bg-neutral-200 tw-text-campfire-neutral-900 hover:tw-bg-campfire-neutral-400'
                  : 'tw-bg-neutral-800 tw-text-campfire-neutral-100 hover:tw-bg-campfire-neutral-400'
              } tw-rounded tw-px-4 tw-py-1.5 tw-flex tw-flex-row tw-font-space_mono tw-text-lg`}
            >
              <Button_User_Login />
            </div>
          ) : (
            <div
              className={`${
                darkMode
                  ? 'tw-bg-neutral-200 tw-text-campfire-neutral-900 hover:tw-bg-campfire-neutral-400'
                  : 'tw-bg-neutral-800 tw-text-campfire-neutral-100 hover:tw-bg-campfire-neutral-400'
              } tw-rounded tw-px-4 tw-py-1.5 tw-flex tw-flex-row tw-font-space_mono tw-text-lg`}
            >
              <Button_User_Logout />
            </div>
          )}
        </ul>
      </Transition>
    </>
  );
};

export default Header_Dashboard_Menu;

// Button: Logout
/** React */
import { useContext, useCallback, useEffect } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Link, useNavigate } from 'react-router-dom';
/** React Redux */
import { useAppDispatch } from '../../redux/reduxHooks.ts';
//import { useAppDispatch, useAppSelector } from '../../redux/reduxHooks.ts';
//import type { RootState } from '../../redux/store.ts';
import {
  userAuthMe,
  userLogout,
  userLandingScreenLoader,
  fetchUserScreenLoader,
} from '../../redux/slices/authSlice.ts';
/** Data */
import { DEFAULT_USER } from '../../utils/constants.ts';
/** Custom Hooks */
//import useWindowSize from '../../hooks/useWindowSize';
import Transition from '../../hooks/useTransition';
/** Notifications */
import { notifications } from '@mantine/notifications';
//import { IconX, IconCheck } from '@tabler/icons-react';
import Emoji from 'react-emojis';
/** Images */
import { ReactComponent as Rocket } from '../../assets/icons/others/rocket-right-svgrepo-com.svg';

const Button_User_Login = () => {
  /** Custom Hooks | Adjust Window Size*/
  //const { isMobile, isDesktopMDLG, isDesktopXL } = useWindowSize();

  /** Custom Hooks | Dark Mode */
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  /** Initialize Navigation */
  const navigate = useNavigate();

  /** Redux Dispatch Instance */
  const dispatch = useAppDispatch();

  /** Guest AuthMe */
  const guestAuthMe = useCallback(async (e) => {
    try {
      const originalPromiseResult = await dispatch(userAuthMe()).unwrap();
      if (originalPromiseResult === undefined || originalPromiseResult.error) {
        console.log('⏳ Delay | Redirect');
        navigate('/auth/guest/login');
      } else {
        console.log('🧑 Guest | Detected');
        // Success Notification
        notifications.show({
          id: 'success',
          withCloseButton: true,
          autoClose: 2000,
          title: '🥳 Registration Successful',
          message: 'Have Run ReCoding',
          color: 'teal',
          icon: <Emoji emoji="beaming-face-with-smiling-eyes" />,
          className: 'my-notification-class',
          style: { backgroundColor: 'white' },
          sx: { backgroundColor: 'teal' },
          loading: false,
        });
        setTimeout(() => {
          console.log('⏳ Delay | Redirect in 1 second.');
          navigate('/learn');
        }, '800');
      }
    } catch (error) {
      //console.log(error);
      setLoading(false);
    }
  }, []);

  return (
    <button
      onClick={(e) => guestAuthMe()}
      className="tw-font-space_mono tw-text-lg tw-flex tw-place-items-center tw-w-full tw-h-full"
    >
      Login
    </button>
  );
};

export default Button_User_Login;

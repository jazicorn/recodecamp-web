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
  userVerify,
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
import { IconX, IconCheck } from '@tabler/icons-react';
import Emoji from 'react-emojis';
/** Images */
import { ReactComponent as Rocket } from '../../assets/icons/others/rocket-right-svgrepo-com.svg';

const Button_Dashboard = () => {
  /** Custom Hooks | Adjust Window Size*/
  //const { isMobile, isDesktopMDLG, isDesktopXL } = useWindowSize();

  /** Custom Hooks | Dark Mode */
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  /** Initialize Navigation */
  const navigate = useNavigate();

  /** Redux Dispatch Instance */
  const dispatch = useAppDispatch();

  /** Guest AuthMe & Verify*/
  const guestVerify = useCallback(async (e) => {
    try {
      const originalPromiseResult = await dispatch(userAuthMe()).unwrap();
      //console.log("originalPromiseResult:\n", originalPromiseResult);
      if (originalPromiseResult === undefined || originalPromiseResult.error) {
            console.log('🚫 Guest | Not Authorized');
            // Failure Notification
            notifications.show({
                id: 'failure',
                withCloseButton: true,
                autoClose: 2000,
                title: 'Please Login To Access Dashboard',
                message: '',
                color: 'red',
                icon: <IconX />,
                className: 'my-notification-class',
                style: { backgroundColor: 'white' },
                sx: { backgroundColor: 'red' },
                loading: false,
            });
        } else {
            const verifyPromiseResult = await dispatch(userVerify()).unwrap();
            //console.log("verifyPromiseResult:\n", verifyPromiseResult);
            if (verifyPromiseResult === undefined || verifyPromiseResult.error) {
                console.log('🚫 Guest | Not Authorized');
                // Failure Notification
                notifications.show({
                    id: 'failure',
                    withCloseButton: true,
                    autoClose: 2000,
                    title: '🚫 Invalid Account',
                    message: '',
                    color: 'red',
                    icon: <IconX />,
                    className: 'my-notification-class',
                    style: { backgroundColor: 'white' },
                    sx: { backgroundColor: 'red' },
                    loading: false,
                });
            } else if (verifyPromiseResult._PASSCODE_CONFIRMED === false) {
                console.log('❗Guest | Not Authorized | Please Confirm Account');
                notifications.show({
                    id: 'failure',
                    withCloseButton: true,
                    autoClose: 3000,
                    title: 'Inactive Account',
                    message: 'Please Confim Account To Access Dashboard',
                    color: 'red',
                    icon: <IconX />,
                    className: 'my-notification-class',
                    style: { backgroundColor: 'white' },
                    sx: { backgroundColor: 'red' },
                    loading: false,
                });
            } else {
                console.log('🧑 Guest | Detected');
                // Success Notification
                // notifications.show({
                // id: 'success',
                // withCloseButton: true,
                // autoClose: 2000,
                // title: '🥳 Welcome Back',
                // message: 'Have Run ReCoding',
                // color: 'teal',
                // icon: <Emoji emoji="beaming-face-with-smiling-eyes" />,
                // className: 'my-notification-class',
                // style: { backgroundColor: 'white' },
                // sx: { backgroundColor: 'teal' },
                // loading: false,
                // });
                setTimeout(() => {
                console.log('⏳ Delay | Redirect in 1 second.');
                navigate('/learn');
                }, '800');
            }
        }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <button
      onClick={(e) => guestVerify()}
      className="tw-font-space_grotesk tw-text-lg"
    >
      Dashboard
    </button>
  );
};

export default Button_Dashboard;

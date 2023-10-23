import { useContext, useEffect, useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ThemeContext } from '../../context/ThemeContext';
// hooks
import useWindowSize from '../../hooks/useWindowSize';
import Transition from '../../hooks/useTransition';
// images
import { ReactComponent as Logo } from '../../assets/icons/logos/campfire-2-svgrepo-com.svg';
/** Notifications */
import { notifications } from '@mantine/notifications';
import { IconX, IconCheck } from '@tabler/icons-react';
/** React Redux Hooks */
//import { useAppDispatch } from '../../redux/reduxHooks.ts';
import { useAppDispatch, useAppSelector } from '../../redux/reduxHooks.ts';
import type { RootState } from '../../redux/store.ts';
// import {
//   menuUser,
// } from '../../redux/slices/dashboardSlice.ts';
import {
  userLogin,
  userComponentScreenLoader,
  fetchUser,
  fetchUserAuth,
  fetchUserStatus,
  fetchUserStatusLogin,
  fetchUserComponentScreenLoader,
} from '../../redux/slices/authSlice.ts';
/** Custom Hooks */
import { LoadingDashboardXL } from './A_Loader.tsx';
/**Constants */
import { _DEFAULT_USER } from '../../utils/constants/constantsUser';

interface FormInputs {
  multipleErrorInput: string;
}

const SignIn = () => {
  const { isMobile } = useWindowSize();
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  /** Initialize Navigation */
  const navigate = useNavigate();

  /** Redux Dispatch Instance */
  const dispatch = useAppDispatch();

  /** Redux Login Loader */
  const statusLogin = useAppSelector(fetchUserStatusLogin);

  const [ loaderLogin, setLoaderLogin ] = useState(false);

  useEffect(() => {
    if(statusLogin === 'loading') {
      setLoaderLogin(true);
    }
  },[]);

  /** Redux Store: User */
  const getUser = useAppSelector(fetchUser);
  const authenticated = useAppSelector(fetchUserAuth);
  const status = useAppSelector(fetchUserStatus);
  const screenLoader = useAppSelector(fetchUserComponentScreenLoader);

  const { register, handleSubmit } = useForm<FormInputs>({
    criteriaMode: 'all',
  });

  const [guestData, setGuestData] = useState();
  const [auth, setAuth] = useState(false);

  /**Request Guest Login Info */
  const onSubmit = handleSubmit(async (data) => {
    await dispatch(userComponentScreenLoader(true));
    guestLogin(data);
  });

  /** Guest Login */
  const guestLogin = useCallback(
    async (data) => {
      //dispatch(updateStatus("idle"));
      try {
        const originalPromiseResult = await dispatch(userLogin(data)).unwrap();
        if (originalPromiseResult === undefined || originalPromiseResult.error) {
          console.log('🚫 Guest | Request Failed');
          // Failure Notification
          notifications.show({
            id: 'failure',
            withCloseButton: true,
            autoClose: 1000,
            title: 'Failed Login Attempt',
            message: '',
            color: 'red',
            icon: <IconX />,
            className: 'my-notification-class',
            style: { backgroundColor: 'white' },
            sx: { backgroundColor: 'red' },
            loading: false,
          });
          console.log('⏳ Delay | Redirect in 1 second.');
          setLoaderLogin(true);
          setTimeout(() => {
            setLoaderLogin(false);
          }, '1000');
        } else {
          setLoaderLogin(true);
          console.log('👍 Guest | Logged In');
          // Success Notification
          notifications.show({
            id: 'success',
            withCloseButton: true,
            autoClose: 2000,
            title: '🥳 Login Successful',
            message: 'Have Run ReCoding',
            color: 'teal',
            icon: <IconCheck />,
            className: 'my-notification-class',
            style: { backgroundColor: 'white' },
            sx: { backgroundColor: 'teal' },
            loading: false,
          });
          setTimeout(() => {
            console.log('⏳ Delay | Redirect in 1 second.');
            navigate('/learn');
          }, '1000');
        }
      } catch (error) {
        console.log(error);
      }
    },
    [navigate]
  );

  return (
    <>
      <div
        className={`${darkMode ? '' : ''} tw-h-full tw-w-full tw-px-6
      tw-flex tw-flex-col tw-place-items-center tw-place-content-center`}
      >
        <Transition>
          <div
            className={`${
              darkMode
                ? 'tw-bg-gray-400/70 tw-border-campfire-blue-600'
                : 'tw-bg-gray-200/80 tw-border-campfire-blue-200'
            } ${isMobile ? 'tw-w-[24em]' : 'tw-w-[30em]'} tw-pt-2 tw-pb-6
          [&>div]:tw-h-[3em] [&>div]:tw-flex tw-h-full
          tw-border-2 `}
          >
            <div
              className={`${
                darkMode ? '' : ''
              } tw-flex tw-flex-row tw-place-items-baseline tw-place-content-end tw-w-full tw-pb-4 tw-px-2 tw-mb-4 `}
            >
              <p className="tw-w-fit tw-text-sm">
                New User?:&nbsp;
                <Link
                  to={'/auth/guest/signup'}
                  className={`${
                    darkMode ? 'hover:tw-text-campfire-neutral-200' : 'hover:tw-text-campfire-neutral-700'
                  } tw-text-campfire-blue-300 tw-font-space_mono_bold`}
                >
                  Register
                </Link>
              </p>
            </div>
            <Link to={`/`} className="tw-flex tw-flex-row tw-place-content-center tw-font-space_mono">
              <span className="tw-pt-1 ">
                <Logo style={{ height: 28, width: 28 }} />
              </span>
              <h5
                className={`tw-text-3xl tw-px-2 ${
                  darkMode ? 'hover:tw-text-campfire-neutral-300' : 'hover:tw-text-campfire-blue'
                }`}
              >
                ReCodeCamp
              </h5>
            </Link>
            <div
              className={`${
                darkMode ? '' : ''
              } tw-flex tw-flex-row tw-place-items-baseline tw-place-content-between tw-border-campfire-purple-light tw-border-b tw-h-[52px] tw-w-full tw-pt-4 tw-px-2 tw-my-4 `}
            >
              <h4 className="tw-text-xl tw-w-fit tw-place-self-left">Guest Login</h4>
            </div>
            {loaderLogin ? 
              <div className="tw-min-h-[11.2em]"><LoadingDashboardXL /></div>
              :
              <form onSubmit={onSubmit} className="tw-min-h-[10em]">
                <ul
                  className={`${
                    darkMode ? '[&>li>label]:tw-bg-campfire-neutral-300 [&>li>input]:tw-bg-campfire-neutral-200' : ''
                  } [&>li]:tw-flex [&>li]:tw-flex-col 
                [&>li]:tw-p-2 [&>li>input]:tw-h-[1.6em]
                [&>li>label]:tw-px-1 [&>li>label]:tw-w-full [&>li>label]:tw-border-campfire-blue-200
                [&>li>label]:tw-w-[10em] [&>li>label]:tw-bg-neutral-100 [&>li>label]:tw-border-y `}
                >
                  <li className="">
                    <label className="tw-text-campfire-blue">Email:</label>
                    <input type="email" {...register('_EMAIL')} />
                  </li>
                  <li className="">
                    <label>Password:</label>
                    <input type="password" {...register('_PASSWORD')} />
                  </li>
                  <li
                    className={`${
                      darkMode ? 'hover:tw-bg-campfire-neutral-400/70' : 'hover:tw-bg-campfire-neutral-300/70'
                    } tw-w-full 
                  tw-border-y tw-border-campfire-purple-light`}
                  >
                    <button type="submit" className={`tw-font-roboto_mono tw-text-base tw-w-full`}>
                      Login
                    </button>
                  </li>
                </ul>
              </form>
            }
          </div>
        </Transition>
      </div>
    </>
  );
};

export default SignIn;

import { useContext, useCallback, useState, useEffect } from 'react';
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
import Emoji from 'react-emojis';
/** React Redux Hooks */
//import { useAppDispatch } from '../../redux/reduxHooks.ts';
import { useAppDispatch, useAppSelector } from '../../redux/reduxHooks.ts';
import type { RootState } from '../../redux/store.ts';
import {
  userRegister,
  userComponentScreenLoader,
  fetchUser,
  fetchUserAuth,
  fetchUserStatus,
  fetchUserStatusRegister,
  fetchUserComponentScreenLoader,
} from '../../redux/slices/authSlice.ts';
/** Constants */
import { _DEFAULT_USER } from '../../utils/constants/constantsUser';
/** Components */
import { LoadingDashboardXL } from './A_Loader.tsx';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
// import * as z from 'zod';

const FormSchema = z.object({
  _EMAIL: z.string().email().min(5).max(50),
  _PASSWORD: z
    .string()
    .min(8)
    .max(16)
    .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$,;%^*-]).{8,16}$/),
  _PASSWORD_REPEAT: z
    .string()
    .min(8)
    .max(16)
    .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$,;%^*-]).{8,16}$/),
});

type FormInput = z.infer<typeof FormSchema>;

const Register = () => {
  /**Custom Middleware | Screen Size */
  const { isMobile } = useWindowSize();
  /**Custom Middleware | Dark Mode */
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  /** Navigation */
  const navigate = useNavigate();

  /** Redux Dispatch Instance */
  const dispatch = useAppDispatch();

  /** Redux Register Loader */
  const statusRegister = useAppSelector(fetchUserStatusRegister);
  const [ loaderRegister, setLoaderRegister ] = useState(false);

  useEffect(() => {
    if(statusRegister === 'loading') {
      setLoaderRegister(true);
    }
  },[]);

  /** Redux Store: User */
  const getUser = useAppSelector(fetchUser);
  const authenticated = useAppSelector(fetchUserAuth);
  const status = useAppSelector(fetchUserStatus);
  const screenLoader = useAppSelector(fetchUserComponentScreenLoader);

  /** React Hook Form */
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      _EMAIL: '',
      _PASSWORD: '',
      _PASSWORD_REPEAT: '',
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    registerGuest(data);
  });

  /** Button | Request | Create Guest */
  const registerGuest = async (data) => {
    //console.log("form data",data)
    try {
      const originalPromiseResult = await dispatch(userRegister(data)).unwrap();
      if (originalPromiseResult === undefined || originalPromiseResult.error) {
        console.log('🚫 Guest | Request Failed');
        // Failure Notification
        notifications.show({
          id: 'failure',
          withCloseButton: true,
          autoClose: 2000,
          title: 'Failed Registration Attempt',
          message: '',
          color: 'red',
          icon: <IconX />,
          className: 'my-notification-class',
          style: { backgroundColor: 'white' },
          sx: { backgroundColor: 'red' },
          loading: false,
        });
        console.log('⏳ Delay | Redirect in 1 second.');
        setLoaderRegister(true);
        setTimeout(() => {
          setLoaderRegister(false);
        }, '1000');
      } else {
        console.log('👍 Guest | Registered');
        // Success Notification
        notifications.show({
          id: 'success',
          withCloseButton: true,
          autoClose: 2000,
          title: '🥳 Registration Successful',
          message: 'Have Run ReCoding',
          color: 'teal',
          icon: <IconCheck />,
          className: 'my-notification-class',
          style: { backgroundColor: 'white' },
          sx: { backgroundColor: 'teal' },
          loading: false,
        });
        setLoaderRegister(true);
        setTimeout(() => {
          console.log('⏳ Delay | Redirect in 1 second.');
          navigate('/auth/guest/login');
        }, '1000');
      }
    } catch (error) {
      console.log(error);
    }
  };

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
                Already Registered?:&nbsp;
                <Link
                  to={'/auth/guest/login'}
                  className={`${
                    darkMode ? 'hover:tw-text-campfire-neutral-200' : 'hover:tw-text-campfire-neutral-700'
                  } tw-text-campfire-blue-300 tw-font-space_mono_bold`}
                >
                  Login
                </Link>
              </p>
            </div>
            <Link to={`/`} className="tw-flex tw-flex-row tw-place-content-center tw-font-space_mono">
              <span className="tw-pt-1 ">
                <Logo style={{ height: 28, width: 28 }} />
              </span>
              <h5
                className={`tw-text-3xl tw-px-2 tw-pt-1 ${
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
              <h4 className="tw-text-xl tw-w-fit tw-place-self-left">Guest Register</h4>
            </div>
            {loaderRegister ? 
              <div className="tw-min-h-[20.75em]"><LoadingDashboardXL /></div>
            :
            <form onSubmit={onSubmit} className="tw-min-h-[19em]">
              <ul
                className={`${
                  darkMode ? '[&>li>label]:tw-bg-campfire-neutral-300 [&>li>input]:tw-bg-campfire-neutral-200' : ''
                } [&>li]:tw-flex [&>li]:tw-flex-col 
              [&>li]:tw-p-2 [&>li>input]:tw-h-[1.6em]
              [&>li>label]:tw-px-1 [&>li>label]:tw-w-full [&>li>label]:tw-border-campfire-blue-200
              [&>li>label]:tw-w-[10em] [&>li>label]:tw-bg-neutral-100 [&>li>label]:tw-border-y `}
              >
                <li className="[&>div]:tw-text-xs">
                  <label className="tw-text-campfire-blue">Email:</label>
                  <input id="email" type="email" name="_EMAIL" {...register('_EMAIL')} />
                  <div className="tw-py-1">
                    {errors?._EMAIL?.message ? (
                      <p className="tw-text-red-500 tw-text-sm">
                        <Emoji emoji="cross-mark" size="12" /> {errors._EMAIL.message}
                      </p>
                    ) : (
                      <p className="tw-text-green-400 tw-text-sm">
                        <Emoji emoji="check-mark-button" className="tw-text-xs" /> Valid Email
                      </p>
                    )}
                  </div>
                </li>
                <li className="[&>div]:tw-text-sm">
                  <label>Password:</label>
                  <input id="password" type="password" {...register('_PASSWORD')} />
                  <div className="tw-py-1">
                    {errors?._PASSWORD?.message ? (
                      <p className="tw-text-red-500 tw-text-sm">
                        <Emoji emoji="cross-mark" size="12" /> {errors._PASSWORD.message}
                      </p>
                    ) : (
                      <p className="tw-text-green-400 tw-text-sm">
                        <Emoji emoji="check-mark-button" className="tw-text-xs" /> Valid Password
                      </p>
                    )}
                  </div>
                </li>
                <li className="[&>div]:tw-text-sm">
                  <label>Password Repeat:</label>
                  <input id="passwordRepeat" type="password" {...register('_PASSWORD_REPEAT')} />
                  <div className="tw-py-1">
                    {errors?._PASSWORD_REPEAT?.message ? (
                      <p className="tw-text-red-500">
                        <Emoji emoji="cross-mark" size="12" /> {errors._PASSWORD_REPEAT.message}
                      </p>
                    ) : null}
                    {watch('_PASSWORD_REPEAT') !== watch('_PASSWORD') && getValues('_PASSWORD') ? (
                      <p className="tw-text-red-500">
                        <Emoji emoji="cross-mark" size="12" /> Does not match password
                      </p>
                    ) : (
                      <p className="tw-text-green-400">
                        <Emoji emoji="check-mark-button" size="14" /> Matches Password
                      </p>
                    )}
                  </div>
                </li>
                <li
                  className={`{darkMode ? 'hover:tw-bg-campfire-neutral-400' : 'hover:tw-bg-campfire-neutral-700'} tw-w-full 
                tw-border-y tw-border-campfire-purple-light`}
                >
                  <button type="submit" className={`tw-font-roboto_mono tw-text-base tw-w-full`}>
                    Register
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

export default Register;

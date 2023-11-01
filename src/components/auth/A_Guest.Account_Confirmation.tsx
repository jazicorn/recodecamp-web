import { 
  useContext, 
  useCallback, 
  useState, 
  useEffect 
} from 'react';
import { 
  Link, 
  useNavigate, 
  useParams 
} from 'react-router-dom';
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
  userAccountValidation,
  fetchUser,
  fetchUserAuth,
  fetchUserStatus,
  fetchUserStatusRegister,
  fetchUserComponentScreenLoader,
  fetchUserStatusAccountValidate,
} from '../../redux/slices/authSlice.ts';
/** Components */
import { LoadingDashboardXL } from './A_Loader.tsx';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
// import * as z from 'zod';

const Guest_Account_Confirmation = () => {
  /**Custom Middleware | Screen Size */
  const { isMobile } = useWindowSize();
  /**Custom Middleware | Dark Mode */
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  /** Navigation */
  const navigate = useNavigate();

  /** Redux Dispatch Instance */
  const dispatch = useAppDispatch();

  /** Redux Fetch Account Confirm Loader */
  const statusFetchAccountValidate = useAppSelector(fetchUserStatusAccountValidate);
  const [ loaderAccountConfirm, setLoaderAccountConfirm ] = useState(true);
  const [ pageStatus, setPageStatus ] = useState("idle");

  useEffect(() => {
    if(statusFetchAccountValidate === 'loading') {
      setLoaderAccountConfirm(true);
    }
  },[]);

  setTimeout(() => {
    setLoaderAccountConfirm(false);
  }, '2000');

  /** React Router Retrive Params */
  let { passcode } = useParams();

  /** Fetch Account Confirmation */
  const retrieveAccountConfirmation = async (passcode) => {
    const data = {
      _PASSCODE: passcode
    }
    //console.log("passcode data:",data)
    try {
      const originalPromiseResult = await dispatch(userAccountValidation(data)).unwrap();
      //console.log("originalPromiseResultData:\n", originalPromiseResult.data)
      if (originalPromiseResult === undefined || originalPromiseResult.error) {
        console.log('🚫 Guest | Account Confirmation Failed');
        // Failure Notification
        notifications.show({
          id: 'failure',
          withCloseButton: true,
          autoClose: 2000,
          title: 'Failed Account Confirmation',
          message: '',
          color: 'red',
          icon: <IconX />,
          className: 'my-notification-class',
          style: { backgroundColor: 'white' },
          sx: { backgroundColor: 'red' },
          loading: false,
        });
        setLoaderAccountConfirm(true);
        setTimeout(() => {
          setLoaderAccountConfirm(false);
          setPageStatus("error");
        }, '1000');
      } else {
        console.log('👍 Guest | Account Confirmed');
        // Success Notification
        notifications.show({
          id: 'success',
          withCloseButton: true,
          autoClose: 2000,
          title: '🥳 Account Confirmation Successful',
          message: 'Login to start Recoding',
          color: 'teal',
          icon: <IconCheck />,
          className: 'my-notification-class',
          style: { backgroundColor: 'white' },
          sx: { backgroundColor: 'teal' },
          loading: false,
        });
        setLoaderAccountConfirm(true);
        setTimeout(() => {
          setPageStatus("success");
          setLoaderAccountConfirm(false);
          //console.log('⏳ Delay | Redirect in 1 second.');
          //navigate('/auth/guest/login');
        }, '1000');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    retrieveAccountConfirmation(passcode);
  },[]);

  //console.log("statusFetchAccountConfirm", statusFetchAccountConfirm);

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
            {/* <div
              className={`${
                darkMode ? '' : ''
              } tw-flex tw-flex-row tw-place-items-baseline tw-place-content-between tw-border-campfire-purple-light tw-border-b tw-h-[52px] tw-w-full tw-pt-4 tw-px-2 tw-my-4 `}
            >
              <h4 className="tw-text-xl tw-w-fit tw-place-self-left">Account Confirmation</h4>
            </div> */}
            {
            loaderAccountConfirm || pageStatus === "loading" ? 
              <div className="tw-min-h-[20.75em]"><LoadingDashboardXL /></div>
            :
               <div className="tw-min-h-[16.75em] tw-h-full tw-w-full tw-grow-0 tw-flex tw-flex-col tw-place-content-center tw-place-items-center tw-text-xl [&>span]:tw-text-3xl [&>span]:tw-text-campfire-blue">
                  {pageStatus === "idle" &&
                    <>
                      Account Confirmation Status: <span>...</span>
                    </>
                  }
                  {pageStatus === "success" &&
                    <>
                      Account Confirmation Status: <span>Success</span>
                    </>
                  }
                  {pageStatus === "error" || statusFetchAccountValidate === "error" &&
                    <>
                      Account Confirmation Status: <span>Account Not Found</span>
                    </>
                  }
              </div>
            }
          </div>
        </Transition>
      </div>
    </>
  );
  
};

export default Guest_Account_Confirmation;

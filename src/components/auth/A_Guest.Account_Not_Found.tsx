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
  const statusFetchAccountConfirm = useAppSelector(fetchUserStatusAccountValidate);
  const [ loaderAccountConfirm, setLoaderAccountConfirm ] = useState(true);
  const [ pageStatus, setPageStatus ] = useState("idle");

  setTimeout(() => {
    setLoaderAccountConfirm(false);
  }, '1000');

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
          tw-border-2 `}
          >
            <>
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
            </>
            <p className="tw-min-h-[240px] tw-h-full tw-w-full tw-grow-0 tw-flex tw-flex-col tw-place-content-center tw-place-items-center tw-text-2xl [&>span]:tw-text-6xl [&>span]:tw-text-campfire-blue">
              {loaderAccountConfirm ? <><LoadingDashboardXL /></> 
                :<> Account Not Found <span>404</span></>
              }
            </p>
          </div>
        </Transition>
      </div>
    </>
  );
  
};

export default Guest_Account_Confirmation;

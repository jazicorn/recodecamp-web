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
import { ThemeContext } from '../../../context/ThemeContext';
// hooks
import useWindowSize from '../../../hooks/useWindowSize';
import Transition from '../../../hooks/useTransition';
// utils
import { getDate } from '../../../utils/date';
import { 
  confirmation, 
  confirmationDate, 
  confirmationCount, 
  setEmailConfirmationLocalData 
} from '../../../utils/userConfirmation';
// images
import { ReactComponent as Logo } from '../../../assets/icons/logos/campfire-2-svgrepo-com.svg';
/** Notifications */
import { notifications } from '@mantine/notifications';
import { IconX, IconCheck } from '@tabler/icons-react';
import Emoji from 'react-emojis';
/** React Redux Hooks */
//import { useAppDispatch } from '../../../redux/reduxHooks.ts';
import { 
  useAppDispatch, 
  useAppSelector 
} from '../../../redux/reduxHooks.ts';
import type { RootState } from '../../../redux/store.ts';
import {
  userRegister,
  userComponentScreenLoader,
  userAccountValidation,
  userAccountConfirmationEmail,
  fetchUser,
  fetchUserConfirmEmail,
  fetchUserAuth,
  fetchUserStatus,
  fetchUserStatusRegister,
  fetchUserComponentScreenLoader,
  fetchUserStatusAccountValidate,
} from '../../../redux/slices/authSlice.ts';
/** Components */
import { LoadingDashboardXL } from '../A_Loader.tsx';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
// import * as z from 'zod';
/** Font Awesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faHandPointRight, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane as faPaperPlaneReg } from '@fortawesome/free-regular-svg-icons';

const Guest_Account_Confirmation = () => {
  /**Custom Middleware | Screen Size */
  const { isMobile } = useWindowSize();
  /**Custom Middleware | Dark Mode */
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  /** Navigation */
  const navigate = useNavigate();

  /** User Email Confirm */
  const userData = useAppSelector(fetchUserConfirmEmail);

  /** Redux Dispatch Instance */
  const dispatch = useAppDispatch();

  /** Redux Fetch Account Confirm Loader */
  const [ loader, setLoader ] = useState(true);

  setTimeout(() => {
    setLoader(false);
  }, '3000');

  const checkUserStatus = () => {
    console.log()
  };

  /** Email Account Confirmation */
  const emailConfirmation = async (data) => {
    //console.log("form data",data)
    if ( confirmation == true ) {
      console.log(`📬 | Email Confirmation Already Sent | Please Check Email Inbox`);
      console.log(`✉️ | Re-Send Email Confirmation 👉 ${import.meta.env.VITE_WEB_BASE_URL}/auth/account/confirm/status/check`);
      return
    } else {
      localStorage.setItem('email-confirmation-sent', true);
      try {
          const accountConfirmation = await dispatch(userAccountConfirmationEmail(data)).unwrap();
          if (accountConfirmation === undefined || accountConfirmation.error) {
            console.log('🚫 Guest | Request Failed');
          } else {

            console.log('👍 Guest | Emailed Account Confirmation');
            // Success Notification
            notifications.show({
              id: 'success',
              withCloseButton: true,
              autoClose: 3000,
              title: '🥳 Registration Successful',
              message: 'Please check your email inbox to confirm your new account',
              color: 'teal',
              icon: <IconCheck />,
              className: 'my-notification-class',
              style: { backgroundColor: 'white' },
              sx: { backgroundColor: 'teal' },
              loading: false,
            });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    emailConfirmation(userData)
  },[]);

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
            } ${isMobile ? 'tw-w-[24em]' : 'tw-w-[30em]'} tw-pt-2 tw-pb-2
          tw-border-2 `}
          >
            <>
            <div
              className={`${
                darkMode ? '' : ''
              } tw-flex tw-flex-row tw-place-items-baseline tw-place-content-end tw-min-h-[40px] tw-w-full tw-pb-4 tw-px-2 tw-mb-4 `}
            >
              <p className="tw-w-fit tw-text-xs">
                Account Confirmed?&nbsp;<FontAwesomeIcon icon={faHandPointRight} size="sm"/>&nbsp;
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
            <Link to={`/`} target="_blank" className="tw-flex tw-flex-row tw-place-content-center tw-font-space_mono">
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
            <section className="tw-min-h-[320px] tw-h-full tw-w-full tw-grow-0 tw-flex tw-flex-col tw-place-content-center tw-place-items-center tw-text-xl [&>span]:tw-text-6xl [&>span]:tw-text-campfire-blue">
              {loader ? 
                <div className="tw-h-[20.75em] tw-text-base tw-flex tw-flex-col tw-place-content-center tw-place-items-center">
                  <h4>Emailing Account Confirmation...</h4>
                  <LoadingDashboardXL />
                </div>
                : 
                <div className="tw-h-[20.75em] tw-text-base tw-flex tw-flex-col tw-place-content-center tw-place-items-center tw-font-roboto_mono [&>div]:tw-p-4 [&>div]:tw-text-center [&>h5]:tw-font-roboto_mono_bold
                [&>h5]:tw-text-xl [&>h5]:tw-text-campfire-blue [&>div]:tw-text-sm [&>div>p]:tw-p-1 [&>button]:tw-text-campfire-blue [&>button]:tw-text-base [&>button]:tw-border [&>button]:tw-border-campfire-blue [&>button]:tw-px-2 [&>button]:tw-py-1">
                  <div className="tw-w-full tw-h-full tw-flex tw-flex-col tw-place-content-center tw-place-items-center">
                    <FontAwesomeIcon icon={faPaperPlane} size="5x" />
                  </div>
                  <h5>Email Sent To Confirm Account</h5>
                  <div>
                    <p>Confirmation Email can take up to <span className="tw-underline tw-decoration-1 tw-decoration-campfire-neutral"><span className="tw-font-roboto_mono_bold tw-text-campfire-purple">15</span> minutes</span> to be received.</p>
                    <p>Didn't receive your confirmation email? Click on the link below to request new email confirmation:</p>
                  </div>
                  <button><Link to="/auth/account/confirm/resend">Re-Send</Link></button>
                </div>
              }
            </section>
            <footer
              className={`${
                darkMode ? '' : ''
              } tw-flex tw-flex-row tw-place-items-baseline tw-place-content-end tw-w-full tw-pt-12 tw-px-2 `}
            >
              <p className="tw-w-fit tw-text-xs">
                No Confirmation Email?&nbsp;<FontAwesomeIcon icon={faTriangleExclamation} size="sm"/>&nbsp;
                <Link
                  to={'/support/:email-confirmation'}
                  className={`${
                    darkMode ? 'hover:tw-text-campfire-neutral-200' : 'hover:tw-text-campfire-neutral-700'
                  } tw-text-campfire-blue-300 tw-font-space_mono_bold`}
                >
                  Contact Support
                </Link>
              </p>
            </footer>
          </div>
        </Transition>
      </div>
    </>
  );
  
};

export default Guest_Account_Confirmation;

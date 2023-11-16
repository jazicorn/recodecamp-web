import { 
  useContext, 
  useEffect, 
  useState, 
  useCallback 
} from 'react';
import { 
  Link, 
  useNavigate 
} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ThemeContext } from '../../../context/ThemeContext';
// hooks
import useWindowSize from '../../../hooks/useWindowSize';
import Transition from '../../../hooks/useTransition';
// utils
import { getDate } from '../../../utils/date';
import { 
  setEmailConfirmationLocalDataResend 
} from '../../../utils/userConfirmation';
// images
import { ReactComponent as Logo } from '../../../assets/icons/logos/campfire-2-svgrepo-com.svg';
/** Notifications */
import { notifications } from '@mantine/notifications';
import {
  IconX, 
  IconCheck 
} from '@tabler/icons-react';
/** React Redux Hooks */
//import { useAppDispatch } from '../../../redux/reduxHooks.ts';
import { 
  useAppDispatch, 
  useAppSelector 
} from '../../../redux/reduxHooks.ts';
import type { RootState } from '../../../redux/store.ts';
// import {
//   menuUser,
// } from '../../../redux/slices/dashboardSlice.ts';
import {
  userLogin,
  userComponentScreenLoader,
  userAccountConfirmationEmailResend,
  fetchUser,
  fetchUserAuth,
  fetchUserStatus,
  fetchUserStatusLogin,
  fetchUserComponentScreenLoader,
  fetchUserStatusAccountEmailConfirmedResend
} from '../../../redux/slices/authSlice.ts';
/** Custom Hooks */
import { LoadingDashboardXL } from '../A_Loader.tsx';
/**Constants */
import { _DEFAULT_USER } from '../../../utils/constants/constantsUser';
/** Font Awesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faHandPointRight, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane as faPaperPlaneReg } from '@fortawesome/free-regular-svg-icons';

interface FormInputs {
  multipleErrorInput: string;
}

const Guest_Account_Confirmation_Status = () => {
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
  const getEmailConfirmed = useAppSelector(fetchUserStatusAccountEmailConfirmedResend);

  const { register, handleSubmit } = useForm<FormInputs>({
    criteriaMode: 'all',
  });

  const [guestData, setGuestData] = useState();
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState("idle");

  /**Request Guest Login Info */
  const onSubmit = handleSubmit(async (data) => {
    await dispatch(userComponentScreenLoader(true));
    emailConfirmation(data);
  });

  const confirmationResend = () => { return localStorage.getItem('email-confirmation-sent-resend') };
  const confirmationResendDate = () => { return localStorage.getItem('email-confirmation-sent-resend-date') };
  const confirmationResendCount = () => { return localStorage.getItem('email-confirmation-sent-resend-count') };

  /** Email Account Confirmation */
  const emailConfirmation = async (data) => {
    //console.log("data", data)
    setMessage("idle");
    
    //console.log("fetchUserStatusAccountEmailConfirmed", getEmailConfirmed);
    
    if(getEmailConfirmed) {
      setMessage("confirmed");
      return
    }
    
    //console.log("form data",data)
    if( localStorage.hasOwnProperty('email-confirmation-sent-resend-count') === false ) {
      //console.log("?")
      localStorage.setItem('email-confirmation-sent-resend-count', 0);
    }
    //console.log("confirmationResendCount:", parseInt(confirmationResendCount()));
    const currentCount = confirmationResendCount();
    const updateCount = parseInt(currentCount) + parseInt(1);

    if(confirmationResendDate() !== getDate() || localStorage.hasOwnProperty('email-confirmation-sent-resend-date') === false) {
      //console.log(`Reset Attempts`);
      localStorage.setItem('email-confirmation-sent-resend-date', getDate());
      localStorage.setItem('email-confirmation-sent-resend-count', 0);
    }
    if ( currentCount >= 5 ) {
      console.log(`❗ | Reached Max Attempts`);
      console.log(`🛑 | Can Attempt Again In 24 Hours`);
      setMessage("max")
    } else {
      console.log(`❗ | Resend Attempt: ${currentCount}`)
      //console.log("updateCount:", updateCount)
      localStorage.setItem('email-confirmation-sent-resend-count', updateCount);
      try {
        //console.log("data",data);
        const originalPromiseResult = await dispatch(userAccountConfirmationEmailResend(data)).unwrap();
        //console.log("originalPromiseResult.data", originalPromiseResult.data);
        if (originalPromiseResult === undefined || originalPromiseResult.error) {
          //console.log('🚫 Guest | Request Failed');
          setMessage("Error");
        };
        if(originalPromiseResult.data === true) {
          setMessage("confirmed");
        }; 
        if(originalPromiseResult.data === false) {
          setMessage("success");
           // Success Notification
          notifications.show({
            id: 'success',
            withCloseButton: true,
            autoClose: 2000,
            title: '✉️ Account Resend Confirmation Successful',
            message: '',
            color: 'teal',
            icon: <IconCheck />,
            className: 'my-notification-class',
            style: { backgroundColor: 'white' },
            sx: { backgroundColor: 'teal' },
            loading: false,
          });
        };

      } catch (error) {
        setMessage("idle");
        console.log(error);
      }
    }
  };

  return (
    <>
      <div
        className={`${darkMode ? '' : ''} tw-h-full tw-w-full tw-px-6
      tw-flex tw-flex-col tw-place-items-center tw-place-content-center`}
      >
        <Transition>
          <div className={`${darkMode ? 'tw-bg-gray-400/70 tw-border-campfire-blue-600' : 'tw-bg-gray-200/80 tw-border-campfire-blue-200'} 
          ${isMobile ? 'tw-w-[24em]' : 'tw-w-[30em]'} tw-pt-2 tw-pb-2 [&>div]:tw-h-[3em] [&>div]:tw-flex tw-h-full tw-border-2`}
          >
            <div
              className={`${
                darkMode ? '' : ''
              } tw-flex tw-flex-row tw-place-items-baseline tw-place-content-end tw-w-full tw-pb-4 tw-px-2 tw-mb-4 `}
            >
              <p className="tw-w-fit tw-text-xs">
                Already Confirmed Account?:&nbsp;
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
              } tw-flex tw-flex-row tw-place-items-baseline tw-place-content-between tw-border-campfire-purple-light tw-border-b tw-h-[42px] tw-w-full tw-pt-4 tw-px-2 tw-my-2 `}
            >
              {/* <h4 className="tw-text-xl tw-w-fit tw-place-self-left">Account Confirmation Status</h4> */}
            </div>
            <section className="tw-h-[320px]">
              <div className="tw-h-[140px] tw-w-full tw-grow-0 tw-flex tw-flex-col tw-place-content-center tw-place-items-center tw-text-xl [&>span]:tw-text-base">
                {message == "idle" &&
                  <>
                    Send Account Confirmation Status: <span className="tw-text-campfire-blue">...</span>
                  </>
                }
                {message == "success" &&
                  <>
                    Send Account Confirmation Status: <span className="tw-text-campfire-blue">Email Sent</span>
                  </>
                }
                {message == "max" &&
                  <>
                    Send Account Confirmation Status: <span className="tw-text-red-500">Reach Maxed Daily Attempts</span>
                  </>
                }
                {message == "confirmed" &&
                  <>
                    Send Account Confirmation Status: <span className="tw-text-campfire-blue">Not Sent: Email Already Confirmed</span>
                  </>
                }
              </div>
              <div className="tw-h-[180px] tw-flex tw-flex-col tw-place-content-between">
                {loaderLogin ? 
                  <div className="tw-h-full"><LoadingDashboardXL /></div>
                  :
                  <form onSubmit={onSubmit} className=" tw-flex tw-flex-col tw-place-items-center tw-place-content-center ">
                    <ul className={`${ darkMode ? '[&>li>label]:tw-bg-campfire-neutral-300 [&>li>input]:tw-bg-campfire-neutral-200' : ''} 
                    tw-w-full tw-flex tw-flex-col tw-place-items-center tw-place-content-center  
                    [&>li]:tw-flex [&>li]:tw-flex-col [&>li]:tw-p-2 [&>li>input]:tw-h-[1.6em]
                    [&>li>label]:tw-px-1 [&>li>label]:tw-w-full [&>li>label]:tw-border-campfire-blue-200
                    [&>li>label]:tw-w-[10em] [&>li>label]:tw-bg-neutral-100 [&>li>label]:tw-border-y `}
                    >
                      <li className="tw-w-full">
                        <label className="tw-text-campfire-blue">Email:</label>
                        <input type="email" {...register('_EMAIL')} />
                      </li>
                      <li
                        className={`${
                          darkMode ? 'hover:tw-bg-campfire-neutral-400/70' : 'hover:tw-bg-campfire-neutral-300/70'
                        } tw-w-full tw-bg-campfire-blue-200/40 tw-mt-8
                      tw-border-y tw-border-campfire-purple-light`}
                      >
                        <button type="submit" className={`tw-font-roboto_mono tw-text-base tw-w-full`}>
                          Re-Send
                        </button>
                      </li>
                    </ul>
                  </form>
                }
                <footer
                  className={`${
                    darkMode ? '' : ''
                  } tw-flex tw-flex-row tw-place-items-baseline tw-place-content-end tw-w-full tw-px-2 `}
                >
                  <p className="tw-w-fit tw-text-xs">
                    No Confirmation Email? :&nbsp;
                    <Link
                      to={'/auth/guest/signup'}
                      className={`${
                        darkMode ? 'hover:tw-text-campfire-neutral-200' : 'hover:tw-text-campfire-neutral-700'
                      } tw-text-campfire-blue-300 tw-font-space_mono_bold`}
                    >Register
                    </Link>
                    &nbsp;or&nbsp;
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
            </section>
          </div>
        </Transition>
      </div>
    </>
  );
};

export default Guest_Account_Confirmation_Status;

import { useContext, useEffect, useState } from 'react';
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
import { useAppDispatch } from '../../redux/reduxHooks.ts';
import { 
  menuUser,
} from '../../redux/slices/dashboardSlice.ts';

//const prodURL = import.meta.env.PROD;

interface FormInputs {
  multipleErrorInput: string
}

const SignIn = () => {
  const { isMobile } = useWindowSize();
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;
  const navigate = useNavigate();

  /** Redux Dispatch Instance */
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
  } = useForm<FormInputs>({
    criteriaMode: "all",
  })
  const onSubmit = handleSubmit((data) => {
    guestLogin(data)
  });

  const [ guestData, setGuestData] = useState();

  /** Guest Login */
  const guestLogin = async (data) => {
    try {
      let url;
      if(import.meta.env.PROD) {
        url = `${baseURL}/guest/login`;
      } else {
        url = `/api/guest/login`;
      }
      await fetch(url, { 
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(function(response) {
          //console.log(response)
          if(response.status === 200) {
            console.log("🏠 Guest Logged In");
            // Success Notification
            notifications.show({
              id: 'success',
              withCloseButton: true,
              autoClose: 2000,
              title: "🥳 Login Successful",
              message: 'Have fun Re-coding.',
              color: 'teal',
              icon: <IconCheck />,
              className: 'my-notification-class',
              style: { backgroundColor: 'white' },
              sx: { backgroundColor: 'teal' },
              loading: false,
            });
            return response.json();
          } else {
            // Failure Notification
            notifications.show({
              id: 'failure',
              withCloseButton: true,
              autoClose: 2000,
              title: "Failed Login Attempt",
              message: '',
              color: 'red',
              icon: <IconX />,
              className: 'my-notification-class',
              style: { backgroundColor: 'white' },
              sx: { backgroundColor: 'red' },
              loading: false,
            });
          }
      }).then(function(response) {
        const userJson = response.data;
        //console.log("userJson: ", userJson);
        setGuestData(userJson);
        setTimeout(() => {
          console.log("⏳ Delay | Redirect in 1 second.");
          navigate("/learn");
        }, "1000");
      });
    } catch(error) {
      console.log("🚫 Guest Login Failed")
      console.log(error);
    }
  };

  useEffect(() => {
    //console.log("guestData: ",guestData);
    dispatch(menuUser(guestData));
  },[dispatch, guestData]);

  return (
    <>
      <div className={`${darkMode ? '' : ''} tw-h-full tw-w-full tw-px-6
      tw-flex tw-flex-col tw-place-items-center tw-place-content-center`}>
        <Transition>
          <div className={`${darkMode ? 'tw-bg-gray-400/70 tw-border-campfire-blue-600' : 'tw-bg-gray-200/80 tw-border-campfire-blue-200'} ${isMobile ? 'tw-w-[24em]' : 'tw-w-[30em]'} tw-pt-2 tw-pb-6
          [&>div]:tw-h-[3em] [&>div]:tw-flex tw-h-full
           tw-border-2 `}>
            <div className={`${darkMode ? '' : ''} tw-flex tw-flex-row tw-place-items-baseline tw-place-content-end tw-w-full tw-pb-4 tw-px-2 tw-mb-4 `}>
              <p className="tw-w-fit tw-text-xs">
                New User?:&nbsp;
                <Link to={'/auth/guest/register'} className={`${darkMode ? 'hover:tw-text-campfire-neutral-200' : 'hover:tw-text-campfire-neutral-700'} tw-text-campfire-blue-300 tw-font-space_mono_bold`}>
                  Register
                </Link>
              </p>
            </div>
            <Link to={`/`} className="tw-flex tw-flex-row tw-place-content-center tw-font-space_mono">
              <span className="tw-pt-1 ">
                  <Logo style={{ height: 28, width: 28 }} />
              </span>
              <h5 className={`tw-text-3xl tw-px-2 ${darkMode ? 'hover:tw-text-campfire-neutral-300' : 'hover:tw-text-campfire-blue'}`}>
                  ReCodeCamp
              </h5>
            </Link>
            <div className={`${darkMode ? '' : ''} tw-flex tw-flex-row tw-place-items-baseline tw-place-content-between tw-border-campfire-purple-light tw-border-b tw-h-[52px] tw-w-full tw-pt-4 tw-px-2 tw-my-4 `}>
              <h4 className="tw-text-xl tw-w-fit tw-place-self-left">
                Guest Login
              </h4>
            </div>
            <form onSubmit={onSubmit}>
              <ul className={`${darkMode ? '[&>li>label]:tw-bg-campfire-neutral-300 [&>li>input]:tw-bg-campfire-neutral-200' : ''} [&>li]:tw-flex [&>li]:tw-flex-col 
              [&>li]:tw-p-2 [&>li>input]:tw-h-[1.6em]
              [&>li>label]:tw-px-1 [&>li>label]:tw-w-full [&>li>label]:tw-border-campfire-blue-200
              [&>li>label]:tw-w-[10em] [&>li>label]:tw-bg-neutral-100 [&>li>label]:tw-border-y `}>
                <li className="">
                  <label className="tw-text-campfire-blue">Email:</label>
                  <input type="email" {...register('_EMAIL')}/>
                </li>
                <li className="">
                  <label>Password:</label>
                  <input type="password" {...register('_PASSWORD')}/>
                </li>
                <li className={`${darkMode ? 'hover:tw-bg-campfire-neutral-400/70' : 'hover:tw-bg-campfire-neutral-300/70'} tw-w-full 
                tw-border-y tw-border-campfire-purple-light`}>
                  <button type="submit" className={`tw-font-roboto_mono tw-text-base tw-w-full`}>
                    Login
                  </button>
                </li>
              </ul>
            </form>
          </div>
        </Transition>
      </div>
    </>
  )
}

export default SignIn

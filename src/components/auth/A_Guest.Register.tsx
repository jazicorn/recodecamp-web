import { useContext } from 'react';
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

/** API url | Custom env mandatory to begin with VITE  
 * https://vitejs.dev/guide/env-and-mode.html#env-files */
const baseURL = import.meta.env.VITE_API_BASE_URL;

interface FormInputs {
  multipleErrorInput: string
}

const Register = () => {
  const { isMobile } = useWindowSize();
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm<FormInputs>({
    criteriaMode: "all",
  })
  const onSubmit = handleSubmit((data) => {
    registerGuest(data);
  });

  /** Create Guest */
  const registerGuest = async (data) => {
    try {
      let url;
      if(import.meta.env.PROD) {
        url = `${baseURL}/guest/new`;
      } else {
        url = `/api/guest/new`;
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
            console.log("🎉 Guest | Created!");
            // Success Notification
            notifications.show({
              id: 'created',
              withCloseButton: true,
              autoClose: 3000,
              title: "🎉 Guest Created",
              message: 'Registration Successful. Please Login.',
              color: 'teal',
              icon: <IconCheck />,
              className: 'my-notification-class',
              style: { backgroundColor: 'white' },
              sx: { backgroundColor: 'teal' },
              loading: false,
            });
            setTimeout(() => {
              console.log("⏳ Delay | Redirect in 1 second");
              navigate("/auth/guest/login");
            }, "1000");
          } else {
            console.log("🚫 Guest | Login Failed")
            // Failure Notification
            notifications.show({
              id: 'failure',
              withCloseButton: true,
              autoClose: 2000,
              title: "Failed Registration Attempt",
              message: '',
              color: 'red',
              icon: <IconX />,
              className: 'my-notification-class',
              style: { backgroundColor: 'white' },
              sx: { backgroundColor: 'red' },
              loading: false,
            });
          }
      });
    } catch(error) {
      console.log("🚫 Guest | Creation Failed")
      console.log(error);
    }
  };

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
                Already Registered?:&nbsp;
                <Link to={'/auth/guest/login'} className={`${darkMode ? 'hover:tw-text-campfire-neutral-200' : 'hover:tw-text-campfire-neutral-700'} tw-text-campfire-blue-300 tw-font-space_mono_bold`}>
                  Login
                </Link>
              </p>
            </div>
            <Link to={`/`} className="tw-flex tw-flex-row tw-place-content-center tw-font-space_mono">
                <span className="tw-pt-1 ">
                    <Logo style={{ height: 28, width: 28 }} />
                </span>
                <h5 className={`tw-text-3xl tw-px-2 tw-pt-1 ${darkMode ? 'hover:tw-text-campfire-neutral-300' : 'hover:tw-text-campfire-blue'}`}>
                    ReCodeCamp
                </h5>
            </Link>
            <div className={`${darkMode ? '' : ''} tw-flex tw-flex-row tw-place-items-baseline tw-place-content-between tw-border-campfire-purple-light tw-border-b tw-h-[52px] tw-w-full tw-pt-4 tw-px-2 tw-my-4 `}>
              <h4 className="tw-text-xl tw-w-fit tw-place-self-left">
                Guest Register
              </h4>
            </div>
            <form onSubmit={onSubmit}>
              <ul className={`${darkMode ? '[&>li>label]:tw-bg-campfire-neutral-300 [&>li>input]:tw-bg-campfire-neutral-200' : ''} [&>li]:tw-flex [&>li]:tw-flex-col 
              [&>li]:tw-p-2 [&>li>input]:tw-h-[1.6em]
              [&>li>label]:tw-px-1 [&>li>label]:tw-w-full [&>li>label]:tw-border-campfire-blue-200
              [&>li>label]:tw-w-[10em] [&>li>label]:tw-bg-neutral-100 [&>li>label]:tw-border-y `}>
                <li className="">
                  <label className="tw-text-campfire-blue">Email:</label>
                  <input 
                  id="email"
                  type="email" 
                  {...register('_EMAIL', {
                      required: "Email Required",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Entered value does not match email format",
                      },
                      maxLength: {
                        value: 50,
                        message: "This input exceed maxLength.",
                      },
                    })}/>
                    <div>
                      {errors?._EMAIL?.type === "required" && 
                      (<p className="tw-text-red-500 tw-text-sm"> 
                        {errors._EMAIL.message}
                      </p>)}
                      {errors?._EMAIL?.type === "pattern" && 
                      (<p className="tw-text-red-500 tw-text-sm"> 
                        {errors._EMAIL.message}
                      </p>)}
                      {errors?._EMAIL?.type === "maxLength" && 
                      (<p className="tw-text-red-500 tw-text-sm"> 
                        {errors._EMAIL.message}
                      </p>)}
                    </div>
                </li>
                <li className="">
                  <label>Password:</label>
                  <input id="password" type="password"
                  {...register('_PASSWORD', {
                      required: "Password Required",
                      pattern: {
                        value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$,;%^*-]).{8,16}$/,
                        message: "\n1.At least one lowercase letter character\n2.At least one uppercase letter.\n3.At least one special character\n4.At least one number.\n5.Between 8 to 16 characters long.",
                      },
                      minLength: {
                        value: 8,
                        message: "This input requires minimum 8 letters",
                      },
                      maxLength: {
                        value: 16,
                        message: "This input requires minimum 8 letters",
                      },
                    })}/>
                  <div>
                      {errors?._PASSWORD?.type === "required" && 
                      (<p className="tw-text-red-500 tw-text-sm"> 
                        {errors._PASSWORD.message}
                      </p>)}
                      {errors?._PASSWORD?.type === "pattern" && 
                      (<p className="tw-text-red-500 tw-text-sm"> 
                        {errors._PASSWORD.message}
                      </p>)}
                      {errors?._EMAIL?.type === "minLength" && 
                      (<p className="tw-text-red-500 tw-text-sm"> 
                        {errors._PASSWORD.message}
                      </p>)}
                      {errors?._EMAIL?.type === "maxLength" && 
                      (<p className="tw-text-red-500 tw-text-sm"> 
                        {errors._PASSWORD.message}
                      </p>)}
                    </div>
                </li>
                <li className="">
                  <label>Password Repeat:</label>
                  <input id="passwordRepeat" type="password"
                  {...register('passwordRepeat', {
                      required: "Password Required",
                    })}/>
                  <div>
                    {errors?.passwordReapeat?.type === "required" && 
                    (<p className="tw-text-red-500 tw-text-sm"> 
                      {errors.passwordReapeat.message}
                    </p>)}
                     {watch("passwordRepeat") !== watch("_PASSWORD") &&
                      getValues("_PASSWORD") ? (
                      <p className="tw-text-red-500 tw-text-sm">password not match</p>
                      ) : null}
                  </div>
                </li>
                <li className={`{darkMode ? 'hover:tw-bg-campfire-neutral-400' : 'hover:tw-bg-campfire-neutral-700'} tw-w-full 
                tw-border-y tw-border-campfire-purple-light`}>
                  <button type="submit" 
                  className={`tw-font-roboto_mono tw-text-base tw-w-full`}>Register</button>
                </li>
              </ul>
            </form>
          </div>
        </Transition>
      </div>
    </>
  )
}

export default Register

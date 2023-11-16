// Page: Dashboard Settings (User)
/**React */
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
/**Custom Hooks */
import { ThemeContext } from '../../../../context/ThemeContext';
import useWindowSize from '../../../../hooks/useWindowSize';
import Transition from '../../../../hooks/useTransition';
//import bcrypt from 'bcryptjs';
/**User Avatars */
// import { createAvatar } from '@dicebear/core';
// import { pixelArt } from '@dicebear/collection';
/** Notifications */
import { notifications } from '@mantine/notifications';
//import { IconX, IconCheck } from '@tabler/icons-react';
import Emoji from 'react-emojis';
/**Modal */
import { useDisclosure } from '@mantine/hooks';
import { Modal, TextInput } from '@mantine/core';
/**Redux Hooks */
import { 
  useAppDispatch, 
  useAppSelector 
} from '../../../../redux/reduxHooks.ts';
import type { RootState } from '../../../../redux/store.ts';
import { 
  validUser, 
  userDelete, 
  fetchUser, 
  fetchUserAuth, 
  fetchUserStatus 
} from '../../../../redux/slices/authSlice.ts';
/**Constants */
import { _DEFAULT_USER } from '../../../../utils/constants/constantsUser';
/** Components */
import { LoadingDashboardXL } from '../L_Loading';
/** API url | Custom env mandatory to begin with VITE
 * https://vitejs.dev/guide/env-and-mode.html#env-files */
const baseURL = import.meta.env.VITE_API_BASE_URL;

interface FormInputs {
  multipleErrorInput: string;
}

const L_Settings_User = () => {
  /**Custom Hooks */
  const { isMobile, isMobileMD } = useWindowSize();
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  /**Browser Navigation */
  const navigate = useNavigate();

  /** Redux | Dispatch Instance */
  const dispatch = useAppDispatch();

  /** Redux Store: User */
  const getUser = useAppSelector(fetchUser);
  const authenticated = useAppSelector(fetchUserAuth);
  const status = useAppSelector(fetchUserStatus);

  useEffect(() => {
    dispatch(validUser());
  });

  /**Detect Auth */
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (authenticated) {
      setAuth(false);
    } else {
      setAuth(true);
    }
  }, [getUser]);

  /**User Id */
  const id = getUser._ID;
  const userIdHide = '********-****-****-****-************';
  const [userId, setUserId] = useState(userIdHide);
  const [userIdReveal, setUserIdReveal] = useState(false);
  const userIdRevealButton = (e) => {
    e.preventDefault();
    setUserIdReveal(!userIdReveal);
    if (userIdReveal === true) {
      setUserId(id);
    }

    if (userIdReveal === false) {
      setUserId(userIdHide);
    }
  };

  /**User Dates */
  const userCreatedDate = new Date(getUser._CREATED_AT).toDateString();
  const userUpdatedDate = new Date(getUser._UPDATED_AT).toDateString();
  /**User Subscription */
  const sub = getUser._SUBSCRIPTION.split(',')[1];
  const userSubType = sub.charAt(0).toUpperCase() + sub.slice(1);
  /**User Email */
  const userEmail = getUser._EMAIL;
  const userRevealButton = (e) => {
    e.preventDefault();
    console.log('Reveal User');
  };

  /**Modal: Delete Account */
  const [opened, { open, close }] = useDisclosure(false);

  /**Generate Avatar */
  // const avatar = useMemo(() => {
  //   return createAvatar(pixelArt , {
  //     size: 128,
  //     // ... other options
  //   }).toDataUriSync();
  // }, []);

  /**Delete Modal Input */
  const { register, handleSubmit } = useForm<FormInputs>({
    criteriaMode: 'all',
  });

  /**Request Guest Login Info */
  const onSubmit = handleSubmit(async (data) => {
    guestDelete(data);
  });

  /** Delete */
  const guestDelete = useCallback(
    async (data) => {
      try {
        const originalPromiseResult = await dispatch(userDelete(data)).unwrap();
        if (originalPromiseResult === undefined || originalPromiseResult.error) {
          //console.log("status", status);
          if (status === 'loading') {
            console.log('🔄 Guest Deletion | Loading');
          } else if (status === 'failed') {
            console.log('🚫 Guest Deletion | Failed');
          } else if (status === 'succeeded') {
            console.log('🚫 Guest Deletion | Request Returned Error');
          } else {
            console.log('🚫 Guest Deletion | Request Failed');
          }
          console.log('🚫 Guest Deletion | Failed');
          // Failure Notification
          notifications.show({
            id: 'failure',
            withCloseButton: true,
            autoClose: 2000,
            title: 'Failed Account Deletion',
            message: 'Please try again',
            color: 'red',
            icon: <Emoji emoji="face-with-monocle" />,
            className: 'my-notification-class',
            style: { backgroundColor: 'white' },
            sx: { backgroundColor: 'red' },
            loading: false,
          });
        } else {
          console.log('😿 Guest | Deleted Account');
          // Success Notification
          notifications.show({
            id: 'success',
            withCloseButton: true,
            autoClose: 4000,
            title: 'Successful Account Deletion',
            message: 'Sad to see you go',
            color: 'teal',
            icon: <Emoji emoji="crying-cat" />,
            className: 'my-notification-class',
            style: { backgroundColor: 'white' },
            sx: { backgroundColor: 'teal' },
            loading: false,
          });
          setTimeout(() => {
            console.log('⏳ Delay | Redirect in 1 second.');
            navigate('/');
          }, '1000');
        }
      } catch (error) {
        console.log('🚫 Guest | Delete Request Failed');
        console.log(error);
      }
    },
    [dispatch, getUser._ID, navigate]
  );

  return (
    <div
      className={`${
        darkMode
          ? '[&_main>ul]:tw-text-campfire-blue [&_main>h4]:tw-text-campfire-neutral-300'
          : '[&_main]:tw-text-campfire-neutral-700 [&_main>h4]:tw-text-campfire-neutral-600'
      } tw-w-full tw-h-full tw-p-2`}
    >
      {/**Account Deletion Menu */}
      <Modal opened={opened} onClose={close} withCloseButton={true} title="Account Deletion" centered>
        <div className={`${isMobile ? 'tw-pt-4' : 'tw-pt-4'} tw-w-full tw-h-full`}>
          <form onSubmit={onSubmit} autoComplete="new-password">
            <TextInput
              label="Confirm Email"
              placeholder="john@doe.com"
              type="email"
              autoComplete="off"
              {...register('_EMAIL')}
            />
            <TextInput
              mt="md"
              label="Confirm Password"
              placeholder="Password1!"
              type="text"
              autoComplete="off"
              {...register('_PASSWORD')}
            />
            <button
              onClick={open}
              className={`${
                darkMode
                  ? 'hover:tw-bg-campfire-neutral-400/50 hover:tw-text-campfire-neutral-50'
                  : 'hover:tw-bg-campfire-neutral-400/50 hover:tw-text-campfire-neutral-100'
              } 
            tw-mt-4 tw-w-full tw-border tw-border-red-400 tw-font-space_mono tw-text-lg tw-text-red-400`}
            >
              Delete Account
            </button>
          </form>
        </div>
      </Modal>
      <div
        className={`${isMobile ? 'tw-pt-2' : ''} ${
          darkMode ? 'layout-template-dark' : 'layout-template-light'
        } layout-template`}
      >
        <article className={`${darkMode ? '' : ''}`}>
          <Transition>
            <h3 className={`${darkMode ? '' : ''} layout-template-header`}>User Settings</h3>
          </Transition>
          {!authenticated ? (
            <Transition>
              <div
                className={`${
                  darkMode ? '[&>*]:tw-bg-neutral-900/80' : '[&>*]:tw-bg-neutral-300/80'
                } tw-text-transparent tw-flex tw-flex-col tw-w-full tw-h-full tw-place-self-center tw-place-content-center tw-place-items-center`}
              >
                <LoadingDashboardXL />
              </div>
            </Transition>
          ) : (
            <main
              className={`${isMobile ? '' : ''}  ${
                darkMode ? 'tw-text-campfire-neutral-300' : 'tw-text-campfire-neutral-700'
              }
          d-settings-user-container `}
            >
              {/** */}
              <Transition>
                <section
                  className={`${isMobile ? 'tw-basis-1/2' : 'tw-basis-2/3'} ${
                    isMobileMD
                      ? 'tw-flex-col [&>p]:tw-basis-5/12 [&>table]:tw-basis-7/12'
                      : 'tw-flex-row [&>p]:tw-w-[20em]'
                  } tw-flex `}
                >
                  {/* {isMobile ? <p className={`tw-self-center tw-py-2`}><img src={avatar} alt="Avatar"/></p> 
              :<p className={`tw-self-center tw-py-2`}><img src={avatar} alt="Avatar" /></p> } */}
                  <div className={`${isMobile ? 'tw-flex tw-flex-col' : ''} tw-pt-4`}>
                    <table
                      className={`${
                        darkMode
                          ? '[&>tbody>tr>th]:tw-bg-campfire-neutral-500 [&>tbody>tr>th]:'
                          : '[&>tbody>tr>th]:tw-border-campfire-neutral-500  [&>tbody>tr>th]:tw-bg-campfire-neutral-100'
                      } 
                ${isMobile ? ' d-settings-user-table-mobile' : 'd-settings-user-table-desktop'} d-settings-user-table`}
                    >
                      <tbody>
                        <tr>
                          <th>User ID</th>
                          <td className="">
                            {userIdReveal === true ? <span>{userIdHide}</span> : <span>{userId}</span>}&nbsp;
                            <button
                              onClick={(e) => userIdRevealButton(e)}
                              className={`${
                                darkMode
                                  ? 'hover:tw-bg-campfire-neutral-500'
                                  : 'tw-border-campfire-neutral-700 hover:tw-bg-campfire-neutral-400/40'
                              } 
                        tw-font-space_mono tw-border tw-py-0.5 tw-px-3`}
                            >
                              {userIdReveal === true ? <span>Show</span> : <span>Hide</span>}
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <th>User Mode</th>
                          <td>{userSubType}</td>
                        </tr>
                        <tr>
                          <th>User Created</th>
                          <td>{userCreatedDate}</td>
                        </tr>
                        <tr>
                          <th>User Last Login</th>
                          <td>{userUpdatedDate}</td>
                        </tr>
                        <tr>
                          <th>User Email</th>
                          <td>{userEmail}</td>
                        </tr>
                        <tr>
                          <th>User Password</th>
                          <td className={`${isMobile ? '[&>button]:tw-my-1 [&>button]:tw-py-1' : ''}`}>
                            <button
                              onClick={(e) => userRevealButton(e)}
                              className={`${
                                darkMode
                                  ? 'hover:tw-bg-campfire-neutral-500 hover:tw-text-campfire-neutral-100 tw-border-campfire-purple-300 tw-text-campfire-purple-300'
                                  : 'hover:tw-bg-campfire-neutral-400/30 hover:tw-text-campfire-neutral-200 tw-border-campfire-purple-400 tw-text-campfire-purple-400'
                              }  
                        ${isMobile ? 'tw-w-full' : ''}  tw-font-space_mono tw-border tw-py-0.5 tw-px-3 tw-mr-2`}
                            >
                              Update Password
                            </button>
                            <button
                              onClick={(e) => userRevealButton(e)}
                              className={`${
                                darkMode
                                  ? 'hover:tw-bg-campfire-neutral-500'
                                  : 'tw-border-campfire-neutral-700 hover:tw-bg-campfire-neutral-400/40'
                              }  ${
                                isMobile ? 'tw-w-full' : ''
                              } hover:tw-text-red-400 tw-font-space_mono tw-border tw-py-0.5 tw-px-3`}
                            >
                              Reset Password
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className={`${isMobile ? 'tw-pt-4' : 'tw-pt-10'} tw-w-full `}>
                      <button
                        onClick={open}
                        className={`${
                          darkMode
                            ? 'hover:tw-bg-campfire-neutral-400/50 hover:tw-text-campfire-neutral-50'
                            : 'hover:tw-bg-campfire-neutral-400/50 hover:tw-text-campfire-neutral-100'
                        } tw-w-full tw-border tw-border-red-400 tw-font-space_mono tw-text-lg tw-text-red-400`}
                      >
                        Account Deletion
                      </button>
                      <p className="tw-w-full tw-text-center">🚨!!!Warning!!!🚨 This Action Is Permanent</p>
                    </div>
                  </div>
                </section>
              </Transition>
              <section
                className={`${
                  darkMode
                    ? 'custom-bg-waves-neutral-darkest-inverse tw-opacity-30 tw-border-neutral-500'
                    : 'custom-bg-waves-neutral-lighest tw-opacity-40 tw-border-campfire-neutral-700'
                } ${isMobile ? 'tw-basis-1/3' : 'tw-basis-1/2'}
            tw-h-full tw-w-full tw-flex tw-flex-col tw-rounded`}
              ></section>
            </main>
          )}
        </article>
      </div>
    </div>
  );
};

export default L_Settings_User;

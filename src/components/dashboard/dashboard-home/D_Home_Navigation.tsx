// Dashboard Banner
import { useContext, useCallback } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as Rocket } from '../../../assets/icons/others/rocket-right-svgrepo-com.svg';
//import useWindowSize from '../../../hooks/useWindowSize';
import Transition from '../../../hooks/useTransition';
//icons
import {
  IconCalendar,
  IconTerminal2,
  IconCategory,
  IconLogout,
  IconNotes,
  IconSettings,
  IconListDetails,
  IconHome,
  IconSearch,
  IconBook2,
} from '@tabler/icons-react';
import { removeTokenFromLocalStorage } from '../../../utils/common';
import { useAppDispatch } from '../../../redux/reduxHooks.ts';
//import { useAppDispatch, useAppSelector } from '../../redux/reduxHooks.ts';
//import type { RootState } from '../../redux/store.ts';
import { 
  menuUser,
} from '../../../redux/slices/dashboardSlice.ts';
import { DEFAULT_USER } from '../../../utils/constants.ts';
/** Notifications */
import { notifications } from '@mantine/notifications';
//import { IconX, IconCheck } from '@tabler/icons-react';
import Emoji from 'react-emojis';

/** API url | Custom env mandatory to begin with VITE  
 * https://vitejs.dev/guide/env-and-mode.html#env-files */
const baseURL = import.meta.env.VITE_API_BASE_URL;

const D_Home_Navigation = () => {
  //const { isMobile, isDesktopMDLG, isDesktopXL } = useWindowSize();
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  /**Get question url */
  let url;
  if(import.meta.env.PROD) {
    url = `${baseURL}/guest/logout`
  } else {
    url = `/api/guest/logout`
  }

  /** Retrieve Category Based Question */
  const logoutUser = useCallback(async (url) => {
    /** Retrieve Question from API */
   try {
      const result = await fetch(url, {
          method: 'DELETE',
          headers: {
              'Accept' : 'application/json',
              'Content-Type': 'application/json',
          },
        }
      );
      if(result.status === "200") {
        return true
      }
      return false
    } catch(error) {
      console.log(error);
    }
  },[]);

  /** Redux Dispatch Instance */
  const dispatch = useAppDispatch();
  
  /** User Logout */
  const navigate = useNavigate();
  const logout = (e) => {
    e.preventDefault();
    //console.log("goodbye");
    const removeUser = logoutUser(url);
    if(removeUser) {
      removeTokenFromLocalStorage();
      dispatch(menuUser(DEFAULT_USER));
      console.log("👋 Goodbye | User Logged Out");
      // Success Notification
      notifications.show({
        id: 'success',
        withCloseButton: true,
        autoClose: 3000,
        title: "User Logged Out",
        message: 'See you next time.',
        color: 'cyan',
        icon: <Emoji emoji="waving-hand"/> ,
        className: 'my-notification-class',
        style: { backgroundColor: 'white' },
        sx: { backgroundColor: 'teal' },
        loading: false,
      });
      setTimeout(() => {
        console.log("⏳ Delay | Page Redirect In 1 Second.");
        navigate("/");
      }, '1000');
    } else {
      console.log("🚫 Guest | Account Deletion Failed");
      // Failure Notification
      notifications.show({
        id: 'failure',
        withCloseButton: true,
        autoClose: 2000,
        title: "Failed to Logout",
        message: 'Please try again.',
        color: 'red',
        icon: <Emoji emoji="face-with-monocle"/>,
        className: 'my-notification-class',
        style: { backgroundColor: 'white' },
        sx: { backgroundColor: 'red' },
        loading: false,
      });
    }
  };

  return (
    <div className={`${darkMode ? '[&_main>ul]:tw-text-campfire-blue [&_main>h4]:tw-text-campfire-neutral-300' : 
    '[&_main]:tw-text-campfire-purple [&_main>h4]:tw-text-campfire-neutral-600'} 
    tw-w-full tw-h-full tw-min-h-screen tw-p-2`}>
      <div className={`${darkMode ? 'custom-bg-waves-neutral-darker-inverse tw-bg-blend-overlay tw-opacity-70 ' : 
      'custom-bg-waves-neutral-lighest tw-bg-blend-overlay tw-opacity-60'} tw-w-full tw-h-full `}>
      <section className={`${darkMode ? '[&>main>ul]:tw-border-campfire-neutral-800': '[&>main>ul]:tw-border-campfire-blue'} 
       tw-py-4 tw-h-full tw-w-full tw-flex tw-flex-col tw-items-left
      [&>main>ul]:tw-h-fit [&>main>ul]:tw-px-2 [&>main>ul]:tw-border-l-2 [&>main>ul]:tw-ml-4 
      [&>main>ul]:tw-flex [&>main>ul]:tw-flex-col [&>main>ul]:tw-gap-2`}>
        <Transition>
        <h4 className={`${darkMode ? 'tw-text-campfire-neutral-300' : 'tw-text-campfire-neutral-700'} tw-border-campfire-purple-light
          tw-border-b tw-text-2xl tw-h-[36px] tw-w-full tw-pl-2 tw-mb-4`}>
          Directory
        </h4>
        </Transition>
        <main className="tw-font-space_mono tw-overflow-auto tw-mb-1 tw-flex tw-flex-col">
          {/**Col 1 */}
          <ul className={`${darkMode ? '' : ''} tw-flex tw-flex-col tw-flex-wrap tw-h-full tw-w-fit
          [&>*]:tw-flex [&>*]:tw-flex-row [&>*]:tw-gap-1 [&>*]:tw-justify-left [&>li]:tw-text-[17px]
          `}>
            <li className={`${darkMode ? "hover:tw-text-campfire-neutral-100 tw-text-campfire-neutral-300": "hover:tw-text-campfire-neutral-600 tw-text-campfire-neutral-900"}`}>
              { darkMode ? <IconHome color="#d4d4d4" /> : <IconHome color="#000" />}
              <Transition><Link to={'/learn'} className=''>Home</Link></Transition>
            </li>
          </ul>
          <hr className={`${darkMode ? 'tw-border-campfire-neutral-800' : 'tw-border-campfire-blue' } 
        tw-place-self-left tw-ml-8 tw-my-3 tw-h-[px] tw-w-[100px]`}/>
          {/**Col 1 */}
          <ul className={`${darkMode ? '' : ''} tw-flex tw-flex-col tw-flex-wrap tw-h-full tw-w-fit
          [&>*]:tw-flex [&>*]:tw-flex-row [&>*]:tw-gap-1 [&>*]:tw-justify-left [&>li]:tw-text-[17px]
          `}>
            <li className={`${darkMode ? "hover:tw-text-campfire-neutral-300": "hover:tw-text-campfire-neutral-700"}`}>
              { darkMode ? <IconCategory color="#d4d4d4" /> : <IconCategory color="#000" />}
              <Transition><Link to='/learn/categories' className="">Categories</Link></Transition>
            </li>
            <li className={`${darkMode ? "hover:tw-text-campfire-neutral-300 tw-bg-campfire-neutral-500": "hover:tw-text-campfire-neutral-700 tw-text-campfire-blue tw-bg-campfire-neutral-300 "}
            tw-flex tw-flex-row tw-place-items-center tw-w-fit tw-pr-1 tw-rounded`}>
              { darkMode ? <IconTerminal2 color="#d4d4d4" /> : <IconTerminal2 color="#000" />}
              <Transition><Link to='/learn/code' className="">Start ReCoding</Link></Transition>
              <Transition><Rocket style={{ height: 22, width: 32 }} /></Transition>
            </li>
          </ul>
          <hr className={`${darkMode ? 'tw-border-campfire-neutral-800' : 'tw-border-campfire-blue' } 
        tw-place-self-left tw-ml-8 tw-my-3 tw-h-[px] tw-w-[100px]`}/>
          {/**Col 2 */}
          <ul className={`${darkMode ? '' : ''} tw-flex tw-flex-col tw-flex-wrap tw-h-full tw-w-fit
          [&>*]:tw-flex [&>*]:tw-flex-row [&>*]:tw-gap-1 [&>*]:tw-justify-left [&>li]:tw-text-[17px]
          `}>
            <li className={`${darkMode ? "hover:tw-text-campfire-neutral-300": "hover:tw-text-campfire-neutral-700"}`}>
              { darkMode ? <IconListDetails color="#d4d4d4" /> : <IconListDetails color="#000" />}
              <Transition><Link to={'/learn/plans'}>Learning Plans</Link></Transition>
            </li>
            <li className={`${darkMode ? "hover:tw-text-campfire-neutral-300": "hover:tw-text-campfire-neutral-700"}`}>
              { darkMode ? <IconCalendar color="#d4d4d4" /> : <IconCalendar color="#000" />}
              <Transition><Link to={'/learn/calendar'}>Calendar</Link></Transition>
            </li>
             <li className={`${darkMode ? "hover:tw-text-campfire-neutral-300": "hover:tw-text-campfire-neutral-700"}`}>
              { darkMode ? <IconBook2 color="#d4d4d4" /> : <IconBook2 color="#000" />}
              <Transition><Link to={'/learn/docs'}>Documentation</Link></Transition>
            </li>
            <li className={`${darkMode ? "hover:tw-text-campfire-neutral-300": "hover:tw-text-campfire-neutral-700"}`}>
              { darkMode ? <IconNotes color="#d4d4d4" /> : <IconNotes color="#000" />}
              <Transition><Link to={'/learn/notes'}>Notes</Link></Transition>
            </li>
          </ul>
          <hr className={`${darkMode ? 'tw-border-campfire-neutral-800' : 'tw-border-campfire-blue' } 
        tw-place-self-left tw-ml-8 tw-my-3 tw-h-[px] tw-w-[100px]`}/>
          <ul className={`${darkMode ? '[&>li]:tw-text-campfire-purple' : '[&>li]:tw-text-campfire-blue-600'} tw-flex tw-flex-col tw-flex-wrap tw-h-full tw-w-fit [&>li]:tw-text-[17px]
          [&>*]:tw-flex [&>*]:tw-flex-row [&>*]:tw-gap-1 [&>*]:tw-justify-left
          `}>
            <li className={`${darkMode ? "hover:tw-text-campfire-neutral-300": "hover:tw-text-campfire-neutral-700"}`}>
              { darkMode ? <IconSearch color="#d4d4d4" /> : <IconSearch color="#000" />}
              <Transition><Link to={'/learn/search'}>Dashboard Search</Link></Transition>
            </li>
            <li className={`${darkMode ? "hover:tw-text-campfire-neutral-300": "hover:tw-text-campfire-neutral-700"}`}>
              { darkMode ? <IconSettings color="#d4d4d4" /> : <IconSettings color="#000" />}
              <Transition><Link to={'/learn/settings/dashboard'}>Dashboard Settings</Link></Transition>
            </li>
            <li className={`${darkMode ? "hover:tw-text-campfire-neutral-300": "hover:tw-text-campfire-neutral-700"} tw-pl-0.5`}>
              { darkMode ? <IconLogout color="#d4d4d4" /> : <IconLogout color="#000" />}
              <Transition><button onClick={(e) => logout(e)} className="tw-font-space_mono">Logout</button></Transition>
            </li>
          </ul>
        </main>
      </section>
      </div>
    </div>
  )
}

export default D_Home_Navigation

// Dashboard Banner
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Link, useNavigate } from 'react-router-dom';
//import useWindowSize from '../../../hooks/useWindowSize';
import Transition from '../../hooks/useTransition';
//icons
import {
  IconCalendar,
  IconCategory,
  IconLogout,
  IconNotes,
  IconSettings,
  IconListDetails,
  IconHome,
  IconSearch,
  IconBook2,
  IconUser
} from '@tabler/icons-react';
import { removeTokenFromLocalStorage } from '../../utils/common';
import { useAppDispatch } from '../../redux/reduxHooks.ts';
//import { useAppDispatch, useAppSelector } from '../../redux/reduxHooks.ts';
//import type { RootState } from '../../redux/store.ts';
import { 
  menuUser,
} from '../../redux/slices/dashboardSlice.ts';
import { DEFAULT_USER } from '../../utils/constants.ts';

const D_Navigation = () => {
  //const { isMobile, isDesktopMDLG, isDesktopXL } = useWindowSize();
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  /** Redux Dispatch Instance */
  const dispatch = useAppDispatch();

  /** User Logout */
  const navigate = useNavigate();
  const logout = (e) => {
    e.preventDefault();
    removeTokenFromLocalStorage();
    dispatch(menuUser(DEFAULT_USER));
    console.log("👋 Goodbye | User Logged Out");
    setTimeout(() => {
      console.log("⏳ Delay | Page Redirect In 1 Second.");
      navigate("/");
    }, '1000');
  };

  return (
    <div className={`${darkMode ? '[&_main>ul]:tw-text-campfire-blue [&_main>h4]:tw-text-campfire-neutral-300' : 
    '[&_main]:tw-text-campfire-purple [&_main>h4]:tw-text-campfire-neutral-600'} tw-w-full tw-h-full tw-p-2`}>
      <div className={`${darkMode ? 'custom-bg-waves-neutral-darker-inverse tw-bg-blend-overlay tw-opacity-50 ' : 
      'custom-bg-waves-neutral-lighest tw-bg-blend-overlay tw-opacity-50'} tw-w-full tw-h-full  tw-rounded`}>
      <section className={`${darkMode ? '[&>main>ul]:tw-border-campfire-neutral-800': '[&>main>ul]:tw-border-campfire-blue'} [&>main>ul>li]:tw-py-1 
       tw-py-4 tw-h-full tw-w-full tw-flex tw-flex-col tw-items-left
      [&>main>ul]:tw-h-fit [&>main>ul]:tw-px-2 [&>main>ul]:tw-border-l-2 [&>main>ul]:tw-ml-3 
      [&>main>ul]:tw-flex [&>main>ul]:tw-flex-col [&>main>ul]:tw-gap-2`}>
        <Transition>
        <h4 className={`${darkMode ? 'tw-text-campfire-neutral-300 hover:tw-text-2 campfire-neutral-300' : 'tw-text-campfire-neutral-700 hover:tw-text-campfire-neutral-700'} tw-border-campfire-purple-light
          tw-border-b tw-text-2xl tw-h-[40px] tw-w-full tw-pl-3 tw-pb-3 tw-mb-4`}>
            <div className={`${darkMode ? "tw-border-campfire-neutral-800" : "tw-border-campfire-blue"} tw-border-l-2 tw-px-1.5 tw-flex tw-flex-row tw-place-self-center tw-h-full tw-px-2`}>
              <Transition>
                <Link to={'/learn'} className='tw-h-full'>
                { darkMode ? <IconHome color="#d4d4d4" /> : <IconHome color="#000" />}
                </Link>
              </Transition>
            </div>
        </h4>
        </Transition>
        <main className="tw-overflow-auto tw-mb-1 tw-flex tw-flex-col">
          {/**Col 1 */}
          <ul className={`${darkMode ? '' : ''} tw-flex tw-flex-col tw-flex-wrap tw-h-full tw-w-fit
          [&>*]:tw-flex [&>*]:tw-flex-row [&>*]:tw-justify-left
          `}>
            <li className={`${darkMode ? "hover:tw-text-campfire-neutral-300": "hover:tw-text-campfire-neutral-700"}`}>
              <Transition>
                <Link to='/learn/categories' className="">
                  { darkMode ? <IconCategory color="#d4d4d4" /> : <IconCategory color="#000" />}
                </Link>
              </Transition>
            </li>
            <li className={`${darkMode ? "hover:tw-text-campfire-neutral-300": "hover:tw-text-campfire-neutral-700 tw-text-campfire-blue "}`}>
              <Transition>
                <Link to='/learn/code' className="">
                  {darkMode ? <IconListDetails color="#d4d4d4" /> : <IconListDetails color="#000" />}
                </Link>
              </Transition>
            </li>
            <li className={`${darkMode ? "hover:tw-text-campfire-neutral-300": "hover:tw-text-campfire-neutral-700"}`}>
              <Transition>
                <Link to={'/learn/calendar'}>
                  {darkMode ? <IconCalendar color="#d4d4d4" /> : <IconCalendar color="#000" />}
                </Link>
              </Transition>
            </li>
             <li className={`${darkMode ? "hover:tw-text-campfire-neutral-300": "hover:tw-text-campfire-neutral-700"}`}>
              <Link to={'/learn/docs'}>
                {darkMode ? <IconBook2 color="#d4d4d4" /> : <IconBook2 color="#000" />}
              </Link>
            </li>
            <li className={`${darkMode ? "hover:tw-text-campfire-neutral-300": "hover:tw-text-campfire-neutral-700"}`}>
              <Transition>
                <Link to={'/learn/notes'}>
                  { darkMode ? <IconNotes color="#d4d4d4" /> : <IconNotes color="#000" />}
                </Link>
              </Transition>
            </li>
          </ul>
          <hr className={`${darkMode ? 'tw-border-campfire-neutral-800' : 'tw-border-campfire-blue' } 
        tw-place-self-left tw-ml-4 tw-mt-5 tw-mb-4 tw-h-[2px] tw-w-[36px]`}/>
          {/**Col 2 */}
          <ul className={`${darkMode ? '[&>li]:tw-text-campfire-purple-300' : '[&>li]:tw-text-campfire-blue-600'} tw-flex tw-flex-col tw-flex-wrap tw-h-full tw-w-fit 
          [&>*]:tw-flex [&>*]:tw-flex-row [&>*]:tw-gap-1 [&>*]:tw-justify-left
          `}>
            <li className={`${darkMode ? "hover:tw-text-campfire-neutral-300": "hover:tw-text-campfire-neutral-700"}`}>
              <Transition>
                <Link to={''}>
                  {darkMode ? <IconSearch color="#d4d4d4" /> : <IconSearch color="#000" />}
                </Link>
              </Transition>
            </li>
             <li className={`${darkMode ? "hover:tw-text-campfire-neutral-300": "hover:tw-text-campfire-neutral-700"}`}>
              <Transition>
                <Link to={'/learn/settings/user'}>
                  {darkMode ? <IconUser color="#d4d4d4" /> : <IconUser color="#000" />}
                </Link>
              </Transition>
            </li>
            <li className={`${darkMode ? "hover:tw-text-campfire-neutral-300": "hover:tw-text-campfire-neutral-700"}`}>
              <Transition>
                <Link to={'/learn/settings/dashboard'}>
                  {darkMode ? <IconSettings color="#d4d4d4" /> : <IconSettings color="#000" />}
                </Link>
              </Transition>
            </li>
            <li className={`${darkMode ? "hover:tw-text-campfire-neutral-300": "hover:tw-text-campfire-neutral-700"} tw-pl-0.5`}>
              <Transition>
                <button onClick={(e) => logout(e)} className="tw-font-space_mono">
                  {darkMode ? <IconLogout color="#d4d4d4" /> : <IconLogout color="#000" />}
                </button>
              </Transition>
            </li>
          </ul>
        </main>
      </section>
      </div>
    </div>
  )
}

export default D_Navigation
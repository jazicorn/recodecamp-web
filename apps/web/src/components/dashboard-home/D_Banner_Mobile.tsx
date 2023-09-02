// Dashboard Banner
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Link } from 'react-router-dom';
import { ReactComponent as Rocket } from '../../assets/icons/others/rocket-right-svgrepo-com.svg';
//import useWindowSize from '../../hooks/useWindowSize';
import Transition from '../hooks/useTransition';
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
  IconBook2
} from '@tabler/icons-react';

const D_Banner = () => {
  //const { isMobile, isDesktopMDLG, isDesktopXL } = useWindowSize();
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;
  return (
    <div className={`${darkMode ? '[&_section>ul]:tw-text-campfire-blue [&_section>h4]:tw-text-campfire-neutral-300' : 
    '[&_section]:tw-text-campfire-purple [&_section>h4]:tw-text-campfire-neutral-600'} tw-w-full tw-h-full tw-p-2`}>
      <div className={`${darkMode ? 'tw-bg-campfire-neutral-600 tw-opacity-70 ' : 
      'tw-bg-campfire-neutral-300 tw-opacity-70 '} 
      tw-w-full tw-h-full`}>
      <main className={`${darkMode ? '[&>section>ul]:tw-border-campfire-neutral-900': '[&>section>ul]:tw-border-campfire-blue'} 
      tw-py-4 tw-h-full tw-w-full tw-flex tw-flex-col tw-items-left 
      [&>section>ul]:tw-h-fit [&>section>ul]:tw-px-2 [&>section>ul]:tw-border-l-2 [&>section>ul]:tw-ml-4 
      [&>section>ul]:tw-flex [&>section>ul]:tw-flex-col [&>section>ul]:tw-gap-2`}>
        <section className="tw-overflow-auto tw-overflow-y-hidden tw-mb-1"> 
          <h4 className={`${darkMode ? 'tw-text-campfire-neutral-300' : 'tw-text-campfire-neutral-700'} tw-border-campfire-purple-light
          tw-border-b tw-text-2xl tw-h-[36px] tw-w-full tw-pl-2 tw-mb-4`}>
            Directory
          </h4>
          <ul className={`${darkMode ? '' : ''} tw-flex tw-flex-col tw-flex-wrap tw-h-full tw-w-fit
          [&>*]:tw-flex [&>*]:tw-flex-row [&>*]:tw-gap-1 [&>*]:tw-justify-left
          `}>
            <li className={`${darkMode ? "hover:tw-text-campfire-neutral-300": "hover:tw-text-campfire-neutral-700"}`}>
              { darkMode ? <IconHome color="#d4d4d4" /> : <IconHome color="#000" />}
              <Link to={'/learn'} className=''>Directory</Link>
            </li>
            <li className={`${darkMode ? "hover:tw-text-campfire-neutral-300": "hover:tw-text-campfire-neutral-700"}`}>
              { darkMode ? <IconCategory color="#d4d4d4" /> : <IconCategory color="#000" />}
              <Link to='/learn/categories' className="">Categories</Link>
            </li>
            <li className={`${darkMode ? "hover:tw-text-campfire-neutral-300 tw-bg-campfire-neutral-500": "hover:tw-text-campfire-neutral-700 tw-text-campfire-blue tw-bg-campfire-neutral-100 "}
            tw-flex tw-flex-row tw-place-items-center tw-w-fit tw-pr-1 tw-rounded`}>
              { darkMode ? <IconListDetails color="#d4d4d4" /> : <IconListDetails color="#000" />}
              <Link to='/learn/code' className="">Start ReCoding</Link>
              <Rocket style={{ height: 22, width: 32 }} />
            </li>
            <li className={`${darkMode ? "hover:tw-text-campfire-neutral-300": "hover:tw-text-campfire-neutral-700"}`}>
              { darkMode ? <IconCalendar color="#d4d4d4" /> : <IconCalendar color="#000" />}
              <Link to={'/learn/calendar'}>Calendar</Link>
            </li>
            <li className={`${darkMode ? "hover:tw-text-campfire-neutral-300": "hover:tw-text-campfire-neutral-700"}`}>
              { darkMode ? <IconBook2 color="#d4d4d4" /> : <IconBook2 color="#000" />}
              <Link to={'/learn/docs'}>Documentation</Link>
            </li>
            <li className={`${darkMode ? "hover:tw-text-campfire-neutral-300": "hover:tw-text-campfire-neutral-700"}`}>
              { darkMode ? <IconNotes color="#d4d4d4" /> : <IconNotes color="#000" />}
              <Link to={'/learn/notes'}>Notes</Link>
            </li>
          </ul>
          <hr className={`${darkMode ? '' : 'tw-bg-campfire-neutral-600' } tw-ml-8 tw-my-3 tw-w-[100px] tw-h-[1px]`}/>
          <ul className={`${darkMode ? '[&>li]:tw-text-campfire-purple' : '[&>li]:tw-text-campfire-blue-600'} tw-flex tw-flex-col tw-flex-wrap tw-h-full tw-w-fit
          [&>*]:tw-flex [&>*]:tw-flex-row [&>*]:tw-gap-1 [&>*]:tw-justify-left
          `}>
            <li className={`${darkMode ? "hover:tw-text-campfire-neutral-300": "hover:tw-text-campfire-neutral-700"}`}>
              { darkMode ? <IconSearch color="#d4d4d4" /> : <IconSearch color="#000" />}
              <Link to={''}>Search Dashboard</Link>
            </li>
            <li className={`${darkMode ? "hover:tw-text-campfire-neutral-300": "hover:tw-text-campfire-neutral-700"}`}>
              { darkMode ? <IconSettings color="#d4d4d4" /> : <IconSettings color="#000" />}
              <Link to={''}>Dashboard Settings</Link>
            </li>
            <li className={`${darkMode ? "hover:tw-text-campfire-neutral-300": "hover:tw-text-campfire-neutral-700"} tw-pl-0.5`}>
              { darkMode ? <IconLogout color="#d4d4d4" /> : <IconLogout color="#000" />}
              <Link to={''}>User Logout</Link>
            </li>
          </ul>
        </section>
        {/* <hr className={`${darkMode ? 'tw-bg-campfire-neutral-200' : 'tw-bg-campfire-neutral-600' } 
        tw-place-self-center tw-ml-8 tw-my-3 tw-h-[200px] tw-w-[1px]`}/> */}
        {/**Descriptions */}
        {/* <section className={`${darkMode ? '' : '' } tw-ml-8 tw-mt-1`}>
          <h4 className="tw-text-3xl">Description</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </section> */}
      </main>
      </div>
    </div>
  )
}

export default D_Banner

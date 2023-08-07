// Dashboard Navigation | Mobile
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
//icons
import {
  IconCalendar,
  IconCategory,
  IconTerminal2,
  IconLogout,
  IconNotes,
  IconSettings,
  IconListDetails,
  IconChevronsRight,
  IconChevronsDown
} from '@tabler/icons-react';
import { ReactComponent as Rocket } from '../../assets/icons/others/rocket-right-svgrepo-com.svg';

const D_Navigation = () => {
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  }
  return (
    <menu className={`${darkMode ? '' : ''} tw-flex tw-flex-col tw-py-2 tw-pl-2 tw-place-content-start tw-h-full`}>
      {!menu ? 
        <button onClick={toggleMenu} className={`${darkMode ? "tw-bg-campfire-neutral-500 hover:tw-bg-campfire-neutral-300": "tw-bg-campfire-neutral-300 hover:tw-bg-campfire-neutral-400"} tw-my-1 tw-mr-2 tw-border-transparent tw-rounded`}>
          { darkMode ? <IconChevronsRight color="#2ca9bc" /> : <IconChevronsRight color="#000" />}
        </button>
      :
      <div className={`${darkMode ? '' : ''} tw-mr-2 tw-z-30 tw-relative tw-rounded`}>
        <button onClick={toggleMenu} className={`${darkMode ? "tw-bg-campfire-neutral-500 hover:tw-bg-campfire-neutral-300": "tw-bg-campfire-blue-100 hover:tw-bg-campfire-neutral-400"} tw-my-1  tw-mr-2 tw-border-transparent tw-rounded tw-w-full`}>
          {darkMode ? <IconChevronsDown color="#2ca9bc" /> : <IconChevronsDown color="#000" />}
        </button>
        <div className={`${darkMode ? 'tw-bg-campfire-blue-100 tw-border-campfire-neutral-600' : 'tw-bg-campfire-neutral-300 tw-border-campfire-blue-200'} tw-border  tw-rounded-b`}>
          <ul className='tw-flex tw-flex-col tw-place-items-start tw-space-y-2 [&>li]:tw-h-[30px] tw-py-1'>
            <li className={`${darkMode ? "hover:tw-bg-campfire-neutral-400": "hover:tw-bg-campfire-neutral-100"} 
            tw-flex tw-flex-row tw-gap-1 tw-w-full tw-py-1`}>
              <Link to="/learn/categories" className="tw-flex tw-flex-row tw-gap-1 tw-w-full">
                { darkMode ? <IconCategory color="#2ca9bc" /> : <IconCategory color="#000" />}
                Category
              </Link>
            </li>
            <li className={`${darkMode ? "hover:tw-border-b hover:tw-border-campfire-neutral-300": "hover:tw-border-b-[1.5px] hover:tw-border-campfire-blue"} 
            tw-flex tw-flex-row tw-gap-1 tw-w-full tw-py-1`}>
              <Link to="/learn/code" className="tw-flex tw-flex-row tw-gap-1 tw-w-full tw-place-items-center tw-h-[18px]">
                {darkMode ? <IconListDetails color="#2ca9bc" /> : <IconListDetails color="#000" />}
                <span className={`${darkMode ? "hover:tw-text-campfire-neutral-300 tw-bg-campfire-neutral-400": "hover:tw-text-campfire-neutral-700 tw-text-campfire-blue tw-bg-campfire-neutral-100 "}
            tw-flex tw-flex-row tw-place-items-center tw-w-fit tw-pr-1 tw-rounded`}>
                  Start ReCoding
                  <Rocket style={{ height: 22, width: 32 }} />
                </span>
              </Link>
              </li>
            <li className={`${darkMode ? "hover:tw-border-b hover:tw-border-campfire-neutral-300": "hover:tw-border-b-[1.5px] hover:tw-border-campfire-blue"} 
            tw-flex tw-flex-row tw-gap-1 tw-w-full tw-py-1`}>
              {darkMode ? <IconTerminal2 color="#2ca9bc" /> : <IconTerminal2 color="#000" />} Console</li>
            <li className={`${darkMode ? "hover:tw-border-b hover:tw-border-campfire-neutral-300": "hover:tw-border-b-[1.5px] hover:tw-border-campfire-blue"} 
            tw-flex tw-flex-row tw-gap-1 tw-w-full tw-py-1`}>
              { darkMode ? <IconCalendar color="#2ca9bc" /> : <IconCalendar color="#000" />} Calendar</li>
            <li className={`${darkMode ? "hover:tw-border-b hover:tw-border-campfire-neutral-300": "hover:tw-border-b-[1.5px] hover:tw-border-campfire-blue"} 
            tw-flex tw-flex-row tw-gap-1 tw-w-full tw-py-1`}> 
            { darkMode ? <IconNotes color="#2ca9bc" /> : <IconNotes color="#000" />} Notes</li>
          </ul>
          <ul className='tw-flex tw-flex-col tw-place-items-start tw-space-y-2 [&>li]:tw-h-[30px]'>
            <li className={`${darkMode ? "hover:tw-border-b hover:tw-border-campfire-neutral-300": "hover:tw-border-b-[1.5px] hover:tw-border-campfire-blue"} 
            tw-flex tw-flex-row tw-gap-1 tw-w-full tw-py-1`}>
              { darkMode ? <IconSettings color="#2ca9bc" /> : <IconSettings color="#000" />} Dashboard Settings</li>
            <li className={`${darkMode ? "hover:tw-border-b hover:tw-border-campfire-neutral-300": "hover:tw-border-b-[1.5px] hover:tw-border-campfire-blue"} 
            tw-flex tw-flex-row tw-gap-1 tw-w-full tw-py-1`}>
              { darkMode ? <IconLogout color="#2ca9bc" /> : <IconLogout color="#000"/> } User Logout</li>
          </ul>
        </div>
      </div>
      }
    </menu>
  )
}

export default D_Navigation

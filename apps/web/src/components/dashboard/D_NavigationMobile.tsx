// Dashboard Navigation | Mobile
import { useContext, useState } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
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
import Header from './D_Header'

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
        <button onClick={toggleMenu} className={`${darkMode ? " hover:tw-bg-campfire-neutral-300": "tw-bg-campfire-neutral-300 hover:tw-bg-campfire-neutral-400"}
      tw-my-1 tw-mr-2 tw-border-transparent tw-rounded`}>
          { darkMode ? <IconChevronsRight color="#2ca9bc" /> : <IconChevronsRight color="#000" />}
        </button>
      :
      <div className={`${darkMode ? '' : 'tw-bg-campfire-neutral-100'} tw-mr-2 tw-z-30 tw-relative tw-rounded`}>
        <button onClick={toggleMenu} className={`${darkMode ? " hover:tw-bg-campfire-neutral-300": "tw-bg-campfire-blue-100 hover:tw-bg-campfire-neutral-400"}
      tw-pt-1 tw-mr-2 tw-border-transparent tw-rounded-t tw-w-full tw-pb-2`}>
          { darkMode ? <IconChevronsDown color="#2ca9bc" /> : <IconChevronsDown color="#000" />}
        </button>
        <div className={`${darkMode ? '' : ''} tw-border tw-border-campfire-blue-200 tw-rounded-b`}>
          <ul className='tw-flex tw-flex-col tw-place-items-start tw-space-y-2 [&>li]:tw-h-[30px]'>
            <li className={`${darkMode ? "hover:tw-border-b hover:tw-border-campfire-neutral-300": "hover:tw-border-b-[1.5px] hover:tw-border-campfire-blue"} 
          `}>
              { darkMode ? <IconCategory color="#2ca9bc" /> : <IconCategory color="#000" />}
            </li>
            <li className={`${darkMode ? "hover:tw-border-b hover:tw-border-campfire-neutral-300": "hover:tw-border-b-[1.5px] hover:tw-border-campfire-blue"} 
          `}>
              {darkMode ? <IconListDetails color="#2ca9bc" /> : <IconListDetails color="#000" />}
              </li>
            <li className={`${darkMode ? "hover:tw-border-b hover:tw-border-campfire-neutral-300": "hover:tw-border-b-[1.5px] hover:tw-border-campfire-blue"} 
          `}>
              {darkMode ? <IconTerminal2 color="#2ca9bc" /> : <IconTerminal2 color="#000" />}</li>
            <li className={`${darkMode ? "hover:tw-border-b hover:tw-border-campfire-neutral-300": "hover:tw-border-b-[1.5px] hover:tw-border-campfire-blue"} 
          `}>
              { darkMode ? <IconCalendar color="#2ca9bc" /> : <IconCalendar color="#000" />}</li>
            <li className={`${darkMode ? "hover:tw-border-b hover:tw-border-campfire-neutral-300": "hover:tw-border-b-[1.5px] hover:tw-border-campfire-blue"} 
          `}>
            { darkMode ? <IconNotes color="#2ca9bc" /> : <IconNotes color="#000" />}</li>
          </ul>
          <ul className='tw-flex tw-flex-col tw-place-items-start tw-space-y-2 [&>li]:tw-h-[30px]'>
            <li className={`${darkMode ? "hover:tw-border-b hover:tw-border-campfire-neutral-300": "hover:tw-border-b-[1.5px] hover:tw-border-campfire-blue"} 
          `}>
              { darkMode ? <IconSettings color="#2ca9bc" /> : <IconSettings color="#000" />}</li>
            <li className={`${darkMode ? "hover:tw-border-b hover:tw-border-campfire-neutral-300": "hover:tw-border-b-[1.5px] hover:tw-border-campfire-blue"} 
          `}>
              { darkMode ? <IconLogout color="#2ca9bc" /> : <IconLogout color="#000"/> }</li>
          </ul>
        </div>
      </div>
      }
    </menu>
  )
}

export default D_Navigation

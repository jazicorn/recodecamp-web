// Dashboard Navigation
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { Link } from 'react-router-dom'
//icons
import {
  IconCalendar,
  IconCategory,
  IconTerminal2,
  IconLogout,
  IconNotes,
  IconSettings,
  IconListDetails
} from '@tabler/icons-react';

const D_Navigation = () => {
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  return (
    <menu className={`${darkMode ? '' : ''} tw-flex tw-flex-col tw-py-2 tw-mb-1 tw-place-content-between tw-h-full`}>
      <ul className='tw-flex tw-flex-col tw-place-items-center tw-space-y-2 [&>li]:tw-h-[30px]'>
        <li className={`${darkMode ? "hover:tw-border-b hover:tw-border-campfire-neutral-300": "hover:tw-border-b-[1.5px] hover:tw-border-campfire-blue"} 
       `}>
          <Link to="/learn/categories">{ darkMode ? <IconCategory color="#2ca9bc" /> : <IconCategory color="#000" />}</Link>
        </li>
        <li className={`${darkMode ? "hover:tw-border-b hover:tw-border-campfire-neutral-300": "hover:tw-border-b-[1.5px] hover:tw-border-campfire-blue"} 
       `}>
          <Link to="/learn/code">{darkMode ? <IconListDetails color="#2ca9bc" /> : <IconListDetails color="#000" />}</Link>
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
      <ul className='tw-flex tw-flex-col tw-place-items-center tw-space-y-2 [&>li]:tw-h-[30px]'>
        <li className={`${darkMode ? "hover:tw-border-b hover:tw-border-campfire-neutral-300": "hover:tw-border-b-[1.5px] hover:tw-border-campfire-blue"} 
       `}>
          { darkMode ? <IconSettings color="#2ca9bc" /> : <IconSettings color="#000" />}</li>
        <li className={`${darkMode ? "hover:tw-border-b hover:tw-border-campfire-neutral-300": "hover:tw-border-b-[1.5px] hover:tw-border-campfire-blue"} 
       tw-pl-1`}>
          { darkMode ? <IconLogout color="#2ca9bc" /> : <IconLogout color="#000"/> }</li>
      </ul>
    </menu>
  )
}

export default D_Navigation

// Dashboard Banner
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
//icons
import {
  IconCalendar,
  IconCategory,
  IconTerminal2,
  IconLogout,
  IconNotes,
  IconSettings,
  IconFolder,
  IconListDetails
} from '@tabler/icons-react';

const D_Banner = () => {
    //const { isMobile, isDesktopMDLG, isDesktopXL } = useWindowSize();
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;
  return (
    <div className={`${darkMode ? 'tw-text-campfire-blue' : ''} tw-flex tw-flex-col tw-h-full`}>
      <div className={`${darkMode ? '[&>*]:tw-bg-[#525252]' : '[&>*]:tw-bg-campfire-neutral-300'} 
      tw-w-full tw-h-full tw-flex tw-flex-col tw-p-2 [&>*]:tw-rounded`}>
        <main className='tw-p-2 tw-h-full tw-flex tw-flex-col tw-justify-between tw-items-center'>
          <h1>Hello!</h1>
          <ul className='tw-flex tw-flex-col tw-flex-wrap tw-px-36 tw-w-full tw-justify-center [&>*]:tw-flex [&>*]:tw-flex-row [&>*]:tw-gap-1'>
            <li>{ darkMode ? <IconCategory color="#2ca9bc" /> : <IconCategory color="#000" />}</li>
            <li>{ darkMode ? <IconListDetails color="#2ca9bc" /> : <IconListDetails color="#000" />}</li>
            <li>{ darkMode ? <IconTerminal2 color="#2ca9bc" /> : <IconTerminal2 color="#000" />}</li>
            <li>{ darkMode ? <IconFolder color="#2ca9bc" /> : <IconFolder color="#000" />}</li>
            <li>{ darkMode ? <IconCalendar color="#2ca9bc" /> : <IconCalendar color="#000" />}</li>
          </ul>
          <ul className='tw-flex tw-flex-col tw-flex-wrap tw-px-36 tw-w-full tw-justify-evenly [&>*]:tw-flex [&>*]:tw-flex-row [&>*]:tw-gap-1'>
            <li>{ darkMode ? <IconNotes color="#2ca9bc" /> : <IconNotes color="#000" />}</li>
            <li>{ darkMode ? <IconSettings color="#2ca9bc" /> : <IconSettings color="#000" />}</li>
            <li className=' tw-pl-1'>{ darkMode ? <IconLogout color="#2ca9bc" /> : <IconLogout color="#000"/> }</li>
          </ul>
        </main>
      </div>
    </div>
  )
}

export default D_Banner
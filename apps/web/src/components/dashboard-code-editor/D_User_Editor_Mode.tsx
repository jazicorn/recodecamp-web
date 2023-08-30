import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
// redux hooks
//import { useAppSelector } from '../redux/reduxHooks.ts';
//import type { RootState } from '../redux/store.ts';

const D_User_Editor_Mode = () => {
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;
  //const { isMobile, isDesktopMDLG, isDesktopXL } = useWindowSize();
  //const menuItem = useAppSelector((state:RootState) => state?.dashboard?.value);

  return (
    // <menu className={`${darkMode ? 'tw-text-campfire-blue' : 'tw-text-campfire-neutral-800'} tw-shrink-0 tw-flex tw-flex-row tw-h-full tw-w-full tw-text-campfire-blue  tw-pr-3 `}>
   
    // </menu>
     <div className={`${darkMode ? '[&>*]:tw-bg-campfire-neutral-600 tw-text-campfire-blue' : '[&>*]:tw-bg-campfire-neutral-300'} 
    tw-w-full tw-h-full tw-flex tw-flex-col tw-p-2 tw-content-center`}>
      <menu className={`${darkMode ? 'tw-bg-campfire-neutral-600 tw-opacity-70 ' : 
      'tw-bg-campfire-neutral-300 tw-opacity-70 '} tw-h-full tw-pt-1.5`}>
          <ul className='tw-flex tw-flex-row tw-items-center tw-pl-2'>
            <li className='tw-text-campfire-purple'>Mode: </li>
            <li className='tw-px-1'>
             User Editor
            </li>
          </ul>
          <ul className='tw-flex tw-flex-row tw-items-center tw-gap-1'>
            <li></li>
          </ul>
      </menu>
    </div>
  )
}

export default D_User_Editor_Mode

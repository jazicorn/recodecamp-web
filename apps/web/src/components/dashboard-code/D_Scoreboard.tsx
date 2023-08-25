// Dashboard Banner
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import Trophy from "../../assets/icons/dashboard/trophy-1st-place-svgrepo-com.svg";
// redux hooks
//import { useAppSelector } from '../redux/reduxHooks.ts';
//import type { RootState } from '../redux/store.ts';

const D_Scoreboard = () => {
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;
  //const { isMobile, isDesktopMDLG, isDesktopXL } = useWindowSize();
  //const menuItem = useAppSelector((state:RootState) => state?.dashboard?.value);

  const points = 154;

  return (
    // <menu className={`${darkMode ? 'tw-text-campfire-blue' : 'tw-text-campfire-neutral-800'} tw-shrink-0 tw-flex tw-flex-row tw-h-full tw-w-full tw-text-campfire-blue  tw-pr-3 `}>
   
    // </menu>
     <div className={`${darkMode ? '[&>*]:tw-bg-campfire-neutral-600 tw-text-campfire-blue' : '[&>*]:tw-bg-campfire-neutral-300'} 
    tw-w-full tw-h-full tw-flex tw-flex-col tw-p-2 tw-content-center`}>
      <menu className={`${darkMode ? 'tw-bg-campfire-neutral-600 tw-opacity-70 ' : 
      'tw-bg-campfire-neutral-300 tw-opacity-70 '} tw-h-full tw-pt-1`}>
          <ul className='tw-flex tw-flex-row tw-items-center '>
            <li className=''><img src={Trophy} alt="Trophy" style={{ height: 18, width: 36 }}></img></li>
            <li className='tw-text-campfire-purple'>Total<span className='tw-text-campfire-neutral-900'>:</span></li>
            <li className='tw-text-sm tw-self-end tw-mx-1 tw-px-1 tw-bg-campfire-neutral-100 tw-border tw-rounded-xl'>
              <span className='tw-text-campfire-green'>{points}</span> Points
            </li>
          </ul>
          <ul className='tw-flex tw-flex-row tw-items-center tw-gap-1'>
            <li></li>
          </ul>
      </menu>
    </div>
  )
}

export default D_Scoreboard

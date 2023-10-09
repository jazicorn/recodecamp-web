// Dashboard Banner
import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import Trophy from "../../../assets/icons/dashboard/trophy-1st-place-svgrepo-com.svg";
// redux hooks
import { useAppSelector } from '../../../redux/reduxHooks.ts';
import type { RootState } from '../../../redux/store.ts';
// hooks
import Transition from '../../../hooks/useTransition';
//import { Center } from '@mantine/core';

const D_Scoreboard = () => {
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;
  //const { isMobile, isDesktopMDLG, isDesktopXL } = useWindowSize();
  const getMenuPoints = useAppSelector((state:RootState) => state?.dashboard?.points);

  const points = getMenuPoints;

  return (
     <div className={`${darkMode ? '[&>*]:tw-bg-campfire-neutral-600/70 tw-text-campfire-blue' : '[&>*]:tw-bg-campfire-neutral-200/90'} 
    tw-w-full tw-h-full tw-flex tw-flex-col tw-p-2 tw-content-center`}>
      <menu className={`tw-h-full tw-pt-1`}>
        <Transition>
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
        </Transition>   
      </menu>
    </div>
  )
}

export default D_Scoreboard

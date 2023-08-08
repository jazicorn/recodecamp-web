// Dashboard Banner
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import JS_Icon from "../../assets/javascript/javascript-original.svg";
// hooks
import useWindowSize from '../../hooks/useWindowSize';
// redux hooks
import { useAppSelector } from '../../redux/reduxHooks.ts';
import type { RootState } from '../../redux/store.ts';
// icons
import { IconSearch } from '@tabler/icons-react';
import {
  IconArrowBadgeRightFilled
} from '@tabler/icons-react';

const D_Navigation = () => {
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;
  const { isMobile } = useWindowSize();
  const menuItem = useAppSelector((state:RootState) => state?.dashboard?.categoryRoute);
  const routeEmpty = menuItem.length === 0;
  const routeArr = menuItem.split('/').filter(route => route !== 'random');

  return (
    <menu className={`${darkMode ? 'tw-text-campfire-blue' : 'tw-text-campfire-neutral-800'} tw-shrink-0 tw-flex tw-flex-row tw-h-full tw-w-full tw-text-campfire-blue tw-items-center tw-place-content-between tw-pr-3 `}>
      {isMobile ? 
      <ul>
        <ul className='tw-flex tw-flex-row tw-items-center'>
          <li className=''><img src={JS_Icon} alt="Javascript" style={{ height: 18, width: 36 }}></img></li>
          {!routeEmpty ? routeArr.map((route, i) => 
            <li key={i} className="tw-flex tw-flex-row">
              <span className='tw-flex tw-flex-row tw-items-center tw-pt-0.5 tw-px-1'>
                { darkMode ? <IconArrowBadgeRightFilled size={18} color="#2ca9bc" /> 
                  : <IconArrowBadgeRightFilled size={18} color="#000" />
                }
              </span>
              <span className=''>{route}</span>
            </li>
          ) : <div/>}
        </ul>
      </ul> 
      :
      <ul className="tw-flex tw-flex-row tw-place-content-between tw-w-full">
        <ul className='tw-flex tw-flex-row tw-items-center'>
          <li className=''><img src={JS_Icon} alt="Javascript" style={{ height: 18, width: 36 }}></img></li>
          <li><span className=''>Javascript</span></li>
          {!routeEmpty ? routeArr.map((route, i) => 
            <li key={i} className="tw-flex tw-flex-row">
              <span className='tw-flex tw-flex-row tw-items-center tw-pt-0.5 tw-px-1'>
                { darkMode ? <IconArrowBadgeRightFilled size={18} color="#2ca9bc" /> 
                  : <IconArrowBadgeRightFilled size={18} color="#000" />
                }
              </span>
              <span className=''>{route}</span>
            </li>
          ) : <div/>}
        </ul>
        <ul>
          <li>{ darkMode ? <IconSearch color="#2ca9bc" />: <IconSearch color="#000" />}</li>
        </ul> 
      </ul>
      }
    </menu>
  )
}

export default D_Navigation

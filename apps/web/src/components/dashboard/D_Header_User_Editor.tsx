import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import JS_Icon from "../../assets/tech/javascript/javascript-original.svg";
// hooks
import useWindowSize from '../../hooks/useWindowSize';

const D_Header_User_Editor = () => {
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;
  const { isMobile } = useWindowSize();

  return (
    <menu className={`${darkMode ? 'tw-text-campfire-blue' : 'tw-text-campfire-neutral-800'} tw-shrink-0 tw-flex tw-flex-row tw-h-full tw-w-full tw-text-campfire-blue tw-items-center tw-place-content-between tw-pr-3 `}>
      {isMobile ? 
      <ul>
        <ul className='tw-flex tw-flex-row tw-items-center'>
          <li className=''><img src={JS_Icon} alt="Javascript" style={{ height: 18, width: 36 }}></img></li>
          <div><span className=''>Javascript</span></div>
        </ul>
      </ul> 
      :
      <ul className="tw-flex tw-flex-row tw-place-content-between tw-w-full">
        <ul className='tw-flex tw-flex-row tw-items-center'>
          <li className=''><img src={JS_Icon} alt="Javascript" style={{ height: 18, width: 36 }}></img></li>
          <li><span className=''>Javascript</span></li>
        </ul>
      </ul>
      }
    </menu>
  )
}

export default D_Header_User_Editor

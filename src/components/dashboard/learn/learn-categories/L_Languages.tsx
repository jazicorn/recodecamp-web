// Dashboard Banner
import { useContext } from 'react';
import { ThemeContext } from '../../../../context/ThemeContext';
import List from '../../../../assets/icons/dashboard/list-square-svgrepo-com.svg';
// hooks
//import useWindowSize from '../../../hooks/useWindowSize';
// languague icons
import JS_Icon from '../../../../assets/tech/javascript/javascript-original.svg';
import JAVA_Icon from '../../../../assets/tech/java/java-original.svg';
import PY_Icon from '../../../../assets/tech/python/python-original.svg';

const L_Languages = () => {
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;
  //const { isMobile } = useWindowSize();

  return (
    <div>
      <menu
        className={`${
          darkMode ? 'tw-text-campfire-neutral-400' : 'tw-text-campfire-neutral-800'
        } tw-flex tw-flex-row tw-h-full tw-w-full tw-text-campfire-blue tw-items-center tw-place-content-start`}
      >
        <div className="tw-text-campfire-purple tw-flex tw-flex-row">
          <span className="tw-pt-1">
            <img src={List} alt="list" style={{ height: 18, width: 36 }}></img>
          </span>
          Languages<span className="tw-text-campfire-neutral-900">:</span>
        </div>
        <ul
          className={`tw-gap-1 tw-flex-row tw-flex tw-place-items-center
        [&>li]:tw-flex [&>li]:tw-flex-row [&>li]:tw-items-center`}
        >
          <li className="">
            <img src={JS_Icon} alt="Javascript" style={{ height: 18, width: 36 }}></img>
            Javascript
          </li>
          <li className="">
            <img src={JAVA_Icon} alt="Javascript" style={{ height: 18, width: 36 }}></img>
            Java
          </li>
          <li className="">
            <img src={PY_Icon} alt="Javascript" style={{ height: 18, width: 36 }}></img>
            Python
          </li>
        </ul>
      </menu>
    </div>
  );
};

export default L_Languages;

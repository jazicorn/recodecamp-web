// Dashboard Banner
import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import List from '../../../assets/icons/dashboard/list-square-svgrepo-com.svg';
// hooks
import useWindowSize from '../../../hooks/useWindowSize';
import Transition from '../../../hooks/useTransition';

const D_Instructions_Category = () => {
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;
  const { isMobile } = useWindowSize();

  return (
    <div>
      {isMobile ? (
        <menu
          className={`${
            darkMode ? 'tw-text-campfire-neutral-900' : 'tw-text-campfire-neutral-800'
          } tw-flex tw-flex-col tw-h-full tw-w-full tw-text-campfire-blue tw-place-content-center`}
        >
          <ul className={`tw-flex-col tw-gap-1 tw-flex tw-place-items-center`}>
            <li className="tw-text-campfire-purple tw-flex tw-flex-row">
              <Transition>
                <span className="tw-pt-1">
                  <img src={List} alt="Trophy" style={{ height: 18, width: 36 }}></img>
                </span>
                Instructions<span className="tw-text-campfire-neutral-900">:</span>
              </Transition>
            </li>
            <li
              className={`${
                darkMode
                  ? 'tw-bg-campfire-neutral-300 tw-border-campfire-neutral-300'
                  : 'tw-bg-campfire-neutral-100 tw-border-campfire-neutral-100'
              } tw-text-sm tw-mx-1 tw-px-1  tw-border tw-rounded tw-place-items-center`}
            >
              <Transition>
                Click on buttons below to select <span className="tw-text-campfire-blue">ReCode</span> Category
              </Transition>
            </li>
          </ul>
        </menu>
      ) : (
        <menu
          className={`${
            darkMode ? 'tw-text-campfire-neutral-900' : 'tw-text-campfire-neutral-800'
          } tw-flex tw-flex-row tw-h-full tw-w-full tw-text-campfire-blue tw-items-center tw-place-content-start`}
        >
          <ul className={`tw-gap-1 tw-flex-row tw-flex tw-place-items-center`}>
            <li className="tw-text-campfire-purple tw-flex tw-flex-row">
              <Transition>
                <span className="tw-pt-1">
                  <img src={List} alt="Trophy" style={{ height: 18, width: 36 }}></img>
                </span>
                Instructions<span className="tw-text-campfire-neutral-900">:</span>
              </Transition>
            </li>
            <li
              className={`${
                darkMode
                  ? 'tw-bg-campfire-neutral-300 tw-border-campfire-neutral-300'
                  : 'tw-bg-campfire-neutral-100 tw-border-campfire-neutral-100'
              } tw-text-sm tw-mx-1 tw-px-1  tw-border tw-rounded tw-place-items-center`}
            >
              <Transition>
                Click on buttons below to select <span className="tw-text-campfire-blue">ReCode</span> Category
              </Transition>
            </li>
          </ul>
        </menu>
      )}
    </div>
  );
};

export default D_Instructions_Category;

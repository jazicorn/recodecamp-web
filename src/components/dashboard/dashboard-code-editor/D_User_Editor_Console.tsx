// Dashboard Console
import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import Transition from '../../../hooks/useTransition';

const D_User_Editor_Console = () => {
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;
  return (
    <div className={`${darkMode ? '' : ''} tw-text-campfire-blue tw-flex tw-flex-col tw-h-full tw-p-2`}>
      <div
        className={`${
          darkMode ? 'tw-bg-campfire-neutral-600 tw-opacity-70 ' : 'tw-bg-campfire-neutral-300 tw-opacity-70 '
        } 
      tw-w-full tw-h-full tw-flex tw-flex-col tw-items-between`}
      >
        <main className="tw-h-full">
          <Transition>
            <header
              className={`${darkMode ? '' : ''} 
            tw-flex tw-flex-row tw-justify-between tw-content-center tw-pb-2`}
            >
              <h5
                className={`${
                  darkMode ? 'tw-text-campfire-neutral-300' : 'tw-text-campfire-neutral-700'
                } tw-border-campfire-purple-light
            tw-border-b tw-text-2xl tw-h-[36px] tw-w-full tw-pl-2`}
              >
                Console
              </h5>
              {/* <button 
              className={`${darkMode ? '' : ''} tw-border-campfire-purple-light
              tw-border-b tw-h-[36px] tw-font-gro tw-px-2 tw-w-1/6`}
              onClick={() => setEditor(code)}
            >
              Button
            </button> */}
            </header>
          </Transition>
        </main>
      </div>
    </div>
  );
};

export default D_User_Editor_Console;

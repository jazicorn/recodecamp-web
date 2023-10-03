// Component Title: Dashboard Console
import { ThemeContext } from '../../../context/ThemeContext';
import Transition from '../../../hooks/useTransition';
//import { Center } from '@mantine/core';
/** React Hooks */
import { useContext, useState, useEffect, useCallback } from 'react';
/** React Redux */
import { useAppDispatch, useAppSelector } from '../../../redux/reduxHooks.ts';
import type { RootState } from '../../../redux/store.ts';
import { menuConsoleMessage } from '../../../redux/slices/dashboardSlice.ts';

const D_Console = () => {
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  /** Retrieve ConsoleMessage From Redux State */
  const getMessage = useAppSelector((state:RootState) => state?.dashboard?.consoleMessage);

  /** Store Message from Redux in React State */
  const [message, setMessage] = useState();

  const getMessageFormatted = useCallback(() => {
    // Format String
    if(getMessage !== undefined && typeof getMessage === 'string' && getMessage.length > 1) {
      const formatted = getMessage.split('\n');
      return formatted
    }
  },[getMessage]);
  
  useEffect(() => {
    setMessage(getMessageFormatted)
  },[getMessage, getMessageFormatted]);

  /** Redux Dispatch Instance */
  const dispatch = useAppDispatch();

  /** Clear Console */
  const clearConsole = useCallback((e) => {
    e.preventDefault();
    dispatch(menuConsoleMessage(""));
  },[dispatch]);
  
  return (
      <main className={`${darkMode ? 'tw-bg-campfire-neutral-600 tw-opacity-70 ' : 'tw-bg-campfire-neutral-300 tw-opacity-70 '} 
      tw-text-campfire-blue tw-w-full tw-h-full tw-flex tw-flex-col tw-overflow-y-auto tw-items-between`}>
          <Transition>
            <header className={`${darkMode ? '' : ''}
              tw-flex tw-flex-row tw-justify-between tw-content-center tw-pb-2`}>
              <h5 className={`${darkMode ? 'tw-text-campfire-neutral-300' : 'tw-text-campfire-neutral-700'} tw-border-campfire-purple-light
              tw-border-b tw-border-r tw-text-2xl tw-w-5/6 tw-h-[36px] tw-pl-2`}>
                Console
              </h5>
              <button className={`${darkMode ? 'hover:tw-bg-campfire-neutral-500' : 'hover:tw-bg-campfire-neutral-100'} tw-border-campfire-purple-light 
              tw-border-b tw-h-[36px] tw-font-gro tw-px-2 tw-w-1/6 hover:tw-text-campfire-purple-light`}
              onClick={(e) => clearConsole(e)}
            >
              Clear
            </button>
            </header>
          </Transition>
          <div className="tw-px-4 tw-pb-2">
            { message !== undefined &&
              <ul className="tw-max-h-[100px]">
                {
                  message.map((item, i) => {
                    return <li key={i}>{item}</li>;
                  })
                }
              </ul>
            }
          </div>
        </main>
  )
}

export default D_Console

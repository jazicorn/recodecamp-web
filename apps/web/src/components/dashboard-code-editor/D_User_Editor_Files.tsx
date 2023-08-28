// Component Title: Dashboard Editor Files
/** React Hooks */
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import Transition from '../../hooks/useTransition';

const D_User_Editor_Files = () => {
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  /** Render files */
  return (
    <div className={`${darkMode ? '' : ''} overflow-y-scroll tw-text-campfire-blue tw-w-full tw-h-full tw-flex tw-flex-col tw-p-2`}>
      <article className={`${darkMode ? 'tw-bg-campfire-neutral-600 tw-opacity-70 ' : 
      'tw-bg-campfire-neutral-300 tw-opacity-70 '} tw-gap-1 tw-h-full tw-flex tw-flex-col tw-content-around`}>
        <span className="tw-h-full tw-flex tw-flex-col">
          <div className="tw-flex tw-flex-col tw-justify-between tw-h-3/4">
            {/**Question Task */}
            <section className="">
              <Transition> 
                <header className={`${darkMode ? '' : ''} 
                tw-flex tw-flex-row tw-justify-between tw-content-center tw-pb-2`}>
                  <h5 className={`${darkMode ? 'tw-text-campfire-neutral-300' : 'tw-text-campfire-neutral-700'} tw-border-campfire-purple-light
                  tw-border-b tw-text-2xl tw-h-[36px] tw-w-full tw-pl-2`}>
                    Files
                  </h5>
                </header>
              </Transition>
            </section>
          </div>
        </span>
      </article>
    </div>
  )
}

export default D_User_Editor_Files

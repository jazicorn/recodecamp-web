// Dashboard Calender
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
//import useWindowSize from '../../hooks/useWindowSize';

const D_Notes = () => {
  //const { isMobile, isDesktopMDLG, isDesktopXL } = useWindowSize();
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;
  return (
    <div className={`${darkMode ? '[&_main>ul]:tw-text-campfire-blue [&_main>h4]:tw-text-campfire-neutral-300' : 
    '[&_main]:tw-text-campfire-purple [&_main>h4]:tw-text-campfire-neutral-600'} tw-w-full tw-h-full tw-p-2`}>
      <div className={`${darkMode ? 'tw-bg-campfire-neutral-600 tw-opacity-70 ' : 
      'tw-bg-campfire-neutral-300 tw-opacity-70 '} tw-w-full tw-h-full `}>
      <section className={`${darkMode ? '[&>main>ul]:tw-border-campfire-neutral-900': '[&>main>ul]:tw-border-campfire-blue'} 
       tw-py-4 tw-h-full tw-w-full tw-flex tw-flex-col tw-items-left
      [&>main>ul]:tw-h-fit [&>main>ul]:tw-px-2 [&>main>ul]:tw-border-l-2 [&>main>ul]:tw-ml-4 
      [&>main>ul]:tw-flex [&>main>ul]:tw-flex-col [&>main>ul]:tw-gap-2`}>
        <h4 className={`${darkMode ? 'tw-text-campfire-neutral-300' : 'tw-text-campfire-neutral-700'} tw-border-campfire-purple-light
          tw-border-b tw-text-2xl tw-h-[36px] tw-w-full tw-pl-2 tw-mb-4`}>
          Notes
        </h4>
        <main className="tw-overflow-auto tw-mb-1 tw-flex tw-flex-col">
          
        </main>
      </section>
      </div>
    </div>
  )
}

export default D_Notes

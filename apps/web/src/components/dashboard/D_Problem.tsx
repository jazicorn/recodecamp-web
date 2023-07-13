// Dashboard Banner
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

const D_Problem = () => {
    //const { isMobile, isDesktopMDLG, isDesktopXL } = useWindowSize();
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;
  return (
    <div className={`${darkMode ? 'tw-text-campfire-blue' : ''} tw-flex tw-flex-col tw-h-full`}>
      <div className={`${darkMode ? '[&>*]:tw-bg-[#525252]' : '[&>*]:tw-bg-campfire-neutral-300'} 
      tw-w-full tw-h-full tw-flex tw-flex-col tw-p-2`}>
        <main className='tw-p-2 tw-h-full'>
          {}
        </main>
      </div>
    </div>
  )
}

export default D_Problem

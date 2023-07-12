import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import Header from '../components/HeaderDashboard'
//import Question from '../components/learn/Question'
//import useWindowSize from '../../hooks/useWindowSize'
//icons
import D_Navigation from '../components/dashboard/D_Navigation';
import D_Header from '../components/dashboard/D_Header';
import D_Banner from '../components/dashboard/D_Banner';
import D_User from '../components/dashboard/D_User';
import D_Console from '../components/dashboard/D_Console';
import D_CallToAction from '../components/dashboard/D_Support';

const Dashboard = () => {
  //const { isMobile, isDesktopMDLG, isDesktopXL } = useWindowSize();
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  return (
    <div className="">
      {/**Background | Position: Absolute */}
      <div className={`${ darkMode ? 'tw-bg-[url(../assets/bg/sw-1.jpg),_url(../assets/bg/landscape.jpg)] tw-bg-blend-overlay tw-opacity-40' :
                  'tw-bg-[url(../assets/bg/sw-1.jpg),_url(../assets/bg/landscape.jpg)] tw-bg-blend-overlay tw-opacity-40'
        } tw-absolute tw-bg-cover tw-bg-center tw-bg-no-repeat tw-h-full tw-w-screen`}/>
      {/**Page Content | Position: Relative */}
      <div className="tw-relative tw-z-10 tw-font-mono tw-h-screen tw-w-full tw-flex tw-flex-col tw-place-items-center">
        <Header />
        <main className={`${darkMode ? '[&>*]:tw-backdrop-brightness-25 ' : '[&>*]:tw-backdrop-brightness-65'} 
          tw-bg-transparent tw-pb-5 tw-mt-1 tw-w-full tw-h-full tw-grow tw-overflow-y-hidden [&>*]:tw-backdrop-blur-sm
          tw-grid tw-grid-rows-dashboard tw-grid-cols-dashboard tw-gap-1 tw-px-5 [&>*]:tw-rounded tw-border tw-border-transparent`}>
            <section className='tw-col-start-1 tw-col-end-1 tw-row-start-1 tw-row-end-4'>
              <D_Navigation/>
            </section>
            <section className='tw-col-start-2 tw-col-end-5 tw-row-start-1 tw-row-end-1'>
              <D_Header/>
            </section>
            <section className='tw-col-start-2 tw-col-end-4 tw-row-start-2 tw-row-end-3'>
              <D_Banner/>
            </section>
            <section className='tw-col-start-4 tw-col-end-5 tw-row-start-2 tw-row-end-3'>
              <D_User/>
            </section>
            <section className='tw-col-start-2 tw-col-end-4 tw-row-start-3 tw-row-end-4'>
              <D_Console/>
            </section>
            <section className='tw-col-start-4 tw-col-end-5 tw-row-start-3 tw-row-end-4'>
              <D_CallToAction/>
            </section>
        </main>
      </div>
    </div>
  )
}

export default Dashboard
 
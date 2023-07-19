import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
//import { useAppSelector } from '../redux/reduxHooks.ts';
//import type { RootState } from '../redux/store.ts'
import Header from '../components/header/Header.Dashboard'
import useWindowSize from '../hooks/useWindowSize'
//icons
import D_Navigation from '../components/dashboard/D_Navigation';
import D_NavigationMobile from '../components/dashboard/D_NavigationMobile';
import D_Header from '../components/dashboard/D_Header';
import D_Banner from '../components/dashboard-home/D_Banner';
import D_User from '../components/dashboard-home/D_User';
import D_Support from '../components/dashboard-home/D_Support';
import Transition from '../hooks/useTransition'

const Dashboard = () => {
  const { isDesktopMDLG, isDesktopXL } = useWindowSize();
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;
  //const menuItem = useAppSelector((state:RootState) => state?.dashboard?.value);

  return (
    <div className="">
      <Transition>
      {/**Background | Position: Absolute */}
      <div className={`${ darkMode ? 'tw-bg-[url(../assets/bg/sw-1.jpg),_url(../assets/bg/landscape.jpg)] tw-bg-blend-overlay tw-opacity-40' :
                  'tw-bg-[url(../assets/bg/sw-1.jpg),_url(../assets/bg/landscape.jpg)] tw-bg-blend-overlay tw-opacity-40'
        } tw-absolute tw-bg-cover tw-bg-center tw-bg-no-repeat tw-h-full tw-w-screen`}/>
      {/**Page Content | Position: Relative */}
      <div className="tw-relative tw-z-10 tw-font-mono tw-h-screen tw-w-full tw-flex tw-flex-col tw-place-items-center">
        <Header />
        {isDesktopMDLG || isDesktopXL ? 
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
              <D_Support/>
            </section>
            <section className='tw-col-start-4 tw-col-end-5 tw-row-start-3 tw-row-end-4'>
              <D_Support/>
            </section>
        </main>
        :
        <main className={`${darkMode ? '[&>*]:tw-backdrop-brightness-25 ' : '[&>*]:tw-backdrop-brightness-65'} 
          tw-bg-transparent tw-pb-5 tw-mt-1 tw-w-full tw-h-full tw-grow tw-overflow-y-hidden [&>*]:tw-backdrop-blur-sm
          tw-grid tw-grid-rows-dashboard-mobile tw-grid-cols-dashboard-mobile tw-gap-1 tw-px-5 [&>*]:tw-rounded tw-border tw-border-transparent`}>
            {/** z index can't go higher than 50 to work*/}
            <section className='tw-row-start-1 tw-row-end-1 tw-z-50'>
              <D_NavigationMobile/>
            </section>
            <section className=' tw-row-start-2 tw-row-end-2'>
              <D_Header/>
            </section>
            <section className='tw-row-start-3 tw-row-end-3'>
              <D_Banner/>
            </section>
            <section className='tw-row-start-4 tw-row-end-4'>
              <D_User/>
            </section>
            <section className='tw-row-start-5 tw-row-end-5'>
              <D_Support/>
            </section>
            <section className='tw-row-start-6 tw-row-end-6'>
              <D_Support/>
            </section>
        </main>
        }
      </div>
      </Transition>
    </div>
  )
}

export default Dashboard
 
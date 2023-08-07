import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'
//import { useAppSelector } from '../redux/reduxHooks.ts';
//import type { RootState } from '../redux/store.ts'
// hooks
import useWindowSize from '../hooks/useWindowSize'
import Transition from '../hooks/useTransition';
// components
import Header from '../components/header/Header.Dashboard'
import D_Navigation from '../components/dashboard/D_Navigation';
import D_NavigationMobile from '../components/dashboard/D_NavigationMobile';
import D_Header from '../components/dashboard/D_Header';

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
        } tw-fixed tw-bg-cover tw-bg-center tw-bg-no-repeat tw-h-full tw-w-full`}/>
      {/**Page Content | Position: Relative */}
      <article className="tw-relative tw-z-10 tw-font-mono tw-h-screen tw-w-full tw-flex tw-flex-col tw-grow tw-place-items-center">
        <Header />
        {isDesktopMDLG || isDesktopXL ? 
        <main className={`${darkMode ? '[&>section]:tw-backdrop-brightness-25 ' : '[&>section]:tw-backdrop-brightness-65'} 
          tw-bg-transparent tw-pb-5 tw-mt-1 tw-w-full tw-h-full [&>*]:tw-backdrop-blur-sm
          tw-grid tw-grid-rows-dashboard tw-grid-cols-dashboard tw-gap-1 tw-px-5 [&>*]:tw-rounded tw-border tw-border-transparent`}>
            <section className='tw-col-start-1 tw-col-end-1 tw-row-start-1 tw-row-end-3 tw-min-h-[523px]'>
              <D_Navigation/>
            </section>
            <section className='tw-col-start-2 tw-col-end-3 tw-row-start-1 tw-row-end-2'>
              <D_Header/>
            </section>
            <div className='tw-col-start-2 tw-col-end-3 tw-row-start-2 tw-row-end-3'>
              <Outlet/>
            </div>
        </main>
        :
        <main className={`${darkMode ? '[&>section]:tw-backdrop-brightness-25 ' : '[&>section]:tw-backdrop-brightness-65'} 
          tw-bg-transparent tw-pb-5 tw-mt-1 tw-w-full tw-h-full tw-grow [&>*]:tw-backdrop-blur-sm
          tw-grid tw-grid-rows-dashboard-mobile tw-grid-cols-dashboard-mobile tw-gap-1 tw-px-5 [&>*]:tw-rounded tw-border tw-border-transparent`}>
            {/** z index can't go higher than 50 to work*/}
            <section className='tw-row-start-1 tw-row-end-1 tw-z-50'>
              <D_NavigationMobile/>
            </section>
            <section className=' tw-row-start-2 tw-row-end-2'>
              <D_Header/>
            </section>
            <div className='tw-row-start-3 tw-row-end-6'>
              <Outlet/>
            </div>
        </main>
        }
      </article>
      </Transition>
    </div>
  )
}

export default Dashboard
 
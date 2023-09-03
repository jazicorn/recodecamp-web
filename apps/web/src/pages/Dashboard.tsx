import { useContext, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import type { Location, Params } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
//import { useAppSelector } from '../redux/reduxHooks.ts';
//import type { RootState } from '../redux/store.ts'
// hooks
import useWindowSize from '../hooks/useWindowSize';
import Transition from '../hooks/useTransition';
// components
import Header from '../components/header/Header';
import Header_Dashboard from '../components/dashboard/D_header';
import D_Navigation from '../components/dashboard/D_Navigation';
import D_NavigationMobile from '../components/dashboard/D_NavigationMobile';
import D_Route from '../components/dashboard/D_Route';
import D_Route_User_Editor from '../components/dashboard/D_Route_User_Editor';

const getRoutePath = (location: Location, params: Params): string => {
  const { pathname } = location;
  if (!Object.keys(params).length) {
    return pathname; // we don't need to replace anything
  }
  let path = pathname;
  Object.entries(params).forEach(([paramName, paramValue]) => {
    if (paramValue) {
      path = path.replace(paramValue, `:${paramName}`);
    }
  });
  return path;
};

const Dashboard = () => {
  const { isDesktopMDXL, isDesktopXL } = useWindowSize();
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;
  const location = useLocation();
  const params = useParams();
  
  const [path, setPath] = useState();

  useEffect(() => {
    setPath(getRoutePath(location, params));
  }, [location, params]);

  const noLanguagePaths = () => {
    if( path === '/learn' || path === '/learn/calendar' || path === '/learn/docs' || path === '/learn/notes' || path === '/learn/settings') {
      return true
    } else {
      return false
    }
  };

  const pathFilter = noLanguagePaths();

  return (
    <div className="tw-font-space_mono">
      <Transition>
      {/**Background | Position: Absolute */}
      <div className={`${ darkMode ? 'tw-bg-[url(../assets/bg/sw-1.jpg),_url(../assets/bg/landscape.jpg)] tw-bg-blend-overlay tw-opacity-40' : 'tw-bg-[url(../assets/bg/sw-1.jpg),_url(../assets/bg/landscape.jpg)] tw-bg-blend-overlay tw-opacity-40'} 
      tw-fixed tw-bg-cover tw-bg-center tw-bg-no-repeat tw-h-full tw-w-full `}/>
      {/**Page Content | Position: Relative */}
      <article className={`${isDesktopMDXL || isDesktopXL ? 'tw-min-w-[51.2em]' : 'tw-min-w-[28.5em]'} tw-w-full tw-relative tw-z-10 tw-h-screen tw-flex tw-flex-col tw-grow tw-place-items-center`}>
        <Header />
        <Header_Dashboard />
        {isDesktopMDXL || isDesktopXL ?
        <div className="tw-w-full tw-h-full">
          { path === '/learn' && 
            <main className={`${darkMode ? '[&>section]:tw-backdrop-brightness-25 ' : '[&>section]:tw-backdrop-brightness-65'}
            tw-grid-rows-dashboard-no-language tw-grid-cols-dashboard 
            tw-bg-transparent tw-pb-5 tw-mt-1 tw-w-full tw-h-full 
            [&>*]:tw-backdrop-blur-sm
            tw-grid tw-gap-1 tw-px-5 [&>*]:tw-rounded tw-border tw-border-transparent`}>
              <section className={`${pathFilter ? 'tw-row-end-2' : 'tw-row-end-3'} 
              tw-col-start-1 tw-col-end-1 tw-row-start-1 `}>
                <D_Navigation/>
              </section>
              {!pathFilter &&
              <section className={`tw-col-start-2 tw-col-end-3 tw-row-start-1 tw-row-end-1`}>
                <D_Route/>
              </section>
              }
              <div className={`tw-row-start-1 tw-row-end-2 tw-col-start-2 tw-col-end-3 `}>
                <Outlet/>
              </div>
            </main>
          }
          { path === '/learn/code' && 
            <main className={`${darkMode ? '[&>section]:tw-backdrop-brightness-25 ' : '[&>section]:tw-backdrop-brightness-65'}
            tw-grid-rows-dashboard-extended tw-grid-cols-dashboard tw-bg-transparent tw-pb-5 tw-mt-1 tw-w-full tw-h-full 
            [&>*]:tw-backdrop-blur-sm
            tw-grid tw-gap-1 tw-px-5 [&>*]:tw-rounded tw-border tw-border-transparent`}>
              <section className={`${pathFilter ? 'tw-row-end-2' : 'tw-row-end-3'} 
              tw-col-start-1 tw-col-end-1 tw-row-start-1 `}>
                <D_Navigation/>
              </section>
              {!pathFilter &&
              <section className={`tw-col-start-2 tw-col-end-3 tw-row-start-1 tw-row-end-1`}>
                <D_Route/>
              </section>
              }
              <div className={`${pathFilter ? 'tw-row-start-1 tw-row-end-2' 
              : ' tw-row-start-2 tw-row-end-3'} tw-col-start-2 tw-col-end-3 `}>
                <Outlet/>
              </div>
            </main>
          }
          { path === '/learn/categories' && 
            <main className={`${darkMode ? '[&>section]:tw-backdrop-brightness-25 ' : '[&>section]:tw-backdrop-brightness-65'}
            tw-grid-rows-dashboard-extended tw-grid-cols-dashboard tw-bg-transparent tw-pb-5 tw-mt-1 tw-w-full tw-h-full 
            [&>*]:tw-backdrop-blur-sm
            tw-grid tw-gap-1 tw-px-5 [&>*]:tw-rounded tw-border tw-border-transparent`}>
              <section className={`${pathFilter ? 'tw-row-end-2' : 'tw-row-end-3'} 
              tw-col-start-1 tw-col-end-1 tw-row-start-1 `}>
                <D_Navigation/>
              </section>
              {!pathFilter &&
              <section className={`tw-col-start-2 tw-col-end-3 tw-row-start-1 tw-row-end-1`}>
                <D_Route/>
              </section>
              }
              <div className={`${pathFilter ? 'tw-row-start-1 tw-row-end-2' 
              : ' tw-row-start-2 tw-row-end-3'} tw-col-start-2 tw-col-end-3 `}>
                <Outlet/>
              </div>
            </main>
          }
          { path === '/learn/calendar' && 
            <main className={`${darkMode ? '[&>section]:tw-backdrop-brightness-25 ' : '[&>section]:tw-backdrop-brightness-65'}
            tw-grid-rows-dashboard-no-langauge tw-grid-cols-dashboard tw-bg-transparent tw-pb-5 tw-mt-1 tw-w-full tw-h-full 
            [&>*]:tw-backdrop-blur-sm
            tw-grid tw-gap-1 tw-px-5 [&>*]:tw-rounded tw-border tw-border-transparent`}>
              <section className={`tw-row-start-1 tw-row-end-2 tw-col-start-1 tw-col-end-1`}>
                <D_Navigation/>
              </section>
              {!pathFilter &&
              <section className={`tw-col-start-2 tw-col-end-3 tw-row-start-1 tw-row-end-1`}>
                 <D_Route/>
              </section>
              }
              <div className={`${pathFilter ? 'tw-row-start-1 tw-row-end-2' 
              : ' tw-row-start-2 tw-row-end-3'} tw-col-start-2 tw-col-end-3 `}>
                <Outlet/>
              </div>
            </main>
          }
          { path === '/learn/docs' && 
            <main className={`${darkMode ? '[&>section]:tw-backdrop-brightness-25 ' : '[&>section]:tw-backdrop-brightness-65'}
            tw-grid-rows-dashboard-no-langauge tw-grid-cols-dashboard tw-bg-transparent tw-pb-5 tw-mt-1 tw-w-full tw-h-full 
            [&>*]:tw-backdrop-blur-sm
            tw-grid tw-gap-1 tw-px-5 [&>*]:tw-rounded tw-border tw-border-transparent`}>
              <section className={`tw-row-end-2 tw-col-start-1 tw-col-end-1 tw-row-start-1 `}>
                <D_Navigation/>
              </section>
              {!pathFilter &&
              <section className={`tw-col-start-2 tw-col-end-3 tw-row-start-1 tw-row-end-1`}>
                <D_Route/>
              </section>
              }
              <div className={`tw-row-start-1 tw-row-end-2 tw-col-start-2 tw-col-end-3 `}>
                <Outlet/>
              </div>
            </main>
          }
          { path === '/learn/notes' && 
            <main className={`${darkMode ? '[&>section]:tw-backdrop-brightness-25 ' : '[&>section]:tw-backdrop-brightness-65'}
            tw-grid-rows-dashboard-no-language tw-grid-cols-dashboard tw-bg-transparent tw-pb-5 tw-mt-1 tw-w-full tw-h-full 
            [&>*]:tw-backdrop-blur-sm
            tw-grid tw-gap-1 tw-px-5 [&>*]:tw-rounded tw-border tw-border-transparent`}>
              <section className={`tw-row-end-2 tw-col-start-1 tw-col-end-1 tw-row-start-1 `}>
                <D_Navigation/>
              </section>
              {!pathFilter &&
              <section className={`tw-col-start-2 tw-col-end-3 tw-row-start-1 tw-row-end-1`}>
                <D_Route/>
              </section>
              }
              <div className={`tw-row-start-1 tw-row-end-2 tw-col-start-2 tw-col-end-3 `}>
                <Outlet/>
              </div>
            </main>
          }
          { path === '/learn/settings' && 
            <main className={`${darkMode ? '[&>section]:tw-backdrop-brightness-25 ' : '[&>section]:tw-backdrop-brightness-65'}
            tw-grid-rows-dashboard-no-language tw-grid-cols-dashboard tw-bg-transparent tw-pb-5 tw-mt-1 tw-w-full tw-h-full 
            [&>*]:tw-backdrop-blur-sm
            tw-grid tw-gap-1 tw-px-5 [&>*]:tw-rounded tw-border tw-border-transparent`}>
              <section className={`tw-row-end-2 tw-col-start-1 tw-col-end-1 tw-row-start-1 `}>
                <D_Navigation/>
              </section>
              {!pathFilter &&
              <section className={`tw-col-start-2 tw-col-end-3 tw-row-start-1 tw-row-end-1`}>
                <D_Route/>
              </section>
              }
              <div className={`tw-row-start-1 tw-row-end-2 tw-col-start-2 tw-col-end-3 `}>
                <Outlet/>
              </div>
            </main>
          }
        </div>
        :
        <main className={`${darkMode ? '[&>section]:tw-backdrop-brightness-25 ' : '[&>section]:tw-backdrop-brightness-65'} 
          tw-bg-transparent tw-pb-5 tw-mt-1 tw-w-full tw-h-full tw-grow [&>*]:tw-backdrop-blur-sm
          tw-grid tw-grid-rows-dashboard-mobile tw-grid-cols-dashboard-mobile tw-gap-1 tw-px-5 [&>*]:tw-rounded tw-border tw-border-transparent`}>
            {/** z index can't go higher than 50 to work*/}
            <section className='tw-row-start-1 tw-row-end-1 tw-z-50'>
              <D_NavigationMobile/>
            </section>
            <section className=' tw-row-start-2 tw-row-end-2'>
              {path === '/learn/editor' ? <D_Route_User_Editor/> : <D_Route/>}
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
 
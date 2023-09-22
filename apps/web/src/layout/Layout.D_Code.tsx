/**Custom Hooks */
import { ThemeContext } from '../context/ThemeContext'
import useWindowSize from '../hooks/useWindowSize';
/**Custom Components */
import D_Editor from '../components/dashboard/dashboard-code/D_Editor';
import D_Problem from '../components/dashboard/dashboard-code/D_Problem';
import D_Console from '../components/dashboard/dashboard-code/D_Console';
import D_Scoreboard from '../components/dashboard/dashboard-code/D_Scoreboard';
/** React Hooks */
import { useContext, useEffect, useCallback, useState } from 'react';
/** React Redux */
import { useAppDispatch, useAppSelector } from '../redux/reduxHooks.ts';
import type { RootState } from '../redux/store.ts';
import { menuQuestion } from '../redux/slices/dashboardSlice.ts';
/** React Query */
import { useQuery } from "@tanstack/react-query";
/** Custom State Components*/
import {LoadingDashboardXL} from '../components/dashboard/loading';
import ErrorDashboard from '../components/dashboard/error';

/** API url | Custom env mandatory to begin with VITE  
 * https://vitejs.dev/guide/env-and-mode.html#env-files */
const baseURL = import.meta.env.VITE_API_BASE_URL;

const Layout_D_Code = () => {
  const { isDesktopMDXL, isDesktopXL } = useWindowSize();
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  /** Redux Dispatch Instance */
  const dispatch = useAppDispatch();

  /** Retrieve Category Route From Redux State */
  const getMenuRoute = useAppSelector((state:RootState) => state?.dashboard?.categoryRoute);

  /** Retrieve Category Based Question */
  const getQuestion = useCallback( async () => {
    /** Retrieve Question from API */
    try {
      let res;
      const prodURL = `${baseURL}/${getMenuRoute}`;
      const devURL = `/api/${getMenuRoute}`;
      if(import.meta.env.PROD) {
          res = await fetch(prodURL);
          const resJSON = res.json();
          return resJSON;
        } else {
          res = await fetch(devURL);
          const resJSON = res.json();
          return resJSON;
        }
    } catch(error) {
      console.log(error);
    }
  }, [getMenuRoute]);

  /** Generate Question */
  const { isLoading, isFetching, isError, error, isSuccess, data } = useQuery({ 
    queryKey: ['questionData'], 
    queryFn: getQuestion,
    refetchOnWindowFocus: false,
    staleTime: 100 * (60 * 1000),
    cacheTime: 100 * (60 * 1000),
  });

  /** Save Question to Redux Store */
  useEffect(() => {
    if(data !== undefined) {
      dispatch(menuQuestion(data.data));
    }
  }, [dispatch, data]);

  /**Delay Loading Screen */
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false)
  }, "600");

  /** Render if Error */
  if (isError) {return <ErrorDashboard error={error.message}/>}

  /** Render if Loading */
  if (isFetching || isLoading) { return  (
    <div className={`${darkMode ? '[&>*]:tw-backdrop-brightness-25 ' : '[&>*]:tw-backdrop-brightness-85'} tw-text-transparent tw-flex tw-flex-col tw-w-full tw-h-full tw-place-self-center tw-place-content-center tw-place-items-center`}>
      <LoadingDashboardXL />
    </div>
  )}

  if(isSuccess && loading) {
    return (
      <div className={`${darkMode ? '[&>*]:tw-backdrop-brightness-25 ' : '[&>*]:tw-backdrop-brightness-85'} ${darkMode ? '[&>*]:tw-bg-neutral-700/50' : '[&>*]:tw-bg-neutral-300/50'}
      tw-text-transparent tw-flex tw-flex-col tw-w-full tw-h-full tw-place-self-center tw-place-content-center tw-place-items-center`}>
        <LoadingDashboardXL />
      </div>
    )
  }

  if(isSuccess && !loading) {
    return (
      <div className="tw-h-full">
      {/**Page Content | Position: Relative */}
        {isDesktopMDXL || isDesktopXL ? 
        <main className={`${darkMode ? '[&>*]:tw-backdrop-brightness-25 ' : '[&>*]:tw-backdrop-brightness-85'} 
          tw-bg-transparent tw-w-full tw-h-full [&>*]:tw-backdrop-blur-sm
          tw-grid tw-grid-rows-layout-dashboard-code tw-grid-cols-layout-dashboard-code tw-gap-1 [&>*]:tw-rounded tw-border tw-border-transparent`}>
            <section className='tw-col-start-1 tw-col-end-3 tw-row-start-1 tw-row-end-1'>
              <D_Scoreboard/>
            </section>
            <section className='tw-col-start-1 tw-col-end-1 tw-row-start-2 tw-row-end-4'>
              <D_Problem/>
            </section>
            <section className='tw-col-start-2 tw-col-end-3 tw-row-start-2 tw-row-end-2'>
              <D_Editor/>
            </section>
            <section className='tw-col-start-2 tw-col-end-3 tw-row-start-3 tw-row-end-4'>
              <D_Console/>
            </section>
        </main>
        :
        <main className={`${darkMode ? '[&>*]:tw-backdrop-brightness-25 ' : '[&>*]:tw-backdrop-brightness-85'} 
          tw-bg-transparent tw-w-full tw-h-full tw-grow [&>*]:tw-backdrop-blur-sm
          tw-grid tw-grid-rows-layout-dashboard-code-mobile tw-grid-cols-layout-dashboard-code-mobile tw-gap-1 [&>*]:tw-rounded tw-border tw-border-transparent`}>
            {/** z index can't go higher than 50 to work*/}
            <section className='tw-row-start-1 tw-row-end-1'>
              <D_Scoreboard/>
            </section>
            <section className='tw-row-start-2 tw-row-end-2'>
              <D_Problem/>
            </section>
             <section className='tw-row-start-3 tw-row-end-3'>
              <D_Editor/>
            </section>
            <section className='tw-row-start-4 tw-row-end-4'>
              <D_Console/>
            </section>
        </main>
        }
      </div>
    )
  }
}

export default Layout_D_Code
 
// Component Title: Dashboard Banner
/** React Hooks */
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
/** Custom Components*/
import ErrorDashboard from '../dashboard/error';
import LoadingDashboard from '../dashboard/loading';
/** React Redux Hooks */
import { useAppSelector, useAppDispatch } from '../../redux/reduxHooks.ts';
import { menuCategoryRoute } from '../../redux/slices/dashboardSlice.ts';
/** React Query */
import { useQuery } from "@tanstack/react-query";
/** API url */
const baseURL = import.meta.env.VITE_API_BASE_URL;

const D_Problem = () => {
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;
  // const { isMobile, isDesktopMDLG, isDesktopXL } = useWindowSize();

  /** Retrieve Category From Redux State */
  const menuRoute = useAppSelector((state:RootState) => state?.dashboard?.categoryRoute);
  const menuRouteDefault = useAppSelector((state:RootState) => state?.dashboard?.categoryRouteDefault);
  const dispatch = useAppDispatch();
  /** Retrieve Category Based Question */
  const getQuestion = async function () {
    /**Set Category if empty or null */
    if(menuRoute.length === 0 || menuRoute === null) {
      dispatch(menuCategoryRoute(menuRouteDefault))
    };
    /** Retrieve Question from API */
    try {
      let res;
      if(import.meta.env.PROD) {
          res = await fetch(`${baseURL}/${menuRoute}`);
        } else {
          res = await fetch(`/api/${menuRoute}`);
        }
      const resJSON = res.json();
      return resJSON;
    } catch(error) {
      console.log(error);
    }
  };
  /** Generate Question */
  const { isLoading, isError, error, data, refetch } = useQuery(['questionData'], getQuestion, {
    refetchOnWindowFocus: false,
  });
  /** Generate New Question */
  const newQuestion = () => {
    // manually refetch
    refetch();
  }

  if (isLoading) return <LoadingDashboard/>

  if (isError) return <ErrorDashboard error={error.message}/>

  return (
    <div className={`${darkMode ? '[&>*]:tw-bg-campfire-neutral-600 tw-text-campfire-blue' : '[&>*]:tw-bg-campfire-neutral-300'} 
    tw-w-full tw-h-full tw-flex tw-flex-col tw-p-2`}>
      <article className={`${darkMode ? 'tw-bg-campfire-neutral-600 tw-opacity-70 ' : 
      'tw-bg-campfire-neutral-300 tw-opacity-70 '} tw-p-2 tw-h-full`}>
        <div className={`${darkMode ? '[&>button]:tw-border-campfire-purple' : '[&>button]:tw-border-campfire-blue'} 
        tw-flex tw-flex-col tw-gap-1 [&>button]:tw-border [&>button]:tw-p-1`}>
          <button onClick={() => newQuestion()}>New Question</button>
          <button onClick={() => newQuestion()}>Submit Question</button>
          <button onClick={() => newQuestion()}>Reset Data</button>
        </div>
        <h1>Problem</h1>
        <section>
          <p className="tw-text-sm">{data.data.task}</p>
        </section>
        
      </article>
    </div>
  )
}

export default D_Problem

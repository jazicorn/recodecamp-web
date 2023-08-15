// Component Title: Dashboard Problem
/** React Hooks */
import { useContext, useCallback, useEffect } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
/** Custom Components*/
import ErrorDashboard from '../dashboard/error';
import LoadingDashboard from '../dashboard/loading';
/** React Redux Hooks */
import { useAppSelector, useAppDispatch } from '../../redux/reduxHooks.ts';
import { 
  menuCategoryRoute, 
  menuQuestion,
} from '../../redux/slices/dashboardSlice.ts';
/** React Query */
import { useQuery } from "@tanstack/react-query";
/** API url */
const baseURL = import.meta.env.VITE_API_BASE_URL;

const D_Problem = () => {
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;
  // const { isMobile, isDesktopMDLG, isDesktopXL } = useWindowSize();

  /** Retrieve Category From Redux State */
  const dispatch = useAppDispatch();
  const getMenuRoute = useAppSelector((state:RootState) => state?.dashboard?.categoryRoute);
  const getMenuRouteDefault = useAppSelector((state:RootState) => state?.dashboard?.categoryRouteDefault);
  
  /**Set Category if empty or null */
  function getRoute() {
    try {
      if(getMenuRoute.length === 0 || getMenuRoute === null) {
        dispatch(menuCategoryRoute(getMenuRouteDefault))
      }
    } catch (e) {
      console.log(e);
    }
  };
  getRoute();
   
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
  const { isLoading, isError, isSuccess, error, data, refetch } = useQuery({ 
    queryKey: ['questionData'], 
    queryFn: getQuestion,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if(data !== undefined) {
      console.log(data);
      dispatch(menuQuestion(data.data));
    }
  }, [dispatch, data]);

  const getMenuQuestion = useAppSelector((state:RootState) => state?.dashboard?.question);

  /** Generate New Question */
  const newQuestion = () => {
    // manually refetch
    refetch();
  }

  /** Render if Loading */
  if (isLoading || getMenuQuestion === undefined) return <LoadingDashboard/>

  /** Render if Error */
  if (isError) return <ErrorDashboard error={error.message}/>

  /** Render if Successful */
  if(isSuccess) return (
    <div className={`${darkMode ? '' : ''} tw-text-campfire-blue tw-w-full tw-h-full tw-flex tw-flex-col tw-p-2`}>
      <article className={`${darkMode ? 'tw-bg-campfire-neutral-600 tw-opacity-70 ' : 
      'tw-bg-campfire-neutral-300 tw-opacity-70 '} tw-gap-1 tw-h-full tw-flex tw-flex-col tw-content-around`}>
        <span className="tw-h-full tw-flex tw-flex-col">
          <section className="tw-flex tw-flex-col tw-justify-between tw-h-3/4">
            {/**Question Task */}
            <section className="">
              <header className={`${darkMode ? '' : ''} 
               tw-flex tw-flex-row tw-justify-between tw-content-center tw-pb-2`}>
                <h5 className={`${darkMode ? 'tw-text-campfire-neutral-300' : 'tw-text-campfire-neutral-700'} tw-text-campfire-blue tw-border-campfire-purple-light
                tw-border-b tw-border-r tw-text-2xl tw-h-[36px] tw-w-3/4 tw-pl-2`}>
                  Problem
                </h5>
                <button 
                  className={`${darkMode ? '' : ''} tw-border-campfire-purple-light
                  tw-border-b tw-h-[36px] tw-font-gro tw-px-2 tw-w-1/4`}
                  onClick={() => newQuestion()}>
                  Generate
                </button>
              </header>
              {getMenuQuestion === undefined || Object.keys(getMenuQuestion).length === 0 ?
                  <LoadingDashboard/>
                :
                <section className={`${darkMode ? 'tw-text-campfire-neutral-100' : 'tw-text-campfire-neutral-700'} tw-px-2`}>
                    <div>
                      <p className="tw-text-base">{getMenuQuestion.task}</p>
                    </div>
                </section>
              }
            </section>
          </section>
          {/**Question Conditions (Test Cases) */}
          <section className={`${darkMode ? '' : ''} tw-border-campfire-purple-light tw-h-1/4 tw-border-t`}>
            {getMenuQuestion.conditions === undefined || Object.keys(getMenuQuestion.conditions).length === 0 ?
              <div/>
              :
              <div/>
            }
          </section>
        </span>
      </article>
    </div>
  )
}

export default D_Problem

/**Custom Hooks */
import { ThemeContext } from '../../../context/ThemeContext';
import useWindowSize from '../../../hooks/useWindowSize';
/*Constants*/
import { _LANGUAGES_SHORTHAND } from '../../../utils/constants/constLanguages';
import { 
  _QUESTION_ROUTE, 
  _CATEGORIES_ROUTE, 
  _LANGUAGES_ROUTE 
} from '../../../utils/constants/constDashboardRoutes';
/**Custom Components */
import L_Editor from '../../../components/dashboard/learn/learn-code/L_Editor';
import L_Problem from '../../../components/dashboard/learn/learn-code/L_Problem';
import L_Console from '../../../components/dashboard/learn/learn-code/L_Console';
import L_Scoreboard from '../../../components/dashboard/learn/learn-code/L_Scoreboard';
import L_Route from '../../../components/dashboard/learn/L_Route';
/** React Hooks */
import { 
  useContext, 
  useEffect, 
  useCallback, 
  useState 
} from 'react';
/** React Redux */
import { 
  useAppDispatch, 
  useAppSelector 
} from '../../../redux/reduxHooks.ts';
import type { RootState } from '../../../redux/store.ts';
import { menuQuestion } from '../../../redux/slices/dashboardSlice.ts';
/** React Query */
import { useQuery } from '@tanstack/react-query';
/** Custom State Components*/
import { LoadingDashboardXL } from '../../../components/dashboard/learn/L_Loading';
import ErrorDashboard from '../../../components/dashboard/learn/L_Error';

const Layout_L_Code = () => {
  const { isDesktopLG } = useWindowSize();
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  /** Redux Dispatch Instance */
  const dispatch = useAppDispatch();

  /** Retrieve Category Route From Redux State */
  const getMenuRoute = useAppSelector((state: RootState) => state?.dashboard?.categoryRoute);
  const getMenuLanguage = useAppSelector((state: RootState) => state?.dashboard?.language);
  const getDashQuestion = useAppSelector((state: RootState) => state?.dashboard?.question);

  const currentLanguage = _LANGUAGES_SHORTHAND[getMenuLanguage.toLowerCase()];

  /**Get question url */
  const url = _QUESTION_ROUTE(currentLanguage, getMenuRoute);

  /** Retrieve Category Based Question */
  const getQuestion = useCallback(async (url) => {
    /** Retrieve Question from API */
    try {
      const result = await fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const resJSON = await result.json();
      //console.log("resjson", resJSON)
      return resJSON;
    } catch (error) {
      console.log(error);
    }
  }, []);

  /** Generate Question */
  const { isLoading, isFetching, isError, error, isSuccess, data } = useQuery({
    queryKey: ['questionData', url],
    queryFn: () => getQuestion(url),
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    staleTime: 100 * (60 * 1000),
    cacheTime: 100 * (60 * 1000),
  });

  /** Save Question to Redux Store */
  useEffect(() => {
    if (data !== undefined) {
      //console.log(data.data)
      dispatch(menuQuestion(data.data));
    }
  }, [dispatch, data]);

  /**Delay Loading Screen */
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, '600');

  /** Render if Error */
  if (isError) {
    return <ErrorDashboard error={error.message} />;
  }

  /** Render if Loading */
  if (isFetching || isLoading) {
    return (
      <div
        className={`${
          darkMode ? '[&>*]:tw-bg-neutral-900/80' : '[&>*]:tw-bg-neutral-300/80'
        } tw-text-transparent tw-flex tw-flex-col tw-w-full tw-h-full tw-place-self-center tw-place-content-center tw-place-items-center`}
      >
        <LoadingDashboardXL />
      </div>
    );
  }

  if (isSuccess && loading) {
    return (
      <div
        className={`${
          darkMode ? '[&>*]:tw-bg-neutral-900/80' : '[&>*]:tw-bg-neutral-300/80'
        } tw-text-transparent tw-flex tw-flex-col tw-w-full tw-h-full tw-place-self-center tw-place-content-center tw-place-items-center`}
      >
        <LoadingDashboardXL />
      </div>
    );
  }

  if (isSuccess && !loading) {
    return (
      <div className="tw-h-full">
        {/**Page Content | Position: Relative */}
        {isDesktopLG ? (
          <main className={`${darkMode ? 'layout-learn-container-dark' : 'layout-learn-container-light'} layout-learn-code`}>
            <section className="tw-col-start-1 tw-col-end-3 tw-row-start-1 tw-row-end-1">
              <L_Route />
            </section>
            <section className="tw-col-start-1 tw-col-end-3 tw-row-start-2 tw-row-end-2">
              <L_Scoreboard />
            </section>
            <section className="tw-col-start-1 tw-col-end-1 tw-row-start-3 tw-row-end-5">
              <L_Problem />
            </section>
            <section className="tw-col-start-2 tw-col-end-3 tw-row-start-3 tw-row-end-3">
              <L_Editor />
            </section>
            <section className="tw-col-start-2 tw-col-end-3 tw-row-start-4 tw-row-end-5 tw-p-2">
              <L_Console />
            </section>
          </main>
        ) : (
          <main className={`${darkMode ? 'layout-learn-container-dark' : 'layout-learn-container-light'} layout-learn-code-mobile`}>
            <section className="tw-row-start-1 tw-row-end-1">
              <L_Route />
            </section>
            <section className="tw-row-start-2 tw-row-end-2">
              <L_Scoreboard />
            </section>
            <section className="tw-row-start-3 tw-row-end-3">
              <L_Problem />
            </section>
            <section className="tw-row-start-4 tw-row-end-4">
              <L_Editor />
            </section>
            <section className="tw-row-start-5 tw-row-end-5 tw-p-2">
              <L_Console />
            </section>
          </main>
        )}
      </div>
    );
  }
};

export default Layout_L_Code;

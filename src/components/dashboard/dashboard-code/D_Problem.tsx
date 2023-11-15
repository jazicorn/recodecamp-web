// Component Title: Dashboard Problem
/**random string generator */
import { nanoid } from 'nanoid';
/** React Hooks */
import { useContext, useCallback, useEffect } from 'react';
/** Custom Hooks */
import { ThemeContext } from '../../../context/ThemeContext';
import { Transition2 } from '../../../hooks/useTransition';
/*Constants*/
import { _LANGUAGES_SHORTHAND } from '../../../utils/constants';
import { _QUESTION_ROUTE, _CATEGORIES_ROUTE, _LANGUAGES_ROUTE } from '../../../utils/constants/constDashboardRoutes';
/** React Redux Hooks */
import { useAppSelector, useAppDispatch } from '../../../redux/reduxHooks.ts';
import { menuQuestion } from '../../../redux/slices/dashboardSlice.ts';
/** React Query */
import { useQuery } from '@tanstack/react-query';
/** API url | Custom env mandatory to begin with VITE
 * https://vitejs.dev/guide/env-and-mode.html#env-files */
const baseURL = import.meta.env.VITE_API_BASE_URL;

const D_Problem = () => {
  /** Custom Hooks */
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  /** Retrieve Category From Redux State */
  const dispatch = useAppDispatch();
  const getMenuRoute = useAppSelector((state: RootState) => state?.dashboard?.categoryRoute);
  const getMenuLanguage = useAppSelector((state: RootState) => state?.dashboard?.language);

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
      //console.log("resJSON", resJSON);
      return resJSON;
    } catch (error) {
      console.log(error);
    }
  }, []);

  /** Generate Question */
  const { isSuccess, data, refetch } = useQuery({
    queryKey: ['questionData', url],
    queryFn: () => getQuestion(url),
    refetchOnWindowFocus: false,
    staleTime: 100 * (60 * 1000),
    cacheTime: 100 * (60 * 1000),
  });

  /** Save Question to Redux Store */
  useEffect(() => {
    if (data !== undefined) {
      //console.log("data", data)
      dispatch(menuQuestion(data.data));
    }
  }, [dispatch, data]);

  /** Retrive Question from Redux Store*/
  const getMenuQuestion = useAppSelector((state: RootState) => state?.dashboard?.question);

  /** Generate New Question */
  const newQuestion = () => {
    // manually refetch
    refetch();
  };

  /** Render if Successful */
  if (isSuccess)
    return (
      <div
        className={`${
          darkMode ? '' : ''
        } overflow-y-scroll tw-text-campfire-blue tw-w-full tw-h-full tw-flex tw-flex-col tw-p-2`}
      >
        <article
          className={`${
            darkMode ? 'tw-bg-campfire-neutral-600/70' : 'tw-bg-campfire-neutral-200/90'
          } tw-gap-1 tw-h-full tw-flex tw-flex-col tw-content-around`}
        >
          <span className="tw-h-full tw-flex tw-flex-col">
            <div className="tw-flex tw-flex-col tw-justify-between tw-h-3/4">
              {/**Question Task */}
              <section className="">
                <Transition2>
                  <header
                    className={`${darkMode ? '' : ''} 
               tw-flex tw-flex-row tw-justify-between tw-content-center tw-pb-2`}
                  >
                    <h5
                      className={`${
                        darkMode ? 'tw-text-campfire-neutral-300' : 'tw-text-campfire-neutral-700'
                      } tw-border-campfire-purple-light
                tw-border-b tw-border-r tw-text-2xl tw-h-[36px] tw-w-3/4 tw-pl-2`}
                    >
                      Problem
                    </h5>
                    <button
                      className={`${
                        darkMode ? 'hover:tw-bg-campfire-neutral-500' : 'hover:tw-bg-campfire-neutral-100'
                      } tw-border-campfire-purple-light
                  tw-border-b tw-h-[36px] tw-font-gro tw-px-2 tw-w-1/4`}
                      onClick={() => newQuestion()}
                    >
                      Generate
                    </button>
                  </header>
                  {/**Question: Task */}
                  {getMenuQuestion._QUESTION_TASK === undefined ? (
                    <div />
                  ) : (
                    <div
                      className={`${
                        darkMode ? 'tw-text-campfire-neutral-100' : 'tw-text-campfire-neutral-700'
                      } tw-px-2 tw-pb-2`}
                    >
                      {/**Question: Task */}
                      <h6 className="tw-p-1 tw-text-xl tw-text-campfire-blue">Task</h6>
                      <p className="tw-pl-3 tw-pt-1 tw-text-base">
                        {getMenuQuestion._QUESTION_TASK.split(' ').map((word, index) => {
                          const regex = /[""]/g;
                          const wordStrip = word.replace(regex, '');

                          if (word.match(regex)) {
                            return (
                              <span key={index}>
                                <span
                                  key={index}
                                  className={`${
                                    darkMode ? 'tw-bg-campfire-neutral-500' : 'tw-bg-campfire-neutral-400/40'
                                  } 
                            tw-border-no-border tw-px-1`}
                                >
                                  {wordStrip}
                                </span>
                              </span>
                            );
                          }

                          return (
                            <span key={index} className="tw-leading-7">
                              {' '}
                              {word}{' '}
                            </span>
                          );
                        })}
                      </p>
                    </div>
                  )}
                </Transition2>
              </section>
            </div>
            <Transition2>
              {/**Question References: (Helpful Links) */}
              <section
                className={`${darkMode ? '' : ''} tw-border-campfire-purple-light tw-h-1/4 tw-border-t tw-px-2
            overflow-y-scroll tw-pb-2`}
              >
                <h6 className="tw-p-1 tw-text-xl tw-text-campfire-blue">References</h6>
                {getMenuQuestion._QUESTION_REFS === undefined ||
                Object.keys(getMenuQuestion._QUESTION_REFS).length === 0 ? (
                  <div />
                ) : (
                  <ul
                    className={`${
                      darkMode ? '[&>li>a]:tw-text-campfire-neutral-100' : '[&>li>a]:tw-text-campfire-neutral-700'
                    } 
                tw-pl-3 tw-pt-1 tw-text-sm tw-flex tw-flex-col tw-list-disc`}
                  >
                    {Object.entries(getMenuQuestion._QUESTION_REFS).map((entry) => {
                      const [key, value] = entry;
                      return (
                        <li key={nanoid(4)} className="tw-ml-4">
                          <a
                            href={value}
                            target="_blank"
                            className={`${
                              darkMode ? 'hover:tw-text-campfire-purple-light' : 'hover:tw-text-campfire-blue'
                            }`}
                          >
                            {key}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </section>
            </Transition2>
          </span>
        </article>
      </div>
    );
};

export default D_Problem;

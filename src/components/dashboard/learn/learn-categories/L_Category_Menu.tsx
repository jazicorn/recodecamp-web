// Categories
import { 
  useContext, 
  useState, 
  useRef, 
  useCallback, 
  useEffect 
} from 'react';
import { ThemeContext } from '../../../../context/ThemeContext';
// hooks
import Transition from '../../../../hooks/useTransition';
import useWindowSize from '../../../../hooks/useWindowSize';
import { LoadingDashboardMD } from '../L_Loading';
/*Constants*/
import { _LANGUAGES_SHORTHAND } from '../../../../utils/constants/constLanguages';
// components
import L_Category_Menu_Items from '../learn-categories/L_Category_Menu_Items';
// import D_Languages from '../learn-categories/D_Languages';
/** React Redux Hooks */
import { 
  useAppSelector, 
  useAppDispatch 
} from '../../../../redux/reduxHooks.ts';
import type { RootState } from '../../../../redux/store.ts';
import { 
  menuLanguages, 
  menuLanguage, 
  menuCategoryInfo 
} from '../../../../redux/slices/dashboardSlice.ts';
/** Icons */
import { IconArrowBadgeDown } from '@tabler/icons-react';
/**Constants */
import { _LANGUAGES_ALL } from '../../../../utils/constants/constLanguages';
/**React Query */
import { useQuery } from '@tanstack/react-query';
/** API url | Custom env mandatory to begin with VITE
 * https://vitejs.dev/guide/env-and-mode.html#env-files */
const baseURL = import.meta.env.VITE_API_BASE_URL;

const filterLanguages = (userLanguages) => {
  if (userLanguages === undefined || userLanguages.length === 0) {
    return ['Javascript'];
  } else {
    //console.log("userLanguages", userLanguages);
    const filtered = {};
    const languages = Object.assign(filtered, _LANGUAGES_ALL);
    //console.log("pre-filtered:", filtered);
    const languagesKeys = Object.keys(filtered);
    //console.log("langkeys:", languagesKeys)
    languagesKeys.map((language) => {
      //console.log("language", language)
      const filter = userLanguages.includes(language.toLowerCase());
      if (!filter) {
        delete languages[language.toLowerCase()];
      }
    });
    //console.log("filtered:", languages)
    return languages;
  }
};

const L_Category_Menu = ({ menuData }) => {
  /** Custom Hooks */
  const { isMobile } = useWindowSize();
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  const dispatch = useAppDispatch();
  /** Retrieve Category From Redux State */
  const getMenuLanguages = useAppSelector((state: RootState) => state?.dashboard?.languages);
  //console.log("getMenuLanguages", getMenuLanguages);
  const getMenuLanguageDefault = useAppSelector((state: RootState) => state?.dashboard?.languageDefault);
  const getMenuLanguage = useAppSelector((state: RootState) => state?.dashboard?.language);
  const getMenuCategory = useAppSelector((state: RootState) => state?.dashboard?.category);
  const getMenuCategoryInfo = useAppSelector((state: RootState) => state?.dashboard?.categoryInfo);
  //const getMenuUser = useAppSelector((state:RootState) => state?.dashboard?.user);
  const [languages, setLanguages] = useState(getMenuLanguages);

  /**Desktop Dropdown Menu */
  const [menuDropdown, setMenuDropdown] = useState(false);

  function toggleMenuDropdown(e) {
    e.preventDefault();
    setMenuDropdown(!menuDropdown);
    //console.log(menuDropdown)
  }

  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (menuDropdown && ref.current && !ref.current.contains(e.target)) {
        setMenuDropdown(!menuDropdown);
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [menuDropdown]);

  /** Retrieve Available Languages */
  const getLanguages = useCallback(async () => {
    /** Retrieve Languages from API */
    try {
      let url;
      if (import.meta.env.PROD) {
        url = `${baseURL}/api/languages`;
      } else {
        url = `/api/languages`;
      }
      await fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then((res) => {
          let response;
          if (res.ok) {
            response = res.json();
            //console.log(resJSON);
            return response;
          } else {
            response = { data: [getMenuLanguageDefault] };
            return response;
          }
        })
        .then((res) => {
          //console.log("res.data", res.data)
          if (res.data !== undefined) {
            dispatch(menuLanguages(res.data));
          }
          return res.data;
        });
    } catch (e) {
      console.log(e);
    }
  }, [dispatch, getMenuLanguageDefault]);

  useEffect(() => {
    getLanguages();
  }, [getLanguages]);

  useEffect(() => {
    const result = filterLanguages(getMenuLanguages);
    if (result !== undefined) {
      setLanguages(result);
    }
  }, [getMenuLanguages]);

  const currentLanguage = _LANGUAGES_SHORTHAND[getMenuLanguage.toLowerCase()];

  const getCategories = async () => {
    try {
      let url;
      //console.log("baseURLmenu:", baseURL)
      if (import.meta.env.PROD) {
        url = `${baseURL}/api/categories/${currentLanguage}`;
      } else {
        url = `/api/categories/${currentLanguage}`;
      }
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const resJSON = res.json();
      return resJSON;
    } catch (error) {
      console.log(error);
    }
  };

  /** Generate Categories */
  const { data, refetch } = useQuery({
    queryKey: ['categoriesData'],
    queryFn: getCategories,
    refetchOnWindowFocus: false,
    staleTime: 100 * (60 * 1000),
    cacheTime: 0,
  });

  /**Update categories */
  const refetchData = async (getLanguage) => {
    //console.log(getLanguage)
    await dispatch(menuLanguage(getLanguage));
    await refetch();
  };

  useEffect(() => {
    if (data !== undefined) {
      //const results = data?.data;
      let results;
      data?.data.find((item) => {
        if (item.category[0] === getMenuCategory) {
          results = item;
        }
      });
      //console.log("results", results)
      dispatch(menuCategoryInfo(results));
    }
  }, [data, dispatch, getMenuCategory, getMenuCategoryInfo]);

  /**Category Route */
  const categories = menuData.data;

  /**Language Menu */
  const transformLanguage = getMenuLanguage[0].toUpperCase() + getMenuLanguage.slice(1).toLowerCase();
  //console.log("transformLanguage", transformLanguage);
  const picture = _LANGUAGES_ALL[getMenuLanguage.toLowerCase()];
  //console.log(picture);

  if (getMenuLanguage === undefined) {
    return <LoadingDashboardMD />;
  }

  return (
    <div
      className={` ${isMobile ? 'tw-pb-4 tw-pt-2' : 'tw-px-4 tw-border-r'} ${
        darkMode ? 'tw-border-campfire-neutral-500' : ''
      } tw-h-full`}
    >
      <Transition>
        <div className={`${darkMode ? '' : ''} tw-py-2 tw-h-full tw-mb-2 tw-z-50 tw-relative`}>
          <h4
            className={`${
              darkMode ? 'tw-text-campfire-neutral-300' : 'tw-text-campfire-neutral-700'
            } tw-border-campfire-purple-light tw-border-b tw-text-xl tw-h-[36px] tw-w-full tw-pl-2 
                tw-font-space_mono tw-justify-items-start tw-flex tw-flex-row tw-shrink-0`}
          >
            Language:
            <div className="tw-flex tw-flex-row tw-items-end tw-text-xl">
              <button
                onClick={(e) => toggleMenuDropdown(e)}
                className={`${
                  darkMode ? 'tw-border-campfire-neutral-500' : ''
                } [&>div]:tw-text-campfire-blue tw-px-2 tw-w-fit tw-flex tw-flex-row tw-shrink-0 tw-font-space_mono_bold tw-bg-transparent hover:[&>div]:tw-text-campfire-purple-light tw-text-[18px] tw-border-b tw-mb-1
                    `}
              >
                <div className="tw-flex tw-flex-row tw-shrink-0 tw-bg-transparent">
                  <img src={picture} alt={transformLanguage} style={{ height: 20, width: 20 }} />
                  &nbsp;{transformLanguage}
                </div>
                <span className="tw-flex tw-flex-row tw-shrink-0 tw-items-center tw-px-1">
                  {darkMode ? (
                    <IconArrowBadgeDown size={24} color="#a3a3a3" />
                  ) : (
                    <IconArrowBadgeDown size={24} color="#000" />
                  )}
                </span>
              </button>
            </div>
          </h4>
          {menuDropdown && (
            <div
              ref={ref}
              className={`${
                darkMode ? 'tw-bg-campfire-neutral-800/95' : 'tw-bg-campfire-neutral-100/95'
              } tw-border-no-border tw-rounded 
                    tw-z-300 tw-absolute tw-h-auto tw-w-[14em] tw-p-4 tw-ml-24`}
            >
              <ul className={`${darkMode ? '' : ''} tw-inline-block`}>
                {Object.entries(languages).map(([key, value], index) => {
                  return (
                    <li
                      key={index}
                      className={`${
                        darkMode ? 'tw-border-campfire-neutral-600' : 'tw-border-campfire-neutral-400'
                      } tw-border-b tw-flex tw-flex-row tw-gap-x-2 tw-pt-3 tw-items-center`}
                    >
                      <img src={value} alt="key" style={{ height: 20, width: 20 }} />
                      <button
                        onClick={() => refetchData(key)}
                        className={`${darkMode ? 'tw-text-campfire-neutral-400 ' : 'tw-text-campfire-neutral-700'} 
                                        hover:tw-text-campfire-blue tw-font-space_grotesk_medium tw-text-lg`}
                      >
                        {key}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </Transition>
      <Transition>
        <h5
          className={`${darkMode ? 'tw-text-campfire-neutral-300' : 'tw-text-campfire-neutral-700'} 
            tw-text-lg tw-h-[36px] tw-w-full tw-pl-2 tw-font-space_mono tw-z-40 tw-relative`}
        >
          Categories:&nbsp;
        </h5>
      </Transition>
      <ul
        className={`${darkMode ? 'marker:tw-text-campfire-neutral-400' : ''} 
        tw-list-decimal tw-flex tw-flex-col tw-px-10 tw-z-40 tw-relative`}
      >
        {categories !== undefined &&
          categories.map((category, i) => {
            return (
              <li key={i} className="">
                <L_Category_Menu_Items category={category} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default L_Category_Menu;

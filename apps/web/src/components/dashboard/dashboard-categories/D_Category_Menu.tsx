// Categories
import { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
// hooks
import Transition from '../../../hooks/useTransition';
//import useWindowSize from '../../../hooks/useWindowSize';
// components
import D_Category_Menu_Items from '../../../components/dashboard/dashboard-categories/D_Category_Menu_Items';
// import D_Languages from '../../../components/dashboard/dashboard-categories/D_Languages';
/** React Redux Hooks */
import { useAppSelector, useAppDispatch } from '../../../redux/reduxHooks.ts';
import { 
  menuLanguage,
} from '../../../redux/slices/dashboardSlice.ts';
/** Icons */
import JS_Icon from "../../../assets/tech/javascript/javascript-original.svg";
//import JAVA_Icon from "../../../assets/tech/java/java-original.svg";
//import PY_Icon from "../../../assets/tech/python/python-original.svg";

const D_Category_Menu = ({data}) => {
    /** Custom Hooks */
    //const { isDesktopMDXL, isDesktopXL } = useWindowSize();
    const { state } = useContext(ThemeContext);
    const darkMode = state.darkMode;

    const dispatch = useAppDispatch();
    /** Retrieve Category From Redux State */
    const getMenuLanguageDefault = useAppSelector((state:RootState) => state?.dashboard?.languageDefault);
    const getMenuLanguage = useAppSelector((state:RootState) => state?.dashboard?.language);

    async function setLanguage() {
        if(getMenuLanguage === undefined || getMenuLanguage === '') {
        dispatch(menuLanguage(getMenuLanguageDefault));
        }
    }

    const categories = data.data;

    return (
    <div className="tw-h-full">
        <Transition>
            <div className={`${darkMode ? "" : ""} tw-py-2 tw-h-full`}>
            <h4 className={`${darkMode ? 'tw-text-campfire-neutral-300' : 'tw-text-campfire-neutral-700'} tw-border-campfire-purple-light tw-border-b tw-text-xl tw-h-[36px] tw-w-full tw-pl-2 
            tw-font-space_mono tw-justify-items-start`}>
            <div className="tw-flex tw-flex-row tw-items-end tw-text-xl">
                Language:
                <button className={`${darkMode ? '' : 'tw-text-campfire-neutral-600'} tw-px-2  tw-w-fit tw-flex tw-flex-row tw-font-space_mono tw-bg-transparent hover:tw-text-campfire-purple-light tw-text-base 
                `}>
                    {getMenuLanguage === "Javascript" &&
                    <div className="tw-flex tw-flex-row tw-bg-transparent"> 
                        <img src={JS_Icon} alt="Javascript" style={{ height: 21, width: 21 }}></img>
                        &nbsp;{getMenuLanguage}
                    </div>
                    }
                    {getMenuLanguage === "Java" &&
                    <div className="tw-flex tw-flex-row tw-bg-transparent"> 
                        <img src={Java_Icon} alt="Java" style={{ height: 21, width: 21 }}></img>
                        &nbsp;{getMenuLanguage}
                    </div>
                    }
                    {getMenuLanguage === "Python" &&
                    <div className="tw-flex tw-flex-row tw-bg-transparent"> 
                        <img src={Py_Icon} alt="Python" style={{ height: 21, width: 21 }}></img>
                        &nbsp;{getMenuLanguage}
                    </div>
                    }
                </button>
                </div>
            </h4>
            </div>
        </Transition>
        <Transition>
            <h5 className={`${darkMode ? 'tw-text-campfire-neutral-300' : 'tw-text-campfire-neutral-700'} 
            tw-text-lg tw-h-[36px] tw-w-full tw-pl-2 tw-font-space_mono`}>
            Categories:&nbsp;
            </h5>
        </Transition>
        {
            categories !== undefined && categories.map((category, i) => {
            return (<section key={i} className=''><D_Category_Menu_Items category={category}/></section>)
            })
        }
    </div>
    )
}

export default D_Category_Menu

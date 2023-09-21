// Dashboard Navigation | Mobile
import { useContext, useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
//icons
import {
  IconCalendar,
  IconCategory,
  IconTerminal2,
  IconLogout,
  IconNotes,
  IconSettings,
  IconListDetails,
  IconChevronsRight,
  IconChevronsDown,
  IconBook2,
  IconSearch,
} from '@tabler/icons-react';
import { ReactComponent as Rocket } from '../../assets/icons/others/rocket-right-svgrepo-com.svg';
import { removeTokenFromLocalStorage } from '../../utils/common';
import { useAppDispatch } from '../../redux/reduxHooks.ts';
//import { useAppDispatch, useAppSelector } from '../../redux/reduxHooks.ts';
//import type { RootState } from '../../redux/store.ts';
import { 
  menuUser,
} from '../../redux/slices/dashboardSlice.ts';
import { DEFAULT_USER } from '../../utils/constants.ts';


const D_Navigation = () => {
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;
  const [menu, setMenu] = useState(false);

  /** Redux Dispatch Instance */
  const dispatch = useAppDispatch();
  
  /** User Logout */
  const navigate = useNavigate();
  const logout = (e) => {
    e.preventDefault();
    //console.log("goodbye")
    removeTokenFromLocalStorage();
    dispatch(menuUser(DEFAULT_USER));
    console.log("👋 Goodbye | User Logged Out");
    setTimeout(() => {
      console.log("⏳ Delay | Page Redirect In 1 Second.");
      navigate("/");
    }, '1000');
  };

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (menu && ref.current && !ref.current.contains(e.target)) {
        setMenu(false)
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [menu]);

  return (
    <menu className={`${darkMode ? '' : ''} tw-flex tw-flex-col tw-py-2 tw-pl-2 tw-place-content-start tw-h-full `}>
      {!menu ? 
        <button onClick={toggleMenu} className={`${darkMode ? "tw-bg-campfire-neutral-500 hover:tw-bg-campfire-neutral-300": "tw-bg-campfire-neutral-300 hover:tw-bg-campfire-neutral-400"} tw-my-1 tw-mr-2 tw-border-transparent tw-rounded`}>
          { darkMode ? <IconChevronsRight color="#2ca9bc" /> : <IconChevronsRight color="#000" />}
        </button>
      :
      <div className={`${darkMode ? '' : ''} tw-mr-2 tw-z-30 tw-relative tw-rounded`}>
        <button onClick={toggleMenu} className={`${darkMode ? "tw-bg-campfire-neutral-500 hover:tw-bg-campfire-neutral-300": "tw-bg-campfire-blue-100 hover:tw-bg-campfire-neutral-400"} tw-my-1  tw-mr-2 tw-border-transparent tw-rounded tw-w-full`}>
          {darkMode ? <IconChevronsDown color="#2ca9bc" /> : <IconChevronsDown color="#000" />}
        </button>
        {menu && 
          <div ref={ref} className={`${darkMode ? 'tw-bg-campfire-blue-100 tw-border-campfire-neutral-600' : 'tw-bg-campfire-neutral-300 tw-border-campfire-blue-200'} tw-border tw-rounded-b tw-p-2`}>
            <ul className='tw-flex tw-flex-col tw-place-items-start tw-space-y-2 [&>li]:tw-h-[30px] tw-py-1'>
              <li className={`${darkMode ? "hover:tw-bg-campfire-neutral-400 hover:tw-text-campfire-neutral-200": "hover:tw-bg-campfire-neutral-100 hover:tw-text-campfire-blue"} 
              tw-flex tw-flex-row tw-gap-1 tw-w-full tw-py-1`}>
                <Link to="/learn/categories" className="tw-flex tw-flex-row tw-gap-1 tw-w-full">
                  { darkMode ? <IconCategory color="#2ca9bc" /> : <IconCategory color="#000" />}
                  Category
                </Link>
              </li>
              <li className={`${darkMode ? "hover:tw-bg-campfire-neutral-400 hover:tw-text-campfire-neutral-200": "hover:tw-bg-campfire-neutral-100 hover:tw-text-campfire-blue"} 
              tw-flex tw-flex-row tw-gap-1 tw-w-full tw-py-1`}>
                <Link to="/learn/code" className="tw-flex tw-flex-row tw-gap-1 tw-w-full tw-place-items-center tw-h-[18px]">
                  {darkMode ? <IconTerminal2 color="#2ca9bc" /> : <IconTerminal2 color="#000" />}
                  <span className={`${darkMode ? "hover:tw-text-campfire-neutral-300 tw-bg-campfire-neutral-400": "hover:tw-text-campfire-neutral-700 tw-text-campfire-blue tw-bg-campfire-neutral-100 "}
              tw-flex tw-flex-row tw-place-items-center tw-w-fit tw-pr-1 tw-rounded`}>
                    Start ReCoding
                    <Rocket style={{ height: 22, width: 32 }} />
                  </span>
                </Link>
                </li>
            </ul>
            <hr className={`${darkMode ? 'tw-border-campfire-neutral-800' : 'tw-border-campfire-blue' } 
        tw-place-self-left tw-ml-8 tw-my-3 tw-h-[px] tw-w-[100px]`}/>
            <ul className='tw-flex tw-flex-col tw-place-items-start tw-space-y-2 [&>li]:tw-h-[30px] tw-py-1'>
              <li className={`${darkMode ? "hover:tw-bg-campfire-neutral-400 hover:tw-text-campfire-neutral-200": "hover:tw-bg-campfire-neutral-100 hover:tw-text-campfire-blue"} 
              tw-flex tw-flex-row tw-gap-1 tw-w-full tw-py-1`}>
                <Link to="/learn/plans" className="tw-flex tw-flex-row tw-gap-1 tw-w-full">
                  { darkMode ? <IconListDetails color="#2ca9bc" /> : <IconListDetails color="#000" />}
                  Learning Plans
                </Link>
              </li>
              <li className={`${darkMode ? "hover:tw-bg-campfire-neutral-400 hover:tw-text-campfire-neutral-200": "hover:tw-bg-campfire-neutral-100 hover:tw-text-campfire-blue"} 
              tw-flex tw-flex-row tw-gap-1 tw-w-full tw-py-1`}>
                <Link to="/learn/calendar" className="tw-flex tw-flex-row tw-gap-1 tw-w-full">
                { darkMode ? <IconCalendar color="#2ca9bc" /> : <IconCalendar color="#000" />}
                  Calendar
                </Link>
              </li>
               <li className={`${darkMode ? "hover:tw-bg-campfire-neutral-400 hover:tw-text-campfire-neutral-200": "hover:tw-bg-campfire-neutral-100 hover:tw-text-campfire-blue"} 
              tw-flex tw-flex-row tw-gap-1 tw-w-full tw-py-1`}>
                <Link to="/learn/docs" className="tw-flex tw-flex-row tw-gap-1 tw-w-full"> 
                {darkMode ? <IconBook2 color="#2ca9bc" /> : <IconBook2 color="#000" />} 
                  Documentation
                </Link>
              </li>
              <li className={`${darkMode ? "hover:tw-bg-campfire-neutral-400 hover:tw-text-campfire-neutral-200": "hover:tw-bg-campfire-neutral-100 hover:tw-text-campfire-blue"} 
              tw-flex tw-flex-row tw-gap-1 tw-w-full tw-py-1`}>
                <Link to="/learn/notes" className="tw-flex tw-flex-row tw-gap-1 tw-w-full"> 
                  {darkMode ? <IconNotes color="#2ca9bc" /> : <IconNotes color="#000" />} 
                  Notes
                </Link>
              </li>  
            </ul>
            <hr className={`${darkMode ? 'tw-border-campfire-neutral-800' : 'tw-border-campfire-blue' } 
        tw-place-self-left tw-ml-8 tw-my-3 tw-h-[px] tw-w-[100px]`}/>
            <ul className='tw-flex tw-flex-col tw-place-items-start tw-space-y-2 [&>li]:tw-h-[30px]'>
              <li className={`${darkMode ? "hover:tw-bg-campfire-neutral-400 hover:tw-text-campfire-neutral-200": "hover:tw-bg-campfire-neutral-100 hover:tw-text-campfire-blue"} 
              tw-flex tw-flex-row tw-gap-1 tw-w-full tw-py-1`}>
                <Link to="/learn/search" className="tw-flex tw-flex-row tw-gap-1 tw-w-full">
                {darkMode ? <IconSearch color="#2ca9bc" /> : <IconSearch color="#000"/>}          
                  Dashboard Search
                </Link>
              </li>
              <li className={`${darkMode ? "hover:tw-bg-campfire-neutral-400 hover:tw-text-campfire-neutral-200": "hover:tw-bg-campfire-neutral-100 hover:tw-text-campfire-blue"} 
              tw-flex tw-flex-row tw-gap-1 tw-w-full tw-py-1`}>
                <Link to="/learn/settings/dashboard" className="tw-flex tw-flex-row tw-gap-1 tw-w-full">
                {darkMode ? <IconSettings color="#2ca9bc" /> : <IconSettings color="#000"/>}          
                  Dashboard Settings
                </Link>
              </li>
              <li className={`${darkMode ? "hover:tw-bg-campfire-neutral-400 hover:tw-text-campfire-neutral-200": "hover:tw-bg-campfire-neutral-100 hover:tw-text-campfire-blue"} 
              tw-flex tw-flex-row tw-gap-1 tw-w-full tw-py-1`}>
                <button onClick={(e) => logout(e)} className="tw-font-space_mono tw-flex tw-flex-row tw-place-items-center tw-text-base tw-w-full">
                { darkMode ? <IconLogout color="#2ca9bc" /> : <IconLogout color="#000"/> }<span className="tw-pl-1">Logout</span>
                </button>
              </li>
            </ul>
          </div>
        }
      </div>
      }
    </menu>
  )
}

export default D_Navigation

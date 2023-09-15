// Dashboard Navigation
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Link, useNavigate } from 'react-router-dom';
//icons
import {
  IconCalendar,
  IconCategory,
  IconLogout,
  IconNotes,
  IconSettings,
  IconListDetails,
  IconBook2,
  IconUser
} from '@tabler/icons-react';
import { removeTokenFromLocalStorage } from '../../utils/common';

const D_Navigation = () => {
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  /** User Logout */
  const navigate = useNavigate();
  const logout = (e) => {
    e.preventDefault();
    removeTokenFromLocalStorage();
    console.log("👋 Goodbye | Logged Out");
    setTimeout(() => {
      console.log("⏳ Delay | Redirect in 1 second.");
      navigate("/");
    }, '1000');
  }

  return (
    <menu className={`${darkMode ? '' : ''} tw-flex tw-flex-col tw-py-2 tw-mb-1 tw-place-content-start tw-h-full tw-divide-y tw-p-2 tw-gap-y-4 `}>
      <ul className='tw-flex tw-flex-col tw-place-items-center tw-space-y-2 [&>li]:tw-h-[30px]'>
        <li className={`${darkMode ? "hover:tw-border-b hover:tw-border-campfire-neutral-300": "hover:tw-border-b-[1.5px] hover:tw-border-campfire-blue"} 
       `}>
          <Link to="/learn/categories">
            { darkMode ? <IconCategory color="#2ca9bc" /> : <IconCategory color="#000" />}
          </Link>
        </li>
        <li className={`${darkMode ? "hover:tw-border-b hover:tw-border-campfire-neutral-300": "hover:tw-border-b-[1.5px] hover:tw-border-campfire-blue"} 
       `}>
          <Link to="/learn/code">
            {darkMode ? <IconListDetails color="#2ca9bc" /> : <IconListDetails color="#000" />}
          </Link>
        </li>
        <li className={`${darkMode ? "hover:tw-border-b hover:tw-border-campfire-neutral-300": "hover:tw-border-b-[1.5px] hover:tw-border-campfire-blue"} 
       `}>
          <Link to="/learn/calendar">
          { darkMode ? <IconCalendar color="#2ca9bc" /> : <IconCalendar color="#000" />} 
          </Link>
        </li>
        <li className={`${darkMode ? "hover:tw-border-b hover:tw-border-campfire-neutral-300": "hover:tw-border-b-[1.5px] hover:tw-border-campfire-blue"} 
       `}>
          <Link to="/learn/docs">
          { darkMode ? <IconBook2 color="#2ca9bc" /> : <IconBook2 color="#000" />}
          </Link>
        </li>
        <li className={`${darkMode ? "hover:tw-border-b hover:tw-border-campfire-neutral-300": "hover:tw-border-b-[1.5px] hover:tw-border-campfire-blue"} 
       `}>
          <Link to="/learn/notes">
          { darkMode ? <IconNotes color="#2ca9bc" /> : <IconNotes color="#000" />}
          </Link>
        </li>
      </ul>
      <ul className='tw-flex tw-flex-col tw-place-items-center tw-pt-4 tw-space-y-2 [&>li]:tw-h-[30px]'>
        <li className={`${darkMode ? "hover:tw-border-b hover:tw-border-campfire-neutral-300": "hover:tw-border-b-[1.5px] hover:tw-border-campfire-blue"} 
       `}>
          <Link to="/learn/settings/user">
            { darkMode ? <IconUser color="#2ca9bc" /> : <IconUser color="#000" />}
          </Link>
        </li>
        <li className={`${darkMode ? "hover:tw-border-b hover:tw-border-campfire-neutral-300": "hover:tw-border-b-[1.5px] hover:tw-border-campfire-blue"} 
       `}>
          <Link to="/learn/settings/dashboard">
            { darkMode ? <IconSettings color="#2ca9bc" /> : <IconSettings color="#000" />}
          </Link>
        </li>
        <li className={`${darkMode ? "hover:tw-border-b hover:tw-border-campfire-neutral-300": "hover:tw-border-b-[1.5px] hover:tw-border-campfire-blue"} 
       tw-pl-1`}>
          <button onClick={(e) => logout(e)}>
          { darkMode ? <IconLogout color="#2ca9bc" /> : <IconLogout color="#000"/> }
          </button>
        </li>
      </ul>
    </menu>
  )
}

export default D_Navigation

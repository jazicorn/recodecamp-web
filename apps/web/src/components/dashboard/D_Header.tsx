// Dashboard Banner
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import JS_Icon from "../../assets/javascript/javascript-original.svg"
import { IconSearch } from '@tabler/icons-react'

const D_Navigation = () => {
  const { state } = useContext(ThemeContext);
    const darkMode = state.darkMode;
  return (
    <menu className={`${darkMode ? 'tw-text-campfire-blue' : 'tw-text-campfire-gray-darker'} tw-shrink-0 tw-flex tw-flex-row tw-h-full tw-w-full tw-text-campfire-blue tw-items-center tw-place-content-between tw-pr-3`}>
      <ul className='tw-flex tw-flex-row tw-items-center'>
        <li className=''><img src={JS_Icon} alt="Javascript" style={{ height: 18, width: 36 }}></img></li>
        <li><span className=''>Javascript</span></li>
      </ul>
      <ul>
        <li>{ darkMode ? <IconSearch color="#2ca9bc" />: <IconSearch color="#000" />}</li>
      </ul>
    </menu>
  )
}

export default D_Navigation

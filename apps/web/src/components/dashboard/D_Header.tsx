import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../context/ThemeContext'
//icons
import {
  IconHome,
} from '@tabler/icons-react';

const HeaderDashboard = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  return (
    <div className={`${darkMode ? '[&>*]:tw-backdrop-brightness-25' : '[&>*]:tw-backdrop-brightness-65 [&>*]:tw-backdrop-blur-sm'
      } tw-dark tw-font-mono tw-flex tw-flex-col tw-w-full tw-place-items-center tw-px-5 tw-mt-2 tw-relative`}>
      <header
        className={`tw-grow-0 tw-h-[48px] tw-backdrop-brightness-65 tw-px-2 tw-w-full tw-flex tw-flex-row tw-justify-between tw-rounded`}
      >
        <div className='tw-pl-1 tw-flex tw-flex-row tw-place-self-center'>
          <Link to={'/learn'} className={`${darkMode ? "": ""}`}>
          { darkMode ? <IconHome color="#2ca9bc" /> : <IconHome color="#000" />}
          </Link>
        </div>
      </header>
    </div>
  )
}

export default HeaderDashboard

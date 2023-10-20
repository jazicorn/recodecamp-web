import { useContext, useState, useEffect, useCallback } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
// redux hooks
import { useAppSelector } from '../../redux/reduxHooks.ts'
import type { RootState } from '../../redux/store.ts'
import { validUser, updateUser, fetchUser, fetchUserAuth, fetchUserStatus } from '../../redux/slices/authSlice.ts'

const D_Header = () => {
  /** DarkMode */
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  /** Redux Store: User */
  const account = useAppSelector(fetchUser)
  const authenticated = useAppSelector(fetchUserAuth)
  const status = useAppSelector(fetchUserStatus)

  /** Set User Account Type */
  const [accountType, setAccountType] = useState('')
  const accountSub = () => {
    if (account !== undefined) {
      if (Object.keys(account).length !== 0) {
        const sub = account._SUBSCRIPTION.split(',')[1]
        const subType = sub.charAt(0).toUpperCase() + sub.slice(1)
        //console.log(subType)
        setAccountType(subType)
      }
    } else {
      setAccountType('No Account')
    }
  }
  useEffect(() => {
    accountSub()
  })

  return (
    <div
      className={`${
        darkMode ? '[&>*]:tw-bg-campfire-neutral-900/70' : '[&>*]:tw-bg-campfire-neutral-300/70'
      } [&>*]:tw-backdrop-blur-sm tw-flex tw-flex-col tw-w-full tw-px-5 tw-mt-2 tw-relative tw-min-h-[44px] `}
    >
      <header
        className={`${darkMode ? 'tw-text-campfire-neutral-500' : ''} 
        tw-grow-0 tw-h-full tw-w-full tw-pl-5 tw-py-2 tw-px-2 tw-w-full tw-flex tw-flex-row tw-gap-2 tw-justify-start tw-items-center tw-rounded`}
      >
        <h5
          className={`${darkMode ? 'tw-border-campfire-neutral-800' : 'tw-border-campfire-blue-300'} 
        tw-border-l-2 tw-px-2.5 tw-pt-0.5 tw-h-full tw-font-space_grotesk_medium  tw-text-[17px]`}
        >
          Mode :{' '}
          <span className={`${darkMode ? 'tw-text-campfire-purple-300' : 'tw-text-campfire-purple-400'} tw-pl-1`}>
            {accountType}
          </span>
        </h5>
      </header>
    </div>
  )
}

export default D_Header

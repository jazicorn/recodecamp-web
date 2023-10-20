// Button: Logout
/** React */
import { useContext, useCallback, useEffect, useState } from 'react'
import { Link, useLocation, useParams, useNavigate } from 'react-router-dom'
/** React Redux */
import { useAppDispatch } from '../../redux/reduxHooks.ts'
//import { useAppDispatch, useAppSelector } from '../../redux/reduxHooks.ts';
//import type { RootState } from '../../redux/store.ts';
import {
  validUser,
  updateAuthentication,
  userAuthMe,
  userLogout,
  userLandingScreenLoader,
  fetchUserScreenLoader,
} from '../../redux/slices/authSlice.ts'
/** Data */
import { DEFAULT_USER } from '../../utils/constants.ts'
/** Custom Hooks */
//import useWindowSize from '../../hooks/useWindowSize';
import Transition from '../../hooks/useTransition'
import { ThemeContext } from '../../context/ThemeContext'
/** Notifications */
import { notifications } from '@mantine/notifications'
//import { IconX, IconCheck } from '@tabler/icons-react';
import Emoji from 'react-emojis'
/** Images */
import { ReactComponent as Rocket } from '../../assets/icons/others/rocket-right-svgrepo-com.svg'

const Button_User_Logout = () => {
  /** Custom Hooks | Adjust Window Size*/
  //const { isMobile, isDesktopMDLG, isDesktopXL } = useWindowSize();

  /** Custom Hooks | Dark Mode */
  const { state } = useContext(ThemeContext)
  const darkMode = state.darkMode

  /** Initialize Navigation */
  const navigate = useNavigate()

  /** Redux Dispatch Instance */
  const dispatch = useAppDispatch()

  /** User Logout */
  const logout = useCallback(async () => {
    await dispatch(updateAuthentication(false))
    try {
      const originalPromiseResult = await dispatch(userLogout()).unwrap()
      //console.log("originalPromiseResult", originalPromiseResult)
      if (originalPromiseResult === undefined || originalPromiseResult.error) {
        //console.log("login status:", status)
        if (status === 'idle') {
          console.log('❓ Guest | Idle')
        } else if (status === 'loading') {
          console.log('🔄 Guest | Loading')
        } else if (status === 'failed') {
          console.log('🚫 Guest | Account Logout Failed')
        } else if (status === 'succeeded') {
          console.log('🚫 Guest | Request Returned Error')
        } else {
          console.log('🚫 Guest | Request Error')
        }
        // Failure Notification
        notifications.show({
          id: 'failure',
          withCloseButton: true,
          autoClose: 1000,
          title: 'Failed to Logout',
          message: 'Please try again.',
          color: 'red',
          icon: <Emoji emoji="face-with-monocle" />,
          className: 'my-notification-class',
          style: { backgroundColor: 'white' },
          sx: { backgroundColor: 'red' },
          loading: false,
        })
      } else {
        console.log('👋 Goodbye | User Logged Out')
        // Success Notification
        notifications.show({
          id: 'success',
          withCloseButton: true,
          autoClose: 2000,
          title: 'User Logged Out',
          message: 'See you next time.',
          color: 'cyan',
          icon: <Emoji emoji="waving-hand" />,
          className: 'my-notification-class',
          style: { backgroundColor: 'white' },
          sx: { backgroundColor: 'teal' },
          loading: false,
        })
      }
      setTimeout(() => {
        console.log('⏳ Delay | Page Redirect In 1 Second.')
        navigate('/auth/guest/login')
      }, '600')
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <button
      onClick={(e) => logout(e)}
      className="tw-font-space_mono tw-text-lg tw-place-items-center tw-w-full tw-h-full"
    >
      Logout
    </button>
  )
}

export default Button_User_Logout

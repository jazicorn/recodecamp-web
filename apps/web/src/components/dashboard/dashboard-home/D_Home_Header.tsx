import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
// redux hooks
import { useAppSelector } from '../../../redux/reduxHooks.ts';
import type { RootState } from '../../../redux/store.ts';

const HeaderDashboard = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const account = useAppSelector((state:RootState) => state?.dashboard?.user);
  //console.log("account", account);
  const [ accountType, setAccountType] = useState('');
  const accountSub = () => {
    if(account !== undefined ) {
      if(Object.keys(account).length !== 0) {
        const sub = account._SUBSCRIPTION.split(',')[1];
        const subType = sub.charAt(0).toUpperCase() + sub.slice(1);
        //console.log(subType)
        setAccountType(subType);
      }
    } else {
      setAccountType('No Account');
    }
  }
  useEffect(() => {
    accountSub();
  });

  return (
    <div className={` ${darkMode ? "" : ""}  tw-font-mono tw-flex tw-flex-col tw-w-full tw-h-full tw-items-center tw-relative tw-min-h-[44px] tw-px-2 tw-py-2`}>
      <header
        className={`${darkMode ? "tw-text-campfire-neutral-400 tw-opacity-70 tw-bg-campfire-neutral-600 " 
        : "tw-bg-campfire-neutral-100 tw-opacity-60 tw-text-campfire-neutral-700"} tw-grow-0 tw-h-full tw-h-full tw-w-full tw-flex tw-flex-row tw-justify-start tw-items-center tw-px-4 tw-py-1`}
      >
        <div className={`${darkMode ? "tw-border-campfire-neutral-800" : "tw-border-campfire-blue"} tw-border-l-2 tw-px-1.5 tw-flex tw-flex-row tw-place-self-center tw-h-full tw-px-2`}>
          <h5 className="tw-font-space_grotesk_bold tw-text-[17px] tw-h-full">
            Mode : <span className={`${darkMode ? " tw-text-campfire-purple-300" : "tw-text-campfire-purple-400"} `}>{accountType}</span>
          </h5>
        </div>
      </header>
    </div>
  )
}

export default HeaderDashboard

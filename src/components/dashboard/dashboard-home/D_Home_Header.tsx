import { useContext, useState, useEffect, useCallback } from 'react';
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
    <div className={` ${darkMode ? "" : ""} d-home-header-container`}>
      <header
        className={`${darkMode ? "tw-text-campfire-neutral-400 tw-bg-campfire-neutral-600/70 " 
        : "tw-bg-campfire-neutral-200/70 tw-text-campfire-neutral-700"} `}
      >
        <div className={`${darkMode ? "tw-border-campfire-neutral-800" : "tw-border-campfire-blue"}`}>
          <h5 className="tw-font-space_grotesk_bold tw-text-[18px] tw-h-full"> 
            Mode : <span className={`${darkMode ? " tw-text-campfire-purple-300" : "tw-text-campfire-purple-400"} `}>{accountType}</span>
          </h5>
        </div>
      </header>
    </div>
  )
}

export default HeaderDashboard

// Dashboard Banner
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
// components
import ErrorDashboard from '../dashboard/error';
import LoadingDashboard from '../dashboard/loading';
// redux hooks
//import { useAppSelector } from '../redux/reduxHooks.ts';
//import type { RootState } from '../redux/store.ts';
/**React Query */
import { useQuery } from "@tanstack/react-query";

const getQuestion = async function () {

  const res = await fetch(`/api/var/declare/random`);
  const resJSON = res.json();
  return await resJSON;
};

const D_Problem = () => {
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;
  // const { isMobile, isDesktopMDLG, isDesktopXL } = useWindowSize();
  // const menuItem = useAppSelector((state:RootState) => state?.dashboard?.value);
  const { isLoading, isError, error, data, refetch } = useQuery(['questionData'], getQuestion, {
    refetchOnWindowFocus: false,
  });

  const newQuestion = () => {
    // manually refetch
    refetch();
  }

  if (isLoading) return <LoadingDashboard/>

  if (isError) return <ErrorDashboard error={error}/>

  return (
    <div className={`${darkMode ? '[&>*]:tw-bg-[#525252] tw-text-campfire-blue' : '[&>*]:tw-bg-campfire-neutral-300'} 
    tw-w-full tw-h-full tw-flex tw-flex-col tw-p-2`}>
      <main className='tw-p-2 tw-h-full'>
        <button onClick={() => newQuestion()}>New Question</button>
        <h1>Problem</h1>
        <p className="tw-text-sm">{data.data.task}</p>
      </main>
    </div>
  )
}

export default D_Problem

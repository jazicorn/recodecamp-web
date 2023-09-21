// loading screen
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Loader, Center } from '@mantine/core';

export const LoadingDashboardXS = () => {
    const { state } = useContext(ThemeContext);
    const darkMode = state.darkMode;

    return (
        <>
        {darkMode ?
            <Center>
                <div className={`tw-bg-neutral-700/90 tw-flex tw-flex-col tw-w-full tw-h-full tw-place-content-center tw-place-items-center tw-font-space_mono tw-text-sm`}>
                    <Center><Loader color="gray" size="xs"/></Center>
                </div>
            </Center>
            :
            <Center>
                <div className={`tw-bg-neutral-400/80 tw-flex tw-flex-col tw-w-full tw-h-full tw-place-content-center tw-place-items-center tw-font-space_mono tw-text-sm`}>
                    <Center><Loader color="dark" size="xs"/></Center>
                </div>
            </Center>
        }
        </>
    )
}

export const LoadingDashboardSM = () => {
    const { state } = useContext(ThemeContext);
    const darkMode = state.darkMode;

    return (
        <>
        {darkMode ?

                <div className={`${darkMode ? 'tw-backdrop-brightness-25 ' : 'tw-backdrop-brightness-85'} tw-text-transparent tw-flex tw-flex-col tw-w-full tw-h-full tw-place-self-center tw-place-content-center tw-place-items-center tw-p-2 tw-border tw-border-transparent tw-rounded`}>
                    <Loader color="gray" size="sm"/>
                </div>
          
            :
       
                <div className={`${darkMode ? 'tw-backdrop-brightness-25 ' : 'tw-backdrop-brightness-85'} tw-text-transparent tw-flex tw-flex-col tw-w-full tw-h-full tw-place-self-center tw-place-content-center tw-place-items-center tw-p-2 tw-border tw-border-transparent tw-rounded`}>
                    <Loader color="dark" size="sm"/>
                </div>
          
        }
        </>
    )
}

export const LoadingDashboardMD = () => {
    const { state } = useContext(ThemeContext);
    const darkMode = state.darkMode;
    return (
        <>
        {darkMode ?
                <div className={`${darkMode ? 'tw-backdrop-brightness-25 ' : 'tw-backdrop-brightness-85'} tw-text-transparent tw-flex tw-flex-col tw-w-full tw-h-full tw-place-self-center tw-place-content-center tw-place-items-center tw-p-2 tw-border tw-border-transparent tw-rounded`}>
                    <Loader color="gray" size="md"/>
                </div>
            :
                <div className={`${darkMode ? 'tw-backdrop-brightness-25 ' : 'tw-backdrop-brightness-85'} tw-text-transparent tw-flex tw-flex-col tw-w-full tw-h-full tw-place-self-center tw-place-content-center tw-place-items-center tw-p-2 tw-border tw-border-transparent tw-rounded`}>
                    <Loader color="dark" size="md"/>
                </div>
        }
        </>
    )
}

export const LoadingDashboardLG = () => {
    const { state } = useContext(ThemeContext);
    const darkMode = state.darkMode;
    return (
        <>
        {darkMode ?

                <div className={`${darkMode ? 'tw-backdrop-brightness-25 ' : 'tw-backdrop-brightness-85'} tw-text-transparent tw-flex tw-flex-col tw-w-full tw-h-full tw-place-self-center tw-place-content-center tw-place-items-center tw-p-2 tw-border tw-border-transparent tw-rounded`}>
                    <Loader color="gray" size="lg" className="tw-place-self-center"/>
                </div>
      
            :
    
                <div className={`${darkMode ? 'tw-backdrop-brightness-25 ' : 'tw-backdrop-brightness-85'} tw-text-transparent tw-flex tw-flex-col tw-w-full tw-h-full tw-place-self-center tw-place-content-center tw-place-items-center tw-p-2 tw-border tw-border-transparent tw-rounded`}>
                    <Loader color="dark" size="lg"/>
                </div>
        
        }
        </>
    )
}

export const LoadingDashboardXL = () => {
    const { state } = useContext(ThemeContext);
    const darkMode = state.darkMode;
    return (
        <>
        {darkMode ?
 
                <div className={`${darkMode ? 'tw-backdrop-brightness-25 ' : 'tw-backdrop-brightness-85'} tw-text-transparent tw-flex tw-flex-col tw-w-full tw-h-full tw-place-self-center tw-place-content-center tw-place-items-center tw-p-2 tw-border tw-border-transparent tw-rounded`}>
                    <Loader color="white" size="xl"/>
                </div>
         
            :
       
                <div className={`${darkMode ? 'tw-backdrop-brightness-80 ' : 'tw-backdrop-brightness-85'}
                 tw-text-transparent tw-flex tw-flex-col tw-w-full tw-h-full tw-place-self-center tw-place-content-center tw-place-items-center tw-p-2 tw-border tw-border-transparent tw-rounded`}>
                    <Loader color="gray" size="xl"/>
                </div>
       
        }
        </>
    )
}

export default LoadingDashboardMD;
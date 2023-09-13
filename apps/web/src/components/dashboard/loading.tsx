// loading screen
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Loader } from '@mantine/core';

export const LoadingDashboardXS = () => {
    const { state } = useContext(ThemeContext);
    const darkMode = state.darkMode;

    return (
        <>
        {darkMode ?
            <div className={`tw-bg-neutral-700/90 tw-w-full tw-h-full tw-place-content-center tw-place-items-center tw-font-space_mono tw-text-sm`}>
                <div className=" tw-place-self-center">Loading...<Loader color="gray" size="xs"/></div>;
            </div>
            :
            <div className={`tw-bg-neutral-400/80 tw-w-full tw-h-full tw-place-content-center tw-place-items-center tw-font-space_mono tw-text-sm`}>
                <div className=" tw-place-self-center">Loading...<Loader color="dark" size="xs"/></div>;
            </div>
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
            <div className={`tw-bg-neutral-700/90 tw-w-full tw-h-full tw-place-content-center tw-place-items-center tw-font-space_mono tw-text-base`}>
                <div className=" tw-place-self-center">Loading...<Loader color="gray" size="sm"/></div>;
            </div>
            :
            <div className={`tw-bg-neutral-400/80 tw-w-full tw-h-full tw-place-content-center tw-place-items-center tw-font-space_mono tw-text-base`}>
                <div className=" tw-place-self-center">Loading...<Loader color="dark" size="sm"/></div>;
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
            <div className={`tw-bg-neutral-700/90 tw-w-full tw-h-full tw-place-content-center tw-place-items-center tw-font-space_mono tw-text-xl`}>
                <div className=" tw-place-self-center">Loading...<Loader color="gray" size="md"/></div>;
            </div>
            :
            <div className={`tw-bg-neutral-400/80 tw-w-full tw-h-full tw-place-content-center tw-place-items-center tw-font-space_mono tw-text-xl`}>
                <div className=" tw-place-self-center">Loading...<Loader color="dark" size="md"/></div>;
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
            <div className={`tw-bg-neutral-700/90 tw-w-full tw-h-full tw-place-content-center tw-place-items-center tw-font-space_mono tw-text-2xl`}>
                <div className=" tw-place-self-center">Loading...<Loader color="gray" size="lg"/></div>;
            </div>
            :
            <div className={`tw-bg-neutral-400/80 tw-w-full tw-h-full tw-place-content-center tw-place-items-center tw-font-space_mono tw-text-2xl`}>
                <div className=" tw-place-self-center">Loading...<Loader color="dark" size="lg"/></div>;
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
            <div className={`tw-bg-neutral-700/90 tw-w-full tw-h-full tw-place-content-center tw-place-items-center tw-font-space_mono tw-text-4xl`}>
                <div className=" tw-place-self-center">Loading...<Loader color="gray" size="xl"/></div>;
            </div>
            :
            <div className={`tw-bg-neutral-400/80 tw-w-full tw-h-full tw-place-content-center tw-place-items-center tw-font-space_mono tw-text-4xl`}>
                <div className=" tw-place-self-center">Loading...<Loader color="dark" size="xl"/></div>;
            </div>
        }
        </>
    )
}

export default LoadingDashboardMD;
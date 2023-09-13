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
                <div className={`tw-bg-neutral-700/90 tw-w-full tw-h-full tw-place-content-center tw-place-items-center tw-font-space_mono tw-text-sm`}>
                    <Center><Loader color="gray" size="xs"/></Center>
                </div>
            </Center>
            :
            <Center>
                <div className={`tw-bg-neutral-400/80 tw-w-full tw-h-full tw-place-content-center tw-place-items-center tw-font-space_mono tw-text-sm`}>
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
            <Center>
                <div className={`tw-bg-neutral-700/90 tw-w-full tw-h-full tw-place-content-center tw-place-items-center tw-font-space_mono tw-text-base`}>
                    <Center><Loader color="gray" size="sm"/></Center>
                </div>
            </Center>
            :
            <Center>
                <div className={`tw-bg-neutral-400/80 tw-w-full tw-h-full tw-place-content-center tw-place-items-center tw-font-space_mono tw-text-base`}>
                    <Center><Loader color="dark" size="sm"/></Center>
                </div>
            </Center>
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
            <Center>
                <div className={`tw-bg-neutral-700/90 tw-w-full tw-h-full tw-place-content-center tw-place-items-center tw-font-space_mono tw-text-xl`}>
                    <Center><Loader color="gray" size="md"/></Center>
                </div>
            </Center>
            :
            <Center>
                <div className={`tw-bg-neutral-400/80 tw-w-full tw-h-full tw-place-content-center tw-place-items-center tw-font-space_mono tw-text-xl`}>
                    <Center><Loader color="dark" size="md"/></Center>
                </div>
            </Center>
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
            <Center>
                <div className={`tw-bg-neutral-700/90 tw-w-full tw-h-full tw-place-content-center tw-place-items-center tw-font-space_mono tw-text-2xl`}>
                    <Loader color="gray" size="lg" className="tw-place-self-center"/>
                </div>
            </Center>
            :
            <Center>
                <div className={`tw-bg-neutral-400/80 tw-w-full tw-h-full tw-place-content-center tw-place-items-center tw-font-space_mono tw-text-2xl`}>
                    <Center><Loader color="dark" size="lg"/></Center>
                </div>
            </Center>
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
            <Center>
            <div className={`tw-bg-neutral-700/90 tw-w-full tw-h-full tw-place-content-center tw-place-items-center tw-font-space_mono tw-text-4xl`}>
                <Loader color="gray" size="xl"/>
            </div>
            </Center>
            :
            <Center>
            <div className={`tw-bg-neutral-400/80 tw-w-full tw-h-full tw-place-content-center tw-place-items-center tw-font-space_mono tw-text-4xl`}>
                <Loader color="dark" size="xl"/>
            </div>
            </Center>
        }
        </>
    )
}

export default LoadingDashboardMD;
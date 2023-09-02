// loading screen
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Loader } from '@mantine/core';

const DashboardLoading = (size) => {
    const { state } = useContext(ThemeContext);
    const darkMode = state.darkMode;

    if(size === 'xs') {
        return (
            <div>
            {darkMode ?
                <div className={`tw-bg-neutral-700/90 tw-w-full tw-h-full`}>
                    <Loader color="gray" size="xs"/>;
                </div>
                :
                <div className={`tw-bg-neutral-400/80 tw-w-full tw-h-full`}>
                    <Loader color="dark" size="xs"/>;
                </div>
            }
            </div>
        )
    }

    if(size === 'sm') {
        return (
            <div>
            {darkMode ?
                <div className={`tw-bg-neutral-700/90 tw-w-full tw-h-full`}>
                    <Loader color="gray" size="sm"/>;
                </div>
                :
                <div className={`tw-bg-neutral-400/80 tw-w-full tw-h-full`}>
                    <Loader color="dark" size="sm"/>;
                </div>
            }
            </div>
        )
    }

    if(size === 'md') {
        return (
            <div>
            {darkMode ?
                <div className={`tw-bg-neutral-700/90 tw-w-full tw-h-full`}>
                    <Loader color="gray" size="md"/>;
                </div>
                :
                <div className={`tw-bg-neutral-400/80 tw-w-full tw-h-full`}>
                    <Loader color="dark" size="md"/>;
                </div>
            }
            </div>
        )
    }

    if(size === 'lg') {
        return (
            <div>
            {darkMode ?
                <div className={`tw-bg-neutral-700/90 tw-w-full tw-h-full`}>
                    <Loader color="gray" size="lg"/>;
                </div>
                :
                <div className={`tw-bg-neutral-400/80 tw-w-full tw-h-full`}>
                    <Loader color="dark" size="lg"/>;
                </div>
            }
            </div>
        )
    }

    if(size === 'xl') {
        return (
            <div>
            {darkMode ?
                <div className={`tw-bg-neutral-700/90 tw-w-full tw-h-full`}>
                    <Loader color="gray" size="xl"/>;
                </div>
                :
                <div className={`tw-bg-neutral-400/80 tw-w-full tw-h-full`}>
                    <Loader color="dark" size="xl"/>;
                </div>
            }
            </div>
        )
    }
   
}

export default DashboardLoading;
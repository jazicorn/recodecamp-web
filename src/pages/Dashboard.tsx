import { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import Dashboard_Mobile from './Dashboard.Mobile';
/**Components */
import Header from '../components/dashboard/D_Header';
/**Layouts | Dashboard Pages*/
import Layout_Dashboard from '../layout/dashboard/Layout.D_Banner';
/**Hooks */
import Transition from '../hooks/useTransition';
import useWindowSize from '../hooks/useWindowSize';

const Dashboard = () => {
  const { isMobile } = useWindowSize();
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  /** Navigation */
  const navigate = useNavigate();

  if (isMobile) return <Dashboard_Mobile/>;

  return (
    <div className="dashboard-container">
      <div className={`${darkMode ? 'dashboard-bg-dark' : 'dashboard-bg-light'} dashboard-bg-container`} />
      <article className="dashboard-article">
        {/** Navigation */}
        <Header />
        <div className={`${darkMode ? 'dashboard-outlet-dark' : 'dashboard-outlet-light'} dashboard-outlet`}>
          <div className={`${darkMode ? '' : ''} `}>
            <Layout_Dashboard/>
          </div>
          <aside className={`${darkMode ? '' : ''} `}>{''}</aside>
        </div>
        {/**Footer */}
        <footer className={`${darkMode ? 'dashboard-footer-dark' : 'dashboard-footer-light'} dashboard-footer `}>
          <Transition>
            <a href="https://github.com/jazicorn" className="tw-pr-2">
              created by Jazicorn
            </a>
          </Transition>
        </footer>
      </article>
    </div>
  );
}

export default Dashboard;

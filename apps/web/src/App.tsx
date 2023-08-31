import Home from './pages/Home';
import HomeMobile from './pages/Home.Mobile';
// hooks
import useWindowSize from './hooks/useWindowSize';

function App() {
const { isMobile } = useWindowSize();
  return (
    <div className='tw-dark'>
        {isMobile ? <HomeMobile/> : <Home/>}
    </div>
  )
}

export default App
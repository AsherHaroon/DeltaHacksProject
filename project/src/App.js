import React, { useEffect, useState } from 'react';
import { BrowserRouter,
         Routes,
         Route
} from 'react-router-dom';
import CreatePostScreen from './screens/CreatePostScreen';
import DashboardScreen from './screens/DashboardScreen';
import PitchScreen from './screens/PitchScreen';
import './App.css';
import NavBar from './components/NavBar';
import { useAuthContext } from './contexts/authContext';
import PortfolioScreen from './screens/PortfolioScreen';

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useAuthContext()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (isLoggedIn) setLoaded(true)
  }, [isLoggedIn])

  if (isLoggedIn) {
    return (
      <BrowserRouter>
        <NavBar />
        <Routes>
            <Route index element={<DashboardScreen />} />
            <Route path='portfolio' element={<PortfolioScreen />} />
            <Route path='create-post' element={<CreatePostScreen />} />
            <Route path={`pitch/:pitchid`} element={<PitchScreen />} />
        </Routes>
      </BrowserRouter>
    )
  }
  else {
    return (
      <div>
        LOADING
      </div>
    )
  }
}

const sample = "sample"

export default App;

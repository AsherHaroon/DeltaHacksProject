import React, { useState, useEffect } from 'react';
import { BrowserRouter,
         Routes,
         Route
} from 'react-router-dom';
import CreatePostScreen from './screens/CreatePostScreen';
import DashboardScreen from './screens/DashboardScreen';
import PitchScreen from './screens/PitchScreen';
import './App.css';
import NavBar from './components/NavBar';
import MyInvestmentsScreen from './screens/MyInvestmentsScreen';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
          <Route index element={<DashboardScreen />} />
          <Route path='/my-investments' element={<MyInvestmentsScreen />} />
          <Route path='/create-post' element={<CreatePostScreen />} />
          <Route path={`/pitch/${user}`} element={<PitchScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

const user = "saaeed"

export default App;

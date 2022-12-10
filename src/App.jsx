import './App.css';
import Navbar from "./nav/Navbar";
import CelestialCorridor from './celestialCorridor/CelestialCorridor';
import Libra from './celestialCorridor/Libra';
import { HashRouter, Routes, Route } from "react-router-dom";
import Sagittarius from './celestialCorridor/Sagittarius';
import Aquarius from './celestialCorridor/Aquarius';
import Aries from './celestialCorridor/Aries';
import Leo from './celestialCorridor/Leo';
import Gemini from './celestialCorridor/Gemini';
import LanguageContext from './context/Language';
import { useState } from 'react';

const App = () => {
  const [language, setLanguage] = useState(localStorage.getItem('language'));
  return (
    <div>
      <LanguageContext.Provider value={{language : language}}>
      <HashRouter>
        <Navbar setLanguage={setLanguage}/>
        <Routes>
          <Route path="celestial-corridor" element={<CelestialCorridor/>}/>
          <Route path="celestial-corridor/libra" element={<Libra/>}/>
          <Route path="celestial-corridor/sagittarius" element={<Sagittarius/>}/>
          <Route path="celestial-corridor/aries" element={<Aries/>}/>
          <Route path="celestial-corridor/leo" element={<Leo/>}/>
          <Route path="celestial-corridor/aquarius" element={<Aquarius/>}/>
          <Route path="celestial-corridor/gemini" element={<Gemini/>}/>
        </Routes>
      </HashRouter>
      </LanguageContext.Provider>
    </div>
  );
}

export default App;

import './App.css';
import Navbar from "./nav/Navbar";
import { HashRouter } from "react-router-dom";
import LanguageContext from './context/Language';
import { useState } from 'react';
import HooRoutes from './nav/HooRoutes';
import CcRoutes from "./nav/CcRoutes";

const App = () => {
  const [language, setLanguage] = useState(localStorage.getItem('language'));
  return (
    <div>
      <LanguageContext.Provider value={{language : language}}>
      <HashRouter>
        <Navbar setLanguage={setLanguage}/>
        <HooRoutes/>
        <CcRoutes/>
      </HashRouter>
      </LanguageContext.Provider>
    </div>
  );
}

export default App;

import "./App.css";
import Navbar from "./nav/Navbar";
import { HashRouter, Routes, Route } from "react-router-dom";
import LanguageContext from "./context/Language";
import { useState } from "react";
import Glyphs from "./racial/Glyphs";

const App = () => {
  const [language, setLanguage] = useState(localStorage.getItem("language"));
  return (
    <div>
      <LanguageContext.Provider value={{ language: language }}>
        <HashRouter>
          <Navbar setLanguage={setLanguage} />
          <Routes>
            
            <Route
              path="abyss"
              element={<Glyphs />}
            />
          </Routes>
        </HashRouter>
      </LanguageContext.Provider>
    </div>
  );
};

export default App;

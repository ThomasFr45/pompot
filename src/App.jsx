import "./App.css";
import Navbar from "./nav/Navbar";
import { HashRouter, Routes, Route } from "react-router-dom";
import LanguageContext from "./context/Language";
import { useState } from "react";
import GlyphList from "./racial/GlyphList.jsx";

const App = () => {
  const [language, setLanguage] = useState(localStorage.getItem("language"));
  return (
    <div>
      <LanguageContext.Provider value={{ language: language }}>
        <HashRouter>
          <Navbar setLanguage={setLanguage} />
          <Routes>
            
            <Route
              path="Glyphs"
              element={<GlyphList />}
            />
          </Routes>
        </HashRouter>
      </LanguageContext.Provider>
    </div>
  );
};

export default App;

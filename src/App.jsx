import "./App.css";
import Navbar from "./nav/Navbar";
import { HashRouter, Routes, Route } from "react-router-dom";
import LanguageContext from "./context/Language";
import { useState } from "react";
import HavenOfOblivion from "./havenOfOblivion/HavenOfOblivion";
import Alice from "./havenOfOblivion/Alice";
import Beryl from "./havenOfOblivion/Beryl";
import Cale from "./havenOfOblivion/Cale";
import Crime from "./havenOfOblivion/Crime";
import Dana from "./havenOfOblivion/Dana";
import Karen from "./havenOfOblivion/Karen";
import Leo from "./havenOfOblivion/Leo";
import Nerokas from "./havenOfOblivion/Nerokas";
import Phantom from "./havenOfOblivion/Phantom";
import Phoenix from "./havenOfOblivion/Phoenix";
import Punishment from "./havenOfOblivion/Punishment";
import Aquarius from "./celestialCorridor/Aquarius";
import Aries from "./celestialCorridor/Aries";
import CelestialCorridor from "./celestialCorridor/CelestialCorridor";
import Gemini from "./celestialCorridor/Gemini";
import CcLeo from "./celestialCorridor/Leo";
import Libra from "./celestialCorridor/Libra";
import Sagittarius from "./celestialCorridor/Sagittarius";

const App = () => {
  const [language, setLanguage] = useState(localStorage.getItem("language"));
  return (
    <div>
      <LanguageContext.Provider value={{ language: language }}>
        <HashRouter>
          <Navbar setLanguage={setLanguage} />
          <Routes>
            <Route path="haven-of-oblivion" element={<HavenOfOblivion />} />
            <Route path="haven-of-oblivion/alice" element={<Alice />} />
            <Route path="haven-of-oblivion/beryl" element={<Beryl />} />
            <Route path="haven-of-oblivion/cale" element={<Cale />} />
            <Route path="haven-of-oblivion/crime" element={<Crime />} />
            <Route path="haven-of-oblivion/dana" element={<Dana />} />
            <Route path="haven-of-oblivion/karen" element={<Karen />} />
            <Route path="haven-of-oblivion/leo" element={<Leo />} />
            <Route path="haven-of-oblivion/nerokas" element={<Nerokas />} />
            <Route path="haven-of-oblivion/phantom" element={<Phantom />} />
            <Route path="haven-of-oblivion/phoenix" element={<Phoenix />} />
            <Route path="haven-of-oblivion/punishment" element={<Punishment />} />
            <Route path="celestial-corridor" element={<CelestialCorridor />} />
            <Route path="celestial-corridor/libra" element={<Libra />} />
            <Route
              path="celestial-corridor/sagittarius"
              element={<Sagittarius />}
            />
            <Route path="celestial-corridor/aries" element={<Aries />} />
            <Route path="celestial-corridor/leo" element={<CcLeo />} />
            <Route path="celestial-corridor/aquarius" element={<Aquarius />} />
            <Route path="celestial-corridor/gemini" element={<Gemini />} />
          </Routes>
        </HashRouter>
      </LanguageContext.Provider>
    </div>
  );
};

export default App;

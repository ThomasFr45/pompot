import './App.css';
import Navbar from "./nav/Navbar";
import CelestialCorridor from './celestialCorridor/CelestialCorridor';
import Libra from './celestialCorridor/Libra';
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <HashRouter>
        <Navbar/>
        <Routes>
          <Route path="celestial-corridor" element={<CelestialCorridor/>}/>
          <Route path="celestial-corridor/libra" element={<Libra/>}/>
          <Route path="celestial-corridor/sagittarius" element={<CelestialCorridor/>}/>
          <Route path="celestial-corridor/aries" element={<CelestialCorridor/>}/>
          <Route path="celestial-corridor/leo" element={<CelestialCorridor/>}/>
          <Route path="celestial-corridor/aquarius" element={<CelestialCorridor/>}/>
          <Route path="celestial-corridor/gemini" element={<CelestialCorridor/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

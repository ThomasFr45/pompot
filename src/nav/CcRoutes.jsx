import { Routes, Route } from "react-router-dom";
import Aquarius from "../celestialCorridor/Aquarius";
import Aries from "../celestialCorridor/Aries";
import CelestialCorridor from "../celestialCorridor/CelestialCorridor";
import Gemini from "../celestialCorridor/Gemini";
import Leo from "../celestialCorridor/Leo";
import Libra from "../celestialCorridor/Libra";
import Sagittarius from "../celestialCorridor/Sagittarius";

const CcRoutes = () => {
  return (
    <Routes>
      <Route path="celestial-corridor" element={<CelestialCorridor/>}/>
          <Route path="celestial-corridor/libra" element={<Libra/>}/>
          <Route path="celestial-corridor/sagittarius" element={<Sagittarius/>}/>
          <Route path="celestial-corridor/aries" element={<Aries/>}/>
          <Route path="celestial-corridor/leo" element={<Leo/>}/>
          <Route path="celestial-corridor/aquarius" element={<Aquarius/>}/>
          <Route path="celestial-corridor/gemini" element={<Gemini/>}/>
    </Routes>
  )
};

export default CcRoutes;
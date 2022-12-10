import { Routes, Route } from "react-router-dom";
import HavenOfOblivion from "../havenOfOblivion/HavenOfOblivion";

const HooRoutes = () => {
  return (
    <Routes>
      <Route path="haven-of-oblivion" element={<HavenOfOblivion/>}/>
    </Routes>
  )
};

export default HooRoutes;
import "./glyph.css";
import { useState } from "react";

const Glyph = (infos) => {
const [click, setClick] = useState(false);
const handleClick = (e) =>{
  e.preventDefault();
  setClick(!click);
}
  return (
    <div className="glyphBody">
      <div className="glyphInfos">
        <img className="glyphImage" src={infos.img} alt="" />
        <p className="glyphChar">Perso : {infos.char}</p>
      </div>
      <div className={click ? "glyphCompos" : "glyphComposHidden"}>
        <ul>
          <li className="glyphComposTitle">Composants :</li>
        {infos.compo.map(item => {
          return (<li>{item}</li>)
      })}
        </ul>
      </div>
      <button className={click ? "glyphButtonYes" : "glyphButtonNo"} onClick={handleClick}>{!click ? "	⏵" : "⏴"}</button>
    </div>
  );
};

export default Glyph;
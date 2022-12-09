import "./celestialCorridor.css";
import ccPic from "../img/cc/celestialCorridor.png";
import { Link } from "react-router-dom";

const CelestialCorridor = () => {
  return (
    <div className="ccDivContainer">
      <div className="ccDiv">
        <img src={ccPic} alt="ccPic1" className="ccPic" />
        <p>
          Celestial Corridor est disponible à partir du niveau 117. Cependant il
          est recommandé d'être au MINIMUM niveau 120, avec de bons équipements
          avant d'y entrer. L'entrée de la zone se trouve à Aven X:430, Y;369.{" "}
          <br /> Celestial Corridor contient 6 donjons. Chacun d'entre eux à un
          boss et une méchanique différente. Ces donjons sont prévus pour des
          groupes de 5 joueurs. <br /> Comme pour Gate of Pandemonium, vous avez
          3h maximum pour vaincre le boss, après quoi vous serez expulsé du
          donjon. Notez cependant que pour avoir des récompenses, il faut tuer
          le boss en moins de 20 minutes.
        </p>
      </div>
      <div className="ccContent">
        <div className="ccSchedule">
          <p className="ccScheduleTitle">Planning des boss</p>
          <table>
            <tr>
              <td>Lundi</td>
              <td>Aries</td>
              <td>Leo</td>
              <td>Sagittarius</td>
            </tr>
            <tr>
              <td>Mardi</td>
              <td>Aries</td>
              <td>Gemini</td>
              <td>Aquarius</td>
            </tr>
            <tr>
              <td>Mercredi</td>
              <td>Gemini</td>
              <td>Leo</td>
              <td>Libra</td>
            </tr>
            <tr>
              <td>Jeudi</td>
              <td>Fermé</td>
              <td>Fermé</td>
              <td>Fermé</td>
            </tr>
            <tr>
              <td>Vendredi</td>
              <td>Aries</td>
              <td>Libra</td>
              <td>Sagittarius</td>
            </tr>
            <tr>
              <td>Samedi</td>
              <td>Gemini</td>
              <td>Sagittarius</td>
              <td>Aquarius</td>
            </tr>
            <tr>
              <td>Dimanche</td>
              <td>Leo</td>
              <td>Libra</td>
              <td>Aquarius</td>
            </tr>
          </table>
        </div>
        <div>
          <p className="ccBossImgsTitle">Cliquez pour voir le détail.</p>
          <div className="ccBossImgs">
            <Link to="libra">
              <div className="libra">
                <p>Libra</p>
              </div>
            </Link>
            <Link to="sagittarius">
              <div className="sagi">
                <p>Sagittarius</p>
              </div>
            </Link>
            <Link to="gemini">
              <div className="gemini">
                <p>Gemini</p>
              </div>
            </Link>
            <Link to="leo">
              <div className="leo">
                <p>Leo</p>
              </div>
            </Link>
            <Link to="aquarius">
              <div className="aqua">
                <p>Aquarius</p>
              </div>
            </Link>
            <Link to="aries">
              <div className="aries">
                <p>Aries</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CelestialCorridor;

import CcBossHeader from "./CcBossHeader";
import bossImg from "../img/cc/ariesBoss.png";
import "./ccBoss.css";
import ariesInfo1 from "../img/cc/ariesInfo1.png";
import ariesInfo2 from "../img/cc/ariesInfo2.png";
import ariesInfo3 from "../img/cc/ariesInfo3.png";
import ariesInfo4 from "../img/cc/ariesInfo4.png";
import ariesInfo5 from "../img/cc/ariesInfo5.png";
import ariesInfo6 from "../img/cc/ariesInfo6.png";

const Aries = () => {
  let teamComp = {
    healer: "Adjudicator / Paladin",
    debuffer: "Berserker",
    dps1: "Blade Master",
    dps2: "Executionner",
    dps3: "Blood Knight / Trainer",
  };
  return (
    <div className="ccBossContainer">
      <CcBossHeader
        name="Aries"
        solo={false}
        dmg="Fire"
        comp={teamComp}
        img={bossImg}
      />
      <div className="ccBossConcent">
        <h3>Méchanique du boss:</h3>
        <ul className="ccBossMecha">
          <li>
            1. Un membre du groupe devra fait le "NPC". Ce joueur devra
            s'occuper d'un mouton lorsque Aries l'invoquera, s'il ne s'en occupe
            pas en moins de 20 secondes, tout le monde mourra. Il y aura un
            message de zone quand elle invoquera le mouton.
          </li>
          <li>Il y a 4 types de moutons : </li>
          <li>
            {`Le "Red Hot Sheep" : Récupérez le buff donné par <Ice Guardian Shepherd> Frosty, et attaquez le mouton.`}{" "}
            <br /> <img src={ariesInfo1} alt="Sheep" />
          </li>
          <li>
            {`Le "Cool Sheep" : Récupérez le buff donné par <Flame Guardian Shepherd> Frosty, et attaquez le mouton.`}{" "}
            <br /> <img src={ariesInfo2} alt="Sheep" />
          </li>
          <li>
            {`Le "Windy Sheep" : Récupérez le buff donné par <Lonely Shepherd> Frosty, et attaquez le mouton.`}{" "}
            <br /> <img src={ariesInfo3} alt="Sheep" />
          </li>
          <li>
            {`Le "Shocking Sheep" : Récupérez le buff donné par <Earth Guardian Shepherd> Frosty, et attaquez le mouton.`}{" "}
            <br /> <img src={ariesInfo4} alt="Sheep" />
          </li>
          <li>
            Vers 75% HP, Aries commencera à utiliser une compétence de renvoi :
            "Fire Shield".
          </li>
          <li>
            <img src={ariesInfo6} alt="" />
            <br /> <img src={ariesInfo5} alt="" />
          </li>
          <li><h3>Notez que :</h3></li>
          <li>Aries ne prendra pas de dégâts pendant que le mouton "spécial" est en vie. <br/> Aries fait de GROS dégâts en FIRE, il est recommandé d'avoir au MINIMUM 75 de résistance au feu.</li>
        </ul>
      </div>
    </div>
  );
};

export default Aries;

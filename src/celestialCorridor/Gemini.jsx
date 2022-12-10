import CcBossHeader from "./CcBossHeader";
import bossImg from "../img/cc/geminiBoss.png";
import "./ccBoss.css";
import geminiInfo from "../img/cc/geminiInfo.png";
import geminiInfo2 from "../img/cc/geminiInfo2.png";
import geminiStatues1 from "../img/cc/geminiStatues1.png";
import geminiStatues2 from "../img/cc/geminiStatues2.png";
import geminiStatues3 from "../img/cc/geminiStatues3.png";
import geminiStatues4 from "../img/cc/geminiStatues4.png";
import geminiInfo3 from "../img/cc/geminiInfo3.png";

const Gemini = () => {
  let teamComp = {
    healer: "Adjudicator",
    debuffer: "Berserker",
    dps1: "Blade Master",
    dps2: "Executionner",
    dps3: "Assassin",
  };
  return (
    <div className="ccBossContainer">
      <CcBossHeader
        name="Gemini"
        solo={false}
        dmg="Holy, Dark"
        comp={teamComp}
        img={bossImg}
      />
      <div className="ccBossConcent">
      <h3>{localStorage.getItem('language') === 'EN' ? "Boss mechanics :" : 'Méchanique du boss:'}</h3>
        <ul className="ccBossMecha">
          <li>{`1. Holy Twin et Dark Twin doivent être séparés (En utilisant la poussée du Berserker par exemple), sinon ils vous retireront 5% de vos MP par secondes.`}</li>
          <li>2. Le donjon se déroule en plusieurs "étapes" :</li>
          <li>
            <img src={geminiInfo} alt="The Dark Swin Spirit" />
          </li>
          <li>
            3. Il y a 4 statues différentes, qu'il faudra désactiver
            lorsqu'elles envoie du feu ou de la glace.
          </li>
          <li>
            <img src={geminiInfo2} alt="" />
          </li>
          <li>
            Pour les désactiver, il faut aller à la statue qui correspond :
          </li>
          <li>
            La statue 1 contrôle la statue 4 <br /> La statue 2 contrôle la
            statue 3 <br /> La statue 3 contrôle la statue 1 <br /> La statue 4
            contrôle la statue 2
          </li>
          <li>
            <img src={geminiStatues1} alt="Statues" />
          </li>
          <li>
            <img src={geminiStatues2} alt="Statues" />
          </li>
          <li>
            <img src={geminiStatues3} alt="Statues" />
          </li>
          <li>
            <img src={geminiStatues4} alt="Statues" />
          </li>
          <li>
            4. "Dark Twin" vous appliquera un débuff : "Enter Darkness". Ce
            débuff restera 2s, après quoi une flaque violette apparaîtra à vos
            pieds. Elle fera de gros dégâts à vous et vos alliés. Essayez de
            vous éloigner du groupe quand vous avez ce débuff !
          </li>
          <li>
            <img src={geminiInfo3} alt="Enter Darkness" />
          </li>
          <li>
            <h3>Notez que :</h3>
          </li>
          <li>
            Gemini est immunisé aux dégâts de type DARK. <br /> Il y aura un
            message en zone à chaque fois qu'une statue est activée, le message
            vous fera savoir quel élément est activé. Il est recommandé que tout
            les membres du groupes, sauf le healer, courrent vers une statue
            pour les activer au plus vite. <br /> "Light Twin" peut vous tirer
            vers lui et vous stun. <br /> Les Twins doivent être tués à 30
            secondes maximum d'intervale. <br/> Il est conseillé d'avoir entre 70 et 85 de résistances au Holy et Dark.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Gemini;

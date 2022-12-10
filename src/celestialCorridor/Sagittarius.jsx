import CcBossHeader from "./CcBossHeader";
import bossImg from "../img/cc/SagiBoss.png";
import "./ccBoss.css";
import sagiInfo from "../img/cc/sagiInfo.png";
import sagiInfo2 from "../img/cc/sagiInfo2.png";
import sagiInfo3 from "../img/cc/sagiInfo3.png";

const Sagittarius = () => {
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
        name="Sagittarius"
        solo={false}
        dmg="Pierce"
        comp={teamComp}
        img={bossImg}
      />
      <div className="ccBossConcent">
        <h3>
          {localStorage.getItem("language") === "EN"
            ? "Boss mechanics :"
            : "Méchanique du boss:"}
        </h3>
        <ul className="ccBossMecha">
          <li>
            1. Toutes les 35 secondes, Sagittarius va recevoir un buff : "Rage
            of the Archer". La prochaine personne qui l'attequera recevra un
            debuff : "Holy Bomb", pendant 3s. Après ces 3s les membres du
            groupes à moins de 10 mètres mourront. Il faut donc faire attention
            à ce débuff et s'éloigner du groupe quand vous l'avez.
          </li>
          <li>
            {" "}
            <img src={sagiInfo} alt="Archer Spirit" />
          </li>
          <li>
            2. Sagittarius invoquera des tourelles de manière aléatoire et ce
            pendant 8 secondes, tant qu'elles sont actives, Sagittarius ne
            prendra pas de dégats.
          </li>
          <li>
            <img src={sagiInfo2} alt="Magic Arrows" />
          </li>
          <li>
            Notez que Sagittarius est immunisée aux dégats persée. <br /> Il est
            conseillé de faire prendre la Flame protection à l'Executionner, et
            la Frost protection au Healer. Les autres classes peuvent prendre ce
            qu'elles veulent.
          </li>
          <li>
            <img src={sagiInfo3} alt="Elemental Protections" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sagittarius;
